const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

// GENERATE RANDOM NUMBER
let dice1 = Math.floor(Math.random() * 6);
dice1 += 1;
console.log("dice 1: " + dice1);

let dice2 = Math.floor(Math.random() * 6);
dice2 += 1;
console.log("dice 2: " + dice2);

// IMAGE FOR GENERATED NUMBER
if (dice1 === 1) {
  img1.setAttribute("src", "./images/dice1.png");
} else if (dice1 === 2) {
  img1.setAttribute("src", "./images/dice2.png");
} else if (dice1 === 3) {
  img1.setAttribute("src", "./images/dice3.png");
} else if (dice1 === 4) {
  img1.setAttribute("src", "./images/dice4.png");
} else if (dice1 === 5) {
  img1.setAttribute("src", "./images/dice5.png");
} else {
  img1.setAttribute("src", "./images/dice6.png");
}

if (dice2 === 1) {
  img2.setAttribute("src", "./images/dice1.png");
} else if (dice2 === 2) {
  img2.setAttribute("src", "./images/dice2.png");
} else if (dice2 === 3) {
  img2.setAttribute("src", "./images/dice3.png");
} else if (dice2 === 4) {
  img2.setAttribute("src", "./images/dice4.png");
} else if (dice2 === 5) {
  img2.setAttribute("src", "./images/dice5.png");
} else {
  img2.setAttribute("src", "./images/dice6.png");
}

// RULES
const h1 = document.querySelector("h1");

if (dice1 == dice2) {
  h1.textContent = "DRAW!";
} else if (dice1 > dice2) {
  h1.textContent = "PLAYER 1 WIN!";
} else {
  h1.textContent = "PLAYER 2 WIN!";
}
