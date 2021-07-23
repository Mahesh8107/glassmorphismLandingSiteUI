const section = document.querySelector("section")
const toggleMenu = document.querySelector(".toggle")

toggleMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    section.classList.toggle("active")
});

// Preload setup ////
window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.style.opacity = "0";
    section.style.opacity = "1";
})

