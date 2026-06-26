const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const card = document.getElementById("card");
const pokemonImg = document.getElementById("pokemonImg");
const pokemonName = document.getElementById("pokemonName");
const pokemonId = document.getElementById("pokemonId");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const errmsg = document.getElementById("errorMsg");

const fetchdata = async (name) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if (!response.ok) {
            errmsg.textContent = "pokemon not found";
            card.classList.add("hidden");
            return;
        }

        const data = await response.json();
        console.log(data);

        errmsg.textContent = "";
        card.classList.remove("hidden");

        pokemonImg.src = data.sprites.front_default;
        pokemonName.textContent = data.name;
        pokemonId.textContent = data.id;
        height.textContent = data.height;
        weight.textContent = data.weight;

    } catch (e) {
        console.log(e);
        errmsg.textContent = "something went wrong";
        card.classList.add("hidden");
    }
};

searchBtn.addEventListener("click", () => {
    let name = searchInput.value;
    name = name.toLowerCase();
    fetchdata(name);
});