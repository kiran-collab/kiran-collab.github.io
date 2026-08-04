---
title: "SWiDir — Walking Direction Estimation with Passive WiFi Sensing"
permalink: /projects/swidir/
layout: single
author_profile: true
---

{% include project-detail.html %}

<div class="pd" markdown="1">

<p class="pd-deck">Indoor dead reckoning fails because a phone does not point where its owner walks. SWiDir corrects that misalignment using passive WiFi sensing and a training-free Fresnel zone model, cutting 75th-percentile direction error to 8.89° — 64% below the prior state of the art. Published at IEEE MASS 2023.</p>

<p class="pd-links">
<a class="back" href="/projects/">← All projects</a>
<a href="https://drive.google.com/file/d/1DKiSTapNdCezKOrGg1TwPvvLU7-wScef/view?usp=share_link">Paper (PDF)</a>
<a href="https://github.com/kiran-collab/SWidir">Code</a>
</p>

What it does
======

SWiDir estimates which direction a person is actually **walking**, as opposed to which direction their phone happens to be **facing**. It deploys a small set of WiFi devices to form a "correction zone"; when a user passes through it, passive CSI observations infer the true movement direction and correct the smartphone's own estimate. The corrected heading is then usable by a dead-reckoning localisation system.

Why — the motivation
======

Indoor positioning has no GPS, so pedestrian dead reckoning is the fallback: track steps, track heading, integrate. It is cheap, works on any phone, and needs no infrastructure — and it has one dominant error source.

**Heading is estimated from the phone's inertial sensors, so it measures the phone's orientation, not the person's trajectory.** People hold phones in front of them, at their side, in a pocket, angled while reading, rotated while talking. Every one of those introduces a bias between phone direction and walking direction.

That bias is not noise, and this is the crucial point: **it is systematic and it integrates**. Dead reckoning accumulates heading error into position error over distance, so a persistent offset of even a few degrees compounds into metres of drift. Better filtering does not fix a bias; you need an external observation of true direction to correct against.

Intuition behind the approach
======

Between a WiFi transmitter and receiver, the space is structured into **Fresnel zones** — a family of concentric ellipsoids with the two devices at the foci. As a body crosses these boundaries, the reflected path length changes in a way that produces a characteristic, periodic signature in the received signal.

The insight SWiDir exploits is geometric: **the pattern of Fresnel zone crossings depends on the angle at which the body cuts through them.** Someone walking perpendicular to the transmitter–receiver line crosses many zones quickly; someone walking parallel crosses few and slowly. The crossing signature therefore encodes the direction of travel, not merely the presence of motion.

That geometry is the reason the method can be **training-free**. The relationship between movement angle and Fresnel crossing pattern follows from the physical layout rather than from data, so there is no model to fit and no per-environment training set to collect. Given the deployment story — install a few devices in a corridor and have it work — that property is worth more than a few points of accuracy from a learned model that would need retraining in every new building.

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 170" aria-label="Fresnel zones between two WiFi devices with a walker crossing at an angle">
<ellipse class="gh" cx="200" cy="85" rx="150" ry="26"/>
<ellipse class="gh" cx="200" cy="85" rx="150" ry="46"/>
<ellipse class="gh" cx="200" cy="85" rx="150" ry="64"/>
<ellipse class="gh" cx="200" cy="85" rx="150" ry="80"/>
<rect class="b" x="18" y="72" width="42" height="26" rx="3"/><text class="ts" x="39" y="88">TX</text>
<rect class="b" x="340" y="72" width="42" height="26" rx="3"/><text class="ts" x="361" y="88">RX</text>
<path class="a2" d="M150 158 L246 22"/>
<circle class="fr" cx="176" cy="122" r="6"/>
<text class="ts" x="272" y="30">walking path</text>
<text class="ts" x="200" y="166">crossing pattern encodes the angle, not just the motion</text>
</svg>
<figcaption>Concentric Fresnel zones. The rate and order in which a body crosses them is a function of its direction of travel — which is what makes a training-free geometric model possible.</figcaption>
</figure>

How it works
======

1. **Deploy a correction zone.** A small set of WiFi devices is placed to create a region with usable Fresnel geometry — in the reported testbed, four Raspberry Pis forming a large zone.
2. **Sense passively.** As a user walks through, CSI is observed. Nothing is required of the user and nothing is transmitted by the phone for the purpose.
3. **Infer true direction geometrically.** The Fresnel zone model maps the observed crossing signature to a movement direction, using the geometric relationship between the walking vector and the zone boundaries.
4. **Correct the smartphone estimate.** The inferred direction is fused with the phone's own inertial heading, removing the phone-versus-body misalignment.

