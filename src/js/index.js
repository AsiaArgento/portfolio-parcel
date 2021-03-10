// import '../scss/main.scss'
// import '../css/main.css'

var home = document.querySelector('.home');
var contact = document.querySelector('.contact');
var resume = document.querySelector('.resume');
var portfolio = document.querySelector('.portfolio');
var menuIcon = document.querySelector('.menu-icon');
var bars = document.querySelector('.fa-bars');
var times = document.querySelector('.fa-times');

menuIcon.addEventListener("click", toggleMenu);
menuIcon.addEventListener("click", toggleMenuContact);
menuIcon.addEventListener("click", toggleMenuResume);
menuIcon.addEventListener("click", toggleMenuPortfolio);

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
function toggleMenuContact(){
  if (contact.classList.contains("menu-active")) {
    contact.classList.remove("menu-active");
    bars.classList.remove("fa-times");
    bars.classList.add("fa-bars");

  } else {
    contact.classList.add("menu-active");
    bars.classList.add("fa-times");
    bars.classList.remove("fa-bars");

  }
}
function toggleMenuResume(){
  if (resume.classList.contains("menu-active")) {
    resume.classList.remove("menu-active");
    bars.classList.remove("fa-times");
    bars.classList.add("fa-bars");

  } else {
    resume.classList.add("menu-active");
    bars.classList.add("fa-times");
    bars.classList.remove("fa-bars");

  }
}
function toggleMenuPortfolio(){
  if (portfolio.classList.contains("menu-active")) {
    portfolio.classList.remove("menu-active");
    bars.classList.remove("fa-times");
    bars.classList.add("fa-bars");

  } else {
    portfolio.classList.add("menu-active");
    bars.classList.add("fa-times");
    bars.classList.remove("fa-bars");

  }
}
