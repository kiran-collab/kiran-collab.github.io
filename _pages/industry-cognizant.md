---
title: "Clinical Risk Prediction &amp; EHR NLP — Cognizant"
permalink: /projects/industry/cognizant/
layout: single
author_profile: true
---

{% include base_path %}
{% include qbank-style.html %}

<div class="ip">

<p class="ip-deck">A patient readmission model over 2M+ EHR records reaching 0.87 AUC-ROC, a clinical NLP pipeline extracting structure from physician notes, and the deployment and explainability work that got clinicians to actually use it — under HIPAA constraints throughout.</p>
<p class="ip-meta">Machine Learning Engineer · Cognizant, India · Jan 2019 – Oct 2020</p>

<p class="ip-links">
<a class="ip-back" href="/projects/">← All projects</a>
<a href="#work">What I built</a>
<a href="#arch">Architecture</a>
<a href="#specs">Tech specs</a>
<a href="#questions">Interview questions</a>
<a href="#glossary">Glossary</a>
</p>

<details class="ip-sec" id="work" open>
<summary>What I built</summary>
<div class="ip-sec-body">

<ul>
<li><strong>Patient readmission prediction</strong> — an XGBoost model over structured EHR data from 2M+ patient records, achieving 0.87 AUC-ROC and letting care teams identify high-risk patients before discharge.</li>
<li><strong>Scalable PySpark pipelines on Databricks</strong> — processing laboratory results, vital signs, and ICD-10 diagnosis data, reducing feature generation time by 60% for daily model refreshes.</li>
<li><strong>Clinical NLP pipeline</strong> — spaCy and BioBERT extracting symptoms, medications, and comorbidities from unstructured physician notes, improving structured clinical data coverage by 35%.</li>
<li><strong>Drift and data quality monitoring</strong> — Evidently AI detecting distribution changes early and supporting automated, HIPAA-compliant retraining.</li>
<li><strong>Model deployment</strong> — REST APIs via FastAPI, Docker, and AWS SageMaker, integrated with hospital EHR platforms through HL7/FHIR interfaces for real-time risk scoring.</li>
<li><strong>Clinician-facing explainability</strong> — SHAP-based dashboards highlighting key patient risk factors, improving transparency and increasing physician adoption across pilot deployments.</li>
<li><strong>Model lifecycle automation</strong> — MLflow and Jenkins automating experiment tracking, versioning, and deployment, reducing release cycles from two weeks to three days.</li>
<li><strong>Clinical A/B evaluation</strong> — partnered with clinical and analytics teams to evaluate model-guided interventions, contributing to an 18% reduction in 30-day readmissions during the pilot.</li>
</ul>

</div>
</details>

<details class="ip-sec" id="arch" open>
<summary>Architecture</summary>
<div class="ip-sec-body">

