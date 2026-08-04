---
title: "SAIND — Scene Animation using RGB Images and Depth Maps"
permalink: /projects/saind/
layout: single
author_profile: true
---

{% include project-detail.html %}

<div class="pd" markdown="1">

<p class="pd-deck">Turning a single still photograph into an animated, anime-styled scene — by recovering depth the image never recorded, fusing it back with the colour information, and stylising the result. The depth channel is what separates this from a filter.</p>

<p class="pd-links">
<a class="back" href="/projects/">← All projects</a>
<a href="https://drive.google.com/file/d/1C4xcUEtoDAojNvhtNKno31vqIitxZUj6/view?usp=share_link">Report (PDF)</a>
<a href="https://github.com/kiran-collab/SAIND">Code</a>
</p>

What it does
======

SAIND takes a static RGB image and produces an animated, stylised version of the same scene. It does this by first inferring structure the photograph does not contain — a dense depth map — then combining that geometry with the original colour image through a fusion step, and finally applying anime-style transfer to the fused representation.

Why — the motivation
======

Style transfer applied directly to a photograph is a **2-D operation on a 3-D scene**. It has no notion of what is near and what is far, so it treats a foreground subject and a distant background as the same kind of surface. The results look like a texture pasted over the image, and they break in the specific ways you would predict: object boundaries smear, background detail receives the same stylistic weight as the subject, and any attempt at motion produces warping rather than parallax.

Animation makes the problem sharper still. Convincing motion in a scene is largely a **depth phenomenon** — near things move across the field of view faster than far things. Without a depth estimate there is no principled way to produce that, so single-image animation tends to be either a global pan or a warp that visibly distorts.

The motivating claim is therefore: **recover the missing dimension first, and both problems become better posed.** Depth gives the stylisation a sense of what belongs to which surface, and gives the animation a basis for differential motion.

Intuition behind the approach
======

The pipeline is built around one idea: **depth estimation from a single image is easier if you first tell the model where the edges are.**

Monocular depth is fundamentally ambiguous — infinitely many 3-D scenes project to the same 2-D image. What resolves it in practice is structural cues, and **discontinuities in depth almost always coincide with edges in the image**. An object boundary is simultaneously a colour edge and a depth step. So an explicit edge map is not redundant with the RGB input; it is a prior that tells the depth model exactly where it is permitted to be discontinuous.

That is why the pipeline runs edge detection *before* depth estimation and feeds both into the depth model, rather than predicting depth from RGB alone. The edge map does not add information about the scene — it makes the information already present easier for the model to use.

The second design idea is in the fusion step. RGB and depth are different kinds of signal: one is appearance, one is geometry. **The project's EnGD algorithm combines them into a joint representation** before stylisation, so the style transfer operates on something that carries both — rather than styling appearance and hoping geometry survives.

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 140" aria-label="Edge map constrains where depth is allowed to be discontinuous">
<rect class="bg" x="10" y="16" width="104" height="76" rx="3"/>
<circle class="fa" cx="52" cy="58" r="20"/><rect class="fg" x="76" y="60" width="30" height="30"/>
<text class="ts" x="62" y="106">RGB image</text>
<path class="a" d="M120 54 H144"/>
<rect class="bg" x="148" y="16" width="104" height="76" rx="3"/>
<circle cx="190" cy="58" r="20" fill="none" stroke="#2f3640" stroke-width="1.6"/>
<rect x="214" y="60" width="30" height="30" fill="none" stroke="#2f3640" stroke-width="1.6"/>
<text class="ts" x="200" y="106">edge map — where depth may jump</text>
<path class="a" d="M258 54 H282"/>
<rect class="bg" x="286" y="16" width="104" height="76" rx="3"/>
<circle cx="328" cy="58" r="20" fill="#1f6f8b"/><rect x="352" y="60" width="30" height="30" fill="#8fb4c3"/>
<rect x="286" y="16" width="104" height="76" fill="#dce9ef" opacity="0.35"/>
<text class="ts" x="338" y="106">depth map</text>
<text class="ts" x="200" y="128">the edge prior is what makes an ill-posed problem tractable</text>
</svg>
<figcaption>Depth discontinuities coincide with image edges. Supplying the edge map explicitly constrains where the depth model may place a step.</figcaption>
</figure>

How it works
======

The repository documents a three-stage pipeline:

1. **Edge detection with LDC.** The RGB image is passed through a Learned Dense Connections edge detector to produce an edge map.
2. **Depth generation with TokenFusion.** A transformer-based image-to-image model takes the RGB image and the edge map and produces a dense depth map. Inputs are standardised to 512 × 512.
3. **Fusion and stylisation.** The proposed **EnGD** algorithm fuses the RGB and depth information, and **Scenimefy** applies anime-style transfer to produce the final animated output.

Intermediate artefacts are written to dedicated directories at each stage — edge maps under `LDC/result/MDBD2CLASSIC`, depth maps under `TokenFusion/results` — which makes each stage independently inspectable. For a multi-model pipeline this matters more than it sounds: when the output is wrong, being able to look at the intermediate depth map immediately tells you whether the failure is upstream or downstream.

