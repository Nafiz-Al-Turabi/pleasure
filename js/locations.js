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

fetch("../components/locations/location-hero.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("locations-hero").innerHTML = data;
  });

fetch("../components/locations/find-your-city.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("find-your-city").innerHTML = data;
    initializeCustomRegionSelect();
  });

  fetch("../components/locations/core-locations.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("core-locations").innerHTML = data;
      initializeCoreLocationCards();
    });

  fetch("../components/locations/all-locations.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("all-locations").innerHTML = data;
      initializeAllLocations();
    });
  fetch("../components/locations/confirmation-works.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("confirmation-works").innerHTML = data;
    });
  fetch("../components/locations/discretion.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("discretion").innerHTML = data;
    });

  document.addEventListener("DOMContentLoaded", () => {
    initializeCoreLocationCards();
  });

function initializeCustomRegionSelect() {
  const customSelects = document.querySelectorAll("[data-custom-select]");

  customSelects.forEach((selectRoot) => {
    if (selectRoot.dataset.initialized === "true") {
      return;
    }

    selectRoot.dataset.initialized = "true";

    const trigger = selectRoot.querySelector("[data-custom-select-trigger]");
    const menu = selectRoot.querySelector("[data-custom-select-menu]");
    const label = selectRoot.querySelector("[data-custom-select-label]");
    const valueInput = selectRoot.querySelector("[data-custom-select-value]");
    const chevron = selectRoot.querySelector("[data-custom-select-chevron]");
    const options = Array.from(menu.querySelectorAll("[role='option']"));

    if (!trigger || !menu || !label || !valueInput || !chevron || !options.length) {
      return;
    }

    const closeMenu = () => {
      menu.classList.add("opacity-0", "pointer-events-none", "translate-y-1");
      menu.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
      chevron.classList.remove("rotate-180");
      trigger.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      menu.classList.remove("opacity-0", "pointer-events-none", "translate-y-1");
      menu.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
      chevron.classList.add("rotate-180");
      trigger.setAttribute("aria-expanded", "true");
    };

    const isOpen = () => trigger.getAttribute("aria-expanded") === "true";

    const selectOption = (optionEl) => {
      const selectedValue = optionEl.dataset.value || "";
      const selectedLabel = optionEl.dataset.label || optionEl.textContent.trim();

      valueInput.value = selectedValue;
      label.textContent = selectedLabel;

      options.forEach((item) => {
        item.classList.remove("bg-[#ECE4D8]", "text-[#2F2A24]");
      });
      optionEl.classList.add("bg-[#ECE4D8]", "text-[#2F2A24]");

      closeMenu();
      trigger.focus();
    };

    trigger.addEventListener("click", () => {
      if (isOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMenu();
        options[0].focus();
      }
    });

    options.forEach((optionEl, index) => {
      optionEl.addEventListener("click", () => selectOption(optionEl));

      optionEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectOption(optionEl);
        }

        if (event.key === "ArrowDown") {
          event.preventDefault();
          const nextIndex = (index + 1) % options.length;
          options[nextIndex].focus();
        }

        if (event.key === "ArrowUp") {
          event.preventDefault();
          const prevIndex = (index - 1 + options.length) % options.length;
          options[prevIndex].focus();
        }

        if (event.key === "Escape") {
          event.preventDefault();
          closeMenu();
          trigger.focus();
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!selectRoot.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  });
}

function initializeAllLocations() {
  const root = document.getElementById("allLocationsRoot");

  if (!root || root.dataset.initialized === "true") {
    return;
  }

  root.dataset.initialized = "true";

  const locationGroups = [
    {
      title: "NOORD-HOLLAND",
      label: "Noord-Holland",
      visibleCount: 12,
      cities: [
        "Amsterdam",
        "Haarlem",
        "Amstelveen",
        "Zaandam",
        "Hoofddorp",
        "Schiphol",
        "Purmerend",
        "Beverwijk",
        "Alkmaar",
        "Hoorn",
        "Zandvoort",
        "Hilversum",
        "Edam",
        "Volendam",
        "Bussum",
      ],
    },
    {
      title: "ZUID-HOLLAND",
      label: "Zuid-Holland",
      visibleCount: 12,
      cities: [
        "Rotterdam",
        "Den Haag",
        "Leiden",
        "Delft",
        "Dordrecht",
        "Gouda",
        "Zoetermeer",
        "Schiedam",
        "Vlaardingen",
        "Noordwijk",
        "Katwijk",
        "Lisse",
        "Rijswijk",
        "Maassluis",
        "Alphen aan den Rijn",
      ],
    },
    {
      title: "UTRECHT",
      label: "Utrecht",
      visibleCount: 12,
      cities: [
        "Utrecht",
        "Amersfoort",
        "Zeist",
        "Nieuwegein",
        "Houten",
        "Woerden",
        "Veenendaal",
        "IJsselstein",
        "Soest",
        "Bunnik",
        "Breukelen",
        "De Bilt",
        "Maarssen",
        "Leusden",
        "Rhenen",
      ],
    },
    {
      title: "FLEVOLAND",
      label: "Flevoland",
      visibleCount: 5,
      cities: [
        "Almere",
        "Lelystad",
        "Dronten",
        "Emmeloord",
        "Zeewolde",
        "Urk",
        "Biddinghuizen",
        "Swifterbant",
      ],
    },
    {
      title: "OTHER CITIES",
      label: "Other cities",
      visibleCount: 5,
      toggleLabel: "Show more cities",
      cities: [
        "Arnhem",
        "Nijmegen",
        "Eindhoven",
        "Breda",
        "Zwolle",
        "Groningen",
        "Tilburg",
        "Maastricht",
        "Leeuwarden",
        "Dordrecht",
      ],
    },
  ];

  const cityItemClass =
    "text-[15px] lg:text-base times-font text-[#2E2C2A] leading-[100%]";

  const renderGroup = (group) => {
    const hiddenCities = group.cities.length - group.visibleCount;
    const toggleLabel = group.toggleLabel || `Show more cities in ${group.label}`;
    const collapseLabel = `Show fewer cities in ${group.label}`;

    const cityList = group.cities
      .map((city, index) => {
        const isHidden = index >= group.visibleCount;

        return `
          <li class="${cityItemClass} ${isHidden ? "hidden" : ""}" data-location-city-hidden="${isHidden}">
            ${city}
          </li>
        `;
      })
      .join("");

    const toggleButton =
      hiddenCities > 0
        ? `
          <button
            type="button"
            class="location-toggle inline-flex w-fit whitespace-nowrap text-sm lg:text-base text-[#8B7354] text-left mt-4"
            data-location-toggle
            aria-expanded="false"
            data-show-more="${toggleLabel} >"
            data-show-less="${collapseLabel} >"
          >
            ${toggleLabel} &gt;
          </button>
        `
        : "";

    return `
      <div class="flex h-full w-full flex-col items-start" data-location-column>
        <h2 class="text-xl lg:text-2xl leading-[100%] uppercase times-font mb-4">
          ${group.title}
        </h2>
        <div class="flex h-full w-full flex-col items-start border-b lg:border-none border-[#CEC8BF] pb-6 lg:pb-0">
          <ul class="space-y-1 border-l border-black/10 lg:border-none pl-2 lg:pl-0">${cityList}</ul>
          <div class="flex-1"></div>
          ${toggleButton}
        </div>
      </div>
    `;
  };

  const renderColumn = (groups, options = {}) => {
    const { stretchFirstGroup = false } = options;
    const columnGroups = groups.map(renderGroup).join("");

    if (groups.length === 1) {
      return columnGroups;
    }

    return `
      <div class="flex w-full flex-col items-start gap-6">
        ${groups
          .map((group, index) => {
            const isStretchFirstGroup = stretchFirstGroup && index === 0;

            return `
              <div class="${isStretchFirstGroup ? "flex-1" : ""} w-full">
                ${renderGroup(group)}
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  };

  root.innerHTML = `
    <div class="grid grid-cols-1 gap-y-12 gap-x-12 md:grid-cols-2 lg:grid-cols-4 items-stretch">
      ${renderColumn([locationGroups[0]])}
      ${renderColumn([locationGroups[1]])}
      ${renderColumn([locationGroups[2]])}
      ${renderColumn([locationGroups[3], locationGroups[4]], {
        stretchFirstGroup: true,
      })}
    </div>
  `;

  root.querySelectorAll("[data-location-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const columnGroup = button.closest("[data-location-column]");

      if (!columnGroup) {
        return;
      }

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const hiddenCities = columnGroup.querySelectorAll(
        "[data-location-city-hidden='true']",
      );

      hiddenCities.forEach((city) => {
        city.classList.toggle("hidden", isExpanded);
      });

      button.setAttribute("aria-expanded", String(!isExpanded));
      button.textContent = isExpanded
        ? button.dataset.showMore || button.textContent
        : button.dataset.showLess || button.textContent;
    });
  });
}

