// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Saat menu di klik dibagian dalam sidebar
document.querySelector("#z-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di bagian luar sidebar
const menu = document.querySelector("#z-menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && navbarNav.contains(e.target)) {
    !navbarNav.classList.remove("active");
  }
});
