
// ================= MENU MOBILE =================

const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")

toggle.addEventListener("click", () => {

nav.classList.toggle("active")

})


// ================= SCROLL REVEAL =================

function reveal(){

const reveals = document.querySelectorAll(".reveal")

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight
let elementTop = reveals[i].getBoundingClientRect().top
let elementVisible = 150

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll", reveal)