<figure class="fig">
<svg class="dgm" viewBox="0 0 540 220" aria-label="EHR ingestion, feature generation, model scoring and clinician delivery">
<rect class="b3" x="4" y="14" width="86" height="26" rx="4"/><text class="ts" x="47" y="31">labs · vitals</text>
<rect class="b3" x="4" y="46" width="86" height="26" rx="4"/><text class="ts" x="47" y="63">ICD-10 codes</text>
<rect class="b2" x="4" y="78" width="86" height="26" rx="4"/><text class="ts" x="47" y="95">physician notes</text>
<path class="a" d="M92 27 H120"/><path class="a" d="M92 59 H120"/>
<path class="a" d="M92 91 H120"/>
<rect class="b" x="122" y="14" width="96" height="58" rx="4"/><text class="ts" x="170" y="34">PySpark</text><text class="ts" x="170" y="47">on Databricks</text><text class="ts" x="170" y="60">structured features</text>
<rect class="b2" x="122" y="78" width="96" height="40" rx="4"/><text class="ts" x="170" y="94">spaCy + BioBERT</text><text class="ts" x="170" y="107">NER extraction</text>
<path class="a" d="M220 43 H248"/><path class="a" d="M220 98 L248 60"/>
<rect class="b4" x="250" y="26" width="90" height="44" rx="4"/><text class="ts" x="295" y="43">XGBoost</text><text class="ts" x="295" y="56">0.87 AUC-ROC</text>
<path class="a" d="M342 48 H370"/>
<rect class="b" x="372" y="26" width="90" height="44" rx="4"/><text class="ts" x="417" y="43">FastAPI</text><text class="ts" x="417" y="56">SageMaker</text>
<path class="a" d="M464 48 H492"/>
<text class="ts" x="512" y="44">EHR</text><text class="ts" x="512" y="56">HL7/FHIR</text>
<rect class="bg" x="250" y="130" width="212" height="30" rx="4"/><text class="ts" x="356" y="149">SHAP dashboard — why this patient</text>
<path class="dl" d="M295 74 V128"/>
<rect class="bg" x="122" y="170" width="340" height="28" rx="4"/><text class="ts" x="292" y="188">Evidently drift monitoring · MLflow · Jenkins</text>
<path class="dl" d="M356 162 V168"/>
<text class="ts" x="292" y="214">drift triggers retraining; every model traceable to its run</text>
</svg>
<figcaption>Two ingestion paths — structured and unstructured — converge into one feature set. The explainability layer is what made the output usable by clinicians rather than merely accurate.</figcaption>
</figure>

</div>
</details>

<details class="ip-sec" id="specs" open>
<summary>Technical specifications</summary>
<div class="ip-sec-body">

<table class="ip-spec">
<tr><td>Dataset</td><td>Structured EHR data from 2M+ patient records</td></tr>
<tr><td>Model</td><td>XGBoost, 0.87 AUC-ROC on 30-day readmission prediction</td></tr>
<tr><td>Data processing</td><td>PySpark on Databricks — labs, vitals, ICD-10 diagnoses; 60% faster feature generation</td></tr>
<tr><td>Clinical NLP</td><td>spaCy pipeline with BioBERT for symptoms, medications, comorbidities; +35% structured coverage</td></tr>
<tr><td>Monitoring</td><td>Evidently AI for drift and data quality, supporting HIPAA-compliant automated retraining</td></tr>
<tr><td>Serving</td><td>FastAPI, Docker, AWS SageMaker endpoints</td></tr>
<tr><td>Integration</td><td>Hospital EHR platforms via HL7/FHIR interfaces, real-time risk scoring</td></tr>
<tr><td>Explainability</td><td>SHAP-based clinician-facing dashboards of patient risk factors</td></tr>
<tr><td>Lifecycle</td><td>MLflow experiment tracking and versioning, Jenkins automation — release cycle from two weeks to three days</td></tr>
<tr><td>Clinical outcome</td><td>18% reduction in 30-day readmissions during the pilot A/B evaluation</td></tr>
</table>

</div>
</details>

<details class="ip-sec" id="questions" open>
<summary>Interview questions <span class="qb-count">136 questions</span></summary>
<div class="ip-sec-body">

<p class="qb-intro">Healthcare ML interviews test three things beyond modelling: whether you understand that a prediction has to change a clinical decision to be worth anything, whether you respect the privacy constraints, and whether you know why clinicians reject accurate models. Terms are defined in the <a href="#glossary">glossary</a>.</p>

<details class="qb"><summary>1 · Clinical problem framing (12)</summary><div class="qb-body"><ol>
<li>Why does 30-day readmission matter to a hospital?<span class="hint">It is a quality measure and, in many systems, financially penalised — so the model attaches to an existing incentive rather than creating a new one.</span></li>
<li>What exactly is the prediction target, and when is it made?</li>
<li>Why predict before discharge rather than at admission?</li>
<li>What intervention was the prediction supposed to trigger?</li>
<li>Why is a model that predicts accurately but changes no decision worthless here?</li>
<li>How did you define readmission — all-cause, or condition-specific?</li>
<li>How did you handle planned readmissions that should not count?</li>
<li>What is the prediction horizon and why 30 days rather than 7 or 90?</li>
<li>What were the exclusion criteria for the cohort?</li>
<li>Who were the users, and what did their workflow look like before?</li>
<li>How did you decide how many patients could realistically be flagged per day?</li>
<li>What would have made this project a failure even with good model metrics?</li>
</ol></div></details>

