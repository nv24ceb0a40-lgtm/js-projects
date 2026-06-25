const input = document.getElementById("input");
const roll = document.getElementById("roll");
const diceResult = document.getElementById("diceResult");
const imageResult = document.getElementById("imageResult");

roll.addEventListener("click", () => {
    const values = [];
    const images = [];
    const numOfDices = Number(input.value);

    for (let i = 0; i < numOfDices; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="${value}.png">`);
    }

    diceResult.textContent = `You rolled: ${values.join(", ")}`;
    imageResult.innerHTML = images.join("");
});