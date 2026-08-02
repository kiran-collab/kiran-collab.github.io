---
title: "Articles &amp; Resources"
permalink: /articles/
layout: single
author_profile: true
---

<style>
.art-card {
  border: 1px solid #e3e3e3; border-radius: 6px; padding: 1.2em 1.4em; margin-bottom: 1.4em;
  background: #fbfbfb; transition: border-color .15s, box-shadow .15s;
}
.art-card:hover { border-color: #c8d4da; box-shadow: 0 2px 10px rgba(0,0,0,.05); }
.art-card h3 { margin: 0 0 .35em; font-size: 1.22rem; line-height: 1.3; }
.art-card h3 a { text-decoration: none; color: #1f6f8b; }
.art-card h3 a:hover { text-decoration: underline; }
.art-meta { font-size: .82rem; color: #7a8189; margin: 0 0 .7em; letter-spacing: .02em; }
.art-card p.art-deck { margin: 0 0 .8em; color: #444; }
.art-tags span {
  display: inline-block; font-size: .74rem; padding: .18em .6em; margin: 0 .35em .35em 0;
  border-radius: 10px; background: #eef3f6; color: #41606e; border: 1px solid #dde7ec;
}
.res-list { margin-top: .4em; }
.res-list li { margin-bottom: .5em; }
</style>

Long-form writing on the engineering side of AI systems — architecture, reliability, and cost — plus references I keep coming back to. For a running log of what is shipping in the field, see [Trends](/trends/).

Articles
======

<div class="art-card">
<h3><a href="/articles/systems-that-hold-under-load/">Designing AI Systems That Hold Under Load</a></h3>
<p class="art-meta">August 2026 · ~12 min read</p>
<p class="art-deck">The hard part of production AI stopped being model quality and became system quality. A working guide to the three constraints that actually bind — memory rather than compute, statistical rather than binary correctness, and the optimization order that pays — with the arithmetic to size each one.</p>
<p class="art-tags">
<span>scalability</span><span>fault tolerance</span><span>inference cost</span><span>KV cache</span><span>graceful degradation</span><span>observability</span>
</p>
</div>

Resources
======

A short list of references I return to rather than an exhaustive bibliography.

<ul class="res-list">
<li><strong><a href="https://arxiv.org/abs/2510.18245">Scaling Laws Meet Model Architecture: Toward Inference-Efficient LLMs</a></strong> — treats inference cost as a first-class term in the scaling objective rather than an afterthought.</li>
<li><strong><a href="https://magazine.sebastianraschka.com/p/llm-research-papers-2026-part1">Sebastian Raschka's LLM research paper lists</a></strong> — the most reliable running survey of what is worth reading each quarter.</li>
<li><strong><a href="https://modelcontextprotocol.io/">Model Context Protocol specification</a></strong> — the spec itself is short and worth reading before adopting any agent framework that wraps it.</li>
<li><strong><a href="https://sre.google/books/">Google SRE Book &amp; Workbook</a></strong> — predates the current wave and still the clearest treatment of error budgets, load shedding, and graceful degradation.</li>
<li><strong><a href="https://arxiv.org/pdf/2605.00080">World Model for Robot Learning: A Comprehensive Survey</a></strong> — a good entry point to where learned simulators are heading for embodied work.</li>
</ul>
