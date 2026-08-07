/* Adds a "Collapse all" / "Expand all" control to the question-bank pages, so
   long sections can be hidden when they are not needed.
   External file on purpose: the site's compress layout strips line feeds from
   inline scripts, which breaks // comments. Block comments only here too. */
(function () {
  function init() {
    var links = document.querySelector('.ip .ip-links');
    if (!links) return;

    var sections = document.querySelectorAll('details.ip-sec');
    if (!sections.length) return;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ip-toggle-all';

    function anyOpen() {
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].open) return true;
      }
      return false;
    }

    function sync() {
      btn.textContent = anyOpen() ? 'Collapse all' : 'Expand all';
    }

    btn.addEventListener('click', function () {
      var collapse = anyOpen();
      for (var i = 0; i < sections.length; i++) {
        sections[i].open = !collapse;
      }
      if (collapse) {
        var inner = document.querySelectorAll('details.qb');
        for (var j = 0; j < inner.length; j++) {
          inner[j].open = false;
        }
      }
      sync();
    });

    for (var k = 0; k < sections.length; k++) {
      sections[k].addEventListener('toggle', sync);
    }

    sync();
    links.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
