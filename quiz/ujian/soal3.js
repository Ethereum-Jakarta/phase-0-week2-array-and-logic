/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();

  let result = [];
  let firstLetters = [];

  for (let i = 0; i < animals.length; i++) {
    if (!firstLetters.includes(animals[i][0])) {
      firstLetters.push(animals[i][0]);
    }
  }

  for (let i = 0; i < firstLetters.length; i++) {
    let group = [];

    for (let j = 0; j < animals.length; j++) {
      if (animals[j][0] === firstLetters[i]) {
        group.push(animals[j]);
      }
    }

    result.push(group);
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]