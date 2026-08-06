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

<p class="stack-hint">Click a subdomain to open it, then any concept inside. Tiers are cumulative: advanced material generally assumes the foundations above it.</p>

<p class="jump" style="margin-bottom:2em">
<a class="stack-back" href="#image-processing">1 · Image Processing</a>
<a class="stack-back" href="#computer-vision">2 · Computer Vision</a>
<a class="stack-back" href="#diffusion">3 · Diffusion Models</a>
<a class="stack-back" href="#vlm">4 · Vision-Language Models</a>
<a class="stack-back" href="#multimodal">5 · Multimodal Language Modelling</a>
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
<details class="cx code" id="image-processing-code"><summary>Code snippets</summary><div class="cx-body"><div class="snip"><p class="cap">Load, inspect, convert colour space</p><pre><code>import cv2, numpy as np
img = cv2.imread("in.jpg")                 # BGR, uint8, HxWx3
print(img.shape, img.dtype, img.min(), img.max())
hsv  = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
lab  = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)</code></pre></div><div class="snip"><p class="cap">Histogram equalization (CLAHE)</p><pre><code>clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
lab[:, :, 0] = clahe.apply(lab[:, :, 0])   # equalise luminance only
out = cv2.cvtColor(lab, cv2.COLOR_LAB2BGR)</code></pre></div><div class="snip"><p class="cap">Gamma correction via lookup table</p><pre><code>gamma = 2.2
lut = np.array([((i / 255.0) ** (1 / gamma)) * 255 for i in range(256)], np.uint8)
linear = cv2.LUT(img, lut)</code></pre></div><div class="snip"><p class="cap">Convolution with a custom kernel</p><pre><code>sharpen = np.array([[ 0, -1,  0],
                    [-1,  5, -1],
                    [ 0, -1,  0]], np.float32)
out = cv2.filter2D(img, ddepth=-1, kernel=sharpen)</code></pre></div><div class="snip"><p class="cap">Smoothing: Gaussian, median, bilateral</p><pre><code>g = cv2.GaussianBlur(img, (5, 5), sigmaX=1.5)
m = cv2.medianBlur(img, 5)                       # salt-and-pepper
b = cv2.bilateralFilter(img, 9, 75, 75)          # edge-preserving</code></pre></div><div class="snip"><p class="cap">Canny edges</p><pre><code>edges = cv2.Canny(gray, threshold1=100, threshold2=200, L2gradient=True)</code></pre></div><div class="snip"><p class="cap">Otsu and adaptive thresholding</p><pre><code>_, otsu = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
adap = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                             cv2.THRESH_BINARY, blockSize=31, C=5)</code></pre></div><div class="snip"><p class="cap">Morphological cleanup</p><pre><code>k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
opened = cv2.morphologyEx(otsu, cv2.MORPH_OPEN,  k)   # drop specks
closed = cv2.morphologyEx(opened, cv2.MORPH_CLOSE, k) # fill holes</code></pre></div><div class="snip"><p class="cap">Gaussian pyramid</p><pre><code>level = img.copy()
pyr = [level]
for _ in range(3):
    level = cv2.pyrDown(level)
    pyr.append(level)</code></pre></div><div class="snip"><p class="cap">Fourier magnitude spectrum</p><pre><code>f = np.fft.fftshift(np.fft.fft2(gray))
