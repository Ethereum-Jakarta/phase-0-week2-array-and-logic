// ## Soal 3
// ```js
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  const kelompok = {};

  for (hewan of animals) {
    const key = hewan[0];
    if (!kelompok[key]) kelompok[key] = [];
    kelompok[key].push(hewan);
  }

  return Object.keys(kelompok)
  .sort()
  .map(key => kelompok[key]);
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]