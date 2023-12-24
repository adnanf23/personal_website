const notif = document.getElementById("alert")
const popupCv = document.getElementById("popup-cv")
const popupCertificate = document.getElementById("main-contain")
const header = document.getElementById("header")
const medsoc = document.getElementById("medsoc")
const navbar = document.getElementById("navbar")

// POPUP OPEN CV
function openCv(){
if(popupCv){
  popupCv.style.visibility = "visible"
}
if(header){
  header.style.zIndex = "0"
}
if(medsoc){
  medsoc.style.zIndex = "-10"
}
  document.body.classList.add("disableScroll")
}

// CLOSE  CLOSE CV
function closeCv(){
  if(popupCv){
    popupCv.style.visibility = "hidden"
  }
  if(header){
    header.style.zIndex = "100"
  }
  if(medsoc){
    medsoc.style.zIndex = "2"
  }
  document.body.classList.remove("disableScroll")
}

// OPEN NOTIF DOWNLOAD
function openNotif(){
  if(notif){
    notif.style.visibility  = "visible"
  }
}


// CLOSE NOTIF AND CV
function closeNotif(){
  if(notif){
    notif.style.visibility  = "hidden"    
  } 
  if(popupCv){
    popupCv.style.visibilty = "hidden"
  }
}


// OPEN POPUP CERTIFICATE
function openCertificate(){
  document.body.classList.add("disableScroll")
  if (header) {
    header.style.zIndex = "0";
  }
  if (medsoc) {
    medsoc.style.zIndex = "-10";
  }
  if(popupCertificate) {
    popupCertificate.style.visibility = "visible";
  }
}


// CLOSE POPUP CERTIFICATE
function closeCertificate() {
  if (header) {
    header.style.zIndex = "100";
  }
  if (medsoc) {
    medsoc.style.zIndex = "2";
  }
  if (popupCertificate) {
    popupCertificate.style.visibility = "hidden";
  }

  document.body.classList.remove("disableScroll");
}



// HEADER NAVBAR
window.addEventListener("scroll", function (){
  if(this.window.scrollY > 0){
    header.classList.add("headerScroled")
  } else {
    header.classList.remove("headerScroled")
  }
})

