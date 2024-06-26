export default function showMobileNav() {
  const headerBtn = document.querySelector(".header__bars");

  const mobileNav = document.querySelector(".mobile__nav");

  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  let isMobileOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileOpen = !isMobileOpen;

    if (!isMobileOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  mobileLinks.forEach((links) => {
    links.addEventListener("click", () => {
      isMobileOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
}

