const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bee.png") {
    myImage.setAttribute("src", "images/realbee.png");
  } else {
    myImage.setAttribute("src", "images/bee.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Bee's need more appreciation, ${myName}`;
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Bee's need more appreciation, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bee's need more appreciation, ${myName}`;
  }
}

/*
  SUMMARY:
  This file does two things:
  1. Clicking on the image of a bee toggles between two images.
  2. When you click the button, it prompts you to enter your name, which is then stored in local storage and used to personalize the heading.
​
  The key pattern I learned: JS looks scarier than it is. A lot of it is just seperate chunks of code that when put together create interactivity.
*/





