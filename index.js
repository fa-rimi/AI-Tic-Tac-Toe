const options = document.querySelector(".options");
const twoPlayerButton = document.getElementById("two-player");
const singlePlayerButton = document.getElementById("single-player");
const resetButton = document.getElementById("reset-button");

let isSinglePlayer = false;

twoPlayerButton.addEventListener("click", () => {
  isSinglePlayer = false;
  twoPlayerButton.disabled = true;
  singlePlayerButton.disabled = false;
  resetGame();
});

singlePlayerButton.addEventListener("click", () => {
  isSinglePlayer = true;
  singlePlayerButton.disabled = true;
  twoPlayerButton.disabled = false;
  resetGame();
});

const board = document.getElementById("board");
const status = document.getElementById("status");
const score = document.getElementById("score");

let currentPlayer = "X";
let moves = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let scoreX = 0;
let scoreO = 0;
let draws = 0;

// Create and populate the game board
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  board.appendChild(cell);
}

board.addEventListener("click", (event) => {
    if (isSinglePlayer && currentPlayer === "O") {
      return; // Prevent the player from making a move when it's the computer's turn
    }
  
    const cell = event.target;
    const index = cell.dataset.index;
  
    if (gameBoard[index] === "" && !checkWinner()) {
      gameBoard[index] = currentPlayer;
      cell.textContent = currentPlayer;
      cell.classList.add("occupied");
      moves++;
  
      if (checkWinner()) {
        announceWinner(currentPlayer);
      } else if (moves === 9) {
        // In single-player mode, check for a draw when no one wins
        if (!checkWinner()) {
          announceDraw();
        } else {
          moves--; // Decrement moves to prevent adding a point to Draw in the current move
        }
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = `Player ${currentPlayer}'s Turn`;
  
        if (isSinglePlayer && currentPlayer === "O") {
          setTimeout(computerMove, 500); // Add a slight delay for the computer's move
        }
      }
    }
  });
  
// Function to check for a win
function checkWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }

  return false;
}

// Function to announce the winner and update the score
function announceWinner(winner) {
  if (isSinglePlayer) {
    if (winner === "X") {
      scoreX++;
    } else if (winner === "O") {
      scoreO++;
    }
  } else {
    if (winner === "X") {
      scoreX++;
    } else if (winner === "O") {
      scoreO++;
    }
  }

  setTimeout(() => {
    window.alert(`Player ${winner} wins!`);
    updateScore();
    resetGame();
  }, 100);
}

// Function to announce a draw and update the score
function announceDraw() {
  setTimeout(() => {
    window.alert("It's a draw!");

    // Update the score for two-player and single-player modes
    if (isSinglePlayer) {
      if (currentPlayer === "X") {
        scoreX++;
      } else {
        scoreO++;
      }
    } else {
      // For two-player mode
      draws++;
    }

    updateScore();
    resetGame();
  }, 100);
}

// Function to get an array of available empty cells
function getEmptyCells() {
  return gameBoard.reduce((acc, cell, index) => {
    if (cell === "") {
      acc.push(index);
    }
    return acc;
  }, []);
}

// Function to let the computer make a move in single-player mode
function computerMove() {
  const emptyCells = getEmptyCells();
  if (emptyCells.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const index = emptyCells[randomIndex];
    gameBoard[index] = "O";
    const cell = document.querySelector(`[data-index="${index}"]`);
    cell.textContent = "O";
    cell.classList.add("occupied");

    if (checkWinner()) {
      announceWinner("O");
    } else if (moves === 9) {
      draws++;
      announceDraw();
    } else {
      currentPlayer = "X";
      status.textContent = "Player X's Turn";
    }
  }
}

// Function to update the score
function updateScore() {
  score.textContent = `Player X: ${scoreX} | Player O: ${scoreO} | Draws: ${draws}`;
}

// Function to reset the game
function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  moves = 0;
  currentPlayer = "X";
  status.textContent = "Player X's Turn";
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("occupied");
  });
}
// Initialize the game
resetGame();