<details class="qb"><summary>2 · Modelling with XGBoost (12)</summary><div class="qb-body"><ol>
<li>Why XGBoost rather than logistic regression or a neural network?</li>
<li>How does gradient boosting actually work, in your own words?</li>
<li>What is the difference between bagging and boosting?</li>
<li>Which hyperparameters mattered most and how did you tune them?</li>
<li>What does <code>max_depth</code> control and what happens when it is too high?</li>
<li>How did early stopping work in your setup, and on which set?<span class="hint">On a validation set separate from test — using test for early stopping quietly leaks and inflates the reported number.</span></li>
<li>How does XGBoost handle missing values natively, and why does that matter for EHR data?</li>
<li>What is regularisation in XGBoost and which terms did you use?</li>
<li>How did you handle class imbalance in readmission prediction?</li>
<li>Did you use <code>scale_pos_weight</code>, and what does it do?</li>
<li>How did you check the model was not just learning length of stay?</li>
<li>What would you try next to improve beyond 0.87 AUC?</li>
</ol></div></details>

<details class="qb"><summary>3 · Metrics and validation (12)</summary><div class="qb-body"><ol>
<li>What does an AUC-ROC of 0.87 actually mean?<span class="hint">Given one readmitted and one non-readmitted patient at random, the model ranks the readmitted one higher 87% of the time. Say it this way, not "87% accurate".</span></li>
<li>Why AUC-ROC rather than accuracy?</li>
<li>Should you have reported PR AUC instead, given the imbalance?</li>
<li>What is calibration and why does a clinician need a calibrated probability?</li>
<li>How did you check calibration, and what did you do if it was off?</li>
<li>How did you choose the operating threshold?</li>
<li>What is number needed to treat and how does it connect to your threshold?</li>
<li>How did you split the data — random, temporal, or by hospital site?</li>
<li>Why is a random split dangerous with longitudinal patient data?</li>
<li>How did you prevent the same patient appearing in both train and test?</li>
<li>How did you validate across hospital sites with different populations?</li>
<li>What is external validation and did the model ever get it?</li>
</ol></div></details>

<details class="qb"><summary>4 · Data engineering with PySpark and Databricks (12)</summary><div class="qb-body"><ol>
<li>What made feature generation slow before, and what changed to make it 60% faster?</li>
<li>What is a Spark shuffle and why is it expensive?</li>
<li>How did you handle data skew — a few patients with enormous record counts?</li>
<li>What is the difference between a narrow and a wide transformation?</li>
<li>When did you cache or persist, and when is that a mistake?</li>
<li>How did you partition the data, and by what key?</li>
<li>What file format did you write, and why does columnar storage matter here?</li>
<li>How did you make the daily refresh idempotent and safely re-runnable?</li>
<li>How did you handle late-arriving lab results?</li>
<li>What is point-in-time correctness and how did you enforce it for vitals?<span class="hint">The single biggest leakage risk in clinical ML — using a lab value recorded after the discharge decision.</span></li>
<li>How did you validate the pipeline output was correct, not just complete?</li>
<li>What did you monitor on the pipeline itself?</li>
</ol></div></details>

<details class="qb"><summary>5 · Clinical NLP — spaCy and BioBERT (12)</summary><div class="qb-body"><ol>
<li>What is BioBERT and how does it differ from BERT?</li>
<li>Why does biomedical pretraining matter for clinical text?</li>
<li>What is named entity recognition and what entities did you extract?</li>
<li>How did you handle negation — "no evidence of pneumonia" must not become a pneumonia label?<span class="hint">Negation detection is the first thing that breaks in clinical NLP, and the reason naive keyword extraction fails badly.</span></li>
<li>How did you handle family history — "mother had diabetes" is not the patient's diagnosis?</li>
<li>How did you deal with abbreviations that mean different things in different specialties?</li>
<li>How did you map extracted entities to a standard vocabulary?</li>
<li>Why combine spaCy with BioBERT rather than using one alone?</li>
<li>How did you get labelled training data for clinical entities?</li>
<li>How did you measure the 35% improvement in structured coverage?</li>
<li>How did you evaluate NER quality — exact match or partial overlap?</li>
<li>What did extraction errors do downstream, and how did you contain them?</li>
</ol></div></details>

