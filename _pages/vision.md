---
title: "Vision &amp; Multimodal AI"
permalink: /vision/
layout: single
author_profile: true
---

{% include base_path %}
{% include stack-style.html %}

<style>
.vs-sec {
  margin-top: 2.8em; padding: .55em 0 .4em; border-top: 3px solid #23303a; border-bottom: 1px solid #e4e4e4;
  font-size: 1.42rem; color: #23303a; scroll-margin-top: 24px;
}
.vs-lead { color: #55606a; font-size: .96rem; margin: .7em 0 1.2em; }
.vs-tier {
  margin: 1.7em 0 .55em; font-size: .76rem; text-transform: uppercase; letter-spacing: .09em; font-weight: 700;
  display: inline-block; padding: .2em .7em; border-radius: 11px;
}
.vs-tier.f { color: #35606f; background: #e8f1f6; border: 1px solid #cfe0e8; }
.vs-tier.c { color: #7a601b; background: #f8f3e6; border: 1px solid #e8dcc2; }
.vs-tier.a { color: #a52c22; background: #fbeae7; border: 1px solid #f0d3ce; }
</style>

<p class="stack-lead">The vision space, laid out end to end across five subdomains — from pixel arithmetic through recognition, generation, and models that reason across modalities. Each subdomain runs from foundations to advanced, so you can enter wherever you already are.</p>

<p class="stack-hint">Click a subdomain to open it, then any concept inside. PyTorch code for everything is collected at the end. Tiers are cumulative: advanced material generally assumes the foundations above it.</p>

<p class="jump" style="margin-bottom:2em">
<a class="stack-back" href="#image-processing">1 · Image Processing</a>
<a class="stack-back" href="#computer-vision">2 · Computer Vision</a>
<a class="stack-back" href="#diffusion">3 · Diffusion Models</a>
<a class="stack-back" href="#vlm">4 · Vision-Language Models</a>
<a class="stack-back" href="#multimodal">5 · Multimodal Language Modelling</a>
<a class="stack-back" href="#code-snippets">Code snippets</a>
</p>

<details class="vs-dom" id="image-processing">
<summary>1 · Image Processing</summary>
<div class="vs-body">
<p class="vs-libs"><span class="lbl">Libraries &amp; packages</span><code>opencv-python (cv2)</code> <code>numpy</code> <code>scikit-image</code> <code>Pillow</code> <code>scipy.ndimage</code> <code>PyWavelets</code></p>
<p class="vs-lead">Operating on images as signals rather than as scenes. Everything downstream inherits these representations, and a surprising share of "model" problems turn out to be preprocessing problems.</p>

<p class="vs-tier f">Foundations</p>

<details class="cx"><summary>Digital image representation</summary><div class="cx-body">
<p>An image is a grid of pixels, each holding one value per channel at some bit depth — typically 8-bit RGB, giving 256 levels per channel. Height × width × channels is the tensor every later stage consumes.</p>
<p>Bit depth matters more than people expect: 8-bit is fine for display but clips highlights and quantises gradients, which is why medical and scientific imaging works in 12- or 16-bit.</p>
<p class="uses">Uses: <code>numpy</code> · <code>cv2.imread</code> · <code>PIL.Image.open</code></p></div></details>

<details class="cx"><summary>Colour spaces</summary><div class="cx-body">
<p>RGB is how displays emit light, not how anything perceives it. HSV separates hue from saturation and brightness, making colour thresholding tractable; LAB is designed so that equal numeric distances correspond to roughly equal perceptual differences.</p>
<p>Choosing the right space often converts a hard problem into a trivial one — segmenting a coloured object is painful in RGB and nearly free in HSV, because illumination changes move all three RGB channels at once.</p>
<p class="uses">Uses: <code>cv2.cvtColor</code> · <code>skimage.color</code></p></div></details>

<details class="cx"><summary>Histograms &amp; equalization</summary><div class="cx-body">
<p>A histogram counts pixel intensities. Its shape tells you immediately whether an image is under- or over-exposed, low contrast, or clipped.</p>
<p>Equalization redistributes intensities to spread the histogram, and CLAHE does it in local tiles so one bright region does not wash out the rest. It is a standard preprocessing step wherever illumination varies across a dataset.</p>
<p class="uses">Uses: <code>cv2.calcHist</code> · <code>cv2.equalizeHist</code> · <code>cv2.createCLAHE</code></p></div></details>

<details class="cx"><summary>Point operations</summary><div class="cx-body">
<p>Operations applied to each pixel independently of its neighbours — brightness offsets, contrast scaling, gamma correction, inversion, and lookup-table mappings.</p>
<p>Gamma is the one that matters most and is most often ignored: pixel values are usually stored non-linearly, so averaging or blending raw values is arithmetically wrong unless you linearise first.</p>
<p class="uses">Uses: <code>numpy</code> · <code>cv2.LUT</code> · <code>cv2.convertScaleAbs</code></p></div></details>

<details class="cx"><summary>Convolution &amp; kernels</summary><div class="cx-body">
<p>Convolution slides a small matrix over the image, replacing each pixel with a weighted sum of its neighbourhood. The kernel's values determine the operation — blur, sharpen, or edge response.</p>
<p>This is the single most important operation in the field. The only difference between classical image processing and a CNN is whether the kernel weights are <span class="k">designed or learned</span>.</p>
<p class="uses">Uses: <code>cv2.filter2D</code> · <code>scipy.ndimage.convolve</code></p></div></details>

<details class="cx"><summary>Smoothing &amp; noise reduction</summary><div class="cx-body">
<p>Gaussian blur averages with distance-weighted neighbours; median filtering replaces each pixel with the neighbourhood median and is far better against salt-and-pepper noise; bilateral filtering weights by both spatial and intensity distance.</p>
<p>Bilateral is the useful one when you want denoising without destroying edges — it refuses to average across a large intensity jump, which is exactly what Gaussian blur does wrong.</p>
<p class="uses">Uses: <code>cv2.GaussianBlur</code> · <code>cv2.medianBlur</code> · <code>cv2.bilateralFilter</code></p></div></details>

<details class="cx"><summary>Edge detection</summary><div class="cx-body">
<p>Edges are intensity discontinuities, found by approximating spatial derivatives. Sobel and Prewitt give gradient magnitude and direction; Laplacian responds to second derivatives.</p>
<p>Canny remains the standard because it is a pipeline rather than a filter: smooth, compute gradients, suppress non-maxima to thin edges, then hysteresis-threshold so weak edges survive only when connected to strong ones.</p>
<p class="uses">Uses: <code>cv2.Canny</code> · <code>cv2.Sobel</code> · <code>cv2.Laplacian</code></p></div></details>

<p class="vs-tier c">Core</p>

<details class="cx"><summary>Thresholding &amp; binarisation</summary><div class="cx-body">
<p>Reducing an image to foreground and background. A global threshold works only under even illumination; Otsu's method picks it automatically by maximising between-class variance.</p>
<p>Adaptive thresholding computes a local threshold per region and is what makes OCR work on photographed documents, where one corner is always darker than the other.</p>
<p class="uses">Uses: <code>cv2.threshold</code> · <code>cv2.adaptiveThreshold</code> · <code>skimage.filters.threshold_otsu</code></p></div></details>

<details class="cx"><summary>Morphological operations</summary><div class="cx-body">
<p>Shape operations on binary images using a structuring element. Erosion shrinks foreground, dilation grows it; <span class="k">opening</span> (erode then dilate) removes small specks, and <span class="k">closing</span> (dilate then erode) fills small holes.</p>
<p>These are the cheap, reliable cleanup tools after thresholding or segmentation — removing isolated noise pixels and closing gaps in contours that would otherwise break connected-component analysis.</p>
<p class="uses">Uses: <code>cv2.erode</code> · <code>cv2.dilate</code> · <code>cv2.morphologyEx</code></p></div></details>

<details class="cx"><summary>Image pyramids &amp; multi-scale</summary><div class="cx-body">
<p>A pyramid is the same image at successively lower resolutions. Gaussian pyramids downsample after blurring; Laplacian pyramids store the difference between levels, capturing detail per scale.</p>
<p>Scale is the recurring problem in vision — an object's size in pixels is arbitrary — and pyramids are the classical answer, echoed later by feature pyramid networks in detection.</p>
<p class="uses">Uses: <code>cv2.pyrDown</code> · <code>cv2.pyrUp</code> · <code>skimage.transform.pyramid_gaussian</code></p></div></details>

<details class="cx"><summary>Frequency domain &amp; Fourier</summary><div class="cx-body">
<p>The Fourier transform re-expresses an image as a sum of spatial frequencies. Low frequencies carry broad structure, high frequencies carry edges and texture.</p>
<p>It makes some operations trivial — periodic noise becomes an isolated spike you can remove, and convolution becomes multiplication — and it explains aliasing, which is why downsampling without blurring first produces moiré artefacts.</p>
<p class="uses">Uses: <code>numpy.fft</code> · <code>cv2.dft</code> · <code>scipy.fft</code></p></div></details>

<details class="cx"><summary>Geometric transforms &amp; interpolation</summary><div class="cx-body">
<p>Translation, rotation, scaling, affine, and perspective (homography) transforms map pixels to new positions. Because the mapping lands between pixels, the value must be interpolated — nearest neighbour, bilinear, or bicubic.</p>
<p>A homography maps any plane to any other plane, which is what lets you rectify a photographed document to a flat rectangle. Interpolation choice is a real quality decision: nearest neighbour preserves hard labels in masks, bilinear is right for photographs.</p>
<p class="uses">Uses: <code>cv2.warpAffine</code> · <code>cv2.warpPerspective</code> · <code>cv2.findHomography</code></p></div></details>

<details class="cx"><summary>Compression &amp; artefacts</summary><div class="cx-body">
<p>JPEG divides the image into blocks, applies a discrete cosine transform, and quantises high-frequency coefficients — which is where the information is thrown away. PNG is lossless; WebP and AVIF improve on both.</p>
<p>Worth understanding because compression artefacts become training signal. A model trained only on high-quality JPEGs frequently degrades on heavily compressed real-world uploads, and blocking artefacts can be mistaken for texture.</p>
<p class="uses">Uses: <code>cv2.imencode</code> · <code>PIL.Image.save</code> · <code>imageio</code></p></div></details>

<p class="vs-tier a">Advanced</p>

<details class="cx"><summary>Feature detectors &amp; descriptors</summary><div class="cx-body">
<p>Corners and blobs are locations identifiable across viewpoints. Harris detects corners; SIFT and ORB add scale and rotation invariance plus a descriptor vector for matching between images.</p>
<p>These carried vision for two decades and remain in use where learned features are unnecessary or unaffordable — SLAM, panorama stitching, and registration all still run on them.</p>
<p class="uses">Uses: <code>cv2.SIFT_create</code> · <code>cv2.ORB_create</code> · <code>cv2.BFMatcher</code></p></div></details>

<details class="cx"><summary>Registration &amp; stitching</summary><div class="cx-body">
<p>Aligning multiple images of the same scene: detect features, match them, estimate a transform robustly with RANSAC to reject bad matches, then warp and blend.</p>
<p>RANSAC is the key idea and generalises well beyond vision — fit a model on random minimal subsets, keep the hypothesis with the most inliers, and let outliers be ignored rather than averaged in.</p>
<p class="uses">Uses: <code>cv2.findHomography</code> (RANSAC) · <code>cv2.Stitcher</code></p></div></details>

<details class="cx"><summary>Advanced denoising &amp; restoration</summary><div class="cx-body">
<p>Non-local means averages similar patches from anywhere in the image rather than only nearby pixels; wavelet methods threshold coefficients in a multi-scale basis; deconvolution attempts to invert a known blur.</p>
<p>The insight behind non-local means — that natural images are self-similar, so the best evidence about a patch is other patches like it — later reappears in self-attention.</p>
<p class="uses">Uses: <code>cv2.fastNlMeansDenoising</code> · <code>skimage.restoration</code> · <code>PyWavelets</code></p></div></details>

<details class="cx"><summary>Colour constancy &amp; white balance</summary><div class="cx-body">
<p>Recovering how a scene would look under neutral illumination. Grey-world assumes the average scene is achromatic; more careful methods estimate the illuminant explicitly.</p>
<p>It matters for datasets because illumination is a confound: a classifier can learn indoor tungsten lighting instead of the object, and then fail outdoors.</p>
<p class="uses">Uses: <code>cv2.xphoto.createSimpleWB</code> · <code>colour-science</code></p></div></details>
</div>
</details>

<details class="vs-dom" id="computer-vision">
<summary>2 · Computer Vision</summary>
<div class="vs-body">
<p class="vs-libs"><span class="lbl">Libraries &amp; packages</span><code>torch</code> <code>torchvision</code> <code>timm</code> <code>ultralytics</code> <code>transformers</code> <code>albumentations</code> <code>pycocotools</code> <code>opencv-python</code></p>
<p class="vs-lead">Recovering meaning and geometry from images — what is present, where it is, and how the scene is arranged in three dimensions.</p>

<p class="vs-tier f">Foundations</p>

<details class="cx"><summary>The core task taxonomy</summary><div class="cx-body">
<p>Classification assigns a label to the whole image. Detection adds localisation with bounding boxes. Semantic segmentation labels every pixel by class; instance segmentation separates individual objects; panoptic segmentation does both at once.</p>
<p>Choosing the weakest task that solves your problem is a real cost decision — annotation effort rises steeply from image labels to boxes to pixel masks.</p>
<p class="uses">Uses: <code>torchvision.datasets</code> · <code>pycocotools</code></p></div></details>

<details class="cx"><summary>CNN building blocks</summary><div class="cx-body">
<p>Convolutional layers apply learned filters, stride controls downsampling, padding preserves spatial size, and pooling aggregates locally. Stacking them grows the <span class="k">receptive field</span> — how much of the input one output unit can see.</p>
<p>Receptive field is the concept to hold onto: if it is smaller than the object, the network structurally cannot see the whole thing, no matter how much you train it.</p>
<p class="uses">Uses: <code>torch.nn.Conv2d</code> · <code>torch.nn.MaxPool2d</code></p></div></details>

<details class="cx"><summary>Backbones &amp; transfer learning</summary><div class="cx-body">
<p>A backbone is a feature extractor — ResNet, EfficientNet, ViT — pretrained on a large dataset and reused. You attach a task-specific head and fine-tune.</p>
<p>This is the default starting point for almost all applied vision. Early layers learn edges and textures that transfer across essentially every visual domain, so training from scratch is rarely justified below very large data scales.</p>
<p class="uses">Uses: <code>timm.create_model</code> · <code>torchvision.models</code></p></div></details>

<details class="cx"><summary>Data augmentation</summary><div class="cx-body">
<p>Synthetic variation applied during training — flips, crops, rotations, colour jitter, and stronger schemes like Mixup, CutMix, and RandAugment.</p>
<p>It encodes the invariances you want. The discipline is that augmentation must preserve the label: horizontal flips are fine for cats and wrong for text or for distinguishing left from right hands.</p>
<p class="uses">Uses: <code>albumentations</code> · <code>torchvision.transforms.v2</code></p></div></details>

<details class="cx"><summary>IoU, NMS and detection basics</summary><div class="cx-body">
<p>Intersection over Union measures box overlap. Detectors emit many overlapping candidates, so non-maximum suppression keeps the highest-confidence box and discards others above an IoU threshold.</p>
<p>NMS is a frequent source of subtle bugs: too aggressive and genuinely overlapping objects get deleted, too permissive and duplicates survive into the output.</p>
<p class="uses">Uses: <code>torchvision.ops.nms</code> · <code>torchvision.ops.box_iou</code></p></div></details>

<details class="cx"><summary>Evaluation metrics</summary><div class="cx-body">
<p>mAP averages precision over recall levels and IoU thresholds for detection; Dice and IoU score segmentation masks; classification uses precision, recall, and F1.</p>
<p>Metric choice encodes what you care about. A pedestrian detector should be scored on recall at high precision, because a missed pedestrian and a false box are not equally costly — and mAP hides that entirely.</p>
<p class="uses">Uses: <code>torchmetrics</code> · <code>pycocotools.cocoeval</code></p></div></details>

<p class="vs-tier c">Core</p>

<details class="cx"><summary>Detection architectures</summary><div class="cx-body">
<p>Two-stage detectors (R-CNN → Faster R-CNN) propose regions then classify them, favouring accuracy. One-stage detectors (YOLO, SSD, RetinaNet) predict directly over a grid in a single pass, favouring speed. Anchor-free methods (FCOS, CenterNet) drop preset box priors entirely.</p>
<p>Focal loss was the pivotal idea for one-stage models: background overwhelms foreground by orders of magnitude, and down-weighting easy negatives is what closed the accuracy gap.</p>
<p class="uses">Uses: <code>ultralytics.YOLO</code> · <code>torchvision.models.detection</code></p></div></details>

<details class="cx"><summary>Segmentation architectures</summary><div class="cx-body">
<p>FCN made segmentation fully convolutional. U-Net added skip connections between encoder and decoder, restoring the spatial detail that downsampling destroys — which is why it dominates medical imaging. Mask R-CNN adds a mask head to detection; DeepLab uses atrous convolution to widen receptive field without losing resolution.</p>
<p>The recurring tension is resolution against context: you must downsample to see broadly, and you must retain detail to place boundaries precisely.</p>
<p class="uses">Uses: <code>segmentation_models_pytorch</code> · <code>torchvision maskrcnn</code></p></div></details>

<details class="cx"><summary>Vision transformers</summary><div class="cx-body">
<p>ViT splits an image into patches, embeds them as tokens, and applies a standard transformer. Without convolution's built-in locality bias, it needs more data or stronger augmentation — but scales better when that data exists.</p>
<p>DETR reframed detection as set prediction with bipartite matching, removing anchors and NMS from the pipeline entirely and making detection end-to-end for the first time.</p>
<p class="uses">Uses: <code>timm</code> · <code>transformers.ViTModel</code> · <code>DetrForObjectDetection</code></p></div></details>

<details class="cx"><summary>Object tracking</summary><div class="cx-body">
<p>Maintaining identity across frames. SORT combines a Kalman filter for motion with Hungarian matching on IoU; DeepSORT adds an appearance embedding so identities survive occlusion.</p>
<p>The hard part is not detection but association — deciding whether the box in this frame is the same object as the box in the last one, through occlusion, crossing paths, and missed detections.</p>
<p class="uses">Uses: <code>ultralytics track</code> · <code>filterpy</code> (Kalman) · <code>scipy.optimize.linear_sum_assignment</code></p></div></details>

<details class="cx"><summary>Pose estimation &amp; keypoints</summary><div class="cx-body">
<p>Locating structured landmarks — human joints, facial points, object keypoints. Top-down approaches detect a person then find joints within the crop; bottom-up detect all joints then group them.</p>
<p>Heatmap regression rather than direct coordinate regression is the standard trick: predicting a spatial probability map per keypoint is far easier to learn than predicting numbers.</p>
<p class="uses">Uses: <code>ultralytics pose</code> · <code>mediapipe</code> · <code>torchvision keypointrcnn</code></p></div></details>

<details class="cx"><summary>Camera models &amp; calibration</summary><div class="cx-body">
<p>The pinhole model relates 3D points to image pixels through intrinsics (focal length, principal point) and extrinsics (rotation, translation). Real lenses add distortion that must be estimated and corrected.</p>
<p>Nothing metric is possible without this. Any claim about real-world size, distance, or position depends on knowing the camera parameters — uncalibrated images support relative reasoning only.</p>
<p class="uses">Uses: <code>cv2.calibrateCamera</code> · <code>cv2.undistort</code></p></div></details>

<p class="vs-tier a">Advanced</p>

<details class="cx"><summary>Stereo &amp; depth estimation</summary><div class="cx-body">
<p>Two cameras a known distance apart produce disparity between corresponding points, which converts directly to depth. Monocular depth estimation instead learns the mapping from a single image using learned priors.</p>
<p>Monocular depth is fundamentally ambiguous — a small near object and a large far one project identically — so learned models produce plausible relative depth rather than metric truth.</p>
<p class="uses">Uses: <code>cv2.StereoSGBM_create</code> · <code>transformers DPT</code></p></div></details>

<details class="cx"><summary>Multi-view geometry &amp; SfM</summary><div class="cx-body">
<p>Epipolar geometry constrains where a point in one view can appear in another, encoded in the fundamental and essential matrices. Structure from Motion recovers both 3D structure and camera poses from an unordered image collection; SLAM does it online.</p>
<p>Bundle adjustment — jointly refining all points and all poses to minimise reprojection error — is the optimisation at the centre of both.</p>
<p class="uses">Uses: <code>COLMAP</code> · <code>pycolmap</code> · <code>cv2.findEssentialMat</code></p></div></details>

<details class="cx"><summary>Neural rendering: NeRF &amp; Gaussian splatting</summary><div class="cx-body">
<p>NeRF represents a scene as a neural field mapping position and viewing direction to colour and density, rendered by volumetric ray marching. 3D Gaussian splatting instead represents the scene as explicit anisotropic Gaussians and rasterises them.</p>
<p>Splatting largely displaced NeRF for practical use by making rendering real-time while keeping quality, trading an implicit representation for an explicit, editable one.</p>
<p class="uses">Uses: <code>nerfstudio</code> · <code>gsplat</code></p></div></details>

<details class="cx"><summary>Self-supervised visual learning</summary><div class="cx-body">
<p>Learning representations without labels. Contrastive methods (SimCLR, MoCo) pull augmented views of the same image together and push different images apart; masked autoencoders reconstruct hidden patches; DINO uses self-distillation.</p>
<p>The payoff is that labels become needed only for fine-tuning, and DINO features show emergent segmentation without ever being trained on masks — evidence the representation captures real structure.</p>
<p class="uses">Uses: <code>lightly</code> · <code>transformers Dinov2Model</code></p></div></details>

<details class="cx"><summary>Open-vocabulary vision &amp; SAM</summary><div class="cx-body">
<p>Traditional detectors recognise a fixed label set. Open-vocabulary models align visual features with text embeddings so any phrase becomes a query. Segment Anything is promptable — a point, box, or mask yields a segmentation without class labels at all.</p>
<p>This separates <span class="k">segmentation from recognition</span>: SAM finds the boundary, a language model decides what the thing is, and the two compose without retraining either.</p>
<p class="uses">Uses: <code>segment_anything</code> · <code>transformers OwlViT</code></p></div></details>

<details class="cx"><summary>Video understanding</summary><div class="cx-body">
<p>Adding time. Approaches range from frame-wise CNNs with temporal pooling, through 3D convolutions and two-stream networks using optical flow, to video transformers with spatiotemporal attention.</p>
<p>The binding constraint is cost: attention over every frame patch is quadratic in sequence length, so nearly every practical system is a compromise on sampling rate and resolution.</p>
<p class="uses">Uses: <code>decord</code> · <code>torchvision.io.read_video</code> · <code>transformers VideoMAE</code></p></div></details>
</div>
</details>

<details class="vs-dom" id="diffusion">
<summary>3 · Diffusion Models</summary>
<div class="vs-body">
<p class="vs-libs"><span class="lbl">Libraries &amp; packages</span><code>diffusers</code> <code>torch</code> <code>transformers</code> <code>accelerate</code> <code>peft</code> <code>controlnet_aux</code> <code>safetensors</code></p>
<p class="vs-lead">Generative vision. How iterative denoising became the dominant approach to image synthesis, and the machinery that made it controllable and fast enough to use.</p>

<p class="vs-tier f">Foundations</p>

<details class="cx"><summary>The generative landscape</summary><div class="cx-body">
<p>VAEs encode to a probabilistic latent and decode, giving stable training but blurry samples. GANs pit generator against discriminator, giving sharp samples but unstable training and mode collapse. Normalising flows are exactly invertible but architecturally constrained.</p>
<p>Diffusion won because it trades a single hard problem for many easy ones: instead of learning to generate an image in one step, learn to remove a little noise — a stable regression objective, repeated.</p>
<p class="uses">Uses: <code>diffusers</code> · <code>torch</code></p></div></details>

<details class="cx"><summary>The forward (noising) process</summary><div class="cx-body">
<p>Gaussian noise is added over many timesteps until the image becomes pure noise. This process is fixed, requires no learning, and has a closed form — you can jump to any timestep directly rather than simulating step by step.</p>
<p>That closed form is what makes training practical: sample a random timestep, noise the image once, and train on it.</p>
<p class="uses">Uses: <code>diffusers.DDPMScheduler.add_noise</code></p></div></details>

<details class="cx"><summary>The reverse (denoising) process</summary><div class="cx-body">
<p>Generation runs the process backwards: start from noise and repeatedly remove a little, guided by a network trained to predict the noise present at each step.</p>
<p>The training objective is remarkably plain — predict the noise you added, measured by mean squared error. Nearly all of the apparent complexity in diffusion sits in sampling, not in training.</p>
<p class="uses">Uses: <code>diffusers.UNet2DConditionModel</code></p></div></details>

<details class="cx"><summary>Noise schedules</summary><div class="cx-body">
<p>The schedule sets how much noise is added at each timestep — linear, cosine, or learned. It determines how the difficulty of the denoising task is distributed across the trajectory.</p>
<p>Cosine schedules improved results by not destroying the image too quickly at the start, leaving more of the trajectory spent on the steps that actually carry structure.</p>
<p class="uses">Uses: <code>DDPMScheduler(beta_schedule=...)</code></p></div></details>

<details class="cx"><summary>The denoiser network</summary><div class="cx-body">
<p>Usually a U-Net — encoder, decoder, skip connections — conditioned on the timestep so one network handles every noise level. Attention layers at lower resolutions supply global coherence. Newer systems increasingly use transformers (DiT) instead.</p>
<p>Timestep conditioning is what allows a single set of weights to serve as a thousand different denoisers.</p>
<p class="uses">Uses: <code>UNet2DConditionModel</code> · <code>DiTTransformer2DModel</code></p></div></details>

<p class="vs-tier c">Core</p>

<details class="cx"><summary>DDPM and DDIM sampling</summary><div class="cx-body">
<p>DDPM sampling is stochastic and originally needed a thousand steps. DDIM reformulates it as a deterministic process that can skip steps, producing comparable images in twenty to fifty.</p>
<p>Determinism also gives reproducibility and meaningful latent interpolation — the same seed yields the same image, and paths between seeds become traversable.</p>
<p class="uses">Uses: <code>DDIMScheduler</code> · <code>DDPMScheduler</code></p></div></details>

<details class="cx"><summary>Classifier-free guidance</summary><div class="cx-body">
<p>Train the model both with and without conditioning, then at sampling time extrapolate away from the unconditional prediction toward the conditional one. A guidance scale controls how far.</p>
<p>This single trick is most of why text-to-image works as well as it does. The scale is a direct <span class="k">prompt-adherence against diversity</span> dial: too low and the prompt is ignored, too high and images become oversaturated and stereotyped.</p>
<p class="uses">Uses: <code>guidance_scale</code> in any <code>diffusers</code> pipeline</p></div></details>

<details class="cx"><summary>Latent diffusion</summary><div class="cx-body">
<p>Rather than diffusing in pixel space, compress the image with an autoencoder and diffuse in that much smaller latent space, decoding at the end. This is what Stable Diffusion is.</p>
<p>The saving is enormous — a 512×512 image becomes a 64×64 latent, roughly sixty-four times fewer positions — and it is the reason high-resolution generation became feasible on consumer hardware.</p>
<p class="uses">Uses: <code>AutoencoderKL</code> · <code>StableDiffusionPipeline</code></p></div></details>

<details class="cx"><summary>Text conditioning &amp; cross-attention</summary><div class="cx-body">
<p>A text encoder (originally CLIP, later T5-family) embeds the prompt, and cross-attention layers inside the denoiser let each spatial position attend to text tokens.</p>
<p>Text encoder quality is a major determinant of prompt fidelity — several generational jumps in prompt following came from changing the text encoder rather than the diffusion model.</p>
<p class="uses">Uses: <code>CLIPTextModel</code> · <code>T5EncoderModel</code></p></div></details>

<details class="cx"><summary>Samplers &amp; solvers</summary><div class="cx-body">
<p>Sampling is numerical integration of a differential equation, so better solvers need fewer evaluations. Euler, Heun, and DPM-Solver++ trade steps against fidelity.</p>
<p>This is why step count is a user-facing setting: it is literally the number of function evaluations, and the useful range depends on which solver is running.</p>
<p class="uses">Uses: <code>DPMSolverMultistepScheduler</code> · <code>EulerDiscreteScheduler</code></p></div></details>

<details class="cx"><summary>Score-based &amp; SDE formulation</summary><div class="cx-body">
<p>The continuous-time view: diffusion is a stochastic differential equation, and the model learns the <span class="k">score</span> — the gradient of log-density — which points toward higher-probability regions.</p>
<p>This unifies the discrete-step and continuous formulations, and it is the framework in which most modern sampler and distillation work is derived.</p>
<p class="uses">Uses: <code>ScoreSdeVeScheduler</code></p></div></details>

<p class="vs-tier a">Advanced</p>

<details class="cx"><summary>ControlNet &amp; structural conditioning</summary><div class="cx-body">
<p>ControlNet adds a trainable copy of the encoder that accepts a structural input — edges, depth, pose, segmentation — and injects it into the frozen base model through zero-initialised connections.</p>
<p>Zero initialisation is the trick: the added branch starts as an identity operation, so the base model is not damaged at the beginning of training. It converts an uncontrollable generator into a controllable one without retraining it.</p>
<p class="uses">Uses: <code>ControlNetModel</code> · <code>controlnet_aux</code></p></div></details>

<details class="cx"><summary>Personalisation: LoRA, DreamBooth, textual inversion</summary><div class="cx-body">
<p>Teaching a model a new subject or style from a handful of images. Textual inversion learns a new embedding only; DreamBooth fine-tunes the model against a rare token with a preservation loss; LoRA trains small low-rank adapters.</p>
<p>LoRA dominates in practice because adapters are a few megabytes, compose with each other, and swap at inference — one base model can serve hundreds of styles.</p>
<p class="uses">Uses: <code>peft</code> · <code>pipe.load_lora_weights</code></p></div></details>

<details class="cx"><summary>Inpainting, outpainting and img2img</summary><div class="cx-body">
<p>All three start the reverse process from something other than pure noise. img2img noises an existing image partway and denoises back; inpainting restricts changes to a mask; outpainting extends beyond the original border.</p>
<p>The denoising strength setting is just where in the trajectory you begin — high strength discards more of the original, low strength preserves composition and alters only surface detail.</p>
<p class="uses">Uses: <code>StableDiffusionImg2ImgPipeline</code> · <code>...InpaintPipeline</code></p></div></details>

<details class="cx"><summary>Distillation &amp; few-step generation</summary><div class="cx-body">
<p>Consistency models, latent consistency models, and adversarial distillation compress the sampling trajectory so a student produces in one to four steps what the teacher needed fifty for.</p>
<p>This is what made real-time and interactive generation possible. The cost is usually some diversity and fine detail — distilled models are noticeably more deterministic.</p>
<p class="uses">Uses: <code>LCMScheduler</code> · <code>AutoPipelineForText2Image</code></p></div></details>

<details class="cx"><summary>Flow matching &amp; rectified flow</summary><div class="cx-body">
<p>Instead of a noising process, learn a velocity field that transports noise to data along near-straight paths. Training is a simple regression onto that velocity.</p>
<p>Straighter trajectories are cheaper to integrate, so fewer steps are needed by construction. Several recent large image and video generators are built on this rather than classical diffusion.</p>
<p class="uses">Uses: <code>FlowMatchEulerDiscreteScheduler</code></p></div></details>

<details class="cx"><summary>Video diffusion</summary><div class="cx-body">
<p>Extending generation across time, using temporal attention or 3D convolutions, often initialised from an image model and fine-tuned on video.</p>
<p>Temporal consistency is the hard part: independently generating frames yields flicker, and the compute cost scales with frame count, which is why most systems generate short clips at limited resolution.</p>
<p class="uses">Uses: <code>StableVideoDiffusionPipeline</code> · <code>export_to_video</code></p></div></details>

<details class="cx"><summary>Evaluating generative models</summary><div class="cx-body">
<p>FID compares feature distributions of real and generated sets; CLIP score measures prompt alignment; human preference remains the reference standard.</p>
<p>All the automatic metrics are weak. FID is sensitive to sample count and preprocessing and rewards distribution matching rather than quality, and a model can score well while producing images nobody likes — which is why leaderboards in this area are dominated by human-preference arenas.</p>
<p class="uses">Uses: <code>torchmetrics FID</code> · <code>clip_score</code></p></div></details>
</div>
</details>

<details class="vs-dom" id="vlm">
<summary>4 · Vision-Language Models</summary>
<div class="vs-body">
<p class="vs-libs"><span class="lbl">Libraries &amp; packages</span><code>transformers</code> <code>open_clip_torch</code> <code>torch</code> <code>Pillow</code> <code>accelerate</code> <code>pytesseract</code> <code>lmms-eval</code></p>
<p class="vs-lead">Models that connect pixels to language — the alignment idea that made zero-shot vision possible, and the architectures that gave language models eyes.</p>

<p class="vs-tier f">Foundations</p>

<details class="cx"><summary>The alignment idea</summary><div class="cx-body">
<p>Train an image encoder and a text encoder so that matching image–text pairs land close together in a shared embedding space, and mismatched pairs land far apart.</p>
<p>Once that space exists, classification becomes retrieval: embed the image, embed candidate label phrases, and take the nearest. This is the mechanism behind zero-shot vision.</p>
<p class="uses">Uses: <code>open_clip</code> · <code>transformers CLIPModel</code></p></div></details>

<details class="cx"><summary>CLIP and contrastive pretraining</summary><div class="cx-body">
<p>CLIP trains on hundreds of millions of image–caption pairs with a contrastive objective over a large batch: each image should match its own caption against all the others in the batch as negatives.</p>
<p>Batch size is a first-class hyperparameter here, because it determines how many negatives each example sees. CLIP embeddings became infrastructure — used for retrieval, filtering, guidance, and as the vision encoder inside later VLMs.</p>
<p class="uses">Uses: <code>open_clip_torch</code> · <code>CLIPProcessor</code></p></div></details>

<details class="cx"><summary>The encoder–projector–LLM pattern</summary><div class="cx-body">
<p>The dominant modern architecture: a pretrained vision encoder produces patch features, a projection layer maps them into the language model's embedding space, and the LLM consumes them as if they were tokens.</p>
<p>Its appeal is economy. Both large components are pretrained and often frozen; only the small projector must be trained, so a capable VLM can be built without training either half from scratch.</p>
<p class="uses">Uses: <code>transformers AutoModelForVision2Seq</code></p></div></details>

<details class="cx"><summary>Captioning and VQA</summary><div class="cx-body">
<p>The two canonical tasks — describe this image, and answer a question about it. Both are now generative rather than classification tasks.</p>
<p>Their evaluation is genuinely unresolved. n-gram metrics like CIDEr reward matching reference phrasing, so a correct description written differently scores badly, which is why benchmarks increasingly use multiple-choice or model judges.</p>
<p class="uses">Uses: <code>BlipForConditionalGeneration</code> · <code>AutoProcessor</code></p></div></details>

<p class="vs-tier c">Core</p>

<details class="cx"><summary>BLIP-2 and the Q-Former</summary><div class="cx-body">
<p>BLIP-2 inserts a lightweight querying transformer between a frozen vision encoder and a frozen LLM. A small set of learned query tokens attends to image features and outputs a fixed-length summary for the language model.</p>
<p>It solves the bridging problem economically: a fixed number of query outputs regardless of image resolution, so the language model's context cost stays bounded.</p>
<p class="uses">Uses: <code>Blip2ForConditionalGeneration</code></p></div></details>

<details class="cx"><summary>LLaVA and visual instruction tuning</summary><div class="cx-body">
<p>LLaVA showed that a simple linear or MLP projection plus instruction-tuning data is enough for strong conversational visual ability, with training data generated by prompting a text-only model with image annotations.</p>
<p>The lesson was that <span class="k">data mattered more than architecture</span> — a minimal connector with good instruction data outperformed more elaborate designs, and this recipe became the default.</p>
<p class="uses">Uses: <code>LlavaForConditionalGeneration</code></p></div></details>

<details class="cx"><summary>Cross-attention architectures</summary><div class="cx-body">
<p>Flamingo interleaves gated cross-attention layers inside a frozen language model, letting text tokens attend to image features at multiple depths rather than only at the input.</p>
<p>It handles interleaved image–text sequences naturally and supports few-shot prompting with images, at the cost of modifying the language model's internals rather than only its input.</p>
<p class="uses">Uses: <code>IdeficsForVisionText2Text</code></p></div></details>

<details class="cx"><summary>Grounding &amp; referring expressions</summary><div class="cx-body">
<p>Connecting language to specific image regions — "the mug behind the laptop" must resolve to coordinates, not just a description. Models output boxes or masks alongside text.</p>
<p>This is what separates a model that describes a scene from one that can act in it, and it is the capability robotics and UI-automation work depends on.</p>
<p class="uses">Uses: <code>OwlViTForObjectDetection</code> · <code>GroundingDINO</code></p></div></details>

<details class="cx"><summary>OCR &amp; document understanding</summary><div class="cx-body">
<p>Reading text in images — signage, receipts, forms, charts, screenshots — and reasoning over layout as well as content.</p>
<p>It is disproportionately resolution-sensitive: small text is destroyed by the downsampling most vision encoders apply, which is why document-capable models invest heavily in high-resolution handling.</p>
<p class="uses">Uses: <code>pytesseract</code> · <code>transformers TrOCR</code> · <code>docTR</code></p></div></details>

<p class="vs-tier a">Advanced</p>

<details class="cx"><summary>Hallucination in VLMs</summary><div class="cx-body">
<p>Describing objects, attributes, or relationships that are not present. Object hallucination is measurable with benchmarks like POPE, which simply ask whether a given object appears.</p>
<p>The causes are structural: language priors overwhelm weak visual evidence, so the model completes a plausible scene rather than reporting the observed one. Mitigations include stronger visual grounding, contrastive decoding, and training on negatives.</p>
<p class="uses">Uses: <code>POPE</code> benchmark · <code>lmms-eval</code></p></div></details>

<details class="cx"><summary>High-resolution and token cost</summary><div class="cx-body">
<p>Vision encoders were trained at modest fixed resolutions, but real tasks need detail. Solutions include tiling the image into crops, dynamic aspect-ratio handling, and multi-scale encoding.</p>
<p>Every approach trades against context: more visual tokens means better detail and fewer tokens left for reasoning, and a single high-resolution image can consume thousands of tokens.</p>
<p class="uses">Uses: <code>AutoProcessor(size=...)</code> · dynamic tiling</p></div></details>

<details class="cx"><summary>Visual token compression</summary><div class="cx-body">
<p>Reducing how many tokens an image occupies through pruning uninformative patches, merging similar ones, or learned resamplers.</p>
<p>An interesting extreme is optical compression, where text is <em>rendered as an image</em> because visual tokens can carry it more densely than text tokens — which inverts the usual assumption about which modality is expensive.</p>
<p class="uses">Uses: <code>transformers</code> resamplers · <code>Perceiver</code></p></div></details>

<details class="cx"><summary>Video VLMs</summary><div class="cx-body">
<p>Extending to video means choosing frames, since encoding every frame is infeasible. Strategies include uniform sampling, keyframe selection, and temporal pooling of features.</p>
<p>Sampling is where most video VLMs actually fail: an event lasting half a second is simply absent if it falls between sampled frames, and no amount of reasoning recovers it.</p>
<p class="uses">Uses: <code>decord</code> · <code>VideoLlavaForConditionalGeneration</code></p></div></details>

<details class="cx"><summary>Spatial and 3D-aware reasoning</summary><div class="cx-body">
<p>Answering questions about relative position, distance, size, and occlusion. Standard VLMs are notably weak here, since 2-D patch features encode little explicit geometry.</p>
<p>Recent work augments VLMs with reconstructed 3D structure from monocular video, moving from models that describe a scene toward models that hold a geometric representation of it.</p>
</div></details>

<details class="cx"><summary>Evaluation &amp; contamination</summary><div class="cx-body">
<p>Benchmarks such as MMMU, MMBench, and MathVista probe reasoning rather than recognition, usually as multiple choice for automatic scoring.</p>
<p>Two caveats. Multiple choice is gameable — some models score above chance from text alone, without the image. And contamination is pervasive, since benchmark images and questions are on the public web and end up in pretraining data.</p>
<p class="uses">Uses: <code>lmms-eval</code> · <code>MMMU</code></p></div></details>
</div>
</details>

<details class="vs-dom" id="multimodal">
<summary>5 · Multimodal Language Modelling</summary>
<div class="vs-body">
<p class="vs-libs"><span class="lbl">Libraries &amp; packages</span><code>transformers</code> <code>torch</code> <code>torchaudio</code> <code>decord</code> <code>datasets</code> <code>accelerate</code> <code>lerobot</code></p>
<p class="vs-lead">Beyond vision alone — architectures that take in and produce several modalities, and the problems that only appear once you stop treating text as the centre.</p>

<p class="vs-tier f">Foundations</p>

<details class="cx"><summary>What multimodal actually means</summary><div class="cx-body">
<p>More than one modality — text, image, audio, video, and increasingly action — handled by one model. Some accept several inputs but emit only text; genuinely multimodal systems both understand and generate across modalities.</p>
<p>The distinction matters when reading claims: many "multimodal" models are multimodal in and text-only out.</p>
</div></details>

<details class="cx"><summary>Tokenising other modalities</summary><div class="cx-body">
<p>Transformers consume sequences of tokens, so every modality must become one. Images become patches, audio becomes spectrogram frames or learned acoustic codes, video becomes spatiotemporal patches.</p>
<p>Discrete tokenisers such as VQ-VAE make generation as straightforward as next-token prediction, which is why any-to-any models tend to adopt them.</p>
<p class="uses">Uses: <code>torchaudio</code> · <code>transformers AutoFeatureExtractor</code></p></div></details>

<details class="cx"><summary>Fusion strategies</summary><div class="cx-body">
<p>Early fusion combines modalities at the input so all layers see everything. Late fusion encodes separately and merges near the output. Intermediate fusion interleaves cross-attention at several depths.</p>
<p>Early fusion allows the richest interaction and costs the most; late fusion is cheap and modular but can only combine already-formed representations.</p>
<p class="uses">Uses: <code>torch.nn.MultiheadAttention</code></p></div></details>

<p class="vs-tier c">Core</p>

<details class="cx"><summary>Native multimodal pretraining</summary><div class="cx-body">
<p>Training on mixed-modality data from the start, rather than attaching a vision encoder to a finished language model.</p>
<p>It produces better cross-modal integration because representations co-develop, at the cost of far more expensive training and the inability to reuse an existing language model.</p>
<p class="uses">Uses: <code>transformers</code> · <code>accelerate</code></p></div></details>

<details class="cx"><summary>Interleaved data</summary><div class="cx-body">
<p>Training on documents where images and text alternate naturally — web pages, papers, tutorials — rather than isolated caption pairs.</p>
<p>This is what teaches a model that an image can refer to text before it and be referred to by text after it. It is also the source of in-context multimodal few-shot ability.</p>
<p class="uses">Uses: <code>datasets</code> · <code>webdataset</code></p></div></details>

<details class="cx"><summary>Shared versus specialised encoders</summary><div class="cx-body">
<p>Either train modality-specific encoders that project into a common space, or push a single architecture to handle raw inputs from several modalities directly.</p>
<p>Specialised encoders exploit known structure and reuse pretrained weights; shared architectures are simpler and scale better, and the field has been drifting toward them as data and compute grow.</p>
</div></details>

<details class="cx"><summary>Cross-modal attention</summary><div class="cx-body">
<p>The mechanism that lets one modality condition another — text tokens attending to image patches, audio attending to text.</p>
<p>Where and how often it appears is the main architectural decision in multimodal design, and it determines both integration quality and compute cost.</p>
<p class="uses">Uses: <code>torch.nn.MultiheadAttention</code></p></div></details>

<p class="vs-tier a">Advanced</p>

<details class="cx"><summary>Any-to-any generation</summary><div class="cx-body">
<p>One model that both understands and generates across modalities — text to image, image to audio, video to text — usually by unifying everything into discrete tokens and predicting them autoregressively.</p>
<p>It removes the pipeline of separate specialist models and allows genuine cross-modal composition, though per-modality quality has generally trailed dedicated systems.</p>
<p class="uses">Uses: <code>transformers</code> · VQ tokenizers</p></div></details>

<details class="cx"><summary>Modality imbalance and collapse</summary><div class="cx-body">
<p>When one modality is easier or more abundant, the model leans on it and underuses the others — a VQA model that answers from the question alone, ignoring the image.</p>
<p>It inflates benchmark scores while the model is not actually looking. The diagnostic is simple and underused: <span class="k">withhold a modality and see whether performance drops</span>. If it barely moves, it was not being used.</p>
<p class="uses">Uses: ablation harness · <code>lmms-eval</code></p></div></details>

<details class="cx"><summary>Long-context multimodal</summary><div class="cx-body">
<p>Reasoning over hours of video, long documents with figures, or extended interaction histories, where token counts run to hundreds of thousands.</p>
<p>Compression is unavoidable at this scale, and the open question is what to discard. Uniform sampling is simple and loses precisely the brief events that often matter most.</p>
<p class="uses">Uses: <code>decord</code> · frame samplers</p></div></details>

<details class="cx"><summary>Action as a modality: VLA models</summary><div class="cx-body">
<p>Vision-language-action models add robot actions as an output modality, mapping observations and instructions directly to control commands.</p>
<p>Action differs from other modalities in a way that matters: it is <span class="k">closed-loop and consequential</span>. Errors change the world and compound, so there is no equivalent of regenerating a bad caption.</p>
<p class="uses">Uses: <code>lerobot</code> · <code>transformers</code></p></div></details>

<details class="cx"><summary>World models</summary><div class="cx-body">
<p>Learned models that predict how a scene evolves, allowing an agent to simulate outcomes before acting. Increasingly used inside training loops rather than only for evaluation.</p>
<p>Evaluating them is unresolved: visual fidelity is easy to measure and largely irrelevant, while what matters is whether the predicted dynamics support good decisions.</p>
</div></details>

<details class="cx"><summary>Cross-modal safety and alignment</summary><div class="cx-body">
<p>Safety work developed for text does not transfer cleanly. Instructions can be embedded in an image, harmful content can be split across modalities, and refusal behaviour trained on text often fails when the same request arrives visually.</p>
<p>The general lesson is that <span class="k">every added modality is an added attack surface</span>, and guardrails have to be evaluated per modality and per combination rather than assumed to generalise.</p>
</div></details>
</div>
</details>


<h2 class="vs-sec" id="code-snippets">Code Snippets</h2>
<p class="vs-lead">Working PyTorch for the concepts above, grouped by subdomain. Written in torch rather than library one-liners wherever the mechanics are the point — the closed-form forward diffusion, the contrastive loss, morphology as pooling — because those are the parts worth being able to write from memory.</p>
<details class="cx code" id="code-ip"><summary>1 · Image Processing — in PyTorch</summary><div class="cx-body"><div class="snip"><p class="cap">Load an image as a tensor</p><pre><code>import torch, torchvision
from torchvision.io import read_image
import torchvision.transforms.v2.functional as TF

img = read_image("in.jpg")                 # uint8, [C,H,W], 0-255
x   = img.float().div(255).unsqueeze(0)    # float32, [1,C,H,W], 0-1
x   = x.to("cuda")                         # everything below runs batched on GPU
print(x.shape, x.dtype, x.min().item(), x.max().item())</code></pre></div><div class="snip"><p class="cap">Colour conversion (matrix form)</p><pre><code># RGB -&gt; grayscale using luminance weights, as a 1x1 convolution
w = torch.tensor([0.299, 0.587, 0.114], device=x.device).view(1, 3, 1, 1)
gray = (x * w).sum(1, keepdim=True)        # [1,1,H,W]</code></pre></div><div class="snip"><p class="cap">Convolution with your own kernel</p><pre><code>import torch.nn.functional as F
sharpen = torch.tensor([[0., -1., 0.],
                        [-1., 5., -1.],
                        [0., -1., 0.]], device=x.device)
k = sharpen.view(1, 1, 3, 3).repeat(x.shape[1], 1, 1, 1)
out = F.conv2d(x, k, padding=1, groups=x.shape[1])   # per-channel (depthwise)</code></pre></div><div class="snip"><p class="cap">Separable Gaussian blur</p><pre><code>def gaussian_kernel1d(sigma, ks):
    t = torch.arange(ks) - ks // 2
    g = torch.exp(-(t ** 2) / (2 * sigma ** 2))
    return (g / g.sum()).float()

g = gaussian_kernel1d(1.5, 9).to(x.device)
C = x.shape[1]
x = F.conv2d(x, g.view(1, 1, 1, -1).repeat(C, 1, 1, 1), padding=(0, 4), groups=C)
x = F.conv2d(x, g.view(1, 1, -1, 1).repeat(C, 1, 1, 1), padding=(4, 0), groups=C)
# two 1-D passes instead of one 2-D: O(k) per pixel rather than O(k^2)</code></pre></div><div class="snip"><p class="cap">Sobel edges</p><pre><code>sx = torch.tensor([[-1., 0., 1.], [-2., 0., 2.], [-1., 0., 1.]], device=x.device)
sy = sx.T.contiguous()
gx = F.conv2d(gray, sx.view(1, 1, 3, 3), padding=1)
gy = F.conv2d(gray, sy.view(1, 1, 3, 3), padding=1)
mag = torch.sqrt(gx ** 2 + gy ** 2)
ang = torch.atan2(gy, gx)</code></pre></div><div class="snip"><p class="cap">Histogram and equalization</p><pre><code>hist = torch.histc(gray * 255, bins=256, min=0, max=255)
cdf  = hist.cumsum(0)
cdf  = (cdf - cdf.min()) / (cdf.max() - cdf.min())      # normalise to 0-1
eq   = cdf[(gray * 255).long().clamp(0, 255)]           # LUT via indexing</code></pre></div><div class="snip"><p class="cap">Morphology as pooling</p><pre><code># dilation is a max filter; erosion is a min filter (= -max of the negative)
def dilate(m, k=3): return F.max_pool2d(m, k, stride=1, padding=k // 2)
def erode(m, k=3):  return -F.max_pool2d(-m, k, stride=1, padding=k // 2)

mask   = (gray &gt; 0.5).float()
opened = dilate(erode(mask))     # remove specks
closed = erode(dilate(opened))   # fill holes</code></pre></div><div class="snip"><p class="cap">Image pyramid</p><pre><code>pyr, level = [x], x
for _ in range(3):
    level = F.avg_pool2d(level, 2)                       # blur + subsample
    pyr.append(level)
up = F.interpolate(pyr[-1], scale_factor=2, mode="bilinear", align_corners=False)</code></pre></div><div class="snip"><p class="cap">FFT and frequency filtering</p><pre><code>f = torch.fft.fftshift(torch.fft.fft2(gray))
H, W = gray.shape[-2:]
yy, xx = torch.meshgrid(torch.arange(H), torch.arange(W), indexing="ij")
r = ((yy - H // 2) ** 2 + (xx - W // 2) ** 2).sqrt().to(f.device)
low = torch.fft.ifft2(torch.fft.ifftshift(f * (r &lt; 30))).abs()   # low-pass</code></pre></div><div class="snip"><p class="cap">Geometric warp with grid_sample</p><pre><code>theta = torch.tensor([[[1., 0., 0.2],          # affine: translate + scale
                        [0., 1., 0.0]]], device=x.device)
grid = F.affine_grid(theta, x.shape, align_corners=False)
warped = F.grid_sample(x, grid, mode="bilinear", align_corners=False)
# grid_sample is differentiable, so warps can sit inside a training graph</code></pre></div><div class="snip"><p class="cap">Batched preprocessing on GPU</p><pre><code>from torchvision.transforms import v2
tf = v2.Compose([v2.ToDtype(torch.float32, scale=True),
                 v2.Resize((256, 256), antialias=True),
                 v2.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])])
batch = tf(torch.stack([read_image(p) for p in paths]).cuda())   # whole batch at once</code></pre></div></div></details>
<details class="cx code" id="code-cv"><summary>2 · Computer Vision — in PyTorch</summary><div class="cx-body"><div class="snip"><p class="cap">Dataset and DataLoader</p><pre><code>from torch.utils.data import Dataset, DataLoader
class ImageSet(Dataset):
    def __init__(self, paths, labels, tf): self.p, self.y, self.tf = paths, labels, tf
    def __len__(self): return len(self.p)
    def __getitem__(self, i): return self.tf(read_image(self.p[i])), self.y[i]

dl = DataLoader(ImageSet(paths, labels, tf), batch_size=32, shuffle=True,
                num_workers=8, pin_memory=True, persistent_workers=True)</code></pre></div><div class="snip"><p class="cap">Transfer learning: freeze and replace the head</p><pre><code>import torchvision.models as M
net = M.resnet50(weights=M.ResNet50_Weights.IMAGENET1K_V2)
for p in net.parameters():
    p.requires_grad = False
net.fc = torch.nn.Linear(net.fc.in_features, num_classes)   # new head trains
net = net.cuda()</code></pre></div><div class="snip"><p class="cap">Training loop with mixed precision</p><pre><code>opt    = torch.optim.AdamW([p for p in net.parameters() if p.requires_grad], lr=3e-4)
scaler = torch.amp.GradScaler("cuda")
sched  = torch.optim.lr_scheduler.CosineAnnealingLR(opt, T_max=epochs)

for ep in range(epochs):
    net.train()
    for xb, yb in dl:
        xb, yb = xb.cuda(non_blocking=True), yb.cuda(non_blocking=True)
        opt.zero_grad(set_to_none=True)
        with torch.autocast("cuda", dtype=torch.bfloat16):
            loss = F.cross_entropy(net(xb), yb)
        scaler.scale(loss).backward()
        scaler.step(opt); scaler.update()
    sched.step()</code></pre></div><div class="snip"><p class="cap">IoU from scratch</p><pre><code>def box_iou(a, b):                      # a:[N,4], b:[M,4] as x1,y1,x2,y2
    area_a = (a[:, 2] - a[:, 0]) * (a[:, 3] - a[:, 1])
    area_b = (b[:, 2] - b[:, 0]) * (b[:, 3] - b[:, 1])
    lt = torch.max(a[:, None, :2], b[None, :, :2])
    rb = torch.min(a[:, None, 2:], b[None, :, 2:])
    inter = (rb - lt).clamp(min=0).prod(dim=2)
    return inter / (area_a[:, None] + area_b[None, :] - inter)</code></pre></div><div class="snip"><p class="cap">NMS and detection post-processing</p><pre><code>from torchvision.ops import nms, batched_nms
keep = nms(boxes, scores, iou_threshold=0.5)              # single class
keep = batched_nms(boxes, scores, class_ids, 0.5)         # per class, no cross-suppression</code></pre></div><div class="snip"><p class="cap">Dice loss for segmentation</p><pre><code>def dice_loss(logits, target, eps=1.0):
    prob = torch.sigmoid(logits)
    num  = 2 * (prob * target).sum(dim=(2, 3)) + eps
    den  = prob.sum(dim=(2, 3)) + target.sum(dim=(2, 3)) + eps
    return 1 - (num / den).mean()

loss = 0.5 * F.binary_cross_entropy_with_logits(logits, target) + 0.5 * dice_loss(logits, target)</code></pre></div><div class="snip"><p class="cap">ViT patch embedding</p><pre><code>class PatchEmbed(torch.nn.Module):
    def __init__(self, dim=768, patch=16, in_ch=3):
        super().__init__()
        self.proj = torch.nn.Conv2d(in_ch, dim, kernel_size=patch, stride=patch)
    def forward(self, x):                      # [B,3,224,224]
        return self.proj(x).flatten(2).transpose(1, 2)   # [B,196,768] tokens
# a strided convolution IS the patch split plus linear projection</code></pre></div><div class="snip"><p class="cap">Inference correctly</p><pre><code>net.eval()
with torch.inference_mode():                   # no autograd, no graph
    logits = net(batch.cuda())
    probs  = logits.softmax(dim=1)
# forgetting .eval() leaves BatchNorm/Dropout in training mode — a classic silent bug</code></pre></div></div></details>
<details class="cx code" id="code-df"><summary>3 · Diffusion Models — in PyTorch</summary><div class="cx-body"><div class="snip"><p class="cap">The noise schedule</p><pre><code>T = 1000
betas = torch.linspace(1e-4, 0.02, T)                 # linear schedule
alphas = 1.0 - betas
abar   = torch.cumprod(alphas, dim=0)                 # alpha-bar_t</code></pre></div><div class="snip"><p class="cap">Forward process in closed form</p><pre><code>def q_sample(x0, t, noise):
    a = abar[t].view(-1, 1, 1, 1)
    return a.sqrt() * x0 + (1 - a).sqrt() * noise
# no loop over timesteps — jump straight to any t</code></pre></div><div class="snip"><p class="cap">The training step (this is the whole objective)</p><pre><code>t     = torch.randint(0, T, (x0.size(0),), device=x0.device)
noise = torch.randn_like(x0)
xt    = q_sample(x0, t, noise)
pred  = unet(xt, t, cond)                 # predict the noise that was added
loss  = F.mse_loss(pred, noise)
loss.backward()</code></pre></div><div class="snip"><p class="cap">Sinusoidal timestep embedding</p><pre><code>def timestep_embedding(t, dim):
    half = dim // 2
    freqs = torch.exp(-torch.arange(half, device=t.device) * (torch.log(torch.tensor(10000.0)) / half))
    args = t[:, None].float() * freqs[None]
    return torch.cat([args.cos(), args.sin()], dim=-1)
# one network serves every noise level because t is fed in as a conditioning vector</code></pre></div><div class="snip"><p class="cap">DDPM sampling loop</p><pre><code>@torch.no_grad()
def ddpm_sample(shape):
    x = torch.randn(shape, device=dev)
    for i in reversed(range(T)):
        t = torch.full((shape[0],), i, device=dev, dtype=torch.long)
        eps = unet(x, t, cond)
        a, ab = alphas[i], abar[i]
        mean = (x - (1 - a) / (1 - ab).sqrt() * eps) / a.sqrt()
        x = mean + (betas[i].sqrt() * torch.randn_like(x) if i &gt; 0 else 0)
    return x</code></pre></div><div class="snip"><p class="cap">DDIM: deterministic, skippable steps</p><pre><code>@torch.no_grad()
def ddim_sample(shape, steps=50):
    ts = torch.linspace(T - 1, 0, steps).long()
    x = torch.randn(shape, device=dev)
    for i, j in zip(ts[:-1], ts[1:]):
        eps = unet(x, i.repeat(shape[0]).to(dev), cond)
        x0  = (x - (1 - abar[i]).sqrt() * eps) / abar[i].sqrt()
        x   = abar[j].sqrt() * x0 + (1 - abar[j]).sqrt() * eps    # no noise added
    return x</code></pre></div><div class="snip"><p class="cap">Classifier-free guidance</p><pre><code>eps_uncond = unet(x, t, null_cond)
eps_cond   = unet(x, t, cond)
eps = eps_uncond + guidance_scale * (eps_cond - eps_uncond)
# guidance_scale = 1 is plain conditional; higher pushes harder toward the prompt</code></pre></div><div class="snip"><p class="cap">Training with CFG dropout</p><pre><code>mask = (torch.rand(cond.size(0), device=cond.device) &lt; 0.1)   # drop 10%
cond = torch.where(mask[:, None], null_cond, cond)
# the same network learns conditional and unconditional prediction</code></pre></div></div></details>
<details class="cx code" id="code-vl"><summary>4 · Vision-Language Models — in PyTorch</summary><div class="cx-body"><div class="snip"><p class="cap">CLIP contrastive loss (symmetric InfoNCE)</p><pre><code>def clip_loss(img_emb, txt_emb, logit_scale):
    img = F.normalize(img_emb, dim=-1)
    txt = F.normalize(txt_emb, dim=-1)
    logits = logit_scale.exp() * img @ txt.T          # [B,B]
    labels = torch.arange(len(logits), device=logits.device)
    return 0.5 * (F.cross_entropy(logits, labels) +   # image -&gt; text
                  F.cross_entropy(logits.T, labels))  # text -&gt; image
# every other item in the batch is a negative, so batch size is a real hyperparameter</code></pre></div><div class="snip"><p class="cap">Zero-shot classification</p><pre><code>with torch.inference_mode():
    i = F.normalize(image_encoder(pixels), dim=-1)
    t = F.normalize(text_encoder(tokenised_labels), dim=-1)
    probs = (100.0 * i @ t.T).softmax(dim=-1)
# classification reduced to nearest-neighbour retrieval in a shared space</code></pre></div><div class="snip"><p class="cap">The projector that gives an LLM eyes</p><pre><code>class Projector(torch.nn.Module):
    def __init__(self, vision_dim=1024, llm_dim=4096):
        super().__init__()
        self.net = torch.nn.Sequential(
            torch.nn.Linear(vision_dim, llm_dim),
            torch.nn.GELU(),
            torch.nn.Linear(llm_dim, llm_dim))
    def forward(self, patches):            # [B, N_patches, vision_dim]
        return self.net(patches)           # [B, N_patches, llm_dim] -&gt; used as tokens</code></pre></div><div class="snip"><p class="cap">Train only the connector</p><pre><code>for p in vision_encoder.parameters(): p.requires_grad = False
for p in language_model.parameters():  p.requires_grad = False
opt = torch.optim.AdamW(projector.parameters(), lr=1e-3)

vis   = projector(vision_encoder(pixels))                     # visual tokens
embeds = torch.cat([vis, language_model.get_input_embeddings()(text_ids)], dim=1)
loss   = language_model(inputs_embeds=embeds, labels=labels).loss</code></pre></div><div class="snip"><p class="cap">Masking image tokens out of the loss</p><pre><code>labels = text_ids.clone()
labels[:, :vis.size(1)] = -100      # ignore_index: never predict visual positions
# forgetting this trains the model to 'generate' image tokens and quietly degrades it</code></pre></div></div></details>
<details class="cx code" id="code-mm"><summary>5 · Multimodal Language Modelling — in PyTorch</summary><div class="cx-body"><div class="snip"><p class="cap">A cross-attention block</p><pre><code>class CrossAttn(torch.nn.Module):
    def __init__(self, dim, heads=8):
        super().__init__()
        self.attn = torch.nn.MultiheadAttention(dim, heads, batch_first=True)
        self.norm = torch.nn.LayerNorm(dim)
        self.gate = torch.nn.Parameter(torch.zeros(1))     # start as identity
    def forward(self, text, other):
        out, _ = self.attn(self.norm(text), other, other)
        return text + self.gate.tanh() * out               # gated residual</code></pre></div><div class="snip"><p class="cap">Early vs late fusion</p><pre><code># early: concatenate tokens, every layer sees both
seq = torch.cat([img_tokens, txt_tokens], dim=1)
out = transformer(seq)

# late: encode separately, combine at the end
out = head(torch.cat([img_encoder(img).mean(1), txt_encoder(txt).mean(1)], dim=-1))</code></pre></div><div class="snip"><p class="cap">Modality type embeddings</p><pre><code>mod_emb = torch.nn.Embedding(3, dim)          # 0=text 1=image 2=audio
types = torch.cat([torch.zeros(Lt), torch.ones(Li), torch.full((La,), 2)]).long()
seq = seq + mod_emb(types.to(seq.device))[None]
# without this the model cannot tell which tokens came from which modality</code></pre></div><div class="snip"><p class="cap">Modality dropout during training</p><pre><code>if self.training and torch.rand(1).item() &lt; 0.15:
    img_tokens = torch.zeros_like(img_tokens)   # force reliance on text sometimes
# improves robustness and reduces collapse onto one modality</code></pre></div><div class="snip"><p class="cap">The collapse test</p><pre><code>@torch.inference_mode()
def ablate(model, loader):
    full  = evaluate(model, loader)
    blind = evaluate(model, loader, zero_out="image")
    return full, blind, full - blind
# a small gap means the image was never really being used</code></pre></div><div class="snip"><p class="cap">Padding and attention masks across modalities</p><pre><code>attn_mask = torch.cat([
    torch.ones(B, Li, dtype=torch.bool, device=dev),   # images: always present
    text_attention_mask.bool(),                        # text: variable length
], dim=1)
out = model(inputs_embeds=seq, attention_mask=attn_mask)</code></pre></div></div></details>

<p style="margin-top:2.5em">Related: the <a href="/stacks/">Stacks</a> section covers agentic, API, data science, ML, and AWS concepts in the same format.</p>

<script src="{{ base_path }}/assets/js/open-target-details.js"></script>
