/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  const mapByFirstLetter = {};

  for (let i in animals) {
    const firstLet = animals[i][0];

    if (!mapByFirstLetter[firstLet]) {
      mapByFirstLetter[firstLet] = [animals[i]];
    } else {
      mapByFirstLetter[firstLet].push(animals[i]);
    }
  }

  return Object.keys(mapByFirstLetter)
    .sort() // sort
    .map((k) => mapByFirstLetter[k]);
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]),
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
