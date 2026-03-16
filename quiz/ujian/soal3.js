/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort()
  let Animals = [];
  let cur = [];
  for (let i = 0; i < animals.length; i++) {
    if (cur.length === 0 || animals[i][0] === cur[0][0]) {
      cur.push(animals[i]);
    } else {
      Animals.push(cur);
      cur = [animals[i]];
    }
  }
  if (cur.length > 0) {
    Animals.push(cur);
  }

  return Animals;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]