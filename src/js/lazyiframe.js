if( "forEach" in NodeList.prototype ) {
	function iframeSwitch(el) {
		if (!("fetch" in window) || "connection" in navigator && navigator.connection.saveData === true) {
			return;
		}

		let iframe = document.createElement("iframe");
		iframe.setAttribute("loading", "lazy");
		for(let attr of el.attributes) {
			iframe.setAttribute(attr.name, attr.nodeValue);
		}
		el.replaceWith(iframe);
	}

	if(typeof IntersectionObserver !== "undefined") {
		var observer = new IntersectionObserver(function(changes) {
			changes.forEach(function(change) {
				if(change.isIntersecting) {
					iframeSwitch(change.target);
					observer.unobserve(change.target);
				}
			});
		});
	}

	document.querySelectorAll("div[data-lazyiframe]").forEach(function(element) {
		if(typeof IntersectionObserver !== "undefined") {
			observer.observe(element);
		} else {
			iframeSwitch(element);
		}
	});
}
