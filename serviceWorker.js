//This install only happens on the first time. When the webpage is refreshed it will not install again.
self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll([
				"./",
				"./src/index.css",
				"./images/logo192.png",
				"./images/logo512.png"
			])
		})
	);
});

self.addEventListener("fetch", e => {
	e.respondWith(//Takes a promise. Pass the request of the fetch object.
		caches.match(e.request).then(response => {
			//If we found a response in the cache (searches through above folders) return it and be done with it. 
			//If we don't have matching files in the cache, fall back to the network to get the response.
			return response || fetch(e.request);
		})
	)
});