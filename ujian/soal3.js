// ## Soal 3
 // ```js
 // /*
 // diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
 // fungsi ini akan me-return array 2 dimensi
 // */
 function groupAnimals(animals) {
    animals.sort()

    let result = []
    let group = []
  
    for (let i = 0; i < animals.length; i++) {
      if (group.length === 0 || animals[i][0] === group[0][0]) {
        group.push(animals[i])
      } else {
        result.push(group)
        group = [animals[i]]
      }
    }
    
    result.push(group)
  
    return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
// ```