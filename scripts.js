$(function () {
  // Initialize variables
  let player = "X";
  let turns = 0;
  let squareValues = {};
  let playerTurn = document.getElementById("playerTurn");
  playerTurn.innerHTML = `<h3>It is player ${player}'s turn</h3>`;

  function playGame() {
    // Select all the squares and add click listeners to each one
    $(".square").on("click", function () {
      // Check if the square has already been clicked
      if ($(this).text() !== "") {
        return;
      }

      // Add the player's mark to the square and update variables
      $(this).text(player);
      squareValues[$(this).attr("id")] = player;
      turns++;

      // Check if the game has been won
      if (checkWin()) {
        //uses a timeout to make it asynchronous
        setTimeout(function () {
          endGame();
        }, 0);
        return;
      }

      // Check if the game has been tied
      if (checkTie()) {
        endGame();
        return;
      }

      // Switch to the other player
      player = player === "X" ? "O" : "X";
      playerTurn.innerHTML = `<h3>It is player ${player}'s turn</h3>`;
    });

    // Add click listener to the reset button
    $("#resetGame").on("click", function () {
      resetGame();
    });
  }

  playGame();
  console.log("after Play game");
  // Function to check if the game has been won
  function checkWin() {
    if (
      (squareValues.square1 === player &&
        squareValues.square2 === player &&
        squareValues.square3 === player) ||
      (squareValues.square4 === player &&
        squareValues.square5 === player &&
        squareValues.square6 === player) ||
      (squareValues.square7 === player &&
        squareValues.square8 === player &&
        squareValues.square9 === player) ||
      (squareValues.square1 === player &&
        squareValues.square4 === player &&
        squareValues.square7 === player) ||
      (squareValues.square2 === player &&
        squareValues.square5 === player &&
        squareValues.square8 === player) ||
      (squareValues.square3 === player &&
        squareValues.square6 === player &&
        squareValues.square9 === player) ||
      (squareValues.square1 === player &&
        squareValues.square5 === player &&
        squareValues.square9 === player) ||
      (squareValues.square3 === player &&
        squareValues.square5 === player &&
        squareValues.square7 === player)
    ) {
      return true;
    }

    return false;
  }

  // Function to check if the game has tied
  function checkTie() {
    let lastTurnCheck = checkWin();
    if (turns === 9 && lastTurnCheck === false) {
      return true;
    }

    return false;
  }

  // Function to end the game and show the winner or tie message
  function endGame() {
    $(".square").off("click");
    let message = checkTie() ? "Tie game!" : player + " wins!";
    alert(message);
  }

  // Function to reset the game
  function resetGame() {
    $(".square").text("");
    $(".square").off("click");
    player = "X";
    turns = 0;
    squareValues = {};
    playGame();
    console.log("The game is reset");
  }
});
