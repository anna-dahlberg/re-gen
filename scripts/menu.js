const closeBtn = document.querySelector(".close-menu-btn");
const openMenu = document.querySelector(".nav-button-menu");

openMenu.addEventListener("click", function(event) {
    event.preventDefault();
    const menu = document.querySelector(".nav-overlay");
    menu.classList.toggle("menu-show");
});

closeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const menu = document.querySelector(".nav-overlay");
    menu.classList.toggle("menu-show");
});