//* Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navSide = document.querySelector(".nav-side");

//* menampilkan sidebar tersembunyi ketika diklik
hamburgerMenu.addEventListener("click", () => {
  navSide.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  if (hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.parentNode.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    hamburgerMenu.parentNode.style.transition = "1s";
  } else {
    hamburgerMenu.parentNode.style.backgroundColor = "var(--bgmain)";
  }
});

