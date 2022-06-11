// login page and registration page animation
let loginForm = document.getElementById("loginForm");
let loginLink = document.getElementById("logInLinkreg");

let regForm = document.getElementById("form");
let regLink = document.getElementById("regLogInLink");

// registration form animation
regLink.addEventListener("click", () => {
  regForm.classList.remove("activate");
  regForm.classList.add("deactivate");
  loginForm.classList.remove("deactivate");
  loginForm.classList.add("activate");
});
// login form animaion
loginLink.addEventListener("click", () => {
  regForm.classList.remove("deactivate");
  regForm.classList.add("activate");
  loginForm.classList.add("deactivate");
  loginForm.classList.remove("activate");
});

// FOROM VALIDATION
// DO FOR ERROR MESSAGES
let nameError = document.getElementById("name-error");
let genderError = document.getElementById("gender-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let locationError = document.getElementById("location-error");
let messageError = document.getElementById("message-error");

// DOM FOR GREEN TICK CONFORMATION
let namecheck = document.getElementById("name-check");
let gendercheck = document.getElementById("gender-check");
let phonecheck = document.getElementById("phone-check");
let emailcheck = document.getElementById("email-check");
let locationcheck = document.getElementById("location-check");
let errorfix = document.getElementById("error-fix");

// VALIDATE FOR NAME INPUT
function validatename() {
  let nameValue = document.getElementById("username").value;
  let name = document.getElementById("username");

  if (nameValue.length == 0) {
    nameError.innerText = "Input User name";
    name.style.border = "2px solid red";
    namecheck.style.visibility = "hidden";
    return false;
  }
  if (!nameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter full name";
    name.style.border = "2 solid red";
    namecheck.style.visibility = "hidden";
    return false;
  }
  nameError.innerHTML = "";
  namecheck.style.visibility = "visible";
  name.style.border = "2px solid rgb(73, 73, 248)";
  return true;
}

// VALIDATE FOR GENDER RADIO
function validategender() {
  let gendermale = document.getElementById("gendermale").checked;
  let genderfemale = document.getElementById("genderfemale").checked;
  let genderbinary = document.getElementById("genderbinary").checked;

  if (gendermale == "" && genderfemale == "" && genderbinary == "") {
    genderError.innerText = "Kindly pick a gender";
    gendercheck.style.visibility = "hidden";
    return false;
  }
  genderError.innerHTML = "";
  gendercheck.style.visibility = "visible";
  return true;
}

// VALIDATE FOR PHONE NUMBER
function validatephone() {
  let phoneValue = document.getElementById("userphone").value;
  let phone = document.getElementById("userphone");

  if (isNaN(phoneValue)) {
    phoneError.innerHTML = "Only numbers are required";
    phone.style.border = "2px solid red";
    phonecheck.style.visibility = "hidden";
    return false;
  } else if (phoneValue.length < 10 || phoneValue.length > 14) {
    phoneError.innerText = "Phone No not more than 12 digits";
    phone.style.border = "2px solid red";
    phonecheck.style.visibility = "hidden";
    return false;
  }

  phoneError.innerHTML = "";
  phonecheck.style.visibility = "visible";
  phone.style.border = "2px solid  rgb(73, 73, 248)";
  return true;
}

// VALIDATE EMAIL ADDRESS
function validateemail() {
  let emailValue = document.getElementById("useremail").value;
  let email = document.getElementById("useremail");
  let correct = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

  if (!emailValue.match(correct)) {
    emailError.innerHTML = "Input a valid Email Address";
    email.style.border = "2px solid red";
    emailcheck.style.visibility = "hidden";
    return false;
  } else {
    emailError.innerHTML = "";
    emailcheck.style.visibility = "visible";
    email.style.border = "2px solid  rgb(73, 73, 248)";
    return true;
  }
}

// SUBMIT FUNCTION
function validateform() {
  if (
    !validatename() ||
    !validategender() ||
    !validatephone() ||
    !validateemail() ||
    !validatelocation() ||
    !validatemessage()
  ) {
    errorfix.innerHTML = "Check form and make correction";
    setTimeout(function () {
      errorfix.style.display = "none";
    }, 3000);
    return false;
  }
  messageError.style.border = "3px solid green";
  return true;
}
