(function () {
	const updateTitle = function (event) {
		const header = ["h1", "h2", "h3", "h4"].map(candidate => {
			return document.querySelectorAll(candidate)[0] || document.querySelectorAll("." + candidate)[0];
		}).filter(x => x != null)[0]?.innerText;
		const section = document.querySelectorAll(".main-menu .current")[0]?.innerText;
		document.title = [header, section, "Tipalti"].filter(x => x != undefined).join(" - ");
	}

	const waitAndUpdateTitle = function (time) {
		setTimeout(updateTitle, time || 500);
	}

	window.addEventListener('popstate', waitAndUpdateTitle);
	waitAndUpdateTitle(1000);
	
})()