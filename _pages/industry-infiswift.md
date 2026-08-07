---
title: "Document Intelligence &amp; Edge Inference — Infiswift.ai"
permalink: /projects/industry/infiswift/
layout: single
author_profile: true
---

{% include base_path %}
{% include qbank-style.html %}

<div class="ip">

<p class="ip-deck">Consolidating fragmented ML repositories into one inference API, building a content-aware document validation agent on Vertex AI Gemini with LangChain and LangGraph, and shipping wake-word models to edge hardware through ONNX and TensorRT.</p>
<p class="ip-meta">AI Engineer · Infiswift.ai, California · Nov 2025 – Present</p>

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
<li><strong>Modular NLP extraction API</strong> — consolidated multiple machine learning repositories into a unified inference pipeline, eliminating duplicate LLM workflows and improving maintainability across engineering teams.</li>
<li><strong>Content-aware document validation agent</strong> — built with Vertex AI Gemini, LangChain, and LangGraph to classify uploaded RFI documents by their actual content, reducing downstream failures caused by incorrect file categorisation.</li>
<li><strong>Centralised FileType glossary injection</strong> — a mechanism for injecting business rules into LLM prompts, enabling instant rule updates without model retraining and keeping classification consistent across environments.</li>
<li><strong>Self-learning classification framework</strong> — automatically generated and validated regex patterns from newly identified document titles, expanding deterministic coverage while minimising manual rule creation.</li>
<li><strong>AWS serverless orchestration pipeline</strong> — Lambda, SQS FIFO, and Amazon S3 managing automated rule promotion, deduplication, version control, and deployment across Development, Preview, and Production.</li>
<li><strong>Wake-word detection optimisation</strong> — multi-layer perceptron architectures over Mel-spectrogram features, exported through ONNX and TensorRT for low-latency edge inference driving robotic arm control.</li>
<li><strong>Testing and evaluation frameworks</strong> — PyTest and Moto to validate AI workflows, cloud integrations, and model behaviour, improving deployment reliability and reducing regression risk.</li>
<li><strong>LLM evaluation and A/B testing</strong> — iterative evaluation across production projects, analysing model agreement and reasoning quality to identify classification gaps and refine prompt strategies.</li>
</ul>

</div>
</details>

<details class="ip-sec" id="arch" open>
<summary>Architecture</summary>
<div class="ip-sec-body">

<figure class="fig">
<svg class="dgm" viewBox="0 0 520 210" aria-label="Document validation and rule promotion pipeline">
<rect class="b" x="6" y="20" width="82" height="34" rx="4"/><text class="ts" x="47" y="34">upload</text><text class="ts" x="47" y="46">RFI document</text>
<path class="a" d="M90 37 H112"/>
<rect class="b" x="114" y="20" width="92" height="34" rx="4"/><text class="ts" x="160" y="34">extraction API</text><text class="ts" x="160" y="46">unified pipeline</text>
<path class="a" d="M208 37 H230"/>
<rect class="b4" x="232" y="10" width="110" height="54" rx="4"/><text class="ts" x="287" y="27">LangGraph agent</text><text class="ts" x="287" y="40">Gemini · LangChain</text><text class="ts" x="287" y="53">content-aware</text>
<rect class="b3" x="232" y="80" width="110" height="30" rx="4"/><text class="ts" x="287" y="99">FileType glossary</text>
<path class="a" d="M287 78 V68"/><text class="ts" x="330" y="76">injected</text>
<path class="a" d="M344 37 H366"/>
<rect class="b" x="368" y="20" width="88" height="34" rx="4"/><text class="ts" x="412" y="34">classification</text><text class="ts" x="412" y="46">+ confidence</text>
<path class="dl" d="M412 56 V96"/>
<rect class="b2" x="352" y="98" width="120" height="34" rx="4"/><text class="ts" x="412" y="112">self-learning</text><text class="ts" x="412" y="124">regex generation</text>
<path class="a" d="M350 115 H344"/>
<rect class="bg" x="150" y="148" width="240" height="42" rx="4"/>
<text class="ts" x="270" y="164">Lambda · SQS FIFO · S3</text>
<text class="ts" x="270" y="178">dev → preview → production promotion</text>
<path class="a" d="M412 134 V146"/>
<path class="dl" d="M150 169 H120 V115 H230"/><text class="ts" x="118" y="200">promoted rules feed back as deterministic matches</text>
</svg>
<figcaption>Two paths run side by side: an LLM classifies what regex cannot, and confirmed patterns are promoted into deterministic rules so the expensive path is used less over time.</figcaption>
</figure>

