---
title: "BMEye — BMI Monitoring Using Commodity WiFi"
permalink: /projects/bmeye/
layout: single
author_profile: true
---

{% include project-detail.html %}

<div class="pd" markdown="1">

<p class="pd-deck">Classifying a person's BMI range from the way their body perturbs ordinary WiFi signals — no camera, no wearable, no scale. Published at IEEE WF-IoT 2023, and to our knowledge the first work to show BMI classification is feasible on commodity WiFi hardware.</p>

<p class="pd-links">
<a class="back" href="/projects/">← All projects</a>
<a href="https://ieeexplore.ieee.org/document/10539515/">IEEE Xplore</a>
<a href="https://drive.google.com/file/d/1JWK-cM5xT7O-lAuwfAiJcKRPLSYMdu9g/view?usp=share_link">Paper (PDF)</a>
<a href="https://github.com/kiran-collab/CSIKit-BMEye">Code</a>
<a href="https://drive.google.com/file/d/1O4tS-Qrpfxc6nQA-L1zBzoVZg0EM_-a9/view?usp=share_link">Demo video</a>
</p>

What it does
======

BMEye estimates a person's **BMI category** as they walk between two commodity WiFi devices. It captures Channel State Information (CSI) from the link, renders that signal as a two-dimensional heatmap, and classifies the heatmap with a deep residual network. The output is a BMI range rather than a point estimate — which is the right granularity for the public-health screening use case it targets.

Why — the motivation
======

Population-level BMI monitoring is useful and hard to collect. The existing options each fail in a different way:

- **Scales and clinical measurement** are accurate but require active participation, so you only measure people who already engage with the health system.
- **Camera-based estimation** works passively but is unacceptable in most of the places you would want to deploy it — clinic corridors, care homes, workplaces — for obvious privacy reasons.
- **Wearables** require adoption and charging, which self-selects the population you are trying to survey.

WiFi sensing is attractive precisely because it inherits none of those constraints. The infrastructure is already installed nearly everywhere, it captures no imagery, and it requires nothing at all from the person being measured. The open question this work answers is whether the signal carries enough body-shape information for BMI to be recoverable at all.

Intuition behind the approach
======

A human body is a large, mostly-water obstacle in a 2.4/5 GHz field. When someone walks through the space between a transmitter and receiver, they attenuate some propagation paths, reflect others, and shift the multipath structure of the channel. CSI records that structure per subcarrier, per antenna, over time.

The insight is that **body mass and body shape change the pattern, not just the magnitude, of that disturbance**. A larger body occludes more paths, reflects differently, and takes longer to traverse the sensing zone. Those effects are jointly encoded across the subcarrier–time surface.

That framing suggests the modelling choice. Rather than hand-engineering features from the raw complex-valued CSI, render the subcarrier–time surface as an image and let a vision model find the discriminative structure. This converts an unfamiliar signal-processing problem into a very familiar image-classification one, where strong pretrained backbones and a large body of training practice already exist.

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 130" aria-label="Person walking between WiFi devices, CSI captured and rendered as a heatmap">
<rect class="b" x="8" y="46" width="56" height="34" rx="4"/><text class="ts" x="36" y="62">WiFi TX</text><text class="ts" x="36" y="74">router</text>
<rect class="b" x="140" y="46" width="56" height="34" rx="4"/><text class="ts" x="168" y="62">WiFi RX</text><text class="ts" x="168" y="74">Raspberry Pi</text>
<path class="dl" d="M66 56 H138"/><path class="dl" d="M66 70 H138"/>
<circle class="fr" cx="102" cy="30" r="7"/><path class="fr" d="M92 52 a10 12 0 0 1 20 0 z"/>
<path class="a2" d="M102 44 V62"/>
<text class="ts" x="102" y="94">body perturbs the paths</text>
<path class="a" d="M200 63 H228"/>
<rect class="bg" x="232" y="34" width="72" height="58" rx="3"/>
<rect class="b3" x="238" y="40" width="10" height="46"/><rect class="b" x="250" y="52" width="10" height="34"/>
<rect class="b2" x="262" y="44" width="10" height="42"/><rect class="b3" x="274" y="58" width="10" height="28"/>
<rect class="b" x="286" y="48" width="12" height="38"/>
<text class="ts" x="268" y="106">CSI heatmap</text><text class="ts" x="268" y="118">subcarrier × time</text>
<path class="a" d="M308 63 H334"/>
<rect class="b4" x="338" y="46" width="56" height="34" rx="4"/><text class="ts" x="366" y="62">ResNet-50</text><text class="ts" x="366" y="74">BMI class</text>
</svg>
<figcaption>The sensing setup and the representational move that makes it tractable: treat the subcarrier–time CSI surface as an image.</figcaption>
</figure>

How it works
======

The pipeline has three stages, matching the repository layout:

