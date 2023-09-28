"use strict";

const navItems = document.querySelector('.nav__items');
const navBurger = document.querySelector('.nav__burger');

navBurger.addEventListener('click', () => {
    navItems.classList.toggle('active');
    navBurger.classList.toggle('active');
});






// const navBurger = document.querySelector(".nav-burger");
// const navItems = document.querySelector(".nav__items");

// navBurger.addEventListener("click", function() {
//     navBurger.classList.toggle("active");
//     navItems.classList.toggle("active");
// });