mag = 20 * np.log(np.abs(f) + 1)</code></pre></div><div class="snip"><p class="cap">Homography warp (rectify a plane)</p><pre><code>H, mask = cv2.findHomography(src_pts, dst_pts, cv2.RANSAC, 5.0)
rect = cv2.warpPerspective(img, H, (W, H_out), flags=cv2.INTER_LINEAR)</code></pre></div><div class="snip"><p class="cap">SIFT/ORB features and matching</p><pre><code>sift = cv2.SIFT_create()
kp1, d1 = sift.detectAndCompute(gray1, None)
kp2, d2 = sift.detectAndCompute(gray2, None)
matches = cv2.BFMatcher().knnMatch(d1, d2, k=2)
good = [a for a, b in matches if a.distance &lt; 0.75 * b.distance]   # Lowe ratio</code></pre></div><div class="snip"><p class="cap">Non-local means denoising</p><pre><code>den = cv2.fastNlMeansDenoisingColored(img, None, h=10, hColor=10,
                                     templateWindowSize=7, searchWindowSize=21)</code></pre></div></div></details>
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
<details class="cx code" id="computer-vision-code"><summary>Code snippets</summary><div class="cx-body"><div class="snip"><p class="cap">Backbone + transfer learning</p><pre><code>import timm, torch.nn as nn
model = timm.create_model("resnet50", pretrained=True, num_classes=10)
for p in model.parameters(): p.requires_grad = False
for p in model.get_classifier().parameters(): p.requires_grad = True</code></pre></div><div class="snip"><p class="cap">Augmentation pipeline</p><pre><code>import albumentations as A
tf = A.Compose([
    A.RandomResizedCrop(224, 224, scale=(0.6, 1.0)),
    A.HorizontalFlip(p=0.5),
    A.ColorJitter(0.2, 0.2, 0.2, 0.1, p=0.5),
    A.Normalize(), 
], bbox_params=A.BboxParams(format="yolo", label_fields=["cls"]))</code></pre></div><div class="snip"><p class="cap">IoU and NMS</p><pre><code>from torchvision.ops import box_iou, nms
iou  = box_iou(boxes_a, boxes_b)                 # pairwise
keep = nms(boxes, scores, iou_threshold=0.5)     # indices to keep</code></pre></div><div class="snip"><p class="cap">Detection with YOLO</p><pre><code>from ultralytics import YOLO
model = YOLO("yolo11n.pt")
res = model("street.jpg", conf=0.25, iou=0.5)
for b in res[0].boxes:
    print(b.cls.item(), b.conf.item(), b.xyxy.tolist())</code></pre></div><div class="snip"><p class="cap">Segmentation head (U-Net)</p><pre><code>import segmentation_models_pytorch as smp
net = smp.Unet(encoder_name="resnet34", encoder_weights="imagenet",
               in_channels=3, classes=1)
loss = smp.losses.DiceLoss(mode="binary")</code></pre></div><div class="snip"><p class="cap">Vision transformer features</p><pre><code>from transformers import AutoImageProcessor, AutoModel
proc = AutoImageProcessor.from_pretrained("facebook/dinov2-base")
enc  = AutoModel.from_pretrained("facebook/dinov2-base")
feats = enc(**proc(images=pil_img, return_tensors="pt")).last_hidden_state</code></pre></div><div class="snip"><p class="cap">Multi-object tracking</p><pre><code>for r in YOLO("yolo11n.pt").track("clip.mp4", persist=True, tracker="bytetrack.yaml"):
    for b in r.boxes:
        print(int(b.id.item()), b.xyxy.tolist())   # stable id across frames</code></pre></div><div class="snip"><p class="cap">Camera calibration</p><pre><code>ret, K, dist, rvecs, tvecs = cv2.calibrateCamera(
    objpoints, imgpoints, gray.shape[::-1], None, None)
undist = cv2.undistort(img, K, dist)</code></pre></div><div class="snip"><p class="cap">Monocular depth</p><pre><code>from transformers import pipeline
depth = pipeline("depth-estimation", model="Intel/dpt-large")
d = depth(pil_img)["depth"]        # relative depth, not metric</code></pre></div><div class="snip"><p class="cap">Segment Anything (promptable)</p><pre><code>from segment_anything import sam_model_registry, SamPredictor
sam = sam_model_registry["vit_h"](checkpoint="sam_vit_h.pth")
pred = SamPredictor(sam); pred.set_image(rgb)
masks, scores, _ = pred.predict(point_coords=np.array([[x, y]]),
                                point_labels=np.array([1]))</code></pre></div><div class="snip"><p class="cap">Video frame sampling</p><pre><code>import decord
