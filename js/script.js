"use strict";

const navItems = document.querySelector('.nav__items');
const navBurger = document.querySelector('.nav__burger');

const scrollers = document.querySelectorAll('.scroller');

navBurger.addEventListener('click', () => {
    navItems.classList.toggle('active');
    navBurger.classList.toggle('active');
});



if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
         scroller.setAttribute('data-animated', true);

         const scrollerInner = document.querySelector('.scroller__inner');
         // need to get the content of the .scroller__inner
         // add array.from so data won't change later
         const scrollerContent = Array.from(scrollerInner.children);

        // making a duplicate of our content, so there won't be any blank space
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            // make sure the duplicated content won't show on screen reader
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);

        })

    })
}