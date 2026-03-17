/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();
  let result = [];
  let currentGroup = [];
  let currentLetter = '';
  
  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    let firstLetter = animal[0];
    
    if (firstLetter !== currentLetter) {
      if (currentGroup.length > 0) {
        result.push(currentGroup);
      }
      currentGroup = [animal];
      currentLetter = firstLetter;
    } else {
      currentGroup.push(animal);
    }
  }
  
  if (currentGroup.length > 0) {
    result.push(currentGroup);
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]