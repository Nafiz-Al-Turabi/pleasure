fetch("components/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    // Load nav.js after navbar is injected
    const script = document.createElement("script");
    script.src = "/js/nav.js";
    document.body.appendChild(script);
  });
  
fetch("components/hero.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("hero").innerHTML = data;
  });
  