vr = decord.VideoReader("clip.mp4")
idx = np.linspace(0, len(vr) - 1, num=16).astype(int)   # uniform 16 frames
frames = vr.get_batch(idx).asnumpy()</code></pre></div></div></details>
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
<details class="cx code" id="diffusion-code"><summary>Code snippets</summary><div class="cx-body"><div class="snip"><p class="cap">Text-to-image baseline</p><pre><code>from diffusers import StableDiffusionXLPipeline
import torch
pipe = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0", torch_dtype=torch.float16).to("cuda")
img = pipe("a lighthouse in fog, 35mm", num_inference_steps=30,
           guidance_scale=7.0).images[0]</code></pre></div><div class="snip"><p class="cap">The forward process, explicitly</p><pre><code>from diffusers import DDPMScheduler
sch = DDPMScheduler(num_train_timesteps=1000, beta_schedule="squaredcos_cap_v2")
t = torch.randint(0, 1000, (x0.shape[0],))
noise = torch.randn_like(x0)
xt = sch.add_noise(x0, noise, t)          # closed form, no simulation</code></pre></div><div class="snip"><p class="cap">Training objective (predict the noise)</p><pre><code>pred = unet(xt, t, encoder_hidden_states=text_emb).sample
loss = torch.nn.functional.mse_loss(pred, noise)   # that is the whole loss</code></pre></div><div class="snip"><p class="cap">Swapping the sampler</p><pre><code>from diffusers import DPMSolverMultistepScheduler, DDIMScheduler
pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
# fewer steps for the same quality; DDIM for deterministic latents</code></pre></div><div class="snip"><p class="cap">Guidance scale sweep</p><pre><code>for g in (1.0, 3.0, 7.0, 12.0):
    pipe(prompt, guidance_scale=g, generator=torch.manual_seed(0)).images[0].save(f"g{g}.png")</code></pre></div><div class="snip"><p class="cap">Latent space directly</p><pre><code>lat = pipe.vae.encode(img_t).latent_dist.sample() * pipe.vae.config.scaling_factor
dec = pipe.vae.decode(lat / pipe.vae.config.scaling_factor).sample   # 8x smaller side</code></pre></div><div class="snip"><p class="cap">ControlNet (structural conditioning)</p><pre><code>from diffusers import StableDiffusionControlNetPipeline, ControlNetModel
from controlnet_aux import CannyDetector
cn = ControlNetModel.from_pretrained("lllyasviel/sd-controlnet-canny", torch_dtype=torch.float16)
p  = StableDiffusionControlNetPipeline.from_pretrained(
        "runwayml/stable-diffusion-v1-5", controlnet=cn, torch_dtype=torch.float16).to("cuda")
img = p(prompt, image=CannyDetector()(src), controlnet_conditioning_scale=0.8).images[0]</code></pre></div><div class="snip"><p class="cap">LoRA: load, weight, unload</p><pre><code>pipe.load_lora_weights("path/or/hub-id", adapter_name="style")
pipe.set_adapters(["style"], adapter_weights=[0.7])
pipe.unload_lora_weights()</code></pre></div><div class="snip"><p class="cap">img2img and inpainting</p><pre><code>from diffusers import AutoPipelineForImage2Image, AutoPipelineForInpainting
i2i = AutoPipelineForImage2Image.from_pipe(pipe)
out  = i2i(prompt, image=init, strength=0.55).images[0]   # strength = where you start
inp  = AutoPipelineForInpainting.from_pipe(pipe)(prompt, image=init, mask_image=mask).images[0]</code></pre></div><div class="snip"><p class="cap">Few-step generation (LCM)</p><pre><code>from diffusers import LCMScheduler
pipe.scheduler = LCMScheduler.from_config(pipe.scheduler.config)
pipe.load_lora_weights("latent-consistency/lcm-lora-sdxl")
img = pipe(prompt, num_inference_steps=4, guidance_scale=1.0).images[0]</code></pre></div><div class="snip"><p class="cap">Video diffusion</p><pre><code>from diffusers import StableVideoDiffusionPipeline
from diffusers.utils import export_to_video
svd = StableVideoDiffusionPipeline.from_pretrained(
    "stabilityai/stable-video-diffusion-img2vid-xt", torch_dtype=torch.float16).to("cuda")
