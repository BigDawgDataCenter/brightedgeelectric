// Bright Edge Electric: gentle motion (Oct 24). Cards and sections rise into place as they scroll into
// view, and Plugsy waves on the "Ready when you are" band. Nothing happens for people who ask their
// device to reduce motion, or in browsers without IntersectionObserver: the page simply shows as is.
(function () {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var SELECT = '.section-head, .switch, .svc-panel.on .svc, .reviews, .q-head, .wizard, .q-info, .faq details, ' +
               '.area .wrap > *, .about .wrap > *, .mission .wrap > div:first-child, .v';
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      seen.unobserve(e.target);
    });
  }, {threshold: 0.12, rootMargin: '0px 0px -40px 0px'});
  [].slice.call(document.querySelectorAll(SELECT)).forEach(function (el) {
    var i = [].indexOf.call(el.parentNode.children, el);
    el.style.transitionDelay = Math.min(i, 5) * 80 + 'ms';  // siblings arrive one after another
    el.classList.add('js-reveal');
    seen.observe(el);
  });
  [].slice.call(document.querySelectorAll('.cta-band')).forEach(function (el) { seen.observe(el); });
})();
