document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('init').forEach(function(elem) {
    document.title = elem.getAttribute('pgtitle');

    var fav = document.createElement('link');
    fav.rel = "icon";
    fav.href = elem.getAttribute('favicon');
    document.head.appendChild(fav);

    var link = document.createElement('link');
    link.rel = "stylesheet";
    if (!elem.getAttribute('stylesheet')) {
      link.href = "/style.css";
    } else {
      link.href = elem.getAttribute('stylesheet');
    }
    document.head.appendChild(link);
  });
});
