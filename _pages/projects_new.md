---
title: "Projects"
permalink: /projects/
layout: single
author_profile: true
---

<style>
  .dropdown-container {
    margin-top: 10px;
    cursor: pointer;
    color: #444;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .triangle {
    margin-right: 5px;
    transition: transform 0.2s ease-in-out;
  }
  .dropdown-content {
    display: none;
    margin-top: 5px;
    color: #333;
    font-size: 13px;
    line-height: 1.5;
  }
.pd-more {
  display: inline-block; margin-top: 10px; font-size: .84rem; font-weight: 600;
  padding: .3em .85em; border: 1px solid #cfdfe6; border-radius: 13px;
  background: #f0f7f9; color: #1f6f8b; text-decoration: none;
}
.pd-more:hover { background: #e2eff3; border-color: #1f6f8b; text-decoration: none; }

details.pj-sec { margin: 1.6em 0 0; scroll-margin-top: 24px; }
details.pj-sec > summary {
  list-style: none; cursor: pointer; display: flex; align-items: center; gap: .5em;
  margin: 0 0 .3em; padding-top: .45em; border-top: 2px solid #eee;
  font-size: 1.32rem; font-weight: 600; color: #23303a;
}
details.pj-sec:first-of-type { margin-top: .4em; }
details.pj-sec:first-of-type > summary { border-top: 0; padding-top: 0; }
details.pj-sec > summary::-webkit-details-marker { display: none; }
details.pj-sec > summary::before { content: "\25BE"; color: #9aa4ad; font-size: .7em; }
details.pj-sec:not([open]) > summary::before { content: "\25B8"; }
details.pj-sec > summary:hover { color: #1f6f8b; }
.pj-sub { font-size: .93rem; color: #5b656e; margin: 0 0 1.4em; line-height: 1.6; }
.pj-grp { font-weight: 700; margin: 0 0 .8em; }

.ind-card {
  border: 1px solid #e2e6ea; border-left: 4px solid #1f6f8b; border-radius: 5px;
  background: #fcfcfc; padding: 1em 1.15em; margin-bottom: 1em;
}
.ind-card h3 { margin: 0 0 .25em; font-size: 1.03rem; color: #23303a; }
.ind-when { font-size: .8rem; color: #7a8189; margin: 0 0 .55em; }
.ind-card p.ind-deck { font-size: .9rem; color: #4a5158; margin: 0 0 .7em; line-height: 1.6; }
.ind-tags { margin: 0 0 .8em; }
.ind-tags span {
  display: inline-block; font-size: .74rem; color: #41606e; background: #f2f7f9;
  border: 1px solid #dde7eb; border-radius: 10px; padding: .15em .6em; margin: 0 .3em .3em 0;
}
.ind-card.soon { border-left-color: #b0b6bd; background: #fbfbfb; }
.ind-soon {
  display: inline-block; font-size: .72rem; text-transform: uppercase; letter-spacing: .06em;
  font-weight: 700; color: #6b7480; background: #f2f3f4; border: 1px solid #dfe2e5;
  border-radius: 11px; padding: .18em .65em; margin-left: .5em; vertical-align: middle;
}
.ind-q {
  display: inline-block; font-size: .72rem; text-transform: uppercase; letter-spacing: .06em;
  font-weight: 700; color: #7a601b; background: #f8f3e6; border: 1px solid #e8dcc2;
  border-radius: 11px; padding: .18em .65em; margin-left: .5em; vertical-align: middle;
}
</style>

<script>
  function toggleDropdown(id) {
    const content = document.getElementById(id);
    const triangle = content.previousElementSibling.querySelector(".triangle");
    const isVisible = content.style.display === "block";
    content.style.display = isVisible ? "none" : "block";
    triangle.textContent = isVisible ? "▶" : "▼";
  }
</script>

<details class="pj-sec" id="industry" open>
<summary>Industry Projects</summary>

<p class="pj-sub">Production systems built in industry roles. Each page carries the architecture, the technical specifications, a full interview question bank covering the analytical and “what if” angles, and a glossary defining every term used.</p>

<div class="ind-card">
  <h3>Document Intelligence &amp; Edge Inference<span class="ind-q">132 questions</span></h3>
  <p class="ind-when">AI Engineer · Infiswift.ai, California · Nov 2025 – Present</p>
  <p class="ind-deck">LLM applications for document data extraction, a self-learning regex framework that promotes stable LLM outputs into deterministic rules, and wake-word detection optimised for edge devices.</p>
  <p class="ind-tags"><span>LangChain</span><span>LangGraph</span><span>AWS Lambda</span><span>Step Functions</span><span>Bedrock</span><span>ONNX</span><span>Quantisation</span><span>A/B testing</span></p>
  <a class="pd-more" href="/projects/industry/infiswift/">Detailed summary &amp; question bank →</a>
</div>

<div class="ind-card">
  <h3>Real-Time Fraud Detection &amp; GenAI Investigation<span class="ind-q">134 questions</span></h3>
  <p class="ind-when">AI/ML Engineer · JPMorgan Chase &amp; Co., California · Sept 2023 – Oct 2025</p>
  <p class="ind-deck">Real-time transaction fraud models with a streaming feature store, a RAG assistant for investigators, and the explainability and governance layer a regulated bank requires.</p>
  <p class="ind-tags"><span>XGBoost</span><span>Feast</span><span>Kafka</span><span>RAG</span><span>Kubeflow</span><span>Terraform</span><span>EKS</span><span>SHAP</span></p>
  <a class="pd-more" href="/projects/industry/jpmorgan/">Detailed summary &amp; question bank →</a>
</div>

<div class="ind-card">
  <h3>Clinical Risk Prediction &amp; EHR NLP<span class="ind-q">136 questions</span></h3>
  <p class="ind-when">Machine Learning Engineer · Cognizant, India · Jan 2019 – Oct 2020</p>
  <p class="ind-deck">A patient readmission model over 2M+ EHR records at 0.87 AUC-ROC, a clinical NLP pipeline over physician notes, and the explainability work that drove clinician adoption — under HIPAA throughout.</p>
  <p class="ind-tags"><span>XGBoost</span><span>PySpark</span><span>Databricks</span><span>BioBERT</span><span>spaCy</span><span>SageMaker</span><span>SHAP</span><span>HL7/FHIR</span></p>
  <a class="pd-more" href="/projects/industry/cognizant/">Detailed summary &amp; question bank →</a>
</div>

</details>

<details class="pj-sec" id="research" open>
<summary>Selected Technical Research Projects</summary>

<p class="pj-grp">Vision Language Models:</p>

<div style="display: flex; align-items: center;">
  <img src="/./assets/images/saind.png" style="width: 30%; height: auto; margin-right: 20px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3)">
  <div>
    <span style="color: red;">SAIND: Scene Animation using (RGB) Images aNd Depth maps</span>
    <div style="margin-top: 10px;">
      <a href="https://drive.google.com/file/d/1C4xcUEtoDAojNvhtNKno31vqIitxZUj6/view?usp=share_link" target="_blank" style="margin-right: 15px;"><img src="/./assets/images/pdfdoc_icon.png" style="width: 20px; height: 20px;"></a>
      <a href="https://github.com/kiran-collab/SAIND" target="_blank"><img src="/./assets/images/github_icon.png" style="width: 20px; height: 20px;"></a>
    </div>
    <div class="dropdown-container" onclick="toggleDropdown('saind-summary')">
      <span class="triangle">▶</span><span>Project Summary</span>
    </div>
    <div class="dropdown-content" id="saind-summary">
      SAIND generates dynamic 3D scene animations using RGB images and depth maps. It blends geometric priors and scene semantics to infer realistic object motions for AR/VR storytelling and visualization.
    </div>
    <a class="pd-more" href="/projects/saind/">Detailed summary →</a>
  </div>
</div>

<br><br>

<div style="display: flex; align-items: center;">
  <img src="/./assets/images/fontStyleTransfer.png" style="width: 30%; height: auto; margin-right: 20px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3)">
  <div>
    <span style="color: red;">Font Style generation for Scene Text Recognition</span>
    <div style="margin-top: 10px;">
      <a href="https://github.com/kiran-collab/Font-Style-Transfer" target="_blank"><img src="/./assets/images/github_icon.png" style="width: 20px; height: 20px;"></a>
    </div>
    <div class="dropdown-container" onclick="toggleDropdown('fontstyle-summary')">
      <span class="triangle">▶</span><span>Project Summary</span>
    </div>
    <div class="dropdown-content" id="fontstyle-summary">
      This project enhances scene text recognition by generating synthetic fonts that mimic various styles. It aids OCR models by increasing training diversity through font-aware text transformations.
    </div>
    <a class="pd-more" href="/projects/font-style-interpolation/">Detailed summary →</a>
  </div>
</div>

<br><br>

<p class="pj-grp">Distributed Computing and Middleware Systems for Future Mobility:</p>

<div style="display: flex; align-items: center;">
  <img src="/./assets/images/griffin.png" style="width: 60%; height: auto; margin-right: 30px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3)">
  <div>
    <span style="color: red;">Griffin: Collaborative Drone-Car for Real-time road event detection</span>
    <div style="margin-top: 10px;">
      <a href="https://drive.google.com/file/d/1AiJLYfZRTlw3ID_MDAoul3_plD1E9NM3/view?usp=share_link" target="_blank" style="margin-right: 15px;"><img src="/./assets/images/pdfdoc_icon.png" style="width: 20px; height: 20px;"></a>
      <a href="https://drive.google.com/file/d/1HZzd6dDWaV-agRxN0BtVJxJWthMUIzy5/view?usp=share_link" target="_blank" style="margin-right: 15px;"><img src="/./assets/images/poster_icon.png" style="width: 20px; height: 20px;"></a>
      <a href="https://github.com/kiran-collab/Griffin" target="_blank"><img src="/./assets/images/github_icon.png" style="width: 20px; height: 20px;"></a>
    </div>
    <div class="dropdown-container" onclick="toggleDropdown('griffin-summary')">
      <span class="triangle">▶</span><span>Project Summary</span>
    </div>
    <div class="dropdown-content" id="griffin-summary">
      Griffin introduces a collaborative drone-car platform that captures real-time road events for improved traffic analytics. It uses middleware systems to coordinate mobility, data fusion, and alert broadcasting.
    </div>
    <a class="pd-more" href="/projects/griffin/">Detailed summary →</a>
  </div>
</div>

<br><br>

<p class="pj-grp">WiFi Sensing:</p>

<div style="display: flex; align-items: center;">
  <img src="/./assets/images/bmeye.png" style="width: 30%; height: auto; margin-right: 20px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3)">
  <div>
    <span style="color: red;">BMEye: Public Health-Oriented Body Mass Index Monitoring Using Commodity WiFi</span>
    <div style="margin-top: 10px;">
      <a href="https://drive.google.com/file/d/1JWK-cM5xT7O-lAuwfAiJcKRPLSYMdu9g/view?usp=share_link" target="_blank" style="margin-right: 15px;"><img src="/./assets/images/pdfdoc_icon.png" style="width: 20px; height: 20px;"></a>
      <a href="https://github.com/kiran-collab/CSIKit-BMEye" target="_blank"><img src="/./assets/images/github_icon.png" style="width: 20px; height: 20px;"></a>
      <a href="https://drive.google.com/file/d/1O4tS-Qrpfxc6nQA-L1zBzoVZg0EM_-a9/view?usp=share_link" target="_blank"><img src="/./assets/images/video_icon.jpg" style="width: 20px; height: 20px;"></a>
    </div>
    <div class="dropdown-container" onclick="toggleDropdown('bmeye-summary')">
      <span class="triangle">▶</span><span>Project Summary</span>
    </div>
    <div class="dropdown-content" id="bmeye-summary">
      BMEye leverages WiFi channel state information to estimate a user’s body shape and BMI. It offers a non-invasive, device-free public health tool for real-time population health monitoring.
    </div>
    <a class="pd-more" href="/projects/bmeye/">Detailed summary →</a>
  </div>
</div>

<br><br>

<div style="display: flex; align-items: center;">
  <img src="/./assets/images/swidir.png" style="width: 30%; height: auto; margin-right: 20px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3)">
  <div>
    <span style="color: red;">SWiDir: Enhancing Smartphone-based Walking Direction Estimation with Passive WiFi Sensing</span>
    <div style="margin-top: 10px;">
      <a href="https://drive.google.com/file/d/1DKiSTapNdCezKOrGg1TwPvvLU7-wScef/view?usp=share_link" target="_blank" style="margin-right: 15px;"><img src="/./assets/images/pdfdoc_icon.png" style="width: 20px; height: 20px;"></a>
      <a href="https://github.com/kiran-collab/SWidir" target="_blank"><img src="/./assets/images/github_icon.png" style="width: 20px; height: 20px;"></a>
    </div>
    <div class="dropdown-container" onclick="toggleDropdown('swidir-summary')">
      <span class="triangle">▶</span><span>Project Summary</span>
    </div>
    <div class="dropdown-content" id="swidir-summary">
      SWiDir augments smartphone sensors with passive WiFi data to improve user walking direction estimation. It enhances pedestrian navigation accuracy, especially in GPS-denied or cluttered indoor environments.
    </div>
    <a class="pd-more" href="/projects/swidir/">Detailed summary →</a>
  </div>
</div>

</details>

<details class="pj-sec" id="products" open>
<summary>Products</summary>

<p class="pj-sub">Things being built as products rather than as papers or client systems. Both are in progress — this section will carry the write-up and links once there is something to show.</p>

<div class="ind-card soon">
  <h3>Deepfake detection browser plug-in<span class="ind-soon">In progress</span></h3>
</div>

<div class="ind-card soon">
  <h3>Business intelligence tool for marketing strategy<span class="ind-soon">In progress</span></h3>
</div>

</details>
