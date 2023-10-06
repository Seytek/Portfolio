"use strict";

const navItems = document.querySelector(".nav__items");
const navBurger = document.querySelector(".nav__burger");
const moreBtn = document.querySelector(".btn-more");
const scrollers = document.querySelectorAll(".scroller");
const scrollerActive = document.getElementById("scroller");
let isClickedOnce = false; // flag for animation function, it'll limit to call the function
const scrollerInner = document.querySelector(".scroller__inner");

// scroller stops on hover
scrollerInner.addEventListener("mouseenter", () => {
  scrollerInner.style.animationPlayState = "paused";
});
scrollerInner.addEventListener("mouseleave", () => {
  scrollerInner.style.animationPlayState = "running";
});

// burger button opens menu
navBurger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  navBurger.classList.toggle("active");
});

// it opens section with other projects onClick and starts scroller animation
moreBtn.addEventListener("click", () => {
  scrollerActive.classList.toggle("active");

  if (
    !isClickedOnce &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    addAnimation();
    isClickedOnce = true;
  }
});

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = document.querySelector(".scroller__inner");
    // need to get the content of the .scroller__inner
    // add array.from so data won't change later
    const scrollerContent = Array.from(scrollerInner.children);

    // making a duplicate of our content, so there won't be any blank space
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      // make sure the duplicated content won't show on screen reader
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