<details class="qb"><summary>6 · Deployment and integration (12)</summary><div class="qb-body"><ol>
<li>Why FastAPI rather than Flask or Django?</li>
<li>What did Docker solve for you in a hospital IT environment?</li>
<li>What does SageMaker manage that you would otherwise build?</li>
<li>What is HL7 and what is FHIR, and how do they differ?</li>
<li>How did the model receive patient data through the EHR interface?</li>
<li>What was your latency budget for real-time risk scoring, and why?</li>
<li>How did you handle a patient record arriving with missing required fields?</li>
<li>How did you version the API so hospital integrations did not break?</li>
<li>What happened when the model service was down — did clinical workflow stop?</li>
<li>How did you handle authentication and authorisation for the API?</li>
<li>How did you log requests without logging protected health information?</li>
<li>How did you deploy an update without disrupting a live hospital system?</li>
</ol></div></details>

<details class="qb"><summary>7 · Explainability and clinician adoption (12)</summary><div class="qb-body"><ol>
<li>Why did clinicians need explanations rather than just a risk score?</li>
<li>What did the SHAP dashboard actually show a physician?</li>
<li>How do you present a SHAP value to someone who has never seen one?</li>
<li>What is the difference between global and local explanation?</li>
<li>How did you avoid explanations that were technically correct but clinically meaningless?</li>
<li>What made physician adoption increase — the explanations, or something else?</li>
<li>How did you handle a clinician disagreeing with the model?<span class="hint">The right answer treats disagreement as signal to investigate, not as user error — and the clinician usually has context the model does not.</span></li>
<li>What is automation bias and how did you guard against it?</li>
<li>How do you present uncertainty to a clinician without being ignored?</li>
<li>Did explanations ever reveal a data problem rather than a clinical insight?</li>
<li>How did you decide which risk factors to surface and how many?</li>
<li>What would you change about the dashboard now?</li>
</ol></div></details>

<details class="qb"><summary>8 · Monitoring, drift, and MLOps (12)</summary><div class="qb-body"><ol>
<li>What is data drift and how does it differ from concept drift?</li>
<li>What did Evidently actually monitor, and at what cadence?</li>
<li>What statistical test detects a distribution shift in a feature?</li>
<li>How did you avoid alert fatigue from drift warnings that did not matter?</li>
<li>What triggered retraining, and was it automatic?</li>
<li>How do you retrain in a HIPAA-compliant way?</li>
<li>What did MLflow track, and how did that help months later?</li>
<li>How did Jenkins fit into the release process?</li>
<li>How did you cut release cycles from two weeks to three days — what was the bottleneck?</li>
<li>How did you validate a retrained model before it replaced the incumbent?</li>
<li>Could you roll back, and had you ever needed to?</li>
<li>What would page you at 3am, and what would you do?</li>
</ol></div></details>

<details class="qb"><summary>9 · Clinical evaluation and ethics (12)</summary><div class="qb-body"><ol>
<li>How was the A/B test designed, and what was randomised?</li>
<li>Is randomising patients into a "no model" arm ethical? How was that handled?</li>
<li>What does the 18% reduction in readmissions measure, and over what period?</li>
<li>How did you separate the model's effect from the intervention's effect?<span class="hint">The model only flags; the care team acts. A good answer acknowledges you measured the combined system, not the model alone.</span></li>
<li>What guardrail metrics did you watch during the pilot?</li>
<li>What is HIPAA and which parts constrained your design?</li>
<li>What is de-identification and what is the re-identification risk?</li>
<li>How did you check the model performed equitably across patient groups?</li>
<li>What happens if the model systematically under-flags an ethnic group?</li>
<li>How can historical care disparities become encoded in a readmission model?</li>
<li>Who is accountable if a flagged patient is missed and readmitted?</li>
<li>What documentation would a hospital review board require?</li>
</ol></div></details>

