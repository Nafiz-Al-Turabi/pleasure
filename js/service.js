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

function renderServiceCards() {
  const cardsRoot = document.getElementById("service-cards-grid");
  if (!cardsRoot) return;

  const cards = [
    {
      number: "01",
      title: "VIP / Bespoke",
      description: "Tailored high-end alignment for premium settings.",
    },
    {
      number: "02",
      title: "Couples Service",
      description: "A shared experience with calm boundaries.",
    },
    {
      number: "03",
      title: "Dinner Date",
      description: "Elegant company for evenings out.",
    },
    {
      number: "04",
      title: "Hotel Service",
      description: "Private, discreet, and efficiently arranged.",
    },
    {
      number: "05",
      title: "Duo Service",
      description: "Two companions, one coordinated arrangement.",
    },
    {
      number: "06",
      title: "Massage",
      description: "Calm and professional, by appointment.",
    },
    {
      number: "07",
      title: "Business Companionship",
      description: "Representative company for business settings.",
    },
    {
      number: "08",
      title: "Overnight",
      description: "Longer arrangements, aligned in advance.",
    },
    {
      number: "09",
      title: "Party & Event",
      description: "For social settings where presence matters.",
    },
    {
      number: "10",
      title: "Personal Companionship",
      description: "Warm, natural company - discreetly aligned.",
    },
    {
      number: "11",
      title: "Private Performance",
      description: "A private moment, tastefully delivered.",
    },
    {
      number: "12",
      title: "City Experience",
      description: "A curated outing aligned to your pace and setting.",
    },
  ];

  cardsRoot.innerHTML = cards
    .map(
      (card) => `
            <div class="md:h-[344px] flex flex-col md:justify-between border border-black/10 lg:border-black py-7 px-4 rounded rounded-2xl" >
                <div class="mb-2">
                    <h1 class="text-[2.625rem] lg:text-5xl times-font text-center mb-2">${card.number}</h1>
                    <p class="text-lg lg:text-xl times-font text-center">${card.title}</p>
                </div>
                <p class="text-sm text-center">${card.description}</p>
            </div>
      `
    )
    .join("");
}

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
fetch("../components/service/what-we-need.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("what-we-need").innerHTML = data;
    renderVipServiceCards();
  });

    fetch("../components/next-step.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("next-step").innerHTML = data;
    });

  fetch("../components/service/discover-other-services.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("discover-other-services").innerHTML = data;
  });

  fetch("../components/service/vip-amsterdam.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("vip-amsterdam").innerHTML = data;
  });
  fetch("../components/service/services.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("services").innerHTML = data;
  });
  
  fetch("../components/service/services-cards.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("services-cards").innerHTML = data;
    renderServiceCards();
  });




