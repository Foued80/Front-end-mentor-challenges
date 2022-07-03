let header = document.getElementById("header");
let navToggle = document.getElementById("nav_toggle");
let navClose = document.getElementById("nav_close");
let main = document.getElementById("main");
let mainHero1 = document.getElementById("main_hero1");
let scrollLeft = document.getElementById("scroll_left");
let scrollRight = document.getElementById("scroll_right");
let heading = document.getElementById("heading");
let description = document.getElementById("description");
let imageIndex = 0;
let images = [];
let title = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];
let text = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

navToggle.addEventListener("click", () => {
  header.classList.toggle("nav_slide");
  main.classList.toggle("backdrop");
});
navClose.addEventListener("click", () => {
  header.classList.toggle("nav_slide");
  main.classList.toggle("backdrop");
});
scrollLeft.addEventListener("click", () => {
  imageIndex <= 0 ? (imageIndex = 2) : imageIndex--;
  mainHero1.style.backgroundImage = `url(${images[imageIndex]})`;
  heading.innerText = title[imageIndex];
  description.innerText = text[imageIndex];
});
scrollRight.addEventListener("click", () => {
  imageIndex >= 2 ? (imageIndex = 0) : imageIndex++;
  mainHero1.style.backgroundImage = `url(${images[imageIndex]})`;
  heading.innerText = title[imageIndex];
  description.innerText = text[imageIndex];
});

// from https://css-tricks.com/working-with-javascript-media-queries/

const mediaQuery = window.matchMedia("(min-width: 1440px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    images = [
      "/images/desktop-image-hero-1.jpg",
      "/images/desktop-image-hero-2.jpg",
      "/images/desktop-image-hero-3.jpg",
    ];
  } else {
    images = [
      "/images/mobile-image-hero-1.jpg",
      "/images/mobile-image-hero-2.jpg",
      "/images/mobile-image-hero-3.jpg",
    ];
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
