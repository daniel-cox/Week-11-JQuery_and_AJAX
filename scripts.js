//When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
let player1 = "X";
let player2 = "O";

for (let i = 1; i <= 9; i++) {
  console.log(i);
  let gameCell = document.getElementById(`square${i}`);
  console.log("Before click");

  let gameCellClick = () => {
    console.log("test", `square${i}`);
    if (i % 2 === 0) {
      gameCell.innerHTML = player1;
    } else if (i % 2 === 1) {
      gameCell.innerHTML = player2;
    }
    gameCell.removeEventListener("click", gameCellClick);
  };
  console.log("After click");
  gameCell.addEventListener("click", gameCellClick);
}

//A heading should say whether it is X’s or O’s turn and change with each move made.

//A button should be available to clear the grid and restart the game.

//When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or
//similar Bootstrap component should appear across the screen announcing the winner
