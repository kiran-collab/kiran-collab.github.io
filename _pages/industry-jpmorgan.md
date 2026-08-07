---
title: "Real-Time Fraud Detection &amp; GenAI Investigation — JPMorgan Chase"
permalink: /projects/industry/jpmorgan/
layout: single
author_profile: true
---

{% include base_path %}
{% include qbank-style.html %}

<div class="ip">

<p class="ip-deck">A fraud detection platform scoring 5M+ card transactions daily, a streaming feature store serving features in under 50 ms, and a RAG-based investigation assistant that cut analyst time by 40% — built under the explainability and governance constraints that financial services imposes.</p>
<p class="ip-meta">AI/ML Engineer · JPMorgan Chase &amp; Co., California · Sept 2023 – Oct 2025</p>

<p class="ip-links">
<a class="ip-back" href="/projects/">← All projects</a>
<a href="#work">What I built</a>
<a href="#arch">Architecture</a>
<a href="#specs">Tech specs</a>
<a href="#questions">Interview questions</a>
<a href="#glossary">Glossary</a>
</p>

<h2 id="work">What I built</h2>

<ul>
<li><strong>Real-time fraud detection platform</strong> — processing 5M+ daily card transactions with LightGBM and Isolation Forest models, reducing confirmed fraud losses by 22% while improving transaction risk scoring.</li>
<li><strong>Feast-based feature store</strong> — integrated with Apache Kafka to serve streaming features at sub-50 ms latency, enabling real-time detection and decisioning.</li>
<li><strong>GenAI fraud investigation assistant</strong> — LangChain, Pinecone, and Retrieval-Augmented Generation, reducing analyst investigation time by 40% through contextual case retrieval.</li>
<li><strong>Transformer-based anomaly detection</strong> — trained in PyTorch to identify abnormal transaction patterns, increasing detection accuracy by 15% while holding false positives below 2%.</li>
<li><strong>Automated ML lifecycle</strong> — training, validation, versioning, and deployment through Kubeflow Pipelines, Terraform, and AWS EKS, improving deployment consistency and accelerating release cycles.</li>
<li><strong>Model explainability</strong> — SHAP and LIME providing transparent fraud risk predictions to support regulatory compliance, model governance, and audit.</li>
<li><strong>Inference optimisation</strong> — ONNX Runtime and post-training quantisation improving scoring throughput 3× while reducing latency for real-time processing.</li>
<li><strong>Responsible AI controls</strong> — with Risk, Compliance, and Data Science: bias monitoring, output validation, and prompt injection safeguards enabling secure GenAI deployment.</li>
</ul>

<h2 id="arch">Architecture</h2>

<figure class="fig">
<svg class="dgm" viewBox="0 0 540 230" aria-label="Fraud detection scoring path and investigation assistant">
<rect class="b" x="6" y="26" width="76" height="32" rx="4"/><text class="ts" x="44" y="40">card</text><text class="ts" x="44" y="52">transaction</text>
<path class="a" d="M84 42 H104"/>
<rect class="b3" x="106" y="26" width="80" height="32" rx="4"/><text class="ts" x="146" y="40">Kafka</text><text class="ts" x="146" y="52">event stream</text>
<path class="a" d="M188 42 H208"/>
<rect class="b3" x="210" y="18" width="90" height="48" rx="4"/><text class="ts" x="255" y="34">Feast</text><text class="ts" x="255" y="46">feature store</text><text class="ts" x="255" y="58">&lt; 50 ms</text>
<path class="a" d="M302 42 H322"/>
<rect class="b" x="324" y="10" width="104" height="26" rx="4"/><text class="ts" x="376" y="27">LightGBM</text>
<rect class="b" x="324" y="40" width="104" height="26" rx="4"/><text class="ts" x="376" y="57">Isolation Forest</text>
<rect class="b4" x="324" y="70" width="104" height="26" rx="4"/><text class="ts" x="376" y="87">transformer</text>
<path class="a" d="M430 42 H452"/>
<rect class="b2" x="454" y="26" width="80" height="32" rx="4"/><text class="ts" x="494" y="40">risk score</text><text class="ts" x="494" y="52">approve / hold</text>
<path class="dl" d="M494 60 V96"/>
<rect class="bg" x="300" y="110" width="234" height="30" rx="4"/><text class="ts" x="417" y="129">SHAP · LIME — why this score</text>
<rect class="b4" x="6" y="150" width="150" height="46" rx="4"/><text class="ts" x="81" y="168">investigation assistant</text><text class="ts" x="81" y="181">LangChain · Pinecone · RAG</text>
<path class="a" d="M158 173 H186"/>
<rect class="b" x="188" y="150" width="120" height="46" rx="4"/><text class="ts" x="248" y="168">analyst</text><text class="ts" x="248" y="181">40% faster reviews</text>
<path class="dl" d="M300 173 H330 V142"/>
<text class="ts" x="270" y="216">every flagged case carries its explanation into the review</text>
</svg>
<figcaption>The scoring path is latency-bound; the investigation path is quality-bound. Explainability is what connects them — a flagged transaction arrives at the analyst with reasons attached.</figcaption>
</figure>

