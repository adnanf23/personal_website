const navMenu = document.getElementById("navbar");
const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close");


// Open Navbar
openMenu.addEventListener("click", function () {
  navMenu.style.left = "0px";
})

// Close Nabara
closeMenu.addEventListener("click", function () {
  navMenu.style.left = "-200px";
})