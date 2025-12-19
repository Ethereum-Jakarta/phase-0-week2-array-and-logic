// ==========================
// Soal 3
// ==========================
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let sortedAnimals = [];
  for (let i = 0; i < animals.length - 1; i++) {
    for (let j = 0; j < animals.length - 1 - i; j++) {
      if (animals[j].charAt(0) > animals[j + 1].charAt(0)) {
        [animals[j], animals[j + 1]] = [animals[j + 1], animals[j]];
      }
    }
  }
  animals.forEach((animal) => {
    let subSortedAnimals = sortedAnimals.find(
      (subArr) => subArr[0].charAt(0) == animal.charAt(0)
    );

    if (subSortedAnimals) {
      subSortedAnimals.push(animal);
    } else {
      sortedAnimals.push([animal]);
    }
  });

  return sortedAnimals;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [["ayam", "anoa"], ["cacing"], ["kuda", "kancil"]];

console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [["ayam", "anoa"], ["cacing", "cicak"], ["kuda", "kancil"], ["unta"]];

// ------------------------------------
console.log("");
// ------------------------------------
