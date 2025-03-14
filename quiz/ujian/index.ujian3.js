console.log("====================Soal 3====================");
function groupAnimals(animals) {
  let result = [];
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  for (let letter of alphabets) {
    let group = [];
    for (let animal of animals) {
      if (animal[0] === letter) {
        group.push(animal);
      }
    }
    if (group.length > 0) {
      result.push(group);
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
