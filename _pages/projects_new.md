---
title: "Selected Technical Projects"
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

**Vision Language Models:**

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
  </div>
</div>

<br><br>

**Distributed Computing and Middleware Systems for Future Mobility:**

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
  </div>
</div>

<br><br>

**WiFi Sensing:**

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
  </div>
</div>
