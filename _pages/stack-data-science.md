---
title: "Data Science Stack"
permalink: /stacks/data-science/
layout: single
author_profile: true
---

{% include stack-style.html %}

<style>
table.cmp {
  width: 100%; border-collapse: collapse; font-size: .85rem; margin: .4em 0 1em;
  display: block; overflow-x: auto;
}
table.cmp th, table.cmp td { border: 1px solid #e3e7ea; padding: .45em .65em; text-align: left; vertical-align: top; }
table.cmp thead th { background: #f4f7f8; font-size: .79rem; }
table.cmp th.pg { background: #eef5f8; color: #1f6f8b; }
table.cmp th.my { background: #f8f3e6; color: #7a601b; }
table.cmp td:first-child { font-weight: 600; white-space: nowrap; background: #fafbfb; width: 20%; }
table.cmp td .yes { color: #3f5a37; font-weight: 600; }
table.cmp td .no  { color: #a4534a; font-weight: 600; }
.cx-body .verdict {
  margin-top: .8em; font-size: .9rem; color: #3f5a37; background: #f1f7ee;
  border-left: 3px solid #4a6741; padding: .55em .8em; border-radius: 0 3px 3px 0;
}
.cx-body .subh {
  margin: 1.3em 0 .4em; font-size: .76rem; text-transform: uppercase; letter-spacing: .08em;
  color: #7c848b; font-weight: 700;
}
</style>

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>

<p class="stack-lead">The tools you compute with, the statistics that keep the answer honest, and the design decisions that determine whether a result means anything at all.</p>

<p class="stack-hint">Click any concept to expand it.</p>

<p class="cx-group">Tools of the trade</p>

<details class="cx" id="sql">
<summary>SQL</summary>
<div class="cx-body">
<p>SQL declares <em>what</em> data you want and leaves the engine to work out how to fetch it. Joins combine tables, <code>GROUP BY</code> aggregates, window functions compute across rows without collapsing them, and CTEs keep complex logic readable.</p>
<p>It is the highest-leverage skill on this page. Nearly every data role uses it daily, it is the interface to every warehouse, and being genuinely good at it — window functions, query plans, why something is slow — pays back faster than almost anything else you could study.</p>
</div>
</details>

<details class="cx" id="postgres-vs-mysql">
<summary>PostgreSQL vs MySQL</summary>
<div class="cx-body">
<p>The two databases you are most likely to be querying, and the comparison that comes up in nearly every data interview. Both are mature, free, and will handle far more than most projects need — so the honest answer is rarely "one is better", it is "they were built around different priorities". MySQL optimised early for fast, simple reads at web scale; PostgreSQL optimised for correctness, extensibility, and complex queries.</p>

<p class="subh">Feature by feature</p>

<table class="cmp">
<thead><tr><th>Dimension</th><th class="pg">PostgreSQL</th><th class="my">MySQL</th></tr></thead>
<tbody>
<tr><td>Built around</td><td>Standards compliance, correctness, extensibility</td><td>Speed and simplicity for read-heavy web workloads</td></tr>
<tr><td>Licence</td><td>PostgreSQL licence — permissive, no single owner</td><td>GPL, owned by Oracle; MariaDB is the community fork</td></tr>
<tr><td>Storage engine</td><td>One engine, tuned for everything</td><td>Pluggable — InnoDB is the default and the one you want</td></tr>
<tr><td>Complex queries</td><td>Stronger planner: better with many joins, subqueries, and aggregation</td><td>Planner has improved a lot in 8.x, still weaker on deep join trees</td></tr>
<tr><td>Window functions &amp; CTEs</td><td>Long-standing, complete</td><td><span class="yes">Yes</span> since 8.0 — older versions have neither</td></tr>
<tr><td><code>FULL OUTER JOIN</code></td><td><span class="yes">Supported</span></td><td><span class="no">Not supported</span> — emulate with two joins and a <code>UNION</code></td></tr>
<tr><td>Materialised views</td><td><span class="yes">Native</span>, with <code>REFRESH MATERIALIZED VIEW</code></td><td><span class="no">None</span> — build a summary table and refresh it yourself</td></tr>
<tr><td>Data types</td><td>Arrays, ranges, <code>JSONB</code>, <code>UUID</code>, <code>hstore</code>, custom and composite types</td><td>The standard set, plus <code>JSON</code>; no arrays or user-defined types</td></tr>
<tr><td>JSON</td><td><code>JSONB</code> is binary, indexable with GIN, and genuinely queryable</td><td><code>JSON</code> is validated and functional, but indexing needs generated columns</td></tr>
<tr><td>Indexes</td><td>B-tree, GIN, GiST, BRIN, hash; partial and expression indexes</td><td>B-tree, plus full-text and spatial on InnoDB</td></tr>
<tr><td>Extensions</td><td>PostGIS, pgvector, TimescaleDB, foreign data wrappers</td><td>Plugin system exists but the ecosystem is far smaller</td></tr>
<tr><td>Vector search</td><td><span class="yes">pgvector</span> — embeddings and ANN search in the same database</td><td>Vector type added in 9.x; ecosystem still thin</td></tr>
<tr><td>Transactional DDL</td><td><span class="yes">Yes</span> — wrap a migration in a transaction and roll it back</td><td><span class="no">No</span> — DDL commits implicitly; a failed migration leaves you halfway</td></tr>
<tr><td>Concurrency</td><td>MVCC with dead tuples reclaimed by <code>VACUUM</code></td><td>MVCC in InnoDB via undo logs; no vacuum to tune</td></tr>
<tr><td>Known operational cost</td><td>Autovacuum and transaction ID wraparound need attention at scale</td><td>Replication lag and, historically, silent type coercion</td></tr>
<tr><td>Replication</td><td>Streaming and logical replication built in</td><td>Binlog replication — long-established, very widely operated</td></tr>
<tr><td>Strict mode</td><td>Strict by default — bad data is rejected</td><td>Strict by default since 5.7; older configs silently truncated values</td></tr>
<tr><td>Identifier case</td><td>Folds unquoted names to lower case</td><td>Table-name case sensitivity depends on the host filesystem</td></tr>
<tr><td>Managed hosting</td><td>RDS, Aurora, Cloud SQL, Azure, Supabase, Neon</td><td>RDS, Aurora, Cloud SQL, PlanetScale (Vitess)</td></tr>
<tr><td>Horizontal scale</td><td>Citus for sharding; historically the weaker story</td><td>Vitess is battle-tested for very large sharded fleets</td></tr>
</tbody>
</table>

<p class="subh">What actually matters for data work</p>

<p>Most of the table is irrelevant if you are querying rather than operating the database. Four rows are not: <span class="k">window functions and CTEs</span>, because analytical SQL is unwritable without them and a MySQL below 8.0 has neither; <span class="k">FULL OUTER JOIN</span>, because reconciling two sources is a daily task and MySQL makes you write a UNION for it; <span class="k">materialised views</span>, because that is how a slow aggregate becomes a fast one without building a pipeline; and the <span class="k">planner</span>, because a seven-way join with subqueries is where the difference shows up.</p>

<p>Add <code>JSONB</code> and <code>pgvector</code> and the gap widens for anything modern — semi-structured event data stays queryable, and embeddings can live beside the rows they describe instead of in a separate vector store. That last point removes an entire moving part from a RAG system.</p>

<p class="subh">Where MySQL wins</p>

<p>Simple high-volume reads on well-indexed tables, where its lighter footprint and simpler operational model tell. It is also easier to run: no vacuum to tune, replication that a very large number of engineers have operated before, and Vitess as a genuinely proven sharding path. And it is often simply what is already there — which is the most common reason anyone uses either.</p>

<div class="verdict"><strong>If you are choosing:</strong> pick PostgreSQL for a new analytical or general-purpose system — richer types, a stronger planner, extensions, and safer migrations. Pick MySQL when you are joining an existing MySQL estate, when the workload is simple reads at very high volume, or when Vitess-style sharding is the plan. Note that MySQL 8.0 closed most of the classic gaps, so any comparison written before 2018 is out of date.</div>
</div>
</details>

<details class="cx" id="pandas">
<summary>Pandas</summary>
<div class="cx-body">
<p>Pandas provides the DataFrame: a labelled, two-dimensional table with an index, supporting joins, grouping, reshaping, and time-series operations in Python.</p>
<p>The habit worth building early is <span class="k">vectorised thinking</span>. Iterating over rows works and is often a hundred times slower than the equivalent column operation; most pandas performance problems are a loop that should have been a single expression.</p>
</div>
</details>

<details class="cx" id="numpy">
<summary>NumPy</summary>
<div class="cx-body">
<p>NumPy supplies the N-dimensional array and the vectorised operations on it. Its arrays are contiguous typed memory, so element-wise work runs in compiled code rather than the Python interpreter.</p>
<p>Almost everything else in the scientific Python stack — pandas, scikit-learn, PyTorch — sits on this foundation, which is why broadcasting rules and array shapes are worth understanding properly rather than fighting.</p>
</div>
</details>

<details class="cx" id="visualization">
<summary>Visualization</summary>
<div class="cx-body">
<p>Visualisation serves two distinct purposes that call for different standards. Exploratory plots are for you — fast, ugly, and numerous. Explanatory plots are for someone else, and every element should earn its place.</p>
<p>The judgment worth developing is knowing which chart answers the question, and being honest with axes. A truncated y-axis, a dual axis, or an area chart of non-additive quantities can each turn noise into a convincing story.</p>
</div>
</details>

<p class="cx-group">Statistical foundations</p>

<details class="cx" id="statistics">
<summary>Statistics</summary>
<div class="cx-body">
<p>Statistics is reasoning from a sample to a population under uncertainty. Descriptive statistics summarise what you have; inferential statistics quantify how much that tells you about what you do not.</p>
<p>The habit that matters is refusing to report an estimate without its uncertainty. <span class="k">A number without an interval is an opinion with decimals</span> — and the gap between "conversion is 4.2%" and "4.2% ± 1.8%" is often the difference between a good and a bad decision.</p>
</div>
</details>

<details class="cx" id="probability">
<summary>Probability</summary>
<div class="cx-body">
<p>Probability is the mathematics of uncertainty: independence, conditional probability, expectation, and variance. Bayes' rule — updating a belief given evidence — is the single most practically useful piece.</p>
<p>Its most valuable application is the base rate. A test that is 99% accurate for a condition affecting 1 in 10,000 people yields mostly false positives, and the intuition that resists this error is worth more than the formula.</p>
</div>
</details>

<details class="cx" id="distributions">
<summary>Distributions</summary>
<div class="cx-body">
<p>A distribution describes how values are spread. Normal for sums of many small effects, Poisson for counts of rare events, exponential for waiting times, binomial for repeated trials, power-law for quantities where a few observations dominate.</p>
<p>Recognising the shape tells you which methods apply. Assuming normality on heavily skewed data — revenue per customer, session length, request latency — is one of the most common and most consequential analytical errors.</p>
</div>
</details>

<details class="cx" id="hypothesis-testing">
<summary>Hypothesis Testing</summary>
<div class="cx-body">
<p>Hypothesis testing asks whether an observed effect is distinguishable from chance. You state a null hypothesis, compute how surprising the data would be if it were true, and reject it when that surprise passes a threshold.</p>
<p>Two traps do most of the damage. A p-value is <span class="k">not</span> the probability the hypothesis is true. And testing many variants without correcting for multiple comparisons manufactures significance — test twenty things at p&lt;0.05 and one "wins" by construction.</p>
</div>
</details>

<details class="cx" id="confidence-intervals">
<summary>Confidence Intervals</summary>
<div class="cx-body">
<p>A confidence interval gives a range of plausible values for a quantity, with a stated coverage level. It communicates both the estimate and its precision in a single object.</p>
<p>It is almost always the better thing to report. "Lift was 3%, interval −1% to 7%" tells a decision-maker immediately that the result is inconclusive, where "p = 0.31" makes them ask what that means.</p>
</div>
</details>

<details class="cx" id="sampling">
<summary>Sampling</summary>
<div class="cx-body">
<p>Sampling is how you get a subset that represents the whole. Random, stratified, and cluster sampling each trade cost against precision for particular population structures.</p>
<p>Sample <em>size</em> gets attention; sample <em>bias</em> does the damage. A biased sample does not improve with more data — it converges more confidently on the wrong answer. Survivorship bias, self-selection, and analysing only users who completed the flow are the everyday versions.</p>
</div>
</details>

<p class="cx-group">Working with data</p>

<details class="cx" id="eda">
<summary>Exploratory Data Analysis</summary>
<div class="cx-body">
<p>EDA is the first pass: distributions, missingness, outliers, relationships, and sanity checks against what the data is supposed to represent. It is where you discover the column that is 40% null and the timestamps in three timezones.</p>
<p>Skipping it is how modelling projects fail late and expensively. Most "the model doesn't work" problems are data problems that would have been visible in an hour of looking.</p>
</div>
</details>

<details class="cx" id="data-cleaning">
<summary>Data Cleaning</summary>
<div class="cx-body">
<p>Cleaning resolves missing values, duplicates, inconsistent encodings, and outliers before analysis. Every decision is a judgment call with consequences: dropping rows with nulls can silently bias the sample if missingness is not random.</p>
<p>It routinely consumes most of a project's time and affects the result more than model choice. <span class="k">Document what you changed and why</span> — otherwise nobody, including you in three months, can reproduce or defend the analysis.</p>
</div>
</details>

<details class="cx" id="feature-engineering">
<summary>Feature Engineering</summary>
<div class="cx-body">
<p>Feature engineering turns raw fields into inputs a model can use: ratios, aggregates over time windows, encoded categories, date parts, domain-specific derivations.</p>
<p>The failure to guard against is <span class="k">leakage</span> — building a feature from information unavailable at prediction time. It produces spectacular validation scores and a model that collapses in production, and it is the most common reason a promising result does not survive deployment.</p>
</div>
</details>

<details class="cx" id="correlation-causation">
<summary>Correlation vs Causation</summary>
<div class="cx-body">
<p>Correlation says two things move together. Causation says intervening on one changes the other. Only the second supports a decision, and observational data alone rarely establishes it.</p>
<p>The usual culprit is a confounder driving both. Users of a feature retain better — but engaged users both adopt features and retain, so the feature may have caused nothing at all. Recognising this before recommending action is a large part of the job.</p>
</div>
</details>

<p class="cx-group">Inference and experimentation</p>

<details class="cx" id="regression">
<summary>Regression</summary>
<div class="cx-body">
<p>Regression models a relationship between inputs and an outcome. Used predictively it estimates unknown values; used inferentially it quantifies how much each input matters, with uncertainty attached.</p>
<p>Its interpretability is the attraction and the risk. A coefficient means "holding the other included variables constant" — which is only meaningful if the right variables are in the model, and says nothing about the ones you omitted.</p>
</div>
</details>

<details class="cx" id="ab-testing">
<summary>A/B Testing &amp; Experiment Design</summary>
<div class="cx-body">
<p>An A/B test randomly assigns users to variants so the measured difference can be attributed to the change rather than to who received it. Randomisation is what buys the causal claim.</p>
<p>The decisions that determine validity happen <span class="k">before</span> data collection: the metric, the sample size from a power calculation, the duration, and the guardrails. Stopping the moment the result looks good — peeking — inflates false positives dramatically, which is why the analysis plan is written first.</p>
</div>
</details>

<details class="cx" id="causal-inference">
<summary>Causal Inference</summary>
<div class="cx-body">
<p>Causal inference estimates effects when a randomised experiment is impossible — because it would be unethical, illegal, or simply infeasible. Difference-in-differences, propensity score matching, instrumental variables, and regression discontinuity each recover a causal estimate under stated assumptions.</p>
<p>Those assumptions are the whole method, and they are not testable from the data. The discipline is stating them explicitly and arguing for their plausibility, rather than letting the technique imply a rigour the design does not have.</p>
</div>
</details>

<details class="cx" id="time-series">
<summary>Time Series</summary>
<div class="cx-body">
<p>Time series data has order, trend, seasonality, and autocorrelation — observations near in time are related, which breaks the independence most standard methods assume.</p>
<p>The practical consequence is that <span class="k">random train/test splits are invalid</span>. Shuffling lets the model see the future, producing excellent backtests and useless forecasts. Splits must respect chronology, and evaluation must reflect what was actually knowable at each point.</p>
</div>
</details>

<p><a class="stack-back" href="/stacks/">← All stacks</a></p>