</div>
</details>

<details class="ip-sec" id="specs" open>
<summary>Technical specifications</summary>
<div class="ip-sec-body">

<table class="ip-spec">
<tr><td>LLM &amp; platform</td><td>Vertex AI Gemini on Google Cloud</td></tr>
<tr><td>Orchestration</td><td>LangChain for components, LangGraph for stateful agent control flow</td></tr>
<tr><td>Rule injection</td><td>Centralised FileType glossary injected into prompts at request time</td></tr>
<tr><td>Deterministic layer</td><td>Auto-generated, validated regex patterns from observed document titles</td></tr>
<tr><td>Cloud pipeline</td><td>AWS Lambda, SQS FIFO queues, Amazon S3</td></tr>
<tr><td>Environments</td><td>Development → Preview → Production, with version control on rules</td></tr>
<tr><td>Edge model</td><td>MLP over Mel-spectrogram features for wake-word detection</td></tr>
<tr><td>Edge runtime</td><td>ONNX export, TensorRT optimisation, low-latency inference for robotic arm control</td></tr>
<tr><td>Testing</td><td>PyTest for logic, Moto for mocked AWS services</td></tr>
<tr><td>Evaluation</td><td>LLM evaluation with A/B testing, model agreement and reasoning-quality analysis</td></tr>
</table>

</div>
</details>

<details class="ip-sec" id="questions" open>
<summary>Interview questions <span class="qb-count">132 questions</span></summary>
<div class="ip-sec-body">

<p class="qb-intro">Grouped by what an interviewer is probing. The "what if" sections are the ones that separate a rehearsed answer from real understanding — they change one variable and see whether your reasoning survives. Terms used here are defined in the <a href="#glossary">glossary</a>.</p>

<details class="qb"><summary>1 · Framing and scope (10)</summary><div class="qb-body"><ol>
<li>What problem was the document validation agent actually solving, in business terms?</li>
<li>What was breaking downstream when files were categorised incorrectly?<span class="hint">Name the concrete failure, not "errors" — wrong extraction schema applied, wasted LLM spend, bad data landing in the warehouse.</span></li>
<li>Why was content-aware classification necessary rather than trusting filenames or MIME types?</li>
<li>How did you decide what counted as a correct classification?</li>
<li>Who were the users of this system, and what did they experience before it existed?</li>
<li>What did "consolidating multiple ML repositories" mean concretely — what was duplicated?</li>
<li>How did you decide which repositories to merge and which to leave alone?</li>
<li>What was the cost of the duplication you removed — engineering time, compute, or correctness?</li>
<li>How did you avoid the consolidated API becoming a bottleneck that every team had to queue behind?</li>
<li>If you started this project again, what would you scope differently?</li>
</ol></div></details>

<details class="qb"><summary>2 · LLM application design — LangChain and LangGraph (12)</summary><div class="qb-body"><ol>
<li>Why LangGraph rather than a plain LangChain chain?<span class="hint">The honest answer is state and branching — a document that fails validation needs to route differently, which a linear chain cannot express cleanly.</span></li>
<li>What state did your graph carry between nodes?</li>
<li>Where were the conditional edges in your graph, and what decided them?</li>
<li>How did you prevent the agent from looping indefinitely?</li>
<li>What did a node failure do — retry, route to a fallback, or fail the request?</li>
<li>Why use a framework at all rather than calling the model API directly?</li>
<li>What did LangChain give you that you would otherwise have written yourself?</li>
<li>How did you handle the model returning malformed or unparseable output?</li>
<li>Did you use structured outputs or schema enforcement? What happens when the schema is violated?</li>
<li>How did you manage prompt versioning across environments?</li>
<li>How much of the latency was model time versus orchestration overhead?</li>
<li>What would make you drop the framework and hand-roll the loop?</li>
</ol></div></details>

