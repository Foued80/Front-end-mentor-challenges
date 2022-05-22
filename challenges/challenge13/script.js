const menuIcon = document.getElementById("nav-menu");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  if (navLinks.classList.contains("visible")) {
    navLinks.classList.remove("visible");
  } else {
    navLinks.classList.add("visible");
  }
});
