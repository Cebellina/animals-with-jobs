import fetchAnimals from "./modules/fetchAnimals.js";
import renderListOfAnimals from "./modules/renderListOfAnimals.js";
async function init() {
    const animals = await fetchAnimals();
    renderListOfAnimals(animals);
}
init();

const img = document.createElement("img");