<details class="qb"><summary>3 · The FileType glossary injection mechanism (10)</summary><div class="qb-body"><ol>
<li>Explain the glossary injection mechanism to someone who has never seen it.</li>
<li>Why inject business rules into the prompt instead of fine-tuning the model on them?<span class="hint">Rules change weekly; retraining does not. This is the core argument and it is about change frequency, not model capability.</span></li>
<li>What exactly gets injected — definitions, examples, or both?</li>
<li>How did you keep the glossary from growing until it consumed the context window?</li>
<li>How did you guarantee the same glossary version was used across Development, Preview, and Production?</li>
<li>What happens to prompt caching when the glossary changes?</li>
<li>How did you validate that a glossary change improved rather than degraded classification?</li>
<li>Who owned the glossary — engineering or the business?</li>
<li>How did you prevent a bad glossary edit from reaching production?</li>
<li>At what glossary size would this approach stop working, and what would replace it?</li>
</ol></div></details>

<details class="qb"><summary>4 · The self-learning regex framework (12)</summary><div class="qb-body"><ol>
<li>Walk me through how a new regex pattern gets generated, validated, and promoted.</li>
<li>What generated the candidate pattern — the LLM, a heuristic, or both?</li>
<li>How did you validate a generated regex before trusting it?<span class="hint">The interesting part is the negative set: a pattern that matches everything scores perfectly on positives.</span></li>
<li>How did you prevent an over-broad pattern such as <code>.*</code> from being promoted?</li>
<li>How did you handle two patterns that both match the same document?</li>
<li>What was the precision requirement for promotion, and how was it chosen?</li>
<li>Why prefer deterministic regex over letting the LLM classify every document?</li>
<li>How much traffic ended up served by regex versus the model?</li>
<li>How did you retire a pattern that started performing badly?</li>
<li>What stops this system from slowly drifting into a thicket of unmaintainable rules?</li>
<li>How is this different from just fine-tuning a classifier on the same data?</li>
<li>How did you catch a regex with catastrophic backtracking before it reached production?</li>
</ol></div></details>

<details class="qb"><summary>5 · AWS serverless orchestration (12)</summary><div class="qb-body"><ol>
<li>Why SQS FIFO rather than a standard queue?<span class="hint">Ordering and deduplication. Rule promotion is a state machine — applying version 3 before version 2 corrupts it.</span></li>
<li>What is a message group ID and how did you choose yours?</li>
<li>What throughput ceiling does FIFO impose, and did you ever hit it?</li>
<li>How did you make the Lambda consumers idempotent?</li>
<li>What happens when a Lambda times out halfway through a promotion?</li>
<li>Where did you use a dead-letter queue, and what did you do with the messages in it?</li>
<li>How did S3 fit — storage of what, exactly, and with what key structure?</li>
<li>How did you version rules, and could you roll back?</li>
<li>How did promotion across Development, Preview, and Production actually work?</li>
<li>What prevented a rule from skipping an environment?</li>
<li>How did you handle Lambda cold starts on this path?</li>
<li>Why serverless rather than a long-running service?</li>
</ol></div></details>

<details class="qb"><summary>6 · Wake-word detection and audio ML (12)</summary><div class="qb-body"><ol>
<li>What is a Mel-spectrogram, and why use it instead of the raw waveform?<span class="hint">Mel spacing matches human pitch perception, and it turns a 1-D signal into a 2-D representation a small network can consume cheaply.</span></li>
<li>What were your window size, hop length, and number of Mel bands, and how did those choices affect latency?</li>
<li>Why an MLP rather than a CNN or an RNN for wake-word detection?</li>
<li>What is the input dimensionality of your MLP and how did you arrive at it?</li>
<li>How do you handle variable-length audio with a fixed-size MLP input?</li>
<li>What is your false-accept versus false-reject tradeoff, and who decided it?</li>
<li>How did you collect and label training data for the wake word?</li>
<li>How did you handle background noise, accents, and distance from the microphone?</li>
<li>What is the streaming inference setup — sliding window, and at what stride?</li>
<li>How did you measure end-to-end latency from utterance to robot action?</li>
<li>What happens when two wake words overlap or the phrase is cut off?</li>
<li>Why does a false accept matter more when the output controls a robotic arm?</li>
</ol></div></details>

