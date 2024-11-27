// Newsletter window

const openNewsBtns = document.querySelectorAll(".newsletterLink");
const closeNewsBtn = document.querySelector(".close-news-btn");

openNewsBtns.forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        const menu = document.querySelector(".news-overlay");
        menu.classList.toggle("menu-show");
    });
});


if (closeNewsBtn) {
    closeNewsBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const menu = document.querySelector(".news-overlay");
        menu.classList.toggle("menu-show");
    });
}




//Mobile menu
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
