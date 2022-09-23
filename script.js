let time = document.querySelector(".time");
let greeting = document.querySelector(".greeting");
let myName = document.querySelector(".myName");
let myFocus = document.querySelector(".myFocus");

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  //output time
  time.innerText = `${hour}:${minute}:${second}`;
  setTimeout(showTime, 1000);
}
//show background
function showBackground() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('./img/back-ground2.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    greeting.innerText = "Good morning,";
  } else if (hour > 12 & hour < 18) {
    document.body.style.backgroundImage = "url('./img/back-ground.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    greeting.innerText = "Good evening,";
  }else{
    document.body.style.backgroundImage = "url('./img/back-ground3.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    greeting.innerText = "Good Night,";
  }
}
//get name
function getName() {
  if (localStorage.getItem("myNameInLocalStorage") === null) {
    myName.innerText = "[Enter your name]";
  } else {
    myName.innerText = localStorage.getItem("myNameInLocalStorage");
  }
}

//event

myName.addEventListener("keydown", setName);

//set name
function setName(event) {
  if (event.key === "Enter") {
    localStorage.setItem("myNameInLocalStorage", event.target.innerText);
    myName.blur();
  }
}

//get focus
function getFocus() {
  if (localStorage.getItem("myFocusInLocalStorage") === null) {
    myFocus.innerText = "[Enter your name]";
  } else {
    myFocus.innerText = localStorage.getItem("myFocusInLocalStorage");
  }
}

//event

myFocus.addEventListener("keydown", setFocus);

//set name
function setFocus(event) {
  if (event.key === "Enter") {
    localStorage.setItem("myFocusInLocalStorage", event.target.innerText);
    myFocus.blur();
  }
}

showBackground();
showTime();
getName();
getFocus();
