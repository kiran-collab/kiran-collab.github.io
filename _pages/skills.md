---
title: "Skills"
permalink: /skills/
layout: single
author_profile: true
---

<style>
/* ---------- word cloud ---------- */
.wordcloud {
  text-align: center; line-height: 2.3; padding: 1.4em 1em; margin-bottom: 2.4em;
  border: 1px solid #e5e5e5; border-radius: 6px; background: #fbfbfb;
}
.wordcloud a[class*="wc-"] {
  display: inline-block; margin: 0 0.4em; white-space: nowrap; font-weight: 600; letter-spacing: -0.01em;
  text-decoration: none; border-bottom: 1px solid transparent; transition: border-color .15s, opacity .15s;
}
.wordcloud a[class*="wc-"]:hover, .wordcloud a[class*="wc-"]:focus-visible {
  text-decoration: none; border-bottom-color: currentColor; opacity: .8;
}
.wordcloud:hover a[class*="wc-"]:not(:hover) { opacity: .5; }
.wc-xl { font-size: 1.9rem; } .wc-lg { font-size: 1.45rem; } .wc-md { font-size: 1.18rem; }
.wc-sm { font-size: 1.0rem; } .wc-xs { font-size: 0.86rem; font-weight: 500; }
.wordcloud a.wc-a, .wordcloud a.wc-a:visited, .wordcloud a.wc-a:hover { color: #b83227; }
.wordcloud a.wc-b, .wordcloud a.wc-b:visited, .wordcloud a.wc-b:hover { color: #1f6f8b; }
.wordcloud a.wc-c, .wordcloud a.wc-c:visited, .wordcloud a.wc-c:hover { color: #4a6741; }
.wordcloud a.wc-d, .wordcloud a.wc-d:visited, .wordcloud a.wc-d:hover { color: #6b4a8b; }
.wordcloud a.wc-e, .wordcloud a.wc-e:visited, .wordcloud a.wc-e:hover { color: #8a6d1f; }
.wordcloud a.wc-f, .wordcloud a.wc-f:visited, .wordcloud a.wc-f:hover { color: #555f6b; }

/* ---------- entry layout ---------- */
.tk-item {
  display: flex; gap: 1.4em; align-items: flex-start; margin: 0 0 1.9em; flex-wrap: wrap;
  padding: 6px 0 6px 12px; scroll-margin-top: 24px; border-radius: 3px;
}
.tk-item:target { background: #fdf8e7; box-shadow: inset 3px 0 0 #c9a227; }
.tk-sec { margin-top: 2.2em; padding-top: 0.5em; border-top: 2px solid #eee; scroll-margin-top: 24px; }
.tk-dgm { flex: 0 0 200px; max-width: 200px; }
.tk-txt { flex: 1 1 320px; min-width: 250px; }
.tk-txt p { margin: 0; }
@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
@media (max-width: 640px) {
  .tk-dgm { flex: 0 0 100%; max-width: 220px; margin: 0 auto 0.4em; }
  .tk-txt { min-width: 0; }
}

/* ---------- diagram vocabulary ---------- */
.dgm { width: 100%; height: auto; display: block; overflow: visible; }
.dgm .b  { fill: #e8f1f6; stroke: #1f6f8b; stroke-width: 1.4; }
.dgm .b2 { fill: #fbeae7; stroke: #b83227; stroke-width: 1.4; }
.dgm .b3 { fill: #eaf2e6; stroke: #4a6741; stroke-width: 1.4; }
.dgm .b4 { fill: #f1eef7; stroke: #6b4a8b; stroke-width: 1.4; }
.dgm .bg { fill: #f4f5f6; stroke: #b0b6bd; stroke-width: 1.2; }
.dgm .bd { fill: #dbe9f1; stroke: none; }
.dgm .gh { fill: none; stroke: #cfd4d9; stroke-width: 1.1; stroke-dasharray: 3 3; }
.dgm .l  { fill: none; stroke: #6b7480; stroke-width: 1.4; }
.dgm .a  { fill: none; stroke: #6b7480; stroke-width: 1.4; marker-end: url(#skar); }
.dgm .a2 { fill: none; stroke: #b83227; stroke-width: 1.4; marker-end: url(#skar2); }
.dgm .a3 { fill: none; stroke: #4a6741; stroke-width: 1.4; marker-end: url(#skar3); }
.dgm .dl { fill: none; stroke: #9aa2ac; stroke-width: 1.3; stroke-dasharray: 4 3; }
.dgm .dr { fill: none; stroke: #b83227; stroke-width: 1.3; stroke-dasharray: 4 3; marker-end: url(#skar2); }
.dgm .fa { fill: #1f6f8b; } .dgm .fr { fill: #b83227; } .dgm .fg { fill: #4a6741; }
.dgm .fm { fill: #b8c0c8; }
.dgm .t  { font: 600 9px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #2f3640; text-anchor: middle; }
.dgm .ts { font: 500 7.5px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #5a626c; text-anchor: middle; }
</style>

<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<marker id="skar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#6b7480"/></marker>
<marker id="skar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#b83227"/></marker>
<marker id="skar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#4a6741"/></marker>
</defs></svg>

<p>The languages, frameworks, platforms, and techniques I work with, grouped the way they appear on my resume. Every term in the cloud links to its description. For the conceptual companion to this page — the ideas rather than the tools — see the <a href="/toolkit/">Toolkit</a>.</p>

<div class="wordcloud">
<a class="wc-lg wc-b" href="#python">Python</a>
<a class="wc-sm wc-e" href="#langgraph">LangGraph</a>
<a class="wc-xl wc-a" href="#pytorch">PyTorch</a>
<a class="wc-md wc-c" href="#docker">Docker</a>
<a class="wc-xs wc-f" href="#matlab">MATLAB</a>
<a class="wc-lg wc-d" href="#rag">RAG</a>
<a class="wc-sm wc-b" href="#lora">LoRA</a>
<a class="wc-md wc-e" href="#kubernetes">Kubernetes</a>
<a class="wc-xs wc-c" href="#helm">Helm</a>
<a class="wc-xl wc-b" href="#aws-bedrock">AWS Bedrock</a>
<a class="wc-sm wc-f" href="#crewai">CrewAI</a>
<a class="wc-md wc-a" href="#mcp">MCP</a>
<a class="wc-xs wc-d" href="#nltk">NLTK</a>
<a class="wc-lg wc-c" href="#transformers">Transformers</a>
<a class="wc-sm wc-e" href="#java">Java</a>
<a class="wc-md wc-f" href="#kafka">Kafka</a>
<a class="wc-xs wc-b" href="#mlp">MLP</a>
<a class="wc-lg wc-e" href="#sagemaker">SageMaker</a>
<a class="wc-sm wc-c" href="#spacy">spaCy</a>
<a class="wc-md wc-d" href="#rlhf">RLHF</a>
<a class="wc-xs wc-a" href="#tf-idf">TF-IDF</a>
<a class="wc-xl wc-c" href="#claude-code">Claude Code</a>
<a class="wc-sm wc-b" href="#airflow">Airflow</a>
<a class="wc-md wc-b" href="#langchain">LangChain</a>
<a class="wc-lg wc-a" href="#spark">Spark</a>
<a class="wc-sm wc-d" href="#qlora">QLoRA</a>
<a class="wc-md wc-c" href="#fastapi">FastAPI</a>
<a class="wc-xs wc-f" href="#c-sharp">C#</a>
<a class="wc-lg wc-d" href="#multi-agent-orchestration">Multi-Agent Orchestration</a>
<a class="wc-sm wc-a" href="#bert">BERT</a>
<a class="wc-md wc-e" href="#sql">SQL</a>
<a class="wc-xs wc-c" href="#mistral">Mistral</a>
<a class="wc-xl wc-e" href="#prompt-engineering">Prompt Engineering</a>
<a class="wc-sm wc-f" href="#redis">Redis</a>
<a class="wc-md wc-a" href="#xgboost">XGBoost</a>
<a class="wc-xs wc-d" href="#autogen">AutoGen</a>
<a class="wc-lg wc-b" href="#vertex-ai">Vertex AI</a>
<a class="wc-sm wc-c" href="#onnx">ONNX</a>
<a class="wc-md wc-f" href="#hybrid-search">Hybrid Search</a>
<a class="wc-xs wc-e" href="#n8n">n8n</a>
<a class="wc-lg wc-c" href="#mlflow">MLflow</a>
<a class="wc-sm wc-b" href="#lstm">LSTM</a>
<a class="wc-md wc-d" href="#cursor">Cursor</a>
<a class="wc-xs wc-a" href="#moto">moto</a>
<a class="wc-xl wc-d" href="#react">ReAct</a>
<a class="wc-sm wc-e" href="#whisper">Whisper</a>
<a class="wc-md wc-b" href="#lambda">Lambda</a>
<a class="wc-xs wc-c" href="#librosa">Librosa</a>
<a class="wc-lg wc-f" href="#cuda">CUDA</a>
<a class="wc-sm wc-d" href="#yolo">YOLO</a>
<a class="wc-md wc-e" href="#tensorrt">TensorRT</a>
<a class="wc-xs wc-b" href="#tesseract">Tesseract</a>
<a class="wc-lg wc-e" href="#claude">Claude</a>
<a class="wc-sm wc-a" href="#gemini">Gemini</a>
<a class="wc-md wc-c" href="#huggingface">HuggingFace</a>
<a class="wc-xs wc-f" href="#torchaudio">torchaudio</a>
<a class="wc-lg wc-b" href="#pinecone">Pinecone</a>
<a class="wc-sm wc-c" href="#peft">PEFT</a>
<a class="wc-md wc-a" href="#elasticsearch">Elasticsearch</a>
<a class="wc-xs wc-d" href="#quicksight">QuickSight</a>
<a class="wc-lg wc-a" href="#gpt-4">GPT-4</a>
<a class="wc-md wc-d" href="#adk">ADK</a>
<a class="wc-xs wc-e" href="#kibana">Kibana</a>
<a class="wc-md wc-f" href="#cross-encoder-reranking">Cross-Encoder Reranking</a>
<a class="wc-sm wc-e" href="#llama">Llama</a>
<a class="wc-xs wc-c" href="#cognito">Cognito</a>
<a class="wc-lg wc-c" href="#scikit-learn">Scikit-learn</a>
<a class="wc-sm wc-d" href="#sft">SFT</a>
<a class="wc-md wc-b" href="#ab-testing">A/B Testing</a>
<a class="wc-xs wc-a" href="#speechbrain">SpeechBrain</a>
<a class="wc-lg wc-d" href="#langfuse">Langfuse</a>
<a class="wc-sm wc-f" href="#s3">S3</a>
<a class="wc-md wc-e" href="#hyperparameter-tuning">Hyperparameter Tuning</a>
<a class="wc-xs wc-b" href="#emr">EMR</a>
<a class="wc-lg wc-e" href="#github-copilot">GitHub Copilot</a>
<a class="wc-sm wc-c" href="#azure">Azure</a>
<a class="wc-md wc-a" href="#quantization-genai">Quantization</a>
<a class="wc-xs wc-d" href="#a2a">A2A</a>
<a class="wc-lg wc-b" href="#codex">Codex</a>
<a class="wc-sm wc-a" href="#resnet">ResNet</a>
<a class="wc-md wc-c" href="#sentiment-analysis">Sentiment Analysis</a>
<a class="wc-xs wc-e" href="#pydantic">Pydantic</a>
<a class="wc-lg wc-a" href="#claude-agent-sdk">Claude Agent SDK</a>
<a class="wc-sm wc-d" href="#efficientnet">EfficientNet</a>
<a class="wc-md wc-f" href="#ci-cd">CI/CD</a>
<a class="wc-xs wc-c" href="#sqs-fifo">SQS FIFO</a>
<a class="wc-md wc-b" href="#cloudwatch">CloudWatch</a>
<a class="wc-sm wc-e" href="#r-lang">R</a>
<a class="wc-xs wc-f" href="#selenium">Selenium</a>
<a class="wc-md wc-d" href="#nemo-guardrails">NeMo Guardrails</a>
<a class="wc-sm wc-c" href="#tool-calling">Tool Calling</a>
<a class="wc-xs wc-a" href="#stylegan2">StyleGAN2</a>
<a class="wc-md wc-e" href="#cpp">C++</a>
<a class="wc-sm wc-b" href="#mongodb-sk">MongoDB</a>
<a class="wc-xs wc-d" href="#diffae">DiffAE</a>
<a class="wc-sm wc-f" href="#ffmpeg">ffmpeg</a>
<a class="wc-xl wc-a" href="#object-detection">Object Detection</a>
<a class="wc-sm wc-c" href="#opencv">OpenCV</a>
<a class="wc-md wc-b" href="#tensorflow">TensorFlow</a>
<a class="wc-lg wc-d" href="#gans">GANs</a>
<a class="wc-xs wc-e" href="#core-ml">Core ML</a>
<a class="wc-md wc-a" href="#face-recognition">Face Recognition</a>
<a class="wc-lg wc-c" href="#image-segmentation">Image Segmentation</a>
<a class="wc-sm wc-d" href="#autoencoders">Autoencoders</a>
<a class="wc-xl wc-e" href="#diffusion-models">Diffusion Models</a>
<a class="wc-md wc-f" href="#vision-transformers">Vision Transformers</a>
<a class="wc-lg wc-b" href="#clip">CLIP</a>
<a class="wc-sm wc-a" href="#object-tracking">Object Tracking</a>
<a class="wc-md wc-c" href="#3d-vision">3D Vision</a>
<a class="wc-xs wc-b" href="#audio-processing">Audio Processing</a>
<a class="wc-lg wc-e" href="#vlm">VLM</a>
</div>

<h2 class="tk-sec" id="sec-programming">Programming Languages</h2>

<div class="tk-item" id="python">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="14" width="100" height="80" rx="3"/>
<path class="l" d="M16 30 H72 M26 44 H86 M26 58 H66 M36 72 H90"/>
<text class="ts" x="56" y="106">indentation as syntax</text>
<path class="a" d="M110 54 H126"/>
<rect class="b3" x="128" y="18" width="66" height="20" rx="3"/><text class="ts" x="161" y="32">numpy</text>
<rect class="b3" x="128" y="44" width="66" height="20" rx="3"/><text class="ts" x="161" y="58">pandas</text>
<rect class="b3" x="128" y="70" width="66" height="20" rx="3"/><text class="ts" x="161" y="84">torch</text>
</svg></div>
<div class="tk-txt"><p><strong>Python.</strong> Python is the primary language of machine learning and data work, valued for readable syntax and an ecosystem that covers numerics, modelling, and serving end to end. Most of my day-to-day work — training, evaluation, pipelines, and APIs — is written in it.</p></div>
</div>

<div class="tk-item" id="cpp">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="40" width="46" height="30" rx="3"/><text class="ts" x="29" y="59">main.cpp</text>
<path class="a" d="M54 55 H72"/>
<rect class="b4" x="74" y="34" width="50" height="42" rx="4"/><text class="ts" x="99" y="50">compile</text><text class="ts" x="99" y="63">+ link</text>
<path class="a" d="M126 55 H144"/>
<rect class="b3" x="146" y="40" width="48" height="30" rx="3"/><text class="ts" x="170" y="59">native</text>
<text class="ts" x="100" y="98">manual memory · zero-cost abstraction</text>
</svg></div>
<div class="tk-txt"><p><strong>C++.</strong> C++ compiles to native code with direct control over memory and layout, which is why performance-critical inference runtimes and systems code are written in it. It is the language underneath most of the ML libraries that get called from Python.</p></div>
</div>

<div class="tk-item" id="c-sharp">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="16" width="188" height="26" rx="3"/><text class="ts" x="100" y="33">C# source</text>
<path class="a" d="M100 46 V58"/>
<rect class="bg" x="6" y="60" width="188" height="38" rx="4"/><text class="ts" x="100" y="76">.NET runtime</text><text class="ts" x="100" y="89">JIT · garbage collection</text>
</svg></div>
<div class="tk-txt"><p><strong>C#.</strong> C# is a statically typed, object-oriented language running on the managed .NET runtime with garbage collection and a large standard library. It is the common choice for Windows desktop tooling and enterprise backend services.</p></div>
</div>

<div class="tk-item" id="java">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="12" width="52" height="24" rx="3"/><text class="ts" x="32" y="27">.java</text>
<path class="a" d="M60 24 H76"/>
<rect class="b4" x="78" y="12" width="52" height="24" rx="3"/><text class="ts" x="104" y="27">bytecode</text>
<path class="a" d="M104 40 V54"/>
<rect class="bg" x="52" y="56" width="104" height="22" rx="3"/><text class="ts" x="104" y="70">JVM</text>
<path class="a" d="M76 80 L44 96 M104 80 V96 M132 80 L164 96"/>
<text class="ts" x="40" y="106">linux</text><text class="ts" x="104" y="106">mac</text><text class="ts" x="168" y="106">win</text>
</svg></div>
<div class="tk-txt"><p><strong>Java.</strong> Java compiles to bytecode that runs on the JVM, giving the same build portable behaviour across operating systems. Its maturity and threading model make it a staple of long-lived backend and big-data systems.</p></div>
</div>

<div class="tk-item" id="r-lang">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="26" width="56" height="52" rx="3"/><path class="l" d="M6 42 H62 M6 58 H62 M25 26 V78 M44 26 V78"/>
<text class="ts" x="34" y="92">data frame</text>
<path class="a" d="M68 52 H84"/>
<rect class="b4" x="86" y="36" width="42" height="34" rx="3"/><text class="ts" x="107" y="56">lm / glm</text>
<path class="a" d="M130 52 H146"/>
<path class="l" d="M150 84 H196 M150 84 V26"/>
<circle class="fa" cx="160" cy="72" r="3"/><circle class="fa" cx="170" cy="60" r="3"/><circle class="fa" cx="180" cy="52" r="3"/><circle class="fa" cx="190" cy="40" r="3"/>
<path class="dl" d="M155 78 L193 38"/>
</svg></div>
<div class="tk-txt"><p><strong>R.</strong> R is built around statistical modelling and data visualisation, with first-class support for data frames, regression, and hypothesis testing. It remains the shortest path from a dataset to a rigorous statistical result.</p></div>
</div>

<div class="tk-item" id="sql">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="12" width="188" height="34" rx="3"/>
<text class="ts" x="100" y="27">SELECT id, name FROM users</text>
<text class="ts" x="100" y="40">WHERE active = true</text>
<path class="a" d="M100 50 V62"/>
<rect class="bg" x="30" y="64" width="140" height="38" rx="3"/><path class="l" d="M30 78 H170 M100 64 V102"/>
<rect class="b3" x="30" y="78" width="140" height="12"/>
<text class="ts" x="100" y="112">matching rows</text>
</svg></div>
<div class="tk-txt"><p><strong>SQL.</strong> SQL declares what data you want rather than how to fetch it, letting the database engine plan the execution. It is the common interface across relational stores and warehouses, and still the fastest way to answer most data questions.</p></div>
</div>

<div class="tk-item" id="matlab">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="8" y="24" width="66" height="60" rx="2"/><path class="l" d="M8 44 H74 M8 64 H74 M30 24 V84 M52 24 V84"/>
<text class="ts" x="41" y="98">matrix</text>
<path class="a" d="M80 54 H98"/><text class="ts" x="89" y="46">A\b</text>
<path class="l" d="M108 86 H194 M108 86 V22"/>
<path class="l" d="M112 78 Q140 20 150 60 T 190 34"/>
<text class="ts" x="152" y="102">signal / control</text>
</svg></div>
<div class="tk-txt"><p><strong>MATLAB.</strong> MATLAB treats the matrix as its native data type, making linear algebra, signal processing, and control-system work concise to express. It is common in engineering research where simulation and numerical prototyping come before production code.</p></div>
</div>

<h2 class="tk-sec" id="sec-agentic">Agentic AI</h2>

<div class="tk-item" id="langgraph">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="8" y="14" width="52" height="22" rx="3"/><text class="ts" x="34" y="28">start</text>
<path class="a" d="M62 25 H84"/>
<rect class="b4" x="86" y="14" width="52" height="22" rx="3"/><text class="ts" x="112" y="28">agent</text>
<path class="a" d="M112 40 V54"/>
<path class="b4" d="M112 56 L146 74 L112 92 L78 74 Z"/><text class="ts" x="112" y="77">done?</text>
<path class="a3" d="M148 74 H176"/><text class="ts" x="180" y="77">end</text>
<path class="a" d="M76 74 H30 V38"/><text class="ts" x="44" y="60">loop</text>
</svg></div>
<div class="tk-txt"><p><strong>LangGraph.</strong> LangGraph models an agent as an explicit state graph of nodes and conditional edges rather than a linear chain, so loops, branches, and retries are first-class. That structure makes long-running agents inspectable and resumable instead of opaque.</p></div>
</div>

<div class="tk-item" id="langchain">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="2" y="40" width="42" height="30" rx="3"/><text class="ts" x="23" y="59">prompt</text>
<path class="a" d="M45 55 H51"/>
<rect class="b4" x="52" y="40" width="42" height="30" rx="3"/><text class="ts" x="73" y="59">model</text>
<path class="a" d="M95 55 H101"/>
<rect class="b4" x="102" y="40" width="42" height="30" rx="3"/><text class="ts" x="123" y="59">tools</text>
<path class="a" d="M145 55 H151"/>
<rect class="b3" x="152" y="40" width="46" height="30" rx="3"/><text class="ts" x="175" y="59">parser</text>
<text class="ts" x="100" y="90">composable components</text>
</svg></div>
<div class="tk-txt"><p><strong>LangChain.</strong> LangChain provides composable building blocks — prompts, models, retrievers, tools, output parsers — that snap together into LLM pipelines. Its value is the standard interfaces, which let you swap a model or vector store without rewriting the application.</p></div>
</div>

<div class="tk-item" id="autogen">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<circle class="b" cx="34" cy="40" r="22"/><text class="ts" x="34" y="43">coder</text>
<circle class="b3" cx="166" cy="40" r="22"/><text class="ts" x="166" y="43">critic</text>
<path class="a" d="M58 32 H142"/><text class="ts" x="100" y="26">draft</text>
<path class="a" d="M142 48 H58"/><text class="ts" x="100" y="62">feedback</text>
<circle class="b4" cx="100" cy="90" r="17"/><text class="ts" x="100" y="93">human</text>
<path class="dl" d="M83 84 L56 58 M117 84 L144 58"/>
</svg></div>
<div class="tk-txt"><p><strong>AutoGen.</strong> AutoGen frames multi-agent work as a conversation between specialised agents that message each other until a task converges. Human participants can join the same conversation, which makes it a natural fit for review and approval loops.</p></div>
</div>

<div class="tk-item" id="crewai">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="14" width="56" height="24" rx="3"/><text class="ts" x="34" y="29">researcher</text>
<rect class="b4" x="6" y="44" width="56" height="24" rx="3"/><text class="ts" x="34" y="59">writer</text>
<rect class="b3" x="6" y="74" width="56" height="24" rx="3"/><text class="ts" x="34" y="89">reviewer</text>
<path class="a" d="M64 26 H86"/><path class="a" d="M64 56 H86"/><path class="a" d="M64 86 H86"/>
<rect class="bg" x="88" y="30" width="50" height="50" rx="4"/><text class="ts" x="113" y="52">tasks</text><text class="ts" x="113" y="65">in order</text>
<path class="a" d="M140 55 H160"/>
<rect class="b2" x="162" y="42" width="34" height="26" rx="3"/><text class="ts" x="179" y="59">output</text>
</svg></div>
<div class="tk-txt"><p><strong>CrewAI.</strong> CrewAI organises agents by role — researcher, writer, reviewer — and assigns each a task with defined inputs and expected output. The role framing keeps responsibilities separate and makes multi-step pipelines easy to reason about.</p></div>
</div>

<div class="tk-item" id="langfuse">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="14" width="180" height="14" rx="2"/><text class="ts" x="96" y="24">trace · 3.8s</text>
<rect class="b" x="22" y="32" width="118" height="14" rx="2"/><text class="ts" x="81" y="42">retrieve</text>
<rect class="b" x="38" y="50" width="80" height="14" rx="2"/><text class="ts" x="78" y="60">llm call</text>
<rect class="b3" x="38" y="68" width="52" height="14" rx="2"/><text class="ts" x="64" y="78">score .87</text>
<text class="ts" x="100" y="98">traces · cost · evals</text>
</svg></div>
<div class="tk-txt"><p><strong>Langfuse.</strong> Langfuse is open-source observability for LLM applications, capturing traces, token cost, latency, and evaluation scores per run. It turns non-deterministic behaviour into something you can debug and track over time.</p></div>
</div>

<div class="tk-item" id="mcp">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="38" width="46" height="34" rx="3"/><text class="ts" x="27" y="58">host</text>
<path class="a" d="M52 48 H82"/><path class="a" d="M82 64 H54"/>
<rect class="b4" x="84" y="30" width="52" height="50" rx="4"/><text class="t" x="110" y="50">MCP</text><text class="ts" x="110" y="63">server</text>
<path class="l" d="M138 44 L152 26 M138 55 H152 M138 66 L152 84"/>
<rect class="b3" x="154" y="16" width="42" height="20" rx="3"/><text class="ts" x="175" y="30">tools</text>
<rect class="b3" x="154" y="46" width="42" height="20" rx="3"/><text class="ts" x="175" y="60">data</text>
<rect class="b3" x="154" y="74" width="42" height="20" rx="3"/><text class="ts" x="175" y="88">prompts</text>
</svg></div>
<div class="tk-txt"><p><strong>MCP.</strong> The Model Context Protocol is an open standard for how model hosts discover and call external tools, data, and prompts over a uniform interface. One MCP server works across any compliant host, replacing bespoke per-integration glue.</p></div>
</div>

<div class="tk-item" id="adk">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="34" width="52" height="42" rx="3"/><text class="ts" x="32" y="50">agent</text><text class="ts" x="32" y="63">definition</text>
<path class="a" d="M60 55 H78"/>
<rect class="b4" x="80" y="34" width="52" height="42" rx="4"/><text class="ts" x="106" y="50">runtime</text><text class="ts" x="106" y="63">+ eval</text>
<path class="a" d="M134 55 H152"/>
<rect class="b3" x="154" y="34" width="44" height="42" rx="3"/><text class="ts" x="176" y="50">deploy</text><text class="ts" x="176" y="63">Vertex</text>
<text class="ts" x="100" y="96">code-first agent framework</text>
</svg></div>
<div class="tk-txt"><p><strong>ADK.</strong> Google's Agent Development Kit is a code-first framework for defining, evaluating, and deploying agents, with built-in support for tools and multi-agent composition. It integrates with Vertex AI for managed deployment while remaining runnable locally.</p></div>
</div>

<div class="tk-item" id="n8n">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="44" width="46" height="24" rx="12"/><text class="ts" x="27" y="59">trigger</text>
<path class="l" d="M52 52 L74 30 M52 60 L74 82"/>
<rect class="b4" x="76" y="18" width="46" height="24" rx="12"/><text class="ts" x="99" y="33">AI step</text>
<rect class="b3" x="76" y="70" width="46" height="24" rx="12"/><text class="ts" x="99" y="85">db</text>
<path class="l" d="M124 30 L146 50 M124 82 L146 62"/>
<rect class="b2" x="148" y="44" width="46" height="24" rx="12"/><text class="ts" x="171" y="59">action</text>
</svg></div>
<div class="tk-txt"><p><strong>n8n.</strong> n8n is a source-available automation platform that wires APIs, databases, and AI steps together through a visual node graph. It is a fast way to stand up agentic or ETL-style automations without building a bespoke service for each one.</p></div>
</div>

<div class="tk-item" id="react">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b4" x="66" y="8" width="68" height="22" rx="3"/><text class="ts" x="100" y="23">thought</text>
<rect class="b2" x="6" y="72" width="66" height="22" rx="3"/><text class="ts" x="39" y="87">action</text>
<rect class="b3" x="128" y="72" width="66" height="22" rx="3"/><text class="ts" x="161" y="87">observation</text>
<path class="a" d="M72 32 L46 68"/>
<path class="a" d="M76 84 H124"/>
<path class="a" d="M158 68 L130 32"/>
<text class="ts" x="100" y="56">reason then act</text>
</svg></div>
<div class="tk-txt"><p><strong>ReAct.</strong> ReAct interleaves reasoning traces with tool actions so the model plans, acts, observes the result, and revises. Grounding each step in a real observation reduces the compounding errors of pure chain-of-thought.</p></div>
</div>

<div class="tk-item" id="tool-calling">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b2" x="4" y="36" width="50" height="38" rx="3"/><text class="ts" x="29" y="52">model</text><text class="ts" x="29" y="65">emits JSON</text>
<path class="a" d="M56 55 H74"/>
<rect class="bg" x="76" y="30" width="52" height="50" rx="3"/><text class="ts" x="102" y="48">{"name":</text><text class="ts" x="102" y="60">"search",</text><text class="ts" x="102" y="72">"args":…}</text>
<path class="a" d="M130 55 H148"/>
<rect class="b3" x="150" y="36" width="46" height="38" rx="3"/><text class="ts" x="173" y="59">execute</text>
<path class="dl" d="M173 78 V96 H29 V78"/><text class="ts" x="100" y="106">result returns to the model</text>
</svg></div>
<div class="tk-txt"><p><strong>Tool / Function Calling.</strong> Tool calling lets a model emit a structured, schema-validated request that your code executes, returning the result for the model to continue from. Constraining the call to a declared schema is what makes the integration reliable enough for production.</p></div>
</div>

<div class="tk-item" id="multi-agent-orchestration">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b2" x="60" y="8" width="80" height="24" rx="3"/><text class="ts" x="100" y="23">supervisor</text>
<path class="a" d="M78 34 L34 52 M100 34 V52 M122 34 L166 52"/>
<rect class="b" x="6" y="54" width="52" height="22" rx="3"/><text class="ts" x="32" y="68">worker</text>
<rect class="b" x="74" y="54" width="52" height="22" rx="3"/><text class="ts" x="100" y="68">worker</text>
<rect class="b" x="142" y="54" width="52" height="22" rx="3"/><text class="ts" x="168" y="68">worker</text>
<path class="a3" d="M32 78 L92 94 M100 78 V94 M168 78 L108 94"/>
<rect class="b3" x="62" y="94" width="76" height="14" rx="3"/><text class="ts" x="100" y="105">aggregate</text>
</svg></div>
<div class="tk-txt"><p><strong>Multi-Agent Orchestration.</strong> Orchestration coordinates several specialised agents through patterns like supervisor-worker fan-out, sequential handoff, or debate, then merges their results. The hard parts are task decomposition, shared state, and deciding when the ensemble is actually done.</p></div>
</div>

<h2 class="tk-sec" id="sec-coding-agents">Coding Agents</h2>

<div class="tk-item" id="claude-code">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="12" width="188" height="86" rx="4"/><path class="l" d="M6 28 H194"/>
<circle class="fr" cx="18" cy="20" r="3"/><circle class="fm" cx="30" cy="20" r="3"/><circle class="fg" cx="42" cy="20" r="3"/>
<text class="ts" x="62" y="44" text-anchor="start">&gt; fix the failing test</text>
<rect class="b" x="26" y="52" width="46" height="16" rx="2"/><text class="ts" x="49" y="63">read</text>
<rect class="b4" x="78" y="52" width="46" height="16" rx="2"/><text class="ts" x="101" y="63">edit</text>
<rect class="b3" x="130" y="52" width="46" height="16" rx="2"/><text class="ts" x="153" y="63">test</text>
<text class="ts" x="100" y="86">agent loop over your repo</text>
</svg></div>
<div class="tk-txt"><p><strong>Claude Code.</strong> Claude Code is Anthropic's agentic coding tool, running an agent loop that reads, edits, and tests files directly in a repository from the terminal, IDE, or web. Because it works against the real codebase rather than pasted snippets, it handles multi-file changes end to end.</p></div>
</div>

<div class="tk-item" id="codex">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="40" width="46" height="30" rx="3"/><text class="ts" x="29" y="59">task</text>
<path class="a" d="M54 55 H72"/>
<rect class="b4" x="74" y="28" width="52" height="54" rx="4"/><text class="ts" x="100" y="48">isolated</text><text class="ts" x="100" y="61">sandbox</text>
<path class="a" d="M128 55 H146"/>
<rect class="b3" x="148" y="40" width="48" height="30" rx="3"/><text class="ts" x="172" y="59">diff / PR</text>
<text class="ts" x="100" y="98">delegate, then review</text>
</svg></div>
<div class="tk-txt"><p><strong>Codex.</strong> Codex is OpenAI's coding agent, which takes a task description and works on it in an isolated environment before returning a reviewable diff. The delegate-then-review model suits well-scoped changes that can run unattended.</p></div>
</div>

<div class="tk-item" id="cursor">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="10" width="188" height="90" rx="3"/>
<path class="l" d="M46 10 V100"/><text class="ts" x="26" y="34">files</text>
<path class="l" d="M56 26 H120 M56 40 H100"/>
<rect class="b2" x="56" y="48" width="130" height="14" rx="2"/><text class="ts" x="66" y="59" text-anchor="start">- old line</text>
<rect class="b3" x="56" y="66" width="130" height="14" rx="2"/><text class="ts" x="66" y="77" text-anchor="start">+ new line</text>
<text class="ts" x="120" y="94">inline AI diff</text>
</svg></div>
<div class="tk-txt"><p><strong>Cursor.</strong> Cursor is an AI-native code editor that keeps the model aware of the whole project and proposes edits as inline diffs you accept or reject. Keeping the human in the accept loop makes it well suited to iterative, exploratory changes.</p></div>
</div>

<div class="tk-item" id="github-copilot">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="16" width="188" height="78" rx="3"/>
<path class="l" d="M20 36 H108"/>
<path class="l" d="M20 54 H70"/>
<text class="ts" x="140" y="58" text-anchor="start">suggested…</text>
<path class="gh" d="M74 46 H190 V64 H74 Z"/>
<path class="l" d="M20 78 H92"/>
<text class="ts" x="100" y="106">inline completion as you type</text>
</svg></div>
<div class="tk-txt"><p><strong>GitHub Copilot.</strong> Copilot suggests code inline as you type, drawing on the surrounding file and project context. It is strongest on boilerplate, tests, and idiomatic patterns where the intent is clear from context.</p></div>
</div>

<h2 class="tk-sec" id="sec-llms">Large Language Models</h2>

<div class="tk-item" id="gpt-4">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="40" width="44" height="30" rx="3"/><text class="ts" x="28" y="59">prompt</text>
<path class="a" d="M52 55 H70"/>
<rect class="b2" x="72" y="20" width="56" height="70" rx="4"/><text class="t" x="100" y="50">GPT-4</text><text class="ts" x="100" y="64">transformer</text>
<path class="a" d="M130 55 H148"/>
<rect class="b3" x="150" y="40" width="46" height="30" rx="3"/><text class="ts" x="173" y="59">response</text>
<text class="ts" x="100" y="104">text + vision · tool calling</text>
</svg></div>
<div class="tk-txt"><p><strong>GPT-4.</strong> GPT-4 is OpenAI's transformer-based model family supporting long context, vision input, and structured tool calling. It is a common baseline when benchmarking general reasoning and instruction-following quality.</p></div>
</div>

<div class="tk-item" id="claude">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M14 90 H190"/>
<text class="ts" x="100" y="104">capability →</text>
<rect class="b3" x="30" y="62" width="46" height="24" rx="3"/><text class="ts" x="53" y="77">Haiku</text><text class="ts" x="53" y="56">fastest</text>
<rect class="b" x="82" y="48" width="46" height="38" rx="3"/><text class="ts" x="105" y="70">Sonnet</text><text class="ts" x="105" y="42">balanced</text>
<rect class="b2" x="134" y="30" width="46" height="56" rx="3"/><text class="ts" x="157" y="60">Opus</text><text class="ts" x="157" y="24">deepest</text>
</svg></div>
<div class="tk-txt"><p><strong>Claude (Sonnet / Opus).</strong> Claude is Anthropic's model family, tiered so you can trade capability against speed and cost: Opus for the hardest reasoning and long-horizon agentic work, Sonnet for the best balance of intelligence and throughput, Haiku for high-volume latency-sensitive tasks. Picking the right tier per route is usually a bigger lever than prompt tuning.</p></div>
</div>

<div class="tk-item" id="llama">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="40" width="48" height="30" rx="3"/><text class="ts" x="30" y="59">weights</text>
<path class="a" d="M56 55 H74"/>
<rect class="b4" x="76" y="34" width="48" height="42" rx="4"/><text class="ts" x="100" y="50">fine-</text><text class="ts" x="100" y="63">tune</text>
<path class="a" d="M126 55 H144"/>
<rect class="b3" x="146" y="40" width="50" height="30" rx="3"/><text class="ts" x="171" y="59">self-host</text>
<text class="ts" x="100" y="98">open weights · full control</text>
</svg></div>
<div class="tk-txt"><p><strong>Llama-2 / Llama-3.</strong> Meta's Llama models ship with open weights, so they can be fine-tuned and self-hosted on your own infrastructure. That matters when data residency, per-token cost, or customisation depth rule out a hosted API.</p></div>
</div>

<div class="tk-item" id="mistral">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="42" width="42" height="28" rx="3"/><text class="ts" x="27" y="59">token</text>
<path class="a" d="M50 56 H68"/>
<rect class="bg" x="70" y="18" width="46" height="18" rx="3"/><text class="ts" x="93" y="31">expert</text>
<rect class="b3" x="70" y="46" width="46" height="18" rx="3"/><text class="ts" x="93" y="59">expert</text>
<rect class="bg" x="70" y="74" width="46" height="18" rx="3"/><text class="ts" x="93" y="87">expert</text>
<path class="a3" d="M118 56 H140"/>
<rect class="b2" x="142" y="42" width="52" height="28" rx="3"/><text class="ts" x="168" y="59">output</text>
<text class="ts" x="93" y="106">only a few experts fire</text>
</svg></div>
<div class="tk-txt"><p><strong>Mistral.</strong> Mistral publishes compact open-weight models, including mixture-of-experts variants that activate only a subset of parameters per token. The result is strong quality per unit of compute, which suits cost-constrained self-hosted deployments.</p></div>
</div>

<div class="tk-item" id="gemini">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="10" width="52" height="18" rx="3"/><text class="ts" x="30" y="23">text</text>
<rect class="b" x="4" y="34" width="52" height="18" rx="3"/><text class="ts" x="30" y="47">image</text>
<rect class="b" x="4" y="58" width="52" height="18" rx="3"/><text class="ts" x="30" y="71">audio</text>
<rect class="b" x="4" y="82" width="52" height="18" rx="3"/><text class="ts" x="30" y="95">video</text>
<path class="a" d="M58 19 L106 44 M58 43 L106 50 M58 67 L106 60 M58 91 L106 66"/>
<rect class="b2" x="108" y="34" width="52" height="42" rx="4"/><text class="ts" x="134" y="59">Gemini</text>
<path class="a" d="M162 55 H182"/><text class="ts" x="180" y="76">out</text>
</svg></div>
<div class="tk-txt"><p><strong>Gemini.</strong> Gemini is Google's natively multimodal model family, accepting text, images, audio, and video in a single context. Long context windows make it well suited to document and video understanding tasks.</p></div>
</div>

<div class="tk-item" id="huggingface">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="14" width="70" height="82" rx="4"/><text class="ts" x="41" y="28">the hub</text>
<rect class="b" x="14" y="36" width="54" height="16" rx="2"/><text class="ts" x="41" y="47">models</text>
<rect class="b3" x="14" y="56" width="54" height="16" rx="2"/><text class="ts" x="41" y="67">datasets</text>
<rect class="b4" x="14" y="76" width="54" height="16" rx="2"/><text class="ts" x="41" y="87">spaces</text>
<path class="a" d="M80 55 H100"/><text class="ts" x="132" y="46">from_pretrained()</text>
<rect class="b2" x="102" y="50" width="92" height="26" rx="3"/><text class="ts" x="148" y="66">pipeline</text>
</svg></div>
<div class="tk-txt"><p><strong>HuggingFace.</strong> HuggingFace hosts a hub of pretrained models and datasets plus the libraries to load and fine-tune them in a few lines. It is the default starting point for anything that begins with an existing model rather than training from scratch.</p></div>
</div>

<div class="tk-item" id="nemo-guardrails">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="40" height="28" rx="3"/><text class="ts" x="24" y="59">input</text>
<path class="a" d="M46 56 H60"/>
<rect class="b3" x="62" y="30" width="26" height="52" rx="3"/><text class="ts" x="75" y="59">in</text>
<rect class="b4" x="92" y="30" width="26" height="52" rx="3"/><text class="ts" x="105" y="59">flow</text>
<rect class="b3" x="122" y="30" width="26" height="52" rx="3"/><text class="ts" x="135" y="59">out</text>
<path class="a" d="M150 56 H166"/>
<rect class="b" x="168" y="42" width="28" height="28" rx="3"/><text class="ts" x="182" y="59">safe</text>
<text class="ts" x="100" y="100">programmable rails</text>
</svg></div>
<div class="tk-txt"><p><strong>NeMo Guardrails.</strong> NVIDIA's NeMo Guardrails adds programmable input, dialogue, and output rails around an LLM application using a rule language called Colang. It constrains topics, blocks unsafe responses, and enforces conversation flow without retraining the model.</p></div>
</div>

<h2 class="tk-sec" id="sec-genai">Generative AI Techniques</h2>

<div class="tk-item" id="sft">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="14" width="52" height="28" rx="3"/><text class="ts" x="32" y="32">base model</text>
<rect class="b3" x="6" y="66" width="52" height="28" rx="3"/><text class="ts" x="32" y="80">labelled</text><text class="ts" x="32" y="91">demos</text>
<path class="a" d="M60 30 L86 46"/><path class="a" d="M60 78 L86 62"/>
<rect class="b4" x="88" y="38" width="52" height="34" rx="4"/><text class="ts" x="114" y="59">SFT</text>
<path class="a" d="M142 55 H160"/>
<rect class="b2" x="162" y="40" width="34" height="30" rx="3"/><text class="ts" x="179" y="59">instruct</text>
</svg></div>
<div class="tk-txt"><p><strong>SFT.</strong> Supervised fine-tuning continues training a base model on curated input-output demonstrations so it adopts a task format or domain style. It is the cheapest way to teach behaviour that prompting alone cannot reliably elicit.</p></div>
</div>

<div class="tk-item" id="rlhf">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="18" width="40" height="20" rx="3"/><text class="ts" x="24" y="32">A</text>
<rect class="bg" x="4" y="44" width="40" height="20" rx="3"/><text class="ts" x="24" y="58">B</text>
<text class="ts" x="24" y="78">preferences</text>
<path class="a" d="M46 40 H64"/>
<rect class="b4" x="66" y="26" width="52" height="34" rx="4"/><text class="ts" x="92" y="40">reward</text><text class="ts" x="92" y="52">model</text>
<path class="a" d="M120 43 H140"/>
<rect class="b2" x="142" y="26" width="52" height="34" rx="4"/><text class="ts" x="168" y="47">policy</text>
<path class="dl" d="M168 62 V86 H92 V62"/><text class="ts" x="130" y="96">optimise</text>
</svg></div>
<div class="tk-txt"><p><strong>RLHF.</strong> Reinforcement Learning from Human Feedback trains a reward model on human preference comparisons, then optimises the policy against that reward. It is the mechanism that turns a capable base model into one that follows instructions helpfully.</p></div>
</div>

<div class="tk-item" id="peft">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="18" width="120" height="74" rx="4"/><text class="ts" x="66" y="52">frozen base</text><text class="ts" x="66" y="66">99% of params</text>
<rect class="b2" x="140" y="30" width="50" height="18" rx="3"/><text class="ts" x="165" y="43">adapter</text>
<rect class="b2" x="140" y="56" width="50" height="18" rx="3"/><text class="ts" x="165" y="69">adapter</text>
<path class="a" d="M128 39 H138"/><path class="a" d="M128 65 H138"/>
<text class="ts" x="100" y="106">only the small parts train</text>
</svg></div>
<div class="tk-txt"><p><strong>PEFT.</strong> Parameter-efficient fine-tuning freezes the pretrained weights and trains only a small set of added parameters, cutting memory and storage cost by orders of magnitude. It also lets many task-specific adapters share one base model in production.</p></div>
</div>

<div class="tk-item" id="lora">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="10" y="20" width="60" height="60" rx="3"/><text class="ts" x="40" y="46">W</text><text class="ts" x="40" y="60">frozen</text>
<text class="t" x="84" y="54">+</text>
<rect class="b2" x="96" y="20" width="16" height="60" rx="2"/><text class="ts" x="104" y="92">A</text>
<text class="t" x="122" y="54">×</text>
<rect class="b2" x="132" y="42" width="60" height="16" rx="2"/><text class="ts" x="162" y="72">B</text>
<text class="ts" x="100" y="106">low-rank update, few parameters</text>
</svg></div>
<div class="tk-txt"><p><strong>LoRA.</strong> LoRA freezes the original weight matrix and learns a low-rank pair of matrices whose product is added as an update, training a tiny fraction of the parameters. The adapter is a few megabytes, so many task variants can be swapped over one shared base model.</p></div>
</div>

<div class="tk-item" id="qlora">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="8" y="24" width="96" height="56" rx="4"/><text class="ts" x="56" y="46">base in 4-bit</text><text class="ts" x="56" y="60">frozen</text>
<rect class="b2" x="122" y="34" width="60" height="18" rx="3"/><text class="ts" x="152" y="47">LoRA 16-bit</text>
<path class="a" d="M106 46 H120"/>
<text class="ts" x="150" y="72">trains at</text><text class="ts" x="150" y="84">higher precision</text>
<text class="ts" x="100" y="104">fine-tune a large model on one GPU</text>
</svg></div>
<div class="tk-txt"><p><strong>QLoRA.</strong> QLoRA quantises the frozen base model to 4-bit while training LoRA adapters at higher precision, so large models fine-tune within a single GPU's memory. It made customising multi-billion-parameter models practical outside well-funded labs.</p></div>
</div>

<div class="tk-item" id="rag">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="42" height="28" rx="3"/><text class="ts" x="25" y="59">query</text>
<path class="a" d="M48 56 H62"/>
<rect class="b4" x="64" y="30" width="44" height="52" rx="4"/><text class="ts" x="86" y="50">retrieve</text><text class="ts" x="86" y="63">top-k</text>
<path class="a" d="M110 56 H124"/>
<rect class="bg" x="126" y="30" width="34" height="52" rx="3"/><text class="ts" x="143" y="59">context</text>
<path class="a" d="M162 56 H176"/>
<rect class="b2" x="178" y="42" width="20" height="28" rx="3"/><text class="ts" x="188" y="59">LLM</text>
<text class="ts" x="100" y="100">grounded in retrieved sources</text>
</svg></div>
<div class="tk-txt"><p><strong>RAG.</strong> Retrieval-Augmented Generation fetches relevant documents at query time and puts them in the prompt so the model answers from evidence rather than memory. It keeps answers current and citable without retraining, and most of its quality comes from the retrieval stage.</p></div>
</div>

<div class="tk-item" id="hybrid-search">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="14" width="48" height="12" rx="2"/><rect class="b" x="4" y="30" width="38" height="12" rx="2"/><rect class="b" x="4" y="46" width="28" height="12" rx="2"/>
<text class="ts" x="28" y="8">BM25</text>
<rect class="b3" x="4" y="68" width="48" height="12" rx="2"/><rect class="b3" x="4" y="84" width="38" height="12" rx="2"/>
<text class="ts" x="28" y="64">dense</text>
<path class="a" d="M58 34 L80 48"/><path class="a" d="M58 78 L80 64"/>
<rect class="b4" x="82" y="38" width="44" height="36" rx="4"/><text class="ts" x="104" y="52">fuse</text><text class="ts" x="104" y="64">RRF</text>
<path class="a" d="M128 56 H144"/>
<rect class="b2" x="146" y="38" width="50" height="12" rx="2"/><rect class="b2" x="146" y="54" width="40" height="12" rx="2"/><rect class="b2" x="146" y="70" width="30" height="12" rx="2"/>
</svg></div>
<div class="tk-txt"><p><strong>Hybrid Search (Dense + BM25).</strong> Hybrid search runs lexical BM25 and dense vector retrieval together and fuses the two ranked lists, typically with reciprocal rank fusion. It consistently beats either method alone because keyword and semantic matching fail on different queries.</p></div>
</div>

<div class="tk-item" id="cross-encoder-reranking">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="4" y="20" width="44" height="12" rx="2"/><rect class="bg" x="4" y="36" width="44" height="12" rx="2"/>
<rect class="bg" x="4" y="52" width="44" height="12" rx="2"/><rect class="bg" x="4" y="68" width="44" height="12" rx="2"/>
<text class="ts" x="26" y="14">top 50</text>
<path class="a" d="M52 50 H68"/>
<rect class="b4" x="70" y="26" width="56" height="48" rx="4"/><text class="ts" x="98" y="44">cross-</text><text class="ts" x="98" y="56">encoder</text><text class="ts" x="98" y="68">(q, d) pair</text>
<path class="a" d="M128 50 H144"/>
<rect class="b2" x="146" y="30" width="50" height="12" rx="2"/><rect class="b2" x="146" y="48" width="40" height="12" rx="2"/><rect class="b2" x="146" y="66" width="30" height="12" rx="2"/>
<text class="ts" x="170" y="24">top 5</text>
</svg></div>
<div class="tk-txt"><p><strong>Cross-Encoder Reranking.</strong> A cross-encoder scores query and document jointly in one pass, which is far more accurate than comparing independent embeddings but too slow to run over a whole corpus. The standard pattern is cheap retrieval for a candidate set, then a cross-encoder to reorder the top results.</p></div>
</div>

<div class="tk-item" id="quantization-genai">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="10" y="24" width="180" height="20" rx="3"/><text class="ts" x="100" y="38">FP16 weights</text>
<path class="a" d="M100 48 V62"/><text class="ts" x="130" y="58">calibrate</text>
<rect class="b2" x="10" y="66" width="56" height="20" rx="3"/><text class="ts" x="38" y="80">INT4</text>
<text class="ts" x="132" y="76">smaller, faster,</text><text class="ts" x="132" y="88">small accuracy cost</text>
</svg></div>
<div class="tk-txt"><p><strong>Quantization.</strong> Quantization stores weights and activations at lower numeric precision so a model needs less memory and runs faster on the same hardware. The engineering work is choosing the scheme and calibration data so the accuracy loss stays inside an acceptable budget.</p></div>
</div>

<div class="tk-item" id="prompt-engineering">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b4" x="6" y="8" width="120" height="18" rx="3"/><text class="ts" x="66" y="21">role · system context</text>
<rect class="b" x="6" y="30" width="120" height="18" rx="3"/><text class="ts" x="66" y="43">task + constraints</text>
<rect class="b3" x="6" y="52" width="120" height="18" rx="3"/><text class="ts" x="66" y="65">few-shot examples</text>
<rect class="bg" x="6" y="74" width="120" height="18" rx="3"/><text class="ts" x="66" y="87">output format</text>
<path class="a" d="M130 50 H150"/>
<rect class="b2" x="152" y="36" width="44" height="28" rx="3"/><text class="ts" x="174" y="54">output</text>
</svg></div>
<div class="tk-txt"><p><strong>Prompt Engineering.</strong> Prompt engineering structures the instruction — role, context, examples, constraints, and output format — so the model's behaviour is specific and repeatable. Treating prompts as versioned, evaluated artefacts rather than ad-hoc text is what makes the results hold up in production.</p></div>
</div>

<h2 class="tk-sec" id="sec-vision">Computer Vision and Generative Vision</h2>

<div class="tk-item" id="opencv">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b3" x="4" y="42" width="40" height="26" rx="3"/><text class="ts" x="24" y="58">capture</text>
<path class="a" d="M46 55 H60"/>
<rect class="b" x="62" y="30" width="48" height="20" rx="3"/><text class="ts" x="86" y="43">colour · resize</text>
<rect class="b" x="62" y="54" width="48" height="20" rx="3"/><text class="ts" x="86" y="67">warp · calibrate</text>
<path class="a" d="M112 40 H128"/><path class="a" d="M112 64 H128"/>
<rect class="b4" x="130" y="42" width="46" height="26" rx="3"/><text class="ts" x="153" y="58">model</text>
<path class="dl" d="M24 40 V16 H153 V40"/><text class="ts" x="90" y="12">BGR in, RGB expected downstream</text>
</svg></div>
<div class="tk-txt"><p><strong>OpenCV.</strong> OpenCV is the workhorse around the model rather than the model itself — capture, colour conversion, geometric warping, calibration, and the classical algorithms that still beat a network when the problem is purely geometric. Its one persistent trap is that it reads images as BGR while every deep learning pipeline expects RGB.</p></div>
</div>

<div class="tk-item" id="tensorflow">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="10" width="80" height="22" rx="3"/><text class="ts" x="46" y="24">eager execution</text>
<path class="a" d="M46 34 V48"/>
<rect class="b4" x="6" y="50" width="80" height="26" rx="3"/><text class="ts" x="46" y="64">tf.function</text><text class="ts" x="46" y="74">traced graph</text>
<path class="a" d="M88 62 H108"/>
<rect class="b3" x="110" y="34" width="84" height="18" rx="3"/><text class="ts" x="152" y="47">TF Serving</text>
<rect class="b3" x="110" y="56" width="84" height="18" rx="3"/><text class="ts" x="152" y="69">TF Lite · edge</text>
<text class="ts" x="100" y="96">NHWC layout — converts badly from NCHW</text>
</svg></div>
<div class="tk-txt"><p><strong>TensorFlow.</strong> TensorFlow 2 runs eagerly like PyTorch but traces to a static graph through <code>tf.function</code>, which is what its deployment path — TF Serving, TF Lite, TFX — is built on. Keras sits on top and is genuinely faster for standard architectures; the layout difference from PyTorch, NHWC against NCHW, is the usual source of conversion bugs.</p></div>
</div>

<div class="tk-item" id="object-detection">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="14" width="70" height="60" rx="3"/>
<rect class="b2" x="14" y="24" width="30" height="24" rx="2"/><rect class="b2" x="20" y="30" width="30" height="24" rx="2"/>
<rect class="b" x="42" y="44" width="26" height="22" rx="2"/>
<text class="ts" x="41" y="86">candidates</text>
<path class="a" d="M80 44 H98"/><text class="ts" x="89" y="38">NMS</text>
<rect class="bg" x="102" y="14" width="70" height="60" rx="3"/>
<rect class="b2" x="118" y="28" width="30" height="24" rx="2"/><text class="ts" x="133" y="43">0.94</text>
<rect class="b" x="140" y="46" width="26" height="22" rx="2"/><text class="ts" x="153" y="60">0.81</text>
<text class="ts" x="137" y="86">kept</text>
<text class="ts" x="100" y="104">IoU threshold decides what survives</text>
</svg></div>
<div class="tk-txt"><p><strong>Object Detection.</strong> Detection predicts a variable-length set of boxes with classes and confidences, which is what makes it harder than classification — the model must decide how many objects exist. Two-stage detectors propose then classify for accuracy, one-stage detectors predict densely in a single pass for speed, and both depend on IoU-based suppression and mAP evaluation.</p></div>
</div>

<div class="tk-item" id="face-recognition">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b3" x="4" y="40" width="34" height="26" rx="3"/><text class="ts" x="21" y="56">detect</text>
<path class="a" d="M40 53 H52"/>
<rect class="b" x="54" y="40" width="34" height="26" rx="3"/><text class="ts" x="71" y="56">align</text>
<path class="a" d="M90 53 H102"/>
<rect class="b4" x="104" y="40" width="38" height="26" rx="3"/><text class="ts" x="123" y="53">embed</text><text class="ts" x="123" y="63">512-d</text>
<path class="a" d="M144 53 H156"/>
<rect class="b2" x="158" y="40" width="38" height="26" rx="3"/><text class="ts" x="177" y="56">compare</text>
<text class="ts" x="100" y="88">cosine distance vs threshold</text>
<text class="ts" x="100" y="100">specified as TAR at fixed FAR, not accuracy</text>
</svg></div>
<div class="tk-txt"><p><strong>Face Recognition.</strong> The pipeline is four separable stages — detect, align to a canonical pose using landmarks, embed into a normalised vector, then compare by distance — and most accuracy problems trace to alignment rather than the network. Systems are specified as true accept rate at a fixed false accept rate, and the demographic and biometric-privacy considerations are part of the engineering, not an afterthought.</p></div>
</div>

<div class="tk-item" id="image-segmentation">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="16" width="30" height="24" rx="2"/><path class="a" d="M38 28 H50"/>
<rect class="b" x="52" y="22" width="24" height="18" rx="2"/><path class="a" d="M78 31 H88"/>
<rect class="b4" x="90" y="26" width="20" height="14" rx="2"/>
<path class="a" d="M112 33 H122"/>
<rect class="b3" x="124" y="22" width="24" height="18" rx="2"/><path class="a" d="M150 31 H160"/>
<rect class="b3" x="162" y="16" width="30" height="24" rx="2"/>
<path class="dl" d="M21 44 V62 H177 V44"/><text class="ts" x="100" y="58">skip connections restore lost detail</text>
<text class="ts" x="100" y="80">semantic · instance · panoptic</text>
<text class="ts" x="100" y="96">mIoU · mask AP · panoptic quality</text>
</svg></div>
<div class="tk-txt"><p><strong>Image Segmentation.</strong> Segmentation classifies at pixel resolution, split into semantic (class per pixel), instance (separate objects), and panoptic (both at once). The recurring architectural problem is that downsampling builds meaning while destroying position, which skip connections and dilated convolutions exist to repair.</p></div>
</div>

<div class="tk-item" id="autoencoders">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="24" width="22" height="48" rx="2"/><text class="ts" x="17" y="84">x</text>
<path class="a" d="M30 48 H42"/>
<rect class="b" x="44" y="34" width="18" height="28" rx="2"/>
<path class="a" d="M64 48 H74"/>
<rect class="b4" x="76" y="40" width="18" height="16" rx="2"/><text class="ts" x="85" y="30">z</text>
<path class="a" d="M96 48 H106"/>
<rect class="b3" x="108" y="34" width="18" height="28" rx="2"/>
<path class="a" d="M128 48 H140"/>
<rect class="b3" x="142" y="24" width="22" height="48" rx="2"/><text class="ts" x="153" y="84">x̂</text>
<path class="dl" d="M17 92 H153"/><text class="ts" x="85" y="104">reconstruction loss — the bottleneck is the mechanism</text>
</svg></div>
<div class="tk-txt"><p><strong>Autoencoders.</strong> An autoencoder compresses input through a bottleneck and reconstructs it with no labels beyond the input itself, so the constraint rather than the architecture is what forces useful structure. A variational autoencoder encodes to a distribution instead of a point, which is what makes the latent space continuous, sampleable, and usable as the compression stage under latent diffusion.</p></div>
</div>

<div class="tk-item" id="gans">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="4" y="40" width="26" height="22" rx="3"/><text class="ts" x="17" y="55">z</text>
<path class="a" d="M32 51 H44"/>
<rect class="b" x="46" y="36" width="42" height="30" rx="3"/><text class="ts" x="67" y="55">generator</text>
<path class="a" d="M90 51 H104"/>
<rect class="b2" x="106" y="36" width="48" height="30" rx="3"/><text class="ts" x="130" y="50">discrim-</text><text class="ts" x="130" y="61">inator</text>
<rect class="b3" x="106" y="8" width="48" height="20" rx="3"/><text class="ts" x="130" y="21">real data</text>
<path class="a" d="M130 30 V34"/>
<path class="a" d="M156 51 H176"/><text class="ts" x="184" y="55">real?</text>
<path class="dl" d="M130 68 V86 H67 V68"/><text class="ts" x="98" y="100">gradient tells G how to look real</text>
</svg></div>
<div class="tk-txt"><p><strong>GANs.</strong> A generator and a discriminator train adversarially, and the discriminator's gradient is what teaches the generator to become convincing — which also makes the training a balancing act between two networks that can destabilise each other. The vocabulary that matters in practice is mode collapse, the WGAN-GP and hinge objectives that stabilise training, StyleGAN's disentangled latent space, and FID as the evaluation standard.</p></div>
</div>

<div class="tk-item" id="diffusion-models">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b3" x="6" y="30" width="26" height="26" rx="2"/><text class="ts" x="19" y="68">x₀</text>
<path class="a" d="M34 43 H48"/><text class="ts" x="41" y="24">+noise</text>
<rect class="b" x="50" y="30" width="26" height="26" rx="2"/>
<path class="a" d="M78 43 H92"/>
<rect class="b2" x="94" y="30" width="26" height="26" rx="2"/>
<path class="a" d="M122 43 H136"/>
<rect class="bg" x="138" y="30" width="26" height="26" rx="2"/><text class="ts" x="151" y="68">x_T</text>
<path class="dl" d="M151 74 H19"/><text class="ts" x="85" y="88">reverse: predict ε at each step</text>
<text class="ts" x="85" y="102">CFG scale trades adherence against diversity</text>
</svg></div>
<div class="tk-txt"><p><strong>Diffusion Models.</strong> Noise is added to an image over many steps in a process with a closed form, and a network is trained to reverse one step at a time — usually by predicting the noise rather than the image. Latent diffusion runs the whole thing inside an autoencoder's latent space, which is what brought text-to-image generation onto consumer hardware.</p></div>
</div>

<div class="tk-item" id="vision-transformers">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="16" width="54" height="54" rx="2"/>
<path class="l" d="M24 16 V70 M42 16 V70 M6 34 H60 M6 52 H60"/>
<text class="ts" x="33" y="84">16×16 patches</text>
<path class="a" d="M62 43 H78"/>
<rect class="b" x="80" y="20" width="16" height="46" rx="2"/><text class="ts" x="88" y="80">+pos</text>
<path class="a" d="M98 43 H112"/>
<rect class="b4" x="114" y="24" width="54" height="38" rx="3"/><text class="ts" x="141" y="40">transformer</text><text class="ts" x="141" y="52">encoder</text>
<text class="ts" x="100" y="102">no locality prior — needs data or distillation</text>
</svg></div>
<div class="tk-txt"><p><strong>Vision Transformers.</strong> A ViT splits an image into patches, embeds each as a token, and applies a standard transformer encoder, discarding the convolutional assumption that nearby pixels matter most. That missing prior is why ViTs need either large-scale pretraining or strong augmentation and distillation to match CNNs on modest datasets.</p></div>
</div>

<div class="tk-item" id="clip">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="16" width="46" height="22" rx="3"/><text class="ts" x="29" y="30">image enc</text>
<rect class="b3" x="6" y="66" width="46" height="22" rx="3"/><text class="ts" x="29" y="80">text enc</text>
<path class="a" d="M54 27 L76 44"/><path class="a" d="M54 77 L76 60"/>
<rect class="b4" x="78" y="38" width="52" height="28" rx="3"/><text class="ts" x="104" y="52">shared</text><text class="ts" x="104" y="62">embedding</text>
<path class="a" d="M132 52 H150"/>
<text class="ts" x="174" y="48">cosine</text><text class="ts" x="174" y="60">similarity</text>
<text class="ts" x="100" y="102">contrastive over the batch — enables zero-shot</text>
</svg></div>
<div class="tk-txt"><p><strong>CLIP.</strong> Two encoders are trained with a symmetric contrastive loss so that matching image-text pairs score highest in both directions, producing one space where images and text are directly comparable. That single property is what enables zero-shot classification by embedding class names as text, and it breaks predictably on counting, spatial relations, and fine-grained distinctions.</p></div>
</div>

<div class="tk-item" id="vlm">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="18" width="46" height="24" rx="3"/><text class="ts" x="29" y="33">vision enc</text>
<path class="a" d="M54 30 H68"/>
<rect class="b4" x="70" y="18" width="42" height="24" rx="3"/><text class="ts" x="91" y="28">projector</text><text class="ts" x="91" y="38">to tokens</text>
<path class="a" d="M114 30 L134 44"/>
<rect class="b3" x="6" y="60" width="46" height="24" rx="3"/><text class="ts" x="29" y="75">text tokens</text>
<path class="a" d="M54 72 L134 56"/>
<rect class="b2" x="136" y="34" width="58" height="32" rx="3"/><text class="ts" x="165" y="54">LLM</text>
<text class="ts" x="100" y="102">frozen encoders, trained bridge, instruction tuning</text>
</svg></div>
<div class="tk-txt"><p><strong>Vision-Language Models.</strong> A VLM conditions a language model on visual features, most simply by projecting image patch embeddings into the token space and instruction-tuning on image-text pairs. The characteristic failure is object hallucination — describing things that are not in the image — and missed detail usually traces to token resolution rather than model capability.</p></div>
</div>

<div class="tk-item" id="object-tracking">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="18" width="52" height="44" rx="2"/><rect class="b" x="16" y="30" width="20" height="18" rx="2"/><text class="ts" x="32" y="74">frame t</text>
<rect class="bg" x="74" y="18" width="52" height="44" rx="2"/><rect class="b" x="92" y="32" width="20" height="18" rx="2"/><text class="ts" x="100" y="74">frame t+1</text>
<rect class="bg" x="142" y="18" width="52" height="44" rx="2"/><rect class="b" x="164" y="34" width="20" height="18" rx="2"/><text class="ts" x="168" y="74">frame t+2</text>
<path class="dl" d="M36 39 H92"/><path class="dl" d="M112 41 H164"/>
<text class="ts" x="100" y="94">association is the hard part, not detection</text>
</svg></div>
<div class="tk-txt"><p><strong>Object Tracking.</strong> Tracking maintains identity across frames, and the difficulty sits in association — deciding whether this frame's box is the same object as the last one's, through occlusion, crossing paths, and missed detections. SORT pairs a Kalman motion model with Hungarian matching on IoU, and DeepSORT adds an appearance embedding so identities survive being hidden.</p></div>
</div>

<div class="tk-item" id="3d-vision">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b3" x="4" y="16" width="46" height="18" rx="3"/><text class="ts" x="27" y="29">point cloud</text>
<rect class="b3" x="4" y="38" width="46" height="18" rx="3"/><text class="ts" x="27" y="51">mesh · voxel</text>
<rect class="b3" x="4" y="60" width="46" height="18" rx="3"/><text class="ts" x="27" y="73">implicit SDF</text>
<path class="a" d="M52 27 H70"/><path class="a" d="M52 47 H70"/><path class="a" d="M52 69 H70"/>
<rect class="b4" x="72" y="30" width="50" height="34" rx="3"/><text class="ts" x="97" y="44">radiance</text><text class="ts" x="97" y="56">field</text>
<path class="a" d="M124 47 H140"/>
<rect class="b" x="142" y="30" width="52" height="34" rx="3"/><text class="ts" x="168" y="44">splatting</text><text class="ts" x="168" y="56">real-time</text>
<text class="ts" x="100" y="98">monocular depth is relative until anchored</text>
</svg></div>
<div class="tk-txt"><p><strong>3D Vision.</strong> The representation choice — point cloud, voxel, mesh, or implicit field — constrains every architecture decision that follows, which is why it is usually the first question asked. NeRF made photorealistic view synthesis possible and Gaussian splatting made it real-time, which is what moved neural rendering into interactive and AR use.</p></div>
</div>

<div class="tk-item" id="audio-processing">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M6 40 q6 -18 12 0 t12 0 t12 0 t12 0 t12 0"/><text class="ts" x="40" y="58">waveform</text>
<path class="a" d="M72 40 H88"/><text class="ts" x="80" y="30">STFT</text>
<rect class="bg" x="90" y="18" width="50" height="44" rx="2"/>
<path class="l" d="M90 30 H140 M90 40 H140 M90 50 H140"/><text class="ts" x="115" y="74">mel spectrogram</text>
<path class="a" d="M142 40 H158"/>
<rect class="b" x="160" y="26" width="36" height="28" rx="3"/><text class="ts" x="178" y="43">CNN /</text><text class="ts" x="178" y="53">ViT</text>
<text class="ts" x="100" y="100">once it is a spectrogram, vision architectures apply</text>
</svg></div>
<div class="tk-txt"><p><strong>Audio Processing.</strong> A short-time Fourier transform turns a waveform into a time-frequency image, and warping frequency onto the mel scale matches it to human perception — at which point audio is a 2D array and vision architectures apply unchanged. Window size sets the trade-off between time and frequency resolution, and that choice usually matters more than the model.</p></div>
</div>

<div class="tk-item" id="core-ml">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="14" width="52" height="20" rx="3"/><text class="ts" x="32" y="27">PyTorch / TF</text>
<path class="a" d="M32 36 V50"/>
<rect class="b4" x="6" y="52" width="52" height="22" rx="3"/><text class="ts" x="32" y="66">coremltools</text>
<path class="a" d="M60 63 H78"/>
<rect class="b3" x="80" y="50" width="48" height="24" rx="3"/><text class="ts" x="104" y="65">.mlpackage</text>
<path class="a" d="M130 63 H146"/>
<rect class="bg" x="148" y="40" width="46" height="16" rx="2"/><text class="ts" x="171" y="51">CPU</text>
<rect class="bg" x="148" y="58" width="46" height="16" rx="2"/><text class="ts" x="171" y="69">GPU</text>
<rect class="b2" x="148" y="76" width="46" height="16" rx="2"/><text class="ts" x="171" y="87">Neural Engine</text>
<text class="ts" x="70" y="100">unsupported ops fall back silently</text>
</svg></div>
<div class="tk-txt"><p><strong>Core ML.</strong> Core ML is Apple's on-device inference format and runtime, dispatching a converted model across CPU, GPU, and the Neural Engine, with coremltools handling conversion, palettisation, and quantisation. The failure that costs the most latency is silent: an unsupported operation falls back to CPU rather than erroring, so the conversion report matters as much as the benchmark.</p></div>
</div>

<h2 class="tk-sec" id="sec-ml-nlp">Machine Learning and NLP</h2>

<div class="tk-item" id="pytorch">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="42" width="42" height="28" rx="3"/><text class="ts" x="27" y="59">tensor</text>
<path class="a" d="M50 56 H66"/>
<rect class="b4" x="68" y="30" width="52" height="52" rx="4"/><text class="ts" x="94" y="50">autograd</text><text class="ts" x="94" y="63">graph</text>
<path class="a" d="M122 56 H138"/>
<rect class="b3" x="140" y="42" width="56" height="28" rx="3"/><text class="ts" x="168" y="59">optimizer</text>
<path class="dl" d="M168 74 V94 H27 V72"/><text class="ts" x="100" y="104">backward pass updates weights</text>
</svg></div>
<div class="tk-txt"><p><strong>PyTorch.</strong> PyTorch builds the computation graph as the code runs, so models are written and debugged like ordinary Python while autograd handles the gradients. It is the default framework for research and increasingly for production training.</p></div>
</div>

<div class="tk-item" id="scikit-learn">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="40" width="40" height="30" rx="3"/><text class="ts" x="24" y="59">scale</text>
<path class="a" d="M46 55 H56"/>
<rect class="b" x="58" y="40" width="40" height="30" rx="3"/><text class="ts" x="78" y="59">encode</text>
<path class="a" d="M100 55 H110"/>
<rect class="b4" x="112" y="40" width="40" height="30" rx="3"/><text class="ts" x="132" y="59">model</text>
<path class="a" d="M154 55 H166"/>
<rect class="b3" x="168" y="40" width="28" height="30" rx="3"/><text class="ts" x="182" y="59">ŷ</text>
<text class="ts" x="100" y="92">Pipeline · fit() / predict()</text>
</svg></div>
<div class="tk-txt"><p><strong>Scikit-learn.</strong> Scikit-learn offers classical ML algorithms behind one consistent fit/predict interface, with pipelines that chain preprocessing and estimation into a single fitted object. Composing steps this way is what prevents train-test leakage in practice.</p></div>
</div>

<div class="tk-item" id="bert">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="10" y="72" width="34" height="18" rx="2"/><text class="ts" x="27" y="84">the</text>
<rect class="b2" x="50" y="72" width="34" height="18" rx="2"/><text class="ts" x="67" y="84">[MASK]</text>
<rect class="b" x="90" y="72" width="34" height="18" rx="2"/><text class="ts" x="107" y="84">sat</text>
<rect class="b" x="130" y="72" width="34" height="18" rx="2"/><text class="ts" x="147" y="84">down</text>
<rect class="bg" x="10" y="34" width="154" height="26" rx="3"/><text class="ts" x="87" y="50">bidirectional encoder</text>
<path class="a" d="M27 70 V62 M67 70 V62 M107 70 V62 M147 70 V62"/>
<path class="a2" d="M67 32 V20"/><text class="ts" x="67" y="16">"cat"</text>
</svg></div>
<div class="tk-txt"><p><strong>BERT.</strong> BERT is an encoder pretrained by masking tokens and predicting them from context on both sides, producing representations that capture full-sentence meaning. Fine-tuned, it remains a strong and cheap choice for classification, NER, and sentence similarity.</p></div>
</div>

<div class="tk-item" id="transformers">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<circle class="fa" cx="30" cy="80" r="6"/><circle class="fa" cx="80" cy="80" r="6"/><circle class="fr" cx="130" cy="80" r="6"/><circle class="fa" cx="176" cy="80" r="6"/>
<path class="l" d="M128 74 C110 40, 50 40, 32 74"/>
<path class="l" d="M129 74 C122 44, 88 44, 80 74"/>
<path class="l" d="M133 74 C144 46, 168 48, 175 74"/>
<text class="ts" x="100" y="98">every token attends to every other</text>
<text class="ts" x="100" y="26">self-attention</text>
</svg></div>
<div class="tk-txt"><p><strong>Transformers.</strong> The transformer replaces recurrence with self-attention, letting every token attend directly to every other and making training parallel across the sequence. That architecture underpins essentially all modern language, vision, and multimodal models.</p></div>
</div>

<div class="tk-item" id="lstm">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="8" y="36" width="46" height="38" rx="4"/><text class="ts" x="31" y="59">cell</text>
<rect class="b" x="76" y="36" width="46" height="38" rx="4"/><text class="ts" x="99" y="59">cell</text>
<rect class="b" x="144" y="36" width="46" height="38" rx="4"/><text class="ts" x="167" y="59">cell</text>
<path class="a" d="M56 55 H74"/><path class="a" d="M124 55 H142"/>
<path class="a" d="M31 88 V76"/><path class="a" d="M99 88 V76"/><path class="a" d="M167 88 V76"/>
<text class="ts" x="31" y="98">x₁</text><text class="ts" x="99" y="98">x₂</text><text class="ts" x="167" y="98">x₃</text>
<text class="ts" x="100" y="24">gates carry state forward</text>
</svg></div>
<div class="tk-txt"><p><strong>LSTM.</strong> An LSTM is a recurrent cell whose input, forget, and output gates control what state persists across time steps, mitigating the vanishing gradients of plain RNNs. It remains a solid choice for modest-length sequence and time-series problems where a transformer is overkill.</p></div>
</div>

<div class="tk-item" id="mlp">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M34 22 L100 22 M34 22 L100 55 M34 22 L100 88 M34 55 L100 22 M34 55 L100 55 M34 55 L100 88 M34 88 L100 22 M34 88 L100 55 M34 88 L100 88"/>
<path class="l" d="M100 22 L168 55 M100 55 L168 55 M100 88 L168 55"/>
<circle class="fa" cx="34" cy="22" r="6"/><circle class="fa" cx="34" cy="55" r="6"/><circle class="fa" cx="34" cy="88" r="6"/>
<circle class="fg" cx="100" cy="22" r="6"/><circle class="fg" cx="100" cy="55" r="6"/><circle class="fg" cx="100" cy="88" r="6"/>
<circle class="fr" cx="168" cy="55" r="6"/>
<text class="ts" x="100" y="106">fully connected layers</text>
</svg></div>
<div class="tk-txt"><p><strong>MLP.</strong> A multilayer perceptron stacks fully connected layers with non-linear activations, letting it approximate arbitrary functions over fixed-size inputs. It is the baseline neural architecture for tabular data and a building block inside larger models.</p></div>
</div>

<div class="tk-item" id="tf-idf">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<text class="ts" x="46" y="26">frequent in doc</text>
<rect class="b3" x="10" y="32" width="72" height="16" rx="2"/><text class="ts" x="46" y="44">TF ↑</text>
<text class="ts" x="46" y="66">rare in corpus</text>
<rect class="b3" x="10" y="72" width="72" height="16" rx="2"/><text class="ts" x="46" y="84">IDF ↑</text>
<text class="t" x="98" y="60">×</text>
<path class="a" d="M110 40 L130 52"/><path class="a" d="M110 80 L130 68"/>
<rect class="b2" x="132" y="44" width="60" height="32" rx="3"/><text class="ts" x="162" y="58">high</text><text class="ts" x="162" y="70">weight</text>
</svg></div>
<div class="tk-txt"><p><strong>TF-IDF.</strong> TF-IDF weights a term by how often it appears in a document against how rare it is across the corpus, so distinctive words outrank common ones. It is a fast, interpretable baseline that still holds up for keyword search and lightweight text classification.</p></div>
</div>

<div class="tk-item" id="spacy">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="2" y="40" width="36" height="30" rx="3"/><text class="ts" x="20" y="59">text</text>
<path class="a" d="M39 55 H45"/>
<rect class="b4" x="46" y="40" width="36" height="30" rx="3"/><text class="ts" x="64" y="59">token</text>
<path class="a" d="M83 55 H89"/>
<rect class="b4" x="90" y="40" width="36" height="30" rx="3"/><text class="ts" x="108" y="59">tagger</text>
<path class="a" d="M127 55 H133"/>
<rect class="b3" x="134" y="40" width="36" height="30" rx="3"/><text class="ts" x="152" y="59">NER</text>
<path class="a" d="M171 55 H179"/><text class="ts" x="188" y="59">doc</text>
<text class="ts" x="100" y="92">production NLP pipeline</text>
</svg></div>
<div class="tk-txt"><p><strong>spaCy.</strong> spaCy provides a fast, production-oriented NLP pipeline covering tokenisation, part-of-speech tagging, dependency parsing, and named entity recognition. Its focus on speed and a stable API makes it the practical choice for text processing at volume.</p></div>
</div>

<div class="tk-item" id="nltk">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="18" width="84" height="74" rx="4"/><text class="ts" x="48" y="34">corpora</text>
<rect class="b" x="14" y="42" width="68" height="14" rx="2"/><text class="ts" x="48" y="52">wordnet</text>
<rect class="b" x="14" y="60" width="68" height="14" rx="2"/><text class="ts" x="48" y="70">treebank</text>
<path class="a" d="M94 54 H110"/>
<rect class="b3" x="112" y="26" width="82" height="16" rx="2"/><text class="ts" x="153" y="37">tokenize</text>
<rect class="b3" x="112" y="46" width="82" height="16" rx="2"/><text class="ts" x="153" y="57">stem · lemma</text>
<rect class="b3" x="112" y="66" width="82" height="16" rx="2"/><text class="ts" x="153" y="77">POS tag</text>
</svg></div>
<div class="tk-txt"><p><strong>NLTK.</strong> NLTK bundles classical NLP algorithms with a large collection of corpora and lexical resources such as WordNet. It is more teaching-and-research oriented than spaCy, and still the quickest way to reach linguistic resources.</p></div>
</div>

<div class="tk-item" id="xgboost">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="l" d="M22 30 L10 52 M22 30 L34 52"/><circle class="fa" cx="22" cy="26" r="5"/><circle class="fa" cx="10" cy="56" r="4"/><circle class="fa" cx="34" cy="56" r="4"/>
<text class="ts" x="22" y="74">tree 1</text>
<path class="a" d="M44 44 H58"/><text class="ts" x="51" y="36">residual</text>
<path class="l" d="M82 30 L70 52 M82 30 L94 52"/><circle class="fg" cx="82" cy="26" r="5"/><circle class="fg" cx="70" cy="56" r="4"/><circle class="fg" cx="94" cy="56" r="4"/>
<text class="ts" x="82" y="74">tree 2</text>
<path class="a" d="M104 44 H118"/>
<path class="l" d="M142 30 L130 52 M142 30 L154 52"/><circle class="fr" cx="142" cy="26" r="5"/><circle class="fr" cx="130" cy="56" r="4"/><circle class="fr" cx="154" cy="56" r="4"/>
<text class="ts" x="142" y="74">tree 3</text>
<text class="ts" x="100" y="100">each tree corrects the last</text>
</svg></div>
<div class="tk-txt"><p><strong>XGBoost.</strong> XGBoost builds gradient-boosted decision trees where each new tree fits the residual error of the ensemble so far, with regularisation to control overfitting. It is still the strongest default for tabular prediction and a frequent competition winner.</p></div>
</div>

<div class="tk-item" id="sentiment-analysis">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="36" width="48" height="38" rx="3"/><path class="l" d="M14 48 H46 M14 56 H46 M14 64 H38"/>
<path class="a" d="M56 55 H72"/>
<rect class="b4" x="74" y="36" width="44" height="38" rx="4"/><text class="ts" x="96" y="59">classifier</text>
<path class="a" d="M120 55 H134"/>
<path class="l" d="M138 55 H196"/>
<circle class="fr" cx="142" cy="55" r="4"/><circle class="fm" cx="167" cy="55" r="4"/><circle class="fg" cx="192" cy="55" r="4"/>
<text class="ts" x="142" y="72">neg</text><text class="ts" x="167" y="72">neu</text><text class="ts" x="192" y="72">pos</text>
</svg></div>
<div class="tk-txt"><p><strong>Sentiment Analysis.</strong> Sentiment analysis classifies text by expressed polarity or emotion, applied to reviews, support tickets, and social monitoring. The practical difficulty is sarcasm, negation, and domain-specific language, which is why in-domain labelled data matters more than model choice.</p></div>
</div>

<div class="tk-item" id="ab-testing">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="76" y="6" width="48" height="20" rx="3"/><text class="ts" x="100" y="20">traffic</text>
<path class="a" d="M88 28 L48 44"/><path class="a" d="M112 28 L152 44"/>
<rect class="b" x="14" y="46" width="68" height="24" rx="3"/><text class="ts" x="48" y="61">A · control</text>
<rect class="b3" x="118" y="46" width="68" height="24" rx="3"/><text class="ts" x="152" y="61">B · variant</text>
<text class="ts" x="48" y="84">4.1%</text><text class="ts" x="152" y="84">4.9%</text>
<text class="ts" x="100" y="102">is the lift significant?</text>
</svg></div>
<div class="tk-txt"><p><strong>A/B Testing.</strong> A/B testing randomly splits traffic between a control and a variant so the measured difference can be attributed to the change itself. Deciding sample size and duration up front is what keeps the result from being noise read as a win.</p></div>
</div>

<div class="tk-item" id="hyperparameter-tuning">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="gh" x="10" y="14" width="110" height="80" rx="3"/>
<circle class="fm" cx="30" cy="34" r="4"/><circle class="fm" cx="62" cy="24" r="4"/><circle class="fm" cx="96" cy="40" r="4"/>
<circle class="fm" cx="38" cy="70" r="4"/><circle class="fm" cx="74" cy="80" r="4"/><circle class="fm" cx="104" cy="66" r="4"/>
<circle class="fr" cx="70" cy="52" r="6"/><circle class="dl" cx="70" cy="52" r="12" fill="none"/>
<text class="ts" x="65" y="106">search space</text>
<path class="a" d="M124 52 H142"/>
<rect class="b3" x="144" y="38" width="50" height="28" rx="3"/><text class="ts" x="169" y="51">best</text><text class="ts" x="169" y="63">config</text>
</svg></div>
<div class="tk-txt"><p><strong>Hyperparameter Tuning.</strong> Tuning searches over settings that are not learned from data — learning rate, depth, regularisation — using grid, random, or Bayesian strategies. Random and Bayesian search usually beat grid search because most hyperparameters barely matter and grid wastes trials on them.</p></div>
</div>

<h2 class="tk-sec" id="sec-cloud">Cloud and MLOps</h2>

<div class="tk-item" id="aws-bedrock">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="42" height="28" rx="3"/><text class="ts" x="25" y="59">app</text>
<path class="a" d="M48 56 H66"/>
<rect class="b4" x="68" y="30" width="50" height="52" rx="4"/><text class="ts" x="93" y="50">Bedrock</text><text class="ts" x="93" y="63">one API</text>
<path class="a" d="M120 44 L148 26 M120 56 H148 M120 68 L148 86"/>
<rect class="b3" x="150" y="14" width="46" height="22" rx="3"/><text class="ts" x="173" y="28">Claude</text>
<rect class="b3" x="150" y="44" width="46" height="22" rx="3"/><text class="ts" x="173" y="58">Llama</text>
<rect class="b3" x="150" y="74" width="46" height="22" rx="3"/><text class="ts" x="173" y="88">Titan</text>
</svg></div>
<div class="tk-txt"><p><strong>AWS Bedrock.</strong> Bedrock exposes foundation models from several providers behind one managed API, with no infrastructure to run. Because the interface is shared, switching or A/B-testing models is a configuration change rather than an integration project.</p></div>
</div>

<div class="tk-item" id="sagemaker">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="40" width="42" height="30" rx="3"/><text class="ts" x="25" y="59">train</text>
<path class="a" d="M48 55 H58"/>
<rect class="b4" x="60" y="40" width="42" height="30" rx="3"/><text class="ts" x="81" y="59">tune</text>
<path class="a" d="M104 55 H114"/>
<rect class="b4" x="116" y="40" width="42" height="30" rx="3"/><text class="ts" x="137" y="59">register</text>
<path class="a" d="M160 55 H170"/>
<rect class="b3" x="172" y="40" width="24" height="30" rx="3"/><text class="ts" x="184" y="59">ep</text>
<text class="ts" x="100" y="90">managed endpoints + autoscaling</text>
</svg></div>
<div class="tk-txt"><p><strong>Amazon SageMaker.</strong> SageMaker covers the model lifecycle on AWS — managed training jobs, hyperparameter tuning, a model registry, and autoscaling inference endpoints. It removes most cluster management from training and serving at the cost of tighter platform coupling.</p></div>
</div>

<div class="tk-item" id="lambda">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="42" width="46" height="28" rx="3"/><text class="ts" x="29" y="59">event</text>
<path class="a" d="M54 56 H72"/>
<rect class="b4" x="74" y="30" width="52" height="52" rx="4"/><text class="ts" x="100" y="50">function</text><text class="ts" x="100" y="63">λ</text>
<path class="a" d="M128 56 H146"/>
<rect class="b3" x="148" y="42" width="48" height="28" rx="3"/><text class="ts" x="172" y="59">result</text>
<text class="ts" x="100" y="98">scales to zero · pay per invocation</text>
</svg></div>
<div class="tk-txt"><p><strong>AWS Lambda.</strong> Lambda runs code in response to events without any server to provision, scaling automatically and billing only for execution time. It suits bursty, event-driven work, with cold starts and execution limits as the main constraints.</p></div>
</div>

<div class="tk-item" id="s3">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="b" d="M14 30 a34 9 0 0 1 68 0 v46 a34 9 0 0 1 -68 0 z"/><path class="l" d="M14 30 a34 9 0 0 0 68 0"/>
<text class="ts" x="48" y="60">bucket</text><text class="ts" x="48" y="96">objects + keys</text>
<path class="a" d="M88 52 H106"/>
<rect class="b3" x="108" y="22" width="86" height="20" rx="3"/><text class="ts" x="151" y="36">standard</text>
<rect class="bg" x="108" y="48" width="86" height="20" rx="3"/><text class="ts" x="151" y="62">infrequent</text>
<rect class="bg" x="108" y="74" width="86" height="20" rx="3"/><text class="ts" x="151" y="88">glacier</text>
</svg></div>
<div class="tk-txt"><p><strong>Amazon S3.</strong> S3 stores objects addressed by key inside buckets, with effectively unlimited capacity and very high durability. Lifecycle rules move colder data to cheaper tiers automatically, which is why it anchors most data lakes.</p></div>
</div>

<div class="tk-item" id="emr">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b2" x="66" y="10" width="68" height="22" rx="3"/><text class="ts" x="100" y="25">primary</text>
<path class="a" d="M82 34 L38 52 M100 34 V52 M118 34 L162 52"/>
<rect class="b" x="10" y="54" width="56" height="22" rx="3"/><text class="ts" x="38" y="68">core</text>
<rect class="b" x="72" y="54" width="56" height="22" rx="3"/><text class="ts" x="100" y="68">task</text>
<rect class="b" x="134" y="54" width="56" height="22" rx="3"/><text class="ts" x="162" y="68">task</text>
<text class="ts" x="100" y="94">managed Spark / Hadoop cluster</text>
</svg></div>
<div class="tk-txt"><p><strong>Amazon EMR.</strong> EMR provisions and manages Spark, Hadoop, and related big-data clusters on AWS, scaling nodes with the workload. It handles cluster lifecycle so jobs can run over S3 data without standing up infrastructure by hand.</p></div>
</div>

<div class="tk-item" id="vertex-ai">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="12" width="188" height="86" rx="5"/><text class="ts" x="100" y="28">Vertex AI</text>
<rect class="b" x="14" y="38" width="40" height="26" rx="3"/><text class="ts" x="34" y="55">train</text>
<rect class="b4" x="60" y="38" width="40" height="26" rx="3"/><text class="ts" x="80" y="55">registry</text>
<rect class="b4" x="106" y="38" width="40" height="26" rx="3"/><text class="ts" x="126" y="55">pipeline</text>
<rect class="b3" x="152" y="38" width="34" height="26" rx="3"/><text class="ts" x="169" y="55">serve</text>
<text class="ts" x="100" y="84">one platform, one IAM boundary</text>
</svg></div>
<div class="tk-txt"><p><strong>GCP Vertex AI.</strong> Vertex AI unifies training, tuning, model registry, pipelines, and serving on Google Cloud, alongside access to Gemini and other foundation models. Keeping the lifecycle on one platform simplifies lineage tracking and access control.</p></div>
</div>

<div class="tk-item" id="azure">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b3" x="6" y="14" width="188" height="22" rx="3"/><text class="ts" x="100" y="29">apps · AI services</text>
<rect class="b" x="6" y="42" width="188" height="22" rx="3"/><text class="ts" x="100" y="57">compute · AKS · functions</text>
<rect class="bg" x="6" y="70" width="188" height="22" rx="3"/><text class="ts" x="100" y="85">storage · networking · Entra ID</text>
</svg></div>
<div class="tk-txt"><p><strong>Azure.</strong> Azure is Microsoft's cloud, spanning compute, storage, networking, identity, and a managed AI service layer. It is common in enterprises already invested in Microsoft identity and tooling, where integration matters more than raw service breadth.</p></div>
</div>

<div class="tk-item" id="docker">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b4" x="8" y="24" width="60" height="60" rx="4"/><text class="ts" x="38" y="44">app</text><text class="ts" x="38" y="57">+ deps</text><text class="ts" x="38" y="70">+ runtime</text>
<text class="ts" x="38" y="98">one image</text>
<path class="a" d="M72 38 L98 26 M72 54 H98 M72 70 L98 84"/>
<rect class="b3" x="100" y="14" width="94" height="22" rx="3"/><text class="ts" x="147" y="28">laptop</text>
<rect class="b3" x="100" y="44" width="94" height="22" rx="3"/><text class="ts" x="147" y="58">CI runner</text>
<rect class="b3" x="100" y="74" width="94" height="22" rx="3"/><text class="ts" x="147" y="88">production</text>
</svg></div>
<div class="tk-txt"><p><strong>Docker.</strong> Docker packages an application with its dependencies into a layered image that runs identically wherever the runtime exists. For ML it is the most reliable answer to CUDA, driver, and library drift between laptop and cluster.</p></div>
</div>

<div class="tk-item" id="kubernetes">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="10" width="70" height="26" rx="3"/><text class="ts" x="41" y="20">desired</text><text class="ts" x="41" y="31">replicas: 3</text>
<path class="a" d="M78 23 H98"/>
<rect class="b4" x="100" y="10" width="56" height="26" rx="3"/><text class="ts" x="128" y="27">scheduler</text>
<path class="a" d="M112 38 L44 58 M128 38 V58 M144 38 L178 58"/>
<rect class="b3" x="14" y="60" width="56" height="24" rx="3"/><text class="ts" x="42" y="75">pod</text>
<rect class="b3" x="100" y="60" width="56" height="24" rx="3"/><text class="ts" x="128" y="75">pod</text>
<rect class="b3" x="158" y="60" width="38" height="24" rx="3"/><text class="ts" x="177" y="75">pod</text>
<text class="ts" x="100" y="100">reconcile actual → desired</text>
</svg></div>
<div class="tk-txt"><p><strong>Kubernetes.</strong> Kubernetes takes a declared desired state and continuously reconciles the cluster toward it, scheduling containers, restarting failures, and scaling replicas. That control loop is what gives self-healing and rolling deploys for free.</p></div>
</div>

<div class="tk-item" id="helm">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="24" width="46" height="26" rx="3"/><text class="ts" x="27" y="41">chart</text>
<rect class="b3" x="4" y="60" width="46" height="26" rx="3"/><text class="ts" x="27" y="77">values</text>
<path class="a" d="M52 38 L78 48"/><path class="a" d="M52 72 L78 62"/>
<rect class="b4" x="80" y="38" width="46" height="34" rx="4"/><text class="ts" x="103" y="59">render</text>
<path class="a" d="M128 55 H146"/>
<rect class="bg" x="148" y="30" width="48" height="16" rx="2"/><rect class="bg" x="148" y="50" width="48" height="16" rx="2"/><rect class="bg" x="148" y="70" width="48" height="16" rx="2"/>
<text class="ts" x="172" y="24">manifests</text>
</svg></div>
<div class="tk-txt"><p><strong>Helm.</strong> Helm templates Kubernetes manifests into versioned charts parameterised by a values file, so one definition serves dev, staging, and production. Releases are tracked, which makes upgrades and rollbacks a single command.</p></div>
</div>

<div class="tk-item" id="kafka">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="40" height="26" rx="3"/><text class="ts" x="24" y="59">producer</text>
<path class="a" d="M46 55 H62"/>
<rect class="bg" x="64" y="24" width="66" height="18" rx="2"/><text class="ts" x="97" y="37">partition 0</text>
<rect class="bg" x="64" y="46" width="66" height="18" rx="2"/><text class="ts" x="97" y="59">partition 1</text>
<rect class="bg" x="64" y="68" width="66" height="18" rx="2"/><text class="ts" x="97" y="81">partition 2</text>
<path class="a" d="M132 33 H152"/><path class="a" d="M132 55 H152"/><path class="a" d="M132 77 H152"/>
<rect class="b3" x="154" y="36" width="42" height="38" rx="3"/><text class="ts" x="175" y="51">consumer</text><text class="ts" x="175" y="63">group</text>
</svg></div>
<div class="tk-txt"><p><strong>Kafka.</strong> Kafka is a distributed append-only log where producers write to partitioned topics and consumer groups read at their own offsets. Durable, replayable ordering within a partition is what makes it the backbone of event-driven and streaming systems.</p></div>
</div>

<div class="tk-item" id="airflow">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="42" width="42" height="24" rx="3"/><text class="ts" x="27" y="57">extract</text>
<path class="a" d="M50 46 L68 30"/><path class="a" d="M50 62 L68 78"/>
<rect class="b4" x="70" y="18" width="42" height="24" rx="3"/><text class="ts" x="91" y="33">clean</text>
<rect class="b4" x="70" y="66" width="42" height="24" rx="3"/><text class="ts" x="91" y="81">enrich</text>
<path class="a" d="M114 30 L134 46"/><path class="a" d="M114 78 L134 62"/>
<rect class="b3" x="136" y="42" width="42" height="24" rx="3"/><text class="ts" x="157" y="57">load</text>
<text class="ts" x="100" y="106">DAG · scheduled · retried</text>
</svg></div>
<div class="tk-txt"><p><strong>Airflow.</strong> Airflow defines workflows as Python DAGs of tasks with explicit dependencies, then schedules, retries, and monitors each run. Making the dependency graph code is what gives data pipelines version control and reviewability.</p></div>
</div>

<div class="tk-item" id="spark">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b2" x="62" y="8" width="76" height="24" rx="3"/><text class="ts" x="100" y="23">driver</text>
<path class="a" d="M78 34 L34 52 M100 34 V52 M122 34 L166 52"/>
<rect class="b" x="8" y="54" width="52" height="24" rx="3"/><text class="ts" x="34" y="69">executor</text>
<rect class="b" x="74" y="54" width="52" height="24" rx="3"/><text class="ts" x="100" y="69">executor</text>
<rect class="b" x="140" y="54" width="52" height="24" rx="3"/><text class="ts" x="166" y="69">executor</text>
<rect class="bg" x="8" y="84" width="52" height="14" rx="2"/><rect class="bg" x="74" y="84" width="52" height="14" rx="2"/><rect class="bg" x="140" y="84" width="52" height="14" rx="2"/>
<text class="ts" x="100" y="108">data partitions</text>
</svg></div>
<div class="tk-txt"><p><strong>Spark.</strong> Spark distributes computation over partitioned data across a cluster of executors coordinated by a driver, keeping intermediate results in memory. It handles batch and streaming transformations far beyond what fits on a single machine.</p></div>
</div>

<div class="tk-item" id="mlflow">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="14" width="96" height="82" rx="4"/><text class="ts" x="54" y="28">run 42</text>
<rect class="b" x="14" y="36" width="80" height="14" rx="2"/><text class="ts" x="54" y="46">params</text>
<rect class="b3" x="14" y="54" width="80" height="14" rx="2"/><text class="ts" x="54" y="64">metrics</text>
<rect class="b4" x="14" y="72" width="80" height="14" rx="2"/><text class="ts" x="54" y="82">artifacts</text>
<path class="a" d="M106 54 H124"/>
<rect class="b2" x="126" y="40" width="68" height="30" rx="3"/><text class="ts" x="160" y="52">registry</text><text class="ts" x="160" y="64">v1 → v2</text>
</svg></div>
<div class="tk-txt"><p><strong>MLflow.</strong> MLflow tracks experiment runs with their parameters, metrics, and artifacts, and promotes chosen models through a versioned registry. It is what makes "which run produced the model in production" an answerable question.</p></div>
</div>

<div class="tk-item" id="ci-cd">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="2" y="42" width="36" height="28" rx="3"/><text class="ts" x="20" y="59">commit</text>
<path class="a" d="M39 56 H45"/>
<rect class="b" x="46" y="42" width="36" height="28" rx="3"/><text class="ts" x="64" y="59">build</text>
<path class="a" d="M83 56 H89"/>
<rect class="b" x="90" y="42" width="36" height="28" rx="3"/><text class="ts" x="108" y="59">test</text>
<path class="a" d="M127 56 H133"/>
<rect class="b2" x="134" y="36" width="34" height="40" rx="3"/><text class="ts" x="151" y="52">gate</text><text class="ts" x="151" y="64">✓/✗</text>
<path class="a3" d="M169 56 H175"/>
<rect class="b3" x="176" y="42" width="22" height="28" rx="3"/><text class="ts" x="187" y="59">prod</text>
<text class="ts" x="100" y="94">automated on every change</text>
</svg></div>
<div class="tk-txt"><p><strong>CI/CD.</strong> Continuous integration and delivery automate build, test, and release so every change is verified the same way before shipping. For AI systems the gates extend past unit tests to evaluation thresholds on model and prompt quality.</p></div>
</div>

<div class="tk-item" id="cloudwatch">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="18" width="38" height="20" rx="3"/><text class="ts" x="23" y="32">svc</text>
<rect class="b" x="4" y="46" width="38" height="20" rx="3"/><text class="ts" x="23" y="60">svc</text>
<rect class="b" x="4" y="74" width="38" height="20" rx="3"/><text class="ts" x="23" y="88">svc</text>
<path class="a" d="M44 28 L70 48 M44 56 H70 M44 84 L70 64"/>
<rect class="b4" x="72" y="38" width="52" height="36" rx="4"/><text class="ts" x="98" y="52">metrics</text><text class="ts" x="98" y="64">+ logs</text>
<path class="a2" d="M126 56 H144"/>
<rect class="b2" x="146" y="42" width="50" height="28" rx="3"/><text class="ts" x="171" y="59">alarm</text>
</svg></div>
<div class="tk-txt"><p><strong>CloudWatch.</strong> CloudWatch collects metrics, logs, and traces from AWS services and applications, then evaluates alarms and dashboards over them. It is the default place to notice that latency, error rate, or spend has moved.</p></div>
</div>

<div class="tk-item" id="redis">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="42" height="28" rx="3"/><text class="ts" x="25" y="59">app</text>
<path class="a" d="M48 56 H66"/>
<rect class="b2" x="68" y="30" width="54" height="52" rx="4"/><text class="ts" x="95" y="50">Redis</text><text class="ts" x="95" y="63">in-memory</text>
<path class="dl" d="M124 56 H150"/><text class="ts" x="137" y="48">miss</text>
<path class="b" d="M152 36 a20 6 0 0 1 40 0 v34 a20 6 0 0 1 -40 0 z"/><path class="l" d="M152 36 a20 6 0 0 0 40 0"/>
<text class="ts" x="172" y="90">database</text>
<text class="ts" x="95" y="98">sub-millisecond hits</text>
</svg></div>
<div class="tk-txt"><p><strong>Redis.</strong> Redis keeps data in memory as keyed structures — strings, hashes, sorted sets, streams — serving reads in well under a millisecond. It commonly sits in front of a database as a cache, and also handles sessions, rate limiting, and queues.</p></div>
</div>

<div class="tk-item" id="fastapi">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="40" width="42" height="30" rx="3"/><text class="ts" x="25" y="59">request</text>
<path class="a" d="M48 55 H62"/>
<rect class="b4" x="64" y="24" width="52" height="62" rx="4"/><text class="ts" x="90" y="42">Pydantic</text><text class="ts" x="90" y="55">validate</text><text class="ts" x="90" y="72">async</text>
<path class="a" d="M118 55 H132"/>
<rect class="b3" x="134" y="30" width="60" height="22" rx="3"/><text class="ts" x="164" y="44">JSON</text>
<rect class="bg" x="134" y="58" width="60" height="22" rx="3"/><text class="ts" x="164" y="72">OpenAPI docs</text>
</svg></div>
<div class="tk-txt"><p><strong>FastAPI.</strong> FastAPI derives request validation and OpenAPI documentation directly from Python type hints, and serves requests asynchronously. Typed contracts plus async I/O make it a natural fit for model-serving endpoints.</p></div>
</div>

<h2 class="tk-sec" id="sec-projects">Also Used Across Projects</h2>

<p style="margin-top:-0.6em;color:#666;font-size:0.92em">These appear in my experience and project work rather than the skills list on my resume.</p>

<div class="tk-item" id="onnx">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="20" width="44" height="22" rx="3"/><text class="ts" x="26" y="34">PyTorch</text>
<rect class="b" x="4" y="66" width="44" height="22" rx="3"/><text class="ts" x="26" y="80">sklearn</text>
<path class="a" d="M50 32 L76 48"/><path class="a" d="M50 78 L76 62"/>
<rect class="b4" x="78" y="38" width="46" height="34" rx="4"/><text class="ts" x="101" y="59">ONNX</text>
<path class="a" d="M126 46 L152 30 M126 64 L152 80"/>
<rect class="b3" x="154" y="18" width="42" height="22" rx="3"/><text class="ts" x="175" y="32">CPU</text>
<rect class="b3" x="154" y="70" width="42" height="22" rx="3"/><text class="ts" x="175" y="84">edge</text>
</svg></div>
<div class="tk-txt"><p><strong>ONNX.</strong> ONNX is an open graph format that lets a model trained in one framework run in a different runtime or on different hardware. It decouples the training stack from the deployment target, which matters most for edge and cross-platform serving.</p></div>
</div>

<div class="tk-item" id="tensorrt">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="18" width="46" height="14" rx="2"/><rect class="bg" x="6" y="36" width="46" height="14" rx="2"/>
<rect class="bg" x="6" y="54" width="46" height="14" rx="2"/><rect class="bg" x="6" y="72" width="46" height="14" rx="2"/>
<text class="ts" x="29" y="100">layers</text>
<path class="a" d="M56 52 H74"/><text class="ts" x="65" y="44">fuse</text>
<rect class="b2" x="76" y="30" width="50" height="20" rx="2"/><rect class="b2" x="76" y="56" width="50" height="20" rx="2"/>
<text class="ts" x="101" y="100">fused + INT8</text>
<path class="a" d="M130 52 H148"/>
<rect class="b3" x="150" y="38" width="46" height="28" rx="3"/><text class="ts" x="173" y="55">GPU</text>
</svg></div>
<div class="tk-txt"><p><strong>TensorRT.</strong> TensorRT compiles a trained network into an optimised engine for NVIDIA GPUs, fusing layers and calibrating reduced precision. It typically delivers the largest inference speedup available on NVIDIA hardware without changing the model itself.</p></div>
</div>

<div class="tk-item" id="cuda">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="38" width="46" height="34" rx="3"/><text class="ts" x="29" y="59">host CPU</text>
<path class="a" d="M54 48 H74"/><path class="a" d="M74 64 H56"/>
<rect class="bg" x="76" y="18" width="118" height="76" rx="4"/><text class="ts" x="135" y="32">device GPU</text>
<rect class="b3" x="84" y="40" width="24" height="18" rx="2"/><rect class="b3" x="112" y="40" width="24" height="18" rx="2"/>
<rect class="b3" x="140" y="40" width="24" height="18" rx="2"/><rect class="b3" x="168" y="40" width="20" height="18" rx="2"/>
<rect class="b3" x="84" y="64" width="24" height="18" rx="2"/><rect class="b3" x="112" y="64" width="24" height="18" rx="2"/>
<rect class="b3" x="140" y="64" width="24" height="18" rx="2"/><rect class="b3" x="168" y="64" width="20" height="18" rx="2"/>
<text class="ts" x="135" y="104">thread blocks</text>
</svg></div>
<div class="tk-txt"><p><strong>CUDA.</strong> CUDA is NVIDIA's parallel computing platform, running kernels across thousands of GPU threads organised into blocks. Understanding it matters even when you never write a kernel, because memory transfers and occupancy explain most GPU performance problems.</p></div>
</div>

<div class="tk-item" id="pydantic">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="4" y="34" width="48" height="42" rx="3"/><text class="ts" x="28" y="50">raw JSON</text><text class="ts" x="28" y="64">untyped</text>
<path class="a" d="M54 55 H72"/>
<rect class="b4" x="74" y="28" width="52" height="54" rx="4"/><text class="ts" x="100" y="48">schema</text><text class="ts" x="100" y="61">validate</text>
<path class="a3" d="M128 44 L150 32"/>
<rect class="b3" x="152" y="20" width="44" height="24" rx="3"/><text class="ts" x="174" y="35">typed obj</text>
<path class="a2" d="M128 68 L150 82"/>
<rect class="b2" x="152" y="70" width="44" height="24" rx="3"/><text class="ts" x="174" y="85">error</text>
</svg></div>
<div class="tk-txt"><p><strong>Pydantic.</strong> Pydantic validates and coerces raw input against Python type annotations, producing typed objects or precise errors. It is the standard way to enforce contracts at API boundaries and to constrain LLM structured output.</p></div>
</div>

<div class="tk-item" id="sqs-fifo">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="42" width="38" height="26" rx="3"/><text class="ts" x="25" y="59">send</text>
<path class="a" d="M46 55 H60"/>
<rect class="bg" x="62" y="40" width="20" height="30" rx="2"/><text class="ts" x="72" y="59">1</text>
<rect class="bg" x="84" y="40" width="20" height="30" rx="2"/><text class="ts" x="94" y="59">2</text>
<rect class="bg" x="106" y="40" width="20" height="30" rx="2"/><text class="ts" x="116" y="59">3</text>
<path class="a" d="M128 55 H144"/>
<rect class="b3" x="146" y="42" width="50" height="26" rx="3"/><text class="ts" x="171" y="59">consumer</text>
<text class="ts" x="100" y="88">strict order · exactly-once</text>
</svg></div>
<div class="tk-txt"><p><strong>SQS FIFO.</strong> Amazon SQS FIFO queues preserve strict ordering within a message group and deduplicate to give exactly-once processing. That trades some throughput for the ordering guarantees standard queues cannot provide.</p></div>
</div>

<div class="tk-item" id="pinecone">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="44" height="28" rx="3"/><text class="ts" x="26" y="59">vector</text>
<path class="a" d="M50 56 H68"/>
<rect class="b4" x="70" y="24" width="58" height="64" rx="4"/><text class="ts" x="99" y="44">managed</text><text class="ts" x="99" y="57">ANN index</text><text class="ts" x="99" y="72">+ filters</text>
<path class="a" d="M130 56 H148"/>
<rect class="b3" x="150" y="34" width="46" height="12" rx="2"/><rect class="b3" x="150" y="50" width="38" height="12" rx="2"/><rect class="b3" x="150" y="66" width="30" height="12" rx="2"/>
<text class="ts" x="172" y="28">top-k</text>
</svg></div>
<div class="tk-txt"><p><strong>Pinecone.</strong> Pinecone is a managed vector database serving approximate nearest-neighbour queries with metadata filtering and namespace isolation. It removes index tuning and scaling work from RAG systems at the cost of a vendor dependency.</p></div>
</div>

<div class="tk-item" id="quicksight">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<path class="b" d="M6 26 a18 6 0 0 1 36 0 v40 a18 6 0 0 1 -36 0 z"/><path class="l" d="M6 26 a18 6 0 0 0 36 0"/>
<text class="ts" x="24" y="86">source</text>
<path class="a" d="M46 48 H62"/>
<rect class="bg" x="64" y="14" width="62" height="38" rx="3"/><rect class="b3" x="72" y="34" width="12" height="12"/><rect class="b3" x="88" y="26" width="12" height="20"/><rect class="b3" x="104" y="30" width="12" height="16"/>
<rect class="bg" x="64" y="58" width="62" height="38" rx="3"/><text class="t" x="95" y="80">98%</text>
<rect class="bg" x="132" y="14" width="62" height="82" rx="3"/><polyline class="l" points="140,80 152,66 164,72 176,52 188,44"/><text class="ts" x="163" y="30">trend</text>
</svg></div>
<div class="tk-txt"><p><strong>QuickSight.</strong> QuickSight is AWS's managed business-intelligence service, building interactive dashboards over warehouse, S3, and database sources. Its serverless model means dashboards scale to many viewers without capacity planning.</p></div>
</div>

<div class="tk-item" id="mongodb-sk">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="12" y="12" width="176" height="86" rx="4"/>
<text class="ts" x="42" y="30">{ _id, user,</text>
<rect class="b3" x="40" y="38" width="130" height="34" rx="3"/>
<text class="ts" x="72" y="52">roles: [ … ],</text><text class="ts" x="78" y="66">prefs: { … }</text>
<text class="ts" x="30" y="88">}</text>
<text class="ts" x="140" y="90">no fixed schema</text>
</svg></div>
<div class="tk-txt"><p><strong>MongoDB.</strong> MongoDB stores flexible JSON-like documents without requiring a fixed schema, so nested and evolving shapes need no migration. Indexes and aggregation pipelines carry the query workload.</p></div>
</div>

<div class="tk-item" id="kibana">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="14" width="188" height="20" rx="3"/><text class="ts" x="100" y="28">status:error AND svc:api</text>
<path class="a" d="M100 38 V48"/>
<path class="l" d="M14 92 H190"/>
<rect class="b2" x="20" y="72" width="18" height="20"/><rect class="b2" x="44" y="60" width="18" height="32"/>
<rect class="b2" x="68" y="78" width="18" height="14"/><rect class="b2" x="92" y="54" width="18" height="38"/>
<rect class="b2" x="116" y="70" width="18" height="22"/><rect class="b2" x="140" y="64" width="18" height="28"/>
<rect class="b2" x="164" y="80" width="18" height="12"/>
<text class="ts" x="100" y="106">errors over time</text>
</svg></div>
<div class="tk-txt"><p><strong>Kibana.</strong> Kibana is the query and visualisation layer over Elasticsearch, used to search logs and build dashboards from indexed data. It is where log investigation usually starts in an ELK-based stack.</p></div>
</div>

<div class="tk-item" id="elasticsearch">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="42" width="42" height="26" rx="3"/><text class="ts" x="27" y="59">query</text>
<path class="a" d="M50 55 H66"/>
<rect class="b4" x="68" y="20" width="56" height="70" rx="4"/><text class="ts" x="96" y="42">inverted</text><text class="ts" x="96" y="55">index</text><text class="ts" x="96" y="74">BM25</text>
<path class="a" d="M126 40 H144"/><path class="a" d="M126 55 H144"/><path class="a" d="M126 70 H144"/>
<rect class="bg" x="146" y="32" width="48" height="16" rx="2"/><text class="ts" x="170" y="43">shard</text>
<rect class="bg" x="146" y="52" width="48" height="16" rx="2"/><text class="ts" x="170" y="63">shard</text>
<rect class="bg" x="146" y="72" width="48" height="16" rx="2"/><text class="ts" x="170" y="83">shard</text>
</svg></div>
<div class="tk-txt"><p><strong>Elasticsearch.</strong> Elasticsearch is a distributed search engine built on an inverted index, sharding data across nodes for scale and resilience. It powers full-text search, log analytics, and increasingly hybrid keyword-plus-vector retrieval.</p></div>
</div>

<div class="tk-item" id="cognito">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<circle class="fa" cx="24" cy="40" r="10"/><path class="fa" d="M8 72 a16 16 0 0 1 32 0 z"/><text class="ts" x="24" y="92">user</text>
<path class="a" d="M46 54 H64"/>
<rect class="b4" x="66" y="30" width="56" height="48" rx="4"/><text class="ts" x="94" y="48">user pool</text><text class="ts" x="94" y="62">sign-in</text>
<path class="a3" d="M124 54 H144"/>
<rect class="b3" x="146" y="40" width="50" height="28" rx="3"/><text class="ts" x="171" y="52">JWT</text><text class="ts" x="171" y="64">token</text>
</svg></div>
<div class="tk-txt"><p><strong>Cognito.</strong> Amazon Cognito manages user sign-up, sign-in, and federated identity, issuing JWTs that downstream services verify. It removes the need to build and secure your own credential store.</p></div>
</div>

<div class="tk-item" id="speechbrain">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<polyline class="l" points="6,55 14,38 22,70 30,44 38,62 46,40 54,66 62,50"/>
<text class="ts" x="34" y="92">speech</text>
<path class="a" d="M68 55 H84"/>
<rect class="b4" x="86" y="30" width="52" height="50" rx="4"/><text class="ts" x="112" y="59">recipes</text>
<path class="a" d="M140 42 H158"/><path class="a" d="M140 55 H158"/><path class="a" d="M140 68 H158"/>
<text class="ts" x="178" y="45">ASR</text><text class="ts" x="178" y="58">speaker</text><text class="ts" x="178" y="71">enhance</text>
</svg></div>
<div class="tk-txt"><p><strong>SpeechBrain.</strong> SpeechBrain is a PyTorch toolkit with ready-made recipes for speech recognition, speaker identification, enhancement, and separation. The recipes give a working baseline quickly, which shortens the path to a task-specific speech model.</p></div>
</div>

<div class="tk-item" id="whisper">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<polyline class="l" points="6,55 14,40 22,68 30,46 38,64 46,42 54,60"/>
<text class="ts" x="30" y="86">audio</text>
<path class="a" d="M62 55 H80"/>
<rect class="b2" x="82" y="34" width="48" height="42" rx="4"/><text class="ts" x="106" y="59">Whisper</text>
<path class="a" d="M132 55 H148"/>
<rect class="b3" x="150" y="38" width="46" height="34" rx="3"/><path class="l" d="M158 50 H188 M158 58 H182 M158 66 H172"/>
<text class="ts" x="100" y="98">multilingual transcription</text>
</svg></div>
<div class="tk-txt"><p><strong>Whisper.</strong> Whisper is an open speech recognition model that transcribes and translates across many languages, trained on a large and varied audio corpus. Its robustness to accents and background noise makes it a strong default for transcription.</p></div>
</div>

<div class="tk-item" id="librosa">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<polyline class="l" points="6,50 14,34 22,64 30,40 38,58 46,36 54,60 62,46"/>
<text class="ts" x="34" y="82">waveform</text>
<path class="a" d="M70 48 H88"/>
<rect class="bg" x="92" y="20" width="100" height="60" rx="2"/>
<rect class="b" x="96" y="26" width="14" height="48"/><rect class="b3" x="114" y="38" width="14" height="36"/>
<rect class="b2" x="132" y="30" width="14" height="44"/><rect class="b" x="150" y="46" width="14" height="28"/>
<rect class="b3" x="168" y="34" width="14" height="40"/>
<text class="ts" x="142" y="94">spectrogram · MFCC</text>
</svg></div>
<div class="tk-txt"><p><strong>Librosa.</strong> Librosa turns raw audio into analysis-ready features — spectrograms, MFCCs, chroma, onset and beat estimates. It is the standard Python starting point for audio feature engineering before modelling.</p></div>
</div>

<div class="tk-item" id="torchaudio">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="40" width="46" height="30" rx="3"/><text class="ts" x="29" y="59">load wav</text>
<path class="a" d="M54 55 H70"/>
<rect class="b4" x="72" y="34" width="52" height="42" rx="4"/><text class="ts" x="98" y="50">transform</text><text class="ts" x="98" y="63">on tensor</text>
<path class="a" d="M126 55 H142"/>
<rect class="b3" x="144" y="40" width="52" height="30" rx="3"/><text class="ts" x="170" y="59">train loop</text>
<text class="ts" x="100" y="96">GPU-ready · batched</text>
</svg></div>
<div class="tk-txt"><p><strong>torchaudio.</strong> torchaudio provides audio I/O and transforms that operate directly on PyTorch tensors, so preprocessing runs batched and on GPU inside the training loop. Keeping audio in the tensor world avoids a costly conversion step per batch.</p></div>
</div>

<div class="tk-item" id="yolo">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="10" y="12" width="180" height="84" rx="3"/>
<path class="gh" d="M55 12 V96 M100 12 V96 M145 12 V96 M10 40 H190 M10 68 H190"/>
<rect class="b2" x="30" y="28" width="52" height="42" fill="none"/><text class="ts" x="56" y="24">car .93</text>
<rect class="b3" x="112" y="46" width="42" height="40" fill="none"/><text class="ts" x="133" y="42">person .88</text>
<text class="ts" x="100" y="108">one pass over the grid</text>
</svg></div>
<div class="tk-txt"><p><strong>YOLO.</strong> YOLO predicts bounding boxes and class probabilities for a whole image in a single forward pass over a grid, rather than proposing regions first. That design is what makes real-time object detection on video feasible.</p></div>
</div>

<div class="tk-item" id="efficientnet">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="14" y="40" width="16" height="34" rx="2"/><text class="ts" x="22" y="88">base</text>
<path class="a" d="M38 56 H54"/>
<rect class="b3" x="60" y="26" width="26" height="62" rx="2"/><text class="ts" x="73" y="20">depth</text>
<rect class="b3" x="94" y="26" width="40" height="62" rx="2"/><text class="ts" x="114" y="20">width</text>
<rect class="b3" x="142" y="18" width="48" height="78" rx="2"/><text class="ts" x="166" y="12">resolution</text>
<text class="ts" x="100" y="106">scaled together, not one at a time</text>
</svg></div>
<div class="tk-txt"><p><strong>EfficientNet.</strong> EfficientNet scales network depth, width, and input resolution together in a fixed ratio rather than enlarging one dimension alone. That compound scaling reaches a given accuracy with markedly fewer parameters and FLOPs.</p></div>
</div>

<div class="tk-item" id="resnet">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="30" y="44" width="46" height="30" rx="3"/><text class="ts" x="53" y="63">conv</text>
<rect class="b" x="96" y="44" width="46" height="30" rx="3"/><text class="ts" x="119" y="63">conv</text>
<path class="a" d="M8 59 H28"/><path class="a" d="M78 59 H94"/><path class="a" d="M144 59 H166"/>
<path class="a2" d="M18 50 C40 14, 140 14, 162 50"/>
<text class="ts" x="90" y="22">skip connection</text>
<text class="ts" x="100" y="98">learn the residual, F(x) + x</text>
</svg></div>
<div class="tk-txt"><p><strong>ResNet.</strong> ResNet adds identity skip connections so each block learns a residual correction rather than a full transformation, which keeps gradients flowing through very deep networks. It made hundred-layer vision models trainable and is still a common backbone.</p></div>
</div>

<div class="tk-item" id="stylegan2">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="42" width="34" height="28" rx="3"/><text class="ts" x="21" y="59">z</text>
<path class="a" d="M40 56 H54"/>
<rect class="b4" x="56" y="42" width="34" height="28" rx="3"/><text class="ts" x="73" y="59">w</text>
<path class="a" d="M92 56 H106"/>
<rect class="b2" x="108" y="26" width="46" height="58" rx="4"/><text class="ts" x="131" y="52">generator</text><text class="ts" x="131" y="65">styles</text>
<path class="a" d="M156 56 H170"/>
<rect class="bg" x="172" y="40" width="24" height="30" rx="2"/><text class="ts" x="184" y="59">img</text>
<text class="ts" x="100" y="100">disentangled latent space</text>
</svg></div>
<div class="tk-txt"><p><strong>StyleGAN2.</strong> StyleGAN2 generates high-fidelity images by mapping a latent code into an intermediate space that modulates the generator's layers as styles. The disentangled latent space is what makes controlled attribute editing possible.</p></div>
</div>

<div class="tk-item" id="diffae">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="4" y="40" width="34" height="30" rx="2"/><text class="ts" x="21" y="59">image</text>
<path class="a" d="M40 55 H54"/>
<rect class="b4" x="56" y="24" width="46" height="26" rx="3"/><text class="ts" x="79" y="40">semantic</text>
<rect class="b" x="56" y="60" width="46" height="26" rx="3"/><text class="ts" x="79" y="76">stochastic</text>
<path class="a" d="M104 38 L128 48"/><path class="a" d="M104 74 L128 62"/>
<rect class="b2" x="130" y="40" width="42" height="30" rx="3"/><text class="ts" x="151" y="59">decode</text>
<text class="ts" x="100" y="102">edit the semantic code</text>
</svg></div>
<div class="tk-txt"><p><strong>DiffAE.</strong> Diffusion autoencoders split an image into an interpretable semantic latent and a stochastic detail code, then reconstruct through a diffusion decoder. Editing the semantic code alone changes attributes while preserving identity and fine detail.</p></div>
</div>

<div class="tk-item" id="tesseract">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="bg" x="6" y="24" width="60" height="62" rx="2"/><path class="l" d="M14 42 H58 M14 54 H50 M14 66 H58 M14 78 H40"/>
<text class="ts" x="36" y="100">scan</text>
<path class="a" d="M72 55 H90"/>
<rect class="b4" x="92" y="34" width="46" height="42" rx="4"/><text class="ts" x="115" y="59">OCR</text>
<path class="a" d="M140 55 H156"/>
<rect class="b3" x="158" y="34" width="38" height="42" rx="3"/><text class="ts" x="177" y="51">"text"</text><text class="ts" x="177" y="65">chars</text>
</svg></div>
<div class="tk-txt"><p><strong>Tesseract.</strong> Tesseract is an open-source OCR engine that extracts machine-readable text from images and scanned documents across many languages. Output quality depends heavily on preprocessing — deskewing, thresholding, and resolution.</p></div>
</div>

<div class="tk-item" id="selenium">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="38" width="46" height="34" rx="3"/><text class="ts" x="27" y="52">script</text><text class="ts" x="27" y="65">driver</text>
<path class="a" d="M52 55 H70"/>
<rect class="bg" x="72" y="16" width="122" height="78" rx="3"/><path class="l" d="M72 32 H194"/>
<circle class="fr" cx="82" cy="24" r="3"/><circle class="fm" cx="92" cy="24" r="3"/><circle class="fg" cx="102" cy="24" r="3"/>
<rect class="b3" x="86" y="44" width="60" height="16" rx="2"/><text class="ts" x="116" y="55">click</text>
<rect class="b" x="86" y="66" width="94" height="14" rx="2"/><text class="ts" x="133" y="77">type text</text>
</svg></div>
<div class="tk-txt"><p><strong>Selenium.</strong> Selenium drives a real browser programmatically, clicking, typing, and asserting on rendered pages. That makes it the tool of choice for end-to-end UI testing and for scraping sites that only render content through JavaScript.</p></div>
</div>

<div class="tk-item" id="ffmpeg">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="4" y="40" width="42" height="30" rx="3"/><text class="ts" x="25" y="59">in.mov</text>
<path class="a" d="M48 55 H62"/>
<rect class="b4" x="64" y="26" width="40" height="20" rx="3"/><text class="ts" x="84" y="40">decode</text>
<rect class="b4" x="64" y="50" width="40" height="20" rx="3"/><text class="ts" x="84" y="64">filter</text>
<rect class="b4" x="64" y="74" width="40" height="20" rx="3"/><text class="ts" x="84" y="88">encode</text>
<path class="l" d="M84 46 V50 M84 70 V74"/>
<path class="a" d="M106 60 H126"/>
<rect class="b3" x="128" y="30" width="66" height="20" rx="3"/><text class="ts" x="161" y="44">out.mp4</text>
<rect class="b3" x="128" y="56" width="66" height="20" rx="3"/><text class="ts" x="161" y="70">frames</text>
</svg></div>
<div class="tk-txt"><p><strong>ffmpeg.</strong> ffmpeg decodes, filters, and re-encodes essentially any audio or video format from a single command line. In ML work it is the standard tool for extracting frames, resampling audio, and normalising media before a pipeline.</p></div>
</div>

<div class="tk-item" id="a2a">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<circle class="b" cx="36" cy="55" r="24"/><text class="ts" x="36" y="58">agent A</text>
<circle class="b3" cx="164" cy="55" r="24"/><text class="ts" x="164" y="58">agent B</text>
<path class="a" d="M62 46 H138"/><text class="ts" x="100" y="40">task</text>
<path class="a" d="M138 64 H62"/><text class="ts" x="100" y="78">result</text>
<text class="ts" x="100" y="100">open interop protocol</text>
</svg></div>
<div class="tk-txt"><p><strong>A2A.</strong> The Agent2Agent protocol defines how independently built agents advertise capabilities and exchange tasks and results across vendor boundaries. Where MCP standardises an agent's access to tools, A2A standardises agent-to-agent communication.</p></div>
</div>

<div class="tk-item" id="claude-agent-sdk">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="40" width="44" height="30" rx="3"/><text class="ts" x="28" y="59">prompt</text>
<path class="a" d="M52 55 H68"/>
<rect class="bg" x="70" y="12" width="124" height="88" rx="4"/><text class="ts" x="132" y="26">agent harness</text>
<rect class="b4" x="78" y="34" width="52" height="18" rx="3"/><text class="ts" x="104" y="47">read/edit</text>
<rect class="b4" x="136" y="34" width="50" height="18" rx="3"/><text class="ts" x="161" y="47">bash</text>
<rect class="b3" x="78" y="58" width="52" height="18" rx="3"/><text class="ts" x="104" y="71">subagents</text>
<rect class="b3" x="136" y="58" width="50" height="18" rx="3"/><text class="ts" x="161" y="71">permissions</text>
<text class="ts" x="132" y="92">you host and deploy it</text>
</svg></div>
<div class="tk-txt"><p><strong>Claude Agent SDK.</strong> The Claude Agent SDK packages the Claude Code harness as a library, providing the agent loop plus built-in file, bash, search, and web tools along with subagents, hooks, and permissions. It supplies the harness while you host and deploy the agent on your own infrastructure.</p></div>
</div>

<div class="tk-item" id="moto">
<div class="tk-dgm"><svg class="dgm" viewBox="0 0 200 110" aria-hidden="true">
<rect class="b" x="6" y="40" width="46" height="30" rx="3"/><text class="ts" x="29" y="59">test</text>
<path class="a" d="M54 55 H70"/>
<rect class="b4" x="72" y="28" width="54" height="54" rx="4"/><text class="ts" x="99" y="48">mock</text><text class="ts" x="99" y="61">S3 · SQS</text>
<path class="dr" d="M130 55 H164"/>
<rect class="bg" x="166" y="42" width="30" height="26" rx="3" stroke-dasharray="4 3"/><text class="ts" x="181" y="59">AWS</text>
<text class="ts" x="100" y="100">no network, no credentials</text>
</svg></div>
<div class="tk-txt"><p><strong>moto.</strong> moto mocks AWS service APIs in-process so tests exercise S3, SQS, DynamoDB, and similar without network calls or real credentials. That keeps the suite fast, deterministic, and free of cloud spend.</p></div>
</div>

<p style="margin-top:2.2em;font-size:.9rem;color:#7a8189">Utility: <a href="/jd-scan/">scan a job description</a> against every term on this site to see what is covered and what is missing.</p>

{% include speak-buttons.html %}
