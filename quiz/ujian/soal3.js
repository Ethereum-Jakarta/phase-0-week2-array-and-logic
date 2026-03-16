/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
animals.sort();
let result = [];
for(let i = 0; i < animals.length; i++) {
  let firstLetter = animals[i][0];
  let newResult = [];
 for(let j = 0; j < result.length; j++) {
  if (result[j][0][0] === firstLetter) {
    newResult = result[j]; 
    break;
  }
 } 
 if (newResult.length > 0) {
  newResult.push(animals[i]); 
} else {
  result.push([animals[i]]);
}
}
return result;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
