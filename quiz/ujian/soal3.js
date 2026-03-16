function groupAnimals(animals) {
  animals.sort();

  let hasil = [];

  for (let i = 0; i < animals.length; i++) {
    let found = false;

    for (let j = 0; j < hasil.length; j++) {
      if (hasil[j][0][0] === animals[i][0]) {
        hasil[j].push(animals[i]);
        found = true;
        break;
      }
    }

    if (!found) {
      hasil.push([animals[i]]);
    }
  }

  return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
