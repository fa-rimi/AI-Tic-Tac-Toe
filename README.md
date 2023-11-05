<!-- Tic Tac Toe Game with OpenAI Prompting -->

<!-- Project Title -->
<p align="center">
  <img src="tic-tac-toe-icon.png" alt="Tic Tac Toe Icon" width="150">
</p>

<h1 align="center">Tic Tac Toe Game</h1>

<p align="center">
  <em>A fun and interactive Tic Tac Toe game powered by OpenAI's prompting.</em>
</p>

<!-- Table of Contents -->
## Table of Contents
- [Introduction](#introduction)
- [Trial Prompts](#trial)
- [Offical Prompts](#prompts)
  - [Prompt 1: Game Board](#prompt-1-game-board)
  - [Prompt 2: Reset Button](#prompt-2-reset-button)
  - [Prompts 3 & 4: Cell Size](#prompts-3--4-cell-size)
  - [Prompts 5 & 6: Pop-up Messages](#prompts-5--6-pop-up-messages)
  - [Prompt 7: Multiplayer Modes](#prompt-7-multiplayer-modes)
- [Get Started](#get-started)
- [Contributing](#contributing)

<!-- Introduction -->
## Introduction

Welcome to our Tic Tac Toe game, a web-based application powered by OpenAI's prompting. This project delivers an immersive and enjoyable gaming experience with features including a dynamic game board, reset functionality, visually appealing cell design, informative pop-up messages, and both two-player and single-player modes.

## Trial Prompts
#### Create a tic-tac-toe web game application for me with a leaderboard.
- This question was very broad but as a result the response was a general outline of what the application should look like with basic code


#### Build me a front-end tic-tac-toe web application with a leaderboard
- Similar to the first question, the response was a general outline with basic code

<!-- Prompts -->
## Official Prompts

### Prompt 1: Game Board
<details>
<summary>Details</summary>

> Build a tic tac toe web application using HTML, CSS, and Javascript. It will have the following: 
> **Game Board:**
> - Responsive and dynamic 3x3 grid with gray backgrounds for cells and black grid lines.
> - Centered on the screen using a flexbox layout.
>
> **Player Mechanics:**
> - Two players, X and O, take turns making moves by clicking on empty cells.
> - Winning conditions:
>   - Three in a row horizontally.
>   - Three in a row vertically.
>   - Three in a row diagonally from top-left to bottom-right.
>   - Three in a row diagonally from top-right to bottom-left.
> - Automatic win-check after each move.
> - Draw detection when the board is full and no winner is declared.
>
> **Leaderboard:**
> - Located above the game board.
> - Displays wins for each player in the format: "X - # || O - #".
>
> - Separate the game into HTML, CSS, and JavaScript files following the Separation of Concerns (SoC) principle.
</details>

### Prompt 2: Reset Button
<details>
<summary>Details</summary>

> Add a button to reset the game.
</details>

### Prompts 3 & 4: Cell Size
<details>
<summary>Details</summary>

> Ensure cells have fixed height and width, maintaining their size when marked.
</details>

### Prompts 5 & 6: Pop-up Messages
<details>
<summary>Details</summary>

> Display a pop-up message in the browser when a player wins or when there is a draw.
</details>

### Prompt 7: Multiplayer Modes
<details>
<summary>Details</summary>

> In addition to the current code, can you add two game modes as follows:
> #### Option 1: Two-Player Mode
> - Two players can compete, one as X and the other as O.
> - Track wins on a leaderboard.
> - Continue playing indefinitely unless choosing to switch to Option 2.
> - In the case of a draw, award one point to the 'Draw' category on the leaderboard.
>
> #### Option 2: Single-Player Mode
> - Players can choose this mode to compete against the computer.
> - The leaderboard displays wins for the player and the computer.
> - The computer makes random moves after the player.
> - One point is awarded for achieving three in a row before the computer or vice versa.
> - In the case of a draw, one point is awarded to the 'Draw' category on the leaderboard.
> - A pop-up message indicates the winner or a draw.

**Feel free to check the HTML, CSS, and JavaScript files for the updated code to support these functionalities.**
</details>

<!-- Get Started -->
## Get Started

To play the game and explore its features, follow these steps:
- Clone the repository to your local machine.
- Open the `index.html` file in your web browser.
- Enjoy the Tic Tac Toe experience!

<!-- Known Issues -->
## Known Issues

- In single-player game mode, when the game ends in a draw, the draw announcement does not pop up, and a point is not added to the draw category. This issue is currently under investigation and will be resolved in a future update.

</markdown>
