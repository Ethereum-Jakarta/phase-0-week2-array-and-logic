/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort();
    let result = [];
    let temp = [];
    let currentLetter = animals[0][0];
  
    for (let i = 0; i < animals.length; i++) {
      if (animals[i][0] === currentLetter) {
        temp.push(animals[i]);
      } else {
        result.push(temp);
        temp = [animals[i]];
        currentLetter = animals[i][0];
      }
    }
  
    if (temp.length > 0) {
      result.push(temp);
    }
  
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]