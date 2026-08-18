---
title: "Job Descriptions"
permalink: /jds/
layout: single
author_profile: true
---

{% include base_path %}
{% include stack-style.html %}

<style>
.jdx-meta {
  display: flex; flex-wrap: wrap; gap: .5em; margin: 0 0 1.2em;
}
.jdx-meta span {
  font-size: .78rem; padding: .22em .7em; border-radius: 11px;
  border: 1px solid #dde3e7; background: #f6f9fa; color: #41606e;
}
.jdx-meta span.live { border-color: #cfe0d5; background: #f2f8f4; color: #3f5a37; font-weight: 600; }

.jdx-h3 {
  margin: 1.9em 0 .6em; font-size: .78rem; text-transform: uppercase; letter-spacing: .08em;
  color: #7c848b; font-weight: 700;
}
table.jdx-req { width: 100%; border-collapse: collapse; font-size: .88rem; display: block; overflow-x: auto; }
table.jdx-req th, table.jdx-req td { border: 1px solid #e3e7ea; padding: .5em .7em; text-align: left; vertical-align: top; }
table.jdx-req thead th { background: #f4f7f8; font-size: .8rem; }
table.jdx-req td:first-child { width: 38%; font-weight: 600; background: #fafbfb; }
.pill {
  display: inline-block; font-size: .74rem; font-weight: 700; padding: .12em .6em; border-radius: 10px;
  white-space: nowrap;
}
.pill.have { color: #3f5a37; background: #f2f8f4; border: 1px solid #cfe0d5; }
.pill.part { color: #7a601b; background: #f8f3e6; border: 1px solid #e8dcc2; }
.pill.gap  { color: #a4534a; background: #fdf6f5; border: 1px solid #ecd7d3; }

ol.jdx-steps { margin: .4em 0 0 1.3em; padding: 0; font-size: .93rem; }
ol.jdx-steps li { margin-bottom: .5em; line-height: 1.6; }
ol.jdx-steps li b { color: #35424c; }

.jdx-note {
  border: 1px solid #e0e6ea; border-left: 3px solid #8a6d1f; background: #fbf9f2;
  padding: .85em 1.1em; border-radius: 0 4px 4px 0; margin: 1.6em 0; font-size: .91rem; color: #55504a;
}
.cx-body .site { font-size: .87rem; color: #6b7480; margin-top: .5em; }
.cx-body .site a { color: #1f6f8b; }
.jdx-src {
  display: inline-block; font-size: .82rem; padding: .22em .75em; margin: 0 0 1.2em;
  border: 1px solid #dde3e7; border-radius: 13px; background: #f6f9fa; color: #41606e; text-decoration: none;
}
.jdx-src:hover { background: #eaf1f4; border-color: #c3d2d9; text-decoration: none; }
.jdx-raw { font-size: .89rem; color: #55606a; }
.jdx-raw li { margin-bottom: .35em; }
</style>

<p class="stack-lead">Job descriptions worth studying against, kept in full with the material needed to answer for every line in them. Each entry maps the requirements onto what is already covered elsewhere on this site and spells out what still has to be learned.</p>

<p class="stack-hint">Click a role to open it, then any study module inside. Requirement rows link into <a href="/skills/">Skills</a> and <a href="/vision/">Vision</a>, where the same concepts are written up in depth. To check a new description against every term on this site, use the <a href="/jd-scan/">JD scanner</a>.</p>

<p class="jump" style="margin-bottom:2em">
<a class="stack-back" href="#apple-cv">ML Engineer — Computer Vision · Apple</a>
<a class="stack-back" href="#c3-ds">Data Scientist / Senior · C3 AI</a>
</p>

<details class="vs-dom" id="apple-cv">
<summary>ML Engineer — Computer Vision · Apple (via Inspyr Solutions)</summary>
<div class="vs-body">

<p class="jdx-meta">
<span class="live">Active</span>
<span>Channel Sales Operations Team</span>
<span>Computer Vision · AR/VR</span>
<span>5+ years ML engineering</span>
<span>Added Aug 2026</span>
</p>

<p class="jdx-h3">The role</p>

<p>The ML Engineer joins the Channel Sales Operations Team to develop, test, and deploy computer vision models that enhance sales and training tools. Working with cross-functional teams, the role helps integrate AR/VR technologies and build advanced CV solutions — object detection, facial recognition, image segmentation, and multimodal models.</p>

<p>Responsibilities include evaluating CV frameworks, integrating models into existing platforms, testing large vision and 3D CV applications, and exploring animation and audio technologies to improve user engagement. The role also involves staying current with AI advancements, recommending innovative solutions, and supporting the implementation and optimisation of technologies within Apple frameworks and beyond.</p>

<p>Read between the lines and this is an <span class="k">applied</span> role rather than a research one. The verbs are <em>evaluate, integrate, test, deploy, optimise</em> — not <em>invent</em>. What gets tested is breadth across the vision stack plus the judgement to pick an existing model and make it work inside somebody else's product, on their hardware, at their latency budget.</p>

<p class="jdx-h3">Requirements, mapped</p>

<table class="jdx-req">
<thead><tr><th>Requirement</th><th>Where it is covered</th><th>Status</th></tr></thead>
<tbody>
<tr><td>5+ years ML engineering, CV focus</td><td>Industry pages: <a href="/projects/industry/infiswift/">Infiswift</a>, <a href="/projects/industry/jpmorgan/">JPMorgan</a>, <a href="/projects/industry/cognizant/">Cognizant</a>; research: <a href="/projects/saind/">SAIND</a>, <a href="/projects/font-style-interpolation/">Font Style Transfer</a>, <a href="/projects/griffin/">Griffin</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td>Object detection</td><td><a href="/vision/#computer-vision">Vision § 2</a> · <a href="/skills/#object-detection">Skills</a> · module 1 below</td><td><span class="pill have">covered</span></td></tr>
<tr><td>Face recognition</td><td><a href="/skills/#face-recognition">Skills</a> · module 2 below</td><td><span class="pill part">study</span></td></tr>
<tr><td>Image segmentation</td><td><a href="/vision/#computer-vision">Vision § 2</a> · <a href="/skills/#image-segmentation">Skills</a> · module 3 below</td><td><span class="pill have">covered</span></td></tr>
<tr><td>Autoencoders</td><td><a href="/vision/#generative-vision">Vision § 6</a> · <a href="/skills/#autoencoders">Skills</a> · module 4 below</td><td><span class="pill have">covered</span></td></tr>
<tr><td>Python</td><td><a href="/skills/#python">Skills</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td>PyTorch</td><td><a href="/skills/#pytorch">Skills</a> · <a href="/frameworks/">Frameworks</a> · code throughout <a href="/vision/#code-snippets">Vision</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td>TensorFlow</td><td><a href="/skills/#tensorflow">Skills</a> · module 11 below</td><td><span class="pill part">study</span></td></tr>
<tr><td>OpenCV</td><td><a href="/vision/#image-processing">Vision § 1</a> · <a href="/skills/#opencv">Skills</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td>GANs, image synthesis, creative generation</td><td><a href="/vision/#generative-vision">Vision § 6</a> · <a href="/skills/#gans">Skills</a> · module 5 below</td><td><span class="pill part">study</span></td></tr>
<tr><td><em>Nice:</em> VLM experience</td><td><a href="/vision/#vlm">Vision § 4</a> · <a href="/skills/#vlm">Skills</a> · module 7 below</td><td><span class="pill have">covered</span></td></tr>
<tr><td><em>Nice:</em> animation and/or audio processing</td><td><a href="/vision/#animation-audio">Vision § 7</a> · <a href="/skills/#audio-processing">Skills</a> · module 10 below</td><td><span class="pill part">study</span></td></tr>
<tr><td><em>Nice:</em> sequential and multimodal data</td><td><a href="/vision/#multimodal">Vision § 5</a> · module 8 below</td><td><span class="pill have">covered</span></td></tr>
<tr><td><em>Nice:</em> large vision, 3D, diffusion models</td><td><a href="/vision/#diffusion">Vision § 3</a> · <a href="/skills/#3d-vision">Skills</a> · modules 6 and 9 below</td><td><span class="pill part">study</span></td></tr>
<tr><td><em>Implied:</em> Apple frameworks — Core ML, Vision, ARKit</td><td>module 11 below</td><td><span class="pill gap">gap</span></td></tr>
</tbody>
</table>

<p class="jdx-h3">Process</p>

<ol class="jdx-steps">
<li><b>Ropes coding assessment</b> — 45 minutes, one-time link, taken when you are ready. Python, computer vision, object detection. Integrity-scored: it must be completed entirely on your own, with no outside or AI assistance of any kind.</li>
<li><b>Two 10-minute internal calls</b> — with the agency. Expect the pitch-yourself version of your CV: what you have shipped, why you fit the CV brief, availability, and rate.</li>
<li><b>Two WebEx interviews with Apple</b> — the substantive rounds. Modules below are written for these.</li>
</ol>

<div class="jdx-note">
<b>On the assessment.</b> The Ropes task is integrity-scored and explicitly prohibits AI-generated, AI-assisted, retyped, or paraphrased answers. The study modules here are written at concept level for the interviews, and deliberately stop short of the specific implementation that task asks for. Sit it unaided — an invalidated assessment costs more than a slow one.
</div>

<p class="jdx-h3">Study modules</p>

<p class="vs-libs"><span class="lbl">Core libraries</span><code>torch</code> <code>torchvision</code> <code>cv2</code> <code>tensorflow</code> <code>keras</code> <code>ultralytics</code> <code>transformers</code> <code>diffusers</code> <code>timm</code> <code>onnxruntime</code> <code>coremltools</code></p>

<details class="cx"><summary>1 · Object detection</summary><div class="cx-body">
<p>Detection answers <span class="k">what</span> and <span class="k">where</span> at once: a set of boxes, each with a class and a confidence. That set-valued output is what makes it harder than classification — the model must decide how many objects exist, not just which one is present.</p>
<p><span class="k">The two-stage lineage.</span> R-CNN ran a classifier over region proposals. Fast R-CNN shared one convolutional pass across proposals via RoI pooling. Faster R-CNN replaced external proposals with a learned Region Proposal Network, making the whole thing one network. Accurate, slower, still the reference point for quality.</p>
<p><span class="k">The one-stage lineage.</span> YOLO and SSD predict boxes and classes directly from a dense grid in a single pass. RetinaNet identified why one-stage models used to lag — the overwhelming majority of grid positions are background, so the loss is dominated by easy negatives — and fixed it with focal loss, which down-weights confidently-classified examples. Modern YOLO versions are the default for real-time work.</p>
<p><span class="k">Anchors and their removal.</span> Anchor boxes are prior shapes tiled over the image; the model regresses offsets from them. They need tuning per dataset, so anchor-free methods (FCOS, CenterNet) predict object centres and extents directly. DETR went further, treating detection as set prediction with bipartite (Hungarian) matching, which removes anchors <em>and</em> NMS.</p>
<p><span class="k">IoU and NMS.</span> Intersection over Union is the overlap ratio between two boxes. Non-Maximum Suppression sorts candidate boxes by confidence, keeps the top one, discards everything overlapping it beyond an IoU threshold, and repeats. Know its failure mode: genuinely overlapping objects get suppressed, which is why Soft-NMS decays scores instead of deleting.</p>
<p><span class="k">Metrics.</span> Average Precision is the area under the precision-recall curve at a fixed IoU threshold; mAP averages it over classes. COCO's mAP@[.5:.95] averages over ten IoU thresholds from 0.50 to 0.95, so it rewards tight localisation, not just presence. Be ready to say why a model can have high mAP@0.5 and poor mAP@0.75.</p>
<p><span class="k">What actually goes wrong in production.</span> Small objects (fix: higher-resolution input, feature pyramids), class imbalance, domain shift between training photos and deployment cameras, and threshold selection — the confidence cut-off is a product decision about false positives versus misses, not a model property.</p>
<p class="uses">Uses: <code>ultralytics</code> · <code>torchvision.models.detection</code> · <code>transformers.DetrForObjectDetection</code> · <code>torchvision.ops.nms</code> · <code>pycocotools</code></p>
<p class="site">On this site: <a href="/vision/#computer-vision">Vision § 2 — detection architectures, IoU/NMS, evaluation metrics</a></p>
</div></details>

<details class="cx"><summary>2 · Face detection and recognition</summary><div class="cx-body">
<p>Face recognition is four stages, and interviews usually probe whether you know they are separate: <span class="k">detect</span> the face, <span class="k">align</span> it using landmarks, <span class="k">embed</span> it into a vector, then <span class="k">compare</span> that vector against others. Most accuracy problems live in alignment, not in the network.</p>
<p><span class="k">Detection and landmarks.</span> Classical Viola-Jones cascades are still worth knowing as the historical baseline. MTCNN and RetinaFace are the modern standard, producing both a box and five landmarks (eye centres, nose tip, mouth corners). Those landmarks drive a similarity transform that warps every face to a canonical position, so the embedding network sees pose-normalised input.</p>
<p><span class="k">Embeddings.</span> The network maps a face to a fixed vector — typically 128 or 512 dimensions — trained so that same-identity pairs are close and different-identity pairs are far. FaceNet used triplet loss on (anchor, positive, negative) with hard-negative mining. ArcFace won by adding an angular margin to the softmax, producing better-separated clusters with simpler training. Embeddings are usually L2-normalised, which makes cosine similarity equivalent to Euclidean distance.</p>
<p><span class="k">Verification versus identification.</span> Verification is 1:1 — are these two faces the same person, thresholded on distance. Identification is 1:N — search a gallery for the nearest embedding, with an additional rejection threshold for unknown people. Open-set identification is much harder than closed-set, because the system must be able to answer "nobody".</p>
<p><span class="k">Metrics.</span> Not accuracy. False Accept Rate and False Reject Rate trade off against each other as the threshold moves; systems are specified as "TAR at FAR=1e-6". Equal Error Rate is where the two curves cross. Being able to talk in FAR/FRR terms signals you have shipped a real system.</p>
<p><span class="k">Liveness and spoofing.</span> A printed photo or a replayed video defeats a naive matcher. Presentation Attack Detection uses texture cues, depth from a structured-light or ToF sensor, or challenge-response. Apple's Face ID is the canonical depth-sensor design — worth knowing given the hardware context here.</p>
<p><span class="k">Fairness and privacy.</span> Face recognition has documented accuracy disparities across demographic groups, and face templates are biometric data under GDPR, BIPA, and similar law. Expect to be asked how you would evaluate per-group performance, whether embeddings can be reversed (partially, yes), and how consent and retention would work. Having a considered answer here matters more in an Apple interview than in most.</p>
<p class="uses">Uses: <code>insightface</code> · <code>facenet-pytorch</code> · <code>mediapipe</code> · <code>dlib</code> · <code>cv2.FaceDetectorYN</code></p>
<p class="site">On this site: <a href="/skills/#face-recognition">Skills — Face Recognition</a></p>
</div></details>

<details class="cx"><summary>3 · Image segmentation</summary><div class="cx-body">
<p>Segmentation is classification at pixel resolution, and it comes in three flavours that get conflated constantly. <span class="k">Semantic</span> segmentation labels every pixel by class, with no notion of instances — all cars are one "car" region. <span class="k">Instance</span> segmentation separates individual objects but usually ignores background stuff like sky or road. <span class="k">Panoptic</span> segmentation unifies both: every pixel gets a class, and countable things also get an instance id.</p>
<p><span class="k">Encoder-decoder and U-Net.</span> Downsampling builds semantic understanding but destroys spatial precision; upsampling has to recover it. U-Net's skip connections carry high-resolution encoder features across to the decoder, which is why it dominated medical imaging and why the same shape reappears as the denoiser in diffusion models.</p>
<p><span class="k">Keeping resolution.</span> Dilated (atrous) convolutions expand the receptive field without downsampling. DeepLab's ASPP module runs several dilation rates in parallel to capture multiple scales at once. Transposed convolution upsamples but causes checkerboard artefacts; bilinear upsampling followed by a convolution usually behaves better.</p>
<p><span class="k">Instance methods.</span> Mask R-CNN adds a mask branch to Faster R-CNN and introduced RoIAlign, which removes the quantisation error of RoIPool — a small fix that mattered a lot. Mask2Former and similar transformer approaches now treat all three segmentation tasks as one mask-classification problem.</p>
<p><span class="k">Promptable segmentation.</span> Segment Anything (SAM) is trained to segment whatever a point, box, or mask prompt indicates, without class labels. It changed the practical workflow: you rarely train a segmenter from scratch now, you prompt SAM and fine-tune only if the domain is unusual. SAM 2 extends this to video with memory across frames.</p>
<p><span class="k">Losses and metrics.</span> Cross-entropy alone handles class imbalance badly when the object occupies a small fraction of pixels. Dice loss optimises overlap directly and is standard in medical work; the combination of the two is a common default. Evaluation uses mean IoU (Jaccard) for semantic, mask AP for instance, and Panoptic Quality — the product of segmentation and recognition quality — for panoptic.</p>
<p class="uses">Uses: <code>segmentation-models-pytorch</code> · <code>torchvision.models.segmentation</code> · <code>segment-anything</code> · <code>transformers.Mask2Former</code> · <code>albumentations</code></p>
<p class="site">On this site: <a href="/vision/#computer-vision">Vision § 2 — segmentation architectures, open-vocabulary vision and SAM</a></p>
</div></details>

<details class="cx"><summary>4 · Autoencoders and latent representation</summary><div class="cx-body">
<p>An autoencoder compresses input to a bottleneck and reconstructs it. Nothing supervises it but the input itself, so what it learns is whatever structure makes reconstruction possible under a capacity constraint. The bottleneck is the whole point — remove it and the network learns the identity function.</p>
<p><span class="k">Why the JD lists it.</span> Autoencoders sit underneath most of the rest of the stack. The VAE in latent diffusion is an autoencoder. Anomaly detection by reconstruction error is an autoencoder. Learned compression is an autoencoder. It is the cheapest concept to test that reveals whether someone understands representation learning.</p>
<p><span class="k">Variants worth naming.</span> <em>Denoising</em> autoencoders corrupt the input and reconstruct the clean version, forcing robust features rather than copying. <em>Sparse</em> autoencoders penalise activation so few units fire per input — now central to interpretability work on language models. <em>Contractive</em> autoencoders penalise the Jacobian, making the encoding locally stable. <em>Masked</em> autoencoders (MAE) mask 75% of image patches and reconstruct them, and turned out to be an excellent self-supervised pretraining objective for ViTs.</p>
<p><span class="k">VAEs.</span> The key difference: a VAE encodes to a <em>distribution</em>, not a point. It predicts a mean and log-variance, samples from that Gaussian, and decodes — so the latent space is continuous and sampleable, which a plain autoencoder's is not. The reparameterisation trick, sampling as <code>mu + sigma * eps</code> with <code>eps</code> drawn independently, is what keeps the sampling step differentiable. Be ready to explain that specifically; it is a standard question.</p>
<p><span class="k">The ELBO.</span> Two terms. Reconstruction loss pulls the output towards the input. KL divergence pulls the latent posterior towards a standard normal prior, which regularises the space. Their balance decides everything: too much KL weight and you get posterior collapse, where the decoder ignores the latent entirely and the model produces the same blurry average regardless of input. Beta-VAE turns that weight into a knob for disentanglement.</p>
<p><span class="k">Why VAE samples look blurry.</span> A pixel-wise Gaussian likelihood means the optimal output under uncertainty is an average of plausible images, and the average of sharp images is blurry. GANs avoid this because the discriminator penalises implausibility rather than pixel distance. This comparison is the natural bridge to the next module.</p>
<p><span class="k">VQ-VAE.</span> Replaces the continuous latent with a discrete codebook, sidestepping posterior collapse and letting an autoregressive model be trained over discrete codes. It underlies DALL·E 1 and much of image tokenisation for multimodal LLMs.</p>
<p class="uses">Uses: <code>torch.nn</code> · <code>torch.distributions</code> · <code>diffusers.AutoencoderKL</code> · <code>timm</code> (MAE checkpoints)</p>
<p class="site">On this site: <a href="/vision/#generative-vision">Vision § 6 — autoencoders through VQ-VAE</a></p>
</div></details>

<details class="cx"><summary>5 · GANs, image synthesis and creative generation</summary><div class="cx-body">
<p>This is the one hard requirement most CV engineers are weakest on, and the JD lists it as a must-have rather than a nice-to-have. Treat it as the highest-yield module here.</p>
<p><span class="k">The setup.</span> A generator maps noise to images; a discriminator classifies real versus generated. They train adversarially — the discriminator's gradient tells the generator how to look more real. At the theoretical optimum the generator matches the data distribution and the discriminator is at chance. In practice you are balancing two networks that can destabilise each other, which is the whole difficulty.</p>
<p><span class="k">Loss functions.</span> The original minimax loss saturates when the discriminator wins early, so the non-saturating variant (maximise <code>log D(G(z))</code> instead of minimising <code>log(1 - D(G(z)))</code>) is used in practice. WGAN replaces the Jensen-Shannon objective with an approximation of Earth Mover's distance, giving gradients even when distributions do not overlap; WGAN-GP enforces the required Lipschitz constraint with a gradient penalty rather than weight clipping. Hinge loss is the common modern default.</p>
<p><span class="k">Architectures to know by name.</span> DCGAN established the convolutional recipe — strided convolutions, batch norm, no fully-connected layers. Progressive GAN grew resolution during training. StyleGAN introduced a mapping network from <code>z</code> to an intermediate <code>w</code> space plus AdaIN modulation per layer, giving the disentangled control that made latent-space editing practical; StyleGAN2 removed the droplet artefacts by replacing AdaIN with weight demodulation. Understanding <code>W</code> and <code>W+</code> space matters for any editing or personalisation application.</p>
<p><span class="k">Conditional and paired generation.</span> cGAN feeds a class label to both networks. pix2pix does paired image-to-image translation with a U-Net generator, a PatchGAN discriminator that judges local patches rather than whole images, and an L1 term alongside the adversarial loss. CycleGAN removes the need for paired data using a cycle-consistency loss — translate to the other domain and back, and you should recover the original.</p>
<p><span class="k">Failure modes.</span> <em>Mode collapse</em> — the generator finds a few outputs that fool the discriminator and stops covering the distribution; mitigations include minibatch discrimination, unrolled GANs, and simply using WGAN-GP. <em>Non-convergence</em> and oscillation. <em>Discriminator overfitting</em> on small datasets, which is what adaptive discriminator augmentation (StyleGAN2-ADA) addresses. Being able to diagnose these out loud is what "experience with GANs" actually means.</p>
<p><span class="k">Evaluation.</span> There is no likelihood to report. Inception Score measures confidence and diversity of an Inception classifier's predictions, but ignores the real data entirely. Fréchet Inception Distance compares Gaussians fitted to Inception features of real and generated sets — lower is better, and it is the standard. Know FID's weaknesses too: sensitive to sample count, to the feature extractor, and it says nothing about whether the model memorised training images. Precision/recall for generative models separates fidelity from coverage.</p>
<p><span class="k">GANs versus diffusion, now.</span> Diffusion overtook GANs on quality and diversity for text-to-image, but GANs remain far faster at inference — one forward pass against tens of denoising steps — which keeps them relevant for real-time and on-device synthesis. Super-resolution, face restoration, and style transfer in interactive tools are still often GAN-based. That trade-off is exactly what an applied role would want you to reason about.</p>
<p class="uses">Uses: <code>torch</code> · <code>torchgan</code> · <code>stylegan2-ada-pytorch</code> · <code>torchmetrics.image.fid</code> · <code>kornia</code></p>
<p class="site">On this site: <a href="/vision/#generative-vision">Vision § 6 — GAN objectives, architectures, failure modes, evaluation</a></p>
</div></details>

<details class="cx"><summary>6 · Diffusion and large vision models</summary><div class="cx-body">
<p><span class="k">The core idea.</span> Destroy structure by gradually adding Gaussian noise over many steps, then train a network to reverse one step at a time. Because the forward process has a closed form, you can jump to any noise level directly and train on random timesteps — that is what makes it tractable.</p>
<p><span class="k">What the network predicts.</span> Usually the noise <code>epsilon</code> added at that step, not the clean image; the two are algebraically interchangeable but noise prediction trains more stably. v-prediction is the modern alternative that behaves better at the extremes of the schedule.</p>
<p><span class="k">Sampling.</span> DDPM's ancestral sampling needs hundreds of steps. DDIM makes the process deterministic and skippable, cutting to tens of steps with little loss. Distillation approaches push it to one to four steps, which is what makes on-device generation feasible.</p>
<p><span class="k">Guidance.</span> Classifier-free guidance trains the same model with and without conditioning by randomly dropping the prompt, then at sampling time extrapolates away from the unconditional prediction. The guidance scale trades prompt adherence against diversity — high values give literal, saturated, less varied images.</p>
<p><span class="k">Latent diffusion.</span> Running diffusion in a VAE's latent space instead of pixel space cuts compute by roughly an order of magnitude and is why Stable Diffusion runs on consumer hardware. Note how this closes the loop with module 4 — the autoencoder is load-bearing here.</p>
<p><span class="k">Control and personalisation.</span> ControlNet conditions generation on structure — edges, depth, pose — by cloning the encoder into a trainable branch with zero-initialised connections. DreamBooth and LoRA adapt a model to a specific subject or style with a handful of images. Inpainting masks a region and regenerates only it. For a sales-and-training-tools context, these controllable pipelines matter far more than raw text-to-image.</p>
<p><span class="k">Large vision models generally.</span> Beyond diffusion: ViT and its scaled variants, DINOv2 as a general-purpose frozen feature extractor, SAM for segmentation, and CLIP as the joint embedding backbone. The practical skill is knowing which frozen model to reach for and what to fine-tune, rather than training from scratch.</p>
<p class="uses">Uses: <code>diffusers</code> · <code>transformers</code> · <code>accelerate</code> · <code>peft</code> (LoRA) · <code>controlnet-aux</code> · <code>xformers</code></p>
<p class="site">On this site: <a href="/vision/#diffusion">Vision § 3 — the full diffusion subdomain, foundations to advanced</a></p>
</div></details>

<details class="cx"><summary>7 · Vision-language models</summary><div class="cx-body">
<p><span class="k">CLIP.</span> Two encoders, one for images and one for text, trained on a large batch of paired data with a symmetric contrastive loss: the matching image-text pair should score highest in both directions. The result is a shared embedding space where similarity is comparable across modalities. That single property enables zero-shot classification — embed the class names as text, compare against the image, take the nearest.</p>
<p><span class="k">Why zero-shot works and where it breaks.</span> It works because the space was trained on natural language supervision covering an enormous label vocabulary. It breaks on fine-grained distinctions, on counting, on spatial relations, and on anything the caption distribution did not contain. Prompt templates ("a photo of a {}") measurably change accuracy, which tells you how brittle the mechanism is.</p>
<p><span class="k">Generative VLMs.</span> CLIP scores; it does not describe. To generate text about an image you need a language model conditioned on visual features. BLIP-2 bridges a frozen vision encoder and a frozen LLM with a small trained Q-Former. LLaVA takes the simplest route that works — a linear or MLP projection of CLIP patch embeddings straight into the LLM's token space, then instruction tuning. Flamingo interleaves gated cross-attention layers into a frozen LLM. Qwen-VL, InternVL, and the current frontier models follow variations of the projection-plus-instruction-tuning recipe.</p>
<p><span class="k">Resolution and tokens.</span> Image tokens are expensive, so real systems tile high-resolution images, use perceiver-style resamplers to compress patch counts, or train at multiple resolutions. If asked why a VLM misses small text in a screenshot, the answer is usually token resolution, not model capability.</p>
<p><span class="k">Evaluation and failure.</span> VQA benchmarks, captioning metrics, and hallucination benchmarks like POPE that specifically test whether the model claims objects that are not present. Object hallucination is the characteristic VLM failure and the thing to raise unprompted.</p>
<p class="uses">Uses: <code>open_clip</code> · <code>transformers</code> (BLIP-2, LLaVA, Qwen-VL) · <code>sentence-transformers</code> · <code>faiss</code></p>
<p class="site">On this site: <a href="/vision/#vlm">Vision § 4 — contrastive pretraining through instruction-tuned VLMs</a></p>
</div></details>

<details class="cx"><summary>8 · Sequential and multimodal data</summary><div class="cx-body">
<p><span class="k">Video as sequence.</span> A video is not a bag of frames. Options in rough order of cost: frame-level CNN plus temporal pooling (cheap, loses order), CNN plus LSTM/GRU, two-stream networks with a separate optical-flow branch, 3D convolutions (C3D, I3D) which inflate 2D kernels into time, and video transformers (TimeSformer, ViViT) which factorise attention into spatial and temporal passes to keep cost manageable.</p>
<p><span class="k">Sampling strategy.</span> How you sample frames often matters more than architecture — uniform sampling, dense clips around detected activity, or keyframe selection. Say this in an interview; it signals practical experience.</p>
<p><span class="k">Fusion strategies.</span> <em>Early</em> fusion concatenates raw or low-level features, capturing fine cross-modal interaction but requiring alignment. <em>Late</em> fusion runs separate models and combines predictions, which is robust and easy to debug but blind to interactions. <em>Intermediate</em> fusion via cross-attention is the modern default: one modality attends to the other at chosen layers. Be able to argue for one given a scenario.</p>
<p><span class="k">Alignment.</span> Modalities arrive at different rates — video at 30fps, audio at 16kHz, text irregularly. Alignment is resampling, windowing, and deciding a common timebase. Contrastive objectives (CLIP for image-text, CLAP for audio-text, ImageBind across six modalities) align the <em>semantic</em> spaces rather than the temporal ones.</p>
<p><span class="k">Missing modalities.</span> A robust multimodal system degrades gracefully when one input is absent or corrupted. Modality dropout during training is the standard trick — randomly zero a modality so the model cannot become wholly dependent on it.</p>
<p class="uses">Uses: <code>torchvision.io</code> · <code>decord</code> · <code>pytorchvideo</code> · <code>transformers</code> · <code>torchaudio</code></p>
<p class="site">On this site: <a href="/vision/#multimodal">Vision § 5 — multimodal language modelling</a></p>
</div></details>

<details class="cx"><summary>9 · 3D vision and AR/VR</summary><div class="cx-body">
<p><span class="k">Representations.</span> Point clouds (unordered, sparse — PointNet handles them with permutation-invariant pooling), voxels (regular but cubic in memory), meshes (efficient for rendering, awkward to learn), signed distance fields and occupancy networks (implicit, continuous), and radiance fields. Each choice forces different architectures; being asked to pick one for a use case is a likely question.</p>
<p><span class="k">Getting depth.</span> Stereo matching from a calibrated pair, structure from motion across many views, monocular depth estimation (MiDaS, Depth Anything) which recovers relative depth from a single image, and active sensing — the LiDAR and TrueDepth cameras on Apple hardware. Monocular depth is <em>relative</em> unless calibrated; that distinction trips people up.</p>
<p><span class="k">Neural rendering.</span> NeRF represents a scene as a function from position and view direction to colour and density, rendered by volumetric ray marching — photorealistic, originally slow to train and render. 3D Gaussian Splatting represents the scene as millions of anisotropic Gaussians rasterised directly, reaching real-time rendering with comparable quality, which is why it took over for interactive applications.</p>
<p><span class="k">The AR pipeline.</span> Camera pose tracking (visual-inertial odometry fusing camera and IMU), plane and mesh reconstruction of the environment, anchoring virtual content to real coordinates, occlusion handling so virtual objects sit behind real ones (needs a depth map or people-segmentation mask), and lighting estimation so rendered objects match scene illumination. On Apple hardware this is ARKit's job, with RealityKit rendering.</p>
<p><span class="k">The constraint that shapes everything.</span> AR runs at 60fps or higher on a battery-powered device with a thermal budget, while the renderer also needs the GPU. Every model decision is subordinate to that. Expect the interesting questions in this area to be about latency and power, not accuracy.</p>
<p class="uses">Uses: <code>open3d</code> · <code>pytorch3d</code> · <code>trimesh</code> · <code>nerfstudio</code> · <code>kornia</code> · ARKit / RealityKit</p>
<p class="site">On this site: <a href="/vision/#animation-audio">Vision § 7 — real-time 3D</a> · <a href="/projects/saind/">SAIND project</a></p>
</div></details>

<details class="cx"><summary>10 · Animation and audio processing</summary><div class="cx-body">
<p><span class="k">Why a CV job lists animation.</span> The stated goal is engagement in sales and training tools — animated avatars, guided walkthroughs, talking-head presenters. The CV part is driving the animation from captured or generated signal rather than authoring it by hand.</p>
<p><span class="k">Animation fundamentals.</span> A rig is a skeleton of joints; skinning binds mesh vertices to joints with weights; blendshapes (morph targets) interpolate between sculpted expressions and are how facial animation is normally driven. Apple's ARKit exposes 52 blendshape coefficients per frame from the TrueDepth camera — that is the bridge between face tracking and animation, and worth naming specifically.</p>
<p><span class="k">Motion capture from video.</span> 2D pose estimation (OpenPose, MediaPipe, RTMPose) lifted to 3D, or direct 3D body-model regression fitting a parametric model such as SMPL. The recurring problems are temporal jitter — solved with filtering or a temporal model rather than per-frame prediction — foot sliding, and depth ambiguity from a single camera.</p>
<p><span class="k">Audio representation.</span> Raw waveform to spectrogram via the short-time Fourier transform, then to a mel spectrogram, which warps frequency to match human perception. MFCCs are the older compressed variant, still used in lightweight systems. Once audio is a mel spectrogram it is a 2D array, so convolutional and transformer vision architectures apply directly — this is the sentence that makes an audio question easy for a CV engineer.</p>
<p><span class="k">Audio models.</span> wav2vec 2.0 and HuBERT for self-supervised speech representation, Whisper for robust multilingual recognition, and diffusion or flow-based vocoders for synthesis. For animation specifically, audio-driven lip sync maps phonemes or learned audio features to visemes or blendshape coefficients — Wav2Lip and SadTalker are the reference points.</p>
<p><span class="k">Synchronisation.</span> Audio and video drift. Lip sync is perceptually unforgiving — humans notice tens of milliseconds. Any system combining generated speech with generated motion needs an explicit timing contract, not best-effort alignment.</p>
<p class="uses">Uses: <code>torchaudio</code> · <code>librosa</code> · <code>mediapipe</code> · <code>smplx</code> · <code>transformers</code> (Whisper, wav2vec2)</p>
<p class="site">On this site: <a href="/vision/#animation-audio">Vision § 7 — animation, audio and real-time 3D</a></p>
</div></details>

<details class="cx"><summary>11 · Frameworks — PyTorch, TensorFlow, OpenCV, and the Apple stack</summary><div class="cx-body">
<p><span class="k">Why the JD names both PyTorch and TensorFlow.</span> Not because you will write both daily, but because integrating into existing platforms means inheriting whatever is already there. Be honest about your primary framework and fluent about the differences.</p>
<p><span class="k">The real differences.</span> PyTorch builds the graph as the code runs, so debugging is ordinary Python; TensorFlow 2 is eager by default too, but <code>tf.function</code> traces to a static graph for deployment. Keras is the high-level API and is genuinely faster for standard architectures. TensorFlow's deployment story — TF Lite, TF Serving, TFX — was its historical advantage; PyTorch has largely closed it with TorchScript, <code>torch.compile</code>, ExecuTorch, and ONNX export. Know that <code>NCHW</code> (PyTorch) versus <code>NHWC</code> (TensorFlow) tensor layout is a real source of conversion bugs.</p>
<p><span class="k">OpenCV.</span> Still the workhorse for everything around the model: capture, colour conversion, resizing, warping, calibration, contour work, and classical algorithms that beat a network when the problem is geometric. Two things to have ready — <code>cv2</code> reads images as BGR while every deep learning pipeline expects RGB, and its DNN module can run ONNX models directly, which is sometimes the whole deployment.</p>
<p><span class="k">The Apple stack — the actual gap here.</span> <em>Core ML</em> is the on-device inference format and runtime, dispatching across CPU, GPU, and the Neural Engine. <em>coremltools</em> converts from PyTorch or TensorFlow and applies palettisation and quantisation. The <em>Vision</em> framework provides ready-made face detection, landmarks, text recognition, body pose, and hand pose, and can run a Core ML model over an image with the plumbing handled. <em>ARKit</em> handles tracking, scene reconstruction, and face blendshapes; <em>RealityKit</em> renders. <em>Metal</em> and MPS are the GPU layer, and PyTorch's <code>mps</code> backend trains on Apple silicon.</p>
<p><span class="k">What to do about it.</span> A weekend converting one model to Core ML and running it in a small app closes most of this gap, and gives you a concrete answer instead of a hedge. Knowing that the Neural Engine prefers certain layer types and fixed input shapes — and that unsupported ops silently fall back to CPU and destroy your latency — is the level of detail that lands.</p>
<p class="uses">Uses: <code>torch</code> · <code>tensorflow</code> · <code>keras</code> · <code>cv2</code> · <code>coremltools</code> · <code>onnx</code> · <code>onnxruntime</code></p>
<p class="site">On this site: <a href="/frameworks/">Frameworks</a> · <a href="/skills/#tensorflow">Skills — TensorFlow</a> · <a href="/skills/#opencv">Skills — OpenCV</a> · <a href="/skills/#core-ml">Skills — Core ML</a></p>
</div></details>

<details class="cx"><summary>12 · Getting a CV model into production</summary><div class="cx-body">
<p>The JD's verbs are evaluate, integrate, test, deploy, optimise. This module is the one where being applied rather than academic is an advantage — use it.</p>
<p><span class="k">Evaluating a framework or model.</span> A defensible process: define the task and the acceptance metric first, assemble a representative held-out set from the actual deployment distribution, measure accuracy <em>and</em> latency <em>and</em> memory on the target hardware, then check licence and provenance. Say the last part out loud — for a commercial product, a model under a non-commercial licence is disqualified regardless of how good it is.</p>
<p><span class="k">Optimisation, in order of effort.</span> Reduce input resolution and use a smaller backbone first — that is usually the largest win. Then export to ONNX or Core ML and use the vendor runtime. Then post-training quantisation to int8, checking accuracy on your own set rather than trusting reported numbers; quantisation-aware training if the drop is too large. Pruning and distillation when a smaller student can be trained. Batching for throughput, though it hurts single-request latency.</p>
<p><span class="k">Measuring latency honestly.</span> Warm up first, discard the first runs, report a percentile rather than a mean — p95 or p99 is what users experience — and measure end to end, including preprocessing and postprocessing. Preprocessing is often a surprising share of the total, and on device the thermal state changes results over a sustained run.</p>
<p><span class="k">Testing CV systems.</span> Unit tests on preprocessing with fixed fixtures, golden-output tests that catch silent numerical drift after a version bump, slice-based evaluation across lighting, pose, device, and demographic groups rather than one aggregate number, and adversarial or corruption robustness checks. Regression suites matter more than a headline metric when you are integrating into someone else's platform.</p>
<p><span class="k">Monitoring after launch.</span> Input distribution drift, confidence distribution shift, per-slice performance where labels are available, and a feedback path for user-reported failures. Shadow deployment before switching traffic.</p>
<p class="site">On this site: <a href="/projects/industry/infiswift/">Infiswift — model optimisation and edge inference</a> · <a href="/projects/industry/jpmorgan/">JPMorgan — inference optimisation</a></p>
</div></details>

<details class="cx"><summary>13 · Likely interview questions</summary><div class="cx-body">
<p>Drawn from the requirement list. If you can answer these cleanly the two WebEx rounds are covered.</p>
<p><span class="k">Detection.</span> One-stage versus two-stage, and when you would pick each. Explain NMS and its failure mode. What does mAP@[.5:.95] measure and why is it stricter than mAP@0.5. How would you improve recall on small objects. How do you choose a confidence threshold for a product.</p>
<p><span class="k">Face.</span> Walk through a face recognition pipeline end to end. Why align before embedding. Triplet loss versus ArcFace. Verification versus open-set identification. How would you report accuracy to a stakeholder — and why not as a single number. How would you test for demographic disparity.</p>
<p><span class="k">Segmentation.</span> Semantic, instance, panoptic — differences and metrics. Why skip connections. Dice versus cross-entropy. When would you use SAM instead of training a model.</p>
<p><span class="k">Autoencoders and GANs.</span> Why does a VAE need the reparameterisation trick. What is posterior collapse. Why are VAE samples blurry. What is mode collapse and how do you detect it. Why is FID preferred to Inception Score, and what does FID miss. When would you still choose a GAN over diffusion.</p>
<p><span class="k">Multimodal.</span> How does CLIP training work and why does it enable zero-shot. Early versus late versus cross-attention fusion. What causes object hallucination in a VLM. How do you handle a missing modality at inference.</p>
<p><span class="k">Applied and system.</span> A model is accurate offline and poor in production — how do you diagnose it. You need 30fps on device and have 10 — what do you try, in what order. How do you decide between fine-tuning and using a frozen model. How would you evaluate three candidate CV frameworks for a new feature.</p>
<p><span class="k">Ask them back.</span> Which platforms does the model integrate into, and who owns them. What is the latency and hardware target. Is training data collected in-house, and under what consent. What does success look like for the sales and training tools six months in. Good questions here read as the applied experience the role is asking for.</p>
</div></details>

</div>
</details>

<details class="vs-dom" id="c3-ds">
<summary>Data Scientist / Senior Data Scientist · C3 AI</summary>
<div class="vs-body">

<p class="jdx-meta">
<span class="live">Active</span>
<span>Data Science team</span>
<span>Redwood City, California</span>
<span>Client-facing · travel expected</span>
<span>$136,000 – $183,000</span>
<span>Added Aug 2026</span>
</p>

<p><a class="jdx-src" href="https://c3.ai/job-description?gh_jid=8621803002" target="_blank">Original posting →</a></p>

<p class="jdx-h3">The role</p>

<p>C3 AI (NYSE: AI) sells enterprise AI application software — the C3 Agentic AI Platform for building and operating AI applications, a portfolio of industry-specific SaaS applications, and C3 Generative AI. On the Data Science team you work directly with some of the largest companies in the world, helping them build AI applications on that platform alongside data scientists, AI engineers, and subject matter experts.</p>

<p>The stated responsibilities: lead research, design, implementation, and deployment of AI models, agentic solutions, and <span class="k">optimisation algorithms</span> for enterprise applications; partner with customers to build and scale their own applications; contribute new AI capabilities to the platform itself; analyse model performance across deployments, diagnosing issues such as poor recall or false positive rates and recommending targeted fixes; and work with data engineers and SMEs to source, validate, and correctly use new data assets.</p>

<p>Read the shape of it and this is a <span class="k">forward-deployed data scientist</span> role, not a research one and not a pure platform one. It is explicitly client-facing and explicitly requires travel. The verbs that matter are <em>identify the right approach, implement it on their platform, make it run reliably at enterprise scale, and explain it to a customer</em>. The industries behind it — defence and intelligence, maritime, manufacturing, oil and gas, utilities, healthcare — are heavy-asset, and that is why optimisation sits next to machine learning in the same sentence.</p>

<p class="jdx-h3">Requirements, mapped</p>

<table class="jdx-req">
<thead><tr><th>Requirement</th><th>Where it is covered</th><th>Status</th></tr></thead>
<tbody>
<tr><td>MS or PhD in CS, EE, Statistics, OR, or related</td><td>MS in Artificial Intelligence, University of Michigan</td><td><span class="pill have">covered</span></td></tr>
<tr><td>Generative AI experience</td><td><a href="/skills/#sec-genai">Skills — Generative AI</a> · <a href="/projects/industry/infiswift/">Infiswift</a> · <a href="/projects/industry/jpmorgan/">JPMorgan RAG assistant</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td>Agentic systems</td><td><a href="/stacks/agentic/">Agentic stack</a> · <a href="/skills/#multi-agent-orchestration">Skills</a> · <a href="/open-source/#agentic">regsentinel, MCP invoice extractor</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td>Supervised and unsupervised learning</td><td><a href="/stacks/ml/">ML stack</a> · <a href="/skills/#xgboost">XGBoost</a> · module 2 below</td><td><span class="pill have">covered</span></td></tr>
<tr><td>Classical regression and classification</td><td><a href="/stacks/ml/#linear-regression">ML stack</a> · <a href="/stacks/data-science/#regression">Data Science stack</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td><em>Optimisation algorithms</em></td><td>module 1 below</td><td><span class="pill gap">gap</span></td></tr>
<tr><td>Maths — linear algebra, calculus, probability, statistics</td><td><a href="/stacks/data-science/#statistics">Data Science stack</a> · module 3 below</td><td><span class="pill part">refresh</span></td></tr>
<tr><td>Deploying at scale in distributed / cloud-native environments</td><td><a href="/skills/#sec-cloud">Skills — Cloud &amp; MLOps</a> · <a href="/stacks/aws/">AWS stack</a> · <a href="/projects/industry/jpmorgan/">Kubeflow, Terraform, EKS</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td>Diagnosing recall and false-positive problems in production</td><td><a href="/interview-rounds/#ml">ML round Q&amp;A</a> · <a href="/projects/industry/jpmorgan/">fraud detection work</a> · module 4 below</td><td><span class="pill have">covered</span></td></tr>
<tr><td>Driving projects independently, cross-functional collaboration</td><td>module 5 below</td><td><span class="pill have">covered</span></td></tr>
<tr><td>Python</td><td><a href="/skills/#python">Skills</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td><em>Preferred:</em> JavaScript, Java, or Scala</td><td><a href="/skills/#java">Java</a> · <a href="/skills/#c-sharp">C#</a> · JavaScript in the <a href="/open-source/#applied">deepfake plugin</a></td><td><span class="pill part">partial</span></td></tr>
<tr><td><em>Preferred:</em> LangChain, LlamaIndex</td><td><a href="/skills/#langchain">LangChain</a> · <a href="/skills/#langgraph">LangGraph</a> — LlamaIndex not used</td><td><span class="pill part">partial</span></td></tr>
<tr><td><em>Preferred:</em> vector databases, RAG</td><td><a href="/skills/#rag">RAG</a> · <a href="/skills/#pinecone">Pinecone</a> · <a href="/skills/#hybrid-search">Hybrid search</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td><em>Preferred:</em> portfolio — GitHub, publications, open source</td><td><a href="/open-source/">Open Source</a> · <a href="/publications/">publications</a></td><td><span class="pill have">covered</span></td></tr>
<tr><td><em>Implied:</em> the C3 AI Platform itself</td><td>module 6 below</td><td><span class="pill gap">gap</span></td></tr>
</tbody>
</table>

<div class="jdx-note">
<b>Where this differs from a normal DS role.</b> Two things stand out. First, <b>optimisation algorithms are a first-class requirement</b>, and Operations Research is listed as an acceptable degree — C3's application portfolio is largely optimisation products (production scheduling, inventory, sourcing, demand planning), so this is not decoration. Second, it is <b>client-facing with travel</b>, which means the round assessing whether you can hold a room with a customer's engineers carries as much weight as the modelling one. Both are worth preparing for deliberately, because neither is what a candidate coming from an internal ML team expects.
</div>

<p class="jdx-h3">Study modules</p>

<p class="vs-libs"><span class="lbl">Likely stack</span><code>python</code> <code>numpy</code> <code>scipy.optimize</code> <code>pulp</code> <code>ortools</code> <code>scikit-learn</code> <code>xgboost</code> <code>langchain</code> <code>llama-index</code> <code>pyspark</code> <code>kubernetes</code></p>

<details class="cx"><summary>1 · Optimisation and operations research — the real gap</summary><div class="cx-body">
<p>The highest-yield module here, because it is the one requirement with no coverage elsewhere on this site and the one C3's product line is built on.</p>
<p><span class="k">Linear programming.</span> Minimise a linear objective subject to linear constraints. The feasible region is a convex polytope and the optimum sits at a vertex, which is why the simplex method works by walking vertices; interior-point methods cross the middle instead and scale better on large problems. Know that LP is solved in polynomial time and is, practically speaking, a closed problem — modern solvers handle millions of variables.</p>
<p><span class="k">Integer and mixed-integer programming.</span> Add the constraint that some variables must be whole numbers and the problem becomes NP-hard. This is where almost all real scheduling and assignment problems live, because you cannot dispatch half a truck. Branch and bound solves it by relaxing the integrality, branching on a fractional variable, and pruning subtrees that cannot beat the incumbent. The <em>optimality gap</em> between the best found solution and the best bound is what you actually report to a customer — say that, because it shows you have run a real solver.</p>
<p><span class="k">Duality.</span> Every LP has a dual, and the dual variables are shadow prices — how much the objective would improve per unit of relaxed constraint. This is the single most useful thing to know for a client conversation: it turns "here is the schedule" into "here is which constraint is costing you the most money", which is what the customer wants.</p>
<p><span class="k">Convexity.</span> The dividing line that matters more than linear-versus-nonlinear. A convex problem has one optimum and reliable solvers; a non-convex one has local optima and you are into heuristics. Being able to say whether a formulation is convex is a genuine signal.</p>
<p><span class="k">Classic problem families.</span> Assignment and matching (Hungarian algorithm), network flow and min-cost flow, knapsack, set covering, vehicle routing, job-shop scheduling, and lot sizing. C3's inventory, sourcing, and production scheduling products map onto these directly, so recognising the shape of a customer's problem is the first thing you would actually do in the role.</p>
<p><span class="k">Heuristics and metaheuristics.</span> When the exact solver will not finish in time: greedy construction plus local search, simulated annealing, tabu search, genetic algorithms, and large neighbourhood search. In practice the winning approach is usually a good heuristic to get a feasible solution fast, then a solver to improve it within a time budget.</p>
<p><span class="k">Optimisation under uncertainty.</span> Stochastic programming with scenarios, robust optimisation against a worst case, and chance constraints. Real demand and real equipment failures are uncertain, so this is where forecasting meets optimisation — a demand model feeds the optimiser, and the interesting question is what happens when the forecast is wrong.</p>
<p><span class="k">Where ML meets it.</span> Predict-then-optimise is the standard pattern and has a known flaw: a forecast optimised for accuracy is not necessarily the one that produces the best decision. Decision-focused learning trains the model against the downstream decision cost instead. Raising that distinction unprompted would land very well in this interview.</p>
<p class="uses">Uses: <code>scipy.optimize</code> · <code>pulp</code> · <code>ortools</code> · <code>cvxpy</code> · Gurobi · CPLEX</p>
</div></details>

<details class="cx"><summary>2 · Classical ML, still the bulk of the work</summary><div class="cx-body">
<p>The JD lists supervised and unsupervised learning and "classical regression and classification" as hard requirements, ahead of anything generative. Enterprise sensor and transaction data is tabular, so this is what most engagements are.</p>
<p><span class="k">Supervised.</span> Linear and logistic regression as baselines you can explain to a customer, then gradient boosting as the workhorse — XGBoost, LightGBM, CatBoost. Be ready to justify boosting over deep learning on tabular data: less tuning, less data, minutes to train, and it wins.</p>
<p><span class="k">Unsupervised.</span> K-means and its assumptions, hierarchical and DBSCAN for non-spherical structure, PCA for dimensionality reduction, and anomaly detection — Isolation Forest, one-class SVM, reconstruction error. Anomaly detection is disproportionately relevant here because predictive maintenance and equipment reliability are C3's flagship applications and labelled failures are rare.</p>
<p><span class="k">Time series.</span> Industrial data is temporal. Know the classical baselines (ARIMA, exponential smoothing, seasonal decomposition), why a random train-test split is invalid, backtesting with rolling origin, and why a naive last-value baseline beats a great many forecasting models.</p>
<p><span class="k">Survival and reliability.</span> Time-to-failure modelling, censoring, hazard rates, Weibull. Under-known and directly relevant to reliability applications, so it is cheap differentiation.</p>
<p class="uses">Uses: <code>scikit-learn</code> · <code>xgboost</code> · <code>lightgbm</code> · <code>statsmodels</code> · <code>lifelines</code> · <code>prophet</code></p>
<p class="site">On this site: <a href="/stacks/ml/">ML stack</a> · <a href="/stacks/data-science/">Data Science stack</a></p>
</div></details>

<details class="cx"><summary>3 · The mathematical foundation they ask for explicitly</summary><div class="cx-body">
<p>Named as a requirement in its own line, which usually means someone will probe it. Not proofs — fluency with the objects.</p>
<p><span class="k">Linear algebra.</span> Matrix multiplication as composition, rank and what a rank-deficient design matrix does to a regression, eigenvectors and eigenvalues, SVD and its relationship to PCA, and why positive semi-definiteness matters for covariance matrices and convex objectives.</p>
<p><span class="k">Calculus.</span> Gradients and the chain rule as the mechanism behind backpropagation, the Hessian and what its curvature tells an optimiser, and Lagrange multipliers — which are the bridge to constrained optimisation and therefore to module 1.</p>
<p><span class="k">Probability.</span> Conditional probability and Bayes, expectation and variance, the common distributions and when each arises, the central limit theorem and its conditions, and maximum likelihood as the thing most loss functions secretly are.</p>
<p><span class="k">Statistics.</span> Confidence intervals and what they do and do not mean, hypothesis testing and p-values stated correctly, multiple comparisons, statistical versus practical significance, and experiment design. The base-rate question — a 99% accurate test for a 1-in-10,000 condition — is asked constantly and answered badly.</p>
<p class="site">On this site: <a href="/stacks/data-science/#statistics">Data Science stack — statistical foundations</a> · <a href="/interview-rounds/#problem-solving">Problem Solving Q&amp;A</a></p>
</div></details>

<details class="cx"><summary>4 · Diagnosing models in production</summary><div class="cx-body">
<p>The JD calls this out specifically — "diagnose issues such as poor recall or false positive rates" — which tells you it is a real and recurring part of the job across customer deployments.</p>
<p><span class="k">Read the confusion matrix before touching the model.</span> Poor recall and excessive false positives are usually a threshold problem, not a model problem, and the threshold is set by what the customer can act on. An alert system generating more alerts than the maintenance crew can service is failing on capacity, whatever the AUC says.</p>
<p><span class="k">Slice before you aggregate.</span> One customer, one site, one asset class, one sensor type. An aggregate metric that looks acceptable while one plant gets useless output is the normal failure mode in multi-tenant enterprise deployment.</p>
<p><span class="k">Distinguish the causes.</span> Distribution shift from a changed process; concept drift from changed physical behaviour; a broken upstream data feed; training-serving skew; label delay and label quality; or the model being asked about a regime it never saw. Each has a different fix, and naming which one you are looking at is the skill.</p>
<p><span class="k">Rare events.</span> Equipment failure and defects are heavily imbalanced. PR AUC over ROC AUC, precision at the top of the ranking as the metric that matches investigator capacity, and calibration when the score feeds a cost-based decision.</p>
<p><span class="k">Then the customer conversation.</span> Explaining why recall is low without either blaming their data or overpromising is the actual difficulty. The framing that works is the trade-off curve: here is what raising recall costs you in false alarms, here is the operating point, and here is the decision that is yours rather than mine.</p>
<p class="site">On this site: <a href="/interview-rounds/#ml">ML round — metrics and evaluation, error analysis</a></p>
</div></details>

<details class="cx"><summary>5 · The client-facing half of the job</summary><div class="cx-body">
<p>Explicitly a client-facing position requiring travel. In a forward-deployed role this is assessed as seriously as the modelling, and it is where most technically strong candidates are weakest.</p>
<p><span class="k">Scoping with a customer.</span> The stated ask is rarely the real problem. Start from the decision that would change, what it is worth, what data exists today, and who would use the output. Being able to walk a customer back from "we want AI on this" to a specifiable problem is the core skill.</p>
<p><span class="k">Explaining without condescending.</span> The audience is engineers and subject matter experts who know their domain far better than you do. The move is to use their vocabulary and be precise about uncertainty — an SME who has run the plant for twenty years will find the flaw in your assumption faster than you will, and inviting that is how the model gets better.</p>
<p><span class="k">Managing expectations.</span> Saying what the model cannot do, early and in writing, is what prevents the engagement going wrong at month four. Enterprise data is worse than anyone expects, and the first honest finding is often that the data does not support the original ask.</p>
<p><span class="k">Working with SMEs on data.</span> The JD calls this out — sourcing, validating, and correctly leveraging new data assets. In practice that means finding out what a sensor actually measures, which values are placeholders, when the process changed, and which fields are entered by hand. That knowledge lives with people, not in documentation.</p>
<p><span class="k">Independence.</span> "Ability to drive projects independently" in a client-facing role means being the only technical person in the room and still making progress. Have an example ready of owning something end to end with no one to escalate to.</p>
</div></details>

<details class="cx"><summary>6 · C3 AI itself — the homework</summary><div class="cx-body">
<p>The one gap you can close entirely before the interview, and the one candidates most often skip.</p>
<p><span class="k">The platform.</span> C3's central idea is a model-driven architecture: you define the data model and the platform handles persistence, integration, and orchestration, so applications are built against an abstraction rather than against a specific database or cloud. Understand what that buys — portability, and reuse across customers who all have different underlying systems — and what it costs, which is working inside someone else's abstraction.</p>
<p><span class="k">The product portfolio.</span> Reliability, Production Schedule Optimization, Demand Planning, Process Optimization, Inventory Optimization, Sourcing Optimization, plus C3 Generative AI and the Agentic AI Platform. Notice that five of those are optimisation products — that is the clearest signal in the whole posting about what the work is.</p>
<p><span class="k">The industries.</span> Defence and intelligence, maritime, manufacturing, federal, oil and gas, utilities, healthcare and life sciences. Heavy assets, expensive downtime, sparse failure labels, and long sales cycles. Being able to name a plausible problem in one of them, unprompted, is worth more than any framework knowledge.</p>
<p><span class="k">The company.</span> Public (NYSE: AI), enterprise sales-led, competing with build-it-yourself internal teams as much as with other vendors. A fair question to ask them: what makes a customer choose the platform over their own data science team, and how does that shape what you build.</p>
<p><span class="k">Read before the call.</span> Their case studies and the C3 AI Academy material. Coming in able to say "your reliability application appears to do X — is that right?" changes the tone of the conversation entirely.</p>
</div></details>

<details class="cx"><summary>7 · Likely interview questions</summary><div class="cx-body">
<p>Drawn from the requirement list. Answers to the general ML and problem-solving versions are written out in the <a href="/interview-rounds/">Interview Rounds</a> section.</p>
<p><span class="k">Optimisation.</span> What makes a problem linear, and what changes when variables must be integers. Explain branch and bound. What is the dual, and what would you tell a customer with it. How would you formulate production scheduling as an optimisation problem. What do you do when the solver does not converge in the time available. When would you use a heuristic instead of an exact solver.</p>
<p><span class="k">ML.</span> Boosting versus deep learning on tabular data. How would you detect failures with almost no labelled failures. Why is a random split wrong for time series. How do you pick a threshold for an alerting system. What does an AUC of 0.87 mean.</p>
<p><span class="k">Diagnosis.</span> A customer says recall is too low — walk me through what you check. False positives doubled and nothing was deployed; what happened. The model works at one site and not another — why. How do you tell drift from a broken data feed.</p>
<p><span class="k">Generative and agentic.</span> When would you use an agent rather than a pipeline. How would you evaluate a RAG system over a customer's technical documentation. What stops an agent taking a destructive action in a production environment. Where would you refuse to use an LLM in an industrial setting.</p>
<p><span class="k">Client-facing.</span> A customer wants something the data cannot support — what do you do. How do you explain a false positive rate to a plant manager. Tell me about a time an SME corrected your assumption. How do you handle a stakeholder who wants a model when a rule would do.</p>
<p><span class="k">Ask them back.</span> What proportion of an engagement is modelling versus data plumbing and stakeholder work. How much travel, realistically. Do data scientists contribute back to the platform or only build on it. How much optimisation work is there relative to ML. What does a project that went badly look like here.</p>
</div></details>

</div>
</details>

<p style="margin-top:2.5em">Related: <a href="/jd-scan/">scan a description</a> against every term on this site, or see <a href="/job-resources/">Tech Job Resources</a> for what each role type is actually accountable for.</p>

<script src="{{ base_path }}/assets/js/open-target-details.js"></script>
