(() => {
  const profiles = [
    { id: 1, name: "Clara Bennett", bio: "This is not a bio. It’s a context cue.", image: "/assets/images/curated/p1.jpg" },
    { id: 2, name: "Ethan Cole", bio: "Creative strategist and thinker.", image: "/assets/images/curated/p2.jpg" },
    { id: 3, name: "Sophia Lane", bio: "Design is intelligence made visible.", image: "/assets/images/curated/p3.jpg" },
    { id: 4, name: "Liam Carter", bio: "Building digital experiences.", image: "/assets/images/curated/p4.jpg" },
    { id: 5, name: "Olivia Brooks", bio: "Minimalism with purpose.", image: "/assets/images/curated/p5.jpg" },
    { id: 6, name: "Noah Turner", bio: "Frontend developer & UI lover.", image: "/assets/images/curated/p6.jpg" },
    { id: 7, name: "Ava Mitchell", bio: "Brand storyteller.", image: "/assets/images/curated/p7.png" },
    { id: 8, name: "James Parker", bio: "Turning ideas into impact.", image: "/assets/images/curated/p8.jpg" },
    { id: 9, name: "Isabella Reed", bio: "Creative problem solver.", image: "/assets/images/curated/p9.jpg" },
    { id: 10, name: "Benjamin Scott", bio: "Passionate about innovation.", image: "/assets/images/curated/p10.jpg" },
    { id: 11, name: "Mia Collins", bio: "Design-driven mindset.", image: "/assets/images/curated/p11.jpg" },
    { id: 12, name: "Lucas Adams", bio: "Crafting seamless interfaces.", image: "/assets/images/curated/p12.jpg" },
    { id: 13, name: "Charlotte Hill", bio: "Elevating digital brands.", image: "/assets/images/curated/p13.jpg" },
    { id: 14, name: "Henry Watson", bio: "Strategic creative direction.", image: "/assets/images/curated/p14.png" },
    { id: 15, name: "Amelia Wright", bio: "User-first design thinker.", image: "/assets/images/curated/p15.jpg" },
    { id: 16, name: "Daniel Harris", bio: "Building meaningful products.", image: "/assets/images/curated/p16.jpg" }
  ];

  const cardGrid = document.getElementById("cardGrid");
  if (!cardGrid) return;

  profiles.forEach((profile) => {
    const card = `
      <div class="relative rounded-[18.15px] overflow-hidden">
        <img
          src="${profile.image}"
          alt="${profile.name}"
          class="w-full h-[455px] object-cover"
        />
        <div
          class="absolute w-full bottom-0 bg-gradient-to-t from-[#38383899] to-transparent backdrop-blur-[2px] h-[156.08px] flex flex-col justify-end px-4 py-3 text-white"
        >
          <h3 class="text-[21px] font-medium leading-[110%] mb-2">
            ${profile.name}
          </h3>
          <p class="text-[15px] leading-[110%]">
            ${profile.bio}
          </p>
        </div>
      </div>
    `;

    cardGrid.innerHTML += card;
  });
})();
