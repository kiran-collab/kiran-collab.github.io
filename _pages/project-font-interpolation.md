---
title: "Font Style Interpolation for Scene Text Recognition"
permalink: /projects/font-style-interpolation/
layout: single
author_profile: true
---

{% include project-detail.html %}

<div class="pd" markdown="1">

<p class="pd-deck">Low-resource languages have too few fonts to train good OCR. Instead of collecting more, generate them: interpolate between existing fonts in the latent space of a diffusion autoencoder, convert the results back into usable typefaces, and train on the expanded set. Word accuracy rose from 70.56 to 81.45.</p>

<p class="pd-links">
<a class="back" href="/projects/">← All projects</a>
<a href="https://github.com/kiran-collab/Font-Style-Transfer">Code</a>
</p>

What it does
======

The system takes a small set of real fonts and produces new, plausible fonts that sit **between** them in style — then converts those generated glyph images back into installable TTF typefaces. Those fonts are used to synthesise training data for scene text recognition, and the OCR model trained on the expanded set is measurably better than one trained on the originals alone.

Why — the motivation
======

Scene text recognition models are trained largely on synthetic data, because annotating real-world text at scale is expensive. Synthetic pipelines render text in many fonts, styles, and backgrounds, and the **font inventory is a hard ceiling on how much visual variety that data can contain**.

For English this is barely a constraint — thousands of high-quality typefaces exist. For low-resource languages it is the binding constraint: few fonts exist, they are often stylistically similar, and a model trained on them overfits to a narrow slice of what real text looks like. The result is OCR that performs acceptably on clean rendered text and poorly on photographs.

The conventional response is to commission or digitise more fonts, which is slow and expensive per language. The alternative this project tests: **treat the font shortage as a generative modelling problem rather than a data-collection problem.**

Intuition behind the approach
======

A typeface is a coherent style applied consistently across a character set — weight, contrast, terminal shape, aperture, stress angle. That coherence is the useful property: it suggests style occupies a **smooth, structured region of some latent space**, rather than being an arbitrary per-glyph attribute.

If that is true, then a point sampled between two fonts in that space should itself be a valid font — inheriting some traits from each, but internally consistent across all its characters. Interpolation becomes a font *generator*, and each pair of real fonts yields a family of new ones.

A diffusion autoencoder is a good fit because it explicitly separates a **semantic latent code** (what the style is) from **stochastic detail** (the rest). That separation is what makes interpolation meaningful rather than a pixel-space blend — moving through the semantic code changes style coherently, where averaging two glyph images would just produce a blurred overlay.

The project's own modification follows directly from this: an **MLP classification head was added to the DiffAE baseline to predict which font a glyph came from**. Forcing the latent space to be linearly separable by font is a way of making it organised *by style*, which is precisely the structure interpolation needs. Improve the geometry of the space, and the midpoints get better.

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 130" aria-label="Latent space interpolation between two fonts producing intermediate typefaces">
<rect class="gh" x="14" y="14" width="372" height="80" rx="5"/>
<text class="ts" x="200" y="10">semantic latent space</text>
<circle class="fa" cx="60" cy="54" r="8"/><text class="ts" x="60" y="80">font A</text>
<circle class="fr" cx="340" cy="54" r="8"/><text class="ts" x="340" y="80">font B</text>
<path class="dl" d="M68 54 H332"/>
<circle class="fg" cx="130" cy="54" r="5"/><circle class="fg" cx="200" cy="54" r="5"/><circle class="fg" cx="270" cy="54" r="5"/>
<text class="ts" x="200" y="40">interpolated fonts, internally consistent</text>
<text class="ts" x="200" y="112">8 intermediates per pair — each a usable typeface, not a blur</text>
</svg>
<figcaption>Interpolating the semantic code rather than the pixels is what keeps a generated font coherent across its whole character set.</figcaption>
</figure>

How it works
======

The pipeline runs in five stages:

1. **Extract glyph images from TTF fonts** — turning typefaces into the image domain the model operates in.
2. **Interpolate with the modified DiffAE** — for each font pair, generate 10 images per character: the 2 originals plus 8 intermediates.
3. **Convert images back to TTF** — the generated glyphs are placed onto templates (`place_font_on_template.py`) and rendered into installable fonts via Calligraphr.
4. **Synthesise a training set** — SynthTiger generates scene-text images using the expanded font inventory.
5. **Train and benchmark OCR** — a PARSeq recognition model is trained on the synthetic data and evaluated.

**One design detail deserves highlighting.** Character selection for the font-building step does not pick the model's most confident outputs. It uses an OCR model to select images that are *correctly predicted but with the lowest confidence*. The reasoning is that maximally-confident glyphs are the safe, prototypical ones — they add little variety. Glyphs near the decision boundary are still legible but visually distinctive, which is exactly the diversity the synthetic dataset is short of. Optimising for "correct but unusual" rather than "correct and obvious" is the non-obvious choice in the pipeline.

Architecture
======

