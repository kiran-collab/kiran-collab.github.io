---
title: "Hackathons"
permalink: /hackathons/
layout: single
author_profile: true
---

{% include base_path %}

<style>
.hk-lead { color: #4a5158; border-left: 3px solid #c8d4da; padding-left: 1em; margin: 0 0 1.4em; }
.hk-hint { font-size: .88rem; color: #7a8189; margin: 0 0 1.8em; }

.hk-sec {
  margin-top: 2.4em; padding-top: .5em; border-top: 2px solid #eee;
  font-size: 1.24rem; color: #23303a; scroll-margin-top: 24px;
}

.hk-card {
  border: 1px solid #e2e6ea; border-left: 4px solid #b83227; border-radius: 5px;
  background: #fcfcfc; padding: 1em 1.15em; margin-bottom: 1em;
}
.hk-card.win { border-left-color: #8a6d1f; background: #fdfcf7; }
.hk-card h3 { margin: 0 0 .2em; font-size: 1.02rem; color: #23303a; }
.hk-when { font-size: .8rem; color: #7a8189; margin: 0 0 .55em; }
.hk-card p.hk-what { font-size: .9rem; color: #4a5158; margin: 0 0 .5em; line-height: 1.6; }
.hk-row { font-size: .85rem; color: #55606a; margin: 0 0 .35em; }
.hk-row b { color: #35424c; font-weight: 600; }
.hk-tags { margin: .55em 0 0; }
.hk-tags span {
  display: inline-block; font-size: .74rem; color: #41606e; background: #f2f7f9;
  border: 1px solid #dde7eb; border-radius: 10px; padding: .15em .6em; margin: 0 .3em .3em 0;
}
.hk-place {
  display: inline-block; font-size: .72rem; text-transform: uppercase; letter-spacing: .06em;
  font-weight: 700; color: #7a601b; background: #f8f3e6; border: 1px solid #e8dcc2;
  border-radius: 11px; padding: .16em .65em; margin-left: .5em; vertical-align: middle;
}

.hk-note {
  border: 1px solid #e0e6ea; border-left: 3px solid #8a6d1f; background: #fbf9f2;
  padding: .9em 1.15em; border-radius: 0 4px 4px 0; margin: 1.4em 0; font-size: .92rem; color: #55504a;
}
.hk-tmpl {
  border: 1px dashed #cfd6da; border-radius: 5px; background: #fbfcfc;
  padding: 1em 1.15em; margin: 1em 0; color: #7a8189;
}
.hk-tmpl h3 { margin: 0 0 .2em; font-size: 1.02rem; color: #8a9199; }
.hk-tmpl .hk-row { color: #8a9199; }
</style>

<p class="hk-lead">Time-boxed builds — what the constraint was, what got built inside it, and what the deadline forced me to leave out. A hackathon is worth writing up for the trade-offs it exposes, not for the placing.</p>

<p class="hk-hint">Related: <a href="/open-source/">Open Source</a> for the projects with no deadline attached, and <a href="/projects/">Projects</a> for the research and industry work.</p>

<h2 class="hk-sec" id="entries">Events</h2>

<div class="hk-note">
<strong>This section is being compiled.</strong> Rather than fill it with something approximate, it is waiting on the real list — event, date, team, what was built, and what happened. Each entry will use the format below, which is built and ready.
</div>

<div class="hk-tmpl">
<h3>Event name<span class="hk-place">placing, if any</span></h3>
<p class="hk-row">Month Year · Location or online · Organiser</p>
<p class="hk-row"><b>The brief:</b> what the organisers asked for, and any constraint that shaped it.</p>
<p class="hk-row"><b>What we built:</b> the thing itself, in two sentences.</p>
<p class="hk-row"><b>My part:</b> which pieces were mine, in a team of n.</p>
<p class="hk-row"><b>The interesting trade-off:</b> what got cut for the deadline, and whether that was the right call.</p>
<p class="hk-row"><b>Links:</b> repository · demo · devpost</p>
</div>

<h2 class="hk-sec" id="why">Why this section exists</h2>

<p style="font-size:.93rem;color:#55606a;line-height:1.65">A hackathon project is a useful thing to talk about in an interview precisely because it is compromised. There was no time to do it properly, so every decision is a visible trade-off: what got faked, what got hardcoded, what would have to be rebuilt before anyone could use it. Those are better answers than a polished project gives, because the reasoning is still on the surface.</p>

<p style="font-size:.93rem;color:#55606a;line-height:1.65">So the write-ups here lead with the constraint and the cut, not the demo. If a project won something, that goes in the corner as a badge — it is the least interesting fact about it.</p>
