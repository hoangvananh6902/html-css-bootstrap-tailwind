// /////////////////slider //////////////

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
// animation number
function animateNumber(
  finalNumber,
  duration = 5000,
  startNumber = 0,
  callback
) {
  const startTime = performance.now();
  function updateNumber(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime > duration) {
      callback(finalNumber);
    } else {
      const rate = elapsedTime / duration;
      const currentNumber = Math.round(rate * finalNumber);
      callback(currentNumber);
      requestAnimationFrame(updateNumber);
    }
  }
  requestAnimationFrame(updateNumber);
}

document.addEventListener("DOMContentLoaded", function () {
  animateNumber(94, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById(
      "fact-succesed-students"
    ).innerText = `${formattedNumber}% `;
  });

  animateNumber(126, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("fact-current-teachers").innerText =
      formattedNumber;
  });

  animateNumber(2345, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("fact-new-students").innerText = formattedNumber;
  });
  animateNumber(32, 3000, 0, function (number) {
    const formattedNumber = number.toLocaleString();
    document.getElementById("fact-awards").innerText = formattedNumber;
  });
});
// menu scrollbar
const header = document.querySelector('.sticky-top');
// const body = document.querySelector('body');
const navbarBrand = document.querySelector(".navbar-brand")
const navLink = document.querySelectorAll('.nav-link')
const changeColor = (element,color) => element.style = `color: ${color} !important`

window.onscroll = () =>{
  if(window.scrollY >300){
  header.classList.add("navbar-sticky")
  changeColor(navbarBrand,"black")
  // navbarBrand.style = "color: black !important";
  navLink.forEach(element => {
    // element.style = "color: black !important"
    changeColor(element,"black")
  });
}else{
  header.classList.remove("navbar-sticky");
  changeColor(navbarBrand,"white")
  navLink.forEach(element => {
    // element.style = "color: black !important"
    changeColor(element,"white")
  });
}}


