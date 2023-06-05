const animals = [
  "bear",
  "camel",
  "cat",
  "dog",
  "elephant",
  "fox",
  "giraffe",
  "horse",
  "lion",
  "owl",
  "panda",
  "penguin",
  "pig",
  "rabbit",
  "ram",
  "squirrel",
];

const chosenAnimals = [];

for (let i = 1; i <= 4; i++) {
  let randomIndex = Math.floor(Math.random() * 16);
  while (chosenAnimals.includes(randomIndex)) {
    randomIndex = Math.floor(Math.random() * 16);
  }
  chosenAnimals.push(randomIndex);
}

const grid = [];
const gridLocations = [];

for (let i = 1; i <= 8; i++) {
  let locationInGrid = Math.floor(Math.random() * 8);
  if (!gridLocations.includes(locationInGrid)) {
    gridLocations.push(locationInGrid);
    console.log("hi");
  } else {
    while (gridLocations.includes(locationInGrid)) {
      locationInGrid = Math.floor(Math.random() * 8);
    }
    gridLocations.push(locationInGrid);
  }
}

for (let i = 0, j = 0; i < 8; i++, j++) {
  if (j < 4) {
    grid[gridLocations[i]] = chosenAnimals[j];
  } else {
    j = -1;
    i--;
  }
}

const card = document.querySelectorAll(".card");

const animalGridItems = document.querySelectorAll(".animal");

let click = 0;
let firstTarget, secondTarget;

card.forEach((item) => {
  item.addEventListener("click", (e) => {
    click++;

    if (click == 1) {
      firstTarget = e.target.getAttribute("data-index");
      item.classList.remove("card");
      item.classList.add("selected");
    }
    if (click == 2) {
      secondTarget = e.target.getAttribute("data-index");
      item.classList.remove("card");
      item.classList.add("selected");
      setTimeout(areFlippedCardsSame, 1000);
    }
    if (click > 2) {
      click = 0;
    }

    function areFlippedCardsSame() {
      if (click == 2) {
        if (grid[firstTarget] == grid[secondTarget]) {
          alert("You won this round");
          const cards = document.querySelectorAll(".container > div");
          cards.forEach((card) => {
            card.classList.replace("selected", "correct-choice");
          });
        } else {
          alert("You lost this round");
          const cards = document.querySelectorAll(".container > div");
          cards.forEach((card) => {
            if (card.getAttribute("class") == "selected") {
              card.classList.remove("selected");
              card.setAttribute("class", "card");
            }
          });
        }
      }
    }
  });
});

const body = document.querySelector("body");

const animalGridContainer = document.createElement("div");
animalGridContainer.classList.add("animals-container");

for (let i = 0; i < 8; i++) {
  const animal = document.createElement("div");
  animal.classList.add("animal");
  animalGridContainer.appendChild(animal);
  switch (grid[i]) {
    case 0:
      animal.style.backgroundImage = "url(images/bear.png)";
      break;

    case 1:
      animal.style.backgroundImage = "url(images/camel.png)";
      break;

    case 2:
      animal.style.backgroundImage = "url(images/cat.png)";
      break;

    case 3:
      animal.style.backgroundImage = "url(images/dog.png)";
      break;

    case 4:
      animal.style.backgroundImage = "url(images/elephant.png)";
      break;

    case 5:
      animal.style.backgroundImage = "url(images/fox.png)";
      break;

    case 6:
      animal.style.backgroundImage = "url(images/giraffe.png)";
      break;

    case 7:
      animal.style.backgroundImage = "url(images/horse.png)";
      break;

    case 8:
      animal.style.backgroundImage = "url(images/lion.png)";
      break;

    case 9:
      animal.style.backgroundImage = "url(images/owl.png)";
      break;

    case 10:
      animal.style.backgroundImage = "url(images/panda.png)";
      break;

    case 11:
      animal.style.backgroundImage = "url(images/penguin.png)";
      break;

    case 12:
      animal.style.backgroundImage = "url(images/pig.png)";
      break;

    case 13:
      animal.style.backgroundImage = "url(images/rabbit.png)";
      break;

    case 14:
      animal.style.backgroundImage = "url(images/ram.png)";
      break;

    case 15:
      animal.style.backgroundImage = "url(images/squirrel.png)";
      break;

    default:
      break;
  }
}

body.appendChild(animalGridContainer);
