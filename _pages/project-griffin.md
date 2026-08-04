---
title: "Griffin — Collaborative Drone–Car Road Event Detection"
permalink: /projects/griffin/
layout: single
author_profile: true
---

{% include project-detail.html %}

<div class="pd" markdown="1">

<p class="pd-deck">A drone sees the road far better than a car does, and can compute far less. Griffin is a middleware layer that splits each video frame between the two, deciding partition by partition where the work should run — minimising drone energy while holding latency and accuracy targets.</p>

<p class="pd-links">
<a class="back" href="/projects/">← All projects</a>
<a href="https://drive.google.com/file/d/1AiJLYfZRTlw3ID_MDAoul3_plD1E9NM3/view?usp=share_link">Paper (PDF)</a>
<a href="https://drive.google.com/file/d/1HZzd6dDWaV-agRxN0BtVJxJWthMUIzy5/view?usp=share_link">Poster</a>
<a href="https://github.com/kiran-collab/Griffin">Code</a>
</p>

What it does
======

Griffin is a middleware framework for **real-time road event detection using a UAV and a ground vehicle working together**. The drone captures aerial video; Griffin partitions each frame and decides, per partition, whether it is processed on the drone or offloaded to the ground vehicle. An optimiser makes that assignment continuously, trading energy against latency and accuracy. Two applications are demonstrated on top of it: collision detection and lane-change detection.

Why — the motivation
======

The two platforms have exactly complementary deficits.

**A ground vehicle has compute but not perspective.** Car-mounted sensors see from roughly a metre off the ground, in traffic, with vehicles occluding each other. Events that matter — a car drifting across lanes four vehicles ahead, a developing collision geometry — are frequently outside what that vantage point can resolve.

**A drone has perspective but not compute.** From above, the scene is essentially unoccluded and the geometry of an event is legible. But as the repository puts it, *"UAVs have limited computing and energy resources, making them unsuitable for computationally intensive image processing tasks."* Running a detector on every frame onboard drains the battery that is also keeping the aircraft airborne.

The naive fixes both fail. Process everything onboard and flight time collapses. Stream every frame to the ground and you pay a communication cost that is itself energy-expensive and adds latency to a task where latency is the whole point. **The interesting design space is in between**, and that is what Griffin occupies.

Intuition behind the approach
======

The observation that makes this tractable: **not all of a frame is equally worth computing.**

An aerial road frame is mostly not where the event is. Empty asphalt, verge, rooftops, sky — large regions contribute nothing to detecting a collision or a lane change. The vehicles, and specifically the vehicles whose trajectories are converging, carry nearly all the information.

So the frame should not be treated as an atomic unit to run or offload. **Partition it, and decide per partition** — because the partitions differ enormously in how much they matter and how much they cost.

Once you accept that framing, the offload decision becomes an explicit optimisation rather than a heuristic. Each partition has an estimated criticalness to the event being detected, a compute cost, a transmission cost, and a latency implication. Choosing an assignment across all partitions that minimises drone energy subject to latency and accuracy constraints is a solvable problem — and it can be re-solved as conditions change, which matters because the drone's speed, the link quality, and where the vehicles are all move continuously.

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 180" aria-label="Frame partitioned with critical regions processed on drone and rest offloaded">
<rect class="bg" x="10" y="14" width="150" height="100" rx="3"/>
<path class="gh" d="M60 14 V114 M110 14 V114 M10 47 H160 M10 80 H160"/>
<rect class="b2" x="60" y="47" width="50" height="33" fill="#fbeae7" stroke="#b83227"/>
<rect class="b2" x="110" y="47" width="50" height="33" fill="#fbeae7" stroke="#b83227"/>
<text class="ts" x="85" y="128">aerial frame, partitioned</text>
<text class="ts" x="85" y="140">red = critical to the event</text>
<path class="a2" d="M166 50 L228 32"/><text class="ts" x="196" y="26">keep local</text>
<path class="a" d="M166 92 L228 116"/><text class="ts" x="196" y="132">offload</text>
<rect class="b" x="232" y="14" width="76" height="36" rx="4"/><text class="ts" x="270" y="29">UAV</text><text class="ts" x="270" y="41">Jetson TX2</text>
<rect class="b3" x="232" y="100" width="76" height="36" rx="4"/><text class="ts" x="270" y="115">ground vehicle</text><text class="ts" x="270" y="127">edge server</text>
<path class="a" d="M310 32 H340"/><path class="a" d="M310 118 H340"/>
<rect class="b4" x="342" y="56" width="54" height="40" rx="4"/><text class="ts" x="369" y="72">event</text><text class="ts" x="369" y="84">detection</text>
<path class="l" d="M340 34 L342 60 M340 116 L342 92"/>
<text class="ts" x="200" y="166">the optimiser re-solves this assignment as conditions change</text>
</svg>
<figcaption>Partitions are not equal. Griffin exploits that by making the offload decision per partition rather than per frame.</figcaption>
</figure>

