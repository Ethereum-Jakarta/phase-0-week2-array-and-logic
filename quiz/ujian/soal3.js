/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();
  let hasil = [];
  let group = [];

  for (let i = 0; i < animals.length; i++) {
    if (group.length === 0 || animals[i][0] === group[0][0]) {
      group.push(animals[i]);
      group.reverse();
    } else {
      hasil.push(group);
      group = [animals[i]];
      group.reverse();
    }
  }
  if (group.length > 0) hasil.push(group);

  return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
