/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort()

  let result = []

  for (let i = 0; i <= animals.length - 1; i++) {
    if (result.length === 0) {
      result.push([animals[i]])
    } else {
      let last = result[result.length - 1]
      if (last[0][0] === animals[i][0]) {
        last.push(animals[i])
      } else {
        result.push([animals[i]])
      }
    }
  }
  
  return result
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
