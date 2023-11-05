const board = document.getElementById("board");
const status = document.getElementById("status");
const score = document.getElementById("score");
const resetButton = document.getElementById("reset-button");

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
  const cell = event.target;
  const index = cell.dataset.index;

  if (gameBoard[index] === "" && !checkWinner()) {
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("occupied");
    moves++;

    if (checkWinner()) {
      updateScore();
      status.textContent = `Player ${currentPlayer} wins!`;
    } else if (moves === 9) {
      draws++;
      updateScore();
      status.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      status.textContent = `Player ${currentPlayer}'s Turn`;
    }
  }
});

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

function updateScore() {
  if (currentPlayer === "X") {
    scoreX++;
  } else if (currentPlayer === "O") {
    scoreO++;
  }
  score.textContent = `Player X: ${scoreX} | Player O: ${scoreO} | Draws: ${draws}`;
}

// Add a click event listener to the reset button
resetButton.addEventListener("click", () => {
    resetGame();
});

// Reset the game
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
