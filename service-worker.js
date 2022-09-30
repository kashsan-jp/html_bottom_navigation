var CACHE_NAME='pwa-cache-name';
//キャッシュ対象URL一覧配列
var cacheURLs = [
  '/javascript/pwa/',
];

//インストール処理
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(cacheURLs);
    })
  );
});

//リソースフェッチ時のキャッシュロード
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});