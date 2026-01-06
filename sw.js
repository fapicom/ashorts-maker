const CACHE_NAME = 'shortsup-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/coi-serviceworker/0.1.7/coi-serviceworker.min.js',
  'https://unpkg.com/fabric@5.3.0/dist/fabric.min.js',
  'https://unpkg.com/@ffmpeg/ffmpeg@0.12.7/dist/umd/ffmpeg.min.js',
  'https://unpkg.com/@ffmpeg/util@0.12.1/dist/umd/index.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});