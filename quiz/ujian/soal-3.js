/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();
  let groupAnimals = [];

  for (let i = 0; i < animals.length; i++) {
    let found = false;

    for (let j = 0; i < groupAnimals.length; i++) {
      if (groupAnimals[j][0][0] === animals[i][0]) {
        groupAnimals[j].push(animals[i]);
        found = true;
        break;
      }
    }

    if (!found) groupAnimals.push([animals[i]]);
  }

  return groupAnimals;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
