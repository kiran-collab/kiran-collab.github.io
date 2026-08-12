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

/* vocabulary */
.gl { margin: 0 0 1.3em; padding-bottom: 1.1em; border-bottom: 1px dashed #e9edef; }
.gl:last-child { border-bottom: 0; padding-bottom: 0; margin-bottom: 0; }
.gl .gl-t {
  display: block; font-weight: 700; color: #23303a; font-size: .97rem; margin-bottom: .25em;
  scroll-margin-top: 24px;
}
.cx-body .gl p { font-size: .92rem; margin: 0 0 .45em; line-height: 1.6; }
.cx-body .gl p.gl-m {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .85rem;
  color: #5d3f7a; background: #f7f4fa; border-left: 3px solid #cbbcd9;
  padding: .45em .75em; border-radius: 0 3px 3px 0; margin: 0 0 .45em;
  overflow-x: auto; white-space: nowrap;
}
.gl pre {
  margin: 0; background: #f6f8f9; border: 1px solid #e2e8eb; border-radius: 4px;
  padding: .55em .75em; overflow-x: auto; font-size: .78rem; line-height: 1.55;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.gl pre code { background: none; border: none; padding: 0; font-size: inherit; color: #2f3a42; }
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
<a class="stack-back" href="#vocab">Technical vocabulary</a>
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

<h2 class="fw-sec" id="vocab">Technical vocabulary</h2>
<p class="fw-lead">Every technical term used on this page, defined in one or two sentences, with the maths where it clarifies and a line of code where it makes it concrete. Grouped by where you meet them.</p>

<details class="cx"><summary>1 · Training basics</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-tensor">Tensor</span>
<p>An array with any number of dimensions, held on CPU or GPU. A number is 0-D, a vector 1-D, an image 3-D, a batch of images 4-D.</p>
<p class="gl-m">image batch: [N, C, H, W] = [32, 3, 224, 224]</p>
<pre><code>x = torch.randn(32, 3, 224, 224, device="cuda")
x.shape, x.dtype, x.device</code></pre></div>

<div class="gl"><span class="gl-t" id="v-params">Parameters and weights</span>
<p>The numbers the model learns. "Weights" usually means the multiplicative ones, "parameters" means all of them including biases. Model size is quoted in parameter count — 8B means eight billion.</p>
<p class="gl-m">y = Wx + b &nbsp;&nbsp;→&nbsp;&nbsp; W and b are the parameters</p>
<pre><code>sum(p.numel() for p in model.parameters())</code></pre></div>

<div class="gl"><span class="gl-t" id="v-forward">Forward pass</span>
<p>Running input through the model to get an output. Nothing is learned yet; this is just the prediction.</p>
<pre><code>logits = model(x)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-loss">Loss function</span>
<p>A single number saying how wrong the prediction is. Training is the process of making it smaller.</p>
<p class="gl-m">L = f(prediction, target) &nbsp;&nbsp;→&nbsp;&nbsp; lower is better</p>
<pre><code>loss = F.cross_entropy(logits, y)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-logits">Logits</span>
<p>The model's raw output scores, before they are turned into probabilities. They can be any real number, positive or negative.</p>
<p class="gl-m">logits ∈ ℝ &nbsp;&nbsp;vs&nbsp;&nbsp; probabilities ∈ [0, 1] summing to 1</p>
<pre><code>logits = model(x)                 # e.g. [2.1, -0.4, 0.9]
probs  = torch.softmax(logits, -1)  # e.g. [0.68, 0.06, 0.21]</code></pre></div>

<div class="gl"><span class="gl-t" id="v-softmax">Softmax</span>
<p>Turns a vector of logits into probabilities that sum to 1. Exponentiating first means the largest logit dominates, which is why it is called <em>soft</em> max.</p>
<p class="gl-m">softmax(z)ᵢ = e^(zᵢ) / Σⱼ e^(zⱼ)</p>
<pre><code>probs = torch.softmax(logits, dim=-1)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-sigmoid">Sigmoid</span>
<p>Squashes one number into the range 0 to 1. Used for binary problems where each output is an independent yes/no rather than a choice between classes.</p>
<p class="gl-m">σ(z) = 1 / (1 + e^(−z))</p>
<pre><code>p = torch.sigmoid(logit)          # single probability</code></pre></div>

<div class="gl"><span class="gl-t" id="v-cross-entropy">Cross entropy</span>
<p>The standard classification loss. It measures how far the predicted probability distribution is from the true one. Because the true distribution puts all its mass on the correct class, it reduces to the negative log of the probability the model gave that class.</p>
<p class="gl-m">H(y, ŷ) = −Σᵢ yᵢ · log ŷᵢ &nbsp;&nbsp;→&nbsp;&nbsp; for true class c: −log ŷ_c</p>
<p>Predict 0.9 for the right answer and the loss is 0.105. Predict 0.1 and it is 2.303. Predict near zero and it explodes — which is exactly the intent: confident and wrong should hurt.</p>
<pre><code>loss = F.cross_entropy(logits, targets)   # takes LOGITS, applies softmax itself
# equivalent, the long way:
loss = F.nll_loss(torch.log_softmax(logits, -1), targets)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-bce">Binary cross entropy</span>
<p>The two-class version, applied independently to each output. Used for yes/no problems and multi-label problems where several labels can be true at once.</p>
<p class="gl-m">L = −[ y·log ŷ + (1−y)·log(1−ŷ) ]</p>
<pre><code>loss = F.binary_cross_entropy_with_logits(logit, target)  # fuses sigmoid, numerically safer</code></pre></div>

<div class="gl"><span class="gl-t" id="v-mse">Mean squared error</span>
<p>The standard regression loss: average squared difference between prediction and target. Squaring punishes large errors far more than small ones, which also makes it sensitive to outliers.</p>
<p class="gl-m">MSE = (1/n) Σ (yᵢ − ŷᵢ)²</p>
<pre><code>loss = F.mse_loss(pred, target)
loss = F.l1_loss(pred, target)     # mean absolute error - less outlier-sensitive</code></pre></div>

<div class="gl"><span class="gl-t" id="v-gradient">Gradient</span>
<p>The derivative of the loss with respect to each parameter — how much the loss would change if that parameter moved slightly, and in which direction. Training moves every parameter a little way <em>against</em> its gradient.</p>
<p class="gl-m">∇L = [ ∂L/∂w₁, ∂L/∂w₂, … ]</p>
<pre><code>loss.backward()
model.fc.weight.grad          # the gradient for that layer's weights</code></pre></div>

<div class="gl"><span class="gl-t" id="v-backward">Backward pass and backpropagation</span>
<p>Computing those gradients by applying the chain rule backwards through the network, layer by layer, reusing each layer's result for the one before it.</p>
<p class="gl-m">∂L/∂w = (∂L/∂out) · (∂out/∂w) &nbsp;— the chain rule</p>
<pre><code>loss.backward()               # fills .grad on every parameter</code></pre></div>

<div class="gl"><span class="gl-t" id="v-autograd">Autograd / automatic differentiation</span>
<p>The machinery that records every operation performed on a tensor and can therefore differentiate the whole chain automatically. You never write a derivative by hand.</p>
<pre><code>x = torch.tensor(3.0, requires_grad=True)
y = x ** 2
y.backward()
x.grad        # tensor(6.) - because dy/dx = 2x</code></pre></div>

<div class="gl"><span class="gl-t" id="v-graph">Computation graph</span>
<p>The record of which operations produced which tensors. PyTorch builds it as the code runs and throws it away after each backward pass; graph-mode frameworks build it once and reuse it.</p>
<pre><code>loss.grad_fn                  # the node that produced this tensor</code></pre></div>

<div class="gl"><span class="gl-t" id="v-optimiser">Optimiser</span>
<p>The rule that turns gradients into parameter updates. Plain SGD steps directly against the gradient; Adam and AdamW keep running averages of the gradient and its square so each parameter gets its own effective step size.</p>
<p class="gl-m">SGD: w ← w − α·∇L &nbsp;&nbsp;&nbsp; (α = learning rate)</p>
<pre><code>opt = torch.optim.AdamW(model.parameters(), lr=3e-4, weight_decay=0.01)
opt.step()          # apply the update
opt.zero_grad()     # clear gradients, or they accumulate</code></pre></div>

<div class="gl"><span class="gl-t" id="v-lr">Learning rate</span>
<p>How big a step to take against the gradient. Too high and training diverges; too low and it crawls or gets stuck. The single most important hyperparameter.</p>
<p class="gl-m">typical: 3e-4 for Adam, 1e-5 to 5e-5 for fine-tuning a pretrained model</p>
<pre><code>sched = torch.optim.lr_scheduler.CosineAnnealingLR(opt, T_max=epochs)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-batch">Batch, mini-batch, epoch, step</span>
<p>A <span class="k">batch</span> is the group of examples processed together before one update. An <span class="k">epoch</span> is one full pass over the training set. A <span class="k">step</span> is one parameter update.</p>
<p class="gl-m">steps per epoch = dataset size ÷ batch size</p>
<pre><code>for epoch in range(10):
    for batch in dataloader:      # one step per batch
        ...</code></pre></div>

<div class="gl"><span class="gl-t" id="v-grad-accum">Gradient accumulation</span>
<p>Summing gradients over several small batches before stepping, to simulate a large batch that would not fit in memory.</p>
<p class="gl-m">effective batch = micro-batch × accumulation steps × number of GPUs</p>
<pre><code>(loss / accum).backward()
if (i + 1) % accum == 0:
    opt.step(); opt.zero_grad()</code></pre></div>

<div class="gl"><span class="gl-t" id="v-overfit">Overfitting and underfitting</span>
<p>Overfitting is learning the training data itself rather than the pattern — training loss keeps falling while validation loss rises. Underfitting is the model being too weak to capture the pattern at all.</p>
<p class="gl-m">overfit: train ↓ &nbsp; val ↑ &nbsp;&nbsp;|&nbsp;&nbsp; underfit: both high</p></div>

<div class="gl"><span class="gl-t" id="v-regularisation">Regularisation</span>
<p>Anything that constrains the model so it generalises instead of memorising: weight decay, dropout, data augmentation, early stopping.</p>
<p class="gl-m">L_total = L + λ·‖w‖²  &nbsp;(L2 / weight decay)</p>
<pre><code>opt = torch.optim.AdamW(model.parameters(), weight_decay=0.01)
nn.Dropout(p=0.1)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-early-stopping">Early stopping</span>
<p>Stopping training when validation performance stops improving, and keeping the best checkpoint. Must use a validation set separate from the test set, or the reported score is optimistic.</p>
<pre><code>clf.fit(X_tr, y_tr, eval_set=[(X_val, y_val)])   # xgboost: early_stopping_rounds=50</code></pre></div>

<div class="gl"><span class="gl-t" id="v-train-val-test">Train, validation, test</span>
<p>Train fits the parameters. Validation tunes the choices you make by hand — learning rate, when to stop. Test is touched once, at the end. Reusing test for decisions turns it into a validation set and inflates the number you report.</p></div>

</div></details>

<details class="cx"><summary>2 · Numbers, memory and precision</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-precision">Floating-point precision</span>
<p>How many bits each number uses. Fewer bits means less memory and faster arithmetic, at the cost of range or accuracy. <span class="k">bf16</span> keeps fp32's exponent range with fewer mantissa bits, which is why it trains stably where fp16 overflows.</p>
<p class="gl-m">fp32: 4 bytes · fp16: 2 · bf16: 2 · fp8: 1 · int8: 1 · int4: 0.5</p>
<pre><code>model.to(torch.bfloat16)
# an 8B model: 32 GB at fp32, 16 GB at bf16, 4 GB at int4</code></pre></div>

<div class="gl"><span class="gl-t" id="v-mixed-precision">Mixed precision</span>
<p>Doing most arithmetic in 16-bit while keeping a 32-bit copy of the weights and the loss accumulation, so you get the speed without the numerical instability.</p>
<pre><code>with torch.autocast("cuda", dtype=torch.bfloat16):
    loss = loss_fn(model(x), y)
loss.backward()</code></pre></div>

<div class="gl"><span class="gl-t" id="v-quantisation">Quantisation</span>
<p>Storing weights and activations as low-precision integers, with a scale factor to map them back. Post-training quantisation converts an already-trained model; quantisation-aware training simulates the rounding during training so the model adapts to it.</p>
<p class="gl-m">q = round(x / s) + z &nbsp;&nbsp;→&nbsp;&nbsp; x ≈ s · (q − z)</p>
<pre><code>model = AutoModelForCausalLM.from_pretrained(mid, load_in_4bit=True)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-activation-ckpt">Activation checkpointing</span>
<p>Not storing every intermediate activation for the backward pass, and recomputing them instead. Trades roughly 30% more compute for a large memory saving — often the difference between a model fitting and not.</p>
<pre><code>from torch.utils.checkpoint import checkpoint
out = checkpoint(block, x)        # recompute this block's activations later</code></pre></div>

<div class="gl"><span class="gl-t" id="v-kv-cache">KV cache</span>
<p>During generation, each new token attends to every previous one. Rather than recomputing their keys and values every step, they are cached. It makes generation fast and it is the main consumer of memory when serving.</p>
<p class="gl-m">size ≈ 2 × layers × heads × head_dim × seq_len × batch × bytes</p>
<pre><code>out = model.generate(ids, use_cache=True)   # on by default</code></pre></div>

<div class="gl"><span class="gl-t" id="v-oom">Out of memory (OOM)</span>
<p>GPU memory holds four things: weights, gradients, optimiser state, and activations. Adam keeps two extra values per parameter, so optimiser state alone is typically twice the model size.</p>
<p class="gl-m">fp32 training ≈ 16 bytes/param: 4 weights + 4 grads + 8 Adam state</p></div>

</div></details>

<details class="cx"><summary>3 · Execution and compilation</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-eager">Eager execution</span>
<p>Operations run the moment you write them, like normal Python. Easy to debug, slower than a compiled graph because each operation is dispatched separately.</p>
<pre><code>y = x + 1      # runs right now, y is a real tensor you can print</code></pre></div>

<div class="gl"><span class="gl-t" id="v-graph-mode">Graph mode and tracing</span>
<p>Running the function once to record the operations, then executing that recorded graph from then on. Faster, but any Python that depends on actual values is frozen at the value it had while tracing.</p>
<pre><code>@tf.function              # TensorFlow
traced = torch.jit.trace(model, example)   # PyTorch</code></pre></div>

<div class="gl"><span class="gl-t" id="v-jit">JIT compilation</span>
<p>Just-in-time: compiling at runtime, once the shapes and types are actually known, rather than ahead of time. The first call is slow; every later call is fast.</p>
<pre><code>model = torch.compile(model)     # first call compiles, then it pays off</code></pre></div>

<div class="gl"><span class="gl-t" id="v-kernel">Kernel</span>
<p>A single function that runs on the GPU. One line of Python may launch several. Launching a kernel has fixed overhead, so many tiny kernels waste time.</p></div>

<div class="gl"><span class="gl-t" id="v-fusion">Kernel fusion</span>
<p>Combining several operations into one kernel so intermediate results stay in fast registers instead of being written to GPU memory and read back. Memory traffic, not arithmetic, is usually the bottleneck.</p>
<p class="gl-m">unfused: read → add → write → read → relu → write
fused:   read → add → relu → write</p></div>

<div class="gl"><span class="gl-t" id="v-xla">XLA</span>
<p>A compiler that takes a whole graph of array operations and emits optimised machine code, fusing aggressively. It is what JAX and TensorFlow use, and how TPUs are targeted.</p></div>

<div class="gl"><span class="gl-t" id="v-graph-break">Graph break</span>
<p>A point where the compiler cannot trace further — usually Python control flow that depends on a tensor's value — so it falls back to eager execution for that part. Correctness is preserved; speed is quietly lost.</p>
<pre><code>print(torch._dynamo.explain(model)(x).break_reasons)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-layout">Tensor layout — NCHW and NHWC</span>
<p>The order dimensions are stored in. PyTorch defaults to channels-first, TensorFlow to channels-last. Same numbers, different memory order — which is why conversion between frameworks means transposing weights.</p>
<p class="gl-m">NCHW: [batch, channels, height, width] &nbsp;·&nbsp; NHWC: [batch, height, width, channels]</p>
<pre><code>x.permute(0, 2, 3, 1)                       # NCHW → NHWC
x.to(memory_format=torch.channels_last)     # same shape, different layout</code></pre></div>

<div class="gl"><span class="gl-t" id="v-onnx">ONNX</span>
<p>An open file format describing a model as a graph of standard operators, so a model trained in one framework can be run by another runtime.</p>
<pre><code>torch.onnx.export(model, dummy, "model.onnx", opset_version=17)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-checkpoint">Checkpoint and state_dict</span>
<p>A saved snapshot of the parameters. PyTorch's <code>state_dict</code> is a plain dictionary of tensors and carries no code, which is why the model class must be defined to load it.</p>
<pre><code>torch.save(model.state_dict(), "ckpt.pt")
model.load_state_dict(torch.load("ckpt.pt"))</code></pre></div>

</div></details>

<details class="cx"><summary>4 · Distributed training</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-data-parallel">Data parallelism (DDP)</span>
<p>Every GPU holds a full copy of the model and processes a different slice of the batch. Gradients are averaged across GPUs after each backward pass so all copies stay identical.</p>
<p class="gl-m">memory per GPU = full model &nbsp;→&nbsp; largest model is capped by one device</p>
<pre><code>model = torch.nn.parallel.DistributedDataParallel(model, device_ids=[rank])</code></pre></div>

<div class="gl"><span class="gl-t" id="v-all-reduce">All-reduce</span>
<p>The collective operation that sums each GPU's gradients and gives every GPU the result. It is the communication cost that decides how well data parallelism scales.</p>
<p class="gl-m">each rank ends with: g = (g₀ + g₁ + … + g_{n−1}) / n</p></div>

<div class="gl"><span class="gl-t" id="v-sharding">Sharding</span>
<p>Splitting something across devices so each holds only a slice, rather than replicating it. What lifts the single-GPU memory ceiling.</p></div>

<div class="gl"><span class="gl-t" id="v-fsdp-t">FSDP and ZeRO</span>
<p>Sharding applied to parameters, gradients, and optimiser state. Each layer's parameters are gathered just before use and released straight after. ZeRO's three stages shard progressively more: optimiser state, then gradients, then parameters.</p>
<p class="gl-m">stage 1: optimiser · stage 2: + gradients · stage 3: + parameters</p></div>

<div class="gl"><span class="gl-t" id="v-tensor-parallel">Tensor parallelism</span>
<p>Splitting a single matrix multiplication across GPUs — each computes part of the output, then the parts are combined. Needs fast interconnect, so it is normally kept within one node.</p>
<p class="gl-m">Y = XW &nbsp;→&nbsp; W split by columns: Y = [XW₁ | XW₂]</p></div>

<div class="gl"><span class="gl-t" id="v-pipeline-parallel">Pipeline parallelism</span>
<p>Putting different layers on different GPUs and passing activations along. The problem is the "bubble" — GPUs idle while waiting — which is reduced by splitting the batch into micro-batches that flow through continuously.</p></div>

<div class="gl"><span class="gl-t" id="v-3d">3-D parallelism</span>
<p>Using data, tensor, and pipeline parallelism together. Standard for frontier-scale pretraining.</p>
<p class="gl-m">total GPUs = data × tensor × pipeline</p></div>

<div class="gl"><span class="gl-t" id="v-offload">Offload</span>
<p>Moving parameters or optimiser state to CPU RAM or NVMe when not in use, and fetching them back on demand. Makes otherwise impossible runs possible, at a real throughput cost.</p></div>

<div class="gl"><span class="gl-t" id="v-rank">Rank, world size, node</span>
<p><span class="k">World size</span> is the total number of processes; <span class="k">rank</span> is one process's index; <span class="k">local rank</span> is its index on its own machine. A <span class="k">node</span> is one machine, usually with 8 GPUs.</p>
<pre><code>$ torchrun --nproc_per_node 8 --nnodes 4 train.py</code></pre></div>

</div></details>

<details class="cx"><summary>5 · Models and layers</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-linear">Linear layer</span>
<p>A matrix multiply plus a bias. The basic building block; most of a transformer's parameters and compute live in these.</p>
<p class="gl-m">y = xWᵀ + b</p>
<pre><code>nn.Linear(in_features=768, out_features=3072)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-activation">Activation function</span>
<p>The non-linear step between layers. Without one, stacking linear layers collapses into a single linear layer and depth buys nothing.</p>
<p class="gl-m">ReLU(x) = max(0, x) &nbsp;·&nbsp; GELU(x) ≈ x · Φ(x)</p>
<pre><code>nn.ReLU(), nn.GELU(), nn.SiLU()</code></pre></div>

<div class="gl"><span class="gl-t" id="v-conv">Convolution</span>
<p>Sliding a small learned filter across an image and taking a weighted sum at each position. The same filter everywhere means far fewer parameters than a linear layer, and a feature detected in one place is detected anywhere.</p>
<p class="gl-m">out[i,j] = Σ_m Σ_n in[i+m, j+n] · k[m,n]</p>
<pre><code>nn.Conv2d(3, 64, kernel_size=3, stride=1, padding=1)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-norm">Normalisation</span>
<p>Rescaling activations to a stable mean and variance so training does not destabilise. BatchNorm normalises across the batch; LayerNorm and RMSNorm normalise across features, which is what transformers use.</p>
<p class="gl-m">LN(x) = γ · (x − μ) / √(σ² + ε) + β</p>
<pre><code>nn.LayerNorm(768)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-embedding">Embedding</span>
<p>A lookup table mapping a discrete id — a token, a category — to a learned vector. Similar meanings end up as nearby vectors.</p>
<p class="gl-m">vocab 32000 × dim 4096 → 131M parameters in that one table</p>
<pre><code>emb = nn.Embedding(32000, 4096)
emb(torch.tensor([15, 892]))      # [2, 4096]</code></pre></div>

<div class="gl"><span class="gl-t" id="v-token">Token and tokeniser</span>
<p>Models read integers, not text. The tokeniser splits text into sub-word pieces and maps each to an id. Roughly 4 characters per token for English.</p>
<pre><code>tok("Hello world")["input_ids"]    # [9906, 1917]
tok.decode([9906, 1917])           # "Hello world"</code></pre></div>

<div class="gl"><span class="gl-t" id="v-attention">Attention</span>
<p>Each position produces a query, a key, and a value. It compares its query against every key to get weights, then takes a weighted sum of the values. That is how a token pulls in context from the rest of the sequence.</p>
<p class="gl-m">Attention(Q,K,V) = softmax(QKᵀ / √d_k) · V</p>
<p>The √d_k divisor keeps the dot products from growing with dimension and pushing softmax into a region with vanishing gradients. Cost is quadratic in sequence length, which is why long context is expensive.</p>
<pre><code>out = F.scaled_dot_product_attention(q, k, v, is_causal=True)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-mha">Multi-head attention</span>
<p>Running attention several times in parallel on different learned projections, then concatenating. Each head can specialise — one on syntax, another on long-range reference.</p>
<p class="gl-m">head_dim = model_dim / n_heads &nbsp;(e.g. 4096 / 32 = 128)</p>
<pre><code>nn.MultiheadAttention(embed_dim=4096, num_heads=32, batch_first=True)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-transformer">Transformer block</span>
<p>Attention followed by a small feed-forward network, each wrapped in a residual connection and a normalisation. Stack a few dozen of these and you have a modern model.</p>
<p class="gl-m">x ← x + Attn(LN(x)); &nbsp; x ← x + FFN(LN(x))</p></div>

<div class="gl"><span class="gl-t" id="v-residual">Residual connection</span>
<p>Adding a layer's input to its output. It gives the gradient a direct path back through the network, which is what makes very deep models trainable.</p>
<p class="gl-m">y = x + F(x)</p></div>

<div class="gl"><span class="gl-t" id="v-encdec">Encoder and decoder</span>
<p>An encoder reads the whole input at once and produces representations — good for classification and retrieval. A decoder generates one token at a time and may only look backwards — good for generation.</p>
<p class="gl-m">encoder: bidirectional (BERT) · decoder: causal (GPT, Llama)</p></div>

<div class="gl"><span class="gl-t" id="v-backbone">Backbone and head</span>
<p>The backbone is the pretrained feature extractor; the head is the small task-specific layer bolted on top. Transfer learning is keeping the backbone and replacing the head.</p>
<pre><code>model = timm.create_model("resnet50", pretrained=True, num_classes=10)  # new head</code></pre></div>

<div class="gl"><span class="gl-t" id="v-pooling">Pooling</span>
<p>Reducing many vectors to one — by mean, by max, or by taking a designated token. How a sequence of token vectors becomes a single sentence embedding.</p>
<pre><code>sentence = token_embeddings.mean(dim=1)     # mean pooling</code></pre></div>

</div></details>

<details class="cx"><summary>6 · Fine-tuning and alignment</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-pretraining">Pretraining vs fine-tuning</span>
<p>Pretraining learns general structure from a very large unlabelled corpus and costs millions. Fine-tuning adapts that model to your task with a small labelled set and costs hours.</p></div>

<div class="gl"><span class="gl-t" id="v-freezing">Freezing</span>
<p>Marking parameters as not trainable so gradients are not computed or stored for them. The cheapest way to cut memory when only part of a model needs to change.</p>
<pre><code>for p in model.parameters():
    p.requires_grad = False</code></pre></div>

<div class="gl"><span class="gl-t" id="v-lora">LoRA</span>
<p>Instead of updating a weight matrix, learn a low-rank correction to it. Two thin matrices multiply out to the same shape as the original, so the frozen weight stays untouched and the update is tiny.</p>
<p class="gl-m">W' = W + BA &nbsp; where B: d×r, A: r×k, and r ≪ min(d,k)</p>
<p>With d = k = 4096 and r = 16, that is 33.5M parameters replaced by 131K — about 0.4%.</p>
<pre><code>LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"])</code></pre></div>

<div class="gl"><span class="gl-t" id="v-qlora">QLoRA</span>
<p>LoRA on top of a base model quantised to 4-bit. The frozen base takes a quarter of the memory, the adapters train in 16-bit, and a 70B fine-tune fits on a single large GPU.</p></div>

<div class="gl"><span class="gl-t" id="v-adapter">Adapter</span>
<p>Any small trainable module added to a frozen model. Adapters are megabytes, can be swapped at inference, and several can be composed over one base model.</p></div>

<div class="gl"><span class="gl-t" id="v-sft">Supervised fine-tuning (SFT)</span>
<p>Training on example prompt-and-answer pairs so the model learns the format and behaviour you want. The first stage of post-training.</p></div>

<div class="gl"><span class="gl-t" id="v-rlhf">RLHF</span>
<p>Reinforcement learning from human feedback. Humans rank model outputs, a reward model is trained to predict those rankings, and the model is then optimised against that reward — classically with PPO.</p>
<p class="gl-m">SFT → reward model → PPO against the reward, with a KL penalty to the SFT model</p></div>

<div class="gl"><span class="gl-t" id="v-dpo">DPO</span>
<p>Direct preference optimisation. It shows that the RLHF objective can be rewritten as a simple classification loss over preferred and rejected pairs — no separate reward model, no RL loop.</p>
<p class="gl-m">L = −log σ( β · [ log(π/π_ref)(chosen) − log(π/π_ref)(rejected) ] )</p></div>

<div class="gl"><span class="gl-t" id="v-catastrophic">Catastrophic forgetting</span>
<p>Fine-tuning hard on a narrow task degrades the general ability the model had. Lower learning rates, fewer epochs, and adapter methods that leave the base weights frozen all limit it.</p></div>

</div></details>

<details class="cx"><summary>7 · Inference and serving</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-latency">Latency vs throughput</span>
<p>Latency is how long one request takes. Throughput is how many complete per second. Batching improves throughput and worsens latency, so you cannot maximise both.</p>
<p class="gl-m">for LLMs: TTFT (time to first token) and TPOT (time per output token)</p></div>

<div class="gl"><span class="gl-t" id="v-percentile">p50, p95, p99</span>
<p>Percentiles of the latency distribution. p95 = 200 ms means 95% of requests finished within 200 ms. Report percentiles, not the mean — the mean hides the tail that users actually feel.</p>
<pre><code>torch.tensor(times).quantile(0.95)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-batching">Static, dynamic and continuous batching</span>
<p>Static batching fixes the group before it runs. Dynamic batching waits a few milliseconds to gather arriving requests. Continuous batching, used for LLMs, lets a finished sequence leave the batch and a new one join mid-flight rather than waiting for the slowest.</p></div>

<div class="gl"><span class="gl-t" id="v-paged">PagedAttention</span>
<p>Storing the KV cache in fixed-size blocks like operating-system memory pages, instead of one contiguous allocation per sequence. It removes the wasted space from over-allocating for a maximum length, so far more requests fit at once.</p></div>

<div class="gl"><span class="gl-t" id="v-prefix-cache">Prefix caching</span>
<p>Requests that begin with the same tokens — a shared system prompt, the same tool definitions — reuse the cached KV entries for that prefix instead of recomputing it every time.</p></div>

<div class="gl"><span class="gl-t" id="v-prefill">Prefill and decode</span>
<p>Prefill processes the whole prompt in parallel and is compute-bound. Decode generates one token at a time and is memory-bandwidth-bound. They have opposite bottlenecks, which is why serving engines schedule them separately.</p></div>

<div class="gl"><span class="gl-t" id="v-warmup">Warm-up</span>
<p>The first calls to a model are slow — memory allocation, compilation, caches filling. Always discard them before measuring, or the numbers are meaningless.</p>
<pre><code>for _ in range(20): model(x)      # warm up
torch.cuda.synchronize()          # GPU work is async - sync before timing</code></pre></div>

<div class="gl"><span class="gl-t" id="v-engine">Engine</span>
<p>A model compiled for one specific GPU architecture, precision, and shape range, as TensorRT produces. Fastest available, and not portable — a new GPU generation means a new build.</p></div>

</div></details>

<details class="cx"><summary>8 · Retrieval and embeddings</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-embedding-vec">Embedding vector</span>
<p>A fixed-length list of numbers representing a piece of text, an image, or an item, positioned so that similar things are close together.</p>
<pre><code>emb = model.encode(["a sentence"], normalize_embeddings=True)   # [1, 768]</code></pre></div>

<div class="gl"><span class="gl-t" id="v-cosine">Cosine similarity</span>
<p>The angle between two vectors, ignoring their length. 1 means identical direction, 0 unrelated, −1 opposite. On normalised vectors it is just the dot product.</p>
<p class="gl-m">cos(a,b) = (a · b) / (‖a‖ ‖b‖)</p>
<pre><code>sim = F.cosine_similarity(a, b, dim=-1)
sim = a_norm @ b_norm.T          # same thing if both are unit length</code></pre></div>

<div class="gl"><span class="gl-t" id="v-biencoder">Bi-encoder vs cross-encoder</span>
<p>A bi-encoder embeds query and document separately, so documents can be indexed in advance and search is fast. A cross-encoder feeds the pair through together, which is far more accurate and far too slow to run over a whole corpus.</p>
<p class="gl-m">bi-encoder: encode once, compare many · cross-encoder: one forward pass per pair</p></div>

<div class="gl"><span class="gl-t" id="v-rerank">Reranking</span>
<p>Retrieve a shortlist cheaply, then reorder it with the expensive accurate model. Most practical retrieval quality gains come from this two-stage pattern rather than a better first-stage model.</p></div>

<div class="gl"><span class="gl-t" id="v-ann">ANN search</span>
<p>Approximate nearest neighbour. Exact search compares against every vector; approximate methods trade a little recall for orders-of-magnitude speed, which is what makes million-vector search practical.</p></div>

<div class="gl"><span class="gl-t" id="v-rag">RAG</span>
<p>Retrieval-augmented generation: fetch relevant documents and put them in the prompt so the model answers from supplied evidence rather than memory.</p></div>

</div></details>

<details class="cx"><summary>9 · Vision and diffusion terms</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-iou">IoU</span>
<p>Intersection over union — the overlap between two boxes divided by their combined area. 0 means no overlap, 1 means identical.</p>
<p class="gl-m">IoU = area(A ∩ B) / area(A ∪ B)</p>
<pre><code>from torchvision.ops import box_iou
box_iou(pred_boxes, gt_boxes)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-nms">NMS</span>
<p>Non-maximum suppression. A detector fires several times on the same object; NMS keeps the highest-confidence box and discards any box overlapping it beyond an IoU threshold.</p>
<pre><code>keep = torchvision.ops.nms(boxes, scores, iou_threshold=0.5)</code></pre></div>

<div class="gl"><span class="gl-t" id="v-map">mAP</span>
<p>Mean average precision — area under the precision-recall curve, averaged over classes. COCO's mAP@[.5:.95] averages over ten IoU thresholds, so it rewards tight boxes and not merely finding the object.</p></div>

<div class="gl"><span class="gl-t" id="v-unet">UNet</span>
<p>An encoder-decoder with skip connections carrying high-resolution detail across from encoder to decoder. Standard for segmentation, and the standard denoiser inside diffusion models.</p></div>

<div class="gl"><span class="gl-t" id="v-vae">VAE</span>
<p>An autoencoder that encodes to a distribution rather than a point, giving a continuous latent space you can sample from. In latent diffusion it is the compressor that lets generation run in a small space instead of on pixels.</p>
<p class="gl-m">z = μ + σ · ε, &nbsp; ε ~ N(0, 1) &nbsp;— the reparameterisation trick</p></div>

<div class="gl"><span class="gl-t" id="v-diffusion">Diffusion, scheduler, steps</span>
<p>Noise is added to an image over many steps, and a network learns to remove it one step at a time. The <span class="k">scheduler</span> decides how much noise each step carries and how sampling walks back; fewer steps means faster and rougher.</p>
<p class="gl-m">x_t = √(ᾱ_t)·x₀ + √(1−ᾱ_t)·ε &nbsp;— jump to any noise level directly</p></div>

<div class="gl"><span class="gl-t" id="v-cfg">Guidance scale (CFG)</span>
<p>Classifier-free guidance. The model predicts with and without the prompt, and sampling extrapolates away from the unconditional prediction. Higher values follow the prompt more literally and reduce variety.</p>
<p class="gl-m">ε = ε_uncond + w · (ε_cond − ε_uncond) &nbsp;(w ≈ 6–8 typical)</p></div>

</div></details>

<details class="cx"><summary>10 · Classical ML</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-tree">Decision tree</span>
<p>A series of yes/no splits on feature values, ending in a prediction. Individually weak and prone to overfitting, which is why they are used in ensembles.</p></div>

<div class="gl"><span class="gl-t" id="v-boosting">Gradient boosting</span>
<p>Building trees one after another, each fitted to the errors the ensemble has made so far. Each tree corrects its predecessors rather than voting independently.</p>
<p class="gl-m">F_m(x) = F_{m−1}(x) + η · h_m(x) &nbsp; where h_m fits the residual</p></div>

<div class="gl"><span class="gl-t" id="v-bagging">Bagging vs boosting</span>
<p>Bagging trains many models independently on resamples and averages them, reducing variance — that is a random forest. Boosting trains them in sequence, reducing bias.</p></div>

<div class="gl"><span class="gl-t" id="v-leafwise">Leaf-wise vs level-wise growth</span>
<p>Level-wise grows every node at a depth before going deeper; leaf-wise always splits whichever leaf reduces loss most. Leaf-wise is more accurate per tree and overfits more easily on small data.</p>
<pre><code>{"num_leaves": 63, "min_data_in_leaf": 100}   # the two that control it</code></pre></div>

<div class="gl"><span class="gl-t" id="v-histogram">Histogram splitting</span>
<p>Bucketing continuous feature values into a few hundred bins before searching for splits, so the search is over bins rather than every distinct value. The main reason LightGBM trains fast.</p></div>

<div class="gl"><span class="gl-t" id="v-cat-encoding">Categorical encoding</span>
<p>Turning categories into numbers. One-hot creates a column per value and explodes on high-cardinality features; target encoding replaces a category with the mean outcome for it and leaks unless computed carefully within folds.</p></div>

<div class="gl"><span class="gl-t" id="v-imbalance">Class imbalance</span>
<p>When one class is much rarer than the other, a model that never predicts it can still be 99% accurate. Fix by weighting the loss, not by trusting accuracy.</p>
<p class="gl-m">scale_pos_weight = n_negative / n_positive</p></div>

<div class="gl"><span class="gl-t" id="v-cv">Cross-validation</span>
<p>Splitting the data into k folds, training on k−1 and validating on the held-out one, k times. Gives a more reliable estimate than a single split, and a spread that tells you how stable it is.</p>
<pre><code>cross_val_score(pipe, X, y, cv=5, scoring="roc_auc")</code></pre></div>

<div class="gl"><span class="gl-t" id="v-leakage">Data leakage</span>
<p>Information in the training features that would not be available at prediction time — including preprocessing fitted on the full dataset before splitting. It inflates offline scores and disappears in production.</p>
<pre><code>Pipeline([("scale", StandardScaler()), ("clf", model)])   # scaler refits per fold</code></pre></div>

<div class="gl"><span class="gl-t" id="v-roc">ROC AUC and PR AUC</span>
<p>ROC AUC is the probability the model ranks a random positive above a random negative — 0.5 is chance. PR AUC uses precision and recall instead, and is the more informative of the two when positives are rare.</p>
<p class="gl-m">precision = TP/(TP+FP) &nbsp;·&nbsp; recall = TP/(TP+FN)</p></div>

</div></details>

<details class="cx"><summary>11 · Experiment workflow</summary><div class="cx-body">

<div class="gl"><span class="gl-t" id="v-hyperparameter">Hyperparameter</span>
<p>A setting you choose rather than one the model learns — learning rate, tree depth, LoRA rank, batch size.</p></div>

<div class="gl"><span class="gl-t" id="v-search">Grid, random and Bayesian search</span>
<p>Grid tries every combination and wastes effort on parameters that do not matter. Random sampling beats it in practice. Bayesian search builds a model of which regions look promising and samples there.</p></div>

<div class="gl"><span class="gl-t" id="v-trial-pruning">Trial pruning</span>
<p>Stopping a hyperparameter trial early once it is clearly behind, so the budget goes to candidates that might win.</p>
<pre><code>trial.report(auc, step)
if trial.should_prune(): raise optuna.TrialPruned()</code></pre></div>

<div class="gl"><span class="gl-t" id="v-tracking">Experiment tracking</span>
<p>Recording the config, code version, metrics, and outputs of every run, so a result months later can be traced back to exactly what produced it.</p></div>

<div class="gl"><span class="gl-t" id="v-artefact">Artefact</span>
<p>Any file a run produces and you may need again — a checkpoint, a dataset snapshot, a plot — stored with the run rather than beside it on someone's laptop.</p></div>

<div class="gl"><span class="gl-t" id="v-registry">Model registry</span>
<p>A versioned catalogue of trained models with stages such as Staging and Production, and a link back to the run that produced each. The audit trail a governed release process needs.</p></div>

<div class="gl"><span class="gl-t" id="v-repro">Reproducibility</span>
<p>Being able to rerun and get the same result. Needs the seed, the library versions, the data version, and the config — and on GPU, still not exactly bit-identical unless you force deterministic kernels.</p>
<pre><code>torch.manual_seed(0)
torch.use_deterministic_algorithms(True)   # slower, but repeatable</code></pre></div>

</div></details>

<p style="margin-top:2.5em">Related: <a href="/stacks/">Stacks</a> covers the concepts these frameworks implement, and <a href="/vision/">Vision &amp; Multimodal AI</a> goes deeper on the vision side.</p>

<script src="{{ base_path }}/assets/js/open-target-details.js"></script>
