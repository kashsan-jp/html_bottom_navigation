self.addEventListener("install", e => {
    //console.log("Install!");    
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./css/style.css", "./img/icon-192x192.png"]);
        })
    );
}); 
