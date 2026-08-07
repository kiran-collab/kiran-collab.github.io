---
title: "AI Frameworks"
permalink: /frameworks/
layout: single
author_profile: true
---

{% include base_path %}
{% include stack-style.html %}

<style>
.fw-sec {
  margin-top: 2.8em; padding: .55em 0 .4em; border-top: 3px solid #23303a; border-bottom: 1px solid #e4e4e4;
  font-size: 1.36rem; color: #23303a; scroll-margin-top: 24px;
}
.fw-lead { color: #55606a; font-size: .96rem; margin: .7em 0 1.2em; }
table.fw-map { width: 100%; border-collapse: collapse; font-size: .88rem; margin: 1.3em 0 2em; display: block; overflow-x: auto; }
table.fw-map th, table.fw-map td { border: 1px solid #e3e3e3; padding: .5em .7em; text-align: left; vertical-align: top; }
table.fw-map th { background: #f4f7f8; font-weight: 600; white-space: nowrap; }
table.fw-map td:first-child { font-weight: 600; white-space: nowrap; background: #fafbfb; }
.pick { color: #1f6f8b; font-weight: 600; }
.cx-body .when {
  margin-top: .6em; font-size: .89rem; color: #3f5a37; background: #f1f7ee;
  border-left: 3px solid #4a6741; padding: .5em .75em; border-radius: 0 3px 3px 0;
}
</style>

<p class="stack-lead">The frameworks that actually get used, grouped by which layer of the stack they occupy. Most confusion in this space comes from comparing tools that solve different problems — a training abstraction against a serving engine, or a model library against the tensor framework underneath it.</p>

<table class="fw-map">
<thead><tr><th>Layer</th><th>What it handles</th><th>Reasonable default in 2026</th></tr></thead>
<tbody>
<tr><td>Tensors &amp; autograd</td><td>The computation itself</td><td class="pick">PyTorch</td></tr>
<tr><td>Training loop</td><td>Boilerplate, devices, checkpointing</td><td class="pick">Accelerate or Lightning</td></tr>
<tr><td>Scaling</td><td>Multi-GPU, multi-node, sharding</td><td class="pick">FSDP, or DeepSpeed at extreme scale</td></tr>
<tr><td>Models</td><td>Pretrained weights and architectures</td><td class="pick">Transformers, Diffusers, timm</td></tr>
<tr><td>Fine-tuning</td><td>Adapting a model cheaply</td><td class="pick">PEFT, plus TRL for preference work</td></tr>
<tr><td>Serving</td><td>Throughput, latency, batching</td><td class="pick">vLLM for LLMs, Triton for the rest</td></tr>
<tr><td>Tabular ML</td><td>Everything that is not deep learning</td><td class="pick">scikit-learn and XGBoost</td></tr>
<tr><td>Tracking</td><td>Experiments, metrics, model registry</td><td class="pick">Weights &amp; Biases or MLflow</td></tr>
</tbody>
</table>

<p class="stack-hint">Click any framework to expand it. PyTorch-centric code for the main ones is collected at the end.</p>

<p class="jump" style="margin-bottom:2em">
<a class="stack-back" href="#core">Core frameworks</a>
<a class="stack-back" href="#scaling">Training &amp; scaling</a>
<a class="stack-back" href="#models">Model libraries</a>
<a class="stack-back" href="#finetuning">Fine-tuning</a>
<a class="stack-back" href="#serving">Inference &amp; serving</a>
<a class="stack-back" href="#classical">Classical ML</a>
<a class="stack-back" href="#tracking">Tracking &amp; tuning</a>
<a class="stack-back" href="#code">Code snippets</a>
</p>

<h2 class="fw-sec" id="core">Core frameworks</h2>
<p class="fw-lead">The tensor and autograd layer. Everything above is built on one of these, and the choice determines your ecosystem more than any other decision.</p>

<details class="cx"><summary>PyTorch</summary><div class="cx-body">
<p>Defines the computation graph as the code runs, so a model is ordinary Python you can step through with a debugger and inspect with <code>print</code>. Autograd records operations on tensors and differentiates them on the backward pass.</p>
<p>It won research first and then production. <code>torch.compile</code> closed most of the historical performance gap by tracing and fusing graphs ahead of execution, which removed the main argument for static-graph frameworks.</p>
<p class="when"><strong>Choose it when:</strong> almost always. It is the default for research, the majority of new production work, and nearly every model library assumes it.</p>
</div></details>

<details class="cx"><summary>TensorFlow</summary><div class="cx-body">
<p>Graph-first from the start, which made deployment and cross-platform export strong early. TF2 adopted eager execution by default, narrowing the usability gap with PyTorch.</p>
<p>Its remaining strength is the deployment surface — TFLite for mobile, TensorFlow.js for browsers, TFX for pipelines, and TPU support — and a large body of existing production code.</p>
<p class="when"><strong>Choose it when:</strong> you are maintaining existing TensorFlow systems, targeting mobile or browser through TFLite/TF.js, or standardised on TFX. Rarely the choice for a greenfield research project.</p>
</div></details>

<details class="cx"><summary>JAX</summary><div class="cx-body">
<p>NumPy-like functions plus composable transformations: <code>grad</code> for derivatives, <code>jit</code> for XLA compilation, <code>vmap</code> for automatic batching, <code>pmap</code> and <code>shard_map</code> for parallelism. Functions must be pure, and state is passed explicitly rather than held in objects.</p>
<p>That purity constraint is the whole trade. It is unfamiliar and occasionally awkward, and it is what makes the transformations compose so cleanly and the compiler optimise so aggressively.</p>
<p class="when"><strong>Choose it when:</strong> you are doing research where custom gradients or unusual parallelism matter, running on TPUs, or working in a lab already standardised on it. Flax and Optax supply the layers and optimisers.</p>
</div></details>

<details class="cx"><summary>Keras</summary><div class="cx-body">
<p>A high-level model-building API. Keras 3 is backend-agnostic and runs on TensorFlow, PyTorch, or JAX, so the same model code is portable across all three.</p>
<p><code>model.fit()</code> hides the training loop entirely — excellent for standard supervised setups, limiting the moment you need a custom loop, unusual loss scheduling, or multiple optimisers.</p>
<p class="when"><strong>Choose it when:</strong> the task is conventional, you value speed of authorship, or you are teaching. Reach past it when the training loop itself becomes the interesting part.</p>
</div></details>

<h2 class="fw-sec" id="scaling">Training and scaling</h2>
<p class="fw-lead">Removing boilerplate and getting a model across more than one GPU. These sit on top of PyTorch rather than replacing it.</p>

<details class="cx"><summary>PyTorch Lightning</summary><div class="cx-body">
<p>Restructures training into a <code>LightningModule</code> — you write <code>training_step</code>, <code>validation_step</code>, and <code>configure_optimizers</code>, and the Trainer handles device placement, distributed setup, checkpointing, logging, and early stopping.</p>
<p>The benefit is consistency across a team: every project looks the same, and the parts everyone gets subtly wrong are written once. The cost is a framework whose control flow you must learn before you can override it.</p>
<p class="when"><strong>Choose it when:</strong> you run many experiments and want structure enforced. Skip it for a single bespoke training run where the loop is the research.</p>
</div></details>

<details class="cx"><summary>Hugging Face Accelerate</summary><div class="cx-body">
<p>A thin layer that makes one training script run unchanged on CPU, single GPU, multi-GPU, multi-node, or TPU. You keep your own loop; <code>accelerator.prepare()</code> wraps the model, optimiser, and dataloaders, and <code>accelerator.backward()</code> replaces <code>loss.backward()</code>.</p>
<p>Its appeal is how little it takes over. The loop stays yours and stays readable, which is why it is often the better first step than a full framework.</p>
<p class="when"><strong>Choose it when:</strong> you want distributed training without restructuring your code or adopting an abstraction.</p>
</div></details>

<details class="cx"><summary>FSDP — Fully Sharded Data Parallel</summary><div class="cx-body">
<p>Built into PyTorch. Shards parameters, gradients, and optimiser state across ranks, gathering each layer's parameters only while it is being used and releasing them afterwards.</p>
<p>Plain DDP replicates the whole model on every GPU, so the largest trainable model is bounded by one device's memory. Sharding removes that ceiling — the reason FSDP is the default path to training models larger than a single accelerator.</p>
<p class="when"><strong>Choose it when:</strong> the model no longer fits comfortably on one GPU with its optimiser state, and you want the in-tree PyTorch option.</p>
</div></details>

<details class="cx"><summary>DeepSpeed</summary><div class="cx-body">
<p>Microsoft's training library, best known for ZeRO — three progressive stages sharding optimiser state, then gradients, then parameters — plus CPU and NVMe offload, activation checkpointing, and a fast fused-kernel inference path.</p>
<p>Offload is what distinguishes it: parameters can spill to CPU memory or disk, letting you train models that genuinely do not fit in aggregate GPU memory, at a real throughput cost.</p>
<p class="when"><strong>Choose it when:</strong> you are training at a scale where FSDP is not enough, or you need offload to make the run possible at all.</p>
</div></details>

<details class="cx"><summary>Megatron-LM</summary><div class="cx-body">
<p>NVIDIA's library for very large language model training, providing tensor parallelism (splitting individual matrix multiplications across GPUs) alongside pipeline and data parallelism.</p>
<p>Combining all three — often called 3-D parallelism — is how frontier-scale training is actually done. It is expert-facing and configuration-heavy by design.</p>
<p class="when"><strong>Choose it when:</strong> you are pretraining at a scale where tensor parallelism is required. For fine-tuning, this is the wrong tool.</p>
</div></details>

<details class="cx"><summary>Ray &amp; Ray Train</summary><div class="cx-body">
<p>A general distributed computing framework for Python, with libraries layered on it: Ray Train for distributed training, Ray Tune for hyperparameter search, Ray Serve for deployment, and Ray Data for distributed preprocessing.</p>
<p>Its distinctive property is that it orchestrates the whole workload rather than only the training step — data loading, training, and tuning under one cluster abstraction.</p>
<p class="when"><strong>Choose it when:</strong> you need cluster-wide orchestration or large-scale hyperparameter search, not merely multi-GPU training.</p>
</div></details>

<h2 class="fw-sec" id="models">Model libraries</h2>
<p class="fw-lead">Pretrained weights and architectures. These are why almost nobody trains from scratch any more.</p>

<details class="cx"><summary>Hugging Face Transformers</summary><div class="cx-body">
<p>A uniform interface over thousands of pretrained models — text, vision, audio, multimodal — with <code>AutoModel</code>, <code>AutoTokenizer</code>, and <code>AutoProcessor</code> resolving the right classes from a model ID.</p>
<p>Its real contribution is standardisation. Swapping architectures becomes a string change, and the ecosystem around it — PEFT, TRL, Accelerate, Datasets — assumes the same interfaces.</p>
<p class="when"><strong>Choose it when:</strong> you are working with any pretrained model. This is effectively unavoidable and rightly so.</p>
</div></details>

<details class="cx"><summary>Diffusers</summary><div class="cx-body">
<p>The equivalent for diffusion models: pipelines, schedulers, UNet and DiT backbones, VAEs, and ControlNet, composable so you can swap a sampler or attach an adapter without rewriting the pipeline.</p>
<p>The separation of scheduler from model is the good design decision — sampling strategy becomes a runtime choice rather than something baked into the weights.</p>
<p class="when"><strong>Choose it when:</strong> generating or fine-tuning images, video, or audio with diffusion.</p>
</div></details>

<details class="cx"><summary>timm</summary><div class="cx-body">
<p>Ross Wightman's image model library — hundreds of vision backbones with consistent pretrained weights, plus the training utilities, augmentations, and schedulers that go with them.</p>
<p>It is the reference implementation for vision backbones. <code>timm.create_model(name, pretrained=True, num_classes=n)</code> covers most of what an applied vision project needs on day one.</p>
<p class="when"><strong>Choose it when:</strong> you need a vision backbone and want breadth of choice with reliable pretrained weights.</p>
</div></details>

<details class="cx"><summary>torchvision, torchaudio, torchtext</summary><div class="cx-body">
<p>PyTorch's domain libraries: datasets, transforms, common architectures, and — importantly — operators like <code>nms</code>, <code>roi_align</code>, and <code>box_iou</code> implemented as fast, differentiable CUDA kernels.</p>
<p>Even in projects that get models elsewhere, <code>torchvision.ops</code> and <code>transforms.v2</code> remain worth using directly rather than reimplementing.</p>
<p class="when"><strong>Choose it when:</strong> you need standard vision or audio primitives that should be fast and correct.</p>
</div></details>

<details class="cx"><summary>sentence-transformers</summary><div class="cx-body">
<p>Wraps transformer encoders for producing sentence and document embeddings, with pooling, normalisation, similarity search, and training objectives for retrieval built in.</p>
<p>It also supplies cross-encoder rerankers — the two-stage retrieve-then-rerank pattern that most RAG quality improvements come from.</p>
<p class="when"><strong>Choose it when:</strong> building semantic search, retrieval, deduplication, or clustering over text.</p>
</div></details>

<h2 class="fw-sec" id="finetuning">Fine-tuning</h2>
<p class="fw-lead">Adapting a pretrained model without the cost of full training.</p>

<details class="cx"><summary>PEFT</summary><div class="cx-body">
<p>Parameter-efficient fine-tuning: LoRA, QLoRA, prefix tuning, and adapters, integrated with Transformers so a base model becomes trainable with a few lines and a config.</p>
<p>The operational win is deployment shape. Adapters are megabytes rather than gigabytes, compose with each other, and swap at inference — one base model can serve many specialisations.</p>
<p class="when"><strong>Choose it when:</strong> fine-tuning anything large. Full fine-tuning is rarely worth its cost unless you are changing the model's behaviour fundamentally.</p>
</div></details>

<details class="cx"><summary>TRL</summary><div class="cx-body">
<p>Hugging Face's library for the post-training stack: supervised fine-tuning, reward modelling, PPO, and the simpler preference methods such as DPO and its variants.</p>
<p>DPO in particular removed the need for a separate reward model and an RL loop, which is why preference tuning became something a small team can actually run.</p>
<p class="when"><strong>Choose it when:</strong> aligning a model to preferences or instruction data rather than to labels.</p>
</div></details>

<details class="cx"><summary>Unsloth</summary><div class="cx-body">
<p>Optimised fine-tuning kernels that cut memory use and increase throughput substantially versus a naive PEFT setup, while keeping a Transformers-compatible interface.</p>
<p>Its practical effect is fitting a fine-tune onto hardware that otherwise could not run it — a single consumer GPU rather than a rented cluster.</p>
<p class="when"><strong>Choose it when:</strong> you are fine-tuning on constrained hardware and the speedup decides feasibility.</p>
</div></details>

<details class="cx"><summary>Axolotl</summary><div class="cx-body">
<p>A configuration-driven fine-tuning tool: a YAML file specifies the model, dataset, method, and hyperparameters, and it orchestrates the run across the underlying libraries.</p>
<p>The value is reproducibility. The config <em>is</em> the experiment, so runs can be diffed, reviewed, and repeated — which matters more than it sounds once you have done thirty of them.</p>
<p class="when"><strong>Choose it when:</strong> running many fine-tuning variants and wanting each to be a reviewable artefact rather than an edited script.</p>
</div></details>

<h2 class="fw-sec" id="serving">Inference and serving</h2>
<p class="fw-lead">Training frameworks make poor serving engines. This layer exists because throughput, latency, and memory behaviour at inference are a different problem.</p>

<details class="cx"><summary>vLLM</summary><div class="cx-body">
<p>An LLM serving engine built around PagedAttention, which manages the KV cache in fixed-size blocks like virtual memory pages rather than as one contiguous allocation per sequence.</p>
<p>That removes the fragmentation and over-allocation that limited concurrency, and combined with continuous batching it delivers order-of-magnitude throughput gains over a naive <code>model.generate</code> loop. It also serves an OpenAI-compatible API.</p>
<p class="when"><strong>Choose it when:</strong> serving an open-weight LLM to more than one user. The default answer for self-hosted inference.</p>
</div></details>

<details class="cx"><summary>SGLang</summary><div class="cx-body">
<p>A serving engine with a front-end language for structured LLM programs, notable for RadixAttention — automatic prefix-cache reuse across requests that share a prompt prefix.</p>
<p>That property matters for agent and RAG workloads, where every request repeats a long system prompt and tool definitions. The shared prefix is computed once rather than per request.</p>
<p class="when"><strong>Choose it when:</strong> your traffic has heavily shared prefixes, or you need structured generation and complex multi-call control flow.</p>
</div></details>

<details class="cx"><summary>TensorRT &amp; TensorRT-LLM</summary><div class="cx-body">
<p>NVIDIA's inference compilers. A trained network is converted into an optimised engine — layers fused, precision calibrated to FP8 or INT8, kernels selected for the specific GPU.</p>
<p>It generally produces the fastest inference available on NVIDIA hardware. The cost is a build step per model and per GPU architecture, and an engine that is not portable.</p>
<p class="when"><strong>Choose it when:</strong> you are latency-bound on NVIDIA hardware and the deployment target is fixed enough to justify the build pipeline.</p>
</div></details>

<details class="cx"><summary>ONNX Runtime</summary><div class="cx-body">
<p>Executes models in the ONNX interchange format across CPUs, GPUs, mobile chips, and specialised accelerators, with graph optimisations and quantisation support.</p>
<p>Its value is decoupling: train in PyTorch, export once, and run wherever — which matters most for edge and cross-platform deployment where the training stack cannot follow.</p>
<p class="when"><strong>Choose it when:</strong> deploying to CPU, mobile, or heterogeneous hardware, or when the serving environment cannot host PyTorch.</p>
</div></details>

<details class="cx"><summary>llama.cpp &amp; GGUF</summary><div class="cx-body">
<p>A C/C++ inference implementation with aggressive quantisation, running quantised models on CPUs, Apple silicon, and modest GPUs. GGUF is its single-file model format.</p>
<p>It made local LLM inference genuinely practical on consumer hardware, and most desktop LLM applications are built on it.</p>
<p class="when"><strong>Choose it when:</strong> running locally, on-device, or anywhere without a datacentre GPU.</p>
</div></details>

<details class="cx"><summary>torch.compile &amp; TorchScript</summary><div class="cx-body">
<p><code>torch.compile</code> traces a model, fuses operations, and generates optimised kernels — often a substantial speedup from a single line, with no change to your code. TorchScript was the older export path and is largely superseded.</p>
<p>Graph breaks are the thing to watch: data-dependent Python control flow forces the compiler to fall back, silently reducing the benefit. Compiling also costs time on the first call.</p>
<p class="when"><strong>Choose it when:</strong> you want faster PyTorch without leaving PyTorch. Usually the first optimisation to try.</p>
</div></details>

<details class="cx"><summary>Triton Inference Server</summary><div class="cx-body">
<p>NVIDIA's general-purpose serving system: hosts models from multiple frameworks behind one endpoint, with dynamic batching, concurrent model execution, versioning, and model ensembles.</p>
<p>Not to be confused with OpenAI's Triton, which is a language for writing GPU kernels. The names collide constantly.</p>
<p class="when"><strong>Choose it when:</strong> serving several models, possibly from different frameworks, behind consistent infrastructure. vLLM is the better pick for LLMs specifically.</p>
</div></details>

<h2 class="fw-sec" id="classical">Classical ML</h2>
<p class="fw-lead">Still the right answer for most tabular problems, and still where a large share of production value sits.</p>

<details class="cx"><summary>scikit-learn</summary><div class="cx-body">
<p>Classical algorithms behind one consistent <code>fit</code>/<code>predict</code> interface, with pipelines that chain preprocessing and estimation into a single fitted object, plus cross-validation and model selection.</p>
<p>Pipelines are the underrated part: they apply preprocessing inside each CV fold, which is what prevents the leakage that quietly inflates scores when you scale or impute before splitting.</p>
<p class="when"><strong>Choose it when:</strong> the data is tabular, or you need a baseline before anything deeper. Almost every project should start here.</p>
</div></details>

<details class="cx"><summary>XGBoost</summary><div class="cx-body">
<p>Gradient-boosted trees with regularisation, sparsity handling, and efficient parallel training. The default strong model for structured data.</p>
<p>On tabular problems it routinely beats neural networks with far less tuning and far less data, which remains true despite periodic claims otherwise.</p>
<p class="when"><strong>Choose it when:</strong> you have tabular data and want the strongest model quickly.</p>
</div></details>

<details class="cx"><summary>LightGBM</summary><div class="cx-body">
<p>Microsoft's boosting implementation, using histogram-based splitting and leaf-wise growth to train considerably faster than XGBoost on large datasets, with native categorical handling.</p>
<p>Leaf-wise growth is more accurate per tree and more prone to overfitting on small data, so <code>num_leaves</code> and <code>min_data_in_leaf</code> matter more than they do elsewhere.</p>
<p class="when"><strong>Choose it when:</strong> datasets are large enough that XGBoost training time is a bottleneck.</p>
</div></details>

<details class="cx"><summary>CatBoost</summary><div class="cx-body">
<p>Yandex's boosting library, built around ordered target statistics for categorical features and ordered boosting to reduce the prediction shift that causes overfitting.</p>
<p>It handles high-cardinality categorical columns natively and tends to perform well with default parameters, which makes it a strong first attempt on messy business data.</p>
<p class="when"><strong>Choose it when:</strong> the data is heavily categorical and you would rather not hand-engineer encodings.</p>
</div></details>

<h2 class="fw-sec" id="tracking">Tracking and tuning</h2>
<p class="fw-lead">The infrastructure that makes results reproducible and comparisons meaningful.</p>

<details class="cx"><summary>Weights &amp; Biases</summary><div class="cx-body">
<p>Experiment tracking with hosted dashboards — metrics, hyperparameters, system utilisation, artefacts, and sweeps for hyperparameter search, plus report pages for sharing findings.</p>
<p>Its practical value is answering "what exactly produced this checkpoint" months later, and making runs comparable rather than remembered.</p>
<p class="when"><strong>Choose it when:</strong> a team runs many experiments and needs shared visibility.</p>
</div></details>

<details class="cx"><summary>MLflow</summary><div class="cx-body">
<p>Open-source tracking, project packaging, model registry, and deployment. Self-hostable, which is often the deciding factor.</p>
<p>The registry is the piece that matters most in regulated or audited settings — versioned models with stage transitions and lineage back to the run that produced them.</p>
<p class="when"><strong>Choose it when:</strong> you need self-hosting, or a model registry as part of a governed release process.</p>
</div></details>

<details class="cx"><summary>Optuna</summary><div class="cx-body">
<p>Hyperparameter optimisation with a define-by-run API — the search space is expressed in ordinary Python control flow — plus Bayesian sampling and pruning of unpromising trials.</p>
<p>Pruning is where the saving comes from: trials that are clearly losing are stopped early, so the budget concentrates on candidates that might win.</p>
<p class="when"><strong>Choose it when:</strong> tuning matters enough to automate and grid search would be wasteful.</p>
</div></details>

<h2 class="fw-sec" id="code">Code Snippets</h2>
<p class="fw-lead">The characteristic idiom of each framework, side by side. Seeing the same job expressed four ways is usually more informative than any description of the differences.</p>

<details class="cx code" id="code-core"><summary>Core frameworks — the same model, four ways</summary><div class="cx-body">
<div class="snip"><p class="cap">PyTorch — explicit loop, you own every step</p><pre><code>import torch, torch.nn as nn, torch.nn.functional as F

model = nn.Sequential(nn.Linear(784, 256), nn.ReLU(), nn.Linear(256, 10)).cuda()
opt   = torch.optim.AdamW(model.parameters(), lr=3e-4)

for xb, yb in loader:
    xb, yb = xb.cuda(), yb.cuda()
    opt.zero_grad(set_to_none=True)
    loss = F.cross_entropy(model(xb), yb)
    loss.backward()
    opt.step()</code></pre></div>

<div class="snip"><p class="cap">Keras — the loop is hidden</p><pre><code>import keras
model = keras.Sequential([keras.layers.Dense(256, activation="relu"),
                          keras.layers.Dense(10)])
model.compile(optimizer="adamw",
              loss=keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=["accuracy"])
model.fit(x_train, y_train, epochs=5, validation_split=0.1)</code></pre></div>

<div class="snip"><p class="cap">JAX — pure functions, explicit state, composed transformations</p><pre><code>import jax, jax.numpy as jnp, optax

def loss_fn(params, x, y):
    logits = apply_fn(params, x)
    return optax.softmax_cross_entropy_with_integer_labels(logits, y).mean()

@jax.jit                                   # compile the whole step
def step(params, opt_state, x, y):
    loss, grads = jax.value_and_grad(loss_fn)(params, x, y)
    updates, opt_state = optimizer.update(grads, opt_state, params)
    return optax.apply_updates(params, updates), opt_state, loss

per_sample_grads = jax.vmap(jax.grad(loss_fn), in_axes=(None, 0, 0))   # free batching</code></pre></div>

<div class="snip"><p class="cap">torch.compile — one line, no code change</p><pre><code>model = torch.compile(model)      # traces, fuses, generates kernels
# first call pays compilation cost; watch for graph breaks on data-dependent control flow</code></pre></div>
</div></details>

<details class="cx code" id="code-scaling"><summary>Training and scaling</summary><div class="cx-body">
<div class="snip"><p class="cap">Accelerate — your loop, unchanged, now distributed</p><pre><code>from accelerate import Accelerator
acc = Accelerator(mixed_precision="bf16", gradient_accumulation_steps=4)
model, opt, loader = acc.prepare(model, opt, loader)

for xb, yb in loader:
    with acc.accumulate(model):
        loss = F.cross_entropy(model(xb), yb)
        acc.backward(loss)                  # replaces loss.backward()
        opt.step(); opt.zero_grad()
# same script runs on 1 GPU or 64 via `accelerate launch`</code></pre></div>

<div class="snip"><p class="cap">Lightning — structure enforced</p><pre><code>import lightning as L

class Lit(L.LightningModule):
    def __init__(self, net): super().__init__(); self.net = net
    def training_step(self, batch, _):
        x, y = batch
        loss = F.cross_entropy(self.net(x), y)
        self.log("train_loss", loss, prog_bar=True)
        return loss
    def configure_optimizers(self):
        return torch.optim.AdamW(self.parameters(), lr=3e-4)

L.Trainer(max_epochs=10, accelerator="gpu", devices=4, precision="bf16-mixed").fit(Lit(net), loader)</code></pre></div>

<div class="snip"><p class="cap">FSDP — shard the model across ranks</p><pre><code>from torch.distributed.fsdp import FullyShardedDataParallel as FSDP
from torch.distributed.fsdp.wrap import transformer_auto_wrap_policy
import functools

model = FSDP(
    model,
    auto_wrap_policy=functools.partial(transformer_auto_wrap_policy,
                                       transformer_layer_cls={TransformerBlock}),
    device_id=torch.cuda.current_device(),
)
# parameters are gathered per layer during use and released after</code></pre></div>

<div class="snip"><p class="cap">DeepSpeed ZeRO-3 with offload</p><pre><code>{ "zero_optimization": {
    "stage": 3,
    "offload_optimizer": {"device": "cpu", "pin_memory": true},
    "offload_param":     {"device": "cpu", "pin_memory": true}},
  "bf16": {"enabled": true},
  "gradient_accumulation_steps": 8 }</code></pre></div>
</div></details>

<details class="cx code" id="code-models"><summary>Model libraries and fine-tuning</summary><div class="cx-body">
<div class="snip"><p class="cap">Transformers — load, tokenise, generate</p><pre><code>from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

tok = AutoTokenizer.from_pretrained(model_id)
m   = AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=torch.bfloat16, device_map="auto")

ids = tok("Explain KV caching in one sentence.", return_tensors="pt").to(m.device)
out = m.generate(**ids, max_new_tokens=120, do_sample=False)
print(tok.decode(out[0], skip_special_tokens=True))</code></pre></div>

<div class="snip"><p class="cap">timm — a vision backbone in two lines</p><pre><code>import timm
model = timm.create_model("convnext_tiny", pretrained=True, num_classes=10)
cfg   = timm.data.resolve_model_data_config(model)
tf    = timm.data.create_transform(**cfg, is_training=True)   # matching preprocessing</code></pre></div>

<div class="snip"><p class="cap">PEFT — LoRA on a frozen base</p><pre><code>from peft import LoraConfig, get_peft_model

cfg = LoraConfig(r=16, lora_alpha=32, lora_dropout=0.05, bias="none",
                 target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
                 task_type="CAUSAL_LM")
model = get_peft_model(base_model, cfg)
model.print_trainable_parameters()      # typically well under 1% of parameters
model.save_pretrained("adapter/")       # megabytes, not gigabytes</code></pre></div>

<div class="snip"><p class="cap">TRL — preference tuning with DPO</p><pre><code>from trl import DPOTrainer, DPOConfig

trainer = DPOTrainer(
    model=model, ref_model=None,                 # None -> uses the frozen adapter base
    args=DPOConfig(beta=0.1, learning_rate=5e-6, per_device_train_batch_size=2),
    train_dataset=pref_ds,                       # prompt / chosen / rejected
    processing_class=tok,
)
trainer.train()</code></pre></div>
</div></details>

<details class="cx code" id="code-serving"><summary>Inference and serving</summary><div class="cx-body">
<div class="snip"><p class="cap">vLLM — offline batch and served endpoint</p><pre><code>from vllm import LLM, SamplingParams
llm = LLM(model=model_id, tensor_parallel_size=2, gpu_memory_utilization=0.90)
outs = llm.generate(prompts, SamplingParams(temperature=0.7, max_tokens=256))

# or serve an OpenAI-compatible API:
# vllm serve MODEL_ID --tensor-parallel-size 2 --max-model-len 8192</code></pre></div>

<div class="snip"><p class="cap">ONNX export and runtime</p><pre><code>torch.onnx.export(model, sample_input, "model.onnx",
                  input_names=["input"], output_names=["logits"],
                  dynamic_axes={"input": {0: "batch"}, "logits": {0: "batch"}},
                  opset_version=17)

import onnxruntime as ort
sess = ort.InferenceSession("model.onnx", providers=["CUDAExecutionProvider", "CPUExecutionProvider"])
logits = sess.run(None, {"input": x.numpy()})[0]</code></pre></div>

<div class="snip"><p class="cap">Quantised local inference</p><pre><code># llama.cpp / GGUF via python bindings
from llama_cpp import Llama
llm = Llama(model_path="model-Q4_K_M.gguf", n_ctx=8192, n_gpu_layers=-1)
print(llm("Summarise this in one line:", max_tokens=64)["choices"][0]["text"])</code></pre></div>
</div></details>

<details class="cx code" id="code-classical"><summary>Classical ML and tracking</summary><div class="cx-body">
<div class="snip"><p class="cap">scikit-learn — pipeline prevents leakage</p><pre><code>from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.model_selection import cross_val_score

pre = ColumnTransformer([("num", StandardScaler(), num_cols),
                         ("cat", OneHotEncoder(handle_unknown="ignore"), cat_cols)])
pipe = Pipeline([("pre", pre), ("clf", LogisticRegression(max_iter=1000))])
print(cross_val_score(pipe, X, y, cv=5, scoring="roc_auc").mean())
# preprocessing is fitted inside each fold — scaling before the split leaks</code></pre></div>

<div class="snip"><p class="cap">XGBoost with early stopping</p><pre><code>import xgboost as xgb
clf = xgb.XGBClassifier(n_estimators=2000, learning_rate=0.05, max_depth=6,
                        subsample=0.8, colsample_bytree=0.8,
                        early_stopping_rounds=50, eval_metric="auc")
clf.fit(X_tr, y_tr, eval_set=[(X_va, y_va)], verbose=100)
print(clf.best_iteration)</code></pre></div>

<div class="snip"><p class="cap">Tracking a run</p><pre><code>import wandb
wandb.init(project="proj", config={"lr": 3e-4, "bs": 32})
wandb.log({"train_loss": loss.item(), "val_auc": auc}, step=global_step)

# or MLflow, self-hosted
import mlflow
with mlflow.start_run():
    mlflow.log_params({"lr": 3e-4}); mlflow.log_metric("val_auc", auc)
    mlflow.pytorch.log_model(model, "model", registered_model_name="churn")</code></pre></div>

<div class="snip"><p class="cap">Optuna with pruning</p><pre><code>import optuna
def objective(trial):
    lr = trial.suggest_float("lr", 1e-5, 1e-2, log=True)
    depth = trial.suggest_int("max_depth", 3, 10)
    for epoch in range(n_epochs):
        score = train_one_epoch(lr, depth)
        trial.report(score, epoch)
        if trial.should_prune(): raise optuna.TrialPruned()   # abandon losers early
    return score

study = optuna.create_study(direction="maximize", pruner=optuna.pruners.MedianPruner())
study.optimize(objective, n_trials=50)</code></pre></div>
</div></details>

<p style="margin-top:2.5em">Related: <a href="/stacks/">Stacks</a> covers the concepts these frameworks implement, and <a href="/vision/">Vision &amp; Multimodal AI</a> goes deeper on the vision side.</p>

<script src="{{ base_path }}/assets/js/open-target-details.js"></script>
