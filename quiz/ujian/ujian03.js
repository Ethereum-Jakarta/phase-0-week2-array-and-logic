/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let result = [];
  for (let animal of animals) {
    if (result.length === 0) {
      result.push([animal]);
      continue;
    }

    let groupFound = false;

    for (let group of result) {
      if (group[0][0] === animal[0]) {
        group.push(animal);
        groupFound = true;
        break;
      }
    }

    if (!groupFound) result.push([animal]);
  }
  return result.sort();
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