<h2 id="specs">Technical specifications</h2>

<table class="ip-spec">
<tr><td>Volume</td><td>5M+ card transactions scored daily</td></tr>
<tr><td>Primary models</td><td>LightGBM (supervised), Isolation Forest (unsupervised anomaly), transformer-based sequence models in PyTorch</td></tr>
<tr><td>Feature serving</td><td>Feast feature store fed by Apache Kafka, sub-50 ms online lookup</td></tr>
<tr><td>GenAI assistant</td><td>LangChain orchestration, Pinecone vector store, Retrieval-Augmented Generation over historical cases</td></tr>
<tr><td>Orchestration</td><td>Kubeflow Pipelines for training and deployment, Terraform for infrastructure, AWS EKS for runtime</td></tr>
<tr><td>Explainability</td><td>SHAP and LIME for per-prediction attribution supporting audit and model governance</td></tr>
<tr><td>Inference</td><td>ONNX Runtime with post-training quantisation — 3× throughput improvement</td></tr>
<tr><td>Governance</td><td>Bias monitoring, output validation, prompt injection safeguards, with Risk and Compliance</td></tr>
<tr><td>Reported outcomes</td><td>22% reduction in confirmed fraud losses; 15% detection accuracy improvement at &lt; 2% false positives; 40% reduction in investigation time</td></tr>
</table>

<h2 id="questions">Interview questions <span class="qb-count">134 questions</span></h2>

<p class="qb-intro">Fraud detection interviews concentrate on class imbalance, the cost asymmetry between error types, and latency under regulation. The "what if" groups are where interviewers find out whether you understand the system or only remember it. Terms are defined in the <a href="#glossary">glossary</a>.</p>

<details class="qb"><summary>1 · Problem framing and business context (10)</summary><div class="qb-body"><ol>
<li>How do you frame fraud detection as a machine learning problem?</li>
<li>What is the cost of a false positive versus a false negative here, in real terms?<span class="hint">A blocked legitimate transaction is a customer service event and possible churn; a missed fraud is a direct loss plus liability. They are not symmetric and the ratio should drive the threshold.</span></li>
<li>Where did your labels come from, and how long did they take to arrive?</li>
<li>What is label delay and how does it affect training and evaluation?</li>
<li>How did you handle fraud that was never reported and therefore never labelled?</li>
<li>What does the 22% reduction in confirmed fraud losses actually measure?</li>
<li>How did you attribute that reduction to the model rather than to other changes?</li>
<li>Who consumed the risk score, and what action did it trigger?</li>
<li>What was the baseline before the platform existed?</li>
<li>How did you decide the threshold at which a transaction is held?</li>
</ol></div></details>

