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