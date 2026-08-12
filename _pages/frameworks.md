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
.cx-body .sub {
  margin: 1.4em 0 .5em; font-size: .76rem; text-transform: uppercase; letter-spacing: .08em;
  color: #7c848b; font-weight: 700;
}
table.fw-vs { width: 100%; border-collapse: collapse; font-size: .86rem; margin: .3em 0 1em; display: block; overflow-x: auto; }
table.fw-vs th, table.fw-vs td { border: 1px solid #e3e7ea; padding: .45em .65em; text-align: left; vertical-align: top; }
table.fw-vs thead th { background: #f4f7f8; font-size: .8rem; }
table.fw-vs th.pt { background: #eef5f8; color: #1f6f8b; }
table.fw-vs th.tf { background: #f8f3e6; color: #7a601b; }
table.fw-vs td:first-child { font-weight: 600; white-space: nowrap; background: #fafbfb; width: 21%; }
.cx-body .eg { margin: 1em 0 .7em; border-left: 3px solid #cfdce2; padding: .1em 0 .1em .85em; }
.cx-body .eg .eg-lbl {
  display: block; font-size: .72rem; text-transform: uppercase; letter-spacing: .08em;
  font-weight: 700; color: #7c848b; margin-bottom: .3em;
}
.cx-body .eg p { font-size: .9rem; margin: 0 0 .45em; color: #55606a; }
.cx-body .eg pre {
  margin: 0; background: #f6f8f9; border: 1px solid #e2e8eb; border-radius: 4px;
  padding: .65em .8em; overflow-x: auto;
  font-size: .78rem; line-height: 1.55;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.cx-body .eg pre code { background: none; border: none; padding: 0; font-size: inherit; color: #2f3a42; }
.cx-body .gotcha {
  margin-top: .6em; font-size: .89rem; color: #7a4a44; background: #fdf6f5;
  border-left: 3px solid #b83227; padding: .5em .75em; border-radius: 0 3px 3px 0;
}
</style>

<p class="stack-lead">The frameworks that actually get used, grouped by which layer of the stack they occupy. Most confusion here comes from comparing tools that do different jobs: a training helper against a serving engine, or a model library against the tensor framework underneath it.</p>

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
<p class="fw-lead">The tensor and autograd layer. Everything else is built on one of these, so this choice decides your ecosystem more than any other.</p>

<details class="cx"><summary>PyTorch</summary><div class="cx-body">
<p>Builds the computation graph as the code runs, so a model is ordinary Python. You can step through it with a debugger and inspect it with <code>print</code>. Autograd records what you do to tensors and works out the gradients on the backward pass.</p>
<p>It won research first, then production. <code>torch.compile</code> closed most of the old speed gap by tracing and fusing the graph before it runs, which took away the main argument for static-graph frameworks.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>One training step, written out in full — this is the loop every other tool on this page either wraps or replaces.</p>
<pre><code>loss = loss_fn(model(x), y)
opt.zero_grad()
loss.backward()          # autograd walks the recorded graph
opt.step()</code></pre></div>
<p class="when"><strong>Choose it when:</strong> almost always. It is the default for research and for most new production work, and nearly every model library assumes it.</p>

<p class="sub">PyTorch versus TensorFlow</p>

<p>The old answer was dynamic graph against static graph. That no longer holds: TF2 runs eagerly by default, and PyTorch can compile ahead of time. Both now do both. What is left is a set of practical differences that still affect daily work.</p>

<table class="fw-vs">
<thead><tr><th>Dimension</th><th class="pt">PyTorch</th><th class="tf">TensorFlow</th></tr></thead>
<tbody>
<tr><td>Execution</td><td>Eager by default; <code>torch.compile</code> traces and fuses into a graph when you ask for it</td><td>Eager by default since TF2; <code>@tf.function</code> traces into a static graph for speed and export</td></tr>
<tr><td>Debugging</td><td>Ordinary Python — breakpoints, <code>print</code>, and stack traces all work inside the model</td><td>Fine in eager mode. Inside a traced <code>tf.function</code> the Python runs only while tracing, which catches people out</td></tr>
<tr><td>Tensor layout</td><td><code>NCHW</code> — channels before spatial dimensions</td><td><code>NHWC</code> — channels last</td></tr>
<tr><td>Model definition</td><td>Subclass <code>nn.Module</code>, write <code>forward</code>; the training loop is yours to write</td><td>Keras <code>Sequential</code>/functional/subclassing, with <code>model.fit()</code> supplying the loop</td></tr>
<tr><td>Shapes</td><td>Inferred at runtime from real tensors, so errors surface on the first forward pass</td><td>Often known before the model runs, so some errors show up earlier and others get harder to read</td></tr>
<tr><td>Weight format</td><td><code>state_dict</code> — a plain dict of tensors, saved via <code>torch.save</code> or safetensors</td><td>SavedModel — graph plus weights plus signatures in one directory, self-describing</td></tr>
<tr><td>Deployment</td><td>TorchServe, ONNX export, ExecuTorch, TorchScript, plus <code>torch.compile</code> backends</td><td>TF Serving, TFLite for mobile, TensorFlow.js for browsers, TFX for full pipelines</td></tr>
<tr><td>Accelerators</td><td>CUDA and ROCm first class; Apple <code>mps</code>; TPU only through PyTorch/XLA</td><td>CUDA plus native, first-class TPU support</td></tr>
<tr><td>Distributed</td><td>DDP, FSDP, and the DeepSpeed and Accelerate ecosystems</td><td><code>tf.distribute</code> strategies, tightly integrated with TPU pods</td></tr>
<tr><td>Ecosystem gravity</td><td>Nearly all new research and model releases land here first: Transformers, Diffusers, timm</td><td>Large installed base in existing production; fewer new releases target it</td></tr>
</tbody>
</table>

<p class="sub">What this means in practice</p>

<p><span class="k">The layout difference is the one that bites.</span> A convolution weight is <code>[out, in, kH, kW]</code> in PyTorch and <code>[kH, kW, in, out]</code> in TensorFlow. Converting between them means transposing every convolution and dense weight. Get it slightly wrong and the model still runs and still produces plausible output — it is simply incorrect. That is why conversion goes through ONNX or a purpose-built converter rather than by hand.</p>

<p><span class="k">Tracing is where TensorFlow works differently.</span> Inside a <code>tf.function</code>, Python control flow runs once, while tracing, and is then fixed into the graph. So a <code>print</code> fires once rather than on every call, and a Python <code>if</code> on a tensor value quietly locks in one branch. <code>tf.cond</code> and <code>tf.while_loop</code> exist for exactly this. PyTorch fails differently: <code>torch.compile</code> drops back to eager mode on anything it cannot trace, called a graph break, so you lose speed rather than correctness.</p>

<p><span class="k">The deployment gap has narrowed but not closed.</span> TFLite and TensorFlow.js are still the more mature paths for mobile and browser, and TPUs are genuinely TensorFlow's home ground. Everywhere else PyTorch has caught up. And with ONNX export, the framework you train in does not have to be the one you serve in.</p>

<p><span class="k">Keras is not a third option.</span> Keras 3 runs on TensorFlow, PyTorch, or JAX, so "Keras versus PyTorch" is the wrong comparison — you can write Keras and have PyTorch run it.</p>

<div class="gotcha"><strong>If you are asked to pick:</strong> start new work in PyTorch unless something specific pulls the other way — an existing TensorFlow codebase, a TPU training budget, or a mobile or browser target where TFLite or TF.js is the shortest path. Knowing the differences matters more than having shipped both, because joining an existing platform means inheriting whichever one is already there.</div>
</div></details>

<details class="cx"><summary>TensorFlow</summary><div class="cx-body">
<p>Graph-first from the start, which made deployment and cross-platform export strong early on. TF2 made eager execution the default, closing much of the usability gap with PyTorch.</p>
<p>Its remaining strength is where it can run: TFLite for mobile, TensorFlow.js for browsers, TFX for pipelines, and TPU support. It also has a large body of existing production code.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>The same idea in TF2: eager by default, then wrapped in <code>tf.function</code> so it is traced into a graph and runs faster.</p>
<pre><code>@tf.function                       # traced once, then reused
def train_step(x, y):
    with tf.GradientTape() as tape:
        loss = loss_fn(model(x, training=True), y)
    grads = tape.gradient(loss, model.trainable_variables)
    opt.apply_gradients(zip(grads, model.trainable_variables))
    return loss</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you are maintaining existing TensorFlow systems, targeting mobile or browser through TFLite/TF.js, or standardised on TFX. Rarely the choice for a greenfield research project.</p>
<p style="font-size:.88rem;color:#6b7480;margin-top:.6em">The point-by-point comparison against PyTorch — execution, layout, weight formats, deployment, and the conversion traps — sits inside the <strong>PyTorch</strong> entry above.</p>
</div></details>

<details class="cx"><summary>JAX</summary><div class="cx-body">
<p>NumPy-style functions plus transformations you can stack: <code>grad</code> for derivatives, <code>jit</code> for XLA compilation, <code>vmap</code> for automatic batching, <code>pmap</code> and <code>shard_map</code> for parallelism. Functions must be pure, and state is passed in explicitly rather than held in objects.</p>
<p>That purity rule is the whole trade-off. It is unfamiliar and sometimes awkward, and it is exactly what lets the transformations stack so cleanly and the compiler optimise so aggressively.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Transformations stack: take the gradient, compile it, then batch it over many inputs — each is one wrapper.</p>
<pre><code>def loss_fn(params, x, y):
    return jnp.mean((model(params, x) - y) ** 2)

grad_fn  = jax.grad(loss_fn)              # derivative
fast     = jax.jit(grad_fn)               # XLA-compiled
batched  = jax.vmap(fast, in_axes=(None, 0, 0))   # auto-batched</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you are doing research where custom gradients or unusual parallelism matter, running on TPUs, or working in a lab that already uses it. Flax and Optax supply the layers and optimisers.</p>
</div></details>

<details class="cx"><summary>Keras</summary><div class="cx-body">
<p>A high-level model-building API. Keras 3 is backend-agnostic and runs on TensorFlow, PyTorch, or JAX, so the same model code is portable across all three.</p>
<p><code>model.fit()</code> hides the training loop completely. That is excellent for standard supervised setups, and limiting the moment you need a custom loop, unusual loss scheduling, or more than one optimiser.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>The same model runs on any backend — set an environment variable and nothing else changes.</p>
<pre><code>import os; os.environ["KERAS_BACKEND"] = "torch"   # or "tensorflow", "jax"
import keras

model = keras.Sequential([keras.layers.Dense(256, activation="relu"),
                          keras.layers.Dense(10)])
model.compile(optimizer="adamw", loss="sparse_categorical_crossentropy")
model.fit(train_ds, epochs=5, validation_data=val_ds)</code></pre></div>
<p class="when"><strong>Choose it when:</strong> the task is standard, you want to write it quickly, or you are teaching. Go past it when the training loop itself becomes the interesting part.</p>
</div></details>

<h2 class="fw-sec" id="scaling">Training and scaling</h2>
<p class="fw-lead">Removing boilerplate and getting a model across more than one GPU. These sit on top of PyTorch rather than replacing it.</p>

<details class="cx"><summary>PyTorch Lightning</summary><div class="cx-body">
<p>Reorganises training into a <code>LightningModule</code>. You write <code>training_step</code>, <code>validation_step</code>, and <code>configure_optimizers</code>; the Trainer handles device placement, distributed setup, checkpointing, logging, and early stopping.</p>
<p>The benefit is consistency across a team: every project looks the same, and the parts people usually get subtly wrong are written once. The cost is that you have to learn the framework's control flow before you can override it.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>You write the steps; the Trainer handles devices, distribution, checkpoints, and logging.</p>
<pre><code>class LitModel(pl.LightningModule):
    def training_step(self, batch, idx):
        x, y = batch
        loss = F.cross_entropy(self.net(x), y)
        self.log("train_loss", loss)
        return loss
    def configure_optimizers(self):
        return torch.optim.AdamW(self.parameters(), lr=3e-4)

pl.Trainer(accelerator="gpu", devices=4, precision="bf16-mixed").fit(LitModel(), dm)</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you run many experiments and want the structure enforced. Skip it for a one-off training run where the loop is the research.</p>
</div></details>

<details class="cx"><summary>Hugging Face Accelerate</summary><div class="cx-body">
<p>A thin layer that makes one training script run unchanged on CPU, single GPU, multi-GPU, multi-node, or TPU. You keep your own loop; <code>accelerator.prepare()</code> wraps the model, optimiser, and dataloaders, and <code>accelerator.backward()</code> replaces <code>loss.backward()</code>.</p>
<p>Its appeal is how little it takes over. The loop stays yours and stays readable, which usually makes it a better first step than a full framework.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Four changed lines make an existing script run on one GPU, eight GPUs, or several nodes — launched with <code>accelerate launch</code>.</p>
<pre><code>from accelerate import Accelerator
accelerator = Accelerator()
model, opt, dl = accelerator.prepare(model, opt, dl)   # &lt;- added

for x, y in dl:
    loss = loss_fn(model(x), y)
    accelerator.backward(loss)                          # &lt;- replaces loss.backward()
    opt.step(); opt.zero_grad()</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you want distributed training without restructuring your code or adopting a new abstraction.</p>
</div></details>

<details class="cx"><summary>FSDP — Fully Sharded Data Parallel</summary><div class="cx-body">
<p>Built into PyTorch. Shards parameters, gradients, and optimiser state across ranks, gathering each layer's parameters only while it is being used and releasing them afterwards.</p>
<p>Plain DDP copies the whole model onto every GPU, so the biggest model you can train is limited by one device's memory. Sharding removes that ceiling, which is why FSDP is the standard way to train models larger than a single accelerator.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Wrapping per transformer block is what lets each layer's parameters be gathered only while that layer runs.</p>
<pre><code>from torch.distributed.fsdp import FullyShardedDataParallel as FSDP
from torch.distributed.fsdp.wrap import transformer_auto_wrap_policy

model = FSDP(
    model,
    auto_wrap_policy=partial(transformer_auto_wrap_policy,
                             transformer_layer_cls={LlamaDecoderLayer}),
    device_id=torch.cuda.current_device(),
)</code></pre></div>
<p class="when"><strong>Choose it when:</strong> the model no longer fits comfortably on one GPU with its optimiser state, and you want the in-tree PyTorch option.</p>
</div></details>

<details class="cx"><summary>DeepSpeed</summary><div class="cx-body">
<p>Microsoft's training library, best known for ZeRO: three stages that shard optimiser state, then gradients, then parameters. It also adds CPU and NVMe offload, activation checkpointing, and a fast fused-kernel inference path.</p>
<p>Offload is what sets it apart: parameters can spill to CPU memory or disk, so you can train models that genuinely do not fit in all your GPU memory combined. It costs real throughput.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>ZeRO stage 3 shards everything and spills the optimiser to CPU — this config is the whole difference between fitting and not fitting.</p>
<pre><code>// ds_config.json
{"zero_optimization": {"stage": 3,
                       "offload_optimizer": {"device": "cpu"},
                       "offload_param":     {"device": "cpu"}},
 "bf16": {"enabled": true},
 "train_micro_batch_size_per_gpu": 1}

$ deepspeed train.py --deepspeed ds_config.json</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you are training at a scale where FSDP is not enough, or you need offload to make the run possible at all.</p>
</div></details>

<details class="cx"><summary>Megatron-LM</summary><div class="cx-body">
<p>NVIDIA's library for very large language model training, providing tensor parallelism (splitting individual matrix multiplications across GPUs) alongside pipeline and data parallelism.</p>
<p>Combining all three, often called 3-D parallelism, is how frontier-scale training is actually done. It is built for experts and takes a lot of configuration by design.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>The three parallelism dimensions are set as launch flags: 8-way tensor, 4-way pipeline, data parallel over the rest.</p>
<pre><code>$ torchrun --nproc_per_node 8 --nnodes 16 pretrain_gpt.py \
    --tensor-model-parallel-size 8 \
    --pipeline-model-parallel-size 4 \
    --num-layers 80 --hidden-size 8192 --num-attention-heads 64 \
    --sequence-parallel --use-flash-attn</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you are pretraining at a scale where tensor parallelism is required. For fine-tuning, this is the wrong tool.</p>
</div></details>

<details class="cx"><summary>Ray &amp; Ray Train</summary><div class="cx-body">
<p>A general distributed computing framework for Python, with libraries layered on it: Ray Train for distributed training, Ray Tune for hyperparameter search, Ray Serve for deployment, and Ray Data for distributed preprocessing.</p>
<p>What sets it apart is that it runs the whole workload, not just the training step: data loading, training, and tuning all under one cluster.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>One cluster runs the search and the distributed training underneath it.</p>
<pre><code>from ray import tune
from ray.train.torch import TorchTrainer
from ray.train import ScalingConfig

trainer = TorchTrainer(train_loop, scaling_config=ScalingConfig(num_workers=8, use_gpu=True))
tuner = tune.Tuner(trainer, param_space={"train_loop_config": {"lr": tune.loguniform(1e-5, 1e-3)}},
                   tune_config=tune.TuneConfig(num_samples=32))
results = tuner.fit()</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you need cluster-wide orchestration or large-scale hyperparameter search, not just multi-GPU training.</p>
</div></details>

<h2 class="fw-sec" id="models">Model libraries</h2>
<p class="fw-lead">Pretrained weights and architectures. These are why almost nobody trains from scratch any more.</p>

<details class="cx"><summary>Hugging Face Transformers</summary><div class="cx-body">
<p>One consistent interface over thousands of pretrained models across text, vision, audio, and multimodal. <code>AutoModel</code>, <code>AutoTokenizer</code>, and <code>AutoProcessor</code> pick the right classes from a model ID.</p>
<p>Its real contribution is standardisation. Swapping architectures becomes a change of one string, and the tools around it — PEFT, TRL, Accelerate, Datasets — all assume the same interfaces.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Changing the model is changing a string — the surrounding code stays identical.</p>
<pre><code>from transformers import AutoModelForCausalLM, AutoTokenizer

model_id = "meta-llama/Llama-3.1-8B-Instruct"      # swap this line, nothing else
tok   = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id, torch_dtype="auto", device_map="auto")

msgs = [{"role": "user", "content": "Summarise this in one line."}]
ids  = tok.apply_chat_template(msgs, add_generation_prompt=True, return_tensors="pt")
print(tok.decode(model.generate(ids.to(model.device), max_new_tokens=64)[0]))</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you are working with any pretrained model. Effectively unavoidable, and rightly so.</p>
</div></details>

<details class="cx"><summary>Diffusers</summary><div class="cx-body">
<p>The same idea for diffusion models: pipelines, schedulers, UNet and DiT backbones, VAEs, and ControlNet. The pieces slot together, so you can swap a sampler or attach an adapter without rewriting the pipeline.</p>
<p>Keeping the scheduler separate from the model is the good design decision: the sampling strategy becomes a runtime choice rather than something baked into the weights.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Because the scheduler is separate from the model, changing the sampler is one line and needs no retraining.</p>
<pre><code>from diffusers import StableDiffusionXLPipeline, DPMSolverMultistepScheduler

pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0", torch_dtype=torch.float16).to("cuda")

pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)  # sampler swap
image = pipe("a lighthouse in fog", num_inference_steps=25, guidance_scale=6.0).images[0]</code></pre></div>
<p class="when"><strong>Choose it when:</strong> generating or fine-tuning images, video, or audio with diffusion.</p>
</div></details>

<details class="cx"><summary>timm</summary><div class="cx-body">
<p>Ross Wightman's image model library — hundreds of vision backbones with consistent pretrained weights, plus the training utilities, augmentations, and schedulers that go with them.</p>
<p>It is the reference implementation for vision backbones. <code>timm.create_model(name, pretrained=True, num_classes=n)</code> covers most of what an applied vision project needs on day one.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>One call gives you the backbone, the pretrained weights, and the matching preprocessing.</p>
<pre><code>import timm

model = timm.create_model("convnext_base.fb_in22k_ft_in1k", pretrained=True, num_classes=37)
cfg   = timm.data.resolve_data_config({}, model=model)
tf    = timm.data.create_transform(**cfg)     # the exact preprocessing it was trained with

timm.list_models("*vit*", pretrained=True)[:5]</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you need a vision backbone and want breadth of choice with reliable pretrained weights.</p>
</div></details>

<details class="cx"><summary>torchvision, torchaudio, torchtext</summary><div class="cx-body">
<p>PyTorch's domain libraries: datasets, transforms, common architectures, and — importantly — operators such as <code>nms</code>, <code>roi_align</code>, and <code>box_iou</code> written as fast, differentiable CUDA kernels.</p>
<p>Even when the models come from elsewhere, <code>torchvision.ops</code> and <code>transforms.v2</code> are worth using directly rather than rewriting.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>These operators are CUDA kernels, so they are both faster and more correct than a hand-rolled version.</p>
<pre><code>from torchvision.ops import nms, box_iou
import torchvision.transforms.v2 as T

keep = nms(boxes, scores, iou_threshold=0.5)     # fused CUDA kernel
iou  = box_iou(boxes[keep], gt_boxes)

tf = T.Compose([T.RandomResizedCrop(224), T.RandomHorizontalFlip(),
                T.ToDtype(torch.float32, scale=True)])   # v2 handles boxes and masks too</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you need standard vision or audio primitives that should be fast and correct.</p>
</div></details>

<details class="cx"><summary>sentence-transformers</summary><div class="cx-body">
<p>Wraps transformer encoders for producing sentence and document embeddings, with pooling, normalisation, similarity search, and training objectives for retrieval built in.</p>
<p>It also supplies cross-encoder rerankers, which give you the two-stage retrieve-then-rerank pattern that most RAG quality improvements come from.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Retrieve broadly with the fast bi-encoder, then rerank the shortlist with the slower, more accurate cross-encoder.</p>
<pre><code>from sentence_transformers import SentenceTransformer, CrossEncoder, util

bi = SentenceTransformer("BAAI/bge-base-en-v1.5")
doc_emb = bi.encode(docs, normalize_embeddings=True)
hits = util.semantic_search(bi.encode([query], normalize_embeddings=True), doc_emb, top_k=50)[0]

ce = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")
ranked = sorted(zip(ce.predict([(query, docs[h["corpus_id"]]) for h in hits]), hits), reverse=True)[:5]</code></pre></div>
<p class="when"><strong>Choose it when:</strong> building semantic search, retrieval, deduplication, or clustering over text.</p>
</div></details>

<h2 class="fw-sec" id="finetuning">Fine-tuning</h2>
<p class="fw-lead">Adapting a pretrained model without the cost of full training.</p>

<details class="cx"><summary>PEFT</summary><div class="cx-body">
<p>Parameter-efficient fine-tuning: LoRA, QLoRA, prefix tuning, and adapters, integrated with Transformers so a base model becomes trainable with a few lines and a config.</p>
<p>The practical win is size. Adapters are megabytes rather than gigabytes, they combine with each other, and they can be swapped at inference, so one base model can serve many specialisations.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Two lines turn a frozen 8B model into something trainable on one GPU, and the saved adapter is a few megabytes.</p>
<pre><code>from peft import LoraConfig, get_peft_model

cfg = LoraConfig(r=16, lora_alpha=32, lora_dropout=0.05,
                 target_modules=["q_proj", "k_proj", "v_proj", "o_proj"])
model = get_peft_model(model, cfg)
model.print_trainable_parameters()     # trainable: 0.12% of all parameters

model.save_pretrained("./adapter")     # megabytes, not gigabytes</code></pre></div>
<p class="when"><strong>Choose it when:</strong> fine-tuning anything large. Full fine-tuning is rarely worth its cost unless you are changing the model's behaviour fundamentally.</p>
</div></details>

<details class="cx"><summary>TRL</summary><div class="cx-body">
<p>Hugging Face's library for the post-training stack: supervised fine-tuning, reward modelling, PPO, and the simpler preference methods such as DPO and its variants.</p>
<p>DPO in particular removed the need for a separate reward model and an RL loop, which is why a small team can now run preference tuning at all.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>DPO needs only preference pairs — no reward model and no RL loop.</p>
<pre><code>from trl import DPOTrainer, DPOConfig

# dataset rows: {"prompt": ..., "chosen": ..., "rejected": ...}
trainer = DPOTrainer(
    model=model, ref_model=None,          # ref_model=None reuses the frozen base
    args=DPOConfig(beta=0.1, learning_rate=5e-6, output_dir="./dpo"),
    train_dataset=prefs, processing_class=tok,
)
trainer.train()</code></pre></div>
<p class="when"><strong>Choose it when:</strong> aligning a model to preferences or instruction data rather than to labels.</p>
</div></details>

<details class="cx"><summary>Unsloth</summary><div class="cx-body">
<p>Optimised fine-tuning kernels that cut memory use and raise throughput well beyond a plain PEFT setup, while keeping a Transformers-compatible interface.</p>
<p>The practical effect is fitting a fine-tune onto hardware that could not otherwise run it: a single consumer GPU rather than a rented cluster.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Same fine-tune, roughly half the memory — which is what makes a 16 GB consumer GPU enough.</p>
<pre><code>from unsloth import FastLanguageModel

model, tok = FastLanguageModel.from_pretrained(
    "unsloth/llama-3.1-8b-bnb-4bit", max_seq_length=2048, load_in_4bit=True)

model = FastLanguageModel.get_peft_model(model, r=16, use_gradient_checkpointing="unsloth")
# then train with the usual SFTTrainer</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you are fine-tuning on constrained hardware and the speedup decides feasibility.</p>
</div></details>

<details class="cx"><summary>Axolotl</summary><div class="cx-body">
<p>A configuration-driven fine-tuning tool: a YAML file specifies the model, dataset, method, and hyperparameters, and it orchestrates the run across the underlying libraries.</p>
<p>The value is reproducibility. The config <em>is</em> the experiment, so runs can be diffed, reviewed, and repeated. That matters more than it sounds once you have done thirty of them.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>The YAML is the experiment: commit it, diff it against last week's, and the run is reproducible.</p>
<pre><code># qlora-llama.yml
base_model: meta-llama/Llama-3.1-8B
adapter: qlora
load_in_4bit: true
lora_r: 32
datasets:
  - path: ./data/train.jsonl
    type: alpaca
sequence_len: 4096
micro_batch_size: 2

$ axolotl train qlora-llama.yml</code></pre></div>
<p class="when"><strong>Choose it when:</strong> running many fine-tuning variants and want each one to be a reviewable file rather than an edited script.</p>
</div></details>

<h2 class="fw-sec" id="serving">Inference and serving</h2>
<p class="fw-lead">Training frameworks make poor serving engines. This layer exists because throughput, latency, and memory behaviour at inference are a different problem.</p>

<details class="cx"><summary>vLLM</summary><div class="cx-body">
<p>An LLM serving engine built around PagedAttention, which stores the KV cache in fixed-size blocks like virtual memory pages rather than one continuous block per sequence.</p>
<p>That removes the fragmentation and over-allocation that used to limit concurrency. Together with continuous batching, it gives throughput gains of around ten times over a plain <code>model.generate</code> loop. It also serves an OpenAI-compatible API.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>One command gives you an OpenAI-compatible endpoint that any existing client can point at.</p>
<pre><code>$ vllm serve meta-llama/Llama-3.1-8B-Instruct --max-model-len 8192

from openai import OpenAI
client = OpenAI(base_url="http://localhost:8000/v1", api_key="none")
client.chat.completions.create(model="meta-llama/Llama-3.1-8B-Instruct",
                               messages=[{"role": "user", "content": "hello"}])</code></pre></div>
<p class="when"><strong>Choose it when:</strong> serving an open-weight LLM to more than one user. The default answer for self-hosted inference.</p>
</div></details>

<details class="cx"><summary>SGLang</summary><div class="cx-body">
<p>A serving engine with a front-end language for structured LLM programs, notable for RadixAttention — automatic prefix-cache reuse across requests that share a prompt prefix.</p>
<p>That matters for agent and RAG workloads, where every request repeats a long system prompt and the same tool definitions. The shared prefix is computed once rather than on every request.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Every request here repeats the same long system prompt; RadixAttention computes that prefix once and reuses it.</p>
<pre><code>$ python -m sglang.launch_server --model-path meta-llama/Llama-3.1-8B-Instruct

import sglang as sgl

@sgl.function
def classify(s, doc):
    s += sgl.system(LONG_SHARED_INSTRUCTIONS)   # cached across every call
    s += sgl.user(doc)
    s += sgl.assistant(sgl.gen("label", choices=["billing", "technical", "other"]))</code></pre></div>
<p class="when"><strong>Choose it when:</strong> your traffic has heavily shared prefixes, or you need structured generation and complex multi-call control flow.</p>
</div></details>

<details class="cx"><summary>TensorRT &amp; TensorRT-LLM</summary><div class="cx-body">
<p>NVIDIA's inference compilers. A trained network is converted into an optimised engine — layers fused, precision calibrated to FP8 or INT8, kernels selected for the specific GPU.</p>
<p>It generally produces the fastest inference available on NVIDIA hardware. The cost is a build step per model and per GPU architecture, and an engine that is not portable.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>The build step is per model and per GPU, and produces an engine tied to that hardware.</p>
<pre><code>$ trtllm-build --checkpoint_dir ./llama-ckpt \
               --gemm_plugin float16 --max_batch_size 64 \
               --output_dir ./engine

import torch_tensorrt          # the PyTorch-side route
opt = torch_tensorrt.compile(model, inputs=[torch_tensorrt.Input((1, 3, 224, 224))],
                             enabled_precisions={torch.float16})</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you are latency-bound on NVIDIA hardware and the deployment target is fixed enough to justify the build pipeline.</p>
</div></details>

<details class="cx"><summary>ONNX Runtime</summary><div class="cx-body">
<p>Executes models in the ONNX interchange format across CPUs, GPUs, mobile chips, and specialised accelerators, with graph optimisations and quantisation support.</p>
<p>Its value is separation: train in PyTorch, export once, and run anywhere. That matters most for edge and cross-platform deployment, where the training stack cannot follow.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Export once from PyTorch, then run the same file on a CPU server, a phone, or an accelerator.</p>
<pre><code>torch.onnx.export(model, dummy, "model.onnx", opset_version=17,
                  dynamic_axes={"input": {0: "batch"}, "output": {0: "batch"}})

import onnxruntime as ort
sess = ort.InferenceSession("model.onnx", providers=["CPUExecutionProvider"])
out  = sess.run(None, {"input": x.numpy()})[0]</code></pre></div>
<p class="when"><strong>Choose it when:</strong> deploying to CPU, mobile, or heterogeneous hardware, or when the serving environment cannot host PyTorch.</p>
</div></details>

<details class="cx"><summary>llama.cpp &amp; GGUF</summary><div class="cx-body">
<p>A C/C++ inference implementation with aggressive quantisation, running quantised models on CPUs, Apple silicon, and modest GPUs. GGUF is its single-file model format.</p>
<p>It made local LLM inference genuinely practical on consumer hardware, and most desktop LLM applications are built on it.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>A quantised GGUF file runs on a laptop with no GPU and no Python at all.</p>
<pre><code>$ llama-cli -m ./Llama-3.1-8B-Instruct-Q4_K_M.gguf \
            -p "Explain quantisation in two sentences." -n 128

$ llama-server -m ./Llama-3.1-8B-Instruct-Q4_K_M.gguf --port 8080
# Q4_K_M: ~4.5 GB on disk instead of ~16 GB at fp16</code></pre></div>
<p class="when"><strong>Choose it when:</strong> running locally, on-device, or anywhere without a datacentre GPU.</p>
</div></details>

<details class="cx"><summary>torch.compile &amp; TorchScript</summary><div class="cx-body">
<p><code>torch.compile</code> traces a model, fuses operations, and generates optimised kernels. It is often a substantial speedup from a single line, with no other change to your code. TorchScript was the older export path and has largely been replaced.</p>
<p>Graph breaks are the thing to watch. Python control flow that depends on data forces the compiler to fall back, quietly reducing the benefit. Compiling also costs time on the first call.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>One line, no other change — and a way to check whether anything is silently falling back.</p>
<pre><code>model = torch.compile(model)            # first call is slow, then it pays off

# find graph breaks before they cost you the speedup
import torch._dynamo as dynamo
print(dynamo.explain(model)(example_input).break_reasons)</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you want faster PyTorch without leaving PyTorch. Usually the first optimisation to try.</p>
</div></details>

<details class="cx"><summary>Triton Inference Server</summary><div class="cx-body">
<p>NVIDIA's general-purpose serving system. It hosts models from several frameworks behind one endpoint, with dynamic batching, concurrent model execution, versioning, and model ensembles.</p>
<p>Not to be confused with OpenAI's Triton, which is a language for writing GPU kernels. The names collide constantly.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Models are directories in a repository; the server exposes all of them behind one endpoint.</p>
<pre><code>model_repository/
  detector/
    1/model.onnx
    config.pbtxt      # dynamic_batching { max_queue_delay_microseconds: 100 }
  classifier/
    1/model.pt

$ tritonserver --model-repository=/model_repository
$ curl localhost:8000/v2/models/detector/infer -d @request.json</code></pre></div>
<p class="when"><strong>Choose it when:</strong> serving several models, possibly from different frameworks, behind one piece of infrastructure. vLLM is the better pick for LLMs specifically.</p>
</div></details>

<h2 class="fw-sec" id="classical">Classical ML</h2>
<p class="fw-lead">Still the right answer for most tabular problems, and still where a large share of production value sits.</p>

<details class="cx"><summary>scikit-learn</summary><div class="cx-body">
<p>Classical algorithms behind one consistent <code>fit</code>/<code>predict</code> interface. Pipelines chain preprocessing and estimation into a single fitted object, and there is cross-validation and model selection alongside.</p>
<p>Pipelines are the underrated part. They apply preprocessing inside each cross-validation fold, which prevents the leakage that quietly inflates scores when you scale or impute before splitting.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Putting the scaler inside the pipeline is what keeps it fitted per fold — do it outside and the score is inflated.</p>
<pre><code>from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import cross_val_score

pipe = Pipeline([("scale", StandardScaler()),
                 ("clf",   LogisticRegression(max_iter=1000))])

cross_val_score(pipe, X, y, cv=5, scoring="roc_auc")   # scaler refits inside each fold</code></pre></div>
<p class="when"><strong>Choose it when:</strong> the data is tabular, or you need a baseline before anything deeper. Almost every project should start here.</p>
</div></details>

<details class="cx"><summary>XGBoost</summary><div class="cx-body">
<p>Gradient-boosted trees with regularisation, sparsity handling, and efficient parallel training. The default strong model for structured data.</p>
<p>On tabular problems it routinely beats neural networks with far less tuning and far less data. That is still true, despite regular claims otherwise.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Early stopping on a validation set is the one thing that matters most, and missing values need no imputation.</p>
<pre><code>from xgboost import XGBClassifier

clf = XGBClassifier(n_estimators=2000, max_depth=6, learning_rate=0.05,
                    subsample=0.8, colsample_bytree=0.8,
                    scale_pos_weight=neg / pos,        # class imbalance
                    early_stopping_rounds=50, eval_metric="aucpr")

clf.fit(X_train, y_train, eval_set=[(X_valid, y_valid)])   # NaNs handled natively</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you have tabular data and want the strongest model quickly.</p>
</div></details>

<details class="cx"><summary>LightGBM</summary><div class="cx-body">
<p>Microsoft's boosting implementation. Histogram-based splitting and leaf-wise growth make it train much faster than XGBoost on large datasets, and it handles categorical features natively.</p>
<p>Leaf-wise growth is more accurate per tree and overfits more easily on small data, so <code>num_leaves</code> and <code>min_data_in_leaf</code> matter more here than elsewhere.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Categorical columns go in as-is, and the two leaf-wise parameters are what you actually tune.</p>
<pre><code>import lightgbm as lgb

X["region"] = X["region"].astype("category")      # no encoding needed
ds = lgb.Dataset(X_train, y_train, categorical_feature=["region"])

lgb.train({"objective": "binary", "num_leaves": 63, "min_data_in_leaf": 100,
           "learning_rate": 0.05, "metric": "auc"},
          ds, num_boost_round=3000,
          valid_sets=[lgb.Dataset(X_valid, y_valid)],
          callbacks=[lgb.early_stopping(100)])</code></pre></div>
<p class="when"><strong>Choose it when:</strong> datasets are large enough that XGBoost training time is a bottleneck.</p>
</div></details>

<details class="cx"><summary>CatBoost</summary><div class="cx-body">
<p>Yandex's boosting library. It uses ordered target statistics for categorical features, and ordered boosting to reduce the prediction shift that causes overfitting.</p>
<p>It handles categorical columns with many distinct values natively, and tends to do well on default settings, which makes it a strong first attempt on messy business data.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Name the categorical columns and it handles the encoding, usually well on default settings.</p>
<pre><code>from catboost import CatBoostClassifier, Pool

cats = ["city", "device", "merchant_id"]          # high-cardinality is fine
train = Pool(X_train, y_train, cat_features=cats)

model = CatBoostClassifier(iterations=2000, learning_rate=0.05, eval_metric="AUC",
                           early_stopping_rounds=100, verbose=200)
model.fit(train, eval_set=Pool(X_valid, y_valid, cat_features=cats))</code></pre></div>
<p class="when"><strong>Choose it when:</strong> the data is heavily categorical and you would rather not hand-engineer encodings.</p>
</div></details>

<h2 class="fw-sec" id="tracking">Tracking and tuning</h2>
<p class="fw-lead">The infrastructure that makes results reproducible and comparisons meaningful.</p>

<details class="cx"><summary>Weights &amp; Biases</summary><div class="cx-body">
<p>Experiment tracking with hosted dashboards: metrics, hyperparameters, system usage, artefacts, and sweeps for hyperparameter search, plus report pages for sharing findings.</p>
<p>Its practical value is being able to answer "what exactly produced this checkpoint" months later, and making runs comparable rather than remembered.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>Logging the config alongside the metrics is what lets you answer, months later, what produced a checkpoint.</p>
<pre><code>import wandb

wandb.init(project="fraud", config={"lr": 3e-4, "model": "xgb", "features": "v7"})
for epoch in range(epochs):
    wandb.log({"epoch": epoch, "val_auc": auc, "val_loss": loss})

wandb.log_artifact("model.pkl", name="fraud-model", type="model")</code></pre></div>
<p class="when"><strong>Choose it when:</strong> a team runs many experiments and needs shared visibility.</p>
</div></details>

<details class="cx"><summary>MLflow</summary><div class="cx-body">
<p>Open-source tracking, project packaging, model registry, and deployment. Self-hostable, which is often the deciding factor.</p>
<p>The registry matters most in regulated or audited settings: versioned models with stage transitions and a trail back to the run that produced them.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>The registry is the part that matters: a versioned model with a trail back to the exact run.</p>
<pre><code>import mlflow

with mlflow.start_run() as run:
    mlflow.log_params({"max_depth": 6, "lr": 0.05})
    mlflow.log_metric("val_auc", 0.87)
    mlflow.sklearn.log_model(clf, "model")

mlflow.register_model(f"runs:/{run.info.run_id}/model", "readmission-risk")
# then promote that version through Staging -&gt; Production</code></pre></div>
<p class="when"><strong>Choose it when:</strong> you need self-hosting, or a model registry as part of a governed release process.</p>
</div></details>

<details class="cx"><summary>Optuna</summary><div class="cx-body">
<p>Hyperparameter optimisation with a define-by-run API, meaning the search space is written in ordinary Python control flow. It also does Bayesian sampling and prunes unpromising trials.</p>
<p>Pruning is where the saving comes from. Trials that are clearly losing get stopped early, so the budget goes to candidates that might win.</p>
<div class="eg"><span class="eg-lbl">Example</span>
<p>The search space is ordinary Python, and pruning stops losing trials before they waste the budget.</p>
<pre><code>import optuna

def objective(trial):
    params = {"max_depth":     trial.suggest_int("max_depth", 3, 10),
              "learning_rate": trial.suggest_float("learning_rate", 1e-3, 0.3, log=True)}
    for step, auc in enumerate(train_with(params)):
        trial.report(auc, step)
        if trial.should_prune():          # stop a losing trial early
            raise optuna.TrialPruned()
    return auc

study = optuna.create_study(direction="maximize", pruner=optuna.pruners.MedianPruner())
study.optimize(objective, n_trials=100)</code></pre></div>
<p class="when"><strong>Choose it when:</strong> tuning matters enough to automate and grid search would be wasteful.</p>
</div></details>

<h2 class="fw-sec" id="code">Code Snippets</h2>
<p class="fw-lead">The typical style of each framework, side by side. Seeing the same job written four ways usually tells you more than any description of the differences.</p>

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