<details class="qb"><summary>2 · Model choice and design (12)</summary><div class="qb-body"><ol>
<li>Why LightGBM rather than XGBoost or a neural network?<span class="hint">Tabular data, speed of training and inference, native categorical handling, and interpretability that survives a compliance review.</span></li>
<li>What does Isolation Forest do that LightGBM cannot?</li>
<li>Why run a supervised and an unsupervised model together?</li>
<li>How do you combine their outputs into a single decision?</li>
<li>What did the transformer add over the gradient-boosted model?</li>
<li>What is the sequence in your transformer — transactions per card over time?</li>
<li>How did you prevent the transformer from simply relearning what LightGBM already caught?</li>
<li>How did you decide the 15% accuracy improvement was real and not overfitting?</li>
<li>What features mattered most, and were you surprised by any of them?</li>
<li>How did you handle categorical features with very high cardinality, such as merchant ID?</li>
<li>How did you deal with new merchants or cards with no history?</li>
<li>Why not just use rules? What did the model give you that rules did not?</li>
</ol></div></details>

<details class="qb"><summary>3 · Class imbalance and metrics (12)</summary><div class="qb-body"><ol>
<li>What was your fraud base rate, and why does that number dominate everything else?</li>
<li>Why is accuracy a useless metric here?<span class="hint">Predicting "not fraud" always would score above 99%. Say this plainly — it is the fastest way to show you understand the problem.</span></li>
<li>Why precision-recall AUC rather than ROC AUC on imbalanced data?</li>
<li>What is precision at a fixed recall, and why is it the metric operations actually cares about?</li>
<li>How did you keep false positives below 2%, and what did that cost you in recall?</li>
<li>Did you resample — SMOTE, undersampling, class weights? What did you choose and why?</li>
<li>What goes wrong when you apply SMOTE before splitting the data?</li>
<li>How did you set the decision threshold, and did it differ by segment?</li>
<li>What is calibration and why does a fraud score need to be calibrated?</li>
<li>How would you explain the precision-recall tradeoff to a non-technical risk manager?</li>
<li>How did you evaluate over time rather than on a random split?</li>
<li>What is a cost-sensitive loss and would it have been a better objective here?</li>
</ol></div></details>

<details class="qb"><summary>4 · Feature store and streaming (12)</summary><div class="qb-body"><ol>
<li>What is a feature store and what problem does it solve?</li>
<li>What is training-serving skew, and how does a feature store prevent it?<span class="hint">The same feature definition computed once, served to both training and inference. Without it, the batch SQL and the online code drift apart silently.</span></li>
<li>What is the difference between the online and offline store in Feast?</li>
<li>What is point-in-time correctness and why does it matter for fraud features?</li>
<li>How did you compute rolling aggregations — transactions in the last hour, for example — in a streaming context?</li>
<li>How did Kafka fit into the pipeline, and what were the topics partitioned by?</li>
<li>Why does partitioning by card ID matter for ordering?</li>
<li>How did you achieve sub-50 ms feature lookup, and what was the storage backend?</li>
<li>What happens to a scoring request when a feature is missing or stale?</li>
<li>How did you handle late-arriving events in the stream?</li>
<li>What is watermarking and did you need it?</li>
<li>How did you monitor feature freshness in production?</li>
</ol></div></details>

<details class="qb"><summary>5 · The RAG investigation assistant (12)</summary><div class="qb-body"><ol>
<li>What exactly did the assistant retrieve, and from where?</li>
<li>Why RAG rather than fine-tuning a model on historical cases?</li>
<li>How did you chunk case documents, and what did you experiment with?</li>
<li>Which embedding model did you use and how did you evaluate it?</li>
<li>Why Pinecone rather than pgvector or FAISS?</li>
<li>How did you measure retrieval quality separately from answer quality?<span class="hint">Retrieval precision and recall at k, evaluated independently — most "the model is wrong" complaints are retrieval failures wearing a costume.</span></li>
<li>How did you prevent the assistant from hallucinating case details?</li>
<li>Did you enforce citations back to the source case? How?</li>
<li>How did you measure the 40% reduction in investigation time?</li>
<li>How did you handle personally identifiable information in retrieved cases?</li>
<li>What did the assistant do when no relevant case existed?</li>
<li>How did analysts give feedback, and did that feedback improve the system?</li>
</ol></div></details>

