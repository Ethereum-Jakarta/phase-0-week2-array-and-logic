/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort()

    let result = [];
    for (let i  = 0; i < animals.length; i++) {
        let foundGroup = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j][0][0] === animals[i][0]) {
                result[j].push(animals[i]);
                foundGroup = true;
                break;
            }
        }
        if (!foundGroup) {
            result.push([animals[i]]);
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]