function initializeCoreLocationCards() {
  const cardGrid = document.getElementById("coreLocationGrid");

  if (!cardGrid) {
    return;
  }

  if (cardGrid.dataset.initialized === "true") {
    return;
  }

  cardGrid.dataset.initialized = "true";

  const profiles = [
    {
      id: 1,
      name: "Amsterdam",
      image: "/assets/images/locations.jpg",
    },
 
   
  ];

  const cardsMarkup = profiles
    .map(
      (profile, index) => `
        <div class="curated-profile-card relative rounded-[18.15px] overflow-hidden" data-card-index="${index}">
          <img
            src="${profile.image}"
            alt="${profile.name}"
            class="w-full h-[210px] lg:h-[455px] object-cover"
          />
          <div class="absolute bottom-0 w-full lg:h-[156.8px] overflow-hidden">
            <div
              class="absolute inset-0 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,white_60%,transparent)]"
            ></div>

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            ></div>

            <div
              class="relative flex flex-col justify-end h-full py-3 px-3 lg:px-[14.52px] text-white"
            >
              <h3
                class="text-center text-sm lg:text-2xl font-medium lg:mb-[9.81px] leading-[110%]"
              >
                ${profile.name}
              </h3>

            </div>
          </div>
        </div>
      `,
    )
    .join("");

  cardGrid.innerHTML = cardsMarkup;
}