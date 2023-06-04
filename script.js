/* PSEUDO CODE */

/* 
1. store the nmaes and data-value of each animal in an object and then store all the objects in an array
2. randomly generate two instances of each animal
   2.1 Use the random function and generate four numbers from 0-15
   2.2 the animal associated with one of the four numbers will be  one among the four animals, the rest will be chosen in same way
3. populate a different array with each 2 copies of the above selected numbers
4. generate a random number between one and 8 (inclusive), store the previous number(image) at that location in grid
5. If a number already chosen you can't choose it again.  

*/
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
