function groupAnimals(animals) {
  animals.sort();
  let result = [];

  for (let animal of animals) {
    let hurufAwal = animal[0];
    let lastGroup = result[result.length - 1];

    if (lastGroup && lastGroup[0][0] === hurufAwal) {
      lastGroup.push(animal);
    } else {
      result.push([animal]);
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
