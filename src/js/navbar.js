const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//// new

const landscapeMQ = window.matchMedia("(min-width: 950px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    var navOffset = $(".nav"); //get offset of second div
    var offset = navOffset.outerHeight(); //check for top property
    $(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > offset) {
          nav.classList.add("scroll");
          navBar.classList.add("hidden");
          hamburger.classList.add("revealed");
          hamburger.addEventListener("click", () => {
            nav.classList.remove("scroll");
            navBar.classList.remove("hidden");
            hamburger.classList.remove("revealed");
            hamburger.classList.remove("active");
          });
        } else {
          nav.classList.remove("scroll");
          navBar.classList.remove("hidden");
          hamburger.classList.remove("revealed");
        }
      });
    });
  } else {
    return;
  }
}

// Register event listener
landscapeMQ.addEventListener("change", handleTabletChange);

// Initial check
handleTabletChange(landscapeMQ);
