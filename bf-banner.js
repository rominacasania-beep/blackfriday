// Cartel Black Friday para todas las webs de Romi Manifiesta (24–29/11/2026).
// Se agrega con: <script src="https://blackfriday.diario21.workers.dev/bf-banner.js" defer></script>
// Se apaga solo el domingo 29/11 a las 23:59 (hora de Uruguay).
(function () {
  var FIN = Date.parse('2026-11-30T02:59:59Z');
  if (Date.now() > FIN || document.getElementById('bf-banner')) return;
  var url = 'https://blackfriday.diario21.workers.dev/?utm_source=' + encodeURIComponent(location.hostname) + '&utm_medium=banner&utm_campaign=bf2026';
  var css = '#bf-banner{position:fixed;left:0;right:0;top:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;' +
    'padding:8px 12px;min-height:46px;text-decoration:none;font:600 13.5px/1.25 Poppins,system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff;' +
    'background:linear-gradient(100deg,#1d1230,#3a2160 45%,#1d1230);border-bottom:2px solid #e6c06a;box-shadow:0 4px 18px rgba(0,0,0,.35)}' +
    '#bf-banner b{color:#f7dc95;letter-spacing:.08em}' +
    '#bf-banner .bf-reloj{font-variant-numeric:tabular-nums;background:rgba(247,220,149,.14);border:1px solid rgba(247,220,149,.5);border-radius:8px;padding:2px 8px;color:#f7dc95}' +
    '#bf-banner .bf-cta{background:linear-gradient(90deg,#e6c06a,#f7dc95);color:#2a1640;border-radius:99px;padding:5px 12px;font-weight:700;animation:bfLate 1.4s ease-in-out infinite}' +
    '@keyframes bfLate{50%{transform:scale(1.06)}}' +
    '.launch-bar{display:none!important}' +
    '@media (max-width:420px){#bf-banner{font-size:12px;gap:6px}#bf-banner .bf-txt{flex-basis:100%;text-align:center}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var a = document.createElement('a');
  a.id = 'bf-banner'; a.href = url; a.target = '_blank'; a.rel = 'noopener';
  a.innerHTML = '<span class="bf-txt">🎁 <b>BLACK FRIDAY</b> · hasta 100 % OFF</span><span class="bf-reloj" id="bf-reloj">termina en …</span><span class="bf-cta">Girá la ruleta →</span>';
  function poner() {
    document.body.insertBefore(a, document.body.firstChild);
    var h = a.offsetHeight;
    document.body.style.paddingTop = (parseFloat(getComputedStyle(document.body).paddingTop) || 0) + h + 'px';
    tic();
  }
  function tic() {
    var ms = FIN - Date.now();
    if (ms <= 0) { a.remove(); return; }
    var s = Math.floor(ms / 1000), d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    document.getElementById('bf-reloj').textContent = 'termina en ' + (d ? d + (d === 1 ? ' día ' : ' días ') : '') + p(h) + ':' + p(m) + ':' + p(x);
    setTimeout(tic, 1000);
  }
  if (document.body) poner(); else document.addEventListener('DOMContentLoaded', poner);
})();
