---
title: "Technical Toolkit"
permalink: /toolkit/
layout: single
author_profile: true
---

<style>
.wordcloud {
  text-align: center;
  line-height: 2.4;
  padding: 1.4em 1em;
  margin-bottom: 2em;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  background: #fbfbfb;
}
.wordcloud span {
  display: inline-block;
  margin: 0 0.42em;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.wc-xl { font-size: 2.0rem; }
.wc-lg { font-size: 1.55rem; }
.wc-md { font-size: 1.25rem; }
.wc-sm { font-size: 1.05rem; }
.wc-xs { font-size: 0.9rem; font-weight: 500; }
.wc-a { color: #b83227; }
.wc-b { color: #1f6f8b; }
.wc-c { color: #4a6741; }
.wc-d { color: #6b4a8b; }
.wc-e { color: #8a6d1f; }
.wc-f { color: #555f6b; }
.toolkit h2 { margin-top: 1.8em; }
.toolkit p { margin-bottom: 0.85em; }
@media (prefers-color-scheme: dark) {
  .wordcloud { background: #1e1f22; border-color: #34363a; }
  .wc-a { color: #f08a7d; } .wc-b { color: #7fc4dd; } .wc-c { color: #9dc48f; }
  .wc-d { color: #c1a3dd; } .wc-e { color: #d9bd6b; } .wc-f { color: #aab4c0; }
}
</style>

A working glossary of the areas, systems, and tools I build with — spanning model efficiency, agentic LLM systems, retrieval, data engineering, and the platform work that keeps all of it running in production.

<div class="wordcloud">
<span class="wc-lg wc-b">RAG Pipelines</span>
<span class="wc-sm wc-e">Model Distillation</span>
<span class="wc-xl wc-a">Vector Databases</span>
<span class="wc-md wc-c">Quantization</span>
<span class="wc-sm wc-f">JAX</span>
<span class="wc-lg wc-d">Agent Workflows</span>
<span class="wc-xs wc-b">Pruning</span>
<span class="wc-md wc-e">PostgreSQL</span>
<span class="wc-sm wc-c">Distributed Training</span>
<span class="wc-xl wc-b">LLM APIs</span>
<span class="wc-xs wc-f">Celery</span>
<span class="wc-md wc-a">MCP Servers</span>
<span class="wc-sm wc-d">Embeddings</span>
<span class="wc-lg wc-c">REST APIs</span>
<span class="wc-xs wc-e">Scala</span>
<span class="wc-md wc-f">Semantic Retrieval</span>
<span class="wc-sm wc-a">Low Latency Inference</span>
<span class="wc-lg wc-e">TypeScript</span>
<span class="wc-xs wc-c">Flask</span>
<span class="wc-md wc-d">RLHF</span>
<span class="wc-sm wc-b">Anomaly Detection</span>
<span class="wc-xl wc-c">MLOps</span>
<span class="wc-xs wc-a">Prometheus</span>
<span class="wc-md wc-b">Terraform</span>
<span class="wc-sm wc-e">Golang</span>
<span class="wc-lg wc-a">Human in the Loop</span>
<span class="wc-xs wc-d">Jenkins</span>
<span class="wc-md wc-c">ETL Pipelines</span>
<span class="wc-sm wc-f">GraphQL</span>
<span class="wc-lg wc-d">Hallucination Mitigation</span>
<span class="wc-xs wc-b">SciPy</span>
<span class="wc-md wc-e">Time Series Modelling</span>
<span class="wc-sm wc-c">OAuth</span>
<span class="wc-xl wc-e">Evaluation Frameworks</span>
<span class="wc-xs wc-f">Seaborn</span>
<span class="wc-md wc-a">Model Serving</span>
<span class="wc-sm wc-d">BigQuery</span>
<span class="wc-lg wc-b">Pandas</span>
<span class="wc-xs wc-c">n8n</span>
<span class="wc-md wc-f">Forecasting</span>
<span class="wc-sm wc-a">MongoDB</span>
<span class="wc-lg wc-c">GPU Optimization</span>
<span class="wc-xs wc-e">LlamaIndex</span>
<span class="wc-md wc-d">Multimodal Video Models</span>
<span class="wc-sm wc-b">CI/CD</span>
<span class="wc-xl wc-d">Agentic Patterns</span>
<span class="wc-xs wc-a">Ragas</span>
<span class="wc-md wc-b">Load Balancing</span>
<span class="wc-sm wc-e">NumPy</span>
<span class="wc-lg wc-f">AI Security</span>
<span class="wc-xs wc-c">Pub/Sub</span>
<span class="wc-md wc-e">Reinforcement Learning</span>
<span class="wc-sm wc-d">DynamoDB</span>
<span class="wc-lg wc-e">Platform Engineering</span>
<span class="wc-xs wc-b">WebSockets</span>
<span class="wc-md wc-c">Statistical Modelling</span>
<span class="wc-sm wc-f">Active Learning</span>
<span class="wc-md wc-a">Containerization</span>
<span class="wc-xs wc-d">LangSmith</span>
<span class="wc-sm wc-c">Text Classification</span>
<span class="wc-md wc-f">Data Cleaning</span>
<span class="wc-xs wc-e">Shell Scripting</span>
</div>

<div class="toolkit" markdown="1">

Model Optimization and Efficient Inference
======

**Model Distillation.** Distillation trains a compact student model to reproduce the behaviour of a much larger teacher, transferring capability without transferring parameter count. It is the practical route to keeping accuracy close to a frontier model while cutting serving cost and latency by an order of magnitude.

**Model Quantization.** Quantization reduces the numeric precision of weights and activations — FP32 down to INT8 or 4-bit — so a model occupies less memory and executes faster on the same hardware. The engineering work is in choosing the scheme and calibration set so the accuracy loss stays within an acceptable budget.

**Model Pruning.** Pruning removes weights, channels, or attention heads that contribute little to the output, producing a sparser network that is cheaper to store and run. Structured pruning is usually preferred over unstructured because it yields speedups on real accelerators rather than only on paper.

**Distributed Training.** Distributed training splits a workload across many GPUs or nodes using data, tensor, pipeline, or fully-sharded parallelism so models larger than a single device can be trained. The hard part is rarely the math — it is gradient synchronization, interconnect bandwidth, and keeping every worker fed.

**GPU Optimization.** GPU optimization is the work of raising utilization: kernel fusion, mixed precision, memory-layout choices, batch sizing, and eliminating host-device transfer stalls. Most training and inference jobs are memory-bandwidth-bound rather than compute-bound, and the wins come from finding out which.

**Performance Profiling.** Profiling instruments a system to show where time and memory actually go, rather than where they are assumed to go. It is the discipline that turns an optimization effort from guesswork into a ranked list of fixable bottlenecks.

**Low Latency Inference.** Low-latency inference is the set of techniques — batching strategy, KV-cache management, speculative decoding, quantized runtimes, warm pools — that push tail response time down to something interactive. Optimizing for p99 rather than mean latency is what separates a demo from a production service.

**Model Serving.** Model serving is the runtime layer that exposes trained models as reliable endpoints, handling batching, concurrency, versioning, and health. It is where model quality meets availability concerns, and both have to hold at once.

**Model Deployment and Scaling across AI Providers.** This is the practice of running the same workload across multiple model providers and hosting backends without rewriting the application each time. Provider abstraction, fallback routing, and cost-aware model selection are what make it survivable when one vendor degrades or reprices.

**JAX.** JAX is a numerical computing library built around composable transformations — automatic differentiation, vectorization, and JIT compilation to XLA. It suits research code that needs both mathematical transparency and accelerator-grade performance.


Agentic AI and LLM Systems
======

**LLM APIs.** LLM APIs are the request-response interfaces through which applications consume language models, covering streaming, tool calling, structured outputs, and token accounting. Building well against them means treating rate limits, retries, and context budgets as first-class design concerns rather than error handling.

**MCP Servers.** The Model Context Protocol standardizes how models discover and call external tools, resources, and prompts through a common server interface. It replaces one-off per-integration glue with a reusable contract, so the same tool server works across different agent hosts.

**Agent Workflows.** Agent workflows orchestrate a model through multi-step tasks where it plans, calls tools, observes results, and iterates toward a goal. The engineering emphasis falls on state management, termination conditions, and error recovery — the parts that decide whether an agent finishes or spirals.

**Agentic Patterns.** Agentic patterns are the reusable structures behind reliable agents: reflection, planner-executor splits, tool routing, multi-agent delegation, and evaluator-optimizer loops. Choosing the right pattern for a task matters more than raw model capability in most production systems.

**AgentCore.** AWS Bedrock AgentCore provides managed runtime, memory, identity, and gateway primitives for deploying agents at production scale. It handles session persistence and secure tool access so the application layer can focus on task logic.

**AWS Strands Agents.** Strands is a model-driven, open-source SDK for building agents where the model itself directs planning and tool use rather than a hardcoded control flow. It integrates with Bedrock and other providers and pairs naturally with MCP-defined tools.

**Operating LLMs in Production.** Running LLMs in production means owning cost per request, latency budgets, prompt and model versioning, output monitoring, and graceful degradation under load. Unlike deterministic services, correctness is statistical, so observability and evaluation have to be continuous rather than one-time.

**Hallucination Mitigation.** Hallucination mitigation reduces confidently wrong output through grounding in retrieved sources, citation enforcement, constrained decoding, verification passes, and abstention paths. No single technique eliminates it, so production systems layer several and measure the residual rate.

**Human in the Loop (HITL).** HITL design inserts human judgment at the points where automated confidence is lowest or the cost of error is highest — approvals, escalations, and review queues. Done well, it captures corrections as training and evaluation signal instead of discarding them.

**LlamaIndex.** LlamaIndex is a framework for connecting language models to private data through ingestion, indexing, retrieval, and query orchestration. It is most useful as scaffolding for RAG and agentic retrieval systems where the data layer is the hard part.

**n8n.** n8n is a source-available workflow automation platform that chains APIs, databases, and AI steps through a visual node graph. It is a fast way to prototype and operate agentic or ETL-style automations without standing up bespoke services for each one.


Retrieval and Vector Search
======

**Retrieval Systems.** Retrieval systems find the most relevant items from a large corpus given a query, and they are the foundation under search, recommendation, and RAG. Their quality is judged by ranking metrics rather than accuracy, which makes evaluation design as important as the index itself.

**Semantic Retrieval.** Semantic retrieval matches on meaning by embedding queries and documents into a shared vector space and comparing them by distance. It surfaces relevant results that share no literal terms with the query, at the cost of occasionally missing exact identifiers.

**Lexical Retrieval.** Lexical retrieval matches on terms using inverted indexes and scoring functions such as BM25. It remains unbeaten for exact keywords, codes, and rare entities — precisely the cases where embeddings tend to blur distinctions.

**Hybrid Vector Databases.** Hybrid systems run lexical and vector search together and fuse the results, typically through reciprocal rank fusion or a learned reranker. This combination consistently outperforms either method alone because their failure modes are largely uncorrelated.

**Vector Databases.** Vector databases store high-dimensional embeddings and serve approximate nearest-neighbour queries at low latency using index structures like HNSW or IVF. Beyond raw search they handle metadata filtering, namespace isolation, and incremental updates as the corpus changes.

**Embeddings.** Embeddings are dense numeric representations that place semantically similar inputs near one another in vector space. They are the common substrate for retrieval, clustering, deduplication, classification, and recommendation.

**RAG Pipelines.** A RAG pipeline grounds generation in retrieved context through chunking, embedding, retrieval, reranking, and prompt assembly. Most quality problems attributed to the model actually originate in the chunking and retrieval stages, which is where tuning pays off first.


Evaluation, Reliability, and Learning
======

**Automated Evaluation Frameworks.** Automated evaluation scores model and system output continuously against reference sets, rubrics, or LLM judges instead of relying on manual spot checks. It is what makes prompt, model, and retrieval changes comparable rather than anecdotal.

**Ragas.** Ragas is an evaluation library for RAG systems that scores dimensions such as faithfulness, answer relevance, and context precision. It converts vague reports of "bad answers" into per-component metrics that point at the actual failing stage.

**LangSmith.** LangSmith provides tracing, dataset management, and evaluation for LLM applications, capturing every step of a chain or agent run. The traces make non-deterministic failures reproducible enough to debug.

**Regression Testing Pipelines.** Regression pipelines re-run a fixed suite against every change to catch quality drops before they reach users. For AI systems the suite has to include behavioural and output-quality cases, since unit tests alone will not catch a degraded prompt or model.

**RLHF.** Reinforcement Learning from Human Feedback aligns model behaviour with human preferences by training a reward model on comparisons and optimizing the policy against it. It is the mechanism that turns a capable base model into one that follows instructions helpfully.

**Reinforcement Learning.** Reinforcement learning trains agents to maximize cumulative reward through interaction with an environment rather than from labelled examples. It fits sequential decision problems — control, scheduling, and increasingly post-training for language models.

**Active Learning.** Active learning selects the most informative unlabelled examples for annotation rather than labelling at random. It reaches a target accuracy with substantially less labelling effort, which matters most when domain experts are the bottleneck.


Machine Learning and Statistical Modelling
======

**Predictive Modelling.** Predictive modelling fits models that estimate an outcome from input features, optimizing for generalization to unseen data. Feature quality, leakage control, and honest validation splits determine results far more than algorithm choice.

**Statistical Modelling.** Statistical modelling specifies an explicit relationship between variables in order to explain and quantify it, with uncertainty attached. Where predictive modelling optimizes accuracy, statistical modelling optimizes interpretability and defensible inference.

**Significance Modelling.** Significance testing establishes whether an observed effect is distinguishable from chance, through hypothesis tests, confidence intervals, and effect sizes. Handling multiple comparisons and adequate power is what keeps conclusions from being noise dressed up as findings.

**Time Series Modelling.** Time series modelling handles data where order, seasonality, and autocorrelation carry the signal, using approaches from ARIMA to gradient-boosted and neural sequence models. Validation must respect chronology, since random splits leak the future into training.

**Forecasting.** Forecasting projects future values from historical patterns and known drivers, ideally with prediction intervals rather than point estimates alone. Its value in production depends on backtesting honestly against what was actually knowable at each point in time.

**Anomaly Detection.** Anomaly detection identifies observations that deviate meaningfully from expected behaviour, using statistical thresholds, density estimation, or reconstruction error. Extreme class imbalance means precision-recall tradeoffs and alert fatigue drive the design more than raw model accuracy.

**Text Classification.** Text classification assigns documents to categories for tasks like routing, moderation, intent detection, and tagging. Modern approaches span fine-tuned transformers to zero-shot LLM classification, chosen by the throughput and label-volume constraints of the task.

**Multimodal Video Models.** Multimodal video models reason jointly over frames, audio, and text to support captioning, retrieval, event detection, and question answering. Temporal sampling and the memory cost of long sequences are the dominant engineering constraints.


Data Engineering and Databases
======

**ETL Data Pipelines.** ETL pipelines move data between systems while extracting, transforming, and loading it into a queryable shape. Reliability comes from idempotent steps, schema contracts, and clear handling of late or malformed records.

**Data Cleaning.** Data cleaning resolves missing values, duplicates, inconsistent encodings, and outliers before analysis or training. It routinely consumes most of a project's time and has more effect on the result than model selection.

**Data Analysis.** Data analysis inspects datasets to characterize distributions, relationships, and irregularities, usually as a precursor to modelling or a decision. Its output is a defensible claim about the data, not just a chart.

**Data Analytics.** Data analytics turns raw records into metrics, dashboards, and reporting that inform business or product decisions. The engineering challenge is definitional consistency — one metric meaning one thing everywhere.

**Data Science Workflows.** A data science workflow spans problem framing, exploration, feature engineering, modelling, validation, and handoff to production. Making it reproducible through versioned data, environments, and experiment tracking is what allows results to be trusted later.

**PostgreSQL.** PostgreSQL is a relational database with strong transactional guarantees, rich indexing, and extensions such as pgvector for embedding search. It is often the right default, serving relational, JSON, and vector workloads before specialized stores are warranted.

**MongoDB.** MongoDB is a document database storing flexible JSON-like records without a fixed schema. It suits evolving data shapes and rapid iteration, with indexing and aggregation pipelines carrying the query load.

**DynamoDB.** DynamoDB is a managed key-value and document store on AWS offering single-digit millisecond latency at effectively unbounded scale. Its performance depends almost entirely on access patterns being designed into the partition and sort key up front.

**Google BigQuery.** BigQuery is a serverless columnar warehouse that runs SQL over very large datasets without cluster management. Cost and speed hinge on partitioning, clustering, and scanning only the columns a query truly needs.

**Google Pub/Sub.** Pub/Sub is a managed messaging service that decouples producers from consumers with asynchronous, at-least-once delivery. It absorbs traffic spikes and lets independent services scale on their own terms, provided consumers are idempotent.


Backend, APIs, and Integration
======

**REST APIs.** REST APIs expose resources over HTTP with predictable verbs, status codes, and representations. Versioning, pagination, and idempotency are the design decisions that determine whether an API stays usable as it evolves.

**GraphQL.** GraphQL serves a typed schema where clients request exactly the fields they need in a single round trip. It removes over-fetching at the cost of new concerns around query depth limits, caching, and resolver efficiency.

**WebSockets.** WebSockets maintain a persistent bidirectional connection, enabling server push without polling. They are the natural transport for streaming tokens, live updates, and collaborative interfaces.

**Flask.** Flask is a minimal Python web framework that stays out of the way, which makes it a common choice for model-serving endpoints and internal services. Its small surface area is an advantage when the interesting logic lives outside the framework.

**Celery.** Celery runs asynchronous and scheduled tasks through a distributed worker pool backed by a message broker. It is the standard way to move long-running work — inference jobs, ingestion, batch scoring — off the request path.

**Multithreading.** Multithreading runs concurrent execution paths within a process, and in Python it pays off mainly for I/O-bound work where threads wait rather than compute. Knowing when to reach for processes, async, or native parallelism instead is the practical skill.

**Shell Scripting.** Shell scripting automates file handling, job orchestration, and environment setup with the tools already present on every machine. It remains the shortest path between a manual sequence of commands and a repeatable one.


Platform, Infrastructure, and MLOps
======

**Platform Engineering.** Platform engineering builds the internal tooling, paved paths, and self-service infrastructure that other engineering teams build on. Success is measured by how much undifferentiated setup work it removes from every other team.

**DevOps Practices.** DevOps closes the gap between writing software and operating it through automation, shared ownership, and fast feedback from production. The cultural half — who is accountable when it breaks — matters as much as the tooling half.

**SDLC.** The software development lifecycle structures work from requirements through design, implementation, testing, release, and maintenance. Understanding it is what lets quality gates and review land at the stage where they are cheapest.

**AI Solution Lifecycle.** The AI solution lifecycle extends the SDLC with data collection, experimentation, evaluation, deployment, monitoring, and retraining. Its defining feature is that shipping is the start of the feedback loop rather than the end of the project.

**CI/CD for AI Systems.** CI/CD for AI systems automates build, test, and release for code, data, prompts, and model artifacts together. Beyond conventional tests it gates on evaluation thresholds, so a quality regression blocks a release the same way a failing unit test does.

**Containerization Workflows.** Containerization packages an application with its dependencies into a reproducible image that runs identically across environments. For ML work it is the most reliable answer to CUDA, driver, and dependency drift between laptop and cluster.

**Terraform.** Terraform declares infrastructure as versioned code and reconciles real cloud resources against that declaration. Peer-reviewable, repeatable environments follow directly, along with state management as the main operational discipline.

**Jenkins.** Jenkins is a long-established automation server for building, testing, and deploying through configurable pipelines. Its plugin ecosystem lets it integrate with almost any toolchain, which is why it persists in established estates.

**Prometheus.** Prometheus scrapes and stores time-series metrics and evaluates alerting rules over them. It is the default instrumentation layer for tracking latency, throughput, error rates, and resource saturation in production.

**Load Balancing.** Load balancing spreads traffic across instances to keep any one from becoming a bottleneck or a single point of failure. For AI workloads the routing often has to account for model warmth, GPU memory, and request cost rather than simple round-robin.


Security and Access
======

**Authentication Fundamentals.** Authentication verifies identity — proving who a caller is — through credentials, tokens, or federated providers. Getting session handling, token lifetimes, and secure storage right is what makes the rest of a security model meaningful.

**Authorization Fundamentals.** Authorization determines what an authenticated identity is permitted to do, typically via role-based or attribute-based policies. It must be enforced server-side at every entry point, since client-side checks are advisory at best.

**OAuth.** OAuth 2.0 lets a user grant an application scoped access to their resources without sharing credentials, through delegated tokens. It underpins third-party integrations and, with OIDC layered on, single sign-on.

**API Keys.** API keys are simple bearer credentials identifying a calling application, suited to server-to-server access. They need rotation, scoping, and secret management, since a leaked key is a standing grant until revoked.

**Access Controls.** Access controls encode least-privilege boundaries across services, data, and infrastructure. Regular review matters as much as initial setup, because permissions accumulate quietly as systems and teams change.

**AI Security.** AI security addresses the threat surface specific to model-driven systems: prompt injection, data exfiltration through tool use, training data poisoning, model extraction, and unsafe agent actions. Defence means treating model output as untrusted input and constraining what tools an agent can reach.


Languages and Core Tooling
======

**TypeScript.** TypeScript adds static typing to JavaScript, catching whole classes of errors before runtime. It is increasingly the language of AI application front-ends and SDKs, where typed tool and schema definitions prevent contract drift.

**Golang.** Go is a compiled, statically typed language built for concurrent network services, with goroutines and channels as first-class primitives. Fast builds and single-binary deployment make it a strong fit for infrastructure and high-throughput API layers.

**Scala.** Scala combines functional and object-oriented programming on the JVM and is the native language of Apache Spark. It appears most often in large-scale data processing where type safety and JVM performance both matter.

**Pandas.** Pandas provides labelled tabular data structures and the operations — joins, grouping, reshaping, time-series handling — that most Python data work runs on. It is the default surface for exploration and feature engineering at single-machine scale.

**NumPy.** NumPy supplies the N-dimensional array and vectorized numerical operations that nearly every Python scientific library is built on. Thinking in array operations rather than loops is what makes Python numerical code fast.

**SciPy.** SciPy extends NumPy with optimization, integration, interpolation, signal processing, and statistical routines. It covers the classical numerical methods that sit underneath applied statistics and engineering work.

**Matplotlib.** Matplotlib is the foundational Python plotting library, offering complete control over every element of a figure. That control is why it remains the tool of choice for publication-quality and highly customized output.

**Seaborn.** Seaborn builds on Matplotlib with a statistical grammar and sensible defaults for distributions, relationships, and categorical comparisons. It produces informative exploratory plots in a fraction of the code.

</div>
