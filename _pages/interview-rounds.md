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
