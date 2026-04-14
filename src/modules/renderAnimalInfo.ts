  //Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
  //Typa upp funktionens parameter

  //=====================================================//
  //Rendera ut bilden på djuret
  //Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
  
  //=====================================================//
  //=====================================================//
  
  //Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
  //Följ formatet: "Trash Analyst - Currently (not) employed"
  //Använd template literals
  
  //=====================================================//
  //=====================================================//
  
  //Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
  //Följ formatet:  Age: 9 years old.
  //Använd template literals
  //Bonus om du skriver ut rubriken "Age" med CSS.
  
  //=====================================================//
  //=====================================================//
  
  //Skriv ut en lista på djurets färdigheter
  //Följ formatet:    Skills:
  //                  Flying
  //                  Eating
  
  //Bonus om du skriver ut rubriken "Skills" med CSS.
  //=====================================================//

  // clear previous info

  // display image

  import { IAnimal } from "./IAnimal";
  export function renderAnimalInfo(animal: IAnimal, infoContainer: HTMLElement) {

  const imageElement = document.createElement("img");
  imageElement.src = `./images/${animal.imageUrl}`;
  imageElement.alt = `${animal.name} the ${animal.kindOfAnimal}`;
  infoContainer.appendChild(imageElement);

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
  } else if (animal.skills) {
    skillsElement.textContent = `Skills: ${animal.skills}`;
  }

  // append all elements to the info container
  infoContainer.appendChild(imageElement);
  infoContainer.appendChild(nameElement);
  infoContainer.appendChild(jobElement);
  infoContainer.appendChild(ageElement);
  infoContainer.appendChild(skillsElement);
}