const CACHE_NAME = 'budu2-v1';
const urlsToCache = [
  '/BUDU2/',
  '/BUDU2/index.html',
  '/BUDU2/manifest.json',
  '/BUDU2/assets/watermark.png',
  '/BUDU2/assets/loadscreen.png',
  '/BUDU2/assets/home.png',
  '/BUDU2/assets/music1.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});