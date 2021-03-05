// import '../scss/main.scss'
// import '../css/main.css'

var home = document.querySelector('.home');
var menuIcon = document.querySelector('.menu-icon');
var bars = document.querySelector('.fa-bars');
var times = document.querySelector('.fa-times');

menuIcon.addEventListener("click", toggleMenu);

function toggleMenu(){
  if (home.classList.contains("menu-active")) {
    home.classList.remove("menu-active");
    bars.classList.remove("fa-times");
    bars.classList.add("fa-bars");

  } else {
    home.classList.add("menu-active");
    bars.classList.add("fa-times");
    bars.classList.remove("fa-bars");

  }
}
