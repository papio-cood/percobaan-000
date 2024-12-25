
// script.js
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Tampilkan/Sembunyikan menu
  hamburger.classList.toggle("is-active"); // Animasi hamburger
});