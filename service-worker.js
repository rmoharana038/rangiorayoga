const CACHE_NAME = 'rangiorayoga-cache-v1';
const urlsToCache = [
    '/index.html',
    '/about.html',
    '/classes.html',
    '/pricing.html',
    '/why-yoga.html',
    '/contact.html',
    '/assets/css/style.css',
    '/assets/js/main.js',
    '/assets/images/banner.jpg',
    '/assets/images/about-us-image.png',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});