<details class="qb"><summary>7 · Model optimisation and edge inference (12)</summary><div class="qb-body"><ol>
<li>Why export to ONNX at all — what does it buy you?</li>
<li>What is ONNX, and what does the exported graph actually contain?</li>
<li>What does TensorRT do to the model that ONNX Runtime does not?<span class="hint">Layer fusion, kernel autotuning for the specific GPU, and precision calibration — it compiles rather than interprets.</span></li>
<li>What precision did you run at, and how did you verify accuracy was preserved?</li>
<li>What is a calibration dataset and why does INT8 quantisation need one?</li>
<li>How did you validate that the ONNX model matched the PyTorch model numerically?</li>
<li>What broke during export, and how did you diagnose it?</li>
<li>What are dynamic axes in an ONNX export and when do you need them?</li>
<li>How did you measure latency — mean, p99, or worst case, and why?</li>
<li>How much of the latency was model inference versus feature extraction?</li>
<li>What is the memory footprint on the edge device, and was that a constraint?</li>
<li>Why is a TensorRT engine not portable between GPU models?</li>
</ol></div></details>

<details class="qb"><summary>8 · Testing and reliability (10)</summary><div class="qb-body"><ol>
<li>What is Moto and why use it rather than hitting real AWS in tests?</li>
<li>What did you test with PyTest that was genuinely worth testing?</li>
<li>How do you test a component whose output is non-deterministic?<span class="hint">Test the contract, not the text — schema validity, required fields, latency bounds, and behaviour on malformed input.</span></li>
<li>How did you test the LangGraph agent's routing logic without calling the model?</li>
<li>What is a fixture and how did you use them here?</li>
<li>How did you test the SQS FIFO ordering guarantees?</li>
<li>What did your CI pipeline run on every commit?</li>
<li>How did you prevent flaky tests from eroding trust in the suite?</li>
<li>What regression escaped your tests, and what did you add afterwards?</li>
<li>What is the difference between mocking the model and mocking the cloud service, in terms of what each protects you from?</li>
</ol></div></details>

<details class="qb"><summary>9 · LLM evaluation and A/B testing (12)</summary><div class="qb-body"><ol>
<li>How did you build the evaluation set, and how big was it?</li>
<li>What metrics did you use for classification quality, and why those?</li>
<li>What does "model agreement" mean and how did you measure it?<span class="hint">Agreement between models or between runs is a proxy for confidence — high disagreement flags the examples worth human review.</span></li>
<li>How did you evaluate reasoning quality rather than just the final label?</li>
<li>Did you use an LLM as a judge? What are the failure modes of that?</li>
<li>How did you decide a prompt change was an improvement rather than noise?</li>
<li>How did you run an A/B test on an LLM feature — what was randomised?</li>
<li>What sample size did you need to detect the effect you cared about?</li>
<li>What guardrail metrics did you watch to be sure you were not trading quality for speed?</li>
<li>How did you identify classification gaps from the evaluation results?</li>
<li>How did you stop evaluation set contamination once you started tuning against it?</li>
<li>What did you do when offline evaluation and production behaviour disagreed?</li>
</ol></div></details>

<details class="qb wi"><summary>10 · What if — scale and load (10)</summary><div class="qb-body"><ol>
<li>What if document volume increased a hundredfold overnight?</li>
<li>What if the LLM provider had a partial outage for two hours during business hours?</li>
<li>What if per-document cost tripled because of a pricing change?</li>
<li>What if the FIFO queue's throughput limit became the bottleneck?</li>
<li>What if a single tenant submitted a million documents and starved everyone else?</li>
<li>What if the glossary grew to twenty thousand tokens?</li>
<li>What if you had to serve this synchronously with a two-second budget instead of asynchronously?</li>
<li>What if documents arrived as scanned images rather than text?</li>
<li>What if the same document was submitted a hundred times in a minute?</li>
<li>What if you needed to run entirely inside a customer's VPC with no internet access?</li>
</ol></div></details>

<details class="qb wi"><summary>11 · What if — correctness and failure (10)</summary><div class="qb-body"><ol>
<li>What if the model silently started misclassifying one document type after a provider model update?</li>
<li>What if a promoted regex began matching documents it should not?</li>
<li>What if the glossary and the regex layer disagreed on a document?</li>
<li>What if a customer disputed a classification and you had to explain it?<span class="hint">This is really about traceability — can you reconstruct which glossary version, which prompt, and which rule produced that answer?</span></li>
<li>What if the LLM leaked content from one document into the classification of another?</li>
<li>What if someone embedded instructions inside a document to manipulate the classifier?</li>
<li>What if the wake-word model started firing on background speech in a noisy factory?</li>
<li>What if the TensorRT engine produced different results from the PyTorch model in production?</li>
<li>What if a rule promotion was applied to Production but not Preview?</li>
<li>What if you discovered the evaluation set itself was mislabelled?</li>
</ol></div></details>

