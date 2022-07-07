const button = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});