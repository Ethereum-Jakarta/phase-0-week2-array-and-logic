function groupAnimals(animals) {
    animals.sort();
    var result = [];

    animals.forEach(animal => {
        if (result.length === 0) {
            result.push([animal]);
        }
        else if (result[result.length - 1][0][0] === animal[0]) {
            result[result.length - 1].push(animal);
        } else {
            result.push([animal]);
        }
    })
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]