const button = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("absolute");
    menu.classList.toggle("w-full");
});