<details class="qb"><summary>6 · MLOps — Kubeflow, Terraform, EKS (12)</summary><div class="qb-body"><ol>
<li>What did your Kubeflow pipeline actually do, stage by stage?</li>
<li>How were models versioned, and could you tie a production score back to a training run?</li>
<li>What triggered retraining — a schedule, drift, or performance decay?</li>
<li>How did you validate a new model before it replaced the incumbent?</li>
<li>What is a champion-challenger setup and did you run one?</li>
<li>How did you deploy — blue-green, canary, or shadow mode?<span class="hint">Shadow mode is the strong answer for fraud: score in parallel without acting, compare, then promote.</span></li>
<li>How did you roll back a bad model, and how quickly?</li>
<li>Why Terraform rather than configuring infrastructure by hand?</li>
<li>What did EKS give you over running on EC2 directly?</li>
<li>How did you handle autoscaling for a workload with a daily traffic pattern?</li>
<li>How did you separate the training and serving infrastructure?</li>
<li>What did your on-call runbook say to do when scoring latency spiked?</li>
</ol></div></details>

<details class="qb"><summary>7 · Explainability and governance (12)</summary><div class="qb-body"><ol>
<li>What is SHAP and what does a SHAP value actually represent?<span class="hint">The contribution of one feature to the difference between this prediction and the average prediction, averaged fairly over all feature orderings.</span></li>
<li>How does LIME differ from SHAP, and why use both?</li>
<li>Why is TreeSHAP feasible on a gradient-boosted model when exact SHAP is not?</li>
<li>How did you deliver explanations at the latency required for real-time scoring?</li>
<li>Who consumed the explanations, and did they change any decisions?</li>
<li>What does a regulator actually want to see in model documentation?</li>
<li>What is model governance in a bank, and what artefacts did you produce?</li>
<li>How did you monitor for bias, and against which attributes?</li>
<li>What is disparate impact and how would you detect it in a fraud model?</li>
<li>What do you do when a protected attribute is not in the model but is inferable from other features?</li>
<li>How did you handle the tension between accuracy and explainability?</li>
<li>Could you explain a transformer's decision to a compliance officer?</li>
</ol></div></details>

<details class="qb"><summary>8 · Inference optimisation (12)</summary><div class="qb-body"><ol>
<li>Where was the 3× throughput improvement actually coming from?</li>
<li>What is post-training quantisation and how does it differ from quantisation-aware training?</li>
<li>How did you verify the quantised model still scored transactions the same way?</li>
<li>What accuracy loss did you accept, and who approved it?</li>
<li>Why ONNX Runtime rather than serving the PyTorch model directly?</li>
<li>What is graph optimisation in ONNX Runtime — what does it change?</li>
<li>What is the difference between throughput and latency, and which one mattered here?<span class="hint">Both, at different points: throughput for the daily 5M batch, p99 latency for the real-time authorisation path.</span></li>
<li>How did you batch requests without adding unacceptable latency?</li>
<li>What was your p99 scoring latency and what was the budget?</li>
<li>How did you profile to find the bottleneck before optimising?</li>
<li>How much of end-to-end latency was feature lookup versus model inference?</li>
<li>What would you have optimised next?</li>
</ol></div></details>

<details class="qb"><summary>9 · Responsible AI and security (10)</summary><div class="qb-body"><ol>
<li>What is prompt injection and how does it apply to a fraud investigation assistant?</li>
<li>How could an attacker manipulate the assistant through transaction data it reads?</li>
<li>What output validation did you apply before showing an answer to an analyst?</li>
<li>How did you prevent sensitive data leaking into the model provider's logs?</li>
<li>What is data residency and did it constrain your design?</li>
<li>How did you handle the right to an explanation for a declined transaction?</li>
<li>What is adversarial drift — fraudsters adapting to your model — and how did you detect it?</li>
<li>How often did you retrain, and was that fast enough against adaptive adversaries?</li>
<li>What controls did Risk and Compliance require before GenAI could touch production data?</li>
<li>How would you red-team this system?</li>
</ol></div></details>