<details class="qb wi"><summary>10 · What if — data and population (10)</summary><div class="qb-body"><ol>
<li>What if the hospital changed its EHR vendor?</li>
<li>What if ICD-10 codes were replaced by ICD-11?</li>
<li>What if a new clinical protocol changed what discharge means?</li>
<li>What if a pandemic changed the patient population entirely?</li>
<li>What if physician notes stopped being dictated and became structured forms?</li>
<li>What if you had to deploy to a hospital with a quarter of the data volume?</li>
<li>What if lab results arrived hours after the discharge decision?</li>
<li>What if 30% of records had missing vitals?</li>
<li>What if you discovered readmission labels were undercounted because patients went to other hospitals?</li>
<li>What if you had to build this for paediatrics instead of adults?</li>
</ol></div></details>

<details class="qb wi"><summary>11 · What if — model and production (10)</summary><div class="qb-body"><ol>
<li>What if AUC held at 0.87 but clinicians stopped trusting the model?</li>
<li>What if the model flagged twice as many patients as the care team could handle?</li>
<li>What if the NLP pipeline started mis-extracting one medication class?</li>
<li>What if drift monitoring alerted every day for a month?</li>
<li>What if a retrained model was worse but passed automated validation?</li>
<li>What if the SageMaker endpoint hit its latency limit during morning rounds?</li>
<li>What if a bug caused the API to return the previous patient's score?</li>
<li>What if a clinician acted on an explanation that turned out to be an artefact?</li>
<li>What if the model performed well in the pilot ward and badly hospital-wide?</li>
<li>What if legal asked you to delete a patient's data from the training set?<span class="hint">This is genuinely hard — deletion from a dataset does not remove the influence from an already-trained model, so the honest answer involves retraining.</span></li>
</ol></div></details>

<details class="qb wi"><summary>12 · What if — design alternatives (8)</summary><div class="qb-body"><ol>
<li>What if you could only use a model a clinician could compute by hand?</li>
<li>What if you had no access to physician notes at all?</li>
<li>What if you had to run entirely on-premises with no cloud?</li>
<li>What if the hospital wanted continuous risk updates rather than one score at discharge?</li>
<li>What if you replaced XGBoost with a large language model over the whole record?</li>
<li>What if you had to serve ten hospitals with different populations from one model?</li>
<li>What if the goal changed from prediction to recommending a specific intervention?</li>
<li>What if you had unlimited data but no labels?</li>
</ol></div></details>

</div>
</details>

<details class="ip-sec" id="glossary" open>
<summary>Glossary</summary>
<div class="ip-sec-body">