export_to_video(svd(init_image, decode_chunk_size=8).frames[0], "out.mp4", fps=7)</code></pre></div><div class="snip"><p class="cap">FID and CLIP score</p><pre><code>from torchmetrics.image.fid import FrechetInceptionDistance
from torchmetrics.multimodal import CLIPScore
fid = FrechetInceptionDistance(feature=2048)
fid.update(real_uint8, real=True); fid.update(fake_uint8, real=False)
print(fid.compute(), CLIPScore()(fake_uint8, prompts))</code></pre></div></div></details>
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
<details class="cx code" id="vlm-code"><summary>Code snippets</summary><div class="cx-body"><div class="snip"><p class="cap">CLIP zero-shot classification</p><pre><code>import open_clip, torch
model, _, preprocess = open_clip.create_model_and_transforms("ViT-B-32", pretrained="laion2b_s34b_b79k")
tok = open_clip.get_tokenizer("ViT-B-32")
labels = ["a photo of a cat", "a photo of a dog"]
with torch.no_grad():
    i = model.encode_image(preprocess(pil).unsqueeze(0))
    t = model.encode_text(tok(labels))
    i, t = i / i.norm(dim=-1, keepdim=True), t / t.norm(dim=-1, keepdim=True)
    probs = (100.0 * i @ t.T).softmax(dim=-1)</code></pre></div><div class="snip"><p class="cap">Captioning / VQA with BLIP-2</p><pre><code>from transformers import Blip2Processor, Blip2ForConditionalGeneration
proc = Blip2Processor.from_pretrained("Salesforce/blip2-opt-2.7b")
m = Blip2ForConditionalGeneration.from_pretrained("Salesforce/blip2-opt-2.7b", torch_dtype=torch.float16).to("cuda")
inp = proc(pil, text="Question: what is on the table? Answer:", return_tensors="pt").to("cuda", torch.float16)
print(proc.decode(m.generate(**inp, max_new_tokens=40)[0], skip_special_tokens=True))</code></pre></div><div class="snip"><p class="cap">Conversational VLM (LLaVA)</p><pre><code>from transformers import LlavaNextProcessor, LlavaNextForConditionalGeneration
proc = LlavaNextProcessor.from_pretrained("llava-hf/llava-v1.6-mistral-7b-hf")
m = LlavaNextForConditionalGeneration.from_pretrained(
    "llava-hf/llava-v1.6-mistral-7b-hf", torch_dtype=torch.float16, device_map="auto")
prompt = "[INST] &lt;image&gt;\nDescribe the chart and give the trend. [/INST]"
out = m.generate(**proc(prompt, pil, return_tensors="pt").to("cuda"), max_new_tokens=200)</code></pre></div><div class="snip"><p class="cap">Open-vocabulary grounding</p><pre><code>from transformers import OwlViTProcessor, OwlViTForObjectDetection
proc = OwlViTProcessor.from_pretrained("google/owlvit-base-patch32")
m = OwlViTForObjectDetection.from_pretrained("google/owlvit-base-patch32")
queries = [["the mug behind the laptop", "a pair of glasses"]]
res = proc.post_process_object_detection(
    m(**proc(text=queries, images=pil, return_tensors="pt")), threshold=0.1)</code></pre></div><div class="snip"><p class="cap">OCR</p><pre><code>import pytesseract
