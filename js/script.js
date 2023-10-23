// Toggle Class Active //
const navbarNav = document.querySelector(".navbar-nav");
//Hamburger Menu Di Click//
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar Sidebar untuk menghilangkan Nav//
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
