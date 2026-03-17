/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let resultArr = [],
    skipIndex = [],
    inGroup = false;
  for (let i = 0; i < animals.length; i++) {
    let groupCount = 0;
    for (let g = 0; g < skipIndex.length; g++) {
      if (i === skipIndex[g]) {
        inGroup = true;
        groupCount++;
      }
    }
    for (let j = i + 1; j < animals.length; j++) {
      if (animals[i].substring(0, 1) === animals[j].substring(0, 1)) {
        if (inGroup === false) {
          resultArr.push([animals[i], animals[j]]);
          skipIndex.push(j);
        }
        groupCount++;
      }
    }
    if (groupCount < 1) resultArr.push([animals[i]]);
  }
  return resultArr.sort();
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
