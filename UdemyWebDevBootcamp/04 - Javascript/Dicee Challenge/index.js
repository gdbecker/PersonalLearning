// Player 1 dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var p1img = "images/dice" + randomNumber1 + ".png";
document.getElementById("img1").setAttribute("src", p1img);

// Player 2 dice
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var p2img = "images/dice" + randomNumber2 + ".png";
document.getElementById("img2").setAttribute("src", p2img);

// Decide winner
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
}