<figure class="fig">
<svg class="dgm" viewBox="0 0 400 190" aria-label="Font interpolation pipeline from TTF through DiffAE to OCR evaluation">
<rect class="b" x="6" y="10" width="80" height="30" rx="4"/><text class="ts" x="46" y="29">TTF fonts</text>
<path class="a" d="M88 25 H108"/>
<rect class="b" x="110" y="10" width="80" height="30" rx="4"/><text class="ts" x="150" y="29">glyph images</text>
<path class="a" d="M192 25 H212"/>
<rect class="b4" x="214" y="4" width="106" height="42" rx="4"/><text class="ts" x="267" y="20">DiffAE</text><text class="ts" x="267" y="32">+ MLP font head</text>
<path class="a" d="M267 48 V64"/>
<rect class="b3" x="214" y="66" width="106" height="30" rx="4"/><text class="ts" x="267" y="85">interpolate pairs</text>
<path class="a" d="M212 81 H196"/>
<rect class="b3" x="104" y="66" width="90" height="30" rx="4"/><text class="ts" x="149" y="80">select glyphs</text><text class="ts" x="149" y="92">low-confidence</text>
<path class="a" d="M148 98 V116"/>
<rect class="b" x="104" y="118" width="90" height="30" rx="4"/><text class="ts" x="149" y="137">rebuild TTF</text>
<path class="a" d="M196 133 H216"/>
<rect class="b" x="218" y="118" width="80" height="30" rx="4"/><text class="ts" x="258" y="132">SynthTiger</text><text class="ts" x="258" y="144">2M images</text>
<path class="a" d="M300 133 H320"/>
<rect class="b2" x="322" y="118" width="74" height="30" rx="4"/><text class="ts" x="359" y="132">PARSeq</text><text class="ts" x="359" y="144">OCR eval</text>
<text class="ts" x="200" y="176">generation loop on top, data and evaluation loop below</text>
</svg>
<figcaption>The full loop: fonts become latent codes, interpolation produces new fonts, and the expanded inventory feeds a synthetic dataset that is judged by a downstream OCR model.</figcaption>
</figure>

The important structural point is that **the model is not evaluated on how good its images look.** It is evaluated by whether an independent OCR model trained on its output reads real text better. That downstream framing is the right one for a data-augmentation method, and it is much harder to game than a perceptual score.

Technical specifications
======

<table class="pd-spec">
<tr><td>Generative model</td><td>Diffusion Autoencoder (DiffAE), modified</td></tr>
<tr><td>Modification</td><td>MLP classification head predicting source font, to structure the latent space</td></tr>
<tr><td>Interpolation output</td><td>10 images per font pair per character (2 original + 8 interpolated)</td></tr>
<tr><td>Glyph selection</td><td>OCR-correct predictions with the <em>lowest</em> confidence</td></tr>
<tr><td>Font reconstruction</td><td>Template placement (<code>place_font_on_template.py</code>) → Calligraphr</td></tr>
<tr><td>Synthetic data generator</td><td>SynthTiger</td></tr>
<tr><td>OCR benchmark model</td><td>PARSeq</td></tr>
<tr><td>Training data</td><td>1M synthetic images across 5 fonts; also tested on ~200K English font images</td></tr>
<tr><td>Target script</td><td>Latin, with Indic scripts as the intended extension</td></tr>
</table>

Optimizations and results
======

The comparison holds the OCR model and the pipeline fixed and varies only the **font inventory** used to synthesise training data — which isolates the contribution of the generated fonts.

<table class="pd-res">
<thead><tr><th>Training font set</th><th class="num">Word accuracy</th><th class="num">Character accuracy</th></tr></thead>
<tbody>
<tr><td>10 original fonts (1M images)</td><td class="num">70.56</td><td class="num">87.12</td></tr>
<tr class="win"><td>10 original + 45 interpolated (2M images)</td><td class="num">81.45</td><td class="num">92.19</td></tr>
<tr><td><em>Improvement</em></td><td class="num">+10.89</td><td class="num">+5.07</td></tr>
</tbody>
</table>

Three observations worth drawing out:

- **10 fonts became 55.** Interpolating across pairs turns a linear inventory into a combinatorial one, which is why a modest set of originals produces a substantially larger and more varied training distribution.
- **Word accuracy improved roughly twice as much as character accuracy** (+10.89 vs +5.07). That is the expected signature of a diversity fix rather than a legibility fix: a word is only correct if every character is, so word accuracy is disproportionately sensitive to the occasional unfamiliar glyph. Reducing those rare failures moves word accuracy far more than it moves the character average.
- **The gain is from data, not model capacity.** The recognition architecture is unchanged between rows. Whatever the generated fonts contributed, they contributed as training signal.

Limitations and honest caveats
======

The repository is explicit about these, and they are worth restating rather than smoothing over:

- **Limited architectural novelty.** The contribution is the pipeline and the application, not a new generative model — DiffAE is used largely as published, with one classification head added.
- **Overfitting on the larger English font set.** Training on ~200K English font images exhibited overfitting, so the reported gains should not be assumed to extend automatically to every configuration.
- **Indic scripts are harder than Latin, structurally.** Devanagari requires correct placement of *matras* and half-characters, which are positional and compositional in a way Latin glyphs are not. A pipeline that interpolates independent glyph images does not automatically respect those constraints — this is the main open problem for extending the work to the languages that motivated it.

<p class="pd-foot">Work with Prof. Chetan Arora (IIT Delhi) and Prof. Vinay Namboodiri (University of Bath). Back to <a href="/projects/">all projects</a>.</p>

</div>