How it works
======

The offload decision is driven by four inputs, per the system description:

1. **Partition criticalness to event detection** — how much this region is likely to matter for the event being watched for.
2. **Real-time system status** — current energy budget, link conditions, and load on both endpoints.
3. **Previous processing results** — what was found in prior frames, which informs where the action currently is.
4. **Energy–latency–accuracy trade-offs** — the constraint surface the optimiser works within.

The optimiser then *"solves the partition distribution problem to minimize UAV energy consumption while meeting application requirements for latency and accuracy."* Energy is the objective; latency and accuracy are constraints. That ordering is the design statement — the system is not trying to be maximally accurate, it is trying to be **as cheap as possible while still being good enough and fast enough**, because flight time is the scarce resource.

Supporting components handle the fact that both platforms are moving:

- **Ground vehicle speed detection** via YOLOv8 tracking.
- **Drone motion estimation** via Lucas–Kanade optical flow, so apparent motion in the frame can be separated from the drone's own movement — without this, every object appears to move and trajectory reasoning breaks down.
- **Energy consumption monitoring** using Jetson Power tooling, which closes the loop by measuring the quantity being optimised rather than modelling it.

Architecture
======

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 200" aria-label="Griffin middleware architecture across UAV and ground vehicle">
<rect class="gh" x="6" y="6" width="180" height="88" rx="4"/><text class="ts" x="96" y="20">UAV — Jetson TX2</text>
<rect class="b" x="16" y="28" width="76" height="24" rx="3"/><text class="ts" x="54" y="43">capture</text>
<rect class="b" x="100" y="28" width="76" height="24" rx="3"/><text class="ts" x="138" y="43">partition</text>
<rect class="b2" x="16" y="60" width="76" height="24" rx="3"/><text class="ts" x="54" y="75">local inference</text>
<rect class="b4" x="100" y="60" width="76" height="24" rx="3"/><text class="ts" x="138" y="75">energy monitor</text>

<rect class="gh" x="214" y="6" width="180" height="88" rx="4"/><text class="ts" x="304" y="20">Ground vehicle — edge server</text>
<rect class="b3" x="224" y="28" width="76" height="24" rx="3"/><text class="ts" x="262" y="43">offloaded inference</text>
<rect class="b3" x="308" y="28" width="76" height="24" rx="3"/><text class="ts" x="346" y="43">YOLOv8 speed</text>
<rect class="b3" x="224" y="60" width="160" height="24" rx="3"/><text class="ts" x="304" y="75">optical flow · drone motion estimation</text>

<path class="a" d="M188 50 H212"/><path class="a" d="M212 72 H188"/>
<text class="ts" x="200" y="44">partitions</text><text class="ts" x="200" y="92">results</text>

