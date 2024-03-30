const navMenu = document.getElementById("navbar");
const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close");
const header = document.getElementById("header");
const downloadButton = document.getElementById("downBtn");
const downloadedCv = document.querySelectorAll(".downloaded");
const openCvButton = document.getElementById("openCv");
const closeCvButton = document.getElementById("closeCv");

window.addEventListener("scroll", function (){
  if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled")
  }   
})
function openCv(){
  const curriculumVitae = document.getElementById("cv")

  curriculumVitae.style.display = "block"
}

function closeCv(){
  const curriculumVitae = document.getElementById("cv")

  curriculumVitae.style.display = "none"
}

function openDownload(){
  const downloadCv = document.getElementById("download")

  downloadCv.style.display = "block"
}

function closeDownload(){
  const downloadCv = document.getElementById("download")

  downloadCv.style.display = "none"
}

downloadButton.addEventListener("click", () => {
  openDownload();
})

downloadedCv.forEach(button => {
  button.addEventListener("click", () => {
    closeCv();
    closeDownload();
  });
});

openCvButton.addEventListener("click", () => {
  openCv()
})

closeCvButton.addEventListener("click", () => {
  closeCv()
})






// Open Navbar
openMenu.addEventListener("click", function () {
  navMenu.style.left = "0px";
})

// Close Nabara
closeMenu.addEventListener("click", function () {
  navMenu.style.left = "-300px";
})

