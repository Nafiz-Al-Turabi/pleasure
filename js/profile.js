fetch("../components/navbar.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;

		const script = document.createElement("script");
		script.src = "../js/nav.js";
		document.body.appendChild(script);
	});

fetch("../components/footer.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("footer").innerHTML = data;
	});
