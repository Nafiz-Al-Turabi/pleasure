const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const navbar = document.querySelector("nav");
const body = document.body;

function openMenu() {
  mobileMenu.classList.remove("-translate-x-[101%]");
  overlay.classList.remove("hidden");
  body.classList.add("overflow-hidden"); 
}

function closeMenu() {
  mobileMenu.classList.add("-translate-x-[101%]");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

function handleNavbarScroll() {
  if (!navbar) return;

  const isMobile = window.matchMedia("(max-width: 1023px)").matches;
  const isScrolled = navbar.classList.contains("nav-scrolled");

  if (window.scrollY > 50) {
    navbar.classList.remove("nav-returning");
    navbar.classList.add("nav-scrolled");
    navbar.classList.remove("nav-top");
  } else {
    if (isMobile && isScrolled) {
      navbar.classList.add("nav-returning");
    } else {
      navbar.classList.remove("nav-returning");
    }
    navbar.classList.add("nav-top");
    navbar.classList.remove("nav-scrolled");
  }
}

window.addEventListener("scroll", handleNavbarScroll, { passive: true });
handleNavbarScroll();

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);
