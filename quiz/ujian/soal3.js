/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let sortedArr = animals
    .slice()
    .sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    });

  let result = [];

  for (let i = 0; i < animals.length; i++) {
    let firstLetter = sortedArr[i][0];

    if (result.length === 0) {
      result.push([sortedArr[i]]);
    } else {
      let lastArr = result[result.length - 1];
      let firstLetterOfLastArr = lastArr[0][0];

      if (firstLetter === firstLetterOfLastArr) {
        lastArr.push(sortedArr[i]);
      } else {
        result.push([sortedArr[i]]);
      }
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]),
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
