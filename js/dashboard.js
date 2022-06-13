let logo = document.querySelector(".logo");
let menuBar = document.querySelector(".fa-bars");
let sideBar = document.querySelector(".sidebar")

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active")
    sideBar.classList.toggle("active")

});
