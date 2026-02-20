/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let hasil = [];
  let group = [];
  animals.sort();
  for (let i = 0; i < animals.length;i++) {
    group = []
    if (i === 0) {
      group.push(animals[i]);
      hasil.push(group);
    } else  if (animals[i][0] === hasil[hasil.length - 1][0][0]) {
      hasil[hasil.length - 1].push(animals[i]);
    } else {
      group.push(animals[i]);
      hasil.push(group);
    }

  }
  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log("\n")
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
