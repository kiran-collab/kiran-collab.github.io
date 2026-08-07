---
title: "Job Description Scanner"
permalink: /jd-scan/
layout: single
author_profile: true
---

{% include base_path %}

<style>
.jd-lead { color: #4a5158; border-left: 3px solid #c8d4da; padding-left: 1em; margin: 0 0 1.4em; }
#jd-input {
  width: 100%; min-height: 220px; padding: .9em 1em; font-size: .92rem; line-height: 1.55;
  border: 1px solid #d8dee2; border-radius: 6px; background: #fcfdfd; resize: vertical;
  font-family: inherit; color: #2f3640;
}
#jd-input:focus { outline: none; border-color: #1f6f8b; box-shadow: 0 0 0 3px rgba(31,111,139,.12); }
.jd-btn {
  display: inline-block; font-size: .9rem; font-weight: 600; padding: .55em 1.3em; margin: .9em .5em 0 0;
  border: 1px solid #1f6f8b; border-radius: 5px; background: #1f6f8b; color: #fff; cursor: pointer;
}
.jd-btn:hover { background: #1a5e77; }
.jd-btn.ghost { background: #fff; color: #1f6f8b; }
.jd-btn.ghost:hover { background: #eef5f8; }

#jd-out { display: none; margin-top: 2em; }
#jd-out h4 {
  margin: 1.7em 0 .5em; font-size: .8rem; text-transform: uppercase; letter-spacing: .07em;
  color: #7c848b; font-weight: 700;
}
.jd-stats { display: flex; flex-wrap: wrap; gap: .8em; margin-bottom: .5em; }
.jd-stats .s {
  font-size: .84rem; padding: .5em .9em; border-radius: 5px; border: 1px solid #e2e6e9; background: #fafbfb;
}
.jd-stats .s b { font-size: 1.15rem; display: block; }
.jd-stats .ok  { border-color: #cfe0d5; background: #f2f8f4; color: #3f5a37; }
.jd-stats .gap { border-color: #ecd7d3; background: #fdf6f5; color: #a4534a; }
.jd-stats .pct { border-color: #cfdee6; background: #f2f8fa; color: #35606f; }
.jd-chips { line-height: 2.1; margin: 0 0 .4em; }
.jd-chips .chip {
  display: inline-block; font-size: .8rem; padding: .22em .65em; margin: 0 .32em .35em 0;
  border-radius: 11px; border: 1px solid #dde3e7; background: #f6f9fa; color: #41606e; text-decoration: none;
}
.jd-chips a.chip.ok:hover { background: #e6f3ea; text-decoration: none; }
.jd-chips .chip.ok  { border-color: #cfe0d5; background: #f2f8f4; color: #3f5a37; }
.jd-chips .chip.gap { border-color: #ecd7d3; background: #fdf6f5; color: #a4534a; font-weight: 600; }
.jd-chips .chip.unk { border-color: #e4e4e4; background: #fafafa; color: #8a9199; }
.jd-note { font-size: .88rem; color: #7a8189; margin: 0 0 .7em; }
#jd-snippet {
  width: 100%; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .78rem;
  padding: .8em; border: 1px solid #e2e8eb; border-radius: 5px; background: #f6f8f9; color: #2f3a42;
}
.jd-priv {
  border: 1px solid #e0e6ea; border-left: 3px solid #4a6741; background: #f5f9f4;
  padding: .8em 1.05em; border-radius: 0 4px 4px 0; margin: 1.5em 0; font-size: .9rem; color: #46554a;
}
.jd-how { font-size: .92rem; color: #55606a; }
.jd-how li { margin-bottom: .4em; }
</style>

<p class="jd-lead">Paste a job description and this compares it against every term already on this site — <a href="/skills/">Skills</a>, <a href="/toolkit/">Toolkit</a>, <a href="/stacks/">Stacks</a>, <a href="/vision/">Vision</a>, and <a href="/frameworks/">Frameworks</a> — then reports what is covered, what is missing, and generates paste-ready Toolkit entries for the gaps.</p>

<textarea id="jd-input" placeholder="Paste the full job description here — responsibilities, requirements, nice-to-haves. The more text, the better the match."></textarea>

<div>
<button type="button" id="jd-scan" class="jd-btn">Scan description</button>
<button type="button" id="jd-clear" class="jd-btn ghost">Clear</button>
</div>

<div id="jd-out"></div>

<div class="jd-priv">
<p><strong>Nothing leaves your browser.</strong> The matching runs entirely client-side against a term list built into the page. No description is uploaded, logged, or stored anywhere — you can disconnect from the network and it still works.</p>
</div>

How it works
======

<ul class="jd-how">
<li><strong>Covered</strong> — the term appears in the description and already has an entry on this site. Each chip links straight to it, which is useful when preparing for an interview against that description.</li>
<li><strong>Missing</strong> — a technology the scanner recognises that has no entry here yet. This is the actionable list: either write the entry, or decide deliberately that it does not belong.</li>
<li><strong>Unrecognised</strong> — capitalised terms the scanner has never seen. Mostly company names and job-ad noise, occasionally a genuinely new tool worth adding to the vocabulary.</li>
<li><strong>Coverage percentage</strong> — recognised terms already covered, over all recognised terms. Useful as a rough signal across several descriptions for the same role, not as a score to optimise.</li>
</ul>

<p>Aliases are handled, so <code>sklearn</code> matches Scikit-learn, <code>k8s</code> matches Kubernetes, and <code>retrieval augmented generation</code> matches RAG. The vocabulary is regenerated from the site's own pages, so it stays accurate as those pages change.</p>

<div class="jd-priv" style="border-left-color:#8a6d1f;background:#fbf9f2;color:#55504a">
<p><strong>On adding entries automatically.</strong> This site is static — served as files, with no backend — so a form in the browser cannot write to it. Doing that from client-side code would mean embedding a token with write access to the repository in a public page, which is not a reasonable trade. The scanner therefore produces the exact markup to paste instead. If you want it genuinely automated, the safe route is a GitHub Action that opens a pull request; ask and I will wire it up.</p>
</div>

<script src="{{ base_path }}/assets/js/jd-scan.js"></script>
