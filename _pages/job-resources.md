---
title: "Tech Job Resources"
permalink: /job-resources/
layout: single
author_profile: true
---

<style>
/* ---------- pipeline strip (same diagram on every card, different segment lit) ---------- */
.pl { width: 100%; max-width: 370px; height: auto; display: block; margin: 0 0 .2em; }
.pl .own   { fill: #1f6f8b; stroke: #17566c; stroke-width: 1.1; }
.pl .touch { fill: #dce9ef; stroke: #8fb4c3; stroke-width: 1.1; }
.pl .off   { fill: #f3f4f5; stroke: #dcdfe2; stroke-width: 1.1; }
.pl .lo { font: 600 7px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #fff;     text-anchor: middle; }
.pl .lt { font: 600 7px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #35606f; text-anchor: middle; }
.pl .lf { font: 500 7px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #a2a8ae; text-anchor: middle; }
.pl .cap { font: 500 6.5px -apple-system, sans-serif; fill: #8a9199; text-anchor: middle; }
.pl .band { fill: #f1eef7; stroke: #6b4a8b; stroke-width: 1.1; }
.pl .bandt { font: 600 7px -apple-system, sans-serif; fill: #543a6e; text-anchor: middle; }
.pl .band.eng  { fill: #eaf2e6; stroke: #4a6741; }
.pl .band.lead { fill: #e8f1f6; stroke: #1f6f8b; }
.pl .bandt.eng { fill: #33502c; }
.pl .bandt.lead { fill: #17566c; }
.pl .band.app  { fill: #f6f0e2; stroke: #8a6d1f; }
.pl .bandt.app { fill: #6b5316; }

/* ---------- role cards ---------- */
.role {
  border: 1px solid #e4e4e4; border-left: 4px solid #1f6f8b; border-radius: 5px;
  padding: 1.2em 1.4em; margin: 0 0 1.8em; background: #fcfcfc; scroll-margin-top: 24px;
}
.role > h3 { margin: 0 0 .1em; font-size: 1.2rem; color: #23303a; }
.role .qn { margin: 0 0 1em; font-style: italic; color: #5c666e; font-size: .95rem; }
.role h4 {
  margin: 1.1em 0 .35em; font-size: .78rem; text-transform: uppercase; letter-spacing: .07em;
  color: #7c848b; font-weight: 700;
}
.role ul { margin: 0 0 0 1.1em; padding: 0; }
.role li { margin-bottom: .3em; font-size: .95rem; line-height: 1.55; }
.role p { font-size: .95rem; line-height: 1.6; margin: 0 0 .4em; }
.proj { background: #f5f9fa; border: 1px solid #dfeaee; border-radius: 4px; padding: .8em 1em; margin-top: .5em; }
.proj p { margin: 0; }
.edge { color: #b83227; font-weight: 600; }
.chips span {
  display: inline-block; font-size: .76rem; padding: .18em .58em; margin: 0 .3em .35em 0;
  border-radius: 10px; background: #eef3f6; color: #3f5f6d; border: 1px solid #dde7ec;
}
.two-col { display: flex; gap: 1.6em; flex-wrap: wrap; }
.two-col > div { flex: 1 1 240px; min-width: 220px; }

/* ---------- comparison table ---------- */
table.cmp { width: 100%; border-collapse: collapse; font-size: .87rem; margin: 1.2em 0 2em; display: block; overflow-x: auto; }
table.cmp th, table.cmp td { border: 1px solid #e3e3e3; padding: .5em .65em; text-align: left; vertical-align: top; }
table.cmp th { background: #f4f7f8; font-weight: 600; white-space: nowrap; }
table.cmp td:first-child { font-weight: 600; white-space: nowrap; }

.jump { margin: 0 0 2em; line-height: 2.1; }
.jump a {
  display: inline-block; font-size: .84rem; padding: .25em .75em; margin: 0 .3em .3em 0;
  border: 1px solid #dde3e7; border-radius: 14px; text-decoration: none; color: #41606e; background: #f6f9fa;
}
.jump a:hover { background: #eaf1f4; border-color: #c3d2d9; text-decoration: none; }
.note {
  border: 1px solid #e0e6ea; border-left: 3px solid #8a6d1f; background: #fbf9f2;
  padding: .85em 1.1em; border-radius: 0 4px 4px 0; margin: 1.6em 0; font-size: .92rem; color: #55504a;
}
.grp {
  margin-top: 3em; padding: .5em 0 .35em; border-top: 3px solid #23303a; border-bottom: 1px solid #e4e4e4;
  font-size: 1.5rem; color: #23303a; scroll-margin-top: 24px;
}
.grp-lead { color: #5c666e; font-size: .97rem; margin: .7em 0 1.6em; }
table.tri { width: 100%; border-collapse: collapse; font-size: .86rem; margin: 0 0 2em; display: block; overflow-x: auto; }
table.tri th, table.tri td { border: 1px solid #e3e3e3; padding: .45em .6em; text-align: left; vertical-align: top; }
table.tri thead th { background: #f4f7f8; }
table.tri td:first-child, table.tri tbody th { background: #fafbfb; font-weight: 600; white-space: nowrap; text-align: left; }
.sec { margin-top: 2.4em; padding-top: .5em; border-top: 2px solid #eee; scroll-margin-top: 24px; }
</style>

<p>Eleven roles that sit close enough together to be confused constantly — in job ads, in interviews, and by candidates deciding which one they actually want. For each: what you own, the skills that matter, the soft skills nobody lists but everybody screens for, the tools, and a small project worth building.</p>

<p>The strip on every card shows the same pipeline with that role's territory lit up — <strong style="color:#1f6f8b">solid</strong> for what you own, <span style="color:#5c8b9d">pale</span> for what you touch. Overlaps between roles are real, not sloppy labelling.</p>

<p class="jump">
<a href="#glance">At a glance</a>
<a href="#grp-product">Product &amp; platform</a>
<a href="#ai-engineer">AI Engineer</a>
<a href="#lead-ai-engineer">Lead AI Engineer</a>
<a href="#ml-engineer">ML Engineer</a>
<a href="#data-scientist">Data Scientist</a>
<a href="#data-analyst">Data Analyst</a>
<a href="#data-engineer">Data Engineer</a>
<a href="#fde">Forward Deployed Engineer</a>
<a href="#tpm">Technical Program Manager</a>
<a href="#grp-research">Research</a>
<a href="#research-scientist">Research Scientist</a>
<a href="#applied-scientist">Applied Scientist</a>
<a href="#research-engineer">Research Engineer</a>
<a href="#one-system">One system, seven roles</a>
<a href="#choosing">Choosing</a>
</p>

<h2 class="sec" id="glance">At a glance</h2>

<table class="cmp">
<thead><tr><th>Role</th><th>Core question</th><th>Primary output</th><th>Interview weighted toward</th><th>Most confused with</th></tr></thead>
<tbody>
<tr><td>AI Engineer</td><td>Can I build a reliable feature on a model I didn't train?</td><td>A shipped LLM/VLM feature + its eval harness</td><td>Applied coding, LLM system design, evals</td><td>ML Engineer</td></tr>
<tr><td>Lead AI Engineer</td><td>Is the team building the right thing, in the right order?</td><td>Technical direction others can execute against</td><td>Ambiguous system design, leadership scenarios</td><td>Eng Manager / Staff Engineer</td></tr>
<tr><td>ML Engineer</td><td>Can I train, serve, and keep this model healthy?</td><td>A model in production with monitoring</td><td>ML system design, fundamentals, coding</td><td>AI Engineer / Data Scientist</td></tr>
<tr><td>Data Scientist</td><td>What is true here, and what should we do?</td><td>A decision, with quantified uncertainty</td><td>Stats, SQL, product case</td><td>Data Analyst / ML Engineer</td></tr>
<tr><td>Data Analyst</td><td>What happened, and what should people see?</td><td>Trusted metrics and dashboards</td><td>SQL (heaviest), business case</td><td>Data Scientist</td></tr>
<tr><td>Data Engineer</td><td>Is the data correct, fresh, and available?</td><td>Reliable pipelines and models of the data</td><td>SQL, modelling, pipeline design</td><td>Backend / Analytics Engineer</td></tr>
<tr><td>Forward Deployed Eng.</td><td>What does <em>this</em> customer need, working, this week?</td><td>A working deployment in someone else's environment</td><td>Practical coding, customer scenarios</td><td>Solutions Architect / SWE</td></tr>
<tr><td>Technical PM</td><td>What's blocking the ship, and who needs to know?</td><td>Shipped programs across teams</td><td>Execution cases, technical depth screen</td><td>Product Manager</td></tr>
<tr><th colspan="5" style="background:#f0edf5;color:#4b3a63;font-weight:700;font-size:.8rem;letter-spacing:.05em;text-transform:uppercase">Research roles</th></tr>
<tr><td>Research Scientist</td><td>What don't we know, and can I move it?</td><td>A method and a result others can build on</td><td>Research talk, your own papers, fundamentals</td><td>Research Engineer</td></tr>
<tr><td>Applied Scientist</td><td>Does a known method solve our problem?</td><td>A method adapted, shipped, and measured</td><td>Applied ML case, depth, coding</td><td>ML Engineer / Research Scientist</td></tr>
<tr><td>Research Engineer</td><td>Can I make this experiment run correctly, at scale, fast?</td><td>Training infrastructure and experiment velocity</td><td>Systems + ML coding, distributed training</td><td>ML Engineer</td></tr>
</tbody>
</table>

<div class="note">
<p><strong>Titles lie, scope doesn't.</strong> The same title spans wildly different jobs by company size — at a 20-person startup one person is often three of these; at a large company the boundaries are sharp and enforced. Read the responsibilities in the job description, not the title, and in interviews ask <em>"what did the last person in this role actually spend their week doing?"</em></p>
</div>

<h2 class="grp" id="grp-product">Product &amp; platform roles</h2>
<p class="grp-lead">Roles measured by something shipping. The clock is quarterly, the output is a working system, and success is someone using it.</p>

<div class="role" id="ai-engineer">

<svg class="pl" viewBox="0 0 300 56" aria-label="Pipeline with serve and product owned, train touched">
<rect class="off" x="3" y="18" width="40" height="22" rx="3"/><text class="lf" x="23" y="32">source</text>
<rect class="off" x="45" y="18" width="40" height="22" rx="3"/><text class="lf" x="65" y="32">ingest</text>
<rect class="off" x="87" y="18" width="40" height="22" rx="3"/><text class="lf" x="107" y="32">store</text>
<rect class="off" x="129" y="18" width="40" height="22" rx="3"/><text class="lf" x="149" y="32">explore</text>
<rect class="touch" x="171" y="18" width="40" height="22" rx="3"/><text class="lt" x="191" y="32">train</text>
<rect class="own" x="213" y="18" width="40" height="22" rx="3"/><text class="lo" x="233" y="32">serve</text>
<rect class="own" x="255" y="18" width="40" height="22" rx="3"/><text class="lo" x="275" y="32">product</text>
<text class="cap" x="150" y="52">owns the application layer on top of models</text>
</svg>

<h3>AI Engineer</h3>
<p class="qn">"Can I build a reliable product feature on top of a model I didn't train?"</p>

<h4>What you own</h4>
<ul>
<li>The application layer around a model: prompts, retrieval, tool calling, agent control flow, and output handling.</li>
<li>Quality as a measurable property — building the eval set and harness that says whether a change helped.</li>
<li>The three production numbers: latency, cost per request, and failure behaviour under load.</li>
<li>Guardrails: grounding, citation, abstention paths, and what happens when the model refuses or returns nonsense.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>Strong applied Python and comfort living inside someone else's API — streaming, retries, rate limits, token budgets.</li>
<li>RAG end to end: chunking strategy, embeddings, hybrid retrieval, reranking, and knowing that most "model problems" are retrieval problems.</li>
<li>Agent patterns — tool calling, planner/executor, reflection — and when a plain chain is the better answer.</li>
<li>Evaluation design: golden sets, LLM-as-judge and its failure modes, regression gates in CI.</li>
<li>Cost and latency engineering: caching, prompt-prefix stability, model routing by difficulty.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>Calibrated honesty about non-determinism.</strong> Stakeholders want "does it work?"; your job is to answer with a number and a confidence interval without hiding behind either.</li>
<li><strong>Knowing when it's good enough.</strong> This role has no natural stopping point — the discipline is deciding the quality bar with the business before you start tuning.</li>
<li><strong>Writing precise specifications.</strong> Most prompt failures are underspecified requirements wearing a costume.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>Python</span><span>OpenAI / Anthropic / Bedrock APIs</span><span>LangGraph</span><span>LlamaIndex</span><span>MCP</span><span>pgvector / Pinecone</span><span>Langfuse / LangSmith</span><span>Ragas</span><span>FastAPI</span><span>Docker</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>A documentation assistant with an evaluation harness.</strong> Index a public documentation set, serve answers with hybrid retrieval and a reranker, and cite sources. <span class="edge">The differentiator is not the chatbot — everyone has one.</span> It is the 50-question golden set with expected answers, the faithfulness and retrieval-precision scores, and a CI job that fails the build when a prompt change regresses quality. Publish the eval numbers before and after one deliberate improvement.</p>
</div>

</div>

<div class="role" id="lead-ai-engineer">

<svg class="pl" viewBox="0 0 300 64" aria-label="Pipeline with serve and product owned, explore train store touched, under a technical direction band">
<rect class="band lead" x="3" y="4" width="292" height="16" rx="3"/><text class="bandt lead" x="149" y="15">technical direction · mentoring · cross-team alignment</text>
<rect class="off" x="3" y="26" width="40" height="20" rx="3"/><text class="lf" x="23" y="39">source</text>
<rect class="off" x="45" y="26" width="40" height="20" rx="3"/><text class="lf" x="65" y="39">ingest</text>
<rect class="touch" x="87" y="26" width="40" height="20" rx="3"/><text class="lt" x="107" y="39">store</text>
<rect class="touch" x="129" y="26" width="40" height="20" rx="3"/><text class="lt" x="149" y="39">explore</text>
<rect class="touch" x="171" y="26" width="40" height="20" rx="3"/><text class="lt" x="191" y="39">train</text>
<rect class="own" x="213" y="26" width="40" height="20" rx="3"/><text class="lo" x="233" y="39">serve</text>
<rect class="own" x="255" y="26" width="40" height="20" rx="3"/><text class="lo" x="275" y="39">product</text>
<text class="cap" x="149" y="58">same territory as AI Engineer, plus the decisions about it</text>
</svg>

<h3>Lead AI Engineer</h3>
<p class="qn">"Is the team building the right thing, in the right order, well enough to keep?"</p>

<h4>What actually changes from AI Engineer</h4>
<p>This is a seniority tier rather than a different discipline, so the useful question is not what the skills are — you already have them — but what the job becomes. Four things change, and they are the whole difficulty:</p>
<ul>
<li><strong>You are measured on the team's output, not your own.</strong> A quarter where you wrote almost no code and three engineers shipped well is a good quarter. This takes most people a year to genuinely believe.</li>
<li><strong>The hardest problems stop being technical.</strong> They become "these two teams disagree and both are partly right", and no amount of engineering skill resolves them.</li>
<li><strong>You decide without enough information, publicly.</strong> Waiting for certainty is itself a decision, and usually the expensive one.</li>
<li><strong>Your leverage moves to review and design.</strong> A good design review changes the direction of six weeks of work; a good pull-request comment changes how someone builds for years.</li>
</ul>

<h4>What you own</h4>
<ul>
<li>Technical direction for the AI surface — including which problems should <em>not</em> get a model, which is the more valuable half of that judgment.</li>
<li>The expensive-to-reverse decisions: provider and model strategy, evaluation infrastructure, build versus buy, and where lock-in is acceptable.</li>
<li>The quality bar and its enforcement — what the eval gates are, and holding the line when a deadline argues otherwise.</li>
<li>Engineers growing: scoping work so it stretches people, reviewing in a way that teaches, and giving the hard feedback early.</li>
<li>Translation upward — converting leadership's expectations into something achievable, and the reverse, without either side feeling managed.</li>
</ul>

<h4>Technical skills</h4>
<p>Everything in the AI Engineer card remains assumed. What gets added:</p>
<ul>
<li>System design across a portfolio rather than a feature — shared eval infrastructure, shared retrieval, and cost modelled at the level of the whole product.</li>
<li>Enough breadth into data, infrastructure, and security to spot the risk that sits between teams and has no owner.</li>
<li>Reading the research and vendor landscape well enough to know what is about to get cheap, so you don't build what you could buy in six months.</li>
<li>Writing that carries a decision: design documents and decision records that let someone act without you in the room.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>Restraint.</strong> Not fixing it yourself when fixing it yourself would be faster. This is the single hardest transition, and interviewers probe it deliberately.</li>
<li><strong>Saying no upward with a smaller yes attached.</strong> "Not that, but here is what we can have by then" keeps credibility that a flat refusal spends.</li>
<li><strong>Feedback that changes behaviour without costing trust</strong> — specific, early, and about the work rather than the person.</li>
<li><strong>Making your reasoning legible.</strong> A decision nobody can reconstruct gets relitigated every quarter.</li>
<li><strong>Absorbing uncertainty on behalf of the team</strong> so they can keep building while you carry the ambiguity.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>Everything in the AI Engineer card</span><span>Design docs / ADRs</span><span>Eval platforms</span><span>Cost dashboards</span><span>Roadmapping</span><span>Incident review</span></p>

<h4>What to show instead of a project</h4>
<div class="proj">
<p><strong>Evidence of judgment, not another repository.</strong> By this level a portfolio project proves little — everyone assumes you can build. <span class="edge">Bring a decision record instead:</span> one architecture or build-versus-buy call you made, the options you rejected and why, what you were uncertain about, and what actually happened afterwards — including if it went badly. Pair it with evidence someone else built on your work: a tool your team adopted, an engineer who grew under your review, a direction change you argued for and won.</p>
</div>

<div class="note">
<p><strong>Check whether it is actually a management job.</strong> "Lead" usually means a technical track where you still build — but if the description mentions headcount, performance reviews, hiring plans, or budget ownership, it is an engineering manager role wearing an engineering title. That is a genuinely different career, not a harder version of this one. Ask directly in the interview: <em>"how much of this role is expected to be hands-on in six months?"</em> — and treat a vague answer as an answer.</p>
</div>

</div>

<div class="role" id="ml-engineer">

<svg class="pl" viewBox="0 0 300 56" aria-label="Pipeline with train and serve owned, store touched">
<rect class="off" x="3" y="18" width="40" height="22" rx="3"/><text class="lf" x="23" y="32">source</text>
<rect class="off" x="45" y="18" width="40" height="22" rx="3"/><text class="lf" x="65" y="32">ingest</text>
<rect class="touch" x="87" y="18" width="40" height="22" rx="3"/><text class="lt" x="107" y="32">store</text>
<rect class="touch" x="129" y="18" width="40" height="22" rx="3"/><text class="lt" x="149" y="32">explore</text>
<rect class="own" x="171" y="18" width="40" height="22" rx="3"/><text class="lo" x="191" y="32">train</text>
<rect class="own" x="213" y="18" width="40" height="22" rx="3"/><text class="lo" x="233" y="32">serve</text>
<rect class="off" x="255" y="18" width="40" height="22" rx="3"/><text class="lf" x="275" y="32">product</text>
<text class="cap" x="150" y="52">owns the model from training run to live endpoint</text>
</svg>

<h3>ML Engineer</h3>
<p class="qn">"Can I train this model, serve it, and keep it healthy at 3am?"</p>

<h4>What you own</h4>
<ul>
<li>Training pipelines that are reproducible — same data and config, same model, months later.</li>
<li>Serving: throughput, p99 latency, autoscaling, and the memory arithmetic that decides how many requests fit on a node.</li>
<li>Monitoring for drift and degradation, and the retraining trigger that responds to it.</li>
<li>The handoff boundary with research — turning a notebook that worked once into a system that works continuously.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>PyTorch and the training loop in depth: data loading, mixed precision, distributed strategies, checkpointing.</li>
<li>Optimisation for deployment — quantization, distillation, pruning, ONNX/TensorRT export, batching strategy.</li>
<li>Software engineering that survives review: testing, packaging, CI/CD, dependency and CUDA hygiene.</li>
<li>Infrastructure: containers, Kubernetes, GPU scheduling, cost awareness per training run and per 1K inferences.</li>
<li>Debugging skill specific to ML — telling a data bug from a training bug from a serving skew.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>Experimental discipline.</strong> The willingness to distrust a result that looks great, and to go find the leakage before shipping it.</li>
<li><strong>Ownership past launch.</strong> Models decay quietly. The role rewards people who instrument first and get paged rarely.</li>
<li><strong>Translating with research.</strong> Being the person who can read the paper <em>and</em> explain why its assumptions don't hold in your serving environment.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>PyTorch</span><span>MLflow / W&amp;B</span><span>Airflow / Kubeflow</span><span>Kubernetes</span><span>Docker</span><span>vLLM / Triton</span><span>SageMaker / Vertex AI</span><span>ONNX</span><span>Prometheus + Grafana</span><span>Spark</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>A closed training-to-retraining loop.</strong> Fine-tune a small model, serve it behind an autoscaling endpoint, and log every prediction. <span class="edge">The differentiator is the loop closing itself:</span> a drift detector on the input distribution, an alert, and an automated retraining job that promotes a new version only if it beats the incumbent on a held-out set. Report p99 latency and cost per 1K requests before and after one optimisation.</p>
</div>

</div>

<div class="role" id="data-scientist">

<svg class="pl" viewBox="0 0 300 56" aria-label="Pipeline with explore and train owned, store and product touched">
<rect class="off" x="3" y="18" width="40" height="22" rx="3"/><text class="lf" x="23" y="32">source</text>
<rect class="off" x="45" y="18" width="40" height="22" rx="3"/><text class="lf" x="65" y="32">ingest</text>
<rect class="touch" x="87" y="18" width="40" height="22" rx="3"/><text class="lt" x="107" y="32">store</text>
<rect class="own" x="129" y="18" width="40" height="22" rx="3"/><text class="lo" x="149" y="32">explore</text>
<rect class="own" x="171" y="18" width="40" height="22" rx="3"/><text class="lo" x="191" y="32">train</text>
<rect class="off" x="213" y="18" width="40" height="22" rx="3"/><text class="lf" x="233" y="32">serve</text>
<rect class="touch" x="255" y="18" width="40" height="22" rx="3"/><text class="lt" x="275" y="32">product</text>
<text class="cap" x="150" y="52">owns the question, the method, and the honesty of the answer</text>
</svg>

<h3>Data Scientist</h3>
<p class="qn">"What is actually true here, and what should we do about it?"</p>

<h4>What you own</h4>
<ul>
<li>Turning a vague business question into one that data can actually answer — or establishing that it can't.</li>
<li>Experiment design: hypotheses, power analysis, guardrail metrics, and the analysis plan written <em>before</em> the data is seen.</li>
<li>Inference and modelling where the goal is understanding, not just prediction — effect sizes, confounders, uncertainty.</li>
<li>The recommendation, delivered so a decision-maker can act on it and knows how confident to be.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>Statistics with real depth: hypothesis testing, confidence intervals, multiple comparisons, power — and the traps in each.</li>
<li>Experimentation: A/B design, sample sizing, novelty and network effects, when a test is invalid.</li>
<li>Causal inference beyond correlation — diff-in-diff, propensity scores, instrumental variables, and their assumptions.</li>
<li>Modelling with scikit-learn and friends; feature engineering; validation splits that respect time and grouping.</li>
<li>SQL good enough to get your own data without waiting on anyone.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>Saying "the data can't answer that."</strong> The hardest and most valued sentence in the role. Everything downstream depends on someone being willing to say it early.</li>
<li><strong>Communicating uncertainty without losing the room.</strong> A result nobody understands has the same business value as no result.</li>
<li><strong>Resistance to the desired answer.</strong> You will often be handed a conclusion and asked to support it. How you handle that is the whole job.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>Python (pandas, scikit-learn, statsmodels, SciPy)</span><span>SQL</span><span>R</span><span>Jupyter</span><span>matplotlib / seaborn</span><span>dbt</span><span>Tableau / Looker</span><span>Git</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>An analysis that was allowed to fail.</strong> Pick a public dataset, state a hypothesis and success criteria up front in the README, then run it. <span class="edge">The differentiator is pre-registration and an honest write-up</span> — including a null or inconvenient result, the assumptions you checked, and what would change your mind. Almost every portfolio has a model with 0.94 accuracy; almost none demonstrates intellectual honesty, which is the thing the role is actually hiring for.</p>
</div>

</div>

<div class="role" id="data-analyst">

<svg class="pl" viewBox="0 0 300 56" aria-label="Pipeline with explore owned and store and product touched">
<rect class="off" x="3" y="18" width="40" height="22" rx="3"/><text class="lf" x="23" y="32">source</text>
<rect class="off" x="45" y="18" width="40" height="22" rx="3"/><text class="lf" x="65" y="32">ingest</text>
<rect class="touch" x="87" y="18" width="40" height="22" rx="3"/><text class="lt" x="107" y="32">store</text>
<rect class="own" x="129" y="18" width="40" height="22" rx="3"/><text class="lo" x="149" y="32">explore</text>
<rect class="off" x="171" y="18" width="40" height="22" rx="3"/><text class="lf" x="191" y="32">train</text>
<rect class="off" x="213" y="18" width="40" height="22" rx="3"/><text class="lf" x="233" y="32">serve</text>
<rect class="own" x="255" y="18" width="40" height="22" rx="3"/><text class="lo" x="275" y="32">product</text>
<text class="cap" x="150" y="52">owns what the business believes about itself</text>
</svg>

<h3>Data Analyst</h3>
<p class="qn">"What happened, and what does the business actually need to see?"</p>

<h4>What you own</h4>
<ul>
<li>Metric definitions — including the edge cases, exclusions, and timezone decisions that everyone forgets and then argues about.</li>
<li>Dashboards and reporting that people trust enough to act on, and that don't quietly break.</li>
<li>Ad-hoc investigation: the "why did this drop on Tuesday" question, answered fast and correctly.</li>
<li>Enabling self-serve, so the same five questions stop arriving in your inbox.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>SQL, deeply — window functions, CTEs, careful joins, and understanding why a query is slow.</li>
<li>Data modelling for analytics: how facts and dimensions should be shaped so questions are cheap to answer.</li>
<li>Visualisation judgment — chart type, axis honesty, and cutting everything that doesn't inform a decision.</li>
<li>Enough statistics to avoid the common traps: Simpson's paradox, survivorship bias, reading noise as trend.</li>
<li>Spreadsheet fluency, unglamorous and genuinely load-bearing in most organisations.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>Finding the question behind the question.</strong> "Can you pull last month's signups?" usually means something else, and the good analyst asks what decision it feeds.</li>
<li><strong>Pushing back on vanity metrics</strong> — diplomatically, with an alternative in hand rather than just an objection.</li>
<li><strong>Narrative discipline.</strong> Leading with the finding, not the methodology, and knowing which three numbers matter out of the thirty you have.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>SQL</span><span>dbt</span><span>Tableau / Power BI / Looker</span><span>QuickSight</span><span>Excel / Sheets</span><span>Python (pandas, light)</span><span>Git</span><span>BigQuery / Snowflake</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>One metric, defined properly.</strong> Take a public dataset and pick a single business metric — retention, say. Write the definition document: what counts, what's excluded, which timezone, how late-arriving data is handled, and how a naive version of the same metric misleads. Then build the dashboard on top of it. <span class="edge">The definition document is the portfolio piece;</span> the dashboard is the easy half, and hiring managers know it.</p>
</div>

</div>

<div class="role" id="data-engineer">

<svg class="pl" viewBox="0 0 300 56" aria-label="Pipeline with ingest and store owned, source and explore touched">
<rect class="touch" x="3" y="18" width="40" height="22" rx="3"/><text class="lt" x="23" y="32">source</text>
<rect class="own" x="45" y="18" width="40" height="22" rx="3"/><text class="lo" x="65" y="32">ingest</text>
<rect class="own" x="87" y="18" width="40" height="22" rx="3"/><text class="lo" x="107" y="32">store</text>
<rect class="touch" x="129" y="18" width="40" height="22" rx="3"/><text class="lt" x="149" y="32">explore</text>
<rect class="off" x="171" y="18" width="40" height="22" rx="3"/><text class="lf" x="191" y="32">train</text>
<rect class="off" x="213" y="18" width="40" height="22" rx="3"/><text class="lf" x="233" y="32">serve</text>
<rect class="off" x="255" y="18" width="40" height="22" rx="3"/><text class="lf" x="275" y="32">product</text>
<text class="cap" x="150" y="52">owns the ground everyone else stands on</text>
</svg>

<h3>Data Engineer</h3>
<p class="qn">"Is the data correct, fresh, and where it needs to be — and how do I know?"</p>

<h4>What you own</h4>
<ul>
<li>Pipelines that run on schedule, recover from failure, and produce the same result when re-run.</li>
<li>The warehouse or lakehouse model: schemas, partitioning, and the contracts other teams build against.</li>
<li>Data quality as an enforced property — tests, quarantine, alerting — rather than something discovered downstream.</li>
<li>Cost, which in this role is a first-class design constraint rather than an afterthought.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>SQL and at least one of Python or Scala at production quality.</li>
<li>Distributed processing with Spark: partitioning, shuffles, skew, and why a job that worked at 1GB dies at 1TB.</li>
<li>Orchestration and the semantics that matter — idempotency, backfills, late-arriving data, exactly-once vs at-least-once.</li>
<li>Dimensional modelling, slowly changing dimensions, and schema evolution without breaking consumers.</li>
<li>Streaming fundamentals (Kafka), plus infrastructure-as-code and enough cloud to own your footprint.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>Productive paranoia.</strong> Assuming upstream will change the schema without telling you — and building so that it's caught rather than silently absorbed.</li>
<li><strong>Calm during incidents.</strong> When the pipeline fails at 6am and eight dashboards are wrong, the useful person triages instead of narrating.</li>
<li><strong>Negotiating contracts with upstream teams</strong> who have no incentive to care about your pipeline, which is a diplomatic problem more than a technical one.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>SQL</span><span>Python / Scala</span><span>Spark</span><span>Airflow / Dagster</span><span>dbt</span><span>Kafka</span><span>Snowflake / BigQuery / Redshift</span><span>Terraform</span><span>Docker</span><span>Great Expectations</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>A pipeline that survives bad input.</strong> Ingest a messy public feed on a schedule into a modelled warehouse table. <span class="edge">The differentiator is everything after the happy path:</span> data-quality tests that quarantine bad rows instead of failing the run, an alert that says which check failed and why, backfills that are safe to re-run twice, and a documented schema contract. Then deliberately feed it a malformed batch and show what happened.</p>
</div>

</div>

<div class="role" id="fde">

<svg class="pl" viewBox="0 0 300 56" aria-label="Pipeline with source and product owned, spanning into the customer environment">
<rect class="own" x="3" y="18" width="40" height="22" rx="3"/><text class="lo" x="23" y="32">source</text>
<rect class="touch" x="45" y="18" width="40" height="22" rx="3"/><text class="lt" x="65" y="32">ingest</text>
<rect class="touch" x="87" y="18" width="40" height="22" rx="3"/><text class="lt" x="107" y="32">store</text>
<rect class="off" x="129" y="18" width="40" height="22" rx="3"/><text class="lf" x="149" y="32">explore</text>
<rect class="off" x="171" y="18" width="40" height="22" rx="3"/><text class="lf" x="191" y="32">train</text>
<rect class="touch" x="213" y="18" width="40" height="22" rx="3"/><text class="lt" x="233" y="32">serve</text>
<rect class="own" x="255" y="18" width="40" height="22" rx="3"/><text class="lo" x="275" y="32">product</text>
<text class="cap" x="150" y="52">owns the last mile — inside the customer's environment</text>
</svg>

<h3>Forward Deployed Engineer</h3>
<p class="qn">"What does <em>this</em> customer actually need, and can I make it work in their environment this week?"</p>

<h4>What you own</h4>
<ul>
<li>Getting the product working against real customer data, in a stack you did not choose and cannot fully control.</li>
<li>Rapid prototyping in front of people — building the thing that proves value before the contract renewal.</li>
<li>Integration reality: their auth, their formats, their network restrictions, their compliance review.</li>
<li>The feedback loop home — being the person who tells product why the beautiful abstraction doesn't survive contact with customers.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>Broad rather than deep: enough backend, data, and infrastructure to be dangerous across an unfamiliar stack.</li>
<li>Integration work — APIs, auth flows (OAuth, SAML), file formats, and legacy systems with no documentation.</li>
<li>Debugging in environments you can't reproduce, often with limited logs and no ability to install what you'd like.</li>
<li>Data wrangling against genuinely messy real-world inputs, not a curated dataset.</li>
<li>Security and compliance literacy — enough to answer their review without stalling the deployment.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<p>For this role the soft skills <em>are</em> the qualification. Everything above is table stakes.</p>
<ul>
<li><strong>Reading the room mid-demo.</strong> The stated blocker is often not the real one; the real one is usually political and unstated.</li>
<li><strong>Expectation management without over-promising.</strong> Saying "not this quarter" to a customer's face, keeping the relationship, and being believed next time.</li>
<li><strong>Composure when it breaks live.</strong> It will break live. What you do in the next ninety seconds is the job interview and the job.</li>
<li><strong>Bilingualism.</strong> Translating customer frustration into an actionable engineering ticket, and engineering constraints into something a customer accepts as reasonable.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>Python</span><span>SQL</span><span>Docker</span><span>Postman / curl</span><span>Cloud consoles (AWS / GCP / Azure)</span><span>Kubernetes (enough)</span><span>Git</span><span>Observability tooling</span><span>Whatever the customer runs</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>A deployment under deliberately awkward constraints.</strong> Take an open-source tool and stand it up in an environment designed to be inconvenient — no outbound internet, an unusual auth scheme, data arriving in a legacy format. <span class="edge">The differentiator is the runbook:</span> a document another engineer could follow to repeat the deployment without you, including the three things that went wrong and how you diagnosed them. This role is hired on evidence that you operate well in other people's mess.</p>
</div>

</div>

<div class="role" id="tpm">

<svg class="pl" viewBox="0 0 300 64" aria-label="Coordination band spanning the whole pipeline">
<rect class="band" x="3" y="4" width="292" height="16" rx="3"/><text class="bandt" x="149" y="15">dependencies · risk · schedule · comms</text>
<rect class="touch" x="3" y="26" width="40" height="20" rx="3"/><text class="lt" x="23" y="39">source</text>
<rect class="touch" x="45" y="26" width="40" height="20" rx="3"/><text class="lt" x="65" y="39">ingest</text>
<rect class="touch" x="87" y="26" width="40" height="20" rx="3"/><text class="lt" x="107" y="39">store</text>
<rect class="touch" x="129" y="26" width="40" height="20" rx="3"/><text class="lt" x="149" y="39">explore</text>
<rect class="touch" x="171" y="26" width="40" height="20" rx="3"/><text class="lt" x="191" y="39">train</text>
<rect class="touch" x="213" y="26" width="40" height="20" rx="3"/><text class="lt" x="233" y="39">serve</text>
<rect class="touch" x="255" y="26" width="40" height="20" rx="3"/><text class="lt" x="275" y="39">product</text>
<text class="cap" x="149" y="58">owns none of it, accountable for all of it shipping together</text>
</svg>

<h3>Technical Program Manager</h3>
<p class="qn">"What is blocking this from shipping, and who needs to know right now?"</p>

<h4>What you own</h4>
<ul>
<li>Execution across teams that don't report to you — sequencing, dependencies, and the critical path.</li>
<li>Risk: naming it early, quantifying it, and driving mitigation before it becomes an incident.</li>
<li>The communication layer — status that is honest and short, escalations that are timed rather than panicked.</li>
<li>Scope discipline, which mostly means being the person who asks what gets cut when the date won't move.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>Enough depth to evaluate an estimate and notice when "two weeks" is optimistic — you don't write the code, you have to understand it.</li>
<li>Systems thinking: seeing that the model can't launch until the backfill lands, three sprints before anyone else does.</li>
<li>Planning craft — milestones that mean something, dependency mapping, and buffers placed where risk actually is.</li>
<li>Metrics and instrumentation for the program itself: are we ahead, behind, or guessing?</li>
<li>Writing. The single highest-leverage TPM skill: a document that makes a hard tradeoff legible to twelve people.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>Influence without authority.</strong> The entire role. You get outcomes by being useful, prepared, and trusted — not by escalating.</li>
<li><strong>Escalation judgment.</strong> Too early and you burn credibility; too late and you own the failure. Calibrating this is what separates senior from junior.</li>
<li><strong>Absorbing chaos.</strong> Taking ambiguity in and emitting clarity, so engineers can keep their context intact.</li>
<li><strong>Saying the uncomfortable thing early</strong>, in the room, when the date is clearly not going to hold.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>Jira / Linear</span><span>Confluence / Notion</span><span>Slack</span><span>Sheets</span><span>SQL (for your own metrics)</span><span>Dashboards (Looker / Tableau)</span><span>Miro</span><span>Incident tooling</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>Run something real and keep the artifacts.</strong> This role can't be demonstrated with a repository, so coordinate an actual multi-party effort — an open-source release, a migration, a hackathon, a student org's launch. <span class="edge">The artifacts are the portfolio:</span> a one-page program brief, a risk register with what you did about each item, the status update format you used, and a retrospective naming what you'd do differently. Bring those to the interview; almost no candidate does.</p>
</div>

</div>


<h2 class="grp" id="grp-research">Research roles</h2>
<p class="grp-lead">Roles measured by what becomes known or possible. The clock runs in years rather than quarters, the output is a method or a capability, and the thing you build may be handed to a product team long after you finish. Three roles sit here, and the confusion between them is the sharpest on this page.</p>
<table class="tri">
<thead><tr><th></th><th>Research Scientist</th><th>Applied Scientist</th><th>Research Engineer</th></tr></thead>
<tbody>
<tr><th>Asks</th><td>What question is worth answering?</td><td>Does a known method solve <em>our</em> problem?</td><td>Can we run the experiment at all?</td></tr>
<tr><th>Output</th><td>Knowledge others build on</td><td>A working solution that moves a metric</td><td>Capability and experiment velocity</td></tr>
<tr><th>Judged by</th><td>Novelty and rigour</td><td>Business impact</td><td>Throughput and reliability</td></tr>
<tr><th>Publishing</th><td>The point</td><td>A welcome side effect</td><td>Occasional, usually systems work</td></tr>
<tr><th>Usual bar</th><td>PhD or equivalent record</td><td>MS or PhD</td><td>Strong engineering; no doctorate needed</td></tr>
</tbody>
</table>

<div class="role" id="research-scientist">

<svg class="pl" viewBox="0 0 300 64" aria-label="Pipeline with explore and train owned, under a hypothesis and publication band">
<rect class="band" x="3" y="4" width="292" height="16" rx="3"/><text class="bandt" x="149" y="15">problem selection · method · evidence · publication</text>
<rect class="off" x="3" y="26" width="40" height="20" rx="3"/><text class="lf" x="23" y="39">source</text>
<rect class="off" x="45" y="26" width="40" height="20" rx="3"/><text class="lf" x="65" y="39">ingest</text>
<rect class="off" x="87" y="26" width="40" height="20" rx="3"/><text class="lf" x="107" y="39">store</text>
<rect class="own" x="129" y="26" width="40" height="20" rx="3"/><text class="lo" x="149" y="39">explore</text>
<rect class="own" x="171" y="26" width="40" height="20" rx="3"/><text class="lo" x="191" y="39">train</text>
<rect class="off" x="213" y="26" width="40" height="20" rx="3"/><text class="lf" x="233" y="39">serve</text>
<rect class="off" x="255" y="26" width="40" height="20" rx="3"/><text class="lf" x="275" y="39">product</text>
<text class="cap" x="149" y="58">upstream of the product — the method others will ship later</text>
</svg>

<h3>Research Scientist</h3>
<p class="qn">"What don't we know yet, and can I produce evidence that moves it?"</p>

<h4>What you own</h4>
<ul>
<li>Problem selection — deciding what is worth working on, which is the highest-variance decision in the role.</li>
<li>The method: a novel approach, or a novel understanding of why an existing one behaves as it does.</li>
<li>Experimental design that can actually support the claim — baselines, ablations, and the comparison a skeptic would demand.</li>
<li>The claim itself, and its limits. Overclaiming is the cardinal sin here in a way it isn't elsewhere.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>Mathematical depth — linear algebra, probability, and optimisation held well enough to reason with, not just recite.</li>
<li>Fluent literature reading: finding the three papers that matter, reproducing a result, and spotting the assumption doing the real work.</li>
<li>Rigorous evaluation — ablations that isolate one variable, baselines tuned as carefully as your method, seeds and variance reported.</li>
<li>Enough engineering to run your own experiments without waiting, even where a Research Engineer owns the platform.</li>
<li>Writing. A result nobody can follow does not exist, and papers are the medium of the job.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>Tolerance for long stretches of failure.</strong> Most ideas do not work. The role selects for people who stay productive through months without a positive result.</li>
<li><strong>Taste in problems</strong> — the least teachable and most valued trait. Interviews probe it directly with "what would you work on next, and why that?"</li>
<li><strong>Taking hard critique without defending.</strong> Peer review, reading groups, and your own team exist to attack the claim; the useful reflex is curiosity, not protection.</li>
<li><strong>Honesty about negative results,</strong> including when the honest report undercuts your own narrative.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>PyTorch / JAX</span><span>Weights &amp; Biases</span><span>SLURM</span><span>NumPy / SciPy</span><span>LaTeX / Overleaf</span><span>arXiv</span><span>HuggingFace</span><span>matplotlib</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>Reproduce a paper, then go one step past it.</strong> Pick a recent paper with released code, reproduce the headline result, and report honestly where your numbers differ and why. <span class="edge">The differentiator is the step past:</span> one ablation the authors didn't run, with a hypothesis stated up front. Without a publication record this is the most credible evidence available that you can do the work — and reproduction gaps are a real, publishable contribution in their own right.</p>
</div>

<div class="note">
<p><strong>On the PhD question.</strong> Research Scientist postings usually expect a PhD or an equivalent publication record, because the role is judged on original contribution. Research Engineer generally does not — it is judged on systems ability, and it is often the higher-leverage way into a lab for a strong engineer. If you want to work on frontier models without a doctorate, RE is usually the open door, and the two roles sit side by side on the same problems.</p>
</div>

</div>

<div class="role" id="applied-scientist">

<svg class="pl" viewBox="0 0 300 64" aria-label="Pipeline with explore and train owned, store and serve touched, under a method adaptation band">
<rect class="band app" x="3" y="4" width="292" height="16" rx="3"/><text class="bandt app" x="149" y="15">method selection · adaptation · offline and online evaluation</text>
<rect class="off" x="3" y="26" width="40" height="20" rx="3"/><text class="lf" x="23" y="39">source</text>
<rect class="off" x="45" y="26" width="40" height="20" rx="3"/><text class="lf" x="65" y="39">ingest</text>
<rect class="touch" x="87" y="26" width="40" height="20" rx="3"/><text class="lt" x="107" y="39">store</text>
<rect class="own" x="129" y="26" width="40" height="20" rx="3"/><text class="lo" x="149" y="39">explore</text>
<rect class="own" x="171" y="26" width="40" height="20" rx="3"/><text class="lo" x="191" y="39">train</text>
<rect class="touch" x="213" y="26" width="40" height="20" rx="3"/><text class="lt" x="233" y="39">serve</text>
<rect class="off" x="255" y="26" width="40" height="20" rx="3"/><text class="lf" x="275" y="39">product</text>
<text class="cap" x="149" y="58">research method, business problem, real constraints</text>
</svg>

<h3>Applied Scientist</h3>
<p class="qn">"Can I take a research method and make it actually work on our problem, at our scale?"</p>

<h4>What you own</h4>
<ul>
<li>Framing a business problem as a tractable modelling problem — the step where most of the value is won or lost.</li>
<li>Method selection: reading what exists, choosing what fits the constraints, and adapting it rather than inventing from scratch.</li>
<li>Evidence on both clocks — offline evaluation that predicts online behaviour, then the online test that confirms it.</li>
<li>Getting it into production, either shipping it yourself or handing it over cleanly enough that it survives the handoff.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>ML fundamentals with genuine depth, plus the statistics to know whether a lift is real.</li>
<li>Literature fluency — finding the method that already solves a version of your problem, and spotting the assumption that won't hold on your data.</li>
<li>Real-data engineering: messy inputs, label noise, class imbalance, leakage, and distribution shift between training and serving.</li>
<li>Experimental design across both offline metrics and online A/B tests, including when the two disagree.</li>
<li>Enough production engineering to ship, or to write the handoff that doesn't get bounced back.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>Knowing when the simple method wins.</strong> The role's characteristic failure is spending six weeks on a method that beats logistic regression by half a point.</li>
<li><strong>Translating in both directions</strong> — turning a product manager's ask into a modelling problem, and a modelling result into something a business decision can rest on.</li>
<li><strong>Stopping at good enough.</strong> Research instincts pull toward the interesting question; the job rewards the one that moves the metric.</li>
<li><strong>Scoping honestly under pressure,</strong> including saying that the data available cannot support the accuracy someone has already promised.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>Python</span><span>PyTorch</span><span>scikit-learn</span><span>SQL</span><span>Spark</span><span>SageMaker / Vertex AI</span><span>Weights &amp; Biases</span><span>A/B testing platforms</span><span>Docker</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>Take a published method somewhere it wasn't designed to go.</strong> Apply a recent paper's approach to a domain it didn't target, and compare it against a baseline you tuned as carefully as the method. <span class="edge">The differentiator is the honest comparison:</span> report the regime where the sophisticated method wins, the regime where the baseline is just as good, and the cost difference between them. That analysis <em>is</em> the applied-science skill — everything else is implementation.</p>
</div>

<div class="note">
<p><strong>The title is company-specific.</strong> "Applied Scientist" is used heavily at Amazon and Microsoft; at other companies the identical job is advertised as ML Engineer, Research Engineer, or Data Scientist. Judge by the responsibilities — if it says publish and invent, it leans Research Scientist; if it says ship and measure, it leans ML Engineer; Applied Scientist genuinely sits between the two and is expected to do both.</p>
</div>

</div>

<div class="role" id="research-engineer">

<svg class="pl" viewBox="0 0 300 64" aria-label="Pipeline with train owned, store serve touched, under an experiment-infrastructure band">
<rect class="band eng" x="3" y="4" width="292" height="16" rx="3"/><text class="bandt eng" x="149" y="15">experiment infrastructure · scale · reproducibility</text>
<rect class="off" x="3" y="26" width="40" height="20" rx="3"/><text class="lf" x="23" y="39">source</text>
<rect class="off" x="45" y="26" width="40" height="20" rx="3"/><text class="lf" x="65" y="39">ingest</text>
<rect class="touch" x="87" y="26" width="40" height="20" rx="3"/><text class="lt" x="107" y="39">store</text>
<rect class="touch" x="129" y="26" width="40" height="20" rx="3"/><text class="lt" x="149" y="39">explore</text>
<rect class="own" x="171" y="26" width="40" height="20" rx="3"/><text class="lo" x="191" y="39">train</text>
<rect class="touch" x="213" y="26" width="40" height="20" rx="3"/><text class="lt" x="233" y="39">serve</text>
<rect class="off" x="255" y="26" width="40" height="20" rx="3"/><text class="lf" x="275" y="39">product</text>
<text class="cap" x="149" y="58">owns how fast the lab can try the next idea</text>
</svg>

<h3>Research Engineer</h3>
<p class="qn">"Can I make this experiment run — correctly, at scale, and fast enough to iterate?"</p>

<h4>What you own</h4>
<ul>
<li>The training stack: distributed runs, data loading at scale, checkpointing, and recovery when a node dies at hour thirty.</li>
<li>Experiment velocity — the turnaround time between a researcher's idea and a result, which is the lab's real throughput metric.</li>
<li>Reproducibility: same config, same seed, same result, months later and on different hardware.</li>
<li>Performance: throughput per GPU, memory efficiency, and finding the bottleneck that makes a run 40% slower than it should be.</li>
</ul>

<h4>Technical skills</h4>
<ul>
<li>Distributed training in depth — data, tensor, pipeline, and fully-sharded parallelism, and knowing which failure each one causes.</li>
<li>Profiling and performance reasoning: reading a trace, spotting a stalled data loader, distinguishing memory-bound from compute-bound.</li>
<li>Numerical debugging — loss spikes, NaNs, divergence at scale, and precision issues that only appear past a certain size.</li>
<li>Genuinely strong software engineering. Research code rots fast; the RE is the reason it doesn't.</li>
<li>Cluster reality: schedulers, GPU topology, interconnect, and the cost of a run before it starts.</li>
</ul>

<h4>Soft skills that actually get screened</h4>
<ul>
<li><strong>A service mindset.</strong> Your users are researchers, and your output is their productivity. Satisfaction has to come from someone else's result.</li>
<li><strong>Pushing back on an expensive run</strong> that has no hypothesis behind it — diplomatically, since the person proposing it is usually senior to you.</li>
<li><strong>Tolerating specification that arrives half-formed.</strong> "Try it with a different loss" is a complete request in this world, and you make it concrete.</li>
</ul>

<h4>Tools</h4>
<p class="chips"><span>PyTorch</span><span>JAX</span><span>FSDP / DeepSpeed</span><span>SLURM</span><span>Kubernetes</span><span>NCCL</span><span>Nsight / torch profiler</span><span>Weights &amp; Biases</span><span>CUDA (reading it)</span><span>Docker</span></p>

<h4>Small project worth building</h4>
<div class="proj">
<p><strong>Make one training script fast and reproducible.</strong> Take a single-GPU training script and scale it to multi-GPU with correct gradient synchronisation, deterministic seeding, and resumable checkpoints. <span class="edge">The differentiator is the profile:</span> publish tokens/second per GPU before and after, name the bottleneck you found, and show the fix. A number with a trace behind it is worth more than any amount of framework familiarity.</p>
</div>

</div>

<h2 class="sec" id="one-system">One system, seven roles</h2>

<p>Role boundaries make far more sense against a single concrete project than in the abstract. Take one: <strong>a support-ticket triage assistant</strong> that routes incoming tickets and drafts a suggested first reply.</p>

<figure style="margin:1.6em auto;max-width:520px">
<svg viewBox="0 0 380 210" style="width:100%;height:auto;display:block" aria-label="Seven roles collaborating on one system">
<defs><marker id="jr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6b7480"/></marker></defs>
<rect x="4" y="8" width="372" height="20" rx="3" fill="#f1eef7" stroke="#6b4a8b" stroke-width="1.1"/>
<text x="190" y="21" font="600 8px sans-serif" font-size="8" font-weight="600" fill="#543a6e" text-anchor="middle">TPM — sequences the work, owns the launch date and the dependency nobody noticed</text>

<rect x="4" y="40" width="86" height="34" rx="3" fill="#eaf2e6" stroke="#4a6741" stroke-width="1.2"/>
<text x="47" y="54" font-size="8" font-weight="600" fill="#2f3640" text-anchor="middle">Data Engineer</text>
<text x="47" y="66" font-size="7" fill="#5a626c" text-anchor="middle">tickets → warehouse</text>

<rect x="100" y="40" width="86" height="34" rx="3" fill="#e8f1f6" stroke="#1f6f8b" stroke-width="1.2"/>
<text x="143" y="54" font-size="8" font-weight="600" fill="#2f3640" text-anchor="middle">Data Analyst</text>
<text x="143" y="66" font-size="7" fill="#5a626c" text-anchor="middle">defines "deflection"</text>

<rect x="196" y="40" width="86" height="34" rx="3" fill="#f1eef7" stroke="#6b4a8b" stroke-width="1.2"/>
<text x="239" y="54" font-size="8" font-weight="600" fill="#2f3640" text-anchor="middle">Data Scientist</text>
<text x="239" y="66" font-size="7" fill="#5a626c" text-anchor="middle">is it worth doing?</text>

<rect x="292" y="40" width="84" height="34" rx="3" fill="#fbeae7" stroke="#b83227" stroke-width="1.2"/>
<text x="334" y="54" font-size="8" font-weight="600" fill="#2f3640" text-anchor="middle">ML Engineer</text>
<text x="334" y="66" font-size="7" fill="#5a626c" text-anchor="middle">routing model live</text>

<path d="M90 57 H98" stroke="#6b7480" stroke-width="1.3" fill="none" marker-end="url(#jr)"/>
<path d="M186 57 H194" stroke="#6b7480" stroke-width="1.3" fill="none" marker-end="url(#jr)"/>
<path d="M282 57 H290" stroke="#6b7480" stroke-width="1.3" fill="none" marker-end="url(#jr)"/>

<path d="M334 76 V96" stroke="#6b7480" stroke-width="1.3" fill="none" marker-end="url(#jr)"/>
<rect x="248" y="98" width="128" height="34" rx="3" fill="#e8f1f6" stroke="#1f6f8b" stroke-width="1.2"/>
<text x="312" y="112" font-size="8" font-weight="600" fill="#2f3640" text-anchor="middle">AI Engineer</text>
<text x="312" y="124" font-size="7" fill="#5a626c" text-anchor="middle">retrieval + draft reply + evals</text>

<path d="M246 115 H200" stroke="#6b7480" stroke-width="1.3" fill="none" marker-end="url(#jr)"/>
<rect x="72" y="98" width="126" height="34" rx="3" fill="#eaf2e6" stroke="#4a6741" stroke-width="1.2"/>
<text x="135" y="112" font-size="8" font-weight="600" fill="#2f3640" text-anchor="middle">Forward Deployed Eng.</text>
<text x="135" y="124" font-size="7" fill="#5a626c" text-anchor="middle">pilots it at the big customer</text>

<path d="M135 134 V152" stroke="#b83227" stroke-width="1.3" fill="none" stroke-dasharray="4 3" marker-end="url(#jr)"/>
<rect x="40" y="154" width="300" height="24" rx="3" fill="#fbeae7" stroke="#b83227" stroke-width="1.1"/>
<text x="190" y="169" font-size="7.5" fill="#7d2b23" text-anchor="middle">"their taxonomy has 60 categories, not 8" — feedback that reshapes the product</text>
<text x="190" y="196" font-size="7" fill="#8a9199" text-anchor="middle">the loop back from the field is where most of the real requirements come from</text>
</svg>
</figure>

<ul>
<li><strong>Data Engineer</strong> lands tickets and historical resolutions in the warehouse on a freshness SLA, with quality tests — nothing downstream is possible until this is trustworthy.</li>
<li><strong>Data Analyst</strong> defines what "deflection rate" and "first response time" actually mean, and builds the baseline everyone will later argue about.</li>
<li><strong>Data Scientist</strong> asks whether automation is worth it at all, designs the offline evaluation and the A/B test, and quantifies the expected lift with an interval rather than a point.</li>
<li><strong>ML Engineer</strong> trains and serves the routing classifier, owns its latency and drift, and wires up retraining.</li>
<li><strong>AI Engineer</strong> builds the LLM layer — retrieval over past resolutions, draft-reply generation, guardrails, the eval harness, and the cost per ticket.</li>
<li><strong>Forward Deployed Engineer</strong> pilots it inside the largest customer's environment, discovers their taxonomy has sixty categories rather than eight, and brings that back before it becomes a churn event.</li>
<li><strong>TPM</strong> sequences all of it, spots that the model can't ship until the backfill completes, and runs the launch review.</li>
</ul>

<p><strong>Notice who isn't on this project: the two research roles.</strong> That absence is the most useful thing this scenario shows about them. The Research Scientist and Research Engineer produced the routing architecture and the training recipe that the ML Engineer is fine-tuning — one to three years earlier, on a different clock, measured by a different output. Research is upstream of the product, not a stage within it.</p>

<p>The practical consequence for a job search: if what you enjoy is watching something you built get used next quarter, research will feel slow and disconnected. If what you enjoy is the open question itself and you can wait years to see it land, product roles will feel like they never let you go deep enough. Both are honourable answers, and picking the wrong one is the most common reason people are unhappy a year into an otherwise good job.</p>

<div class="note">
<p><strong>Where the overlaps genuinely are.</strong> AI Engineer and ML Engineer overlap on serving. Data Scientist and Data Analyst overlap on analysis — the honest distinction is inference versus reporting, not seniority. Data Engineer and Analytics Engineer overlap almost entirely at some companies. A Lead AI Engineer would own the technical direction across the AI parts of this project without owning a stage of it. Research Engineer and Research Scientist overlap on the experiment itself — the split is who chooses the question versus who makes it runnable, and at smaller labs one person does both. If a job description spans two of these, it usually means the team is small and you'll do both, which is excellent for learning and worth asking about directly.</p>
</div>

<h2 class="sec" id="choosing">Choosing between them</h2>

<p>A rough decision guide, phrased as what you'd rather be doing on a Wednesday afternoon:</p>

<ul>
<li>Chasing down <em>why the number is wrong</em> → Data Analyst or Data Engineer.</li>
<li>Arguing about whether the effect is real → Data Scientist.</li>
<li>Making something run faster and not fall over → ML Engineer.</li>
<li>Getting a model to behave in a product → AI Engineer.</li>
<li>Sitting with a customer while their system misbehaves → Forward Deployed Engineer.</li>
<li>Finding out that two teams have been assuming different launch dates → TPM.</li>
<li>Wanting the call to be yours, and being at peace with writing less code → Lead AI Engineer.</li>
<li>Making a 400-GPU run finish before the weekend → Research Engineer.</li>
<li>Being genuinely unsure whether the idea will work at all → Research Scientist.</li>
<li>Wanting research depth but needing to see it used → Applied Scientist.</li>
</ul>

<h4>Things that hold across all eleven</h4>
<ul>
<li><strong>Ship something end to end and write about it.</strong> One finished, documented, honestly-evaluated project beats five tutorial repositories — in every one of these roles.</li>
<li><strong>Numbers on your resume, not adjectives.</strong> "Cut p99 latency from 2.4s to 700ms" carries; "optimised system performance" does not.</li>
<li><strong>Have the failure story ready.</strong> Every interview loop asks. The strong answer names your own mistake, the diagnosis, and what you changed afterwards.</li>
<li><strong>SQL is the common denominator.</strong> Six of the eleven use it regularly (the research roles least of all); being genuinely good at it is unusually high leverage per hour invested.</li>
<li><strong>Read the responsibilities, then ask what the last person did all week.</strong> It is the single most informative question available to you in an interview, and few candidates ask it.</li>
</ul>
