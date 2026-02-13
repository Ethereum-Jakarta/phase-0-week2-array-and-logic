/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  animals.sort();
  let sortedArr = [];
  for (let i = 0; i < animals.length; i++) {
    let newArr = [];
    for (let j = 0; j < animals.length; j++) {
      if (animals[i][0] === animals[j][0]) {
        newArr.push(animals[j]);
      }
    }
    if (!sortedArr.some((arr) => arr[0] === newArr[0])) {
      sortedArr.push(newArr);
    }
  }

  return sortedArr;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
