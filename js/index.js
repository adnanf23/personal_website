const notif = document.getElementById("alert")
const popupCv = document.getElementById("popup-cv")
const popupCertificate = document.getElementById("main-contain")
const cardCertif = document.getElementById("card-certificate")


// POPUP OPEN CV
function openCv(){
if(popupCv){
  popupCv.style.visibility = "visible"
}
  document.body.classList.add("disableScroll")
}

// CLOSE OPEN CV
function closeCv(){
  if(popupCv){
    popupCv.style.visibility = "hidden"
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
  if(popupCertificate){
    popupCertificate.style.visibility = "visible"
  }
  document.body.classList.add("disableScroll")
}


// CLOSE POPUP CERTIFICATE
function closeCertificate(){
  if(popupCertificate){
    popupCertificate.style.visibility = "hidden"
  }
  if(cardCertif){
    cardCertif.style.display = "none"
  }
  document.body.classList.remove("disableScroll")
}