//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
export default function renderAnimalInfo(animal) {
    const infoContainer = document.querySelector(".animal-info");
    if (!infoContainer)
        return;
    // clear previous info
    infoContainer.innerHTML = "";
    // display image
    const imageElement = document.createElement("img");
    imageElement.src = `/images/${animal.imageUrl}`;
    imageElement.alt = `${animal.name} the ${animal.kindOfAnimal}`;
    // display name and kind of animal
    const nameElement = document.createElement("h2");
    nameElement.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    // display job and employment status
    const jobElement = document.createElement("p");
    const isEmployed = !animal.employmentEndDate || new Date(animal.employmentEndDate) > new Date();
    jobElement.textContent = `${animal.job} - Currently ${isEmployed ? "employed" : "not employed"}`;
    // display age
    const ageElement = document.createElement("p");
    const birthYear = parseInt(animal.birthYear);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    ageElement.textContent = `Age: ${age} years old`;
    // display skills
    const skillsElement = document.createElement("p");
    if (Array.isArray(animal.skills)) {
        skillsElement.textContent = `Skills: ${animal.skills.join(", ")}`;
    }
    else if (animal.skills) {
        skillsElement.textContent = `Skills: ${animal.skills}`;
    }
    // append all elements to the info container
    infoContainer.appendChild(imageElement);
    infoContainer.appendChild(nameElement);
    infoContainer.appendChild(jobElement);
    infoContainer.appendChild(ageElement);
    infoContainer.appendChild(skillsElement);
}
