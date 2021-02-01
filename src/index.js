window.onload = function () {
    const pieces = document.getElementsByTagName('svg');
    for (var i = 0; pieces.length; i++) {
        let _piece = pieces[i];
        _piece.onclick = function(t) {
            if (t.target.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.getAttribute('data-position');
            if (t.target.parentElement.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.parentElement.getAttribute('data-position');
        }
    }
}

if ("serviceWorker" in navigator) {
	//Register the service worker and pass the URL for it. Uses promises (aka then).
	navigator.serviceWorker.register("serviceWorker.js").then(registration => {
		console.log("Service Worker Registered!");
		console.log(registration);
	}).catch(error => {
		//If registration fails, then an error will be thrown which we print.
		console.log("SW Registration failed.");
		console.log(error);
	});
}