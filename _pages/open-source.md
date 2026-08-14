---
title: "Open Source"
permalink: /open-source/
layout: single
author_profile: true
---

{% include base_path %}

<style>
.os-lead { color: #4a5158; border-left: 3px solid #c8d4da; padding-left: 1em; margin: 0 0 1.4em; }
.os-hint { font-size: .88rem; color: #7a8189; margin: 0 0 1.8em; }

.os-sec {
  margin-top: 2.4em; padding-top: .5em; border-top: 2px solid #eee;
  font-size: 1.24rem; color: #23303a; scroll-margin-top: 24px;
}
.os-sub { font-size: .93rem; color: #55606a; margin: .5em 0 1.2em; line-height: 1.6; }

.os-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: .9em; margin-bottom: .6em; }
.os-card {
  border: 1px solid #e2e6ea; border-left: 4px solid #1f6f8b; border-radius: 5px;
  background: #fcfcfc; padding: .85em 1em;
}
.os-card.research { border-left-color: #4a6741; }
.os-card.applied  { border-left-color: #8a6d1f; }
.os-card.explore  { border-left-color: #6b4a8b; }
.os-card h3 { margin: 0 0 .3em; font-size: .96rem; }
.os-card h3 a { color: #1f6f8b; text-decoration: none; }
.os-card h3 a:hover { text-decoration: underline; }
.os-card p { font-size: .87rem; color: #4a5158; margin: 0 0 .55em; line-height: 1.55; }
.os-meta { font-size: .74rem; color: #7a8189; }
.os-meta span {
  display: inline-block; border: 1px solid #e2e6ea; background: #f6f8f9;
  border-radius: 9px; padding: .1em .5em; margin: 0 .28em .28em 0;
}
.os-meta span.star { color: #7a601b; background: #f8f3e6; border-color: #e8dcc2; }
.os-meta span.fork { color: #5d3f7a; background: #f5f2f8; border-color: #ddd6e6; }

.os-note {
  border: 1px solid #e0e6ea; border-left: 3px solid #8a6d1f; background: #fbf9f2;
  padding: .85em 1.1em; border-radius: 0 4px 4px 0; margin: 1.4em 0; font-size: .91rem; color: #55504a;
}
.os-cta {
  display: inline-block; font-size: .86rem; font-weight: 600; padding: .35em .95em;
  border: 1px solid #cfdfe6; border-radius: 14px; background: #f0f7f9; color: #1f6f8b; text-decoration: none;
}
.os-cta:hover { background: #e2eff3; border-color: #1f6f8b; text-decoration: none; }
</style>

<p class="os-lead">Everything I build outside client work is public. This is the code behind the research papers, the agentic AI systems I have been building to understand the tooling properly, and the applied computer vision work — all of it readable, most of it runnable.</p>

<p class="os-hint">All repositories live at <a href="https://github.com/kiran-collab" target="_blank">github.com/kiran-collab</a>. Descriptions below are what each repository actually contains, not what it aspires to.</p>

<h2 class="os-sec" id="agentic">Agentic AI and LLM systems</h2>
<p class="os-sub">Built to understand agent architectures end to end rather than through a framework's demo — including the parts that are usually skipped, like evaluation harnesses and CI.</p>

<div class="os-grid">

<div class="os-card">
<h3><a href="https://github.com/kiran-collab/Multi-agent-MCP-PDF-Invoice-Data-Extractor" target="_blank">Multi-agent MCP PDF Invoice Extractor</a></h3>
<p>Invoice extraction built with Google's Agent Development Kit as an Orchestrator, File, and Extraction agent architecture, using Model Context Protocol for standardised file access. Pydantic validation and a trace-driven evaluation framework measure extraction accuracy, hallucination rate, and workflow reliability.</p>
<p class="os-meta"><span>Python</span><span>ADK</span><span>MCP</span><span>Pydantic</span></p>
</div>

<div class="os-card">
<h3><a href="https://github.com/kiran-collab/regsentinel" target="_blank">regsentinel</a></h3>
<p>A multi-agent compliance auditing system built on the Claude Agent SDK, orchestrating five specialised agents against an MCP tool server to automate risk assessment and citation validation. Includes guardrails, LLM evaluation pipelines, and CI/CD with security scanning and test coverage.</p>
<p class="os-meta"><span>Python</span><span>Claude Agent SDK</span><span>MCP</span><span>CI/CD</span></p>
</div>

<div class="os-card">
<h3><a href="https://github.com/kiran-collab/Evaluation-Pipelines-in-Agentic-Frameworks" target="_blank">Evaluation Pipelines in Agentic Frameworks</a></h3>
<p>Evaluation harnesses for agent systems — the measurement layer rather than the agents themselves. Concerned with what "working" means for a multi-step agent, where the failure surfaces, and how to catch a regression that only appears three steps in.</p>
<p class="os-meta"><span>Evaluation</span><span>Agents</span></p>
</div>

<div class="os-card">
<h3><a href="https://github.com/kiran-collab/AI-Agents-for-Image-and-Video-Generation" target="_blank">AI Agents for Image and Video Generation</a></h3>
<p>Agent workflows driving generative image and video pipelines — prompt construction, model selection, and the orchestration around a generation step rather than the model doing the generating.</p>
<p class="os-meta"><span>Python</span><span>Generative</span></p>
</div>

<div class="os-card">
<h3><a href="https://github.com/kiran-collab/Fitness-Nutrition-AI-Agent" target="_blank">Fitness &amp; Nutrition AI Agent</a></h3>
<p>A domain agent over nutrition and training data — a smaller, self-contained example of tool use and structured output where the domain constrains what a correct answer looks like.</p>
<p class="os-meta"><span>Python</span><span>Tool calling</span></p>
</div>

<div class="os-card">
<h3><a href="https://github.com/kiran-collab/fraud-det-plat" target="_blank">fraud-det-plat</a></h3>
<p>A fraud detection platform sketch — streaming feature serving, model scoring, and the surrounding plumbing, built to work through the architecture rather than to ship.</p>
<p class="os-meta"><span>Python</span><span>Streaming</span></p>
</div>

</div>

<h2 class="os-sec" id="research">Code behind the research</h2>
<p class="os-sub">Implementations from published and submitted work. Where the paper is the contribution, the repository is what makes it checkable — see <a href="/projects/">Projects</a> for the write-ups.</p>

<div class="os-grid">

<div class="os-card research">
<h3><a href="https://github.com/kiran-collab/Griffin" target="_blank">Griffin</a></h3>
<p>Middleware framework for real-time road event detection using a UAV and a ground vehicle together — the coordination, data fusion, and alert path rather than the detector alone.</p>
<p class="os-meta"><span>Python</span><span>Distributed systems</span><span>UAV</span></p>
</div>

<div class="os-card research">
<h3><a href="https://github.com/kiran-collab/CSIKit-BMEye" target="_blank">CSIKit-BMEye</a></h3>
<p>BMI estimation from commodity WiFi channel state information, built on the CSIKit toolkit. Device-free sensing — the signal is the measurement, with no camera and nothing worn.</p>
<p class="os-meta"><span>Python</span><span>WiFi sensing</span><span class="star">★ 1</span></p>
</div>

<div class="os-card research">
<h3><a href="https://github.com/kiran-collab/SWidir" target="_blank">SWiDir</a></h3>
<p>Walking direction estimation that corrects smartphone inertial sensing with passive WiFi, for indoor positioning where GPS is unavailable.</p>
<p class="os-meta"><span>WiFi sensing</span><span>Localisation</span></p>
</div>

<div class="os-card research">
<h3><a href="https://github.com/kiran-collab/SAIND" target="_blank">SAIND</a></h3>
<p>Scene animation from RGB images and depth maps. Contributed to <a href="https://github.com/spsingh37/SAIND" target="_blank">spsingh37/SAIND</a> — collaborative work carried out in a fork.</p>
<p class="os-meta"><span>Python</span><span>Depth</span><span class="fork">fork · collaborative</span></p>
</div>

<div class="os-card research">
<h3><a href="https://github.com/kiran-collab/Style-Interpolation" target="_blank">Style Interpolation</a></h3>
<p>Font style generation for low-resource Indic languages, improving scene text recognition by widening training diversity. Contributed to <a href="https://github.com/pantDevesh/Font-Interpolation" target="_blank">pantDevesh/Font-Interpolation</a>.</p>
<p class="os-meta"><span>Jupyter</span><span>Generative</span><span class="fork">fork · collaborative</span></p>
</div>

</div>

<h2 class="os-sec" id="applied">Applied computer vision and ML</h2>
<p class="os-sub">Self-contained implementations, mostly built to work a technique out properly rather than to read about it.</p>

<div class="os-grid">

<div class="os-card applied">
<h3><a href="https://github.com/kiran-collab/Deepfakes-Detection-Browser-plugin" target="_blank">Deepfake Detection Browser Plugin</a></h3>
<p>A browser extension for real-time deepfake monitoring and blocking — inference inside the browser, where the latency and packaging constraints shape the model choice more than accuracy does.</p>
<p class="os-meta"><span>JavaScript</span><span>Edge inference</span></p>
</div>

<div class="os-card applied">
<h3><a href="https://github.com/kiran-collab/Face_Recognition" target="_blank">Face Recognition</a></h3>
<p>The full pipeline — detect, align, embed, compare — rather than a wrapper around one library call.</p>
<p class="os-meta"><span>Python</span><span>Embeddings</span></p>
</div>

<div class="os-card applied">
<h3><a href="https://github.com/kiran-collab/Masked-Image-Impainting" target="_blank">Masked Image Inpainting</a></h3>
<p>Reconstructing masked regions of an image — the generative task where the evaluation is harder than the model.</p>
<p class="os-meta"><span>Jupyter</span><span>Generative</span></p>
</div>

<div class="os-card applied">
<h3><a href="https://github.com/kiran-collab/Sign-Language-Recognition" target="_blank">Sign Language Recognition</a></h3>
<p>Gesture recognition over video — a sequence problem rather than a per-frame classification one, which is the point of building it.</p>
<p class="os-meta"><span>Python</span><span>Video</span></p>
</div>

<div class="os-card applied">
<h3><a href="https://github.com/kiran-collab/negative-comments-analyzer" target="_blank">Negative Comments Analyzer</a></h3>
<p>Text classification over user comments — sentiment and toxicity, where the interesting problem is threshold choice rather than model choice.</p>
<p class="os-meta"><span>Python</span><span>NLP</span></p>
</div>

<div class="os-card applied">
<h3><a href="https://github.com/kiran-collab/TID-Effect-in-SNN" target="_blank">TID Effect in Spiking Neural Networks</a></h3>
<p>Total ionising dose effects on spiking neural networks — how radiation-induced hardware degradation propagates into model behaviour.</p>
<p class="os-meta"><span>Python</span><span>SNN</span><span>Hardware</span></p>
</div>

</div>

<h2 class="os-sec" id="other">Numerical and exploratory</h2>
<p class="os-sub">Work from outside the ML track, kept public because the implementations are useful to someone.</p>

<div class="os-grid">

<div class="os-card explore">
<h3><a href="https://github.com/kiran-collab/Inexact-Inverse-Iteration-for-Hermitian-NLEPs" target="_blank">Inexact Inverse Iteration for Hermitian NLEPs</a></h3>
<p>A numerical solver for Hermitian nonlinear eigenvalue problems, where the inner linear solve is deliberately inexact and the question is how much inexactness the outer iteration tolerates.</p>
<p class="os-meta"><span>Python</span><span>Numerical methods</span></p>
</div>

<div class="os-card explore">
<h3><a href="https://github.com/kiran-collab/Quantum-Bit-Error-Rate" target="_blank">Quantum Bit Error Rate</a></h3>
<p>QBER computation for quantum key distribution and efficient photonic transmission.</p>
<p class="os-meta"><span>QKD</span><span class="star">★ 1</span></p>
</div>

<div class="os-card explore">
<h3><a href="https://github.com/kiran-collab/book-distribution" target="_blank">book-distribution</a></h3>
<p>A Flutter application — included because it is public, and because not everything needs to be a model.</p>
<p class="os-meta"><span>Dart</span><span>Flutter</span></p>
</div>

</div>

<h2 class="os-sec" id="upstream">Upstream contributions</h2>

<div class="os-note">
<strong>Being written up.</strong> This part of the page is deliberately empty rather than padded. Contributions to projects I do not own — pull requests, issue reports, documentation fixes — are worth listing individually with a link to each one, and I would rather show three real merged PRs than a vague claim of involvement. Publicly visible so far: collaborative work on <a href="https://github.com/spsingh37/SAIND" target="_blank">SAIND</a> and <a href="https://github.com/pantDevesh/Font-Interpolation" target="_blank">Font-Interpolation</a>, listed above.
</div>

<p style="margin-top:2.2em">
<a class="os-cta" href="https://github.com/kiran-collab" target="_blank">All repositories on GitHub →</a>
</p>

<p style="margin-top:2em;font-size:.9rem;color:#7a8189">Related: <a href="/projects/">Projects</a> for the research write-ups, and <a href="/hackathons/">Hackathons</a> for time-boxed builds.</p>
