const board = document.getElementById("board");
const status = document.getElementById("status");
const score = document.getElementById("score");
const resetButton = document.getElementById("reset-button");

let currentPlayer = "X";
let computerPlayer = "O";
let playerWins = 0;
let computerWins = 0;
let draws = 0;
let moves = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Create and populate the game board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    board.appendChild(cell);
}

resetButton.addEventListener("click", () => {
    resetGame();
});

board.addEventListener("click", (event) => {
    const cell = event.target;
    const index = cell.dataset.index;

    if (gameBoard[index] === "" && !checkWinner() && currentPlayer === "X") {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add("occupied");
        moves++;

        if (checkWinner()) {
            playerWins++;
            announceWinner(currentPlayer);
        } else if (moves === 9) {
            draws++;
            announceDraw();
        } else {
            currentPlayer = computerPlayer;
            status.textContent = "Computer's Turn";
            setTimeout(computerMove, 500);
        }
    }
});

function computerMove() {
    const emptyCells = gameBoard.reduce((acc, cell, index) => {
        if (cell === "") {
            acc.push(index);
        }
        return acc;
    }, []);

    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const cell = document.querySelector(`[data-index="${randomIndex}"]`);

    if (cell) {
        gameBoard[randomIndex] = computerPlayer;
        cell.textContent = computerPlayer;
        cell.classList.add("occupied");
        moves++;

        if (checkWinner()) {
            computerWins++;
            announceWinner(computerPlayer);
        } else if (moves === 9) {
            draws++;
            announceDraw();
        } else {
            currentPlayer = "X";
            status.textContent = "Player's Turn";
        }
    }
}

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
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

function announceWinner(winner) {
    setTimeout(() => {
        window.alert(winner === "X" ? "Player X wins!" : "Computer wins!");
        resetGame();
    }, 100);
}

function announceDraw() {
    setTimeout(() => {
        window.alert("It's a draw!");
        resetGame();
    }, 100);
}

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    moves = 0;
    currentPlayer = "X";
    computerPlayer = playerWins > computerWins ? "X" : "O";
    status.textContent = `Player ${currentPlayer}'s Turn`;
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("occupied");
    }
    );
}

// Initialize the game
resetGame();
