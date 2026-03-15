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

const profileGalleryImages = [
  { src: "/assets/images/gallery/1.png", alt: "Gallery image 1" },
  { src: "/assets/images/gallery/2.png", alt: "Gallery image 2" },
  { src: "/assets/images/gallery/3.png", alt: "Gallery image 3" },
  { src: "/assets/images/gallery/4.png", alt: "Gallery image 4" },
  { src: "/assets/images/gallery/5.png", alt: "Gallery image 5" },
];

function renderProfileGallery() {
  const mobileTrack = document.getElementById("profile-gallery-track");
  const desktopGrid = document.getElementById("profile-gallery-desktop");

  if (!mobileTrack || !desktopGrid) {
    return;
  }

  mobileTrack.className =
    "flex gap-3.5 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

  mobileTrack.innerHTML = profileGalleryImages
    .map(
      (image) =>
        `<article class="shrink-0 basis-[82%] sm:basis-[56%] snap-start rounded-[14px] overflow-hidden bg-[#d9d0c4]"><img src="${image.src}" alt="${image.alt}" class="block h-[300px] w-full object-cover" /></article>`,
    )
    .join("");

  const desktopCols = [
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-6",
    "lg:col-span-6",
  ];
  desktopGrid.innerHTML = profileGalleryImages
    .map((image, idx) => {
      const colClass = desktopCols[idx] || "lg:col-span-4";
      return `<div class="${colClass}"><img src="${image.src}" alt="${image.alt}" class="h-full w-full object-cover" /></div>`;
    })
    .join("");
}

renderProfileGallery();

(() => {
  const MOBILE_LIMIT = 4;
  const profiles = [
    {
      id: 1,
      name: "Clara Bennett",
      bio: "This is not a bio. It's a context cue.",
      image: "/assets/images/curated/p1.jpg",
    },
    {
      id: 2,
      name: "Elena Moreau",
      bio: "Drawn to confidence, elegance, and quiet intensity.",
      image: "/assets/images/curated/p2.jpg",
    },
    {
      id: 3,
      name: "Sofia Laurent",
      bio: "I enjoy reflective moments and considered conversation.",
      image: "/assets/images/curated/p3.jpg",
    },
    {
      id: 4,
      name: "Amélie Roche",
      bio: "Natural ease, warm energy, and unforced connection.",
      image: "/assets/images/curated/p4.jpg",
    },
    {
      id: 5,
      name: "Isabella Cruz",
      bio: "Warm energy and natural connection.",
      image: "/assets/images/curated/p5.jpg",
    },
    {
      id: 6,
      name: "Lucia Ferri",
      bio: "Warm energy and natural connection.",
      image: "/assets/images/curated/p6.jpg",
    },
    {
      id: 7,
      name: "Valentina Ríos",
      bio: "I appreciate intimacy, softness, and presence.",
      image: "/assets/images/curated/p7.png",
    },
    {
      id: 8,
      name: "Leda Forsila",
      bio: "I appreciate intimacy, softness, and presence.",
      image: "/assets/images/curated/p8.jpg",
    },
    {
      id: 9,
      name: "Eva Lindström",
      bio: "Quiet confidence and meaningful atmosphere.",
      image: "/assets/images/curated/p9.jpg",
    },
    {
      id: 10,
      name: "Nina Holm",
      bio: "I'm drawn to simplicity and genuine attention.",
      image: "/assets/images/curated/p10.jpg",
    },
    {
      id: 11,
      name: "Alex Medila",
      bio: "I'm drawn to simplicity and genuine attention.",
      image: "/assets/images/curated/p11.jpg",
    },
    {
      id: 12,
      name: "Camila Ortega",
      bio: "Moments feel best when they're unhurried.",
      image: "/assets/images/curated/p12.jpg",
    },
    {
      id: 13,
      name: "Camila Ortega",
      bio: "Moments feel best when they're unhurried.",
      image: "/assets/images/curated/p13.jpg",
    },
    {
      id: 14,
      name: "Alex Medila",
      bio: "I'm drawn to simplicity and genuine attention.",
      image: "/assets/images/curated/p14.png",
    },
    {
      id: 15,
      name: "Nina Holm",
      bio: "I'm drawn to simplicity and genuine attention.",
      image: "/assets/images/curated/p15.jpg",
    },
    {
      id: 16,
      name: "Eva Lindström",
      bio: "Quiet confidence and meaningful atmosphere.",
      image: "/assets/images/curated/p16.jpg",
    },
  ];

  const cardGrid = document.getElementById("cardGrid2");
  const mobileButtonWrap = document.getElementById("mobileStickyBtn");
  const showMoreButton = mobileButtonWrap?.querySelector("button");

  if (!cardGrid) return;

  const cardsMarkup = profiles
    .map(
      (profile, index) => `
        <div class="curated-profile-card relative rounded-[18.15px] overflow-hidden" data-card-index="${index}">
          <img
            src="${profile.image}"
            alt="${profile.name}"
            class="w-full md:h-[310px] lg:h-[455px] object-cover"
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
                class="text-center lg:text-left text-sm lg:text-[21px] font-medium lg:mb-[9.81px] leading-[110%]"
              >
                ${profile.name}
              </h3>

              <p class="hidden lg:block text-[15px] leading-[110%] tracking-[-0.305px]">${profile.bio}</p>
            </div>
          </div>
        </div>
      `,
    )
    .join("");

  cardGrid.innerHTML = cardsMarkup;

  const cards = Array.from(cardGrid.querySelectorAll(".curated-profile-card"));
  let isExpanded = false;

  const applyCardLimit = () => {
    cards.forEach((card, index) => {
      const shouldHide = !isExpanded && index >= MOBILE_LIMIT;
      card.style.display = shouldHide ? "none" : "";
    });

    if (mobileButtonWrap) {
      mobileButtonWrap.style.display = isExpanded ? "none" : "";
    }
  };

  if (showMoreButton) {
    showMoreButton.addEventListener("click", () => {
      isExpanded = true;
      applyCardLimit();
    });
  }

  applyCardLimit();
})();

