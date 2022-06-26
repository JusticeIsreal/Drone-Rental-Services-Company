// create API for the drone details
const detailsApi = [
  {
    id: 1,
    droneName: "...",
    class: "...",
    serialNo: "...",
    weightModel: "...",
    weightLimit: "...",
    batteryCapacity: "...",
    flightTime: "...",
    mP: "...",
    POV: "...",
    RES: "...",
    MD: "...",
    time: "...",
    tmp: "...",
    vlt: "...",
    state: "...",
  },
  {
    id: 2,
    droneName: "Static Tropers",
    class: "REGULAR",
    serialNo: "025",
    weightModel: "Light Weight",
    weightLimit: "250g",
    batteryCapacity: "3000 mAh",
    flightTime: "1hr : 30min  flight time",
    mP: "35 MP",
    POV: "18* X 28*",
    RES: "380 x 410",
    MD: "Sandard",
    time: "1hr : 30min ",
    tmp: "7 deg-C",
    vlt: "28.5 V",
    state: "IDLE ...",
  },
  {
    id: 3,
    droneName: "StrinCode Air Drift",
    class: "STANDARD",
    serialNo: "010",
    weightModel: "medium Weight",
    weightLimit: "350g",
    batteryCapacity: "5000 mAh",
    flightTime: "2hr flight time",
    mP: "45 MP",
    POV: "28* X 36*",
    RES: "400* x 510*",
    MD: "Panasonic",
    time: "3 hours",
    tmp: "6 deg-C",
    vlt: "34.5 V",
    state: "IDLE ...",
  },
  {
    id: 4,
    droneName: "JBlaze Air drone",
    class: "PREMIUM",
    serialNo: "169",
    weightModel: "Heavy Weight",
    weightLimit: "500g",
    batteryCapacity: "5000 mAh",
    flightTime: "4 hrs flight time",
    mP: "75 MP",
    POV: "50* X 68*",
    RES: "580* x 710*",
    MD: "Thermal",
    time: "4 hours",
    tmp: "5 deg-C",
    vlt: "45.5 V",
    state: "IDLE ...",
  },
];

// call respective sections container
let droneClassCon = document.getElementById("class");
let droneNameCon = document.querySelector(".name-con");
let cameraSpecCon = document.querySelector(".camera-spec");
let cameraSpecCon2 = document.querySelector(".camera-spec2");
let droneStateCon = document.querySelector(".drone-state");

// create empty string value to loop array

let obj = "0";
// function to set all values when called upon
const displayData = (details) => {
  let datas = details[obj];

  // console.log(datas);
  let droneClass = `<span>${datas.class} </span>`;
  let droneName = `<div class="name-con">
                  <h3>${datas.droneName}: <span>${datas.serialNo}</span></h3>
                  <h4>Weight model : <span>${datas.weightModel}</span></h4>
                  <h4>Weight limit : <span>${datas.weightLimit}</span></h4>
                  <h4>${datas.batteryCapacity} : <span>${datas.flightTime}</span></h4>

                  <h5>Flight time of 2 hrs remaining</h5>
                </div>`;
  let cameraSpec = `<class="camera-spec">
                <h3><i class="bx bx-camera-movie"></i>Camera type</h3>
                <p>MP <span>${datas.mP}</span></p>
                <p>POV <span>${datas.POV}</span></p>
                <p>RES <span>${datas.RES}</span></p>
                <p>MD <span>${datas.MD}</span></p>`;

  let cameraSpec2 = `          
               <div class="camera-spec2">
                  <h3><i class="bx bx-time"></i>Flight time</h3>
                <p>TIME <span>${datas.time}</span></p>
                <p>TMP <span>${datas.tmp}</span></p>
                <p>VLT <span>${datas.vlt}</span></p>
              </div>
              `;
  let droneState = `<p class="drone-state">
                    <b><span>${datas.state}</span></b>
                  </p>`;
  droneClassCon.innerHTML = droneClass;
  droneNameCon.innerHTML = droneName;
  cameraSpecCon.innerHTML = cameraSpec;
  cameraSpecCon2.innerHTML = cameraSpec2;
  droneStateCon.innerHTML = droneState;
};
displayData(detailsApi);

// call drones
let spinDroneCon = document.querySelector(".spin-drone-con");
let droneCon = document.querySelectorAll(".drone");
// let droneCon = document.querySelectorAll(".drone");
// let droneCon = document.querySelectorAll(".drone");
let spinDrone = document.querySelector(".spin-drone");

droneCon.forEach(function (drone) {
  drone.addEventListener("click", (e) => {
    let src = e.currentTarget.src;
    let droneItem = e.currentTarget.dataset.id;
    if (droneItem == "regular") {
      obj = 1;
      console.log(obj);
      displayData(detailsApi);
    }
    if (droneItem == "standard") {
      obj = 2;
      console.log(obj);
      displayData(detailsApi);
    }
    if (droneItem == "premium") {
      obj = 3;
      console.log(obj);
      displayData(detailsApi);
    }

    let displayClass = `<img src=${src} alt="" />`;
    spinDroneCon.innerHTML = displayClass;
    //  console.log (spinDrone);
  });
});

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

// drone gauge.

google.charts.load("current", { packages: ["gauge"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Label", "Value"],
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
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawCha);

function drawCha() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Trips ordered"],
    ["Jan", 10],
    ["Feb", 11],
    ["Mar", 6],
    ["Apr", 20],
    ["May", 1],
    ["Jun", 10],
    ["Jul", 0],
    ["Aug", 0],
    ["Sep", 0],
    ["Oct", 0],
    ["Nov", 0],
    ["Dec", 0],
  ]);

  var options = {
    title: "Drone Statistics",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
