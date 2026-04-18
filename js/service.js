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

fetch("../components/service/service-hero.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("service-hero").innerHTML = data;
  });

function renderVipServiceCards() {
  const cardsRoot = document.getElementById("vip-service-cards");
  if (!cardsRoot) return;

  const vipCards = [
    {
      title: "Dress code on request",
      description:
        "From classy casual to cocktail or black tie. You name the setting, we align presentation and styling accordingly.",
      className: "",
    },
    {
      title: "Handpicked match",
      description:
        "No randomness. Selection is based on vibe, presence, and setting-fit, so the company feels natural for your evening and schedule.",
      className: "",
    },
    {
      title: "For stylish settings",
      description:
        "Suitable for dinner, casino, club, event, hotel lounge, canal cruise, or a curated city experience. Calmly organized.",
      className: "lg:col-span-2 lg:w-[48%] lg:justify-self-center",
    },
  ];

  cardsRoot.innerHTML = vipCards
    .map(
      (card) => `
      <div class="border border-black/90 p-8 lg:p-0 lg:py-9 lg:px-12 rounded-2xl ${card.className}">
        <div class="lg:py-12 flex flex-col ">
          <h2 class="text-[2rem] lg:text-5xl times-font mb-4 lg:mb-6">${card.title}</h2>
          <p class="leading-[26px] text-[#565656]">${card.description}</p>
        </div>
      </div>
      `
    )
    .join("");
}

fetch("../components/service/vip-service.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("vip-service").innerHTML = data;
    renderVipServiceCards();
  });

fetch("../components/service/presence.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("presence").innerHTML = data;
    renderVipServiceCards();
  });



