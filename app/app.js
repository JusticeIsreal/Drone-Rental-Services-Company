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


//  bar chart 

  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChar);
      function drawChar() {
        var data = google.visualization.arrayToDataTable([
          ['Dinosaur', 'Length'],
          ['Acrocanthosaurus (top-spined lizard)', 12.2],
          ['Albertosaurus (Alberta lizard)', 9.1],
          ['Allosaurus (other lizard)', 12.2],
          ['Apatosaurus (deceptive lizard)', 22.9],
          ['Archaeopteryx (ancient wing)', 0.9],
          ['Argentinosaurus (Argentina lizard)', 36.6],
          ['Baryonyx (heavy claws)', 9.1],
          ['Brachiosaurus (arm lizard)', 30.5],
          ['Ceratosaurus (horned lizard)', 6.1],
          ['Coelophysis (hollow form)', 2.7],
          ['Compsognathus (elegant jaw)', 0.9],
          ['Deinonychus (terrible claw)', 2.7],
          ['Diplodocus (double beam)', 27.1],
          ['Dromicelomimus (emu mimic)', 3.4],
          ['Gallimimus (fowl mimic)', 5.5],
          ['Mamenchisaurus (Mamenchi lizard)', 21.0],
          ['Megalosaurus (big lizard)', 7.9],
          ['Microvenator (small hunter)', 1.2],
          ['Ornithomimus (bird mimic)', 4.6],
          ['Oviraptor (egg robber)', 1.5],
          ['Plateosaurus (flat lizard)', 7.9],
          ['Sauronithoides (narrow-clawed lizard)', 2.0],
          ['Seismosaurus (tremor lizard)', 45.7],
          ['Spinosaurus (spiny lizard)', 12.2],
          ['Supersaurus (super lizard)', 30.5],
          ['Tyrannosaurus (tyrant lizard)', 15.2],
          ['Ultrasaurus (ultra lizard)', 30.5],
          ['Velociraptor (swift robber)', 1.8]]);

        var options = {
          title: 'Lengths of dinosaurs, in meters',
          legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('chart_di'));
        chart.draw(data, options);
      }