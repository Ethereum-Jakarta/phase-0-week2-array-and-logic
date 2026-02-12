/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();

  let hasil = [];

  for (i = 0; i < animals.length; i++) {
    let grouping = false;
    for (j = 0; j < hasil.length; j++) {
      if (hasil[j][0][0] === animals[i][0]) {
        hasil[j].push(animals[i]);
        grouping = true;
        break;
      }
    }
    if (!grouping) {
      hasil.push([animals[i]]);
    }
  }

  return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
