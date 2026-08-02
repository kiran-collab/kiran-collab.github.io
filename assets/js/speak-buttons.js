/* Read-aloud buttons for .tk-item descriptions (Skills / Toolkit pages).
   Lives in an external file on purpose: the site's `compress` layout strips
   line feeds from inline <script> blocks, which silently breaks any JS that
   uses // comments. Only block comments are used here for the same reason. */
(function () {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') return;

  var synth = window.speechSynthesis;
  var current = null; /* button currently speaking */
  var ticker = null;  /* Chrome truncates long utterances without a nudge */

  var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
             '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.8-1-3.3-2.5-4v8c1.5-.7 2.5-2.2 2.5-4z' +
             'M14 3.2v2.1c2.9.9 5 3.5 5 6.7s-2.1 5.8-5 6.7v2.1c4-1 7-4.5 7-8.8s-3-7.8-7-8.8z"/></svg>';

  function reset() {
    if (ticker) { clearInterval(ticker); ticker = null; }
    if (current) {
      current.classList.remove('is-speaking');
      current.setAttribute('aria-pressed', 'false');
      current = null;
    }
  }

  function stop() { reset(); synth.cancel(); }

  function speak(btn, text) {
    synth.cancel(); /* only one description at a time */
    reset();
    var u = new SpeechSynthesisUtterance(text);
    u.rate = 1;
    u.onend = reset;
    u.onerror = reset;
    current = btn;
    btn.classList.add('is-speaking');
    btn.setAttribute('aria-pressed', 'true');
    synth.speak(u);
    ticker = setInterval(function () {
      if (!synth.speaking) { reset(); return; }
      if (synth.paused) synth.resume();
    }, 8000);
  }

  function attach(p) {
    var text = (p.textContent || '').trim();
    if (!text) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'speak-btn';
    btn.title = 'Read aloud';
    btn.setAttribute('aria-label', 'Read this description aloud');
    btn.setAttribute('aria-pressed', 'false');
    btn.innerHTML = ICON;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (current === btn) { stop(); return; } /* click again to stop */
      speak(btn, text);
    });
    p.appendChild(document.createTextNode(' '));
    p.appendChild(btn);
  }

  function init() {
    var nodes = document.querySelectorAll('.tk-item .tk-txt p');
    for (var i = 0; i < nodes.length; i++) attach(nodes[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Speech keeps playing after navigation otherwise. */
  window.addEventListener('pagehide', stop);
  window.addEventListener('beforeunload', stop);
})();
