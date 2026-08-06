/* Opens any collapsed <details> containing the anchor being navigated to, so
   jump links land on expanded content instead of a closed bar.
   External file on purpose: the site's compress layout strips line feeds from
   inline scripts, which breaks // comments. Block comments only here too. */
(function () {
  function openTarget() {
    var hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    var id = decodeURIComponent(hash.slice(1));
    var el = document.getElementById(id);
    if (!el) return;
    var node = el;
    while (node) {
      if (node.tagName === 'DETAILS') node.open = true;
      node = node.parentElement;
    }
    el.scrollIntoView();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', openTarget);
  } else {
    openTarget();
  }
  window.addEventListener('hashchange', openTarget);
})();
