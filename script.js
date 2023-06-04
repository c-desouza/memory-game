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
card.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("card");
  });
});
