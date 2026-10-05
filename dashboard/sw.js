/* Nudge Sense service worker.
   Network first: when online you always get the latest run; when offline the last
   copy you opened is shown. Bump VERSION when the list of core files changes. */
const VERSION = 'nudge-sense-v3';
const CORE = [
  './', './index.html', './voc-ds.css', './voc-ds.js', './voc-data.js',
  './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png',
  './icons/apple-touch-icon.png', './icons/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !isFont) return;

  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok || res.type === 'opaque') {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: sameOrigin && req.mode === 'navigate' })
          .then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : undefined))
          .then(hit => hit || Response.error())
      )
  );
});
