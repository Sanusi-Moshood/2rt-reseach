
// NAV MENU 
var burger = document.querySelector('.burger');
var nav = document.querySelector(".nav-links");
var icon = document.querySelector('.icon').src

var Toggle = false

burger.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click')
    nav.classList.toggle('nav-active');
   if (Toggle === false){
    document.querySelector('.icon').src = "Frame 38.svg"
   }else {
    document.querySelector('.icon').src = "Frame 37.svg"
   }
    
   Toggle = !Toggle
})