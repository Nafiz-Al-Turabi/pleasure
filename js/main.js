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
  
fetch("components/curated-selection.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("curated-selection").innerHTML = data;

    const script = document.createElement("script");
    script.src = "/js/curated-selection.js";
    document.body.appendChild(script);
  });
  
  fetch("components/services.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("services").innerHTML = data;
  });


  fetch("components/how-booking-works.html")
  .then(response => response.text())
  .then(data => {
    document.querySelectorAll(".how-booking-works")
      .forEach(el => el.innerHTML = data);
  });