1. **Capture.** A person walks through the sensing zone between the WiFi devices. CSI is logged from the receiver as `.pcap` / `.dat` traces.
2. **Convert.** The traces are transformed into 2-D heatmap images over subcarriers and time. This is where the raw complex channel measurements become something a convolutional network can consume.
3. **Classify.** A ResNet-50 consumes the heatmap and outputs a BMI range. Training uses per-class heatmap sets organised by BMI category.

Data was collected from **30 subjects**, which is the practical bottleneck in work of this kind — every additional subject is a scheduling problem, not a compute problem.

Architecture
======

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 96" aria-label="BMEye pipeline from CSI capture to BMI class">
<rect class="b" x="4" y="30" width="66" height="36" rx="4"/><text class="ts" x="37" y="45">CSI capture</text><text class="ts" x="37" y="57">.pcap / .dat</text>
<path class="a" d="M72 48 H90"/>
<rect class="b" x="92" y="30" width="66" height="36" rx="4"/><text class="ts" x="125" y="45">parse +</text><text class="ts" x="125" y="57">denoise</text>
<path class="a" d="M160 48 H178"/>
<rect class="b3" x="180" y="30" width="66" height="36" rx="4"/><text class="ts" x="213" y="45">heatmap</text><text class="ts" x="213" y="57">rendering</text>
<path class="a" d="M248 48 H266"/>
<rect class="b4" x="268" y="24" width="66" height="48" rx="4"/><text class="ts" x="301" y="42">ResNet-50</text><text class="ts" x="301" y="54">pretrained</text><text class="ts" x="301" y="66">backbone</text>
<path class="a" d="M336 48 H354"/>
<rect class="b2" x="356" y="30" width="42" height="36" rx="4"/><text class="ts" x="377" y="45">BMI</text><text class="ts" x="377" y="57">class</text>
<text class="ts" x="200" y="88">signal domain → image domain → vision model</text>
</svg>
<figcaption>The architectural decision is the middle step. Everything downstream is standard image classification.</figcaption>
</figure>

The design deliberately keeps the learned component conventional. The contribution is the **representation and the demonstration of feasibility**, not a novel network — so using a well-understood backbone makes the result easier to attribute to the sensing idea rather than to architectural tricks.

Technical specifications
======

<table class="pd-spec">
<tr><td>Sensing modality</td><td>WiFi Channel State Information from commodity hardware</td></tr>
<tr><td>Receiver platform</td><td>Raspberry Pi with commercial WiFi devices</td></tr>
<tr><td>Raw capture format</td><td><code>.pcap</code> / <code>.dat</code> CSI traces</td></tr>
<tr><td>Input representation</td><td>2-D heatmap over subcarriers × time</td></tr>
<tr><td>Model</td><td>ResNet-50 (deep residual network), PyTorch</td></tr>
<tr><td>Task</td><td>Multi-class classification into BMI ranges</td></tr>
<tr><td>Subjects</td><td>30</td></tr>
<tr><td>Venue</td><td>IEEE 9th World Forum on Internet of Things (WF-IoT), 2023</td></tr>
</table>

Optimizations and results
======

<table class="pd-res">
<thead><tr><th>Metric</th><th class="num">Result</th><th>Note</th></tr></thead>
<tbody>
<tr class="win"><td>F1 score (test set)</td><td class="num">73.66%</td><td>Multi-class BMI range classification</td></tr>
</tbody>
</table>

**On the choice of F1 rather than accuracy.** BMI categories are not uniformly distributed in any realistic subject pool — a recruited cohort skews toward the middle ranges. Accuracy rewards a classifier that simply predicts the majority class; F1 does not. Reporting F1 is the honest metric for this data shape, and it is the number to compare against if you extend the work.

**The baseline that matters here is feasibility, not a competing system.** At publication there was no prior commodity-WiFi BMI classifier to benchmark against — the contribution was establishing that the signal carries recoverable BMI information at all. That framing sets the bar for follow-on work: the interesting comparison is now against 73.66% F1, on more subjects.

<div class="pd-note" markdown="1">
**Where this went next.** The natural objection to a centralised version of this system is that CSI traces are collected in people's spaces and shipped somewhere for training. Follow-up work addressed exactly that with a **proximal federated learning** scheme for WiFi-based BMI monitoring — keeping data local while handling the heterogeneity that arises when every deployment site has a different room geometry. That direction matters more than another point of F1, because privacy is the actual barrier to deployment.
</div>

Limitations and honest caveats
======

- **30 subjects is a feasibility cohort, not a population.** Generalisation across body types, gait, clothing, and demographics is unestablished at this scale.
- **Environment sensitivity is the known weakness of WiFi sensing.** Room geometry, furniture, and device placement all shape the multipath structure, so a model trained in one space should not be assumed to transfer to another without adaptation.
- **Classification, not measurement.** The system outputs a range. It is a screening signal, not a clinical instrument, and framing it otherwise would overclaim.

<p class="pd-foot">Davuluri, Mottakin, Song, Lu, Allison — <em>BMEye: Public Health-Oriented Body Mass Index Monitoring Using Commodity WiFi</em>, IEEE WF-IoT 2023. Back to <a href="/projects/">all projects</a>.</p>

</div>
