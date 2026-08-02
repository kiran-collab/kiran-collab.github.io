---
title: "Technical Toolkit"
permalink: /toolkit/
layout: single
author_profile: true
---

<style>
/* ---------- word cloud ---------- */
.wordcloud {
  text-align: center; line-height: 2.4; padding: 1.4em 1em; margin-bottom: 2.4em;
  border: 1px solid #e5e5e5; border-radius: 6px; background: #fbfbfb;
}
/* [class*="wc-"] keeps these above the theme's `.page__content a` rules
   without relying on stylesheet source order */
.wordcloud a[class*="wc-"] {
  display: inline-block; margin: 0 0.42em; white-space: nowrap; font-weight: 600; letter-spacing: -0.01em;
  text-decoration: none; border-bottom: 1px solid transparent; transition: border-color .15s, opacity .15s;
}
.wordcloud a[class*="wc-"]:hover, .wordcloud a[class*="wc-"]:focus-visible {
  text-decoration: none; border-bottom-color: currentColor; opacity: .8;
}
.wordcloud:hover a[class*="wc-"]:not(:hover) { opacity: .5; }
.wc-xl { font-size: 2.0rem; } .wc-lg { font-size: 1.55rem; } .wc-md { font-size: 1.25rem; }
.wc-sm { font-size: 1.05rem; } .wc-xs { font-size: 0.9rem; font-weight: 500; }
.wordcloud a.wc-a, .wordcloud a.wc-a:visited, .wordcloud a.wc-a:hover { color: #b83227; }
.wordcloud a.wc-b, .wordcloud a.wc-b:visited, .wordcloud a.wc-b:hover { color: #1f6f8b; }
.wordcloud a.wc-c, .wordcloud a.wc-c:visited, .wordcloud a.wc-c:hover { color: #4a6741; }
.wordcloud a.wc-d, .wordcloud a.wc-d:visited, .wordcloud a.wc-d:hover { color: #6b4a8b; }
.wordcloud a.wc-e, .wordcloud a.wc-e:visited, .wordcloud a.wc-e:hover { color: #8a6d1f; }
.wordcloud a.wc-f, .wordcloud a.wc-f:visited, .wordcloud a.wc-f:hover { color: #555f6b; }

/* ---------- entry layout ---------- */
.tk-item {
  display: flex; gap: 1.4em; align-items: flex-start; margin: 0 0 1.9em; flex-wrap: wrap;
  padding: 6px 0 6px 12px; scroll-margin-top: 24px; border-radius: 3px;
}
.tk-item:target { background: #fdf8e7; box-shadow: inset 3px 0 0 #c9a227; }
.tk-sec { scroll-margin-top: 24px; }
@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
.tk-dgm { flex: 0 0 200px; max-width: 200px; }
.tk-txt { flex: 1 1 320px; min-width: 250px; }
.tk-txt p { margin: 0; }
.tk-sec { margin-top: 2.2em; padding-top: 0.5em; border-top: 2px solid #eee; }
@media (max-width: 640px) {
  .tk-dgm { flex: 0 0 100%; max-width: 220px; margin: 0 auto 0.4em; }
  .tk-txt { min-width: 0; }
}

/* ---------- diagram vocabulary ---------- */
.dgm { width: 100%; height: auto; display: block; overflow: visible; }
.dgm .b  { fill: #e8f1f6; stroke: #1f6f8b; stroke-width: 1.4; }
.dgm .b2 { fill: #fbeae7; stroke: #b83227; stroke-width: 1.4; }
.dgm .b3 { fill: #eaf2e6; stroke: #4a6741; stroke-width: 1.4; }
.dgm .b4 { fill: #f1eef7; stroke: #6b4a8b; stroke-width: 1.4; }
.dgm .bg { fill: #f4f5f6; stroke: #b0b6bd; stroke-width: 1.2; }
.dgm .bd { fill: #dbe9f1; stroke: none; }
.dgm .gh { fill: none; stroke: #cfd4d9; stroke-width: 1.1; stroke-dasharray: 3 3; }
.dgm .l  { fill: none; stroke: #6b7480; stroke-width: 1.4; }
.dgm .a  { fill: none; stroke: #6b7480; stroke-width: 1.4; marker-end: url(#tkar); }
.dgm .a2 { fill: none; stroke: #b83227; stroke-width: 1.4; marker-end: url(#tkar2); }
.dgm .a3 { fill: none; stroke: #4a6741; stroke-width: 1.4; marker-end: url(#tkar3); }
.dgm .dl { fill: none; stroke: #9aa2ac; stroke-width: 1.3; stroke-dasharray: 4 3; }
.dgm .dr { fill: none; stroke: #b83227; stroke-width: 1.3; stroke-dasharray: 4 3; marker-end: url(#tkar2); }
.dgm .fa { fill: #1f6f8b; } .dgm .fr { fill: #b83227; } .dgm .fg { fill: #4a6741; }
.dgm .fm { fill: #b8c0c8; }
.dgm .t  { font: 600 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #2f3640; text-anchor: middle; }
.dgm .ts { font: 500 7.5px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #5a626c; text-anchor: middle; }
</style>

<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<marker id="tkar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6b7480"/></marker>
<marker id="tkar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#b83227"/></marker>
<marker id="tkar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#4a6741"/></marker>
</defs></svg>

A working glossary of the areas, systems, and tools I build with — spanning model efficiency, agentic LLM systems, retrieval, data engineering, and the platform work that keeps all of it running in production. Each entry pairs a short description with a schematic of the idea.

<div class="wordcloud">
<a class="wc-lg wc-b" href="#rag-pipelines">RAG Pipelines</a>
<a class="wc-sm wc-e" href="#model-distillation">Model Distillation</a>
<a class="wc-xl wc-a" href="#vector-databases">Vector Databases</a>
<a class="wc-md wc-c" href="#model-quantization">Quantization</a>
<a class="wc-sm wc-f" href="#jax">JAX</a>
<a class="wc-lg wc-d" href="#agent-workflows">Agent Workflows</a>
<a class="wc-xs wc-b" href="#model-pruning">Pruning</a>
<a class="wc-md wc-e" href="#postgresql">PostgreSQL</a>
<a class="wc-sm wc-c" href="#distributed-training">Distributed Training</a>
<a class="wc-xl wc-b" href="#llm-apis">LLM APIs</a>
<a class="wc-xs wc-f" href="#celery">Celery</a>
<a class="wc-md wc-a" href="#mcp-servers">MCP Servers</a>
<a class="wc-sm wc-d" href="#embeddings">Embeddings</a>
<a class="wc-lg wc-c" href="#rest-apis">REST APIs</a>
<a class="wc-xs wc-e" href="#scala">Scala</a>
<a class="wc-md wc-f" href="#semantic-retrieval">Semantic Retrieval</a>
<a class="wc-sm wc-a" href="#low-latency-inference">Low Latency Inference</a>
<a class="wc-lg wc-e" href="#typescript">TypeScript</a>
<a class="wc-xs wc-c" href="#flask">Flask</a>
<a class="wc-md wc-d" href="#rlhf">RLHF</a>
<a class="wc-sm wc-b" href="#anomaly-detection">Anomaly Detection</a>
<a class="wc-xl wc-c" href="#sec-platform">MLOps</a>
<a class="wc-xs wc-a" href="#prometheus">Prometheus</a>
<a class="wc-md wc-b" href="#terraform">Terraform</a>
<a class="wc-sm wc-e" href="#golang">Golang</a>
<a class="wc-lg wc-a" href="#human-in-the-loop-hitl">Human in the Loop</a>
<a class="wc-xs wc-d" href="#jenkins">Jenkins</a>
<a class="wc-md wc-c" href="#etl-data-pipelines">ETL Pipelines</a>
<a class="wc-sm wc-f" href="#graphql">GraphQL</a>
<a class="wc-lg wc-d" href="#hallucination-mitigation">Hallucination Mitigation</a>
<a class="wc-xs wc-b" href="#scipy">SciPy</a>
<a class="wc-md wc-e" href="#time-series-modelling">Time Series Modelling</a>
<a class="wc-sm wc-c" href="#oauth">OAuth</a>
<a class="wc-xl wc-e" href="#automated-evaluation-frameworks">Evaluation Frameworks</a>
<a class="wc-xs wc-f" href="#seaborn">Seaborn</a>
<a class="wc-md wc-a" href="#model-serving">Model Serving</a>
<a class="wc-sm wc-d" href="#google-bigquery">BigQuery</a>
<a class="wc-lg wc-b" href="#pandas">Pandas</a>
<a class="wc-xs wc-c" href="#n8n">n8n</a>
<a class="wc-md wc-f" href="#forecasting">Forecasting</a>
<a class="wc-sm wc-a" href="#mongodb">MongoDB</a>
<a class="wc-lg wc-c" href="#gpu-optimization">GPU Optimization</a>
<a class="wc-xs wc-e" href="#llamaindex">LlamaIndex</a>
<a class="wc-md wc-d" href="#multimodal-video-models">Multimodal Video Models</a>
<a class="wc-sm wc-b" href="#ci-cd-for-ai-systems">CI/CD</a>
<a class="wc-xl wc-d" href="#agentic-patterns">Agentic Patterns</a>
<a class="wc-xs wc-a" href="#ragas">Ragas</a>
<a class="wc-md wc-b" href="#load-balancing">Load Balancing</a>
<a class="wc-sm wc-e" href="#numpy">NumPy</a>
<a class="wc-lg wc-f" href="#ai-security">AI Security</a>
<a class="wc-xs wc-c" href="#google-pub-sub">Pub/Sub</a>
<a class="wc-md wc-e" href="#reinforcement-learning">Reinforcement Learning</a>
<a class="wc-sm wc-d" href="#dynamodb">DynamoDB</a>
<a class="wc-lg wc-e" href="#platform-engineering">Platform Engineering</a>
<a class="wc-xs wc-b" href="#websockets">WebSockets</a>
<a class="wc-md wc-c" href="#statistical-modelling">Statistical Modelling</a>
<a class="wc-sm wc-f" href="#active-learning">Active Learning</a>
<a class="wc-md wc-a" href="#containerization-workflows">Containerization</a>
<a class="wc-xs wc-d" href="#langsmith">LangSmith</a>
<a class="wc-sm wc-c" href="#text-classification">Text Classification</a>
<a class="wc-md wc-f" href="#data-cleaning">Data Cleaning</a>
<a class="wc-xs wc-e" href="#shell-scripting">Shell Scripting</a>
</div>

<h2 class="tk-sec" id="sec-model-optimization">Model Optimization and Efficient Inference</h2>

<div class="tk-item" id="model-distillation">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="8" y="14" width="72" height="82" rx="4"/><text class="t" x="44" y="52">Teacher</text><text class="ts" x="44" y="66">70B</text>
<path class="a" d="M86 55 H122"/><text class="ts" x="104" y="47">distill</text>
<rect class="b2" x="128" y="42" width="60" height="30" rx="4"/><text class="t" x="158" y="55">Student</text><text class="ts" x="158" y="66">7B</text>
</svg></div>
<div class="tk-txt"><p><strong>Model Distillation.</strong> Distillation trains a compact student model to reproduce the behaviour of a much larger teacher, transferring capability without transferring parameter count. It is the practical route to keeping accuracy close to a frontier model while cutting serving cost and latency by an order of magnitude.</p></div>
</div>

<div class="tk-item" id="model-quantization">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="10" y="22" width="180" height="20" rx="3"/><text class="t" x="100" y="36">FP32 · 32 bits</text>
<path class="a" d="M100 46 V62"/>
<rect class="b2" x="10" y="66" width="46" height="20" rx="3"/><text class="t" x="33" y="80">INT8</text>
<text class="ts" x="128" y="76">4× smaller,</text><text class="ts" x="128" y="86">faster on-device</text>
</svg></div>
<div class="tk-txt"><p><strong>Model Quantization.</strong> Quantization reduces the numeric precision of weights and activations — FP32 down to INT8 or 4-bit — so a model occupies less memory and executes faster on the same hardware. The engineering work is in choosing the scheme and calibration set so the accuracy loss stays within an acceptable budget.</p></div>
</div>

<div class="tk-item" id="model-pruning">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M40 24 L110 24 M40 24 L110 56 M40 56 L110 24 M40 88 L110 88 M110 56 L170 56"/>
<path class="dl" d="M40 56 L110 88 M40 88 L110 56 M110 24 L170 56 M110 88 L170 56"/>
<circle class="fa" cx="40" cy="24" r="5"/><circle class="fa" cx="40" cy="56" r="5"/><circle class="fa" cx="40" cy="88" r="5"/>
<circle class="fa" cx="110" cy="24" r="5"/><circle class="fm" cx="110" cy="56" r="5"/><circle class="fm" cx="110" cy="88" r="5"/>
<circle class="fa" cx="170" cy="56" r="5"/>
<text class="ts" x="100" y="106">dashed = pruned away</text>
</svg></div>
<div class="tk-txt"><p><strong>Model Pruning.</strong> Pruning removes weights, channels, or attention heads that contribute little to the output, producing a sparser network that is cheaper to store and run. Structured pruning is usually preferred over unstructured because it yields speedups on real accelerators rather than only on paper.</p></div>
</div>

<div class="tk-item" id="distributed-training">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="14" width="42" height="26" rx="3"/><text class="ts" x="27" y="31">GPU 0</text>
<rect class="b" x="54" y="14" width="42" height="26" rx="3"/><text class="ts" x="75" y="31">GPU 1</text>
<rect class="b" x="102" y="14" width="42" height="26" rx="3"/><text class="ts" x="123" y="31">GPU 2</text>
<rect class="b" x="150" y="14" width="42" height="26" rx="3"/><text class="ts" x="171" y="31">GPU 3</text>
<path class="a" d="M27 42 V62"/><path class="a" d="M75 42 V62"/><path class="a" d="M123 42 V62"/><path class="a" d="M171 42 V62"/>
<rect class="b3" x="6" y="66" width="186" height="24" rx="3"/><text class="t" x="99" y="81">all-reduce gradients</text>
</svg></div>
<div class="tk-txt"><p><strong>Distributed Training.</strong> Distributed training splits a workload across many GPUs or nodes using data, tensor, pipeline, or fully-sharded parallelism so models larger than a single device can be trained. The hard part is rarely the math — it is gradient synchronization, interconnect bandwidth, and keeping every worker fed.</p></div>
</div>

<div class="tk-item" id="gpu-optimization">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="8" y="34" width="72" height="22" rx="3"/><rect class="b2" x="8" y="34" width="26" height="22" rx="3"/><text class="ts" x="44" y="70">36% utilised</text>
<path class="a" d="M88 45 H110"/>
<rect class="bg" x="118" y="34" width="72" height="22" rx="3"/><rect class="b3" x="118" y="34" width="63" height="22" rx="3"/><text class="ts" x="154" y="70">89% utilised</text>
<text class="ts" x="100" y="96">fused kernels · mixed precision</text>
</svg></div>
<div class="tk-txt"><p><strong>GPU Optimization.</strong> GPU optimization is the work of raising utilization: kernel fusion, mixed precision, memory-layout choices, batch sizing, and eliminating host-device transfer stalls. Most training and inference jobs are memory-bandwidth-bound rather than compute-bound, and the wins come from finding out which.</p></div>
</div>

<div class="tk-item" id="performance-profiling">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="8" y="16" width="120" height="14" rx="2"/><text class="ts" x="160" y="27">request</text>
<rect class="b" x="20" y="36" width="46" height="14" rx="2"/><text class="ts" x="120" y="47">parse</text>
<rect class="b2" x="20" y="56" width="150" height="14" rx="2"/><text class="ts" x="186" y="67">hot</text>
<rect class="b" x="34" y="76" width="30" height="14" rx="2"/><text class="ts" x="110" y="87">encode</text>
<text class="ts" x="100" y="105">where the time actually goes</text>
</svg></div>
<div class="tk-txt"><p><strong>Performance Profiling.</strong> Profiling instruments a system to show where time and memory actually go, rather than where they are assumed to go. It is the discipline that turns an optimization effort from guesswork into a ranked list of fixable bottlenecks.</p></div>
</div>

<div class="tk-item" id="low-latency-inference">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M8 92 H192"/>
<rect class="b" x="16" y="66" width="14" height="26"/><rect class="b" x="34" y="44" width="14" height="48"/>
<rect class="b" x="52" y="34" width="14" height="58"/><rect class="b" x="70" y="52" width="14" height="40"/>
<rect class="b" x="88" y="70" width="14" height="22"/><rect class="b" x="106" y="80" width="14" height="12"/>
<rect class="b" x="124" y="85" width="14" height="7"/>
<path class="dl" d="M152 18 V92"/><text class="ts" x="166" y="16">p99</text>
<path class="a2" d="M150 28 H110"/>
<text class="ts" x="60" y="16">latency →</text>
</svg></div>
<div class="tk-txt"><p><strong>Low Latency Inference.</strong> Low-latency inference is the set of techniques — batching strategy, KV-cache management, speculative decoding, quantized runtimes, warm pools — that push tail response time down to something interactive. Optimizing for p99 rather than mean latency is what separates a demo from a production service.</p></div>
</div>

<div class="tk-item" id="model-serving">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<circle class="fa" cx="12" cy="26" r="5"/><circle class="fa" cx="12" cy="55" r="5"/><circle class="fa" cx="12" cy="84" r="5"/>
<path class="a" d="M20 26 L54 50 M20 55 H54 M20 84 L54 62"/>
<rect class="b4" x="58" y="36" width="54" height="40" rx="4"/><text class="t" x="85" y="52">serving</text><text class="ts" x="85" y="65">batch · queue</text>
<path class="a" d="M114 48 L146 32 M114 56 H146 M114 64 L146 80"/>
<rect class="b" x="150" y="20" width="44" height="24" rx="3"/><text class="ts" x="172" y="35">replica</text>
<rect class="b" x="150" y="46" width="44" height="24" rx="3"/><text class="ts" x="172" y="61">replica</text>
<rect class="b" x="150" y="72" width="44" height="24" rx="3"/><text class="ts" x="172" y="87">replica</text>
</svg></div>
<div class="tk-txt"><p><strong>Model Serving.</strong> Model serving is the runtime layer that exposes trained models as reliable endpoints, handling batching, concurrency, versioning, and health. It is where model quality meets availability concerns, and both have to hold at once.</p></div>
</div>

<div class="tk-item" id="model-deployment-and-scaling-across-ai-providers">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="42" width="40" height="28" rx="3"/><text class="ts" x="26" y="59">app</text>
<path class="a" d="M48 56 H68"/>
<rect class="b4" x="70" y="36" width="46" height="40" rx="4"/><text class="ts" x="93" y="52">router</text><text class="ts" x="93" y="64">+ fallback</text>
<path class="a" d="M118 48 L148 26 M118 56 H148 M118 64 L148 86"/>
<rect class="b" x="150" y="14" width="44" height="22" rx="3"/><text class="ts" x="172" y="28">provider A</text>
<rect class="b" x="150" y="44" width="44" height="22" rx="3"/><text class="ts" x="172" y="58">provider B</text>
<rect class="bg" x="150" y="74" width="44" height="22" rx="3" stroke-dasharray="4 3"/><text class="ts" x="172" y="88">self-host</text>
</svg></div>
<div class="tk-txt"><p><strong>Model Deployment and Scaling across AI Providers.</strong> This is the practice of running the same workload across multiple model providers and hosting backends without rewriting the application each time. Provider abstraction, fallback routing, and cost-aware model selection are what make it survivable when one vendor degrades or reprices.</p></div>
</div>

<div class="tk-item" id="jax">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="42" width="42" height="28" rx="3"/><text class="t" x="27" y="60">f(x)</text>
<path class="a" d="M50 50 L68 28 M50 56 H68 M50 62 L68 84"/>
<rect class="b4" x="70" y="16" width="52" height="20" rx="3"/><text class="ts" x="96" y="30">grad</text>
<rect class="b4" x="70" y="46" width="52" height="20" rx="3"/><text class="ts" x="96" y="60">jit</text>
<rect class="b4" x="70" y="76" width="52" height="20" rx="3"/><text class="ts" x="96" y="90">vmap</text>
<path class="a" d="M124 26 L146 48 M124 56 H146 M124 86 L146 64"/>
<rect class="b3" x="148" y="42" width="46" height="28" rx="3"/><text class="ts" x="171" y="60">XLA · GPU</text>
</svg></div>
<div class="tk-txt"><p><strong>JAX.</strong> JAX is a numerical computing library built around composable transformations — automatic differentiation, vectorization, and JIT compilation to XLA. It suits research code that needs both mathematical transparency and accelerator-grade performance.</p></div>
</div>

<h2 class="tk-sec" id="sec-agentic-ai">Agentic AI and LLM Systems</h2>

<div class="tk-item" id="llm-apis">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="40" width="44" height="30" rx="3"/><text class="ts" x="28" y="58">app</text>
<path class="a" d="M52 55 H72"/>
<rect class="b2" x="74" y="30" width="50" height="50" rx="4"/><text class="t" x="99" y="50">LLM</text><text class="ts" x="99" y="63">API</text>
<path class="a" d="M126 55 H140"/>
<rect class="b" x="144" y="48" width="10" height="14" rx="2"/><rect class="b" x="156" y="48" width="10" height="14" rx="2"/>
<rect class="b" x="168" y="48" width="10" height="14" rx="2"/><rect class="bg" x="180" y="48" width="10" height="14" rx="2"/>
<text class="ts" x="167" y="76">streamed tokens</text>
<text class="ts" x="99" y="96">rate limits · retries · context budget</text>
</svg></div>
<div class="tk-txt"><p><strong>LLM APIs.</strong> LLM APIs are the request-response interfaces through which applications consume language models, covering streaming, tool calling, structured outputs, and token accounting. Building well against them means treating rate limits, retries, and context budgets as first-class design concerns rather than error handling.</p></div>
</div>

<div class="tk-item" id="mcp-servers">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="38" width="46" height="34" rx="3"/><text class="ts" x="27" y="58">agent</text>
<path class="a" d="M52 48 H82"/><path class="a" d="M82 64 H54"/>
<rect class="b4" x="84" y="30" width="52" height="50" rx="4"/><text class="t" x="110" y="50">MCP</text><text class="ts" x="110" y="63">server</text>
<path class="l" d="M138 44 L152 26 M138 55 H152 M138 66 L152 84"/>
<rect class="b3" x="154" y="16" width="42" height="20" rx="3"/><text class="ts" x="175" y="30">tools</text>
<rect class="b3" x="154" y="46" width="42" height="20" rx="3"/><text class="ts" x="175" y="60">data</text>
<rect class="b3" x="154" y="74" width="42" height="20" rx="3"/><text class="ts" x="175" y="88">prompts</text>
</svg></div>
<div class="tk-txt"><p><strong>MCP Servers.</strong> The Model Context Protocol standardizes how models discover and call external tools, resources, and prompts through a common server interface. It replaces one-off per-integration glue with a reusable contract, so the same tool server works across different agent hosts.</p></div>
</div>

<div class="tk-item" id="agent-workflows">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="70" y="8" width="62" height="24" rx="3"/><text class="ts" x="101" y="23">plan</text>
<rect class="b2" x="8" y="70" width="62" height="24" rx="3"/><text class="ts" x="39" y="85">act · tools</text>
<rect class="b3" x="130" y="70" width="62" height="24" rx="3"/><text class="ts" x="161" y="85">observe</text>
<path class="a" d="M76 34 L46 66"/>
<path class="a" d="M74 82 H126"/>
<path class="a" d="M158 66 L128 34"/>
<text class="ts" x="100" y="55">loop until done</text>
</svg></div>
<div class="tk-txt"><p><strong>Agent Workflows.</strong> Agent workflows orchestrate a model through multi-step tasks where it plans, calls tools, observes results, and iterates toward a goal. The engineering emphasis falls on state management, termination conditions, and error recovery — the parts that decide whether an agent finishes or spirals.</p></div>
</div>

<div class="tk-item" id="agentic-patterns">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="24" width="46" height="30" rx="3"/><text class="ts" x="29" y="43">draft</text>
<path class="a" d="M29 58 A14 14 0 1 0 43 58"/><text class="ts" x="29" y="98">reflect</text>
<rect class="b4" x="76" y="14" width="48" height="22" rx="3"/><text class="ts" x="100" y="28">planner</text>
<path class="a" d="M92 40 V52"/><path class="a" d="M108 40 V52"/>
<rect class="b4" x="76" y="54" width="22" height="20" rx="3"/><rect class="b4" x="102" y="54" width="22" height="20" rx="3"/>
<text class="ts" x="100" y="88">executors</text>
<circle class="b3" cx="150" cy="30" r="12"/><text class="ts" x="150" y="33">route</text>
<path class="a" d="M162 34 L182 50 M162 30 H182 M162 26 L182 12"/>
<text class="ts" x="163" y="88">tool routing</text>
</svg></div>
<div class="tk-txt"><p><strong>Agentic Patterns.</strong> Agentic patterns are the reusable structures behind reliable agents: reflection, planner-executor splits, tool routing, multi-agent delegation, and evaluator-optimizer loops. Choosing the right pattern for a task matters more than raw model capability in most production systems.</p></div>
</div>

<div class="tk-item" id="agentcore">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="4" y="10" width="192" height="90" rx="6"/>
<text class="ts" x="100" y="26">AgentCore managed runtime</text>
<rect class="b4" x="12" y="36" width="40" height="30" rx="3"/><text class="ts" x="32" y="55">memory</text>
<rect class="b4" x="58" y="36" width="40" height="30" rx="3"/><text class="ts" x="78" y="55">identity</text>
<rect class="b4" x="104" y="36" width="40" height="30" rx="3"/><text class="ts" x="124" y="55">gateway</text>
<rect class="b4" x="150" y="36" width="40" height="30" rx="3"/><text class="ts" x="170" y="55">tools</text>
<text class="ts" x="100" y="86">sessions persist across turns</text>
</svg></div>
<div class="tk-txt"><p><strong>AgentCore.</strong> AWS Bedrock AgentCore provides managed runtime, memory, identity, and gateway primitives for deploying agents at production scale. It handles session persistence and secure tool access so the application layer can focus on task logic.</p></div>
</div>

<div class="tk-item" id="aws-strands-agents">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<circle class="b2" cx="56" cy="52" r="30"/><text class="t" x="56" y="50">model</text><text class="ts" x="56" y="62">decides</text>
<path class="a" d="M88 40 L136 24 M88 52 H136 M88 64 L136 82"/>
<rect class="b3" x="138" y="14" width="52" height="20" rx="3"/><text class="ts" x="164" y="28">search</text>
<rect class="b3" x="138" y="42" width="52" height="20" rx="3"/><text class="ts" x="164" y="56">compute</text>
<rect class="b3" x="138" y="72" width="52" height="20" rx="3"/><text class="ts" x="164" y="86">write</text>
<text class="ts" x="56" y="98">no hardcoded control flow</text>
</svg></div>
<div class="tk-txt"><p><strong>AWS Strands Agents.</strong> Strands is a model-driven, open-source SDK for building agents where the model itself directs planning and tool use rather than a hardcoded control flow. It integrates with Bedrock and other providers and pairs naturally with MCP-defined tools.</p></div>
</div>

<div class="tk-item" id="operating-llms-in-production">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M8 88 H192"/>
<rect class="b" x="16" y="46" width="30" height="42" rx="2"/><text class="ts" x="31" y="102">cost</text>
<rect class="b" x="58" y="30" width="30" height="58" rx="2"/><text class="ts" x="73" y="102">p95</text>
<rect class="b3" x="100" y="20" width="30" height="68" rx="2"/><text class="ts" x="115" y="102">quality</text>
<rect class="b2" x="142" y="62" width="30" height="26" rx="2"/><text class="ts" x="157" y="102">errors</text>
<path class="dl" d="M8 36 H192"/><text class="ts" x="182" y="32">SLO</text>
</svg></div>
<div class="tk-txt"><p><strong>Operating LLMs in Production.</strong> Running LLMs in production means owning cost per request, latency budgets, prompt and model versioning, output monitoring, and graceful degradation under load. Unlike deterministic services, correctness is statistical, so observability and evaluation have to be continuous rather than one-time.</p></div>
</div>

<div class="tk-item" id="hallucination-mitigation">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="46" height="28" rx="3"/><text class="ts" x="27" y="59">claim</text>
<path class="a" d="M52 56 H72"/>
<rect class="b4" x="74" y="30" width="52" height="52" rx="4"/><text class="ts" x="100" y="50">grounding</text><text class="ts" x="100" y="62">check</text>
<path class="a3" d="M128 44 L150 28"/>
<rect class="b3" x="152" y="14" width="44" height="24" rx="3"/><text class="ts" x="174" y="29">cite</text>
<path class="a2" d="M128 68 L150 82"/>
<rect class="b2" x="152" y="72" width="44" height="24" rx="3"/><text class="ts" x="174" y="87">abstain</text>
</svg></div>
<div class="tk-txt"><p><strong>Hallucination Mitigation.</strong> Hallucination mitigation reduces confidently wrong output through grounding in retrieved sources, citation enforcement, constrained decoding, verification passes, and abstention paths. No single technique eliminates it, so production systems layer several and measure the residual rate.</p></div>
</div>

<div class="tk-item" id="human-in-the-loop-hitl">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="18" width="42" height="26" rx="3"/><text class="ts" x="25" y="34">model</text>
<path class="a" d="M48 31 H66"/>
<path class="b4" d="M92 12 L118 31 L92 50 L66 31 Z"/><text class="ts" x="92" y="34">conf?</text>
<path class="a3" d="M120 31 H150"/><text class="ts" x="135" y="24">high</text>
<rect class="b3" x="152" y="18" width="44" height="26" rx="3"/><text class="ts" x="174" y="34">auto</text>
<path class="a2" d="M92 52 V72"/><text class="ts" x="112" y="66">low</text>
<rect class="b2" x="58" y="74" width="68" height="24" rx="3"/><text class="ts" x="92" y="89">human review</text>
<path class="dl" d="M56 86 H26 V46"/><text class="ts" x="20" y="66">feedback</text>
</svg></div>
<div class="tk-txt"><p><strong>Human in the Loop (HITL).</strong> HITL design inserts human judgment at the points where automated confidence is lowest or the cost of error is highest — approvals, escalations, and review queues. Done well, it captures corrections as training and evaluation signal instead of discarding them.</p></div>
</div>

<div class="tk-item" id="llamaindex">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="30" width="20" height="26" rx="2"/><rect class="b" x="16" y="40" width="20" height="26" rx="2"/><rect class="b" x="26" y="50" width="20" height="26" rx="2"/>
<text class="ts" x="26" y="92">docs</text>
<path class="a" d="M50 54 H70"/>
<rect class="b4" x="72" y="34" width="50" height="42" rx="4"/><text class="ts" x="97" y="50">ingest</text><text class="ts" x="97" y="63">+ index</text>
<path class="a" d="M124 54 H144"/>
<rect class="b3" x="146" y="34" width="48" height="42" rx="4"/><text class="ts" x="170" y="50">query</text><text class="ts" x="170" y="63">engine</text>
</svg></div>
<div class="tk-txt"><p><strong>LlamaIndex.</strong> LlamaIndex is a framework for connecting language models to private data through ingestion, indexing, retrieval, and query orchestration. It is most useful as scaffolding for RAG and agentic retrieval systems where the data layer is the hard part.</p></div>
</div>

<div class="tk-item" id="n8n">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="44" width="46" height="24" rx="12"/><text class="ts" x="27" y="59">trigger</text>
<path class="l" d="M52 52 L74 30 M52 60 L74 82"/>
<rect class="b4" x="76" y="18" width="46" height="24" rx="12"/><text class="ts" x="99" y="33">AI step</text>
<rect class="b3" x="76" y="70" width="46" height="24" rx="12"/><text class="ts" x="99" y="85">db</text>
<path class="l" d="M124 30 L146 50 M124 82 L146 62"/>
<rect class="b2" x="148" y="44" width="46" height="24" rx="12"/><text class="ts" x="171" y="59">action</text>
</svg></div>
<div class="tk-txt"><p><strong>n8n.</strong> n8n is a source-available workflow automation platform that chains APIs, databases, and AI steps through a visual node graph. It is a fast way to prototype and operate agentic or ETL-style automations without standing up bespoke services for each one.</p></div>
</div>

<h2 class="tk-sec" id="sec-retrieval">Retrieval and Vector Search</h2>

<div class="tk-item" id="retrieval-systems">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="44" width="44" height="26" rx="3"/><text class="ts" x="26" y="61">query</text>
<path class="a" d="M50 57 H68"/>
<rect class="b4" x="70" y="32" width="46" height="50" rx="4"/><text class="ts" x="93" y="61">index</text>
<path class="a" d="M118 57 H134"/>
<rect class="b3" x="136" y="24" width="58" height="16" rx="2"/><text class="ts" x="196" y="36"></text>
<rect class="b" x="136" y="46" width="44" height="16" rx="2"/>
<rect class="b" x="136" y="68" width="32" height="16" rx="2"/>
<text class="ts" x="160" y="98">ranked by relevance</text>
</svg></div>
<div class="tk-txt"><p><strong>Retrieval Systems.</strong> Retrieval systems find the most relevant items from a large corpus given a query, and they are the foundation under search, recommendation, and RAG. Their quality is judged by ranking metrics rather than accuracy, which makes evaluation design as important as the index itself.</p></div>
</div>

<div class="tk-item" id="semantic-retrieval">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="gh" x="6" y="8" width="188" height="84" rx="4"/>
<circle class="fm" cx="30" cy="26" r="4"/><circle class="fm" cx="52" cy="72" r="4"/><circle class="fm" cx="170" cy="30" r="4"/>
<circle class="fm" cx="158" cy="76" r="4"/><circle class="fm" cx="36" cy="52" r="4"/>
<circle class="fa" cx="86" cy="38" r="4"/><circle class="fa" cx="120" cy="42" r="4"/><circle class="fa" cx="104" cy="70" r="4"/>
<circle class="dl" cx="102" cy="50" r="30" fill="none"/>
<path class="fr" d="M102 43 l3.4 6.9 7.6 1.1 -5.5 5.4 1.3 7.6 -6.8 -3.6 -6.8 3.6 1.3 -7.6 -5.5 -5.4 7.6 -1.1z"/>
<text class="ts" x="100" y="106">nearest neighbours in embedding space</text>
</svg></div>
<div class="tk-txt"><p><strong>Semantic Retrieval.</strong> Semantic retrieval matches on meaning by embedding queries and documents into a shared vector space and comparing them by distance. It surfaces relevant results that share no literal terms with the query, at the cost of occasionally missing exact identifiers.</p></div>
</div>

<div class="tk-item" id="lexical-retrieval">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="20" width="56" height="22" rx="3"/><text class="ts" x="32" y="35">"wifi"</text>
<rect class="b" x="4" y="52" width="56" height="22" rx="3"/><text class="ts" x="32" y="67">"csi"</text>
<path class="a" d="M62 31 H82"/><path class="a" d="M62 63 H82"/>
<rect class="bg" x="84" y="20" width="24" height="22"/><rect class="bg" x="112" y="20" width="24" height="22"/><rect class="bg" x="140" y="20" width="24" height="22"/><rect class="bg" x="168" y="20" width="24" height="22"/>
<rect class="bg" x="84" y="52" width="24" height="22"/><rect class="bg" x="112" y="52" width="24" height="22"/><rect class="bg" x="140" y="52" width="24" height="22"/>
<text class="ts" x="100" y="94">inverted index · BM25 scoring</text>
</svg></div>
<div class="tk-txt"><p><strong>Lexical Retrieval.</strong> Lexical retrieval matches on terms using inverted indexes and scoring functions such as BM25. It remains unbeaten for exact keywords, codes, and rare entities — precisely the cases where embeddings tend to blur distinctions.</p></div>
</div>

<div class="tk-item" id="hybrid-vector-databases">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="14" width="44" height="10" rx="2"/><rect class="b" x="4" y="28" width="34" height="10" rx="2"/><rect class="b" x="4" y="42" width="26" height="10" rx="2"/>
<text class="ts" x="26" y="8">lexical</text>
<rect class="b3" x="4" y="62" width="44" height="10" rx="2"/><rect class="b3" x="4" y="76" width="34" height="10" rx="2"/><rect class="b3" x="4" y="90" width="26" height="10" rx="2"/>
<text class="ts" x="26" y="58">semantic</text>
<path class="a" d="M54 32 L76 46"/><path class="a" d="M54 78 L76 62"/>
<rect class="b4" x="78" y="38" width="46" height="34" rx="4"/><text class="ts" x="101" y="52">rank</text><text class="ts" x="101" y="64">fusion</text>
<path class="a" d="M126 55 H142"/>
<rect class="b2" x="144" y="34" width="50" height="10" rx="2"/><rect class="b2" x="144" y="50" width="40" height="10" rx="2"/><rect class="b2" x="144" y="66" width="30" height="10" rx="2"/>
</svg></div>
<div class="tk-txt"><p><strong>Hybrid Vector Databases.</strong> Hybrid systems run lexical and vector search together and fuse the results, typically through reciprocal rank fusion or a learned reranker. This combination consistently outperforms either method alone because their failure modes are largely uncorrelated.</p></div>
</div>

<div class="tk-item" id="vector-databases">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M60 20 H140"/>
<circle class="fr" cx="60" cy="20" r="5"/><circle class="fa" cx="140" cy="20" r="5"/>
<path class="l" d="M30 52 H80 M80 52 H130 M130 52 H176"/>
<circle class="fa" cx="30" cy="52" r="5"/><circle class="fr" cx="80" cy="52" r="5"/><circle class="fa" cx="130" cy="52" r="5"/><circle class="fa" cx="176" cy="52" r="5"/>
<path class="l" d="M14 84 H50 M50 84 H86 M86 84 H122 M122 84 H158 M158 84 H188"/>
<circle class="fa" cx="14" cy="84" r="4"/><circle class="fa" cx="50" cy="84" r="4"/><circle class="fr" cx="86" cy="84" r="4"/><circle class="fa" cx="122" cy="84" r="4"/><circle class="fa" cx="158" cy="84" r="4"/><circle class="fa" cx="188" cy="84" r="4"/>
<path class="dr" d="M62 26 L78 44"/><path class="dr" d="M80 60 L86 76"/>
<text class="ts" x="172" y="104">HNSW layers</text>
</svg></div>
<div class="tk-txt"><p><strong>Vector Databases.</strong> Vector databases store high-dimensional embeddings and serve approximate nearest-neighbour queries at low latency using index structures like HNSW or IVF. Beyond raw search they handle metadata filtering, namespace isolation, and incremental updates as the corpus changes.</p></div>
</div>

<div class="tk-item" id="embeddings">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="44" height="26" rx="3"/><text class="ts" x="26" y="59">"wifi csi"</text>
<path class="a" d="M50 55 H68"/>
<rect class="b4" x="70" y="34" width="46" height="42" rx="4"/><text class="ts" x="93" y="59">encoder</text>
<path class="a" d="M118 55 H132"/>
<rect class="b3" x="134" y="46" width="8" height="18"/><rect class="b3" x="144" y="38" width="8" height="26"/>
<rect class="b3" x="154" y="50" width="8" height="14"/><rect class="b3" x="164" y="34" width="8" height="30"/>
<rect class="b3" x="174" y="44" width="8" height="20"/><rect class="b3" x="184" y="52" width="8" height="12"/>
<text class="ts" x="163" y="80">[0.21, -0.4, …]</text>
</svg></div>
<div class="tk-txt"><p><strong>Embeddings.</strong> Embeddings are dense numeric representations that place semantically similar inputs near one another in vector space. They are the common substrate for retrieval, clustering, deduplication, classification, and recommendation.</p></div>
</div>

<div class="tk-item" id="rag-pipelines">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="2" y="36" width="34" height="30" rx="3"/><text class="ts" x="19" y="55">chunk</text>
<path class="a" d="M37 51 H43"/>
<rect class="b" x="44" y="36" width="34" height="30" rx="3"/><text class="ts" x="61" y="55">embed</text>
<path class="a" d="M79 51 H85"/>
<rect class="b4" x="86" y="36" width="34" height="30" rx="3"/><text class="ts" x="103" y="55">retrieve</text>
<path class="a" d="M121 51 H127"/>
<rect class="b4" x="128" y="36" width="34" height="30" rx="3"/><text class="ts" x="145" y="55">rerank</text>
<path class="a" d="M163 51 H169"/>
<rect class="b2" x="170" y="36" width="28" height="30" rx="3"/><text class="ts" x="184" y="55">LLM</text>
<text class="ts" x="82" y="86">most quality issues start here</text>
<path class="dr" d="M82 80 L61 70"/>
</svg></div>
<div class="tk-txt"><p><strong>RAG Pipelines.</strong> A RAG pipeline grounds generation in retrieved context through chunking, embedding, retrieval, reranking, and prompt assembly. Most quality problems attributed to the model actually originate in the chunking and retrieval stages, which is where tuning pays off first.</p></div>
</div>

<h2 class="tk-sec" id="sec-evaluation">Evaluation, Reliability, and Learning</h2>

<div class="tk-item" id="automated-evaluation-frameworks">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="38" width="44" height="34" rx="3"/><text class="ts" x="26" y="58">outputs</text>
<path class="a" d="M50 55 H68"/>
<rect class="b4" x="70" y="30" width="48" height="50" rx="4"/><text class="ts" x="94" y="50">scorer</text><text class="ts" x="94" y="63">rubric</text>
<path class="a" d="M120 55 H136"/>
<rect class="bg" x="138" y="24" width="56" height="62" rx="3"/>
<rect class="b3" x="144" y="32" width="34" height="8" rx="2"/><text class="ts" x="188" y="39">.91</text>
<rect class="b3" x="144" y="48" width="26" height="8" rx="2"/><text class="ts" x="188" y="55">.74</text>
<rect class="b2" x="144" y="64" width="14" height="8" rx="2"/><text class="ts" x="188" y="71">.38</text>
</svg></div>
<div class="tk-txt"><p><strong>Automated Evaluation Frameworks.</strong> Automated evaluation scores model and system output continuously against reference sets, rubrics, or LLM judges instead of relying on manual spot checks. It is what makes prompt, model, and retrieval changes comparable rather than anecdotal.</p></div>
</div>

<div class="tk-item" id="ragas">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M8 84 H192"/>
<rect class="bg" x="20" y="18" width="34" height="66" rx="2"/><rect class="b3" x="20" y="30" width="34" height="54" rx="2"/><text class="ts" x="37" y="98">faithful</text>
<rect class="bg" x="82" y="18" width="34" height="66" rx="2"/><rect class="b" x="82" y="44" width="34" height="40" rx="2"/><text class="ts" x="99" y="98">relevance</text>
<rect class="bg" x="144" y="18" width="34" height="66" rx="2"/><rect class="b2" x="144" y="60" width="34" height="24" rx="2"/><text class="ts" x="161" y="98">ctx precision</text>
<text class="ts" x="100" y="12">per-component RAG scores</text>
</svg></div>
<div class="tk-txt"><p><strong>Ragas.</strong> Ragas is an evaluation library for RAG systems that scores dimensions such as faithfulness, answer relevance, and context precision. It converts vague reports of "bad answers" into per-component metrics that point at the actual failing stage.</p></div>
</div>

<div class="tk-item" id="langsmith">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="16" width="180" height="14" rx="2"/><text class="ts" x="96" y="26">agent run · 4.2s</text>
<rect class="b" x="24" y="36" width="120" height="14" rx="2"/><text class="ts" x="84" y="46">retrieve</text>
<rect class="b" x="42" y="56" width="76" height="14" rx="2"/><text class="ts" x="80" y="66">llm call</text>
<rect class="b2" x="42" y="76" width="44" height="14" rx="2"/><text class="ts" x="64" y="86">tool err</text>
<text class="ts" x="100" y="104">nested spans per run</text>
</svg></div>
<div class="tk-txt"><p><strong>LangSmith.</strong> LangSmith provides tracing, dataset management, and evaluation for LLM applications, capturing every step of a chain or agent run. The traces make non-deterministic failures reproducible enough to debug.</p></div>
</div>

<div class="tk-item" id="regression-testing-pipelines">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="42" height="26" rx="3"/><text class="ts" x="25" y="58">commit</text>
<path class="a" d="M48 55 H64"/>
<rect class="b3" x="66" y="30" width="18" height="18" rx="2"/><rect class="b3" x="88" y="30" width="18" height="18" rx="2"/><rect class="b3" x="110" y="30" width="18" height="18" rx="2"/>
<rect class="b3" x="66" y="52" width="18" height="18" rx="2"/><rect class="b2" x="88" y="52" width="18" height="18" rx="2"/><rect class="b3" x="110" y="52" width="18" height="18" rx="2"/>
<text class="ts" x="97" y="82">suite</text>
<path class="a2" d="M130 55 H148"/>
<rect class="b2" x="150" y="42" width="46" height="26" rx="3"/><text class="ts" x="173" y="58">blocked</text>
</svg></div>
<div class="tk-txt"><p><strong>Regression Testing Pipelines.</strong> Regression pipelines re-run a fixed suite against every change to catch quality drops before they reach users. For AI systems the suite has to include behavioural and output-quality cases, since unit tests alone will not catch a degraded prompt or model.</p></div>
</div>

<div class="tk-item" id="rlhf">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="20" width="42" height="20" rx="3"/><text class="ts" x="25" y="34">A</text>
<rect class="bg" x="4" y="46" width="42" height="20" rx="3"/><text class="ts" x="25" y="60">B</text>
<text class="ts" x="25" y="80">preferences</text>
<path class="a" d="M48 40 H66"/>
<rect class="b4" x="68" y="26" width="52" height="34" rx="4"/><text class="ts" x="94" y="40">reward</text><text class="ts" x="94" y="52">model</text>
<path class="a" d="M122 43 H142"/>
<rect class="b2" x="144" y="26" width="50" height="34" rx="4"/><text class="ts" x="169" y="47">policy</text>
<path class="dl" d="M169 62 V86 H94 V62"/><text class="ts" x="132" y="96">optimise</text>
</svg></div>
<div class="tk-txt"><p><strong>RLHF.</strong> Reinforcement Learning from Human Feedback aligns model behaviour with human preferences by training a reward model on comparisons and optimizing the policy against it. It is the mechanism that turns a capable base model into one that follows instructions helpfully.</p></div>
</div>

<div class="tk-item" id="reinforcement-learning">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="8" y="40" width="62" height="34" rx="4"/><text class="ts" x="39" y="61">agent</text>
<rect class="b3" x="130" y="40" width="62" height="34" rx="4"/><text class="ts" x="161" y="61">environment</text>
<path class="a" d="M72 48 C96 24, 106 24, 128 48"/><text class="ts" x="100" y="28">action</text>
<path class="a" d="M128 66 C106 90, 96 90, 72 66"/><text class="ts" x="100" y="96">state · reward</text>
</svg></div>
<div class="tk-txt"><p><strong>Reinforcement Learning.</strong> Reinforcement learning trains agents to maximize cumulative reward through interaction with an environment rather than from labelled examples. It fits sequential decision problems — control, scheduling, and increasingly post-training for language models.</p></div>
</div>

<div class="tk-item" id="active-learning">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="dl" d="M100 8 V92"/>
<circle class="fa" cx="30" cy="26" r="4"/><circle class="fa" cx="52" cy="60" r="4"/><circle class="fa" cx="26" cy="76" r="4"/><circle class="fa" cx="62" cy="30" r="4"/>
<circle class="fg" cx="150" cy="30" r="4"/><circle class="fg" cx="172" cy="62" r="4"/><circle class="fg" cx="140" cy="78" r="4"/><circle class="fg" cx="176" cy="24" r="4"/>
<circle class="fr" cx="92" cy="36" r="4.5"/><circle class="dl" cx="92" cy="36" r="9" fill="none"/>
<circle class="fr" cx="108" cy="62" r="4.5"/><circle class="dl" cx="108" cy="62" r="9" fill="none"/>
<circle class="fr" cx="94" cy="80" r="4.5"/><circle class="dl" cx="94" cy="80" r="9" fill="none"/>
<text class="ts" x="100" y="106">label the uncertain ones first</text>
</svg></div>
<div class="tk-txt"><p><strong>Active Learning.</strong> Active learning selects the most informative unlabelled examples for annotation rather than labelling at random. It reaches a target accuracy with substantially less labelling effort, which matters most when domain experts are the bottleneck.</p></div>
</div>

<h2 class="tk-sec" id="sec-machine-learning">Machine Learning and Statistical Modelling</h2>

<div class="tk-item" id="predictive-modelling">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="26" width="18" height="14"/><rect class="bg" x="26" y="26" width="18" height="14"/><rect class="bg" x="46" y="26" width="18" height="14"/>
<rect class="bg" x="6" y="42" width="18" height="14"/><rect class="b" x="26" y="42" width="18" height="14"/><rect class="bg" x="46" y="42" width="18" height="14"/>
<rect class="b" x="6" y="58" width="18" height="14"/><rect class="bg" x="26" y="58" width="18" height="14"/><rect class="bg" x="46" y="58" width="18" height="14"/>
<text class="ts" x="35" y="86">features</text>
<path class="a" d="M68 50 H86"/>
<rect class="b4" x="88" y="32" width="50" height="36" rx="4"/><text class="ts" x="113" y="53">model</text>
<path class="a" d="M140 50 H156"/>
<rect class="b3" x="158" y="36" width="38" height="28" rx="3"/><text class="ts" x="177" y="53">ŷ</text>
</svg></div>
<div class="tk-txt"><p><strong>Predictive Modelling.</strong> Predictive modelling fits models that estimate an outcome from input features, optimizing for generalization to unseen data. Feature quality, leakage control, and honest validation splits determine results far more than algorithm choice.</p></div>
</div>

<div class="tk-item" id="statistical-modelling">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M18 90 H190 M18 90 V12"/>
<path class="bd" d="M22 82 L186 26 L186 44 L22 96 Z"/>
<path class="l" d="M22 88 L186 34"/>
<circle class="fa" cx="44" cy="80" r="3.5"/><circle class="fa" cx="70" cy="70" r="3.5"/><circle class="fa" cx="96" cy="66" r="3.5"/>
<circle class="fa" cx="120" cy="52" r="3.5"/><circle class="fa" cx="148" cy="46" r="3.5"/><circle class="fa" cx="172" cy="34" r="3.5"/>
<text class="ts" x="120" y="104">fit + confidence band</text>
</svg></div>
<div class="tk-txt"><p><strong>Statistical Modelling.</strong> Statistical modelling specifies an explicit relationship between variables in order to explain and quantify it, with uncertainty attached. Where predictive modelling optimizes accuracy, statistical modelling optimizes interpretability and defensible inference.</p></div>
</div>

<div class="tk-item" id="significance-modelling">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M8 88 H192"/>
<path class="l" d="M14 88 Q52 16 90 88"/>
<path class="l" d="M92 88 Q134 8 176 88"/>
<path class="dl" d="M132 12 V94"/><text class="ts" x="152" y="10">α = .05</text>
<path class="b2" d="M132 88 Q152 42 176 88 Z" opacity="0.55"/>
<text class="ts" x="45" y="102">H₀</text><text class="ts" x="140" y="102">observed</text>
</svg></div>
<div class="tk-txt"><p><strong>Significance Modelling.</strong> Significance testing establishes whether an observed effect is distinguishable from chance, through hypothesis tests, confidence intervals, and effect sizes. Handling multiple comparisons and adequate power is what keeps conclusions from being noise dressed up as findings.</p></div>
</div>

<div class="tk-item" id="time-series-modelling">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M10 92 H192 M10 92 V10"/>
<path class="l" d="M14 70 Q28 34 42 70 T 70 68 Q84 30 98 66 T 126 64 Q140 24 154 60 T 184 56"/>
<text class="ts" x="56" y="106">repeating seasonality + trend</text>
</svg></div>
<div class="tk-txt"><p><strong>Time Series Modelling.</strong> Time series modelling handles data where order, seasonality, and autocorrelation carry the signal, using approaches from ARIMA to gradient-boosted and neural sequence models. Validation must respect chronology, since random splits leak the future into training.</p></div>
</div>

<div class="tk-item" id="forecasting">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M10 92 H192 M10 92 V10"/>
<path class="bd" d="M112 52 L188 20 L188 84 Z"/>
<polyline class="l" points="16,80 34,66 52,74 70,56 88,62 112,52"/>
<path class="dl" d="M112 52 L188 46"/>
<path class="dl" d="M112 14 V94"/><text class="ts" x="150" y="12">forecast</text><text class="ts" x="60" y="12">history</text>
<text class="ts" x="150" y="104">prediction interval</text>
</svg></div>
<div class="tk-txt"><p><strong>Forecasting.</strong> Forecasting projects future values from historical patterns and known drivers, ideally with prediction intervals rather than point estimates alone. Its value in production depends on backtesting honestly against what was actually knowable at each point in time.</p></div>
</div>

<div class="tk-item" id="anomaly-detection">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M10 96 H192"/>
<path class="bd" d="M14 44 L188 40 L188 74 L14 78 Z"/>
<polyline class="l" points="14,62 40,56 66,66 92,58 118,62 144,54 170,60 188,56"/>
<circle class="fr" cx="118" cy="20" r="5"/><circle class="dl" cx="118" cy="20" r="11" fill="none"/>
<text class="ts" x="150" y="18">anomaly</text>
<text class="ts" x="60" y="92">expected band</text>
</svg></div>
<div class="tk-txt"><p><strong>Anomaly Detection.</strong> Anomaly detection identifies observations that deviate meaningfully from expected behaviour, using statistical thresholds, density estimation, or reconstruction error. Extreme class imbalance means precision-recall tradeoffs and alert fatigue drive the design more than raw model accuracy.</p></div>
</div>

<div class="tk-item" id="text-classification">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="36" width="42" height="38" rx="3"/><path class="l" d="M14 48 H40 M14 56 H40 M14 64 H32"/>
<path class="a" d="M50 55 H68"/>
<rect class="b4" x="70" y="34" width="46" height="42" rx="4"/><text class="ts" x="93" y="59">classifier</text>
<path class="a3" d="M118 46 L142 30"/><path class="dl" d="M118 58 H142"/><path class="dl" d="M118 68 L142 84"/>
<rect class="b3" x="144" y="18" width="50" height="22" rx="3"/><text class="ts" x="169" y="32">billing</text>
<rect class="bg" x="144" y="46" width="50" height="22" rx="3"/><text class="ts" x="169" y="60">bug</text>
<rect class="bg" x="144" y="74" width="50" height="22" rx="3"/><text class="ts" x="169" y="88">spam</text>
</svg></div>
<div class="tk-txt"><p><strong>Text Classification.</strong> Text classification assigns documents to categories for tasks like routing, moderation, intent detection, and tagging. Modern approaches span fine-tuned transformers to zero-shot LLM classification, chosen by the throughput and label-volume constraints of the task.</p></div>
</div>

<div class="tk-item" id="multimodal-video-models">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="12" width="18" height="18"/><rect class="b" x="24" y="12" width="18" height="18"/><rect class="b" x="44" y="12" width="18" height="18"/><rect class="b" x="64" y="12" width="18" height="18"/>
<text class="ts" x="43" y="8">frames</text>
<polyline class="l" points="6,55 16,44 26,64 36,46 46,60 56,48 66,58 78,52"/><text class="ts" x="43" y="74">audio</text>
<rect class="b3" x="4" y="82" width="78" height="18" rx="3"/><text class="ts" x="43" y="95">transcript</text>
<path class="a" d="M86 22 L124 46 M86 54 H124 M86 90 L124 66"/>
<rect class="b4" x="126" y="34" width="68" height="44" rx="4"/><text class="ts" x="160" y="52">joint</text><text class="ts" x="160" y="65">reasoning</text>
</svg></div>
<div class="tk-txt"><p><strong>Multimodal Video Models.</strong> Multimodal video models reason jointly over frames, audio, and text to support captioning, retrieval, event detection, and question answering. Temporal sampling and the memory cost of long sequences are the dominant engineering constraints.</p></div>
</div>

<h2 class="tk-sec" id="sec-data-engineering">Data Engineering and Databases</h2>

<div class="tk-item" id="etl-data-pipelines">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="b" d="M6 32 a20 7 0 0 1 40 0 v42 a20 7 0 0 1 -40 0 z"/><path class="l" d="M6 32 a20 7 0 0 0 40 0"/><text class="ts" x="26" y="94">source</text>
<path class="a" d="M50 53 H68"/>
<rect class="b4" x="70" y="34" width="50" height="38" rx="4"/><text class="ts" x="95" y="49">clean</text><text class="ts" x="95" y="62">reshape</text>
<path class="a" d="M122 53 H140"/>
<path class="b3" d="M144 32 a22 7 0 0 1 44 0 v42 a22 7 0 0 1 -44 0 z"/><path class="l" d="M144 32 a22 7 0 0 0 44 0"/><text class="ts" x="166" y="94">warehouse</text>
</svg></div>
<div class="tk-txt"><p><strong>ETL Data Pipelines.</strong> ETL pipelines move data between systems while extracting, transforming, and loading it into a queryable shape. Reliability comes from idempotent steps, schema contracts, and clear handling of late or malformed records.</p></div>
</div>

<div class="tk-item" id="data-cleaning">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="26" width="20" height="16"/><rect class="b2" x="28" y="26" width="20" height="16"/><rect class="bg" x="50" y="26" width="20" height="16"/>
<rect class="b2" x="6" y="44" width="20" height="16"/><rect class="bg" x="28" y="44" width="20" height="16"/><rect class="bg" x="50" y="44" width="20" height="16"/>
<rect class="bg" x="6" y="62" width="20" height="16"/><rect class="bg" x="28" y="62" width="20" height="16"/><rect class="b2" x="50" y="62" width="20" height="16"/>
<text class="ts" x="38" y="92">nulls · dupes</text>
<path class="a" d="M78 52 H106"/><text class="ts" x="92" y="44">clean</text>
<rect class="b3" x="116" y="26" width="20" height="16"/><rect class="b3" x="138" y="26" width="20" height="16"/><rect class="b3" x="160" y="26" width="20" height="16"/>
<rect class="b3" x="116" y="44" width="20" height="16"/><rect class="b3" x="138" y="44" width="20" height="16"/><rect class="b3" x="160" y="44" width="20" height="16"/>
<rect class="b3" x="116" y="62" width="20" height="16"/><rect class="b3" x="138" y="62" width="20" height="16"/><rect class="b3" x="160" y="62" width="20" height="16"/>
<text class="ts" x="148" y="92">analysis-ready</text>
</svg></div>
<div class="tk-txt"><p><strong>Data Cleaning.</strong> Data cleaning resolves missing values, duplicates, inconsistent encodings, and outliers before analysis or training. It routinely consumes most of a project's time and has more effect on the result than model selection.</p></div>
</div>

<div class="tk-item" id="data-analysis">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="28" width="58" height="52" rx="3"/><path class="l" d="M6 42 H64 M6 56 H64 M6 70 H64 M25 28 V80 M45 28 V80"/>
<text class="ts" x="35" y="94">dataset</text>
<path class="a" d="M70 54 H88"/>
<path class="l" d="M96 86 H190 M96 86 V22"/>
<rect class="b" x="104" y="58" width="16" height="28"/><rect class="b" x="126" y="42" width="16" height="44"/><rect class="b2" x="148" y="28" width="16" height="58"/><rect class="b" x="170" y="52" width="16" height="34"/>
<text class="ts" x="150" y="20">the finding</text>
</svg></div>
<div class="tk-txt"><p><strong>Data Analysis.</strong> Data analysis inspects datasets to characterize distributions, relationships, and irregularities, usually as a precursor to modelling or a decision. Its output is a defensible claim about the data, not just a chart.</p></div>
</div>

<div class="tk-item" id="data-analytics">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="4" y="10" width="92" height="42" rx="4"/><text class="t" x="50" y="30">12.4k</text><text class="ts" x="50" y="43">active users</text>
<rect class="bg" x="104" y="10" width="92" height="42" rx="4"/><polyline class="l" points="112,42 128,32 144,36 160,22 176,26 188,16"/><text class="ts" x="150" y="47">weekly trend</text>
<rect class="bg" x="4" y="58" width="92" height="42" rx="4"/><rect class="b3" x="12" y="76" width="14" height="16"/><rect class="b3" x="30" y="68" width="14" height="24"/><rect class="b3" x="48" y="80" width="14" height="12"/><rect class="b3" x="66" y="72" width="14" height="20"/>
<rect class="bg" x="104" y="58" width="92" height="42" rx="4"/><text class="t" x="150" y="78">98.2%</text><text class="ts" x="150" y="91">uptime</text>
</svg></div>
<div class="tk-txt"><p><strong>Data Analytics.</strong> Data analytics turns raw records into metrics, dashboards, and reporting that inform business or product decisions. The engineering challenge is definitional consistency — one metric meaning one thing everywhere.</p></div>
</div>

<div class="tk-item" id="data-science-workflows">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="14" width="52" height="24" rx="3"/><text class="ts" x="32" y="29">frame</text>
<rect class="b" x="74" y="14" width="52" height="24" rx="3"/><text class="ts" x="100" y="29">explore</text>
<rect class="b4" x="142" y="14" width="52" height="24" rx="3"/><text class="ts" x="168" y="29">features</text>
<rect class="b4" x="142" y="72" width="52" height="24" rx="3"/><text class="ts" x="168" y="87">model</text>
<rect class="b3" x="74" y="72" width="52" height="24" rx="3"/><text class="ts" x="100" y="87">validate</text>
<rect class="b3" x="6" y="72" width="52" height="24" rx="3"/><text class="ts" x="32" y="87">ship</text>
<path class="a" d="M60 26 H70"/><path class="a" d="M128 26 H138"/><path class="a" d="M168 40 V68"/>
<path class="a" d="M140 84 H130"/><path class="a" d="M72 84 H62"/>
<path class="dl" d="M32 70 V52 H100 V40"/><text class="ts" x="66" y="60">iterate</text>
</svg></div>
<div class="tk-txt"><p><strong>Data Science Workflows.</strong> A data science workflow spans problem framing, exploration, feature engineering, modelling, validation, and handoff to production. Making it reproducible through versioned data, environments, and experiment tracking is what allows results to be trusted later.</p></div>
</div>

<div class="tk-item" id="postgresql">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="16" width="112" height="68" rx="3"/><path class="l" d="M6 32 H118 M6 50 H118 M6 68 H118 M44 16 V84 M82 16 V84"/>
<text class="ts" x="62" y="98">relational tables · ACID</text>
<rect class="b4" x="128" y="20" width="64" height="24" rx="3"/><text class="ts" x="160" y="35">B-tree index</text>
<rect class="b3" x="128" y="54" width="64" height="24" rx="3"/><text class="ts" x="160" y="69">pgvector</text>
</svg></div>
<div class="tk-txt"><p><strong>PostgreSQL.</strong> PostgreSQL is a relational database with strong transactional guarantees, rich indexing, and extensions such as pgvector for embedding search. It is often the right default, serving relational, JSON, and vector workloads before specialized stores are warranted.</p></div>
</div>

<div class="tk-item" id="mongodb">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="14" y="10" width="172" height="90" rx="4"/>
<text class="ts" x="40" y="28">{ _id, name,</text>
<rect class="b3" x="40" y="36" width="132" height="34" rx="3"/>
<text class="ts" x="72" y="50">tags: [ … ],</text><text class="ts" x="78" y="64">meta: { … }</text>
<text class="ts" x="30" y="86">}</text>
<text class="ts" x="140" y="88">schema-free</text>
</svg></div>
<div class="tk-txt"><p><strong>MongoDB.</strong> MongoDB is a document database storing flexible JSON-like records without a fixed schema. It suits evolving data shapes and rapid iteration, with indexing and aggregation pipelines carrying the query load.</p></div>
</div>

<div class="tk-item" id="dynamodb">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="40" width="52" height="30" rx="3"/><text class="ts" x="30" y="52">partition</text><text class="ts" x="30" y="64">key</text>
<path class="a" d="M58 48 L84 26 M58 55 H84 M58 62 L84 84"/>
<rect class="b3" x="86" y="14" width="60" height="24" rx="3"/><text class="ts" x="116" y="29">shard 1</text>
<rect class="b3" x="86" y="44" width="60" height="24" rx="3"/><text class="ts" x="116" y="59">shard 2</text>
<rect class="b3" x="86" y="74" width="60" height="24" rx="3"/><text class="ts" x="116" y="89">shard 3</text>
<text class="ts" x="174" y="52">single-</text><text class="ts" x="174" y="63">digit ms</text>
</svg></div>
<div class="tk-txt"><p><strong>DynamoDB.</strong> DynamoDB is a managed key-value and document store on AWS offering single-digit millisecond latency at effectively unbounded scale. Its performance depends almost entirely on access patterns being designed into the partition and sort key up front.</p></div>
</div>

<div class="tk-item" id="google-bigquery">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b3" x="8" y="20" width="22" height="64" rx="2"/><rect class="bg" x="34" y="20" width="22" height="64" rx="2"/>
<rect class="b3" x="60" y="20" width="22" height="64" rx="2"/><rect class="bg" x="86" y="20" width="22" height="64" rx="2"/>
<rect class="bg" x="112" y="20" width="22" height="64" rx="2"/><rect class="bg" x="138" y="20" width="22" height="64" rx="2"/>
<rect class="bg" x="164" y="20" width="22" height="64" rx="2"/>
<text class="ts" x="100" y="14">columnar storage</text>
<text class="ts" x="100" y="98">green = columns actually scanned</text>
</svg></div>
<div class="tk-txt"><p><strong>Google BigQuery.</strong> BigQuery is a serverless columnar warehouse that runs SQL over very large datasets without cluster management. Cost and speed hinge on partitioning, clustering, and scanning only the columns a query truly needs.</p></div>
</div>

<div class="tk-item" id="google-pub-sub">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="44" height="26" rx="3"/><text class="ts" x="26" y="59">producer</text>
<path class="a" d="M50 55 H68"/>
<rect class="b4" x="70" y="30" width="46" height="50" rx="4"/><text class="ts" x="93" y="59">topic</text>
<path class="a" d="M118 46 L146 26 M118 55 H146 M118 64 L146 84"/>
<rect class="b3" x="148" y="14" width="46" height="22" rx="3"/><text class="ts" x="171" y="28">sub A</text>
<rect class="b3" x="148" y="44" width="46" height="22" rx="3"/><text class="ts" x="171" y="58">sub B</text>
<rect class="b3" x="148" y="74" width="46" height="22" rx="3"/><text class="ts" x="171" y="88">sub C</text>
<text class="ts" x="60" y="94">at-least-once</text>
</svg></div>
<div class="tk-txt"><p><strong>Google Pub/Sub.</strong> Pub/Sub is a managed messaging service that decouples producers from consumers with asynchronous, at-least-once delivery. It absorbs traffic spikes and lets independent services scale on their own terms, provided consumers are idempotent.</p></div>
</div>

<h2 class="tk-sec" id="sec-backend">Backend, APIs, and Integration</h2>

<div class="tk-item" id="rest-apis">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="38" width="46" height="34" rx="3"/><text class="ts" x="27" y="58">client</text>
<path class="a" d="M52 40 H140"/><text class="ts" x="96" y="34">GET /items</text>
<path class="a" d="M140 70 H54"/><text class="ts" x="96" y="86">200 · JSON</text>
<rect class="b3" x="142" y="38" width="52" height="34" rx="3"/><text class="ts" x="168" y="58">resource</text>
<text class="ts" x="100" y="14">GET · POST · PUT · DELETE</text>
</svg></div>
<div class="tk-txt"><p><strong>REST APIs.</strong> REST APIs expose resources over HTTP with predictable verbs, status codes, and representations. Versioning, pagination, and idempotency are the design decisions that determine whether an API stays usable as it evolves.</p></div>
</div>

<div class="tk-item" id="graphql">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="26" width="58" height="58" rx="3"/><text class="ts" x="33" y="44">{ user {</text><text class="ts" x="36" y="58">name, id</text><text class="ts" x="30" y="72">} }</text>
<path class="a" d="M64 55 H82"/>
<rect class="b4" x="84" y="30" width="46" height="50" rx="4"/><text class="ts" x="107" y="50">typed</text><text class="ts" x="107" y="63">schema</text>
<path class="a" d="M132 55 H148"/>
<rect class="b3" x="150" y="38" width="44" height="16" rx="2"/><text class="ts" x="172" y="50">name</text>
<rect class="b3" x="150" y="58" width="44" height="16" rx="2"/><text class="ts" x="172" y="70">id</text>
<text class="ts" x="100" y="98">exactly the fields asked for</text>
</svg></div>
<div class="tk-txt"><p><strong>GraphQL.</strong> GraphQL serves a typed schema where clients request exactly the fields they need in a single round trip. It removes over-fetching at the cost of new concerns around query depth limits, caching, and resolver efficiency.</p></div>
</div>

<div class="tk-item" id="websockets">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="38" width="48" height="34" rx="3"/><text class="ts" x="28" y="58">client</text>
<rect class="b3" x="148" y="38" width="48" height="34" rx="3"/><text class="ts" x="172" y="58">server</text>
<path class="a" d="M54 44 H146"/><path class="a" d="M146 66 H56"/>
<rect class="b4" x="70" y="50" width="10" height="10" rx="2"/><rect class="b4" x="90" y="50" width="10" height="10" rx="2"/><rect class="b4" x="110" y="50" width="10" height="10" rx="2"/>
<text class="ts" x="100" y="30">one persistent connection</text>
<text class="ts" x="100" y="86">push without polling</text>
</svg></div>
<div class="tk-txt"><p><strong>WebSockets.</strong> WebSockets maintain a persistent bidirectional connection, enabling server push without polling. They are the natural transport for streaming tokens, live updates, and collaborative interfaces.</p></div>
</div>

<div class="tk-item" id="flask">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="44" height="26" rx="3"/><text class="ts" x="26" y="59">request</text>
<path class="a" d="M50 55 H68"/>
<rect class="b4" x="70" y="26" width="56" height="58" rx="4"/><text class="ts" x="98" y="42">@app.route</text><text class="ts" x="98" y="58">/predict</text><text class="ts" x="98" y="74">/health</text>
<path class="a" d="M128 55 H146"/>
<rect class="b3" x="148" y="42" width="46" height="26" rx="3"/><text class="ts" x="171" y="59">JSON</text>
</svg></div>
<div class="tk-txt"><p><strong>Flask.</strong> Flask is a minimal Python web framework that stays out of the way, which makes it a common choice for model-serving endpoints and internal services. Its small surface area is an advantage when the interesting logic lives outside the framework.</p></div>
</div>

<div class="tk-item" id="celery">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="40" height="26" rx="3"/><text class="ts" x="24" y="59">web</text>
<path class="a" d="M46 55 H62"/>
<rect class="bg" x="64" y="34" width="14" height="42" rx="2"/><rect class="bg" x="80" y="34" width="14" height="42" rx="2"/><rect class="bg" x="96" y="34" width="14" height="42" rx="2"/>
<text class="ts" x="87" y="90">queue</text>
<path class="a" d="M112 46 L142 28 M112 55 H142 M112 64 L142 82"/>
<rect class="b3" x="144" y="16" width="50" height="22" rx="3"/><text class="ts" x="169" y="30">worker</text>
<rect class="b3" x="144" y="44" width="50" height="22" rx="3"/><text class="ts" x="169" y="58">worker</text>
<rect class="b3" x="144" y="72" width="50" height="22" rx="3"/><text class="ts" x="169" y="86">worker</text>
</svg></div>
<div class="tk-txt"><p><strong>Celery.</strong> Celery runs asynchronous and scheduled tasks through a distributed worker pool backed by a message broker. It is the standard way to move long-running work — inference jobs, ingestion, batch scoring — off the request path.</p></div>
</div>

<div class="tk-item" id="multithreading">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<text class="ts" x="22" y="26">t1</text><rect class="b" x="36" y="16" width="40" height="14" rx="2"/><rect class="bg" x="78" y="16" width="60" height="14" rx="2"/><rect class="b" x="140" y="16" width="30" height="14" rx="2"/>
<text class="ts" x="22" y="54">t2</text><rect class="bg" x="36" y="44" width="34" height="14" rx="2"/><rect class="b" x="72" y="44" width="46" height="14" rx="2"/><rect class="bg" x="120" y="44" width="50" height="14" rx="2"/>
<text class="ts" x="22" y="82">t3</text><rect class="b" x="36" y="72" width="26" height="14" rx="2"/><rect class="bg" x="64" y="72" width="56" height="14" rx="2"/><rect class="b" x="122" y="72" width="48" height="14" rx="2"/>
<text class="ts" x="100" y="102">grey = waiting on I/O, not compute</text>
</svg></div>
<div class="tk-txt"><p><strong>Multithreading.</strong> Multithreading runs concurrent execution paths within a process, and in Python it pays off mainly for I/O-bound work where threads wait rather than compute. Knowing when to reach for processes, async, or native parallelism instead is the practical skill.</p></div>
</div>

<div class="tk-item" id="shell-scripting">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="14" width="188" height="82" rx="4"/>
<path class="l" d="M6 30 H194"/>
<circle class="fr" cx="18" cy="22" r="3"/><circle class="fm" cx="30" cy="22" r="3"/><circle class="fg" cx="42" cy="22" r="3"/>
<text class="ts" x="70" y="48" text-anchor="start">$ cat logs/*.txt \</text>
<text class="ts" x="76" y="62" text-anchor="start">| grep ERROR \</text>
<text class="ts" x="76" y="76" text-anchor="start">| sort | uniq -c</text>
</svg></div>
<div class="tk-txt"><p><strong>Shell Scripting.</strong> Shell scripting automates file handling, job orchestration, and environment setup with the tools already present on every machine. It remains the shortest path between a manual sequence of commands and a repeatable one.</p></div>
</div>

<h2 class="tk-sec" id="sec-platform">Platform, Infrastructure, and MLOps</h2>

<div class="tk-item" id="platform-engineering">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="12" width="56" height="26" rx="3"/><text class="ts" x="34" y="28">team A</text>
<rect class="b" x="72" y="12" width="56" height="26" rx="3"/><text class="ts" x="100" y="28">team B</text>
<rect class="b" x="138" y="12" width="56" height="26" rx="3"/><text class="ts" x="166" y="28">team C</text>
<path class="a" d="M34 54 V42"/><path class="a" d="M100 54 V42"/><path class="a" d="M166 54 V42"/>
<rect class="b4" x="6" y="56" width="188" height="40" rx="4"/><text class="t" x="100" y="74">internal platform</text><text class="ts" x="100" y="87">paved paths · self-service</text>
</svg></div>
<div class="tk-txt"><p><strong>Platform Engineering.</strong> Platform engineering builds the internal tooling, paved paths, and self-service infrastructure that other engineering teams build on. Success is measured by how much undifferentiated setup work it removes from every other team.</p></div>
</div>

<div class="tk-item" id="devops-practices">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="a" d="M60 30 A38 26 0 0 1 140 30"/>
<path class="a" d="M140 74 A38 16 0 0 1 60 74"/>
<rect class="b" x="10" y="38" width="56" height="28" rx="3"/><text class="ts" x="38" y="56">dev</text>
<rect class="b3" x="134" y="38" width="56" height="28" rx="3"/><text class="ts" x="162" y="56">ops</text>
<text class="ts" x="100" y="20">ship</text><text class="ts" x="100" y="106">feedback from prod</text>
</svg></div>
<div class="tk-txt"><p><strong>DevOps Practices.</strong> DevOps closes the gap between writing software and operating it through automation, shared ownership, and fast feedback from production. The cultural half — who is accountable when it breaks — matters as much as the tooling half.</p></div>
</div>

<div class="tk-item" id="sdlc">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="30" width="34" height="30" rx="3"/><text class="ts" x="21" y="49">plan</text>
<path class="a" d="M39 45 H45"/>
<rect class="b" x="46" y="30" width="34" height="30" rx="3"/><text class="ts" x="63" y="49">design</text>
<path class="a" d="M81 45 H87"/>
<rect class="b" x="88" y="30" width="34" height="30" rx="3"/><text class="ts" x="105" y="49">build</text>
<path class="a" d="M123 45 H129"/>
<rect class="b" x="130" y="30" width="34" height="30" rx="3"/><text class="ts" x="147" y="49">test</text>
<path class="a" d="M165 45 H171"/>
<rect class="b3" x="172" y="30" width="26" height="30" rx="3"/><text class="ts" x="185" y="49">ship</text>
<path class="dl" d="M185 62 V80 H21 V62"/><text class="ts" x="103" y="92">maintain · iterate</text>
</svg></div>
<div class="tk-txt"><p><strong>SDLC.</strong> The software development lifecycle structures work from requirements through design, implementation, testing, release, and maintenance. Understanding it is what lets quality gates and review land at the stage where they are cheapest.</p></div>
</div>

<div class="tk-item" id="ai-solution-lifecycle">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="14" width="54" height="24" rx="3"/><text class="ts" x="33" y="29">data</text>
<rect class="b" x="73" y="14" width="54" height="24" rx="3"/><text class="ts" x="100" y="29">experiment</text>
<rect class="b4" x="140" y="14" width="54" height="24" rx="3"/><text class="ts" x="167" y="29">evaluate</text>
<rect class="b3" x="140" y="72" width="54" height="24" rx="3"/><text class="ts" x="167" y="87">deploy</text>
<rect class="b2" x="73" y="72" width="54" height="24" rx="3"/><text class="ts" x="100" y="87">monitor</text>
<rect class="b" x="6" y="72" width="54" height="24" rx="3"/><text class="ts" x="33" y="87">retrain</text>
<path class="a" d="M62 26 H69"/><path class="a" d="M129 26 H136"/><path class="a" d="M167 40 V68"/>
<path class="a" d="M138 84 H131"/><path class="a" d="M71 84 H64"/><path class="a" d="M33 70 V42"/>
<text class="ts" x="100" y="58">drift closes the loop</text>
</svg></div>
<div class="tk-txt"><p><strong>AI Solution Lifecycle.</strong> The AI solution lifecycle extends the SDLC with data collection, experimentation, evaluation, deployment, monitoring, and retraining. Its defining feature is that shipping is the start of the feedback loop rather than the end of the project.</p></div>
</div>

<div class="tk-item" id="ci-cd-for-ai-systems">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="2" y="40" width="32" height="28" rx="3"/><text class="ts" x="18" y="57">commit</text>
<path class="a" d="M35 54 H41"/>
<rect class="b" x="42" y="40" width="32" height="28" rx="3"/><text class="ts" x="58" y="57">build</text>
<path class="a" d="M75 54 H81"/>
<rect class="b" x="82" y="40" width="32" height="28" rx="3"/><text class="ts" x="98" y="57">test</text>
<path class="a" d="M115 54 H121"/>
<rect class="b2" x="122" y="34" width="40" height="40" rx="3"/><text class="ts" x="142" y="50">eval</text><text class="ts" x="142" y="62">gate</text>
<path class="a3" d="M163 54 H169"/>
<rect class="b3" x="170" y="40" width="28" height="28" rx="3"/><text class="ts" x="184" y="57">prod</text>
<text class="ts" x="100" y="94">quality regression blocks the release</text>
</svg></div>
<div class="tk-txt"><p><strong>CI/CD for AI Systems.</strong> CI/CD for AI systems automates build, test, and release for code, data, prompts, and model artifacts together. Beyond conventional tests it gates on evaluation thresholds, so a quality regression blocks a release the same way a failing unit test does.</p></div>
</div>

<div class="tk-item" id="containerization-workflows">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b4" x="8" y="26" width="56" height="56" rx="4"/><text class="ts" x="36" y="44">app</text><text class="ts" x="36" y="58">+ deps</text><text class="ts" x="36" y="72">+ CUDA</text>
<path class="a" d="M68 40 L96 26 M68 54 H96 M68 68 L96 84"/>
<rect class="b3" x="100" y="14" width="94" height="24" rx="3"/><text class="ts" x="147" y="29">laptop</text>
<rect class="b3" x="100" y="44" width="94" height="24" rx="3"/><text class="ts" x="147" y="59">CI runner</text>
<rect class="b3" x="100" y="74" width="94" height="24" rx="3"/><text class="ts" x="147" y="89">GPU cluster</text>
</svg></div>
<div class="tk-txt"><p><strong>Containerization Workflows.</strong> Containerization packages an application with its dependencies into a reproducible image that runs identically across environments. For ML work it is the most reliable answer to CUDA, driver, and dependency drift between laptop and cluster.</p></div>
</div>

<div class="tk-item" id="terraform">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="34" width="46" height="42" rx="3"/><text class="ts" x="27" y="50">main.tf</text><text class="ts" x="27" y="64">(in git)</text>
<path class="a" d="M52 55 H70"/>
<rect class="b4" x="72" y="34" width="46" height="42" rx="4"/><text class="ts" x="95" y="50">plan</text><text class="ts" x="95" y="64">diff</text>
<path class="a" d="M120 55 H138"/>
<rect class="b3" x="140" y="16" width="54" height="22" rx="3"/><text class="ts" x="167" y="30">vpc</text>
<rect class="b3" x="140" y="44" width="54" height="22" rx="3"/><text class="ts" x="167" y="58">cluster</text>
<rect class="b3" x="140" y="72" width="54" height="22" rx="3"/><text class="ts" x="167" y="86">bucket</text>
</svg></div>
<div class="tk-txt"><p><strong>Terraform.</strong> Terraform declares infrastructure as versioned code and reconciles real cloud resources against that declaration. Peer-reviewable, repeatable environments follow directly, along with state management as the main operational discipline.</p></div>
</div>

<div class="tk-item" id="jenkins">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b3" x="6" y="30" width="42" height="26" rx="3"/><text class="ts" x="27" y="46">checkout</text>
<path class="a" d="M50 43 H56"/>
<rect class="b3" x="58" y="30" width="42" height="26" rx="3"/><text class="ts" x="79" y="46">build</text>
<path class="a" d="M102 43 H108"/>
<rect class="b3" x="110" y="30" width="42" height="26" rx="3"/><text class="ts" x="131" y="46">test</text>
<path class="a" d="M154 43 H160"/>
<rect class="bg" x="162" y="30" width="36" height="26" rx="3"/><text class="ts" x="180" y="46">deploy</text>
<text class="ts" x="27" y="72">✓</text><text class="ts" x="79" y="72">✓</text><text class="ts" x="131" y="72">✓</text><text class="ts" x="180" y="72">…</text>
<text class="ts" x="100" y="92">declarative pipeline stages</text>
</svg></div>
<div class="tk-txt"><p><strong>Jenkins.</strong> Jenkins is a long-established automation server for building, testing, and deploying through configurable pipelines. Its plugin ecosystem lets it integrate with almost any toolchain, which is why it persists in established estates.</p></div>
</div>

<div class="tk-item" id="prometheus">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="18" width="38" height="20" rx="3"/><text class="ts" x="23" y="32">svc</text>
<rect class="b" x="4" y="46" width="38" height="20" rx="3"/><text class="ts" x="23" y="60">svc</text>
<rect class="b" x="4" y="74" width="38" height="20" rx="3"/><text class="ts" x="23" y="88">svc</text>
<path class="a" d="M44 28 L72 48 M44 56 H72 M44 84 L72 64"/><text class="ts" x="58" y="14">scrape</text>
<rect class="b4" x="74" y="38" width="48" height="36" rx="4"/><text class="ts" x="98" y="60">TSDB</text>
<path class="a" d="M124 56 H142"/>
<rect class="b2" x="144" y="42" width="52" height="28" rx="3"/><text class="ts" x="170" y="59">alert rule</text>
<text class="ts" x="98" y="94">latency · errors · saturation</text>
</svg></div>
<div class="tk-txt"><p><strong>Prometheus.</strong> Prometheus scrapes and stores time-series metrics and evaluates alerting rules over them. It is the default instrumentation layer for tracking latency, throughput, error rates, and resource saturation in production.</p></div>
</div>

<div class="tk-item" id="load-balancing">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="a" d="M4 40 H24 M4 55 H24 M4 70 H24"/><text class="ts" x="14" y="30">traffic</text>
<rect class="b4" x="28" y="34" width="46" height="42" rx="4"/><text class="ts" x="51" y="50">load</text><text class="ts" x="51" y="63">balancer</text>
<path class="a" d="M76 46 L106 26 M76 55 H106 M76 64 L106 84"/>
<rect class="bg" x="108" y="14" width="86" height="22" rx="3"/><rect class="b3" x="108" y="14" width="40" height="22" rx="3"/><text class="ts" x="128" y="29">47%</text>
<rect class="bg" x="108" y="44" width="86" height="22" rx="3"/><rect class="b3" x="108" y="44" width="46" height="22" rx="3"/><text class="ts" x="131" y="59">52%</text>
<rect class="bg" x="108" y="74" width="86" height="22" rx="3"/><rect class="b3" x="108" y="74" width="43" height="22" rx="3"/><text class="ts" x="130" y="89">49%</text>
</svg></div>
<div class="tk-txt"><p><strong>Load Balancing.</strong> Load balancing spreads traffic across instances to keep any one from becoming a bottleneck or a single point of failure. For AI workloads the routing often has to account for model warmth, GPU memory, and request cost rather than simple round-robin.</p></div>
</div>

<h2 class="tk-sec" id="sec-security">Security and Access</h2>

<div class="tk-item" id="authentication-fundamentals">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<circle class="fa" cx="24" cy="42" r="10"/><path class="fa" d="M8 74 a16 16 0 0 1 32 0 z"/><text class="ts" x="24" y="94">user</text>
<path class="a" d="M46 55 H68"/><text class="ts" x="57" y="46">creds</text>
<rect class="b4" x="70" y="34" width="52" height="42" rx="4"/><text class="ts" x="96" y="50">verify</text><text class="ts" x="96" y="63">identity</text>
<path class="a3" d="M124 55 H142"/>
<rect class="b3" x="144" y="40" width="52" height="30" rx="3"/><text class="ts" x="170" y="52">session</text><text class="ts" x="170" y="64">token</text>
<text class="ts" x="100" y="98">who are you?</text>
</svg></div>
<div class="tk-txt"><p><strong>Authentication Fundamentals.</strong> Authentication verifies identity — proving who a caller is — through credentials, tokens, or federated providers. Getting session handling, token lifetimes, and secure storage right is what makes the rest of a security model meaningful.</p></div>
</div>

<div class="tk-item" id="authorization-fundamentals">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="16" width="52" height="24" rx="3"/><text class="ts" x="30" y="31">identity</text>
<rect class="b4" x="4" y="66" width="52" height="24" rx="3"/><text class="ts" x="30" y="81">policy</text>
<path class="a" d="M58 30 L84 46"/><path class="a" d="M58 78 L84 62"/>
<rect class="bg" x="86" y="36" width="42" height="36" rx="4"/><text class="ts" x="107" y="58">check</text>
<path class="a3" d="M130 48 L150 30"/>
<rect class="b3" x="152" y="16" width="44" height="24" rx="3"/><text class="ts" x="174" y="31">allow</text>
<path class="a2" d="M130 62 L150 80"/>
<rect class="b2" x="152" y="66" width="44" height="24" rx="3"/><text class="ts" x="174" y="81">deny</text>
<text class="ts" x="100" y="102">what may you do?</text>
</svg></div>
<div class="tk-txt"><p><strong>Authorization Fundamentals.</strong> Authorization determines what an authenticated identity is permitted to do, typically via role-based or attribute-based policies. It must be enforced server-side at every entry point, since client-side checks are advisory at best.</p></div>
</div>

<div class="tk-item" id="oauth">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="14" width="52" height="24" rx="3"/><text class="ts" x="30" y="29">user</text>
<rect class="b" x="4" y="72" width="52" height="24" rx="3"/><text class="ts" x="30" y="87">app</text>
<rect class="b4" x="130" y="42" width="64" height="30" rx="3"/><text class="ts" x="162" y="53">auth</text><text class="ts" x="162" y="65">server</text>
<path class="a" d="M58 26 L128 46"/><text class="ts" x="90" y="30">consent</text>
<path class="a" d="M128 66 L58 84"/><text class="ts" x="96" y="86">token</text>
<path class="a" d="M30 42 V68"/><text class="ts" x="16" y="56">uses</text>
<text class="ts" x="100" y="106">scoped access, no password sharing</text>
</svg></div>
<div class="tk-txt"><p><strong>OAuth.</strong> OAuth 2.0 lets a user grant an application scoped access to their resources without sharing credentials, through delegated tokens. It underpins third-party integrations and, with OIDC layered on, single sign-on.</p></div>
</div>

<div class="tk-item" id="api-keys">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<circle class="b2" cx="20" cy="52" r="11"/><rect class="b2" x="28" y="47" width="34" height="10"/><rect class="b2" x="50" y="55" width="5" height="8"/>
<text class="ts" x="36" y="30">sk-…</text>
<path class="a" d="M66 52 H84"/>
<rect class="b4" x="86" y="32" width="48" height="42" rx="4"/><text class="ts" x="110" y="57">gateway</text>
<path class="a" d="M136 52 H154"/>
<rect class="b3" x="156" y="38" width="40" height="30" rx="3"/><text class="ts" x="176" y="57">service</text>
<path class="dl" d="M110 78 V92 H34 V70"/><text class="ts" x="76" y="102">rotate · scope · revoke</text>
</svg></div>
<div class="tk-txt"><p><strong>API Keys.</strong> API keys are simple bearer credentials identifying a calling application, suited to server-to-server access. They need rotation, scoping, and secret management, since a leaked key is a standing grant until revoked.</p></div>
</div>

<div class="tk-item" id="access-controls">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<text class="ts" x="76" y="18">read</text><text class="ts" x="120" y="18">write</text><text class="ts" x="166" y="18">admin</text>
<text class="ts" x="32" y="40">viewer</text><text class="ts" x="32" y="64">editor</text><text class="ts" x="32" y="88">owner</text>
<rect class="b3" x="58" y="28" width="36" height="18" rx="2"/><rect class="bg" x="102" y="28" width="36" height="18" rx="2"/><rect class="bg" x="146" y="28" width="40" height="18" rx="2"/>
<rect class="b3" x="58" y="52" width="36" height="18" rx="2"/><rect class="b3" x="102" y="52" width="36" height="18" rx="2"/><rect class="bg" x="146" y="52" width="40" height="18" rx="2"/>
<rect class="b3" x="58" y="76" width="36" height="18" rx="2"/><rect class="b3" x="102" y="76" width="36" height="18" rx="2"/><rect class="b3" x="146" y="76" width="40" height="18" rx="2"/>
<text class="ts" x="100" y="108">least privilege by role</text>
</svg></div>
<div class="tk-txt"><p><strong>Access Controls.</strong> Access controls encode least-privilege boundaries across services, data, and infrastructure. Regular review matters as much as initial setup, because permissions accumulate quietly as systems and teams change.</p></div>
</div>

<div class="tk-item" id="ai-security">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b2" x="4" y="40" width="52" height="30" rx="3"/><text class="ts" x="30" y="52">"ignore</text><text class="ts" x="30" y="64">your rules"</text>
<path class="a2" d="M58 55 H84"/>
<path class="b3" d="M110 22 L136 32 v26 a26 30 0 0 1 -26 26 a26 30 0 0 1 -26 -26 v-26 z"/><text class="ts" x="110" y="58">policy</text>
<path class="a" d="M140 55 H156"/>
<rect class="b" x="158" y="40" width="38" height="30" rx="3"/><text class="ts" x="177" y="58">agent</text>
<text class="ts" x="100" y="102">treat model output as untrusted input</text>
</svg></div>
<div class="tk-txt"><p><strong>AI Security.</strong> AI security addresses the threat surface specific to model-driven systems: prompt injection, data exfiltration through tool use, training data poisoning, model extraction, and unsafe agent actions. Defence means treating model output as untrusted input and constraining what tools an agent can reach.</p></div>
</div>

<h2 class="tk-sec" id="sec-languages">Languages and Core Tooling</h2>

<div class="tk-item" id="typescript">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="22" width="188" height="30" rx="3"/><text class="ts" x="100" y="41">function f(id: string): User</text>
<path class="a2" d="M100 56 V70"/>
<rect class="b2" x="34" y="72" width="132" height="26" rx="3"/><text class="ts" x="100" y="89">f(42) — caught before runtime</text>
<text class="ts" x="100" y="16">typed contracts, checked at build</text>
</svg></div>
<div class="tk-txt"><p><strong>TypeScript.</strong> TypeScript adds static typing to JavaScript, catching whole classes of errors before runtime. It is increasingly the language of AI application front-ends and SDKs, where typed tool and schema definitions prevent contract drift.</p></div>
</div>

<div class="tk-item" id="golang">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="16" width="46" height="20" rx="3"/><text class="ts" x="27" y="30">go f()</text>
<rect class="b" x="4" y="46" width="46" height="20" rx="3"/><text class="ts" x="27" y="60">go g()</text>
<rect class="b" x="4" y="76" width="46" height="20" rx="3"/><text class="ts" x="27" y="90">go h()</text>
<path class="a" d="M52 26 L82 46 M52 56 H82 M52 86 L82 66"/>
<rect class="b4" x="84" y="42" width="52" height="28" rx="3"/><text class="ts" x="110" y="59">chan</text>
<path class="a" d="M138 56 H156"/>
<rect class="b3" x="158" y="42" width="38" height="28" rx="3"/><text class="ts" x="177" y="59">main</text>
<text class="ts" x="100" y="104">goroutines · single binary</text>
</svg></div>
<div class="tk-txt"><p><strong>Golang.</strong> Go is a compiled, statically typed language built for concurrent network services, with goroutines and channels as first-class primitives. Fast builds and single-binary deployment make it a strong fit for infrastructure and high-throughput API layers.</p></div>
</div>

<div class="tk-item" id="scala">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b4" x="14" y="18" width="80" height="28" rx="3"/><text class="ts" x="54" y="36">functional</text>
<rect class="b" x="106" y="18" width="80" height="28" rx="3"/><text class="ts" x="146" y="36">object-oriented</text>
<path class="a" d="M54 50 V62"/><path class="a" d="M146 50 V62"/>
<rect class="bg" x="14" y="64" width="172" height="26" rx="3"/><text class="ts" x="100" y="81">JVM · Spark</text>
</svg></div>
<div class="tk-txt"><p><strong>Scala.</strong> Scala combines functional and object-oriented programming on the JVM and is the native language of Apache Spark. It appears most often in large-scale data processing where type safety and JVM performance both matter.</p></div>
</div>

<div class="tk-item" id="pandas">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="4" y="22" width="76" height="66" rx="2"/><path class="l" d="M4 38 H80 M4 54 H80 M4 71 H80 M30 22 V88 M56 22 V88"/>
<text class="ts" x="42" y="16">DataFrame</text>
<path class="a" d="M86 54 H112"/><text class="ts" x="99" y="46">groupby</text>
<rect class="b3" x="120" y="34" width="76" height="42" rx="2"/><path class="l" d="M120 55 H196 M158 34 V76"/>
<text class="ts" x="158" y="92">aggregated</text>
</svg></div>
<div class="tk-txt"><p><strong>Pandas.</strong> Pandas provides labelled tabular data structures and the operations — joins, grouping, reshaping, time-series handling — that most Python data work runs on. It is the default surface for exploration and feature engineering at single-machine scale.</p></div>
</div>

<div class="tk-item" id="numpy">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="16" y="30" width="52" height="52"/><path class="l" d="M16 30 L38 12 L90 12 L68 30 M68 30 L68 82 L90 64 L90 12"/>
<path class="l" d="M16 47 H68 M16 64 H68 M33 30 V82 M50 30 V82"/>
<text class="ts" x="52" y="98">ndarray</text>
<text class="ts" x="150" y="42">a * b + c</text>
<text class="ts" x="150" y="60">vectorised,</text><text class="ts" x="150" y="72">no Python loop</text>
</svg></div>
<div class="tk-txt"><p><strong>NumPy.</strong> NumPy supplies the N-dimensional array and vectorized numerical operations that nearly every Python scientific library is built on. Thinking in array operations rather than loops is what makes Python numerical code fast.</p></div>
</div>

<div class="tk-item" id="scipy">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M14 92 H192 M14 92 V10"/>
<path class="l" d="M20 20 Q60 100 100 66 Q140 32 186 78"/>
<circle class="fr" cx="100" cy="66" r="5"/>
<path class="dl" d="M100 66 V92"/><text class="ts" x="122" y="60">minimum</text>
<text class="ts" x="60" y="106">optimise · integrate · interpolate</text>
</svg></div>
<div class="tk-txt"><p><strong>SciPy.</strong> SciPy extends NumPy with optimization, integration, interpolation, signal processing, and statistical routines. It covers the classical numerical methods that sit underneath applied statistics and engineering work.</p></div>
</div>

<div class="tk-item" id="matplotlib">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="10" width="188" height="88" rx="3"/>
<path class="l" d="M40 82 H180 M40 82 V22"/>
<polyline class="l" points="46,72 76,52 106,60 136,34 172,40"/>
<path class="l" d="M40 82 v4 M76 82 v4 M112 82 v4 M148 82 v4"/>
<text class="ts" x="110" y="96">xlabel</text>
<text class="ts" x="24" y="52">y</text>
<text class="ts" x="110" y="20">every element addressable</text>
</svg></div>
<div class="tk-txt"><p><strong>Matplotlib.</strong> Matplotlib is the foundational Python plotting library, offering complete control over every element of a figure. That control is why it remains the tool of choice for publication-quality and highly customized output.</p></div>
</div>

<div class="tk-item" id="seaborn">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="bd" d="M10 84 Q30 20 50 84 Z"/><path class="l" d="M10 84 Q30 20 50 84"/>
<path class="bd" d="M46 84 Q70 34 94 84 Z"/><path class="l" d="M46 84 Q70 34 94 84"/>
<path class="l" d="M8 88 H96"/><text class="ts" x="52" y="102">distributions</text>
<path class="l" d="M124 30 V70 M164 26 V74"/>
<rect class="b3" x="112" y="40" width="24" height="22"/><path class="l" d="M112 52 H136"/>
<rect class="b3" x="152" y="36" width="24" height="28"/><path class="l" d="M152 48 H176"/>
<path class="l" d="M104 88 H192"/><text class="ts" x="148" y="102">categories</text>
</svg></div>
<div class="tk-txt"><p><strong>Seaborn.</strong> Seaborn builds on Matplotlib with a statistical grammar and sensible defaults for distributions, relationships, and categorical comparisons. It produces informative exploratory plots in a fraction of the code.</p></div>
</div>
