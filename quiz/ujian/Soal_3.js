/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();

  //return urut;
  let kelompok = [];
  let hasilnya = kelompok;

  for (let i = 0; i < animals.length; i++) {
    if (i === 0 || animals[i][0] !== animals[i - 1][0]) {
      kelompok = [animals[i]];
      hasilnya.push(kelompok);
    } else {
      kelompok.push(animals[i])
    }
  }
  return hasilnya;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