<details class="qb wi"><summary>10 · What if — data and distribution (10)</summary><div class="qb-body"><ol>
<li>What if the fraud rate doubled in a week?</li>
<li>What if fraudsters found and exploited a blind spot in your features?</li>
<li>What if a major merchant changed its transaction format overnight?</li>
<li>What if the Kafka stream lagged by ten minutes?</li>
<li>What if a feature became unavailable in production but was present in training?</li>
<li>What if your labels turned out to be systematically biased toward one customer segment?</li>
<li>What if a bug meant three months of training data had a corrupted field?</li>
<li>What if the model performed well overall but badly on one country?</li>
<li>What if a holiday shopping spike looked like coordinated fraud?</li>
<li>What if you had to launch in a new market with no historical fraud data?</li>
</ol></div></details>

<details class="qb wi"><summary>11 · What if — production incidents (10)</summary><div class="qb-body"><ol>
<li>What if scoring latency exceeded the authorisation timeout during peak traffic?</li>
<li>What if the model started declining 10× more transactions than yesterday?</li>
<li>What if the feature store returned stale values without erroring?<span class="hint">The dangerous failures are the silent ones — this is why freshness needs its own alert rather than relying on error rates.</span></li>
<li>What if the new model passed offline evaluation but degraded in production?</li>
<li>What if you had to disable the model entirely — what is the fallback?</li>
<li>What if Pinecone was unavailable during an investigation surge?</li>
<li>What if an analyst acted on a hallucinated case summary?</li>
<li>What if a rollback restored a model trained on data you have since deleted for privacy reasons?</li>
<li>What if two models in the ensemble disagreed sharply on a high-value transaction?</li>
<li>What if you discovered the 22% loss reduction was partly caused by an unrelated policy change?</li>
</ol></div></details>

<details class="qb wi"><summary>12 · What if — design alternatives (10)</summary><div class="qb-body"><ol>
<li>What if you had to score in 10 ms instead of 50 ms?</li>
<li>What if the bank forbade any model that could not be explained by a linear equation?</li>
<li>What if you could not store any customer data at all?</li>
<li>What if you had to run entirely on-premises with no cloud services?</li>
<li>What if you had 100× the transaction volume?</li>
<li>What if the assistant had to work for analysts in five languages?</li>
<li>What if you replaced the whole ensemble with a single large model — what would you lose?</li>
<li>What if the business wanted the model to explain itself in natural language to customers?</li>
<li>What if labels became available in real time instead of weeks later?</li>
<li>What if you had to hand this system to a team who had never seen it — what would you document first?</li>
</ol></div></details>

<h2 id="glossary">Glossary</h2>