<table class="gloss">
<thead><tr><th>Term</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>EHR</td><td>Electronic Health Record — the digital record of a patient's care: demographics, diagnoses, labs, vitals, medications, notes.</td></tr>
<tr><td>30-day readmission</td><td>A patient returning to hospital within 30 days of discharge. A standard quality measure, often financially penalised.</td></tr>
<tr><td>Planned readmission</td><td>A scheduled return, such as staged surgery. Usually excluded, since it is not a care failure.</td></tr>
<tr><td>Prediction horizon</td><td>How far ahead the model predicts. Shorter is easier and often less actionable.</td></tr>
<tr><td>Cohort / exclusion criteria</td><td>Which patients are in scope, and which are deliberately removed — deaths, transfers, planned returns.</td></tr>
<tr><td>ICD-10</td><td>International Classification of Diseases, 10th revision — the standard diagnosis coding system.</td></tr>
<tr><td>Vitals</td><td>Routine physiological measurements: heart rate, blood pressure, temperature, respiratory rate, oxygen saturation.</td></tr>
<tr><td>Comorbidity</td><td>An additional condition present alongside the primary one. A major driver of readmission risk.</td></tr>
<tr><td>Length of stay</td><td>Days between admission and discharge. Predictive, but risky as a feature because it can encode the outcome.</td></tr>
<tr><td>XGBoost</td><td>Gradient-boosted decision trees with regularisation — the strong default for tabular data.</td></tr>
<tr><td>Gradient boosting</td><td>Building trees sequentially, each fitted to the errors the ensemble has made so far.</td></tr>
<tr><td>Bagging vs boosting</td><td>Bagging trains models independently on resamples and averages (random forest); boosting trains them in sequence, each correcting the last.</td></tr>
<tr><td>max_depth</td><td>Maximum tree depth. Higher means more interaction capacity and more overfitting risk.</td></tr>
<tr><td>Early stopping</td><td>Halting training when validation performance stops improving. Must use a set separate from the test set.</td></tr>
<tr><td>scale_pos_weight</td><td>An XGBoost parameter weighting the positive class to counter imbalance.</td></tr>
<tr><td>Regularisation</td><td>Penalties (L1, L2, minimum child weight) constraining the model so it generalises rather than memorises.</td></tr>
<tr><td>AUC-ROC</td><td>The probability the model ranks a random positive above a random negative. 0.5 is chance; 0.87 is a strong ranker.</td></tr>
<tr><td>PR AUC</td><td>Area under precision-recall. More informative than ROC when positives are rare.</td></tr>
<tr><td>Calibration</td><td>Whether predicted probabilities match observed frequencies. Essential when a clinician reads the number as a risk.</td></tr>
<tr><td>Operating threshold</td><td>The score above which a patient is flagged. Set by capacity and cost, not by the model.</td></tr>
<tr><td>Number needed to treat</td><td>How many patients must receive an intervention for one to benefit. Connects a threshold to clinical value.</td></tr>
<tr><td>Temporal split</td><td>Training on earlier data and testing on later, so evaluation reflects real deployment order.</td></tr>
<tr><td>Grouped split</td><td>Keeping all records for one patient in the same fold, so the model cannot memorise individuals.</td></tr>
<tr><td>External validation</td><td>Testing on data from a different hospital or system — the real test of generalisation.</td></tr>
<tr><td>Data leakage</td><td>Information in training features that would not be available at prediction time. Inflates offline scores and collapses in production.</td></tr>
<tr><td>Point-in-time correctness</td><td>Building each training row from only what was known at that moment.</td></tr>
<tr><td>PySpark</td><td>Python API for Apache Spark, distributing computation over a cluster.</td></tr>
<tr><td>Databricks</td><td>A managed platform for Spark with notebooks, job scheduling, and Delta Lake storage.</td></tr>
<tr><td>Shuffle</td><td>Redistributing data across the cluster for joins or aggregations — the expensive part of most Spark jobs.</td></tr>
<tr><td>Narrow vs wide transformation</td><td>Narrow operations act within a partition (map, filter); wide ones require a shuffle (groupBy, join).</td></tr>
<tr><td>Data skew</td><td>A few keys holding far more data than others, so one task runs long after the rest finish.</td></tr>
<tr><td>Caching / persist</td><td>Keeping a computed DataFrame in memory for reuse. Wasteful if the data is used once or does not fit.</td></tr>
<tr><td>Columnar format</td><td>Storage such as Parquet where a query reads only the columns it needs.</td></tr>
<tr><td>Idempotent pipeline</td><td>Re-running produces the same result rather than duplicating rows — essential for safe backfills.</td></tr>
<tr><td>spaCy</td><td>A fast production NLP library: tokenisation, POS tagging, dependency parsing, and named entity recognition.</td></tr>
<tr><td>BERT</td><td>A bidirectional transformer encoder pretrained by predicting masked tokens from surrounding context.</td></tr>
<tr><td>BioBERT</td><td>BERT further pretrained on biomedical literature, so clinical vocabulary and usage are already represented.</td></tr>
<tr><td>Domain pretraining</td><td>Continuing pretraining on in-domain text before fine-tuning. Large gains where general text differs from the target domain.</td></tr>
<tr><td>NER</td><td>Named Entity Recognition — labelling spans of text as entities such as medication, symptom, or diagnosis.</td></tr>
<tr><td>Negation detection</td><td>Recognising that "no evidence of pneumonia" asserts absence. Skipping it produces confidently wrong extractions.</td></tr>
<tr><td>Family history attribution</td><td>Distinguishing a relative's condition from the patient's. Another classic clinical NLP failure.</td></tr>
<tr><td>Clinical vocabulary mapping</td><td>Normalising extracted text to a standard terminology such as SNOMED CT or RxNorm so downstream systems agree.</td></tr>
<tr><td>Partial-match evaluation</td><td>Scoring NER by span overlap rather than exact boundaries — often the fairer measure for clinical text.</td></tr>
<tr><td>FastAPI</td><td>A Python web framework deriving validation and OpenAPI docs from type hints, serving requests asynchronously.</td></tr>
<tr><td>Docker</td><td>Packages an application with its dependencies into an image that runs identically across environments.</td></tr>
<tr><td>SageMaker</td><td>AWS's managed ML platform — training jobs, model registry, and autoscaling inference endpoints.</td></tr>
<tr><td>HL7</td><td>Health Level Seven — the long-standing messaging standard for exchanging clinical data between hospital systems.</td></tr>
<tr><td>FHIR</td><td>Fast Healthcare Interoperability Resources — the modern HL7 standard, REST and JSON based, organised around resources like Patient and Observation.</td></tr>
<tr><td>Real-time risk scoring</td><td>Producing a score on demand within a clinical workflow, rather than as an overnight batch.</td></tr>
<tr><td>PHI</td><td>Protected Health Information — identifiable health data. Governs what may be logged, stored, or transmitted.</td></tr>
<tr><td>HIPAA</td><td>US legislation governing the privacy and security of protected health information, including access control and audit.</td></tr>
<tr><td>De-identification</td><td>Removing identifiers so data is no longer legally protected. Never perfectly reversible-proof — re-identification risk remains.</td></tr>
<tr><td>SHAP</td><td>Attributes a prediction to its features using a fair, additive game-theoretic allocation.</td></tr>
<tr><td>Global vs local explanation</td><td>Global describes the model's overall behaviour; local explains one specific prediction. Clinicians need local.</td></tr>
<tr><td>Automation bias</td><td>The tendency to defer to an automated recommendation even when your own judgment disagrees.</td></tr>
<tr><td>Data drift</td><td>The input distribution changing over time — new coding practice, different case mix.</td></tr>
<tr><td>Concept drift</td><td>The relationship between features and outcome changing, so a once-accurate model decays.</td></tr>
<tr><td>Evidently AI</td><td>An open-source library for monitoring data quality, drift, and model performance with prebuilt reports.</td></tr>
<tr><td>Kolmogorov-Smirnov / PSI</td><td>Statistical tests commonly used to flag distribution shift in a feature between reference and current data.</td></tr>
<tr><td>Alert fatigue</td><td>So many alerts that real ones are ignored. A monitoring design failure, not a user failure.</td></tr>
<tr><td>MLflow</td><td>Tracks experiment parameters, metrics, and artefacts, with a registry for versioned models.</td></tr>
<tr><td>Jenkins</td><td>An automation server running build, test, and deployment pipelines.</td></tr>
<tr><td>Guardrail metric</td><td>A secondary metric watched during an experiment to catch harm the primary metric would hide.</td></tr>
<tr><td>Equity evaluation</td><td>Checking performance separately across demographic groups rather than trusting an aggregate number.</td></tr>
<tr><td>Historical bias</td><td>Past inequity encoded in the data — if a group historically received less follow-up, the labels reflect that, not their true risk.</td></tr>
</tbody>
</table>

</div>
</details>

<p class="ip-foot">Back to <a href="/projects/">all projects</a>.</p>

</div>
