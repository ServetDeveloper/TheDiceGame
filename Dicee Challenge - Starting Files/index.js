var randomValueNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomValueNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var randomValueNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomValueNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2)

if (randomValueNumber1 > randomValueNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins🚩"
} else if (randomValueNumber1 < randomValueNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins🚩"
} else {
  document.querySelector("h1").textContent = "Draw!"
}