<details class="qb gl" open><summary>Every term used above, defined</summary><div class="qb-body">
<table class="gloss">
<thead><tr><th>Term</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>Base rate</td><td>The proportion of transactions that are actually fraudulent — typically well under 1%, which is why imbalance dominates the problem.</td></tr>
<tr><td>Class imbalance</td><td>One class vastly outnumbering the other, so a model can score well by ignoring the minority class entirely.</td></tr>
<tr><td>False positive</td><td>A legitimate transaction flagged as fraud. Costs customer trust and support effort.</td></tr>
<tr><td>False negative</td><td>Fraud that was not caught. Costs money directly and may carry liability.</td></tr>
<tr><td>Precision</td><td>Of the transactions flagged as fraud, the share that really were.</td></tr>
<tr><td>Recall</td><td>Of the fraud that occurred, the share that was caught.</td></tr>
<tr><td>PR AUC</td><td>Area under the precision-recall curve. More informative than ROC AUC under heavy imbalance because it ignores the abundant true negatives.</td></tr>
<tr><td>ROC AUC</td><td>Area under the receiver operating characteristic curve. Looks flatteringly high on imbalanced data.</td></tr>
<tr><td>Precision at fixed recall</td><td>The operational metric — "at the recall we need, how many false alarms must the team absorb?"</td></tr>
<tr><td>Calibration</td><td>Whether a predicted probability means what it says — of everything scored 0.8, roughly 80% should be fraud.</td></tr>
<tr><td>Decision threshold</td><td>The score above which action is taken. A business decision, not a modelling one.</td></tr>
<tr><td>Cost-sensitive loss</td><td>A loss function weighting errors by their real cost rather than treating them equally.</td></tr>
<tr><td>SMOTE</td><td>Synthetic Minority Over-sampling — generating synthetic minority examples by interpolating between neighbours. Must be applied inside the training fold only.</td></tr>
<tr><td>Label delay</td><td>The lag between a transaction and a confirmed fraud label, often weeks. It limits how quickly you can learn and how you must evaluate.</td></tr>
<tr><td>LightGBM</td><td>Gradient-boosted trees using histogram-based splits and leaf-wise growth — fast on large tabular data with native categorical handling.</td></tr>
<tr><td>Isolation Forest</td><td>An unsupervised anomaly detector that isolates points with random splits; outliers separate in fewer splits. Needs no labels, so it can catch novel fraud.</td></tr>
<tr><td>Ensemble</td><td>Combining several models' outputs, ideally with uncorrelated errors so their mistakes cancel rather than compound.</td></tr>
<tr><td>High-cardinality categorical</td><td>A field with very many distinct values, such as merchant ID. One-hot encoding explodes; target or hash encoding is usual.</td></tr>
<tr><td>Cold start</td><td>A new card or merchant with no history, so history-based features are empty.</td></tr>
<tr><td>Feature store</td><td>A system that defines features once and serves them consistently to both training and inference.</td></tr>
<tr><td>Feast</td><td>An open-source feature store with an offline store for training data and an online store for low-latency serving.</td></tr>
<tr><td>Online vs offline store</td><td>Online is a fast key-value lookup for serving; offline holds full history for training. Both derive from the same definitions.</td></tr>
<tr><td>Training-serving skew</td><td>Features computed differently at training and serving time — a leading cause of models that work offline and fail in production.</td></tr>
<tr><td>Point-in-time correctness</td><td>Building training rows using only data available at that moment, so the model never sees the future.</td></tr>
<tr><td>Apache Kafka</td><td>A distributed append-only log. Producers write to partitioned topics; consumers read at their own offsets, with ordering guaranteed within a partition.</td></tr>
<tr><td>Partition key</td><td>The field deciding which partition an event lands in. Keying by card ID keeps one card's events ordered.</td></tr>
<tr><td>Late-arriving data</td><td>Events that reach the stream after events that happened later, breaking naive time-window aggregations.</td></tr>
<tr><td>Watermarking</td><td>A stream-processing mechanism declaring how late data may be before a window is closed.</td></tr>
<tr><td>Feature freshness</td><td>How recently a served feature was updated. Stale features fail silently, so freshness needs its own monitoring.</td></tr>
<tr><td>RAG</td><td>Retrieval-Augmented Generation — retrieve relevant documents at query time and put them in the prompt so answers rest on evidence.</td></tr>
<tr><td>Chunking</td><td>Splitting documents into retrievable pieces. Chunk size and overlap materially affect retrieval quality.</td></tr>
<tr><td>Embedding</td><td>A dense vector representation placing semantically similar text near one another.</td></tr>
<tr><td>Pinecone</td><td>A managed vector database serving approximate nearest-neighbour search with metadata filtering.</td></tr>
<tr><td>Retrieval precision at k</td><td>Of the top k retrieved documents, how many were genuinely relevant — measured separately from the final answer.</td></tr>
<tr><td>Hallucination</td><td>Confidently stated output not supported by the evidence. In an investigation tool, actionable and dangerous.</td></tr>
<tr><td>Citation enforcement</td><td>Requiring every claim to point at a retrieved source, so an analyst can verify rather than trust.</td></tr>
<tr><td>PII</td><td>Personally identifiable information. Governs what may be retrieved, logged, or sent to a model provider.</td></tr>
<tr><td>Kubeflow Pipelines</td><td>Orchestrates ML workflows as containerised steps on Kubernetes, with tracked inputs and outputs per run.</td></tr>
<tr><td>Terraform</td><td>Declares infrastructure as versioned code and reconciles cloud resources against that declaration.</td></tr>
<tr><td>EKS</td><td>AWS-managed Kubernetes — AWS runs the control plane, you run the workloads.</td></tr>
<tr><td>Champion-challenger</td><td>Running a candidate model alongside the incumbent and promoting only if it wins on agreed metrics.</td></tr>
<tr><td>Shadow mode</td><td>Scoring live traffic with a new model without acting on its output, to compare safely before promotion.</td></tr>
<tr><td>Canary deployment</td><td>Routing a small share of traffic to the new version first, expanding only if metrics hold.</td></tr>
<tr><td>Blue-green deployment</td><td>Two full environments with traffic switched between them, giving an instant rollback path.</td></tr>
<tr><td>SHAP</td><td>Shapley Additive exPlanations — attributes a prediction to its features using a game-theoretic allocation that is fair and additive.</td></tr>
<tr><td>TreeSHAP</td><td>An exact, polynomial-time SHAP algorithm specific to tree ensembles, which makes explanations affordable on gradient-boosted models.</td></tr>
<tr><td>LIME</td><td>Local Interpretable Model-agnostic Explanations — fits a simple surrogate model around one prediction to approximate local behaviour.</td></tr>
<tr><td>Model governance</td><td>The controls around a model in a regulated setting: documentation, validation, approval, monitoring, and audit trail.</td></tr>
<tr><td>Disparate impact</td><td>A model producing systematically different outcomes across protected groups, even without using the protected attribute.</td></tr>
<tr><td>Proxy variable</td><td>A feature correlated with a protected attribute, letting bias enter a model that never sees the attribute itself.</td></tr>
<tr><td>Bias monitoring</td><td>Tracking outcome differences across segments in production, not only at training time.</td></tr>
<tr><td>ONNX Runtime</td><td>Executes models in the ONNX format across hardware, applying graph optimisations such as operator fusion and constant folding.</td></tr>
<tr><td>Post-training quantisation</td><td>Reducing weight and activation precision after training, using a calibration sample. No retraining required.</td></tr>
<tr><td>Quantisation-aware training</td><td>Simulating reduced precision during training so the model learns to tolerate it — better accuracy, more expensive.</td></tr>
<tr><td>Throughput vs latency</td><td>Transactions per second versus time for one transaction. Batching raises throughput and usually raises latency.</td></tr>
<tr><td>p99 latency</td><td>The value 99% of requests come in under. The number that reflects the worst experience users actually get.</td></tr>
<tr><td>Adversarial drift</td><td>Distribution shift caused by adversaries adapting to your defences — unlike ordinary drift, it is deliberate and responsive.</td></tr>
<tr><td>Concept drift</td><td>The relationship between features and label changing over time, so a once-accurate model decays.</td></tr>
<tr><td>Prompt injection</td><td>Instructions hidden in data the model reads, hijacking its behaviour. Relevant wherever a model consumes untrusted content.</td></tr>
<tr><td>Output validation</td><td>Checking model output against rules or schemas before it reaches a user or triggers an action.</td></tr>
<tr><td>Red teaming</td><td>Deliberately attacking your own system to find failures before an adversary does.</td></tr>
</tbody>
</table>
</div></details>

<p class="ip-foot">Back to <a href="/projects/">all projects</a>.</p>

</div>
