//Soal 3
//```js
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // Urutkan array secara alfabetis
  animals.sort();
  let result = [];

  for (let i = 0; i < animals.length; i++) {
    let firstLetter = animals[i][0]; 
    let groupFound = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j][0][0] === firstLetter) {
        result[j].push(animals[i]); 
        groupFound = true;
        break;
      }
    }

    if (!groupFound) {
      result.push([animals[i]]);
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil','anda']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]