<details class="qb wi"><summary>12 · What if — design alternatives (10)</summary><div class="qb-body"><ol>
<li>What if you had to remove the LLM entirely — how far could deterministic rules take you?</li>
<li>What if you fine-tuned a small classifier instead of prompting a large model?</li>
<li>What if you had to switch from Gemini to a different provider next month?</li>
<li>What if the business wanted a confidence score on every classification?</li>
<li>What if you had to support fifty document types instead of a handful?</li>
<li>What if latency mattered more than accuracy?</li>
<li>What if you had no labelled data at all when you started?</li>
<li>What if the wake-word model had to run on a microcontroller instead of a Jetson-class device?</li>
<li>What if you had to make the whole pipeline auditable for a regulated customer?</li>
<li>What if you had unlimited budget — what would you actually change?<span class="hint">A good answer names something other than "a bigger model", because the bottleneck usually is not model capability.</span></li>
</ol></div></details>

</div>
</details>

<details class="ip-sec" id="glossary" open>
<summary>Glossary</summary>
<div class="ip-sec-body">

<table class="gloss">
<thead><tr><th>Term</th><th>What it means</th></tr></thead>
<tbody>
<tr><td>RFI</td><td>Request For Information — a formal document exchanged in construction and procurement asking for clarification. Here, the document type being classified.</td></tr>
<tr><td>Vertex AI</td><td>Google Cloud's managed machine learning platform, including hosted access to Gemini models.</td></tr>
<tr><td>Gemini</td><td>Google's multimodal model family, accepting text, images, audio, and video in one context.</td></tr>
<tr><td>LangChain</td><td>A framework of composable components — prompts, models, retrievers, output parsers — for building LLM applications.</td></tr>
<tr><td>LangGraph</td><td>Models an agent as an explicit state graph with nodes and conditional edges, so loops and branches are first-class rather than implicit.</td></tr>
<tr><td>Node / edge</td><td>In LangGraph, a node is a step (call a model, run a tool) and an edge is the transition between steps. A conditional edge chooses the next node at runtime.</td></tr>
<tr><td>State</td><td>The data carried between nodes of the graph — the document, partial results, retry counts, confidence.</td></tr>
<tr><td>Prompt injection</td><td>Text inside untrusted input that the model interprets as instructions. A real risk when the model reads customer documents.</td></tr>
<tr><td>Structured output</td><td>Constraining the model to emit JSON matching a schema, so downstream parsing cannot fail on free text.</td></tr>
<tr><td>Prompt caching</td><td>Reusing the processed form of a stable prompt prefix across requests. Cheap and fast — but a prefix match, so changing the glossary early in the prompt invalidates it.</td></tr>
<tr><td>Context window</td><td>The maximum number of tokens a model can attend to at once. The glossary competes with the document for this budget.</td></tr>
<tr><td>Regex</td><td>Regular expression — a pattern language for matching text. Deterministic, fast, and free compared with a model call.</td></tr>
<tr><td>Catastrophic backtracking</td><td>A regex whose evaluation time explodes exponentially on certain inputs, effectively hanging the process. A denial-of-service risk from a badly written pattern.</td></tr>
<tr><td>Precision / recall</td><td>Precision is the share of predicted positives that are correct; recall is the share of actual positives found. A promotion rule should demand high precision.</td></tr>
<tr><td>Negative set</td><td>Examples a pattern should <em>not</em> match. Without it, an over-broad pattern looks perfect.</td></tr>
<tr><td>Deterministic</td><td>Same input always produces the same output. Regex is deterministic; an LLM call generally is not.</td></tr>
<tr><td>AWS Lambda</td><td>Runs a function in response to an event with no server to manage, scaling automatically and billing per execution.</td></tr>
<tr><td>Cold start</td><td>The extra latency when a Lambda has to initialise a new execution environment before running your code.</td></tr>
<tr><td>SQS</td><td>Amazon's managed message queue, decoupling producers from consumers.</td></tr>
<tr><td>FIFO queue</td><td>A queue preserving strict order within a message group and deduplicating messages, giving exactly-once processing at lower throughput than a standard queue.</td></tr>
<tr><td>Message group ID</td><td>The key that defines an ordering scope in a FIFO queue. Messages in the same group are strictly ordered; different groups run in parallel.</td></tr>
<tr><td>Idempotency</td><td>Performing an operation twice has the same effect as once. Required because at-least-once delivery means retries will happen.</td></tr>
<tr><td>Dead-letter queue</td><td>Where messages go after repeated processing failures, so a poison message stops blocking the queue and becomes visible instead.</td></tr>
<tr><td>Amazon S3</td><td>Object storage addressed by key within buckets — effectively unlimited, highly durable, the usual home for artefacts and rule files.</td></tr>
<tr><td>Environment promotion</td><td>Moving a change through Development, then Preview, then Production, each acting as a gate.</td></tr>
<tr><td>Wake word</td><td>A short phrase that activates a device, detected by a small always-on model.</td></tr>
<tr><td>Mel-spectrogram</td><td>A time-frequency representation of audio with frequency bands spaced to match human pitch perception — the standard input for small speech models.</td></tr>
<tr><td>Window / hop length</td><td>How much audio each analysis frame covers, and how far the window advances each step. Together they set time resolution and latency.</td></tr>
<tr><td>MLP</td><td>Multilayer perceptron — fully connected layers with non-linear activations. Small, fast, and adequate for fixed-size feature inputs.</td></tr>
<tr><td>Sliding window inference</td><td>Running the model repeatedly over overlapping audio segments so a wake word is caught wherever it falls.</td></tr>
<tr><td>False accept / false reject</td><td>Triggering when the wake word was not said, versus missing it when it was. The costs are asymmetric and depend on what the device then does.</td></tr>
<tr><td>ONNX</td><td>An open format for representing a model as a portable computation graph, so it can run in runtimes other than the one that trained it.</td></tr>
<tr><td>Dynamic axes</td><td>Dimensions of an ONNX input marked as variable — typically batch size or sequence length — so one exported model serves many shapes.</td></tr>
<tr><td>TensorRT</td><td>NVIDIA's inference compiler. Fuses layers, calibrates precision, and selects kernels for a specific GPU, producing a fast but non-portable engine.</td></tr>
<tr><td>Layer fusion</td><td>Combining several operations into one kernel to avoid writing intermediate results to memory — usually the largest single inference win.</td></tr>
<tr><td>Quantisation</td><td>Running weights and activations at lower precision (INT8, FP8) for less memory and faster maths, at some accuracy cost.</td></tr>
<tr><td>Calibration dataset</td><td>A representative sample used to choose quantisation scales so the reduced precision range covers real activations.</td></tr>
<tr><td>Edge inference</td><td>Running the model on the device rather than in the cloud — lower latency, no network dependency, tighter memory limits.</td></tr>
<tr><td>PyTest</td><td>Python's standard testing framework, built around plain functions and fixtures.</td></tr>
<tr><td>Fixture</td><td>Reusable setup shared across tests — a client, a temporary bucket, a sample document.</td></tr>
<tr><td>Moto</td><td>A library that mocks AWS services in-process, so tests exercise S3 and SQS logic without network calls, credentials, or cost.</td></tr>
<tr><td>Regression test</td><td>A test that re-runs known cases on every change, catching a quality drop before users do.</td></tr>
<tr><td>LLM-as-judge</td><td>Using a model to score another model's output. Cheap and scalable, with known biases toward length, position, and its own style.</td></tr>
<tr><td>Model agreement</td><td>How often two models, or two runs, produce the same answer. Disagreement is a useful signal for which cases need human review.</td></tr>
<tr><td>Guardrail metric</td><td>A secondary metric watched during an experiment to catch damage the primary metric would hide — cost, latency, or refusal rate.</td></tr>
<tr><td>Evaluation contamination</td><td>Tuning against your evaluation set until the score stops measuring generalisation and starts measuring memorisation.</td></tr>
<tr><td>A/B test</td><td>Randomly assigning traffic between variants so the measured difference can be attributed to the change rather than to who received it.</td></tr>
</tbody>
</table>

</div>
</details>

<p class="ip-foot">Back to <a href="/projects/">all projects</a>.</p>

</div>
