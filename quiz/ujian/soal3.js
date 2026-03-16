// ## Soal 3
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // 1. Urutkan A–Z
  animals.sort();

  let hasil = [];
  let grup = [];

  // 2. Loop & kelompokkan
  for (let i = 0; i < animals.length; i++) {
    if (i === 0 || animals[i][0] === animals[i - 1][0]) {
      grup.push(animals[i]);
    } else {
      hasil.push(grup);
      grup = [animals[i]];
    }
  }

  // 3. Push grup terakhir
  if (grup.length > 0) {
    hasil.push(grup);
  }

  return hasil;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]