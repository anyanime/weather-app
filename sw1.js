const cacheName = "v1";
const cacheAssets = [
    'index.html',
    'scripts/main.js',
    'styles/main.css',
    'manifest.json',
];

self.addEventListener('install', (event) => {
    console.log('Clicking!!!!')
    event.waitUntil(
        caches.open('cacheName').then((cache) => {
            console.log("Set")
            cache.addAll(cacheAssets);
        })
    );
});


// Delete unwanted cache

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (cache !== cacheName) {
                    return caches.delete(cache);
                }
            }));
        })
    );
});


// add offline event
self.addEventListener('fetch', (event) => {
    console.log("IIIIIIII")
// event.respondWith(
//     caches.match(event.request).then((resp) => {
//         // return resp || fetch(event.request).then((response) => {
//         //     return caches.open('v1').then((cache) => {
//         //         cache.put(event.request, response.clone());
//         //         return response;
//             });
//         });
//     })
// );
});