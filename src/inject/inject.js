window.addEventListener('popstate', function (event) {
	let header = ["h1", "h2", "h3", "h4"].map(candidate => {
		return document.querySelectorAll(candidate)[0] || document.querySelectorAll("." + candidate)[0];
	}).filter(x => x != null)[0]?.innerText;
	let section = document.querySelectorAll(".main-menu .current")[0]?.innerText;
	document.title = [header, section, "Tipalti"].filter(x => x != undefined).join(" - ");
});