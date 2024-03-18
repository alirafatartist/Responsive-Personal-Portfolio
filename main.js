let darkButton = document.getElementById("dark_button");
let homeSec = document.querySelector(".home");
let aboutSec = document.querySelector(".about");
let servicesSec = document.querySelector(".services");
let contactsSec = document.querySelector(".contact");
let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
darkButton.addEventListener("click", () => {
  homeSec.classList.toggle("light");
  aboutSec.classList.toggle("light");
  servicesSec.classList.toggle("light");
  contactsSec.classList.toggle("light");
  darkButton.classList.toggle("light");
  body.classList.toggle("light");
});

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let button = document.getElementById("submit");
let errors = document.getElementsByTagName("small");

// Check Username
const check_Username_input = () => {
  username.value.trim();
  if (username.value.trim() == "" || username.value.length < 3) {
    errors[0].style.visibility = "visible";
    username.classList.add("error");
  } else {
    username.classList.replace("error", "success");
    errors[0].style.visibility = "hidden";
  }
};

// Check Email
const check_Email_input = () => {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.match(pattern)) {
    email.classList.replace("error", "success");
    errors[1].style.visibility = "hidden";
  } else {
    errors[1].style.visibility = "visible";
    email.classList.add("error");
  }
};

// Check Password
const check_Password_input = () => {
  //   let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (password.value.length < 6) {
    errors[2].style.visibility = "visible";
    password.classList.add("error");
  } else {
    password.classList.replace("error", "success");
    errors[2].style.visibility = "hidden";
  }
};
// Check Password again
const check_Password2_input = () => {
  //   let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (password2.value == "") {
    errors[3].style.visibility = "visible";
    password2.classList.add("error");
  } else if (password.value != password2.value) {
    errors[3].style.visibility = "visible";
    password2.classList.add("error");
  } else {
    password2.classList.replace("error", "success");
    errors[3].style.visibility = "hidden";
  }
};
button.onclick = () => {
  check_Username_input();
  check_Email_input();
  check_Password_input();
  check_Password2_input();
};

menu.addEventListener("click", (e) => {
  menu.classList.toggle("visible")
  nav.classList.toggle("visible");
});
