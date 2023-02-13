//When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
let player1 = "X";
let player2 = "O";
let CurrentPlayer = player1;
let resetButton = document.querySelector("#resetGame");
let squares = document.querySelectorAll(".square");

for (let i = 1; i <= 9; i++) {
  console.log(i);
  let gameCell = document.getElementById(`square${i}`);
  console.log("Before click");

  let gameCellClick = () => {
    console.log("test", `square${i}`);
    gameCell.innerHTML = CurrentPlayer;

    // Ternary operator, if current player is equal to player1, the value of current player will be set to player 2, if it's not equal to player1 it will be set to player1.
    CurrentPlayer = CurrentPlayer === player1 ? player2 : player1;
    gameCell.removeEventListener("click", gameCellClick);
  };
  console.log("After click");
  gameCell.addEventListener("click", gameCellClick);
}

resetButton.addEventListener("click", () => {
  squares.forEach((square) => {
    square.textContent = "";
    square.addEventListener("click", gameCellClick);
  });
  CurrentPlayer = player1;
});

//A heading should say whether it is X’s or O’s turn and change with each move made.

//A button should be available to clear the grid and restart the game.

//When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or
//similar Bootstrap component should appear across the screen announcing the winner
