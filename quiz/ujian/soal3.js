/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let result = [];

  for (let i = 0; i < animals.length; i++) {
    let ini = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j][0][0] === animals[i][0]) {
        result[j].push(animals[i]);
        ini = true;
        break;
      }
    }

    if (!ini) {
      result.push([animals[i]]);
    }
  }

  result.sort((a, b) => {
    return a[0][0].localeCompare(b[0][0]);
  });

  return result;
}




// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]