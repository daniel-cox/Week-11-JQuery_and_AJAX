$(function () {
  // Initialize variables
  var player = "X";
  var turns = 0;
  var squareValues = {};

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

      // Check if the game has been won or tied
      if (checkWin() || checkTie()) {
        console.log("before game ends");
        endGame();
        return;
      }
      console.log("after game ends");
      // Switch to the other player
      player = player === "X" ? "O" : "X";
      console.log("after player turn");
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
    if (turns === 9) {
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
    $(".square").on("click");
    player = "X";
    turns = 0;
    squareValues = {};
    playGame();
    console.log("Game is reset");
  }
});