text = pytesseract.image_to_string(pil, config="--psm 6")
boxes = pytesseract.image_to_data(pil, output_type=pytesseract.Output.DICT)</code></pre></div><div class="snip"><p class="cap">Counting visual tokens (cost check)</p><pre><code>inp = proc(images=pil, return_tensors="pt")
print(inp["pixel_values"].shape)          # patches -> tokens; scales with resolution
# a single high-res image can consume thousands of context tokens</code></pre></div><div class="snip"><p class="cap">Hallucination probe (POPE-style)</p><pre><code>for obj in ["clock", "bicycle", "zebra"]:      # objects NOT in the image
    q = f"Is there a {obj} in the image? Answer yes or no."
    print(obj, ask_vlm(pil, q))                 # a good model answers 'no' every time</code></pre></div><div class="snip"><p class="cap">Video VLM frame sampling</p><pre><code>import decord
vr = decord.VideoReader("clip.mp4")
idx = np.linspace(0, len(vr) - 1, 8).astype(int)   # events between frames are invisible
frames = [Image.fromarray(f) for f in vr.get_batch(idx).asnumpy()]</code></pre></div></div></details>
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
<details class="cx code" id="multimodal-code"><summary>Code snippets</summary><div class="cx-body"><div class="snip"><p class="cap">Tokenising audio alongside text</p><pre><code>import torchaudio
from transformers import AutoProcessor, AutoModel
wav, sr = torchaudio.load("clip.wav")
wav = torchaudio.functional.resample(wav, sr, 16000)
proc = AutoProcessor.from_pretrained("openai/whisper-small")
feats = proc(wav.squeeze().numpy(), sampling_rate=16000, return_tensors="pt")</code></pre></div><div class="snip"><p class="cap">Cross-attention between modalities</p><pre><code>import torch.nn as nn
xattn = nn.MultiheadAttention(embed_dim=1024, num_heads=16, batch_first=True)
fused, weights = xattn(query=text_tokens, key=image_tokens, value=image_tokens)</code></pre></div><div class="snip"><p class="cap">Interleaved image-text sequence</p><pre><code>messages = [
    {"role": "user", "content": [
        {"type": "text",  "text": "Compare these two charts."},
        {"type": "image", "image": img_a},
        {"type": "image", "image": img_b},
    ]},
]
inputs = processor.apply_chat_template(messages, return_tensors="pt")</code></pre></div><div class="snip"><p class="cap">Modality ablation — the collapse test</p><pre><code>full  = evaluate(model, dataset)                    # image + question
blind = evaluate(model, dataset.without("image"))   # question only
print(full, blind, full - blind)
# if the gap is small, the model is not actually using the image</code></pre></div><div class="snip"><p class="cap">Any-to-any: discrete modality tokens</p><pre><code>img_tokens = vq_tokenizer.encode(image)      # image -> integer codes
seq = text_ids + [BOI] + img_tokens + [EOI]  # one sequence, one vocabulary
out = model.generate(seq)                    # next-token prediction across modalities</code></pre></div><div class="snip"><p class="cap">Long-context video budget</p><pre><code>frames_per_min, tokens_per_frame = 2, 256
minutes = 60
print(frames_per_min * minutes * tokens_per_frame)   # ~30k tokens/hour at this rate</code></pre></div><div class="snip"><p class="cap">Vision-language-action step</p><pre><code>obs = {"image": cam.read(), "instruction": "put the red block in the bowl"}
action = policy(obs)                 # 7-DoF delta, closed loop
robot.step(action)                   # errors change the world and compound</code></pre></div></div></details>
</div>
</details>

<p style="margin-top:2.5em">Related: the <a href="/stacks/">Stacks</a> section covers agentic, API, data science, ML, and AWS concepts in the same format.</p>

<script src="{{ base_path }}/assets/js/open-target-details.js"></script>
