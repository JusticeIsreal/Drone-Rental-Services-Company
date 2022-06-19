let bt = document.querySelector(".sidebar-left");
let btn1 = document.querySelector(".bx-menu");
let x = 55;

btn1.addEventListener("click", () => {
  console.log("boy");
  btn1.classList.toggle("rotate");
  bt.classList.toggle("open");
});
