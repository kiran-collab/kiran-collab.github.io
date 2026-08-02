---
title: "Designing AI Systems That Hold Under Load"
permalink: /articles/systems-that-hold-under-load/
layout: single
author_profile: true
---

<style>
.dgm { width: 100%; height: auto; display: block; overflow: visible; margin: 0 auto; }
.dgm .b  { fill: #e8f1f6; stroke: #1f6f8b; stroke-width: 1.4; }
.dgm .b2 { fill: #fbeae7; stroke: #b83227; stroke-width: 1.4; }
.dgm .b3 { fill: #eaf2e6; stroke: #4a6741; stroke-width: 1.4; }
.dgm .b4 { fill: #f1eef7; stroke: #6b4a8b; stroke-width: 1.4; }
.dgm .bg { fill: #f4f5f6; stroke: #b0b6bd; stroke-width: 1.2; }
.dgm .gh { fill: none; stroke: #cfd4d9; stroke-width: 1.1; stroke-dasharray: 3 3; }
.dgm .l  { fill: none; stroke: #6b7480; stroke-width: 1.4; }
.dgm .a  { fill: none; stroke: #6b7480; stroke-width: 1.4; marker-end: url(#aar); }
.dgm .a2 { fill: none; stroke: #b83227; stroke-width: 1.4; marker-end: url(#aar2); }
.dgm .a3 { fill: none; stroke: #4a6741; stroke-width: 1.4; marker-end: url(#aar3); }
.dgm .dl { fill: none; stroke: #9aa2ac; stroke-width: 1.3; stroke-dasharray: 4 3; }
.dgm .fa { fill: #1f6f8b; } .dgm .fr { fill: #b83227; } .dgm .fg { fill: #4a6741; }
.dgm .t  { font: 600 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #2f3640; text-anchor: middle; }
.dgm .ts { font: 500 7.5px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #5a626c; text-anchor: middle; }
figure.fig { margin: 1.8em auto; max-width: 460px; }
figure.fig figcaption { font-size: .8rem; color: #7a8189; text-align: center; margin-top: .5em; line-height: 1.45; }
.deck { font-size: 1.06rem; color: #4a5158; border-left: 3px solid #c8d4da; padding-left: 1em; margin: 0 0 2em; }
.callout {
  border: 1px solid #e0e6ea; border-left: 3px solid #1f6f8b; background: #f7fafb;
  padding: .9em 1.1em; border-radius: 0 4px 4px 0; margin: 1.6em 0; font-size: .95rem;
}
.callout strong:first-child { color: #1f6f8b; }
table.tbl { width: 100%; border-collapse: collapse; font-size: .9rem; margin: 1.4em 0; }
table.tbl th, table.tbl td { border: 1px solid #e3e3e3; padding: .5em .7em; text-align: left; vertical-align: top; }
table.tbl th { background: #f4f7f8; font-weight: 600; }
.art-foot { margin-top: 2.6em; padding-top: 1em; border-top: 1px solid #eee; font-size: .88rem; color: #7a8189; }
</style>

<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<marker id="aar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6b7480"/></marker>
<marker id="aar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#b83227"/></marker>
<marker id="aar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#4a6741"/></marker>
</defs></svg>

<p class="deck">The hard part of production AI has quietly stopped being model quality. Frontier and open-weight models are close enough on most tasks that the differentiator is the system around them — whether it stays up, what it costs per request, and how it behaves on the worst day rather than the average one. This is a working guide to the three constraints that actually bind, and the arithmetic to size each.</p>

*August 2026 · ~12 min read*

The bottleneck moved
======

For most of the last few years, the answer to "our AI feature isn't good enough" was a better model. That answer has largely run its course for everyday workloads. A 2026 open-weight release like [DeepSeek-V4](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) or [Kimi K3](https://huggingface.co/blog/ResterChed/kimi-k3-model-overview-mxfp4-quantization-open-wei) will handle the great majority of production tasks competently. What separates a demo from a service is no longer the weights.

It is three things, and they are all systems problems:

- **Scale is bounded by memory, not compute.** The intuition that "more GPUs means more throughput" breaks down because the binding constraint on a serving node is usually KV cache capacity and memory bandwidth, not FLOPs.
- **Correctness is a distribution, not a boolean.** Traditional fault tolerance assumes a call either succeeds or fails. A model call can succeed, return in 200 ms, and be wrong — and no HTTP status code will tell you.
- **Optimization has a strict payoff order.** Teams routinely spend weeks on a 15% kernel win while a routing change sitting one layer up would have cut cost by 60%.

The rest of this article takes each in turn.

Scale: memory is the budget
======

The single most useful piece of arithmetic in LLM serving is the size of the KV cache, because it — not parameter count — usually determines how many concurrent requests a node can hold.

For a transformer using grouped-query attention, the cache for one token is:

```
bytes_per_token = 2 (K and V)
                × n_layers
                × n_kv_heads
                × head_dim
                × bytes_per_element
```

Take a 70B-class model with 80 layers, 8 KV heads, head dimension 128, served in FP16:

```
2 × 80 × 8 × 128 × 2 bytes = 327,680 bytes ≈ 320 KiB per token
```

At an 8K-token context, one sequence holds roughly **2.5 GiB** of KV cache. On an 80 GB accelerator that already has ~140 GB of weights sharded across the group, the practical ceiling is a couple of dozen concurrent sequences — long before you run out of arithmetic throughput.

<figure class="fig">
<svg class="dgm" viewBox="0 0 320 150" aria-hidden="true">
<rect class="bg" x="10" y="18" width="130" height="118" rx="4"/>
<text class="ts" x="75" y="14">80 GB accelerator</text>
<rect class="b4" x="18" y="26" width="114" height="52" rx="3"/><text class="ts" x="75" y="48">model weights</text><text class="ts" x="75" y="60">(sharded)</text>
<rect class="b2" x="18" y="84" width="114" height="44" rx="3"/><text class="ts" x="75" y="102">KV cache</text><text class="ts" x="75" y="115">the real limit</text>
<path class="a" d="M146 78 H176"/>
<text class="ts" x="248" y="34">each 8K sequence</text>
<rect class="b2" x="186" y="42" width="122" height="16" rx="2"/><text class="ts" x="247" y="54">≈ 2.5 GiB</text>
<rect class="b2" x="186" y="62" width="122" height="16" rx="2"/><text class="ts" x="247" y="74">≈ 2.5 GiB</text>
<rect class="b2" x="186" y="82" width="122" height="16" rx="2"/><text class="ts" x="247" y="94">≈ 2.5 GiB</text>
<text class="ts" x="247" y="116">concurrency runs out</text><text class="ts" x="247" y="128">before FLOPs do</text>
</svg>
<figcaption>Serving capacity is usually a memory question. Compute utilisation is often low on a node that is already full.</figcaption>
</figure>

Three consequences follow, and they are where the 2026 architecture work has concentrated.

**Attention design is now a serving decision.** Multi-head latent attention and the compressed-sparse hybrids in recent open models exist specifically to shrink this number. DeepSeek reports its V4 hybrid attention needing roughly [10% of the KV cache of V3.2 at 1M-token context](https://huggingface.co/blog/ResterChed/deepseek-v4-ga-architecture). That is not an academic result — it is a direct multiplier on how many users fit per node.

**Continuous batching beats static batching decisively.** Static batching waits for a full batch, then runs it to completion, so every sequence pays the cost of the longest one. Continuous batching admits and evicts sequences at each decode step, keeping the accelerator saturated.

<figure class="fig">
<svg class="dgm" viewBox="0 0 320 150" aria-hidden="true">
<text class="ts" x="52" y="16">static batching</text>
<rect class="b" x="14" y="24" width="60" height="12" rx="2"/><rect class="bg" x="76" y="24" width="72" height="12" rx="2"/>
<rect class="b" x="14" y="40" width="110" height="12" rx="2"/><rect class="bg" x="126" y="40" width="22" height="12" rx="2"/>
<rect class="b" x="14" y="56" width="40" height="12" rx="2"/><rect class="bg" x="56" y="56" width="92" height="12" rx="2"/>
<text class="ts" x="80" y="82">grey = accelerator idle, waiting</text>
<text class="ts" x="240" y="16">continuous batching</text>
<rect class="b3" x="176" y="24" width="60" height="12" rx="2"/><rect class="b3" x="238" y="24" width="70" height="12" rx="2"/>
<rect class="b3" x="176" y="40" width="110" height="12" rx="2"/><rect class="b3" x="288" y="40" width="20" height="12" rx="2"/>
<rect class="b3" x="176" y="56" width="40" height="12" rx="2"/><rect class="b3" x="218" y="56" width="90" height="12" rx="2"/>
<text class="ts" x="242" y="82">finished slots refill immediately</text>
<path class="l" d="M14 104 H308"/>
<text class="ts" x="160" y="118">wall clock →</text>
<text class="ts" x="160" y="138">same hardware, 2–4× the throughput in practice</text>
</svg>
<figcaption>The win is not a faster kernel; it is not leaving the accelerator idle while short sequences wait on long ones.</figcaption>
</figure>

**Prefix caching turns a cost centre into a rounding error.** Agent and RAG workloads resend a large, stable prefix — system prompt, tool definitions, retrieved context — on every turn. Caching that prefix converts most of the prompt from full-price prefill into a near-free cache read. The catch is that caching is a *prefix match*: one byte changing early invalidates everything after it. A timestamp interpolated into the top of a system prompt is enough to make the cache useless, and the failure is silent — you simply keep paying.

<div class="callout" markdown="1">
**Design rule.** Order your prompt by stability, not by readability: frozen system content first, then per-session context, then per-turn content. Anything that changes every request belongs at the very end. This one ordering decision routinely matters more than any amount of prompt wordsmithing.
</div>

Fault tolerance when correctness is a distribution
======

Classical resilience patterns — retries, timeouts, circuit breakers, bulkheads — all still apply, and most teams implement them. The gap is that they were designed for a world where a call either works or throws. Model calls have a third state, and it is the dangerous one.

<table class="tbl">
<thead><tr><th>Failure mode</th><th>Surfaces as</th><th>Correct response</th></tr></thead>
<tbody>
<tr><td>Provider unavailable</td><td>5xx / timeout</td><td>Retry with jittered backoff, then fail over to a second provider</td></tr>
<tr><td>Rate limited</td><td>429 + <code>retry-after</code></td><td>Respect the header; shed or queue rather than hammering</td></tr>
<tr><td>Truncated output</td><td>Stop reason ≠ natural end</td><td>Detect explicitly; do not treat a partial as complete</td></tr>
<tr><td>Refusal / policy decline</td><td><strong>HTTP 200</strong></td><td>Branch on the stop reason before reading content; route to a fallback</td></tr>
<tr><td>Confidently wrong output</td><td><strong>HTTP 200, fast</strong></td><td>Ground, verify, or abstain — no transport signal exists</td></tr>
</tbody>
</table>

The bottom two rows are the ones that break naive clients. Code that reads `response.content[0]` unconditionally works fine for months and then produces a blank message or an exception the first time a safety classifier declines a request — because the call *succeeded*. Any client that talks to a model needs to inspect the stop reason before it touches the content.

For the last row there is no transport-level signal at all, which means reliability has to be built at the application layer:

- **Ground it.** Retrieval with citation enforcement converts "is this true?" into "is this supported by the retrieved span?", which is checkable.
- **Verify selectively.** A second, cheaper model checking a claim against its source catches a meaningful share of errors at a fraction of the cost of a second full generation. Spend it on the high-consequence paths only.
- **Give it somewhere to abstain to.** A system with no "I don't know" branch will always fabricate, because that is the only path you left open.

### Degrade in steps, not off a cliff

The most useful reliability property is a ladder of reduced service rather than a binary up/down. Each rung should be independently triggerable by a health signal.

<figure class="fig">
<svg class="dgm" viewBox="0 0 320 150" aria-hidden="true">
<rect class="b3" x="12" y="14" width="150" height="20" rx="3"/><text class="ts" x="87" y="27">full: best model, full context</text>
<path class="a" d="M20 36 V44"/>
<rect class="b" x="12" y="46" width="150" height="20" rx="3"/><text class="ts" x="87" y="59">cheaper model, same flow</text>
<path class="a" d="M20 68 V76"/>
<rect class="b4" x="12" y="78" width="150" height="20" rx="3"/><text class="ts" x="87" y="91">cached / retrieved answer</text>
<path class="a" d="M20 100 V108"/>
<rect class="b2" x="12" y="110" width="150" height="20" rx="3"/><text class="ts" x="87" y="123">deterministic fallback</text>
<text class="ts" x="245" y="26">latency budget</text>
<text class="ts" x="245" y="58">cost ceiling</text>
<text class="ts" x="245" y="90">provider degraded</text>
<text class="ts" x="245" y="122">everything is down</text>
<path class="dl" d="M170 22 H196 M170 54 H196 M170 86 H196 M170 118 H196"/>
<text class="ts" x="160" y="144">each rung has its own trigger — and its own test</text>
</svg>
<figcaption>A degradation ladder. The bottom rung must not depend on the model, or it is not a fallback.</figcaption>
</figure>

Two details make the difference between a ladder that works and one that exists only in a design document. First, **the bottom rung cannot depend on the thing that failed** — a "fallback" that calls the same provider with a smaller model is not a fallback during a provider outage. Second, **every rung needs a test that exercises it**, because untested fallback code is reliably broken exactly when it is needed.

### Idempotency is not optional

Agentic systems retry. The moment a workflow can call a tool that sends an email, charges a card, or writes to a ledger, retry semantics become a correctness issue rather than a convenience. Give every side-effecting operation an idempotency key derived from the logical task, not from the attempt:

```python
# Wrong — a retry produces a second charge
key = uuid4()

# Right — the same logical action collapses to one effect
key = sha256(f"{workflow_id}:{step_id}:{payload_digest}").hexdigest()
```

The same reasoning applies to queues. When ordering and exactly-once handling actually matter — a payment sequence, a state machine — a FIFO queue with deduplication is worth the throughput cost. When they do not, do not pay it.

The optimization order that pays
======

Optimizations are not commutative in value. The ones furthest from the hardware usually pay the most, and they are the ones teams reach for last. A rough ordering by typical return on effort:

<table class="tbl">
<thead><tr><th>#</th><th>Lever</th><th>Typical effect</th><th>Effort</th></tr></thead>
<tbody>
<tr><td>1</td><td>Don't call the model — cache, or answer from retrieval</td><td>Removes cost entirely on the hit path</td><td>Low</td></tr>
<tr><td>2</td><td>Route by difficulty: small model first, escalate on low confidence</td><td>Large, on skewed workloads</td><td>Low–medium</td></tr>
<tr><td>3</td><td>Prefix/prompt caching on stable context</td><td>Order-of-magnitude on the cached span</td><td>Low</td></tr>
<tr><td>4</td><td>Shrink the prompt — retrieve less, rerank better</td><td>Cost <em>and</em> quality, usually both</td><td>Medium</td></tr>
<tr><td>5</td><td>Continuous batching, tuned concurrency</td><td>2–4× throughput on self-hosted</td><td>Medium</td></tr>
<tr><td>6</td><td>Quantization (weights, then KV cache)</td><td>Memory and latency; watch accuracy</td><td>Medium</td></tr>
<tr><td>7</td><td>Speculative decoding</td><td>Latency on decode-bound paths</td><td>Medium–high</td></tr>
<tr><td>8</td><td>Kernel and compiler work</td><td>Real but incremental</td><td>High</td></tr>
</tbody>
</table>

Levers 1 and 2 are architectural and cost almost nothing to try. Lever 8 is where the fun is, and it is where a great deal of engineering time goes before anyone has measured whether the request needed to happen at all.

<div class="callout" markdown="1">
**A useful discipline.** Before optimizing a request path, ask in order: *Can we not make this call? Can a smaller model make it? Can we make the prompt shorter?* Only then ask how to make the call itself faster. Most teams start at question four.
</div>

Routing deserves special mention because it compounds with everything else. Real workloads are heavily skewed — a large share of traffic is easy, and a small tail is genuinely hard. Sending all of it to your most capable model prices the easy majority at the cost of the hard minority.

<figure class="fig">
<svg class="dgm" viewBox="0 0 320 140" aria-hidden="true">
<rect class="b" x="10" y="52" width="52" height="30" rx="3"/><text class="ts" x="36" y="71">request</text>
<path class="a" d="M64 67 H86"/>
<path class="b4" d="M122 42 L162 67 L122 92 L82 67 Z"/><text class="ts" x="122" y="64">classify</text><text class="ts" x="122" y="76">difficulty</text>
<path class="a3" d="M140 52 L186 30"/>
<rect class="b3" x="188" y="18" width="120" height="24" rx="3"/><text class="ts" x="248" y="33">small model · ~80% of traffic</text>
<path class="a2" d="M140 82 L186 104"/>
<rect class="b2" x="188" y="92" width="120" height="24" rx="3"/><text class="ts" x="248" y="107">frontier model · the tail</text>
<path class="dl" d="M248 44 V90"/><text class="ts" x="285" y="70">escalate</text>
<text class="ts" x="160" y="134">price the easy majority at the easy price</text>
</svg>
<figcaption>Difficulty routing with escalation. The escalation path is what keeps quality intact — without it, this is just a cheaper, worse system.</figcaption>
</figure>

A reference shape
======

Putting it together, the architecture that holds up in production has a recognisable shape. Nothing here is exotic; the discipline is in having each layer present and independently testable.

<figure class="fig">
<svg class="dgm" viewBox="0 0 320 210" aria-hidden="true">
<rect class="b" x="10" y="8" width="80" height="22" rx="3"/><text class="ts" x="50" y="22">client</text>
<path class="a" d="M50 32 V44"/>
<rect class="bg" x="10" y="46" width="300" height="24" rx="3"/><text class="ts" x="160" y="61">gateway · authn/z · rate limit · idempotency key</text>
<path class="a" d="M50 72 V84"/>
<rect class="b4" x="10" y="86" width="94" height="24" rx="3"/><text class="ts" x="57" y="101">semantic cache</text>
<path class="a3" d="M104 98 H126"/><text class="ts" x="150" y="95">hit → return</text>
<path class="a" d="M50 112 V124"/>
<rect class="b4" x="10" y="126" width="94" height="24" rx="3"/><text class="ts" x="57" y="141">retrieve + rerank</text>
<path class="a" d="M50 152 V164"/>
<rect class="b2" x="10" y="166" width="94" height="24" rx="3"/><text class="ts" x="57" y="181">router → model</text>
<rect class="b3" x="196" y="86" width="114" height="24" rx="3"/><text class="ts" x="253" y="101">fallback provider</text>
<rect class="b3" x="196" y="126" width="114" height="24" rx="3"/><text class="ts" x="253" y="141">circuit breaker</text>
<rect class="b3" x="196" y="166" width="114" height="24" rx="3"/><text class="ts" x="253" y="181">eval + trace sink</text>
<path class="dl" d="M108 178 H194"/><path class="dl" d="M108 138 H194"/><path class="dl" d="M108 98 H194"/>
<text class="ts" x="160" y="204">every dashed path needs its own test</text>
</svg>
<figcaption>A reference shape. The right-hand column is the part that gets skipped, and the part that determines behaviour on a bad day.</figcaption>
</figure>

What to instrument
======

You cannot operate what you cannot see, and the default metrics are the wrong ones. Averages hide the failures that matter; a mean latency of 900 ms is compatible with 5% of users waiting eight seconds.

- **Latency at p95 and p99, never the mean.** Also split time-to-first-token from total time — they have different causes and different fixes.
- **Cost per request, broken down by route.** Aggregate spend tells you that something changed; per-route cost tells you what.
- **Cache hit rate.** If it drops toward zero across identical-prefix requests, something is silently invalidating the prefix. This is worth an alert.
- **Stop-reason distribution.** A rising share of truncations or refusals is a real regression that no error-rate dashboard will show, because those responses are all HTTP 200.
- **Quality on a fixed evaluation set, on every deploy.** Treat a regression here exactly like a failing test: it blocks the release. This is the single practice that most separates teams who ship confidently from teams who ship and hope.
- **Fallback exercise rate.** If a degradation rung has not fired in ninety days, you do not know whether it works. Fire it deliberately.

Closing
======

None of this is about models, which is the point. The field spent several years where the dominant term in system quality was model quality, and that era is ending — the weights are good, increasingly open, and increasingly commoditised.

What remains is ordinary, demanding engineering: knowing that memory rather than compute sets your ceiling, that a successful HTTP response is not evidence of a correct answer, and that the cheapest request is the one you found a way not to make. The systems that hold under load in 2026 are the ones built by people who took those three facts seriously before traffic forced them to.

<p class="art-foot">Written August 2026. Corrections and disagreement welcome — <a href="mailto:dkiran238@gmail.com">dkiran238@gmail.com</a>. Back to <a href="/articles/">Articles</a>.</p>
