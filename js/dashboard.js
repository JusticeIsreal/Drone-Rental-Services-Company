let logo = document.querySelector(".logo");
let menuBar = document.querySelector(".fa-bars");
let sideBar = document.querySelector(".sidebar")

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active")
    sideBar.classList.toggle("active")

});


// CREATE TABLE

// USE DATABASE student
// CREATE TABLE person(
// id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
//     first_name VARCHAR(50),
//     last_name VARCHAR(50),
//     email VARCHAR(50),
//     password VARCHAR(50),
//     date_of_birth DATE,
//     place_of_birth VARCHAR(23)
// );
// // INSERT
// INSERT INTO person (`first_name`, `last_name`,`email`,`password`,`date_of_birth`,`place_of_birth`)
// VALUE("justice", "Agbonma","justiceyba@gmail.com","justyba", "2001-01-30","USA")

// // TO COUNT NUMBER OF ROW
// SELECT COUNT(*) FROM person