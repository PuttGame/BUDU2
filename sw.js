const CACHE_NAME = 'budu2-v4';
const urlsToCache = [
  '/BUDU2/',
  '/BUDU2/index.html',
  '/BUDU2/manifest.json',
  '/BUDU2/assets/watermark.png',
  '/BUDU2/assets/loadscreen.png',
  '/BUDU2/assets/home.png',
  '/BUDU2/assets/music1.mp3',
  '/BUDU2/assets/icon-192.png',
  '/BUDU2/assets/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).catch(() => caches.match('/BUDU2/index.html')))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
});
