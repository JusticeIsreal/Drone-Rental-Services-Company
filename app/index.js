// for toggle bar effect 
let menuBar = document.querySelector(".bx-menu");
let leftNav = document.querySelectorAll(".left");
let rightNav = document.querySelectorAll(".right");

leftNav.forEach(function (nav) {
  menuBar.addEventListener("click", () => {
    nav.classList.toggle("active");
      console.log(leftNav);
      menuBar.classList.toggle("active");
  });
});
rightNav.forEach(function (nav) {
  menuBar.addEventListener("click", () => {
    nav.classList.toggle("active");
    console.log(leftNav);
  });
});


