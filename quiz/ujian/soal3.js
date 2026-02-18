/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort();
    let grouped = [animals[0]];
    let result = [];

    for (let i = 1; i < animals.length; i++) {
      if (animals[i][0] === animals[i - 1][0]) {
        grouped.push(animals[i]);
      }else {
        result.push(grouped);
        grouped = [animals[i]];
      }
    }
    result.push(grouped);
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]