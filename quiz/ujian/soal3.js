/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
//   ambil karakter pertama dari masing masing hewan, lalu urutkan
  let firstChar = [];
  for (let i = 0; i < animals.length; i++) {
    firstChar.push(animals[i][0]);
  }
  let sortChar = firstChar.sort();

//   tambahkan hewan yang cocok dengan karakter pada index pertama dari sortChar ke sortAnimals,
// lalu hapus hewan tersebut dari animals dan reset index
  let sortAnimals = [];
  for (const char of sortChar) {
    for (let index = 0; index < animals.length; index++) {
      if (animals[index][0] == char) {
        sortAnimals.push(animals[index]);
        animals.splice(index, 1);
        index = 0;
        break;
      }
    }
  }
  return sortAnimals;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