The system is explicitly a **hybrid**: active smartphone sensing supplies continuous dead reckoning everywhere, and sparse passive WiFi observations supply the periodic ground truth that keeps it from drifting. Neither half is sufficient alone — the phone drifts, and the WiFi zone only covers the corridor where it is installed.

Architecture
======

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 140" aria-label="SWiDir hybrid architecture combining phone inertial heading with WiFi correction">
<rect class="b" x="6" y="14" width="96" height="34" rx="4"/><text class="ts" x="54" y="29">smartphone IMU</text><text class="ts" x="54" y="41">steps + heading</text>
<rect class="b3" x="6" y="86" width="96" height="34" rx="4"/><text class="ts" x="54" y="101">WiFi CSI</text><text class="ts" x="54" y="113">correction zone</text>
<path class="a" d="M104 31 H150"/>
<path class="a3" d="M104 103 H128"/>
<rect class="b4" x="130" y="84" width="86" height="38" rx="4"/><text class="ts" x="173" y="99">Fresnel zone</text><text class="ts" x="173" y="111">model (no training)</text>
<path class="a3" d="M218 100 L246 60"/>
<rect class="b2" x="152" y="14" width="96" height="34" rx="4"/><text class="ts" x="200" y="29">misalignment</text><text class="ts" x="200" y="41">correction</text>
<path class="a" d="M250 31 H286"/>
<rect class="b" x="288" y="14" width="106" height="34" rx="4"/><text class="ts" x="341" y="29">corrected heading</text><text class="ts" x="341" y="41">→ dead reckoning</text>
<text class="ts" x="200" y="136">continuous but drifting · sparse but unbiased</text>
</svg>
<figcaption>The phone provides continuity, the WiFi zone provides an unbiased anchor. The correction is applied where the two meet.</figcaption>
</figure>

Technical specifications
======

<table class="pd-spec">
<tr><td>Sensing modality</td><td>Passive WiFi CSI, plus smartphone inertial sensing</td></tr>
<tr><td>Testbed</td><td>4 Raspberry Pis forming a single large correction zone</td></tr>
<tr><td>Core model</td><td>Training-free WiFi Fresnel zone model</td></tr>
<tr><td>Learned components</td><td>None — direction is derived geometrically</td></tr>
<tr><td>Evaluation</td><td>5 participants across 2 real environments</td></tr>
<tr><td>Target application</td><td>Pedestrian dead reckoning for indoor localisation</td></tr>
<tr><td>Venue</td><td>IEEE International Conference on Mobile Ad Hoc and Smart Systems (MASS), 2023</td></tr>
</table>

Optimizations and results
======

<table class="pd-res">
<thead><tr><th>Approach</th><th class="num">75th-percentile direction error</th><th>Relative</th></tr></thead>
<tbody>
<tr><td>Prior state of the art</td><td class="num">≈ 24.7°</td><td>baseline</td></tr>
<tr class="win"><td>SWiDir</td><td class="num">8.89°</td><td>64% lower error</td></tr>
</tbody>
</table>

<div class="pd-note" markdown="1">
**Reading that table honestly.** The reported result is *8.89° average 75th-percentile error, 64% lower than state-of-the-art existing approaches.* The baseline figure above is the value implied by that 64% reduction, shown for scale — the paper is the authority on the exact comparison set.
</div>

Two things about the metric choice are worth drawing out:

- **75th percentile rather than mean.** Direction estimation produces occasional large errors when a crossing is ambiguous, and a mean would let a good median hide them. Reporting a high percentile commits to the behaviour of the bad cases, which is what a downstream localisation system actually suffers from.
- **Degrees of heading, not metres of position.** Position error depends on how far the user walks after the correction, so it would conflate this contribution with the rest of the dead-reckoning stack. Heading error isolates what SWiDir actually changes.

**What was optimised, and against what.** The design target was not raw accuracy in a tuned lab setup but *unbiased* direction under realistic phone handling, without per-environment training. The 64% reduction came from replacing a learned or heuristic heading correction with an explicit geometric model of the sensing physics — which is also why the result holds across two environments rather than one.

Limitations and honest caveats
======

- **Five participants, two environments.** Enough to demonstrate the geometry generalises beyond a single room; not enough to characterise behaviour across gait, pace, and body types.
- **Correction is zone-local.** The system fixes heading where a correction zone exists. Between zones, dead reckoning drifts as before — this is an anchoring method, not a continuous one.
- **Fresnel geometry assumes a reasonably clean line of sight.** Heavy multipath or obstruction degrades the crossing signature the model depends on.

<p class="pd-foot"><em>SWiDir: Enhancing Smartphone-based Walking Direction Estimation with Passive WiFi Sensing</em>, IEEE MASS 2023. Back to <a href="/projects/">all projects</a>.</p>

</div>
