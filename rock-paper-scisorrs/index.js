const choiceButtons = document.querySelectorAll(".choiceBtn");
const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");
const winCount = document.getElementById("winCount");
const lossCount = document.getElementById("lossCount");
const tieCount = document.getElementById("tieCount");

const choices = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;
let ties = 0;

const getComputerChoice = () => {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
};

const getResult = (user, computer) => {
    if (user === computer) return "tie";

    const beats = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    return beats[user] === computer ? "win" : "lose";
};

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = getResult(userChoice, computerChoice);

        userChoiceDisplay.textContent = `You: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;

        if (result === "win") {
            resultDisplay.textContent = "Result: You win!";
            wins++;
            winCount.textContent = wins;
        } else if (result === "lose") {
            resultDisplay.textContent = "Result: You lose!";
            losses++;
            lossCount.textContent = losses;
        } else {
            resultDisplay.textContent = "Result: Tie!";
            ties++;
            tieCount.textContent = ties;
        }
    });
});