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
        `<article class="shrink-0 basis-[82%] sm:basis-[56%] snap-start rounded-[14px] overflow-hidden bg-[#d9d0c4]"><img src="${image.src}" alt="${image.alt}" class="block h-[400px] w-full object-cover" /></article>`,
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
