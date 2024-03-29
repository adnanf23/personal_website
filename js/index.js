const navMenu = document.getElementById("navbar");
const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close");
const header = document.getElementById("header");

window.addEventListener("scroll", function (){
  if (window.scrollY > 10) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled")
  }   
})


// Open Navbar
openMenu.addEventListener("click", function () {
  navMenu.style.left = "0px";
})

// Close Nabara
closeMenu.addEventListener("click", function () {
  navMenu.style.left = "-300px";
})

