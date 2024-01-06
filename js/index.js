const notif = document.getElementById("alert")
const popupCv = document.getElementById("popup-cv")
const popupCertificate = document.getElementById("main-contain")
const header = document.getElementById("header")
const medsoc = document.getElementById("medsoc")
const navbar = document.getElementById("navbar")
const cvButton = document.getElementById("openCV")
const certifButton = document.getElementById("openCertif")



// POPUP OPEN CV
cvButton.addEventListener("click", function (){
  if(popupCv){
    popupCv.style.visibility = "visible"
    header.style.zIndex = "0"
    medsoc.style.zIndex = "-10"
    document.body.classList.add("disableScroll")
  }
})

// CLOSE  CLOSE CV
function closeCv(){
  if(popupCv){
    popupCv.style.visibility = "hidden"
    header.style.zIndex = "100"
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
certifButton.addEventListener("click", function (){
  if(popupCertificate){
    popupCertificate.style.visibility = "visible";
    popupCertificate.style.display = "inline";
    header.style.zIndex = "0";
    medsoc.style.zIndex = "-10";
    document.body.classList.add("disableScroll")
  }
})



// CLOSE POPUP CERTIFICATE
function closeCertificate() {
  if (popupCertificate) {
    popupCertificate.style.visibility = "hidden";
    popupCertificate.style.display = "none";
    header.style.zIndex = "100";
    medsoc.style.zIndex = "2";
    document.body.classList.remove("disableScroll");
  }
}


// HEADER NAVBAR
window.addEventListener("scroll", function (){
  if(this.window.scrollY > 0){
    header.classList.add("headerScroled")
  } else {
    header.classList.remove("headerScroled")
  }
})

