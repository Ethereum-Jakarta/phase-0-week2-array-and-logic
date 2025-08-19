/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let result = [];

  for(let i = 0; i < animals.length; i++) {
    let isGroup = false;
    for(let j = 0; j < result.length; j++) {
      if(animals[i][0] === result[j][0][0]) {
        result[j].push(animals[i]);
        isGroup = true;
        break;
      }
    }
    if(!isGroup) {
      result.push([animals[i]]);
    }
  }
  result.sort();
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]