<rect class="b4" x="90" y="112" width="220" height="30" rx="4"/><text class="ts" x="200" y="131">optimiser — minimise UAV energy s.t. latency, accuracy</text>
<path class="a" d="M138 96 V110"/><path class="a" d="M262 96 V110"/>
<path class="dl" d="M200 144 V158"/>
<rect class="b" x="110" y="160" width="180" height="26" rx="4"/><text class="ts" x="200" y="177">collision detection · lane change detection</text>
</svg>
<figcaption>Middleware sits between two moving platforms, continuously re-deciding where each partition of each frame should be processed.</figcaption>
</figure>

Technical specifications
======

<table class="pd-spec">
<tr><td>Drone platform</td><td>NVIDIA Jetson TX2</td></tr>
<tr><td>Ground platform</td><td>Edge server on the ground vehicle</td></tr>
<tr><td>Detection models</td><td>YOLOv8 (vehicle detection and tracking); YOLOv5 fine-tuned on VisDrone</td></tr>
<tr><td>Drone motion estimation</td><td>Lucas–Kanade optical flow</td></tr>
<tr><td>Energy measurement</td><td>Jetson Power tooling, measured rather than modelled</td></tr>
<tr><td>Optimiser objective</td><td>Minimise UAV energy consumption</td></tr>
<tr><td>Optimiser constraints</td><td>Application latency and accuracy requirements</td></tr>
<tr><td>GriffinWild dataset</td><td>≈ 500 high-quality drone-view road videos</td></tr>
<tr><td>Griffin-Dataset</td><td>≈ 500 video streams with annotated vehicle speeds</td></tr>
<tr><td>Demonstrated applications</td><td>Collision detection; lane change detection</td></tr>
</table>

Optimizations and results
======

**What is being optimised.** Unusually for a perception system, accuracy is a *constraint* rather than the objective. The optimiser minimises drone energy consumption subject to meeting the application's latency and accuracy requirements. The claim being made is therefore not "more accurate than a baseline detector" but "**the same task, at materially lower UAV energy, within the same real-time budget**" — which is the metric that determines whether the drone can stay in the air long enough to be useful.

**The baselines this is measured against** are the two endpoints of the design space it sits between:

- *All-onboard processing* — no offload. Highest energy on the drone, no transmission cost, latency bounded by TX2 throughput.
- *All-offload* — every frame streamed to the ground vehicle. Minimal compute energy on the drone but maximal communication energy and latency, and dependent on link quality.

Griffin's partition-level assignment is the middle path, and the contribution is showing that the middle is meaningfully better than either extreme because partitions genuinely differ in criticalness.

**Two engineering choices that make the numbers real rather than simulated:** energy is *measured* on the Jetson rather than estimated from a model, and the evaluation runs on the actual heterogeneous hardware pair rather than in emulation. Both matter, because offloading research is easy to make look good in simulation where communication cost is assumed rather than paid.

<div class="pd-gap" markdown="1">
**Numbers to fill in.** The specific energy-reduction and latency figures live in the paper and poster rather than the public repository, so I have deliberately not quoted them here rather than reconstruct them from memory. If you send me the headline numbers — energy saved versus all-onboard, end-to-end latency, and detection accuracy on the two applications — I will drop them into a results table in the same format as the other project pages.
</div>

Limitations and honest caveats
======

- **Two moving platforms means the geometry is never static.** Optical flow compensation handles drone egomotion, but sustained accuracy depends on that estimate staying good through manoeuvres and wind.
- **The link is a hard dependency.** Offload assumes a usable channel to the ground vehicle; degradation pushes the system toward the all-onboard extreme it was designed to avoid.
- **Criticalness estimation is the weak point of any partition-level scheme.** If a partition is misjudged as unimportant, the event in it is missed — and that failure is silent, which is the worst kind.

<p class="pd-foot">Work with Prof. Zheng Song, University of Michigan. Back to <a href="/projects/">all projects</a>.</p>

</div>
