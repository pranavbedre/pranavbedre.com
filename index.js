"use strict";

const navBtn = document.querySelector(".navbtn-container");
const nav = document.querySelector(".nav-container");
const line = document.querySelectorAll(".line");
const navtl = gsap.timeline();
let showNavbar = false;

navtl.to(nav, {
  clipPath: "circle(100% at 50% 50%)",
  duration: 0.3,
});

navtl.pause();

function sideBar(showNavbar) {
  if (showNavbar) {
    line.forEach((i) => {
      // changes inner line color of menu btn
      i.style.borderColor = "black";
    });
    navBtn.style.borderColor = "black";
    navtl.play();
  } else {
    line.forEach((i) => {
      i.style.borderColor = "white";
    });
    navBtn.style.borderColor = "white";
    navtl.reverse();
  }
}

const isTouchDevice = () => {
  return window.matchMedia("(pointer: coarse)").matches; // if true
};

if (!isTouchDevice()) {
  navBtn.addEventListener("mouseenter", function () {
    sideBar(true);
  });

  nav.addEventListener("mouseleave", function () {
    sideBar(false);
  });
} else {
  navBtn.addEventListener("click", function () {
    showNavbar = !showNavbar;
    sideBar(showNavbar);
  });
}
