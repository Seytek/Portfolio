"use strict";


const navBurger = document.querySelector(".nav-burger");
const navItems = document.querySelector(".nav__items");

navBurger.addEventListener("click", function() {
    navBurger.classList.toggle("active");
    navItems.classList.toggle("active");
});