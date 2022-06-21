// function to toggle side nav for tablet and mobile view
let sideNav = document.querySelector(".sidebar-left");
let menuBtn = document.querySelector(".bx-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("rotate");
  sideNav.classList.toggle("open");
});

// function for card effect
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

// card names
let regularTxt = document.querySelector(".regular-txt");
let standardTxt = document.querySelector(".standard-txt");
let premiumTxt = document.querySelector(".premium-txt");

// cards drone
let regular = document.querySelector(".regular");
let standard = document.querySelector(".standard");
let premium = document.querySelector(".premium");

box1.addEventListener("click", () => {
  regularTxt.classList.toggle("grade-txt");
  standardTxt.classList.remove("grade-txt");
  premiumTxt.classList.remove("grade-txt");
  regular.classList.toggle("drone-ani");
  standard.classList.remove("drone-ani");
  premium.classList.remove("drone-ani");
});
box2.addEventListener("click", () => {
  standardTxt.classList.toggle("grade-txt");
  premiumTxt.classList.remove("grade-txt");
  regularTxt.classList.remove("grade-txt");
  standard.classList.toggle("drone-ani");
  regular.classList.remove("drone-ani");
  premium.classList.remove("drone-ani");
});
box3.addEventListener("click", () => {
  premiumTxt.classList.toggle("grade-txt");
  standardTxt.classList.remove("grade-txt");
  regularTxt.classList.remove("grade-txt");
  premium.classList.toggle("drone-ani");
  standard.classList.remove("drone-ani");
  regular.classList.remove("drone-ani");
});
// show form

let orderBtn = document.querySelector(".select-drone");
let formContainer = document.querySelector(".form-con");
let formContainerRemove = document.querySelector(".bx-x");

orderBtn.addEventListener("click", () => {
  formContainer.classList.toggle("ope");
});
formContainerRemove.addEventListener("click", () => {
  formContainer.classList.toggle("ope");
});

// jkhjhjhkjhjkhjkl


 google.charts.load("current", { packages: ["gauge"] });
 google.charts.setOnLoadCallback(drawChart);

 function drawChart() {
   var data = google.visualization.arrayToDataTable([
     ["Label", "Value"],
     ["Memory", 80],
     ["CPU", 55],
     ["Network", 68],
   ]);

   var options = {
     width: 400,
     height: 120,
     redFrom: 90,
     redTo: 100,
     yellowFrom: 75,
     yellowTo: 90,
     minorTicks: 5,
   };

   var chart = new google.visualization.Gauge(
     document.getElementById("chart_div")
   );

   chart.draw(data, options);

   setInterval(function () {
     data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
     chart.draw(data, options);
   }, 3000);
   setInterval(function () {
     data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
     chart.draw(data, options);
   }, 5000);
   setInterval(function () {
     data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
     chart.draw(data, options);
   }, 2000);
 }