"use strict";

const header = document.querySelector("header");

const slideBtn = document.querySelector(".slideBtn");
const slideBar = document.querySelector(".slideBar");

const barsIcon = document.querySelector(".bars");

const aboutEl = document.querySelector(".about");
const myWorkEl = document.querySelector(".my-work");
const contactsEl = document.querySelector(".contacts");
const skillsEl = document.querySelector(".skills");

let state = "vissple";

slideBtn.addEventListener("click", () => {
  console.log(state);
  if (state === "hide") {
    slideBar.style.transform = "translateX(0px)";
    state = "vissple";
    barsIcon.classList.remove("fa-bars");
    barsIcon.classList.add("fa-circle-xmark");
  } else if (state === "vissple") {
    slideBar.style.transform = "translateX(120px)";
    state = "hide";
    barsIcon.classList.add("fa-bars");
    barsIcon.classList.remove("fa-circle-xmark");
  }
});

function about() {
  aboutEl.style.transform = "translateX(0px)";
  myWorkEl.style.transform = "translateY(1000px)";
  contactsEl.style.transform = "translateX(1350px)";
  skillsEl.style.transform = "translateY(1000px)";

  slideBar.style.backgroundColor = "#fcc801";
  header.style.backgroundColor = "#fcc801";
}
function myWork() {
  myWorkEl.style.transform = "translateY(0px)";
  aboutEl.style.transform = "translateX(-1322px)";
  contactsEl.style.transform = "translateX(1350px)";
  skillsEl.style.transform = "translateY(1000px)";
}
function contacts() {
  aboutEl.style.transform = "translateX(-1322px)";
  myWorkEl.style.transform = "translateY(1000px)";
  skillsEl.style.transform = "translateY(1000px)";
  contactsEl.style.transform = "translateX(0px)";

  slideBar.style.backgroundColor = "#0da9d6";
  header.style.backgroundColor = "#0da9d6";
}
function skills() {
  aboutEl.style.transform = "translateX(-1322px)";
  myWorkEl.style.transform = "translateY(1000px)";
  contactsEl.style.transform = "translateX(1350px)";
  skillsEl.style.transform = "translateY(0px)";

  slideBar.style.backgroundColor = "#00dfc0";
  header.style.backgroundColor = "#00dfc0";
}