Architecture
======

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 150" aria-label="SAIND three stage pipeline">
<rect class="b" x="4" y="52" width="62" height="36" rx="4"/><text class="ts" x="35" y="74">RGB image</text>
<path class="a" d="M68 70 H86"/>
<rect class="b3" x="88" y="52" width="66" height="36" rx="4"/><text class="ts" x="121" y="67">LDC</text><text class="ts" x="121" y="79">edge detect</text>
<path class="a" d="M121 50 C121 26, 180 26, 180 46"/>
<path class="a" d="M156 70 H176"/>
<rect class="b4" x="178" y="46" width="72" height="48" rx="4"/><text class="ts" x="214" y="63">TokenFusion</text><text class="ts" x="214" y="75">RGB + edge</text><text class="ts" x="214" y="87">→ depth</text>
<path class="a" d="M35 90 C35 118, 268 118, 268 96"/><text class="ts" x="150" y="128">RGB carried forward</text>
<path class="a" d="M252 70 H268"/>
<rect class="b2" x="270" y="46" width="58" height="48" rx="4"/><text class="ts" x="299" y="66">EnGD</text><text class="ts" x="299" y="78">fuse</text>
<path class="a" d="M330 70 H346"/>
<rect class="b" x="348" y="46" width="50" height="48" rx="4"/><text class="ts" x="373" y="63">Scenimefy</text><text class="ts" x="373" y="75">style +</text><text class="ts" x="373" y="87">animate</text>
<text class="ts" x="200" y="20">edge map feeds forward into depth estimation</text>
</svg>
<figcaption>Three stages, three separately-trained models, with one proposed fusion algorithm (EnGD) joining appearance and geometry before stylisation.</figcaption>
</figure>

**Component notes:**

- **LDC** implements 4-block and 5-block deep architectures for dense edge prediction.
- **TokenFusion** is a transformer for image-to-image translation whose distinguishing mechanism is *token exchange* between modalities — which is precisely why it suits an RGB-plus-edge input pair. It is designed to fuse two input streams rather than concatenate them.
- **Scenimefy** performs semi-supervised anime style transfer built on the CUT (Contrastive Unpaired Translation) framework, trained with both paired and unpaired data under a curriculum learning strategy.

The pipeline is **assembled from strong published components with one novel joining step**, rather than trained end to end. That is a pragmatic choice: each stage can use a model already trained on far more data than this project could collect, at the cost of no gradient flowing between stages.

Technical specifications
======

<table class="pd-spec">
<tr><td>Stage 1 — edge detection</td><td>LDC (Learned Dense Connections), 4-block and 5-block variants</td></tr>
<tr><td>Stage 2 — depth estimation</td><td>TokenFusion, transformer-based, token exchange mechanism</td></tr>
<tr><td>Depth input resolution</td><td>512 × 512</td></tr>
<tr><td>Stage 3a — fusion</td><td>EnGD (proposed) — combines RGB and depth</td></tr>
<tr><td>Stage 3b — stylisation</td><td>Scenimefy, semi-supervised, CUT framework</td></tr>
<tr><td>Training regime (stylisation)</td><td>Paired and unpaired data, curriculum learning</td></tr>
<tr><td>Intermediate outputs</td><td>Edge maps and depth maps written to disk per stage</td></tr>
<tr><td>Inputs</td><td>RGB images with corresponding edge maps</td></tr>
</table>

Optimizations and results
======

The optimisation story in this project is **architectural rather than numerical** — the design choices are where the work is:

- **Edge map as an explicit prior**, rather than expecting a depth model to infer boundaries from RGB alone. This is a way of injecting structure instead of demanding the model learn it from data the project does not have.
- **Token exchange for fusing modalities**, rather than channel concatenation. Concatenating RGB and edge channels asks the network to discover their relationship; a token exchange mechanism is built for cross-modal fusion and gets it more directly.
- **A dedicated fusion algorithm before stylisation**, so style transfer receives geometry and appearance jointly rather than appearance alone — which is the whole reason for computing depth in the first place.
- **Fixed 512 × 512 processing** to keep the transformer stage within tractable memory, an explicit resolution-versus-cost trade.

<div class="pd-gap" markdown="1">
**Quantitative results are not in the public repository.** Rather than reconstruct plausible-looking numbers, I have left this section qualitative. Style transfer and animation quality are genuinely awkward to score — perceptual metrics correlate poorly with how a result actually looks — so the meaningful evaluation here is a side-by-side comparison against direct RGB-only stylisation.

If you have the ablation from the report — stylisation with and without the depth channel, plus any depth-quality numbers on a standard benchmark — send them over and I will add a results table matching the other project pages. A qualitative comparison figure would arguably carry more weight than a metric for this particular task.
</div>

Limitations and honest caveats
======

- **Errors compound across stages.** With three separately-trained models in series and no end-to-end gradient, a bad edge map yields a bad depth map yields a bad stylisation — and nothing downstream can recover it.
- **Monocular depth remains an estimate.** The edge prior improves it but does not make it metric; the geometry is plausible rather than measured.
- **The 512 × 512 constraint caps output detail**, which matters for scenes whose interest lies in fine texture.

<p class="pd-foot">Back to <a href="/projects/">all projects</a>.</p>

</div>
