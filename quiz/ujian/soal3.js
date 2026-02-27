/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();

  let result = [];

  for(let i = 0; i < animals.length; i++) {
    let hurufPertama = animals[i][0];

    if(result.length === 0 || result[result.length - 1][0][0] !== hurufPertama) {
        result.push([animals[i]]);
    } else {
        result[result.length - 1].push(animals[i]);
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]