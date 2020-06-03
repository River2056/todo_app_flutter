'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "a07af7d7c1db2ffe9b726749227434e2",
"icons/Icon-192.png": "edaec1824324a8b5c6afc3e2efd15770",
"icons/Icon-512.png": "698f19bb0d9bc58d2fc384809cd1666a",
"index.html": "a9b6bf2053cd693a98820df02b818063",
"/": "a9b6bf2053cd693a98820df02b818063",
"logo.png": "f4bad5b3a0d8811f9bcef118aba6b8f8",
"main.dart.js": "0cd305fd2bc80f531dbe07dd19d42c5f",
"manifest.json": "33d48e78e8c6d0567f82733f049dc5ab"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
