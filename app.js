const section = document.querySelector("section")
const toggleMenu = document.querySelector(".toggle")

toggleMenu.addEventListener("click",function(){
    this.classList.toggle("active");
    section.classList.toggle("active")
});

