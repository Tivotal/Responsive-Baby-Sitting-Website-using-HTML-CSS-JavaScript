/* Created by Tivotal */

let btn = document.querySelector(".fa-bars");
let menu = document.querySelector(".menu");
let menuLink = document.querySelectorAll(".menu a");

btn.onclick = () => {
  btn.classList.toggle("fa-times");
  menu.classList.toggle("active");
};

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    btn.onclick();
  });
});

window.onscroll = () => {
  btn.classList.remove("fa-times");
  menu.classList.remove("active");
};
