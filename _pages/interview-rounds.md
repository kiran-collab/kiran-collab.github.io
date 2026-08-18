---
title: "Interview Rounds"
permalink: /interview-rounds/
layout: single
author_profile: true
---

<style>
.ir-lead { color: #4a5158; border-left: 3px solid #c8d4da; padding-left: 1em; margin: 0 0 1.4em; }
.ir-jump { margin: 0 0 2em; line-height: 2.1; }
.ir-jump a {
  display: inline-block; font-size: .84rem; padding: .25em .75em; margin: 0 .3em .3em 0;
  border: 1px solid #dde3e7; border-radius: 14px; text-decoration: none; color: #41606e; background: #f6f9fa;
}
.ir-jump a:hover { background: #eaf1f4; border-color: #c3d2d9; text-decoration: none; }

.rnd {
  border: 1px solid #e4e4e4; border-left: 4px solid #1f6f8b; border-radius: 5px;
  padding: 1.2em 1.4em; margin: 0 0 1.8em; background: #fcfcfc; scroll-margin-top: 24px;
}
.rnd h3 { margin: 0 0 .15em; font-size: 1.18rem; color: #23303a; }
.rnd .testing {
  margin: 0 0 1em; font-size: .95rem; color: #4a5560; background: #f1f6f8;
  border-radius: 4px; padding: .6em .85em;
}
.rnd .testing strong { color: #1f6f8b; }
.rnd h4 {
  margin: 1.2em 0 .4em; font-size: .78rem; text-transform: uppercase; letter-spacing: .07em;
  color: #7c848b; font-weight: 700;
}
.rnd h4.bad { color: #a4534a; }
.rnd ul { margin: 0 0 0 1.1em; padding: 0; }
.rnd li { margin-bottom: .45em; font-size: .95rem; line-height: 1.6; }
.rnd li strong { color: #2b3740; }
.rnd p { font-size: .95rem; line-height: 1.62; margin: 0 0 .5em; }
.rnd ul.bad li::marker { color: #b8756c; }
.rnd ul.ask li::marker { color: #4a6741; }

.ir-sec { margin-top: 2.6em; padding-top: .5em; border-top: 2px solid #eee; scroll-margin-top: 24px; }
.rnd details.rq {
  border: 1px solid #e2e6ea; border-left: 4px solid #6b4a8b; border-radius: 5px;
  background: #fcfbfd; margin-bottom: .6em;
}
.rnd details.rq > summary {
  list-style: none; cursor: pointer; padding: .6em .9em; font-weight: 600; font-size: .93rem;
  color: #24313b; display: flex; align-items: center; gap: .5em; border-radius: 5px;
}
.rnd details.rq > summary::-webkit-details-marker { display: none; }
.rnd details.rq > summary::before { content: "\25B8"; color: #9aa4ad; font-size: .82em; transition: transform .15s; }
.rnd details.rq[open] > summary::before { transform: rotate(90deg); }
.rnd details.rq > summary:hover { background: #f5f2f8; color: #5d3f7a; }
.rnd details.rq[open] > summary { border-bottom: 1px solid #eef1f3; color: #5d3f7a; }
.rnd details.rq .rq-body { padding: .7em .95em .9em; }
.rnd details.rq .rq-src {
  font-size: .82rem; color: #6b7480; margin: 0 0 .6em; padding-left: .6em;
  border-left: 2px solid #ddd6e6;
}
.rnd details.rq ol { margin: 0 0 0 1.2em; padding: 0; }
.rnd details.rq li { margin-bottom: .42em; font-size: .93rem; line-height: 1.58; }
.rnd details.rq li .ans {
  display: block; font-size: .89rem; color: #4a5560; margin-top: .3em;
  padding: .45em .7em; border-left: 2px solid #d9d2e4; background: #faf9fc;
  border-radius: 0 3px 3px 0; line-height: 1.58;
}
.rnd details.rq li .ans .fill {
  font-style: normal; font-weight: 600; color: #7a601b;
  background: #f8f3e6; border: 1px solid #e8dcc2; border-radius: 3px; padding: 0 .28em;
}
.rnd .rq-count {
  display: inline-block; font-size: .72rem; text-transform: uppercase; letter-spacing: .06em;
  font-weight: 700; color: #7a601b; background: #f8f3e6; border: 1px solid #e8dcc2;
  border-radius: 11px; padding: .16em .6em; margin-left: .4em;
}
.ir-note {
  border: 1px solid #e0e6ea; border-left: 3px solid #8a6d1f; background: #fbf9f2;
  padding: .85em 1.1em; border-radius: 0 4px 4px 0; margin: 1.6em 0; font-size: .93rem; color: #55504a;
}
figure.fig { margin: 1.6em auto 2em; max-width: 620px; }
figure.fig figcaption { font-size: .8rem; color: #7a8189; text-align: center; margin-top: .5em; line-height: 1.45; }
.dgm { width: 100%; height: auto; display: block; overflow: visible; }
.dgm .b  { fill: #e8f1f6; stroke: #1f6f8b; stroke-width: 1.3; }
.dgm .b3 { fill: #eaf2e6; stroke: #4a6741; stroke-width: 1.3; }
.dgm .b4 { fill: #f1eef7; stroke: #6b4a8b; stroke-width: 1.3; }
.dgm .b2 { fill: #fbeae7; stroke: #b83227; stroke-width: 1.3; }
.dgm .l  { fill: none; stroke: #6b7480; stroke-width: 1.3; }
.dgm .ts { font: 500 7.5px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #5a626c; text-anchor: middle; }
.dgm .tb { font: 600 8px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #2f3640; text-anchor: middle; }
</style>

<p class="ir-lead">What each round is actually screening for, how to show up, and the things that quietly sink otherwise-strong candidates. Loops vary by company, but the rounds below cover most of what you will meet — and each one is testing something different, which is the part people miss.</p>

<figure class="fig">
<svg class="dgm" viewBox="0 0 620 92" aria-label="Typical interview loop order">
<rect class="b" x="4" y="26" width="84" height="30" rx="4"/><text class="tb" x="46" y="45">Recruiter</text>
<rect class="b" x="96" y="26" width="90" height="30" rx="4"/><text class="tb" x="141" y="45">Hiring mgr</text>
<rect class="b4" x="194" y="26" width="130" height="30" rx="4"/><text class="tb" x="259" y="41">Coding · Design</text><text class="ts" x="259" y="52">ML · Technical</text>
<rect class="b4" x="332" y="26" width="86" height="30" rx="4"/><text class="tb" x="375" y="45">Take-home</text>
<rect class="b3" x="426" y="26" width="86" height="30" rx="4"/><text class="tb" x="469" y="45">Behavioral</text>
<rect class="b2" x="520" y="26" width="96" height="30" rx="4"/><text class="tb" x="568" y="41">Founder</text><text class="ts" x="568" y="52">/ exec</text>
<path class="l" d="M90 41 H94 M188 41 H192 M326 41 H330 M420 41 H424 M514 41 H518"/>
<text class="ts" x="46" y="18">screen</text>
<text class="ts" x="259" y="18">depth</text>
<text class="ts" x="568" y="18">judgment</text>
<text class="ts" x="310" y="76">order varies; the further right, the less it is about technical skill</text>
</svg>
<figcaption>A representative loop. Small companies compress this to three conversations; large ones add rounds and a bar-raiser.</figcaption>
</figure>

<p class="ir-jump">
<a href="#recruiter">Recruiter call</a>
<a href="#hiring-manager">Hiring manager</a>
<a href="#coding">Coding</a>
<a href="#problem-solving">Problem solving</a>
<a href="#technical">Technical / experience</a>
<a href="#system-design">System design</a>
<a href="#ml">ML round</a>
<a href="#take-home">Take-home</a>
<a href="#behavioral">Behavioral</a>
<a href="#founder">Founder</a>
<a href="#ceo">CEO / executive</a>
<a href="#always">Across every round</a>
</p>

<div class="rnd" id="recruiter">
<h3>Recruiter Call</h3>
<p class="testing"><strong>Really testing:</strong> basics and fit — can you communicate, are the logistics workable, and would you actually accept an offer.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Be conversational but concise.</strong> Answer in 30–60 seconds, not three-minute monologues. Give the headline, then pause — they will ask follow-ups if they want more.</li>
<li><strong>Have a tight "tell me about yourself."</strong> This almost always opens the call. Aim for 60–90 seconds: current role, one or two relevant highlights, and why this opportunity. Practise it out loud so it does not sound scripted.</li>
<li><strong>Show genuine enthusiasm without desperation.</strong> Recruiters are gauging whether you would accept and whether the hiring manager will like you. "I'm interested in this because X" lands; sounding indifferent does not.</li>
<li><strong>Be honest and direct on logistics.</strong> Salary expectations, notice period, visa status, other interviews in flight. Give a researched range or ask about their budgeted range first — but do not be evasive to the point of awkwardness. Recruiters trade in this information, and being cagey spends goodwill.</li>
<li><strong>Speak positively about past employers.</strong> Frame it forward: "I'm looking for more ownership" beats "my manager was terrible." Negativity is among the fastest red flags in a screen.</li>
<li><strong>Match their energy and pace.</strong> Brisk and checklist-driven, be efficient. Chatty, warm up a bit. Mirror, do not overpower.</li>
<li><strong>Ask a couple of good questions</strong> about the team, the process, the timeline, or what the hiring manager cares about most. It signals engagement and gets you intel for later rounds.</li>
<li><strong>Get the mechanics right.</strong> Somewhere quiet, sit or stand upright — it genuinely changes your voice — smile when you talk, and do not interrupt. Close by asking about next steps.</li>
</ul>
</div>

<div class="rnd" id="hiring-manager">
<h3>Hiring Manager Round</h3>
<p class="testing"><strong>Really testing:</strong> can you do <em>this</em> job on <em>this</em> team — and does this person want you in their weekly one-to-ones for the next two years.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Find their problem before you sell.</strong> Ask early what the team is struggling with or why the role is open. Then map your experience onto that specific gap rather than reciting your background.</li>
<li><strong>Be concrete about what you would own.</strong> "In the first ninety days I'd expect to be doing X" shows you have understood the role rather than just wanting a job.</li>
<li><strong>Be honest about what you have not done,</strong> and say how you would close it. Managers hire people who assess themselves accurately; they have all been burned by someone who claimed everything.</li>
<li><strong>Ask how the team actually works</strong> — planning, code review, on-call, how decisions get made, how disagreement gets resolved. The answers tell you more than any culture page.</li>
<li><strong>Interview them back, genuinely.</strong> This is the person who will shape your next two years. It is the highest-information round you get, and treating it as one-directional wastes it.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>Generic answers that would fit any company — a clear signal you have not read anything about theirs.</li>
<li>No questions about the actual day-to-day work.</li>
<li>Describing responsibilities rather than outcomes.</li>
</ul>
</div>

<div class="rnd" id="coding">
<h3>Coding Round</h3>
<p class="testing"><strong>Really testing:</strong> whether you write correct code under mild pressure while thinking out loud — not whether you have memorised algorithms.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Clarify before you type.</strong> Restate the problem, ask about input size, edge cases, duplicates, whether input is sorted. Two minutes here routinely saves ten later, and it is itself part of what is being scored.</li>
<li><strong>State the brute force first, then improve it.</strong> A working O(n²) on the board beats five silent minutes hunting for the optimal solution. It also gives you something to optimise from, which is a conversation.</li>
<li><strong>Narrate structure, not stream of consciousness.</strong> Explain the approach before writing, then write. Mumbling while typing is not thinking out loud.</li>
<li><strong>Name the complexity unprompted</strong> — time and space, and why. Waiting to be asked reads as not having considered it.</li>
<li><strong>Write code you would let a colleague read.</strong> Real variable names, small functions. Interviewers are imagining your pull requests.</li>
<li><strong>Test by hand before declaring done.</strong> Walk an actual input through your code, including an edge case. Finding your own bug is a strong signal; having the interviewer find it is not.</li>
<li><strong>If you are stuck, say what you are stuck on.</strong> "I want to avoid the nested loop but I don't see the invariant yet" invites a hint. Silence gets you nothing.</li>
<li><strong>Take the hint.</strong> Interviewers offer them deliberately. Ignoring one and pressing on reads as inflexibility, which is worse than being stuck.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>Coding in silence, then presenting a finished answer. Even if it is right, they cannot score how you got there.</li>
<li>Jumping to code before understanding the problem, then discovering the misunderstanding at minute twenty.</li>
<li>Defending a broken approach instead of stepping back.</li>
<li>Recognising the question and reciting the answer without being able to explain <em>why</em> it works.</li>
</ul>
</div>

<div class="rnd" id="problem-solving">
<h3>Problem Solving Interview</h3>
<p class="testing"><strong>Really testing:</strong> how you attack a problem you have never seen, with no algorithm to recall — whether you decompose it, make your assumptions explicit, and converge rather than flail.</p>

<p>Distinct from the coding round, which has a correct answer you either find or do not, and from system design, which has a known shape. Here the problem is usually under-specified on purpose. Estimation questions, debug-this-broken-system questions, open analytical cases, and "how would you find out" questions all live in this round. The interviewer is watching the <em>process</em>, and frequently does not care what number you land on.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Restate the problem in your own words first.</strong> Half of these questions are deliberately ambiguous, and the restatement is where you either surface that or walk past it.</li>
<li><strong>Say your assumptions out loud and label them as assumptions.</strong> "I'll assume a working day is eight hours — tell me if that's wrong." This is the single highest-scoring habit in the round, because it lets the interviewer correct you cheaply.</li>
<li><strong>Decompose before you calculate.</strong> Write the structure — the equation, the tree of causes, the funnel — then fill it in. A visible structure survives a wrong number; a right number with no structure does not.</li>
<li><strong>Use round numbers deliberately.</strong> 300 million, not 331 million. Precision you cannot justify wastes time and invites a question you cannot answer.</li>
<li><strong>Sanity-check the answer against something you know.</strong> If your estimate implies more pizza delivered than there are people, say so and go back. Catching your own implausibility is worth more than avoiding it.</li>
<li><strong>For debugging questions, bisect rather than guess.</strong> Ask what changed, what is still working, and pick the question that eliminates the most possibilities — not the most likely cause.</li>
<li><strong>Narrow toward a recommendation.</strong> These rounds end badly when a candidate explores forever. Say what you would do with the information you have, and what you would check next.</li>
<li><strong>Ask for data rather than inventing it, once.</strong> "Do we know the conversion rate?" If they say no, assume one and move on. Asking repeatedly reads as stalling.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>Silently deciding what the question means and answering a different one.</li>
<li>Precision theatre — carrying four significant figures through an estimate built on a guess.</li>
<li>Listing every possible cause of a bug without ever choosing what to check first.</li>
<li>Waiting to be asked for the answer, rather than converging on one.</li>
<li>Treating an ambiguous question as a trick. It is not a trick; the ambiguity is the exercise.</li>
</ul>

<h4>Questions and answers <span class="rq-count">44 questions</span></h4>

<details class="rq"><summary>1 · Estimation and sizing (8)</summary><div class="rq-body">
<p class="rq-src">Fermi problems. Nobody expects the right number — they expect a decomposition they can follow and assumptions they can push on.</p>
<ol>
<li>How much storage would you need to keep one year of logs for a service handling 5,000 requests per second?<span class="ans">Decompose: 5,000 rps × 86,400 s ≈ 430M requests a day. At roughly 1 KB per log line that is ~430 GB a day, ~155 TB a year raw. Then apply what a real system does to that number: compression at 5–10× brings it to 15–30 TB, and a tiered retention policy — 7 days hot, 90 days warm, the rest cold or sampled — reduces the expensive part to under a terabyte. Give the raw figure, then the engineered figure, because the second is the answer that shows you have done this.</span></li>
<li>How many GPUs would you need to serve an 8B parameter model to 1,000 concurrent users?<span class="ans">Start with memory: 8B at bf16 is ~16 GB of weights, plus KV cache which is what actually scales with concurrency. Roughly 0.5–1 MB per 1K tokens of context per sequence for a model this size, so 1,000 concurrent sequences at a few thousand tokens each is tens of gigabytes — the cache dominates. One 80 GB card fits the weights comfortably but not that concurrency, so you are at 2–4 cards with paged KV cache and continuous batching, and more if the context is long. Say explicitly that the throughput calculation, not the weight calculation, decides the answer.</span></li>
<li>Estimate the daily cost of running an LLM feature for 100,000 users.<span class="ans">Build the unit first: requests per user per day × tokens per request × price per token. Say 3 requests, 1,500 input and 300 output tokens. That is 100k × 3 = 300k requests, ~450M input and 90M output tokens a day. Multiply by whatever per-million rate you assume — state it — and you land in the low thousands of dollars daily. Then note the two levers that matter more than the model choice: caching repeated prefixes, and routing easy requests to a smaller model.</span></li>
<li>How many labelled examples do you need to fine-tune a classifier to production quality?<span class="ans">Reject the premise gently: it depends on the number of classes, how separable they are, and what quality bar you are being held to. Give the working answer anyway — for a fine-tune on a strong pretrained model, a few hundred well-chosen examples per class usually gets you most of the way, and the return on more data flattens fast. Then say the thing that matters: label quality and coverage of edge cases beat volume, and the way to find out is to plot a learning curve at 50, 100, 500 and extrapolate.</span></li>
<li>How much would it cost to relabel a dataset of 200,000 documents?<span class="ans">Time per document × cost per hour × any multiple review. At 2 minutes each that is ~6,700 hours; at a plausible annotation rate that is a large six-figure number, and double it if you need two annotators per item for agreement. Which is exactly why the real answer is not to relabel everything: label a stratified sample, measure model-versus-human agreement, and relabel only the slices where they diverge.</span></li>
<li>Estimate how long it would take to train a model on 10 TB of data.<span class="ans">The bound is usually input, not compute. Work out read throughput first — 10 TB from object storage at 1 GB/s is ~3 hours per epoch just to move the bytes, before any GPU work. Then compare to the compute time per epoch. Naming which side is the bottleneck is the answer; candidates who only compute FLOPs miss that most large training jobs are starved by the data loader.</span></li>
<li>How many engineers would you need to rebuild this system in six months?<span class="ans">Decompose by component rather than guessing a headcount: list the four or five pieces, estimate each in engineer-months, add 30–50% for integration and unknowns, then divide by six. Say out loud that the division is the weak step — adding people does not divide the timeline, and above a certain size coordination cost eats the gain.</span></li>
<li>Estimate the number of daily active users a feature needs for an A/B test to detect a 2% lift.<span class="ans">This one has real arithmetic behind it. Required sample size scales with the baseline variance and inversely with the square of the effect size, so halving the effect you want to detect quadruples the sample. For a conversion metric around 10% baseline and a 2% relative lift, you are into the hundreds of thousands per arm. The point to make: if the traffic does not exist, the honest answer is that the experiment cannot be run at that sensitivity — not that you run it anyway and report a null.</span></li>
</ol>
</div></details>

<details class="rq"><summary>2 · Debugging an unfamiliar system (10)</summary><div class="rq-body">
<p class="rq-src">The interviewer plays the system and answers your questions. Bisecting beats guessing, and the first question you ask is most of the score.</p>
<ol>
<li>The model's accuracy dropped 10% overnight. What do you check first?<span class="ans">Ask what changed, because something did. In order: was there a deploy of the model, the feature pipeline, or an upstream producer; did the input distribution shift; did the label source change; is the metric itself broken. Check the metric last only if the drop is implausibly sharp — a clean overnight step is far more likely a pipeline or deployment change than genuine model degradation, which drifts rather than steps.</span></li>
<li>Latency went up 3× but CPU and memory look normal. Where do you look?<span class="ans">If the machine is not busy, it is waiting. Look for external calls — a slow dependency, a database query gone unindexed, DNS, connection pool exhaustion, lock contention. Compare p50 and p99: a p99-only change points at a subset of requests or a queue, whereas the whole distribution shifting points at a dependency common to all of them.</span></li>
<li>A pipeline succeeded but produced no rows. How do you find out why?<span class="ans">Success with no output means a filter matched nothing or an upstream input was empty. Work backwards through the stages, checking row counts at each boundary until you find where it goes to zero. Then note the real defect: a job that can produce zero rows and still report success is missing an assertion, and the fix is that check, not just this incident.</span></li>
<li>Users report the search results got worse, but every metric is flat. What now?<span class="ans">Trust the users and distrust the metric. Either the metric averages over a segment where it did get worse, or it measures something users do not care about. Slice by query type, language, device, and new-versus-returning, and go and read actual bad queries. Aggregate metrics hiding a broken slice is the single most common version of this.</span></li>
<li>The same query is fast in staging and slow in production. Why might that be?<span class="ans">Data volume and distribution first — a plan that works on a small table can flip to a sequential scan on a large one. Then: stale statistics, missing index in one environment, cold cache, concurrent load, different hardware. Ask for the query plan from both; the answer is usually visible there rather than in the query text.</span></li>
<li>Your model works in a notebook and fails in the service. What is the likely cause?<span class="ans">Almost always a difference in preprocessing between the two paths — different library version, different default, a column order, a fitted transformer that was refit instead of loaded. This is training-serving skew, and the structural fix is sharing one code path rather than fixing the specific mismatch.</span></li>
<li>An LLM feature started hallucinating more this week, with no code change.<span class="ans">If your code did not change, something else did: the provider's model version, the retrieved context, the data being retrieved over, or the input distribution. Check whether retrieval quality dropped first, since a RAG system with degraded retrieval looks exactly like a model that started hallucinating. Then check whether you are pinned to a model version — an unpinned endpoint is a dependency that updates without telling you.</span></li>
<li>One customer reports errors that you cannot reproduce. How do you proceed?<span class="ans">Get the specific request — id, timestamp, payload shape — and trace it rather than trying to reproduce it. Ask what is different about them: volume, region, data size, an unusual character set, an old client version. Cases that only affect one customer are usually about their data, not your logic.</span></li>
<li>Throughput drops sharply above a certain load rather than degrading gradually. What does that suggest?<span class="ans">A cliff means a limit being hit, not a resource being consumed: a connection pool, a thread pool, a rate limit, memory tipping into swap or GC pressure, or a queue growing until timeouts cascade. Gradual degradation is saturation; a cliff is a bound. Naming that distinction is the answer.</span></li>
<li>How would you tell whether a problem is in your code or in a dependency?<span class="ans">Bisect the boundary. Call the dependency directly with the same input outside your code; if it is slow or wrong there, it is theirs. If not, the difference is in how you are calling it — arguments, concurrency, connection reuse. Doing this before escalating is what makes the escalation credible.</span></li>
</ol>
</div></details>

<details class="rq"><summary>3 · Analytical and data cases (10)</summary><div class="rq-body">
<p class="rq-src">Open-ended "why did this change" and "how would you find out" questions. Structure first, then a recommendation — exploring forever is the failure mode.</p>
<ol>
<li>Sign-ups fell 15% last week. How do you investigate?<span class="ans">First establish it is real: compare against seasonality and the same week last year, and check the tracking did not break — a logging change is a common cause of a sudden clean drop. Then decompose the funnel and find which step moved, and slice by channel, platform, region, and new-versus-returning. Isolating the drop to one segment usually names the cause. Close with what you would do about it.</span></li>
<li>Two teams report different numbers for the same metric. How do you resolve it?<span class="ans">Do not adjudicate — reconcile. Compare the definitions first: time window, timezone, which events count, deduplication, whether bots and internal traffic are excluded, late-arriving data. It is nearly always a definitional difference rather than a bug, and the durable outcome is one agreed definition in one place rather than a corrected number.</span></li>
<li>A feature launched and retention improved. Did the feature cause it?<span class="ans">Not established. Anything else shipping in that window is a confounder, and the users who adopt a new feature are self-selected — engaged users both adopt features and retain. If there was an experiment, use it. If not, the honest answer is a difference-in-differences against a comparable unexposed group, stated with its limitations, plus a proposal to run the experiment properly.</span></li>
<li>How would you measure whether a recommendation system is any good?<span class="ans">Offline and online, and be explicit that they disagree. Offline: ranking metrics on held-out interactions, plus coverage and diversity so you catch a model that only recommends the popular items. Online: the metric the business actually wants, guardrails for long-term health, and an awareness of the feedback loop — the model shapes the data it is next trained on.</span></li>
<li>Your A/B test shows no significant difference. What do you report?<span class="ans">Report it as no detected effect and give the confidence interval, not "no effect". Then say what the test could have detected: if the interval spans everything the team cares about, the experiment was underpowered and the result is uninformative rather than negative. Distinguishing those two is the whole answer.</span></li>
<li>How would you decide whether to build a model or a set of rules?<span class="ans">Rules if the logic is known, stable, and needs to be explainable or audited; a model if the pattern is complex, shifting, or you cannot articulate it. Then the pragmatic point: start with rules as the baseline regardless, because you need something to beat, and a surprising number of projects find the rules are sufficient.</span></li>
<li>A stakeholder wants a dashboard. How do you decide what goes on it?<span class="ans">Start from the decision, not the data. Ask what action changes based on this number and how often they will look — then build the smallest thing that supports that decision. Dashboards built by listing available metrics get looked at twice and abandoned.</span></li>
<li>Half your data has a field missing. What do you do?<span class="ans">Find out why it is missing before deciding how to handle it — missing at random is a different problem from missing because of the outcome. If a field is absent for a particular segment or period, that pattern is information and often a feature in itself. Only then choose: drop, impute with an explicit indicator column, or model without it. Imputing before diagnosing the mechanism can bake in a bias.</span></li>
<li>How would you detect fraud in a dataset with no fraud labels?<span class="ans">Unsupervised first: anomaly detection on behaviour, velocity checks, graph structure over shared attributes such as device or address. Then bootstrap labels — investigate the top anomalies with a human, use those confirmations as seed labels, and move to supervised learning as the labels accumulate. Say that precision at the top of the ranking is what matters, because investigator time is the constraint.</span></li>
<li>You have one week to give an answer that properly needs a month. What do you do?<span class="ans">Deliver the decision-grade version: the crudest analysis that could change the decision, with its uncertainty stated plainly and the assumptions listed. Then say what you would do with the remaining three weeks and what could flip. Interviewers are testing whether you can be useful under a constraint without pretending the constraint did not exist.</span></li>
</ol>
</div></details>

<details class="rq"><summary>4 · Trade-offs and judgement (8)</summary><div class="rq-body">
<p class="rq-src">No right answer exists. The score is whether you name the axis you are trading along and commit to a position.</p>
<ol>
<li>Faster and slightly wrong, or slower and correct?<span class="ans">Depends entirely on the cost of being wrong, which is the thing to say first. For a recommendation, fast and approximate. For a payment or a clinical decision, correct. The useful follow-up is that you can often have both by tiering — fast path for the common case, slow path when the fast path is uncertain.</span></li>
<li>When would you accept a less accurate model?<span class="ans">When it is explainable and the domain requires it, when it fits the latency or hardware budget and the better one does not, when it is cheaper to retrain against drift, or when it fails in a more recoverable way. Accuracy is one axis among several, and treating it as the only one is what the question is checking for.</span></li>
<li>Buy or build?<span class="ans">Buy unless it is your differentiator. The parts worth building are the ones your product is uniquely good at; everything else is undifferentiated work you will then own forever. The counterweight is lock-in and per-unit cost at scale, so ask what it costs at ten times the current volume.</span></li>
<li>How do you decide between fixing technical debt and shipping features?<span class="ans">Make the debt concrete: which debt, costing what, how often. Debt that slows every change is worth fixing now; debt in a stable corner nobody touches can wait indefinitely. Fixing debt because it is unpleasant rather than because it is expensive is the trap.</span></li>
<li>The simplest solution does not scale. Do you build for today or for the projected load?<span class="ans">Build for roughly ten times current load, not a hundred. Ten times is usually cheap and buys real runway; a hundred times means designing against a projection you do not have evidence for, and the requirements will have changed before you get there. What matters is keeping the interface stable so the internals can be replaced.</span></li>
<li>Would you rather ship late or ship with a known limitation?<span class="ans">Ship with a known, documented, contained limitation — provided the people affected know about it and it is not a safety or correctness issue. The word that matters is <em>known</em>: a limitation you have chosen and communicated is a decision, and the same limitation undisclosed is a defect.</span></li>
<li>How much should you invest in monitoring before launch?<span class="ans">Enough to answer "is it working" and "is it getting worse" on day one. That is a small, fixed cost. The detailed dashboards can wait for the first real incident, which will tell you what you actually needed to see — building them in advance usually produces panels nobody looks at.</span></li>
<li>You disagree with the metric your team is optimising. What do you do?<span class="ans">Show the failure case rather than arguing in the abstract: find the change that would improve the metric and harm users, and put it in front of people. Then propose a guardrail alongside the existing metric rather than trying to replace it, because adding a constraint is a much easier sell than relitigating the goal.</span></li>
</ol>
</div></details>

<details class="rq"><summary>5 · Puzzles and reasoning under uncertainty (8)</summary><div class="rq-body">
<p class="rq-src">Less common than they used to be, but still asked — usually to see whether you reason aloud rather than freeze.</p>
<ol>
<li>You have two ropes that each burn for an hour but not uniformly. Measure 45 minutes.<span class="ans">Light rope A at both ends and rope B at one end simultaneously. A is consumed in 30 minutes regardless of how unevenly it burns, because the two flames together always consume the whole rope in half the time. At that moment light B's other end; B has 30 minutes of rope left burning from both ends, so it takes 15. Total 45. The generalisable idea worth naming: burning from both ends halves the remaining time whatever the density.</span></li>
<li>How would you test whether a coin is fair?<span class="ans">Flip it many times and test the observed proportion against 0.5 — a binomial test, or a normal approximation for large n. Decide the sample size in advance from the deviation you want to detect, because stopping when the result looks interesting is how you manufacture significance. And say that you cannot prove fairness, only fail to detect unfairness at some power.</span></li>
<li>A test is 99% accurate for a disease affecting 1 in 10,000. You test positive. What is the chance you have it?<span class="ans">Under 1%. In a million people, 100 have it and ~99 test positive; the 999,900 healthy people produce ~9,999 false positives at a 1% false positive rate. So roughly 99 out of 10,098, just under 1%. The base rate dominates, and this is the intuition behind why a rare-event classifier with excellent accuracy can still produce mostly false alarms.</span></li>
<li>You are one of 100 people in a queue and want to know your chance of a particular outcome. How do you approach it?<span class="ans">Solve the small case first — 2 people, then 3 — and look for the recurrence. Most queue and sequence puzzles have a pattern that is invisible at n=100 and obvious at n=3. Say you are doing this rather than trying to intuit the general answer.</span></li>
<li>How many trials do you need to be 95% confident an event with probability p occurs at least once?<span class="ans">The probability of never seeing it in n trials is (1−p)ⁿ, so solve (1−p)ⁿ ≤ 0.05, giving n ≥ log(0.05)/log(1−p). For p = 0.01 that is about 300. The practical version worth adding: this is why a bug that reproduces 1% of the time needs hundreds of runs before absence of failure means anything.</span></li>
<li>Given a biased coin, how do you generate a fair bit?<span class="ans">Von Neumann's trick: flip twice. HT means 0, TH means 1, and HH or TT means discard and repeat. Both mixed outcomes have identical probability p(1−p) whatever the bias, so the output is fair. It wastes flips, which is the trade you are making for not needing to know p.</span></li>
<li>You can ask one yes-or-no question to halve a search space. What makes a good question?<span class="ans">One whose answer is closest to equally likely either way, because that maximises the information gained. This is the same principle behind binary search and behind choosing which check to run first when debugging — pick what eliminates the most, not what confirms your favourite hypothesis.</span></li>
<li>How would you estimate something with genuinely no data available?<span class="ans">Bound it. Find a lower bound and an upper bound you are confident about, then narrow with any proxy or analogous case. An answer of "between 10,000 and 100,000, and here is why it cannot be outside that" is far more useful than a single invented number, and it is honest about what you know.</span></li>
</ol>
</div></details>

</div>

<div class="rnd" id="technical">
<h3>Technical / Experience Round</h3>
<p class="testing"><strong>Really testing:</strong> whether the depth on your resume is real, and whether you understand <em>why</em> things were built that way rather than only <em>what</em> was built.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Know your own resume cold.</strong> Anything on it is fair game. If you cannot explain a design decision on a project you listed, take it off — an unexplainable line is worse than a shorter resume.</li>
<li><strong>Lead with the tradeoff, not the outcome.</strong> "We used Kafka" is weak. "We needed replay and per-key ordering, so we took Kafka and accepted the operational cost" is the answer they are actually looking for.</li>
<li><strong>Quantify.</strong> Latency before and after, scale handled, cost saved, error rate moved. Numbers make a claim checkable, and checkable claims are believed.</li>
<li><strong>Separate what you did from what your team did,</strong> without diminishing yourself. Interviewers probe this deliberately, and overclaiming collapses fast under two follow-up questions.</li>
<li><strong>Say "I don't know" cleanly, then reason.</strong> "I haven't used that — I'd expect it to behave like X because Y" is a strong answer. Bluffing is the single most costly move available to you.</li>
<li><strong>Go one level deeper than asked, once.</strong> It demonstrates depth. Doing it every time turns into lecturing.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>Vagueness that does not survive a second follow-up.</li>
<li>Blaming previous teams, managers, or "legacy code" for outcomes.</li>
<li>Inability to explain a decision on a project you personally listed.</li>
</ul>
</div>

<div class="rnd" id="system-design">
<h3>System Design Round</h3>
<p class="testing"><strong>Really testing:</strong> whether you navigate ambiguity, make defensible tradeoffs, and design for the scale actually asked for rather than an imagined one.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Gather requirements before drawing anything.</strong> Functional and non-functional: expected scale, read/write ratio, latency budget, consistency needs, retention. A design without stated requirements cannot be evaluated.</li>
<li><strong>Do the arithmetic out loud.</strong> Requests per second, storage per year, bandwidth. Even rough numbers anchor every later decision — and skipping them is why designs drift into fantasy.</li>
<li><strong>Start simple, then scale under pressure.</strong> One server, one database, then add caching, replication, and partitioning as you justify each. A distributed architecture drawn in minute one with no rationale is a red flag, not a strength.</li>
<li><strong>Name the tradeoff at every fork.</strong> SQL or NoSQL, sync or async, strong or eventual consistency — say what you are buying and what you are giving up <em>for this problem</em>.</li>
<li><strong>Design for the failure.</strong> What happens when this component dies, this queue backs up, this dependency is slow? Senior candidates raise this unprompted.</li>
<li><strong>Follow the interviewer's steering.</strong> When they ask about a specific component, they are telling you where the remaining signal is.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>Naming technologies you cannot defend. A simpler choice you understand beats a fashionable one you do not.</li>
<li>Designing for a billion users when the question said a hundred thousand.</li>
<li>Never mentioning failure, monitoring, or cost.</li>
</ul>
</div>

<div class="rnd" id="ml">
<h3>ML Round</h3>
<p class="testing"><strong>Really testing:</strong> whether you think like a modeller — problem framing, evaluation design, and honesty about uncertainty — not whether you can recite architectures.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Frame the problem before reaching for a model.</strong> What is the target, where do labels come from, what does a false positive cost compared to a false negative? A large share of ML interviews is decided here, before any modelling is discussed.</li>
<li><strong>Talk about data before architecture.</strong> Volume, provenance, label quality, class balance, leakage risk, and whether training and serving distributions will match. Mentioning leakage unprompted is a strong seniority signal.</li>
<li><strong>Choose a metric and defend it.</strong> Accuracy is almost never the right answer. Say why precision@k, recall, F1, or calibration fits <em>this</em> cost structure.</li>
<li><strong>Always establish a baseline.</strong> "First I'd fit logistic regression or a simple heuristic, so we know what beating it means." Candidates who skip this look like they are pattern-matching rather than reasoning.</li>
<li><strong>Explain validation design explicitly.</strong> Time-based splits for temporal data, grouped splits when the same entity recurs. Getting this wrong invalidates everything downstream, and interviewers know it.</li>
<li><strong>Know the failure modes of anything you name.</strong> Propose a transformer and expect to discuss data requirements and attention cost. Naming a method you cannot critique is worse than proposing a simpler one.</li>
<li><strong>Carry it through to production.</strong> Serving latency, retraining cadence, drift monitoring, what happens when the model is confidently wrong. Training-only answers read as academic.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>Reaching for deep learning on a tabular problem with ten thousand rows.</li>
<li>Reporting accuracy on an imbalanced dataset without noticing the imbalance.</li>
<li>"I'd fine-tune an LLM" with no evaluation plan attached.</li>
<li>No baseline, no error analysis, no idea what the model gets wrong.</li>
</ul>

<h4>Questions and answers <span class="rq-count">48 questions</span></h4>

<details class="rq"><summary>1 · Problem framing (8)</summary><div class="rq-body">
<p class="rq-src">Where most ML interviews are actually decided, before any modelling is discussed.</p>
<ol>
<li>A product manager asks you to "add AI" to a feature. What do you ask?<span class="ans">What decision changes as a result. If nothing downstream acts differently, the model has no value however accurate it is. Then: what does the output look like, who consumes it, what does being wrong cost in each direction, and is there historical data where the right answer is known. Those four questions turn a vague ask into a specifiable problem, or reveal that it is not one.</span></li>
<li>How do you turn a business problem into an ML problem?<span class="ans">Name the decision, then the prediction that would improve it, then the target variable that stands in for that prediction, then the label source. The gap between the thing you care about and the thing you can label is where projects fail — you care about fraud, you can label chargebacks, and those differ in ways that matter.</span></li>
<li>When is the right answer "do not use ML"?<span class="ans">When the rule is known and stable, when you have no labels and no path to them, when the cost of a wrong answer exceeds the value of a right one, when you cannot get the features at prediction time, or when a lookup table would do. Saying this unprompted is a seniority signal, because it shows you are solving the problem rather than deploying your skill set.</span></li>
<li>What is the difference between the metric you optimise and the metric you care about?<span class="ans">The loss function is what the model minimises; the business metric is what success means; they are almost never the same object. Cross-entropy is not revenue. The job is choosing a proxy close enough that improving it improves the real thing, and monitoring for the divergence — because optimisation pressure finds the gap.</span></li>
<li>How would you decide what the prediction horizon should be?<span class="ans">By working backwards from the intervention. If the action takes two days to have an effect, predicting one day ahead is useless however accurate. Shorter horizons are easier and often worthless; the right horizon is the shortest one that still leaves time to act.</span></li>
<li>Where do your labels come from, and why does that question matter so much?<span class="ans">Because label provenance determines everything downstream. Human-annotated labels carry annotator bias and disagreement; implicit labels from user behaviour carry selection bias; labels from a downstream system carry that system's errors. And any label delayed relative to prediction creates a gap you must handle in training.</span></li>
<li>How do you handle a problem where the label only exists for cases you acted on?<span class="ans">This is selection bias from the existing policy, and it is very common — you only know whether a declined transaction was fraudulent for the ones you approved. The clean fix is a small randomised holdout that gets approved regardless, giving unbiased data. Failing that, propensity weighting, while being honest that it corrects only for what you have measured.</span></li>
<li>What would make you say a project is not worth pursuing?<span class="ans">No path to labels, no baseline worth beating, no consumer for the output, or a required accuracy that the available signal cannot support. Saying so early is far cheaper than proving it after six months, and the willingness to say it is part of what is being assessed.</span></li>
</ol>
</div></details>

<details class="rq"><summary>2 · Data, labels and leakage (8)</summary><div class="rq-body">
<p class="rq-src">Raising leakage before being asked is one of the strongest signals available in this round.</p>
<ol>
<li>What is data leakage and how does it show up?<span class="ans">Information in the training features that would not be available at prediction time. It shows up as a validation score that is too good, a single feature with implausible importance, and a model that collapses in production. Classic sources: a field populated after the outcome, an id encoding the target, and preprocessing fitted before the split.</span></li>
<li>How do you prevent it structurally rather than by inspection?<span class="ans">Point-in-time correctness — build each training row from only what was known at that timestamp — plus fitting all preprocessing inside the training fold. A feature store with as-of joins does this for you. Inspection catches leakage you thought to look for; structure catches the rest.</span></li>
<li>Your model has one feature with 90% of the importance. What do you do?<span class="ans">Suspect leakage before celebrating. Check when that field is populated relative to the prediction point, and whether it is derived from the outcome. If it is legitimate, ask whether it will still be available and still mean the same thing in production — a dominant feature is a single point of failure regardless.</span></li>
<li>How do you split data with repeated entities?<span class="ans">Group by the entity so all rows for one user or patient stay in the same fold. Otherwise the model memorises individuals and validation measures recall of the training set. Combine with a time-based split when the data is also temporal — grouping alone does not stop you training on the future.</span></li>
<li>When is a random train-test split wrong?<span class="ans">Whenever the data is temporal, grouped, or spatially correlated. For anything that will be deployed forward in time, split by time, because that is the only split that reflects how the model will actually be used. Random splits on time-series data are the most common way a good-looking result turns out to be meaningless.</span></li>
<li>How do you handle severe class imbalance?<span class="ans">First stop using accuracy and switch to PR AUC or recall at a fixed precision. Then class weighting rather than resampling as the default, since weighting keeps the data distribution intact. Undersampling the majority is acceptable if you correct the calibration afterwards; SMOTE is popular and frequently makes things worse on high-dimensional data. Say that the threshold, not the model, is where the imbalance is finally handled.</span></li>
<li>How do you know if your labels are any good?<span class="ans">Measure inter-annotator agreement on a sample. If two humans disagree 20% of the time, that is your ceiling and no model will exceed it. Also look at label distribution over time for drift in the annotation guidelines, which is quiet and common.</span></li>
<li>You have 500 labelled examples and 5 million unlabelled. What do you do?<span class="ans">Use a pretrained model and fine-tune, which is what makes 500 sufficient. Then active learning: score the unlabelled pool, label where the model is least certain or where the disagreement between models is highest, and iterate. Blindly labelling more at random is the least efficient use of the annotation budget.</span></li>
</ol>
</div></details>

<details class="rq"><summary>3 · Metrics and evaluation (8)</summary><div class="rq-body">
<p class="rq-src">Choose a metric and defend it against the cost structure. Accuracy is almost never the answer.</p>
<ol>
<li>Why is accuracy usually the wrong metric?<span class="ans">Because it weights both error types equally and is dominated by the majority class. With 1% positives, predicting everything negative scores 99%. The right metric follows from the asymmetry between a false positive and a false negative in that specific application.</span></li>
<li>Precision or recall — how do you choose?<span class="ans">By what a mistake costs. Recall matters when a miss is expensive and a false alarm is cheap: disease screening, fraud triage. Precision matters when acting on a wrong positive is costly or annoying: auto-blocking, notifications. Usually you fix one at an acceptable level and optimise the other, rather than balancing them with F1 for its own sake.</span></li>
<li>What does ROC AUC actually measure, and when is PR AUC better?<span class="ans">ROC AUC is the probability the model ranks a random positive above a random negative. It uses the false positive rate, which has a huge denominator when negatives dominate — so it stays flatteringly high on imbalanced data. PR AUC uses precision, which reacts to the false positives that actually reach a person, and is the more honest choice when positives are rare.</span></li>
<li>What is calibration and when do you need it?<span class="ans">A calibrated model's predicted probabilities match observed frequencies — of everything scored 0.7, about 70% are positive. You need it whenever the number is consumed as a probability rather than a ranking: expected-value decisions, thresholds set by cost, or a human reading the score. Check with a reliability diagram, fix with Platt scaling or isotonic regression on held-out data.</span></li>
<li>How do you choose the operating threshold?<span class="ans">Not from the model. From capacity and cost: how many alerts can be handled per day, or what expected value each decision carries. The threshold is a product decision, and it should be revisited when volumes change even if the model does not.</span></li>
<li>Offline metrics improved but the online metric did not. What happened?<span class="ans">Common causes, in rough order: distribution mismatch between the offline set and live traffic; the offline metric not being the thing users respond to; a feedback loop where the old model shaped the data you evaluated on; latency added by the new model outweighing its accuracy; and a bug in serving that means the deployed model is not the one you evaluated. Check the last one first — it is more common than people expect.</span></li>
<li>How would you evaluate a model with no ground truth?<span class="ans">Proxies and humans. Agreement between independent models, consistency under perturbation, and human review of a stratified sample to build a small trusted evaluation set. For generative output, pairwise human preference or a well-validated model-as-judge — validated meaning you have checked it agrees with humans on the cases you do have.</span></li>
<li>What is a guardrail metric?<span class="ans">A secondary metric watched during a change to catch harm the primary metric would hide. Optimise click-through and you can wreck long-term retention; optimise fraud recall and you can double customer friction. The guardrail is what makes it safe to optimise the primary aggressively.</span></li>
</ol>
</div></details>

<details class="rq"><summary>4 · Modelling choices (8)</summary><div class="rq-body">
<p class="rq-src">Know the failure modes of whatever you name. Proposing a method you cannot critique is worse than proposing a simpler one.</p>
<ol>
<li>Why start with a baseline, and what should it be?<span class="ans">Because a number means nothing without something to compare it to, and a surprising number of problems are solved by the baseline. Use the simplest thing that could work: majority class, a business rule already in use, logistic regression, or last-value-carried-forward for time series. It also surfaces data problems fast, before you have spent a week on architecture.</span></li>
<li>When would you use gradient boosting over a neural network?<span class="ans">Tabular data — which is most business data. Boosting handles mixed types and missing values natively, needs far less data and tuning, trains in minutes, and routinely wins. Reach for neural networks when the input is unstructured — text, images, audio — or when you need representation learning that transfers.</span></li>
<li>How do you decide between fine-tuning and prompting a pretrained model?<span class="ans">Start with prompting, because it is free to iterate and often sufficient. Fine-tune when you need a consistent output format the prompt cannot enforce, when you have domain behaviour the base model lacks, when latency or cost demands a smaller model, or when the prompt has grown so long it is expensive. With few examples, retrieval plus prompting usually beats fine-tuning.</span></li>
<li>What is the bias-variance trade-off, in practice rather than in theory?<span class="ans">High bias is underfitting — the model is too simple and training error is already high; adding data will not help, so add capacity or better features. High variance is overfitting — training error is low and validation error much higher; more data, regularisation, or less capacity helps. The practical value is that it tells you which lever to pull, and the diagnostic is comparing the two errors.</span></li>
<li>How do you handle high-cardinality categorical features?<span class="ans">One-hot explodes, so: target encoding computed inside the fold to avoid leakage, hashing when the vocabulary is unbounded, learned embeddings when there is enough data, or grouping the long tail into "other". CatBoost handles it natively with ordered statistics. The leakage risk in target encoding is the part interviewers listen for.</span></li>
<li>Your model overfits. What do you try, in what order?<span class="ans">More data first if it is obtainable, because it is the only fix with no downside. Then stronger regularisation and early stopping, then reducing capacity, then augmentation if the domain allows. Check for leakage-in-reverse too — a validation set that is too similar to training makes a model look fine until deployment.</span></li>
<li>How do you approach hyperparameter tuning?<span class="ans">Random or Bayesian search rather than grid, because grid wastes most of its budget on parameters that do not matter. Tune the few that do — learning rate above all, then capacity and regularisation. Use a validation set separate from test, and stop when the gain is smaller than the noise between runs, which is sooner than most people stop.</span></li>
<li>How would you make a model explainable if the domain requires it?<span class="ans">Prefer an inherently interpretable model when the accuracy cost is small — a regularised linear model or a shallow tree is often within a point or two, and the argument is easier. Otherwise SHAP for per-prediction attribution, with the caveat that an explanation of a model is not an explanation of the world: SHAP tells you what the model used, not what causes the outcome.</span></li>
</ol>
</div></details>

<details class="rq"><summary>5 · Error analysis and iteration (8)</summary><div class="rq-body">
<p class="rq-src">"No baseline, no error analysis, no idea what the model gets wrong" is the fastest way to fail this round.</p>
<ol>
<li>How do you actually do error analysis?<span class="ans">Take a sample of errors and read them, one at a time, categorising as you go. A hundred examples usually reveals three or four recurring categories, and those categories tell you what to fix. Skipping this and tuning hyperparameters instead is the most common waste of time in applied ML.</span></li>
<li>Your model is 85% accurate. What do you do next?<span class="ans">Find out what the 15% is made of before doing anything. If most errors come from one segment or one input type, that is a targeted fix worth more than any model change. Also establish the ceiling: if humans disagree 10% of the time, 85% may already be close to the limit.</span></li>
<li>How do you know whether to invest in more data, better features, or a better model?<span class="ans">The learning curve tells you. If validation error is still falling as you add data, more data helps. If it has plateaued well above the achievable error, more data will not — the problem is capacity or features. Compare training and validation error to distinguish the two.</span></li>
<li>What is a slice-based evaluation and why does it matter?<span class="ans">Reporting performance separately for meaningful subgroups — device, region, language, customer size, demographic — rather than one aggregate. Aggregates hide a segment where the model is useless, and that segment is usually the one someone complains about. It is also how you find fairness problems before someone else does.</span></li>
<li>The model does well on average and badly for new users. How do you approach that?<span class="ans">It is a cold-start problem: the features that carry the signal do not exist yet for them. Options are a separate model using only the features available at signup, sensible defaults from population priors, or content-based rather than behavioural features until history accumulates. Say which segment you are optimising for, because the two models will disagree.</span></li>
<li>How do you decide when a model is good enough to ship?<span class="ans">Against the decision it supports, not a round number. It is good enough when it beats what is there today by a margin that survives the confidence interval, when its failure mode is acceptable to whoever is affected, and when you can detect degradation after launch. Shipping something mediocre with monitoring beats waiting for something excellent without it.</span></li>
<li>What do you do when the model is confidently wrong?<span class="ans">Confidence and correctness coming apart is a calibration problem and often a distribution problem — the input is unlike anything in training. The mitigations are calibration, an out-of-distribution check, and an abstention path where the system says "I don't know" rather than guessing. Deciding what happens on abstention is a product question, not a modelling one.</span></li>
<li>How would you set up a feedback loop from production back into training?<span class="ans">Log inputs, predictions, and eventual outcomes, joined by an id. Then guard against the loop poisoning itself: if you only observe outcomes for cases you acted on, retraining on that data compounds the existing policy's bias. A small random holdout that bypasses the model is what keeps the training data honest.</span></li>
</ol>
</div></details>

<details class="rq"><summary>6 · Production, drift and LLM-specific (8)</summary><div class="rq-body">
<p class="rq-src">Training-only answers read as academic. Carry every answer through to serving.</p>
<ol>
<li>What is the difference between data drift and concept drift?<span class="ans">Data drift is the input distribution changing — new user mix, new device. Concept drift is the relationship between inputs and outcome changing, so a once-accurate model becomes wrong even on familiar inputs. Data drift you can detect without labels; concept drift you generally cannot, which is why it is the more dangerous one.</span></li>
<li>How would you monitor a model in production?<span class="ans">Four layers: the service is up and fast; the inputs look like training data; the prediction distribution is stable; and, where labels arrive, performance by slice. Alert on the input and prediction layers, because they are available immediately, while true performance may be days or weeks behind.</span></li>
<li>How often should you retrain?<span class="ans">On a trigger, not a calendar, wherever possible — retrain when drift or performance monitoring says to. A schedule is a reasonable fallback, set from how fast the domain moves. Then say the harder part: every retrain needs automated validation against the incumbent and a rollback path, or automated retraining is just an automated way to ship a worse model.</span></li>
<li>What is training-serving skew and how do you avoid it?<span class="ans">The features computed at training time differing from those computed at serving time — different code, different library version, different aggregation window. Avoid it by sharing one transformation path, or by a feature store that serves both. Detect it by logging serving features and comparing their distribution against training.</span></li>
<li>How would you evaluate a RAG system?<span class="ans">Evaluate retrieval and generation separately, because they fail differently. Retrieval: recall of the relevant document in the top-k — if it is not retrieved, no prompt will save you. Generation: faithfulness to the retrieved context, and whether it abstains when the context does not contain the answer. Most RAG quality problems are retrieval problems being blamed on the model.</span></li>
<li>How do you reduce hallucination in an LLM feature?<span class="ans">Ground it in retrieved context and require citations that can be checked against the source. Constrain the output format so unverifiable claims have nowhere to go. Give it an explicit abstention option and make abstention acceptable in the product. Then verify — a second pass checking each claim against the context catches a lot. The one thing that does not work is instructing it not to hallucinate.</span></li>
<li>What does A/B testing an LLM feature look like, given the output is not a number?<span class="ans">Randomise at user level and measure the downstream behaviour you care about — task completion, edit rate, escalation rate, retention — rather than output quality directly. Alongside that, run an offline judge on a fixed prompt set for regression detection. And log everything, because with generative output the qualitative review of the tail is where you find the problems.</span></li>
<li>How would you optimise inference cost and latency?<span class="ans">In order of return: use a smaller model where it suffices and route only hard cases to the large one; cache repeated prefixes and repeated requests; quantise; batch for throughput while watching the latency cost; and shorten the prompt, which is the one people forget despite it being pure saving. Measure p95 end to end, after warm-up, including pre- and post-processing.</span></li>
</ol>
</div></details>

</div>

<div class="rnd" id="take-home">
<h3>Take-Home / Project Round</h3>
<p class="testing"><strong>Really testing:</strong> judgment under a constraint — what you choose to do when nobody is watching, and whether someone else can run and understand your work.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Scope to the stated time, then write down what you would do with more.</strong> This is the single highest-signal move available. It converts an incomplete submission into evidence of prioritisation.</li>
<li><strong>Treat the README as graded, because it is.</strong> Assumptions, decisions, tradeoffs, known limitations, and what you would improve. Reviewers often read it before the code.</li>
<li><strong>Make it run first try.</strong> One documented command. A modest solution that runs beats a better one that does not, every time.</li>
<li><strong>Show the evaluation, not only the result.</strong> How you validated, what you compared against, where it fails.</li>
<li><strong>Do not gold-plate.</strong> Spending twenty hours on a four-hour exercise signals poor judgment about scope — and reviewers who honoured the limit will notice.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>No README, or one that explains what the code does rather than why.</li>
<li>Unreproducible results — missing dependencies, hardcoded paths, uncommitted data.</li>
<li>Ignoring an explicit constraint in the brief.</li>
</ul>
</div>

<div class="rnd" id="behavioral">
<h3>Behavioral / Values Round</h3>
<p class="testing"><strong>Really testing:</strong> how you behave when things go wrong, how you treat colleagues, and whether people want to work alongside you.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Prepare five or six real stories, not answers to fifty questions.</strong> A conflict, a failure, a leadership moment, an ambiguous project, a hard technical decision, a time you changed your mind. Almost any behavioural question maps onto one of them.</li>
<li><strong>Keep the situation short and spend the time on action and result.</strong> Most candidates spend two minutes on background and thirty seconds on what they actually did.</li>
<li><strong>Own the failure story properly.</strong> A real mistake, your responsibility, what you changed afterwards. A "failure" that is secretly a strength — "I care too much about quality" — reads as evasion and is remembered as one.</li>
<li><strong>Include a time you changed your mind.</strong> It is unusually strong signal and almost nobody offers it unprompted.</li>
<li><strong>Name colleagues' contributions.</strong> People who say "we" naturally and still make their own role clear are the ones teams want.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>Hypotheticals instead of specifics — "I would usually..." when asked "tell me about a time".</li>
<li>Any story where every problem was caused by someone else.</li>
<li>Delivery so rehearsed it stops sounding like something that happened.</li>
</ul>

<h4>Questions drawn from my résumé <span class="rq-count">76 questions</span></h4>

<p>The advice above says prepare five or six stories rather than fifty answers. These are the questions my own <a href="/files/Kiran-Davuluri-Resume.pdf">résumé</a> invites, grouped by the story each one pulls, each with the answer underneath. Every line on a CV is a question waiting to be asked — particularly every number.</p>

<p>The answers are built from what the résumé actually states, so they give the shape, the reasoning, and what the interviewer is listening for. Where only the person who was there knows the detail, there is an <em class="fill">amber placeholder</em> instead of an invented specific — those are the parts to fill in from memory before saying any of this out loud, because the follow-up question always goes straight at them.</p>

<details class="rq"><summary>Story 1 · Ambiguity and scoping (8)</summary><div class="rq-body">
<p class="rq-src">Pulls from: consolidating multiple ML repositories into one inference pipeline at Infiswift; the RFI document validation agent.</p>
<ol>
<li>Tell me about a time you were handed something poorly defined and had to decide what it actually was.<span class="ans">At Infiswift I was asked to &quot;reduce duplication&quot; across our document extraction work. That was the entire brief. When I went and read the code, the real problem turned out to be a different one: several repositories had each grown their own LLM extraction path — its own prompts, its own parsing, its own error handling. Nobody owned the interface, so when a business rule changed someone had to find and update every copy, and they usually missed one. So I reframed it. Not &quot;there is duplicate code&quot; but &quot;there is no single place where a document becomes structured data.&quot; I proposed a modular extraction API to be that place. The reframing is what made the work worth doing — deduplicating the code alone would have left us in the same position a few months later.</span></li>
<li>You consolidated several ML repositories into one pipeline. Who decided that needed doing — you or someone else?<span class="ans">Both, and I would rather be precise about that than overclaim. The maintainability pain was felt across the engineering teams; people knew it was bad. What I brought was the specific diagnosis and the proposal. I had been working across more than one of those repositories and hit the same thing twice — the same document type classified differently depending on which path happened to process it. I wrote up what I had found with real examples showing the divergence, and proposed consolidating into a single inference pipeline. So the frustration was shared; the framing and the plan were mine.</span></li>
<li>How did you work out what the duplicate LLM workflows actually had in common?<span class="ans">I stopped reading the code and started comparing inputs and outputs. At the code level the implementations looked unrelated — different prompt structures, different post-processing, different libraries. But the contract was identical: a document goes in, structured fields and a file type classification come out. Once I lined the actual inputs and outputs up side by side, the shared shape was obvious and all the variation was in the middle. I then checked whether that variation was deliberate by asking the people who wrote them, and in a good number of cases nobody could remember a reason — it was an accident of when that one had been written, not a decision.</span></li>
<li>What did you have to leave alone, and how did you decide?<span class="ans">I left alone anything with a genuinely different output contract. One path produced a different downstream artefact, and folding it in would have meant either compromising the shared interface or building a special case into it on day one — neither of which is worth it for a single caller. I also left alone consumers I could not migrate on my own timeline, where the owning team had a freeze or a dependency I did not control. My rule was blast radius rather than elegance: if pulling something in meant I might break what I could not test, it stayed out. Consolidating a few things properly beats consolidating more of them halfway.</span></li>
<li>Whose code were you replacing, and how did that conversation go?<span class="ans">It was <em class="fill">[the teams]</em>, and the conversations went well — mostly because of how I opened them. I did not go in saying their code was duplicated. I went in with the migration already built: a compatibility layer so their existing calls kept working, and their own tests passing against the new pipeline before I asked them for anything. At that point the ask was just &quot;switch when it suits you.&quot; The one real point of friction was not about code at all, it was ownership — someone reasonably wanted to know who would be on the hook when a shared pipeline broke at 2am. We settled it by agreeing I owned the pipeline and each team owned its adapter.</span></li>
<li>How did you know when the consolidation was finished rather than merely working?<span class="ans">Working is not finished. The new pipeline worked within a few weeks, but at that point we had one more extraction path than we started with — I had added to the problem, not removed it. I treated it as finished when the old paths were deleted and there were no callers left. That is a stricter bar and it took considerably longer than the build did, because the last few consumers are always the awkward ones. I tracked it as a plain list of remaining call sites and worked it down. The day I deleted the last old module was the day I called it done, and I would defend that definition — a consolidation that leaves both versions running has added a system rather than removed one.</span></li>
<li>What would you do differently if you started that consolidation again tomorrow?<span class="ans">I would migrate one consumer end to end before designing the shared interface. What I did was read all the existing implementations and design something that covered all of them, which sounds sensible and produced an interface that was slightly wrong for everybody. It carried options nobody used, and it was missing something the very first real migration needed immediately. If I had taken the messiest consumer, moved it properly, and only then generalised, I would have got there faster with a smaller surface area. I have applied that since: build for one real caller, then widen.</span></li>
<li>Describe a time you pushed back on a request because the underlying problem was different from the one stated.<span class="ans">The document validation work. The request was to improve classification accuracy — the system was getting file types wrong and downstream processing was failing because of it. Before touching the model I spent time going through the actual failures, and most of them were not classification errors in the way people assumed. Files were being categorised on upload, by filename or by whatever the uploader selected, and the content frequently did not match the label. The model was faithfully classifying documents that had already been mislabelled upstream. So I pushed back on &quot;make the model better&quot; and proposed content-aware validation at ingest instead — an agent using Gemini through LangChain and LangGraph that reads what the document actually is rather than trusting what it claims to be. That removed a whole class of downstream failure that no amount of prompt tuning would have touched.</span></li>
</ol>
</div></details>

<details class="rq"><summary>Story 2 · A hard technical decision (8)</summary><div class="rq-body">
<p class="rq-src">Pulls from: the self-learning regex framework; choosing LightGBM and Isolation Forest for fraud; ONNX and TensorRT for edge.</p>
<ol>
<li>Walk me through a technical decision you made that you knew would be contested.<span class="ans">Promoting stable LLM outputs into deterministic regex rules. It looks like a step backwards — replacing a capable model with pattern matching — so the case has to be made on cost, latency, and reproducibility rather than on capability.</span></li>
<li>You built a framework that generates regex rules from LLM output. Why not simply keep calling the model?<span class="ans">Three reasons, in order: a rule is free and instant where a model call costs money and hundreds of milliseconds; a rule gives the same answer every time, which matters for a classification that downstream systems depend on; and a rule can be reviewed and version-controlled. The model stays in the loop for anything the rules do not cover.</span></li>
<li>How did you convince anyone that a generated rule was safe to promote to production?<span class="ans">By making promotion a gated pipeline rather than a decision — the rule had to be generated, validated, deduplicated, and versioned before it moved through Development, Preview, and Production. <em class="fill">[the validation threshold you actually used]</em>. Safety came from the process, not from trusting the generator.</span></li>
<li>Fraud detection with LightGBM rather than a deep model — how did you argue that, and to whom?<span class="ans">Tabular transaction data with strong categorical features is where gradient boosting wins, and it wins with less tuning and less data. Add that it trains in minutes, which matters when the fraud pattern shifts and you need to retrain. Isolation Forest covered the unsupervised side for patterns with no labels yet.</span></li>
<li>Who disagreed with you on a model choice, and what happened?<span class="ans"><em class="fill">[the actual disagreement and how it resolved]</em>. The structure that lands: what they argued, what you agreed with in their argument, what evidence settled it, and — if they were right — say so.</span></li>
<li>Tell me about a decision you made under time pressure that you were not fully confident in.<span class="ans"><em class="fill">[the decision]</em>. Say what you did to limit the downside rather than claiming you were secretly confident: the smaller reversible version, the flag you could turn off, the thing you agreed to revisit.</span></li>
<li>When did you choose the boring option over the interesting one, and was it right?<span class="ans">The regex promotion is exactly this, and so is LightGBM over a transformer for tabular fraud. Both were the duller choice and both were right. The honest framing is that the interesting option is usually the one that costs someone else maintenance later.</span></li>
<li>What is a technical decision from your past that you now think was wrong?<span class="ans"><em class="fill">[a real one]</em>. Pick something with a consequence you can describe, explain what you were optimising for at the time, and say what you would need to have known. Avoid decisions that turned out fine anyway.</span></li>
</ol>
</div></details>

<details class="rq"><summary>Story 3 · Conflict and stakeholder pushback (8)</summary><div class="rq-body">
<p class="rq-src">Pulls from: working with Risk and Compliance at JPMorgan; clinician adoption at Cognizant.</p>
<ol>
<li>Tell me about a time you disagreed with someone more senior than you.<span class="ans"><em class="fill">[the disagreement]</em>. Show that you separated the disagreement from the person, made the case once with evidence, and then either changed their mind or committed to their decision properly. Interviewers are listening for whether you can lose gracefully.</span></li>
<li>Compliance blocked or slowed something you had built — what happened next?<span class="ans">Frame compliance as a requirement you had not gathered yet rather than an obstacle. On the GenAI work that meant bias monitoring, output validation, and prompt injection safeguards became part of the design — which is what made deployment possible at all.</span></li>
<li>How do you explain a model's limitation to someone whose job is to distrust it?<span class="ans">In their terms and with numbers. For a risk function that means false positive rate at the operating threshold, what the model cannot see, and what happens when it is wrong. Volunteering the limitation before being asked buys more credibility than defending the model does.</span></li>
<li>Describe a time a stakeholder wanted something you thought was a bad idea.<span class="ans"><em class="fill">[the request]</em>. The strong version: you built the smallest thing that tested their assumption, and let the result settle it rather than the argument.</span></li>
<li>A clinician told you the model was wrong about a patient. What did you do?<span class="ans">Treat it as signal, not user error — the clinician usually has context the model does not. Go and look at that specific case, and often it reveals a data problem rather than a model problem. <em class="fill">[what you found when this happened]</em>.</span></li>
<li>How do you handle it when a team refuses to adopt something you shipped?<span class="ans">Find out why before pushing. Non-adoption is usually cost of switching, a missing feature in their workflow, or lack of trust in the output. Each has a different fix, and only the third is about the model.</span></li>
<li>Tell me about a working relationship that started badly and improved.<span class="ans"><em class="fill">[the relationship and the turning point]</em>. What lands is a specific change you made in how you worked with them, not a change in how you felt about them.</span></li>
<li>When have you had to say no to a request from a business partner?<span class="ans"><em class="fill">[the request]</em>. Say no with an alternative and a reason they care about — timeline, risk, or something else it would displace. A no with no alternative reads as unwillingness rather than judgement.</span></li>
</ol>
</div></details>

<details class="rq"><summary>Story 4 · Failure and what you changed (8)</summary><div class="rq-body">
<p class="rq-src">Pulls from: false positives in fraud; misclassified documents; drift monitoring at Cognizant.</p>
<ol>
<li>Tell me about something you shipped that did not work.<span class="ans"><em class="fill">[the failure]</em>. Structure: what you expected, what happened, how you found out, what you did in the hour after, and the process change that came from it. The last part is what is actually being assessed.</span></li>
<li>What is the worst production incident you have been responsible for?<span class="ans"><em class="fill">[the incident]</em>. Own your part explicitly and early in the answer. Describing the detection and recovery in detail is more impressive than the incident being small.</span></li>
<li>A misclassified document caused a downstream failure. Walk me through the day it happened.<span class="ans">Tell it chronologically and concretely — how it surfaced, what you checked first, what the actual cause turned out to be, what you shipped that day versus that week. <em class="fill">[the specifics]</em>. Chronology is what makes it sound real rather than rehearsed.</span></li>
<li>When did a model of yours degrade in production before anyone noticed?<span class="ans">This is why the drift and data quality monitoring at Cognizant existed. The honest version names how long it went unnoticed and what monitoring you added afterwards — undetected degradation is normal, having no way to detect it is the failure.</span></li>
<li>What did you change about how you work as a result of a specific failure?<span class="ans"><em class="fill">[the change]</em>. The test frameworks built with PyTest and Moto are a good anchor if the answer is about validating cloud integrations before they reach production rather than after.</span></li>
<li>Tell me about a time you missed a deadline. What did you tell the people waiting?<span class="ans"><em class="fill">[the occasion]</em>. The question is really about when and how you communicated it. Raising it early with a revised estimate is the good answer; discovering it on the day is the bad one.</span></li>
<li>Describe an occasion where your testing did not catch something it should have.<span class="ans">Usually the gap is between unit tests and reality — mocked cloud services that behave unlike the real ones, or a case absent from the fixtures. <em class="fill">[what slipped through]</em>. Then say what class of test you added, not just the one case.</span></li>
<li>What is a mistake you have made more than once?<span class="ans">Answer it honestly; the question exists to see whether you will. A common and credible one is under-scoping migration work because the new system was finished and the old one was still running. Say what you now do to catch yourself.</span></li>
</ol>
</div></details>

<details class="rq"><summary>Story 5 · Influence without authority (8)</summary><div class="rq-body">
<p class="rq-src">Pulls from: cross-team consolidation; SHAP dashboards raising physician adoption; responsible AI controls with three teams.</p>
<ol>
<li>Tell me about a time you got people to change how they worked without being their manager.<span class="ans">The consolidation again, from the other side. Adoption came from making the new path cheaper to use than the old one, not from a mandate. <em class="fill">[what you did to lower the switching cost]</em>.</span></li>
<li>Physician adoption increased after you built the explainability dashboards. What actually drove that — the dashboards, or something else?<span class="ans">Be careful here — the dashboards helped, but adoption usually turns on the risk factors being clinically plausible, on the score arriving inside an existing workflow, and on a respected clinician using it first. Naming the parts you did not control reads as more credible, not less.</span></li>
<li>How did you get Risk, Compliance, and Data Science to agree on one set of controls?<span class="ans">By writing down what each team actually needed and finding the controls that satisfied more than one — bias monitoring and output validation served both governance and quality. <em class="fill">[how the agreement was reached]</em>. Agreement usually comes from a document, not a meeting.</span></li>
<li>Describe a time you had to bring a sceptical team along with you.<span class="ans"><em class="fill">[the team and the concern]</em>. Scepticism is usually specific; find the specific objection and address that rather than making a general case.</span></li>
<li>What did you do when a team ignored a standard you had introduced?<span class="ans">Check first whether the standard was worth following. If it was, make it the default — in a template, in CI, in the scaffold — rather than in a document. Standards that require remembering do not hold.</span></li>
<li>Tell me about mentoring someone, and what you learned from it.<span class="ans"><em class="fill">[who and what]</em>. The detail that makes this answer good is what you learned about your own explanations from watching where they got stuck.</span></li>
<li>When have you deliberately given away credit?<span class="ans"><em class="fill">[the occasion]</em>. Keep it brief and specific. This question is answered as much by how you talk about colleagues throughout the whole interview as by the story.</span></li>
<li>How do you make a case for work that is invisible — testing, monitoring, refactoring?<span class="ans">Attach it to a cost that has already been paid. Testing frameworks are easy to justify after a regression; monitoring is easy after an incident. Where there is no incident yet, quantify the risk in time rather than in principle.</span></li>
</ol>
</div></details>

<details class="rq"><summary>Story 6 · Changing your mind (7)</summary><div class="rq-body">
<p class="rq-src">Pulls from: LLM evaluation and A/B testing across production projects; the readmission A/B test.</p>
<ol>
<li>Tell me about a time an experiment told you that you were wrong.<span class="ans"><em class="fill">[the experiment]</em>. The LLM evaluation and A/B testing work is the natural source. What makes the answer strong is that you had committed to a view publicly beforehand.</span></li>
<li>You ran A/B tests on LLM behaviour. What was the most surprising result?<span class="ans"><em class="fill">[the actual result]</em>. A genuinely common finding worth checking against your own: prompt changes that improved average quality also increased variance, and the variance mattered more downstream than the average did.</span></li>
<li>When did evaluation change your mind about an approach you had already built?<span class="ans">Say what the evaluation measured and why the result was not what you expected. Analysing model agreement and reasoning quality — rather than only final accuracy — is what tends to reveal that a model was right for the wrong reason.</span></li>
<li>Describe a strongly held technical opinion you have since abandoned.<span class="ans"><em class="fill">[the opinion]</em>. Give the evidence that moved you, not just the fact that you moved. Opinions abandoned without a reason read as having had no basis.</span></li>
<li>What is something you believed about ML two years ago that you no longer believe?<span class="ans">Something defensible and specific — for instance, that a capable enough model removes the need for deterministic rules. The regex promotion framework exists because that turned out to be false on cost, latency, and reproducibility grounds.</span></li>
<li>Tell me about a time you were convinced by a junior colleague.<span class="ans"><em class="fill">[the occasion]</em>. Say what they saw that you had stopped seeing. This question quietly tests whether you listen downwards.</span></li>
<li>How do you tell the difference between being persuaded and being worn down?<span class="ans">Persuasion changes what you would predict; attrition only changes what you will argue about. A useful test is whether you can now make their case better than they did — if you cannot, you have conceded rather than been convinced.</span></li>
</ol>
</div></details>

<details class="rq"><summary>Story 7 · Working under hard constraints (7)</summary><div class="rq-body">
<p class="rq-src">Pulls from: sub-50 ms feature serving; low-latency edge inference for robotic arm control; HIPAA-compliant retraining.</p>
<ol>
<li>Tell me about a project where the constraint, not the model, was the hard part.<span class="ans">The wake-word detection work. An MLP on Mel-spectrogram features is not the interesting part; making it run at low latency on edge hardware for robotic arm control, via ONNX and TensorRT, is where the difficulty sat.</span></li>
<li>Sub-50 ms feature serving — what did you have to give up to hit that?<span class="ans">Freshness and flexibility. Anything requiring a large aggregation window has to be precomputed and served from the online store, so the feature set is constrained to what can be maintained in advance. <em class="fill">[the specific trade-off you made]</em>.</span></li>
<li>How did the edge deployment change what you were willing to build?<span class="ans">It moved the decision from accuracy to what survives quantisation and export. An architecture that gains a point of accuracy but has an operation the runtime does not support is worse than a simpler one, because unsupported operations fall back and destroy the latency budget.</span></li>
<li>Describe working under a compliance constraint that shaped the design.<span class="ans">HIPAA on the clinical work shaped where data could live, what could be logged, and how retraining had to be automated so patient data never moved through a manual step. The constraint changed the architecture, not just the paperwork.</span></li>
<li>When did you have to ship something you knew was not the best version?<span class="ans"><em class="fill">[the occasion]</em>. Say what you protected — the interface, the ability to swap the model later, the monitoring — so the shortcut was contained rather than structural.</span></li>
<li>Tell me about a time you cut scope. Who did you tell, and how?<span class="ans"><em class="fill">[what was cut]</em>. Name who you told and when. Cutting scope silently is the failure mode this question is looking for.</span></li>
<li>What is the tightest deadline you have worked to, and what broke because of it?<span class="ans">Answer the second half honestly — something always breaks, usually tests, documentation, or a migration left half-done. <em class="fill">[what it was in your case]</em> and whether you went back for it.</span></li>
</ol>
</div></details>

<details class="rq"><summary>Story 8 · Ownership and initiative (7)</summary><div class="rq-body">
<p class="rq-src">Pulls from: building test frameworks with PyTest and Moto; the multi-agent side projects.</p>
<ol>
<li>Tell me about something you built that nobody asked you to build.<span class="ans">The testing and evaluation frameworks are the strongest example, and the multi-agent side projects the second. Say what problem you kept hitting that made you build it — unrequested work is only impressive if it was solving something real.</span></li>
<li>You wrote testing frameworks for AI workflows — was that assigned, or did you decide it was needed?<span class="ans"><em class="fill">[assigned or not]</em>. If it grew out of a regression you had already been bitten by, say that; it explains the motivation better than any claim about quality culture.</span></li>
<li>What did you fix that was not your responsibility?<span class="ans"><em class="fill">[the fix]</em>. Keep it proportionate — the good version is a small fix with an outsized effect, not a rewrite of someone else's system.</span></li>
<li>Describe a time you inherited something badly built and had to live with it.<span class="ans">Say what you stabilised first and what you left alone. Anyone can list the problems; the signal is in choosing which one actually mattered and resisting the rewrite.</span></li>
<li>Your side projects use ADK and the Claude Agent SDK. What made you start them?<span class="ans"><em class="fill">[the actual motivation]</em>. The credible answer is usually wanting to understand a failure mode properly — evaluation, hallucination rates, and workflow reliability are the parts you cannot learn from a demo.</span></li>
<li>What did the side projects teach you that your job did not?<span class="ans">Owning every layer, including the parts a team would normally hide from you — the evaluation harness, the CI, the security scanning. Building the trace-driven evaluation yourself teaches you what the numbers actually mean.</span></li>
<li>Tell me about a time you kept going on something after the interest had worn off.<span class="ans"><em class="fill">[the project]</em>. The finishing is the point. Say what the last 10% consisted of, since that is the part people abandon.</span></li>
</ol>
</div></details>

<details class="rq"><summary>The numbers you will be asked to defend (15)</summary><div class="rq-body">
<p class="rq-src">Every quantified claim on a CV is an invitation. These are asked in a behavioural tone but are really testing whether you understand your own results — and honesty about attribution scores far better than a confident overclaim.</p>
<ol>
<li>Fraud losses fell 22%. How much of that was your model, and how much was everything else the bank changed that year?<span class="ans">The honest answer is that you measured the system, not the model in isolation — the model changed, and so did rules, thresholds, and analyst capacity. Say what you would need to isolate it properly: a holdout population scored by the old system over the same period. Interviewers rate this answer highly precisely because most candidates claim the whole 22%.</span></li>
<li>How was that 22% measured, and over what period?<span class="ans"><em class="fill">[the measurement window and comparison basis]</em>. Be ready to say whether it was year on year, before-and-after deployment, or against a control — and to name the confound that comparison does not remove.</span></li>
<li>Investigation time dropped 40%. Who measured it, and against what baseline?<span class="ans"><em class="fill">[who measured it and the baseline]</em>. If it came from case handling times before and after the assistant launched, say so, and note that analysts also got faster with practice over the same period.</span></li>
<li>Detection accuracy up 15% with false positives below 2% — what was the trade-off you had to argue for?<span class="ans">That pair is the trade-off. Every point of recall costs precision, and in fraud a false positive is a declined transaction for a real customer. The 2% was a business constraint that fixed the operating threshold; accuracy improvements had to be found inside it.</span></li>
<li>What does "5M+ daily transactions" mean for how the system was actually built?<span class="ans">Roughly 60 per second average with peaks well above it, so scoring has to be streaming rather than batch, features must be precomputed and served from an online store, and every component needs to degrade rather than queue. The volume dictates the architecture more than the model does.</span></li>
<li>Sub-50 ms — is that median or p99, and does the difference matter here?<span class="ans">Say which, and say why it matters: a median under 50 ms with a long tail still fails the transactions that matter most, because slow requests correlate with unusual ones. <em class="fill">[which you measured]</em>. If it was median, say so — being caught rounding a percentile is worse than the weaker number.</span></li>
<li>3× inference throughput after quantisation — what accuracy did that cost?<span class="ans">Post-training quantisation to int8 typically costs a small amount of accuracy, and the number only means something measured on your own held-out set rather than a published benchmark. <em class="fill">[the accuracy delta you measured]</em>. If you did not measure it, say that too.</span></li>
<li>0.87 AUC-ROC on readmission. Explain what that number means to a non-technical stakeholder.<span class="ans">Take one patient who was readmitted and one who was not, at random: the model gives the readmitted one a higher risk score 87 times out of 100. It is a ranking quality, not an accuracy — the model is not right 87% of the time, and saying it that way is the most common mistake.</span></li>
<li>Feature generation time fell 60%. What was slow before, and what actually changed?<span class="ans"><em class="fill">[the actual bottleneck]</em>. Typical causes are wide shuffles on skewed keys, recomputing history every run instead of incrementally, and row-by-row work that could be vectorised. Naming which one it was is what separates a real answer from a rehearsed one.</span></li>
<li>Structured clinical coverage improved 35%. How did you verify that the extracted data was correct, not just present?<span class="ans">Coverage measures presence, not correctness, so the two have to be checked separately — a sample manually reviewed against the notes, and negation and family-history handling tested explicitly, since those produce confidently wrong extractions rather than missing ones.</span></li>
<li>Readmissions fell 18% in the pilot. How do you separate the model's effect from the care team's?<span class="ans">You cannot, fully. The model flags and the care team acts, so what was measured was the combined intervention. Say that plainly, then say what would isolate it: randomising at patient level with the same intervention available to both arms, which raises its own ethical question worth acknowledging.</span></li>
<li>Release cycles went from two weeks to three days. What was the real bottleneck?<span class="ans"><em class="fill">[the actual bottleneck]</em>. It is rarely the training run — usually manual approval steps, environment drift between staging and production, or the absence of automated validation that made every release a judgement call.</span></li>
<li>Which of your numbers are you least confident in, and why?<span class="ans">Answer it. Picking one and explaining the weakness in its measurement is a strong signal, and refusing to pick reads as either not having examined them or not being willing to say so.</span></li>
<li>Which of these results would you expect to hold up if the project were audited?<span class="ans">Split them: the ones with a clean measurement — AUC on a held-out set, latency percentiles, throughput — hold up. The ones combining a model with a human process — the 22%, the 40%, the 18% — are directional and depend on how attribution was defined.</span></li>
<li>Pick one number here and tell me what would have made it better.<span class="ans"><em class="fill">[your choice]</em>. A good instinct is to pick a measurement rather than a result: the number that would have been most improved by a cleaner baseline or a proper control group.</span></li>
</ol>
</div></details>

</div>

<div class="rnd" id="founder">
<h3>Talking with Founders</h3>
<p class="testing"><strong>Really testing:</strong> judgment, ownership, and whether you will function with ambiguity, thin support, and shifting priorities.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Use the product first and have an opinion about it.</strong> Founders notice within a minute whether you have. One specific, respectful observation — something confusing in onboarding, a segment they might be missing — is worth more than any amount of stated enthusiasm.</li>
<li><strong>Ask about the business, not only the technology.</strong> Who the customers are, how they make money, what breaks at ten times the current scale, what they would do with more engineers. Founders think in these terms constantly and it is rare for candidates to meet them there.</li>
<li><strong>Show bias to action.</strong> Stories where you saw a problem and picked it up without being assigned it. Startups hire people who close gaps, not people who wait for a ticket.</li>
<li><strong>Be candid about tradeoffs and willing to disagree.</strong> They are assessing whether you will push back usefully when they are about to make a mistake. Pure agreement is not the safe answer it looks like.</li>
<li><strong>Match their pace.</strong> Founder conversations are usually fast, direct, and low on ceremony. Long preambles do not land.</li>
<li><strong>Calibrate to the stage.</strong> Seed and Series C are different jobs with different risks. Asking about runway, headcount plans, and what the next raise depends on is normal and reads as seriousness, not distrust.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>Not having looked at the product.</li>
<li>Describing work as things that were assigned to you.</li>
<li>Leading with compensation, title, and perks before showing any interest in the problem.</li>
<li>Treating it as a formality after passing the technical rounds — founders veto late more often than people expect.</li>
</ul>
</div>

<div class="rnd" id="ceo">
<h3>CEO / Executive Round</h3>
<p class="testing"><strong>Really testing:</strong> rarely your technical skill. It is judgment, communication, and whether you raise the bar — sometimes a genuine assessment, sometimes them selling to you, often both at once.</p>

<h4>How to show up</h4>
<ul>
<li><strong>Translate everything into outcomes.</strong> Not the architecture — what changed for users, cost, or revenue because of it. The ability to move between technical and business framing <em>is</em> the thing being measured.</li>
<li><strong>Be brief.</strong> Executives think in headlines. Answer in 60–90 seconds and offer to go deeper. Rambling here does more damage than in any other round because it is read as an inability to prioritise.</li>
<li><strong>Have one informed view on the company's direction.</strong> A single well-grounded observation or question about strategy or market lands better than five generic ones.</li>
<li><strong>Ask what would make this hire clearly successful in twelve months.</strong> It is the most useful question available to you, and the answer is often more honest than the job description.</li>
<li><strong>Notice which mode you are in.</strong> If they have shifted to selling, engage genuinely — but they are still forming a view. The round rarely stops being an assessment just because it feels like a chat.</li>
<li><strong>Choose clarity over vocabulary.</strong> Explaining something complicated simply reads as seniority. Jargon reads as hiding.</li>
</ul>

<h4 class="bad">What sinks candidates</h4>
<ul class="bad">
<li>Technical detail delivered without translation.</li>
<li>No opinion about the company, the market, or anything at all.</li>
<li>Assuming it is a rubber stamp. Executives are frequently the ones who say no last.</li>
</ul>
</div>

<h2 class="ir-sec" id="always">Across every round</h2>

<p>Every interviewer, whatever their title, is answering three questions. Almost every piece of advice above is downstream of one of them:</p>

<ul>
<li><strong>Can you do the job?</strong> — competence, tested differently in each round.</li>
<li><strong>Will you do the job?</strong> — motivation, ownership, and whether you will still be here in eighteen months.</li>
<li><strong>Can we work with you?</strong> — how you handle being wrong, corrected, or stuck.</li>
</ul>

<p>Most rejections of technically-capable candidates come from the second and third. Things worth carrying into all of them:</p>

<ul>
<li><strong>Bring numbers.</strong> "Cut p99 latency from 2.4s to 700ms" is remembered. "Improved performance" is not.</li>
<li><strong>Ask questions in every round, and different ones each time.</strong> Repeating the same question to four interviewers tells them you have not thought about who you are talking to.</li>
<li><strong>Never bluff.</strong> Interviewers are far better at detecting it than candidates assume, and a single caught bluff retroactively devalues everything else you said.</li>
<li><strong>Assume everyone compares notes.</strong> They do, usually in a shared document, sometimes during the loop. Inconsistent stories surface immediately.</li>
<li><strong>Send a short thank-you when it is easy to.</strong> It rarely wins an offer and occasionally breaks a tie.</li>
</ul>

<div class="ir-note" markdown="1">
**The most useful question you can ask, in any round:** *"What did the last person in this role actually spend their week doing?"* Job descriptions are aspirational documents written by committee. The answer to that question is not, and very few candidates ask it.
</div>

<p>Related: <a href="/job-resources/">Tech Job Resources</a> covers what each role is responsible for, the skills that matter, and what to build to demonstrate them.</p>
