"use strict";

/////////// CUSTOM CURSOR ///////////

const cursorEl = document.querySelector(".inner");
const cursorEl2 = document.querySelector(".outer");
document.addEventListener("mousemove", function (e) {
  cursorEl.style.top = e.clientY + "px";
  cursorEl.style.left = e.clientX + "px";

  cursorEl2.style.top = e.clientY + "px";
  cursorEl2.style.left = e.clientX + "px";
});

/////////// GREETINGS ///////////

let myDate = new Date();
let hrs = myDate.getHours();

let greet;

if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.querySelector("#greeting").innerHTML = greet;

/////////// PAGE INDICATOR ///////////

const heroEl = document.getElementById("hero");
const aboutEl = document.getElementById("about");
const workEl = document.getElementById("work");
const collabEl = document.getElementById("collab");
const nameEl = document.getElementById("current-name");
let curName = "Animesh";

const sectionOptions = {
  rootMargin: "-200px 0px 0px 0px",
};
const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry);
      let cls = entry.target.id;
      document.querySelector(`.${cls}`).classList.add("active");
      nameEl.innerText = cls;
    }
    if (!entry.isIntersecting) {
      let cls = entry.target.id;
      document.querySelector(`.${cls}`).classList.remove("active");
    }
  });
},
sectionOptions);

sectionObserver.observe(heroEl);
sectionObserver.observe(aboutEl);
sectionObserver.observe(workEl);
sectionObserver.observe(collabEl);

/////////// SMOOTH SCROLLING FUNCTIONALITY FOR SAFARI ///////////

// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     //Scroll back to top
//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }

//     //Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({
//         behavior: "smooth",
//       });
//     }

//     //Close mobile navigation
//     if (link.classList.contains("main-nav-link")) {
//       headerEl.classList.toggle("nav-open");
//     }
//   });
// });

/////////// STICKY NAVIGATION ///////////

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("floating");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("floating");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-60px",
  }
);
obs.observe(heroEl);
