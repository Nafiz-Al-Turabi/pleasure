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

fetch("../components/pricing/pricing-hero.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("pricing-hero").innerHTML = data;
  });

fetch("../components/pricing/pricing-guidance.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("pricing-guidance").innerHTML = data;
  });

fetch("../components/pricing/pricing-guide-text.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelectorAll(".pricing-guide-text").forEach((element) => {
      element.innerHTML = data;
    });
  });

fetch("../components/pricing/base-rates.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("base-rates").innerHTML = data;
  });
