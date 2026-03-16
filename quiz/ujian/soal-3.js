/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort()
  let grup = [animals[0]]
  let final = []
  
  for(let i = 1; i < animals.length; i++) {
    if (animals[i][0] === grup[0][0]) {
        grup.push(animals[i])        
    } else {
        final.push(grup)
        grup = [animals[i]]
    }
  }

  final.push(grup)
  return final

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]