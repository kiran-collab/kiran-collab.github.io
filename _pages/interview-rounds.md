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
<li>Tell me about a time you were handed something poorly defined and had to decide what it actually was.<span class="ans">Use the repository consolidation. The brief was &quot;reduce duplication&quot;; what I found was that several repositories had each grown their own LLM extraction path, so no single team owned the interface. Lead with what you found rather than what you were told — the shift from the stated problem to the real one is the whole point of the question.</span></li>
<li>You consolidated several ML repositories into one pipeline. Who decided that needed doing — you or someone else?<span class="ans">Answer directly, then evidence it. If you spotted it, say what you saw that others had not: <em class="fill">[the specific duplication you noticed and how]</em>. If it was assigned, say so plainly and describe what you added to the scope. Claiming initiative you did not have collapses under one follow-up question.</span></li>
<li>How did you work out what the duplicate LLM workflows actually had in common?<span class="ans">By comparing inputs and outputs rather than reading code. The prompts and post-processing differed, but the contract was the same — document in, structured fields out. That is the level at which consolidation is possible; at the code level it looks like four unrelated systems.</span></li>
<li>What did you have to leave alone, and how did you decide?<span class="ans">Name a real exclusion and the rule behind it: <em class="fill">[what you deliberately left out]</em>. A good rule is blast radius, not elegance — anything with a different output contract or a consumer you could not migrate stayed where it was.</span></li>
<li>Whose code were you replacing, and how did that conversation go?<span class="ans"><em class="fill">[the teams involved]</em>. The approach that works is bringing the migration rather than the criticism: provide the compatibility layer, keep their tests green, and let them cut over on their own schedule. Say what you did to make it easy, not how you persuaded them.</span></li>
<li>How did you know when the consolidation was finished rather than merely working?<span class="ans">Finished means the old paths are deleted and no callers remain — not that the new path exists. A consolidation that leaves both running has added a system rather than removed one. Deleting is the milestone worth naming.</span></li>
<li>What would you do differently if you started that consolidation again tomorrow?<span class="ans">Migrate one consumer end to end before generalising. Designing the shared interface by reading all the existing code produces something that fits none of them; designing it against one real caller and then widening produces something that fits.</span></li>
<li>Describe a time you pushed back on a request because the underlying problem was different from the one stated.<span class="ans">The document validation work is the cleanest example. The ask was better classification; the actual failure was files arriving mis-categorised in the first place, so validating content at upload removed failures that no amount of model tuning would have.</span></li>
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
