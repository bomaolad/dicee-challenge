var playerOne = Math.random() * 6 + 1;
var playerTwo = Math.random() * 6 + 1;
console.log(playerOne);
console.log(playerTwo);
var playerOneImage = "images/dice" + Math.floor(playerOne) + ".png";
var playerTwoImage = "images/dice" + Math.floor(playerTwo) + ".png";
document.querySelector(".img1").setAttribute("src", playerOneImage);
document.querySelector(".img2").setAttribute("src", playerTwoImage);

if (playerOne > playerTwo) {
  document.querySelector("h1").textContent = "Player One wins 🎌";
} else if (playerOne < playerTwo) {
  document.querySelector("h1").textContent = "Player Two  wins 🎌";
} else {
  document.querySelector("h1").textContent = "Draw 🎌";
}
// The code simulates a dice roll for two players and updates the webpage to show the result of the game.
