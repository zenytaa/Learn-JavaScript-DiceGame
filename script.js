const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

// GENERATE RANDOM NUMBER
let dice1 = Math.floor(Math.random() * 6) + 1;

let dice2 = Math.floor(Math.random() * 6) + 1;

// locate images
let dice1Images = "images/dice" + dice1 + ".png";
let dice2Images = "images/dice" + dice2 + ".png";

// IMAGE FOR GENERATED NUMBER
img1.setAttribute("src", dice1Images);
img2.setAttribute("src", dice2Images);

// RULES
const h1 = document.querySelector("h1");

if (dice1 == dice2) {
  h1.textContent = "DRAW!";
} else if (dice1 > dice2) {
  h1.textContent = "PLAYER 1 WIN!";
} else {
  h1.textContent = "PLAYER 2 WIN!";
}
