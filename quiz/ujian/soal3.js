/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
    animals.sort();
    let result = [];
    let currentGroup = [];
    let firstLetter = animals[0][0];

    for (let i = 0; i < animals.length; i++) {
        if (animals[i][0] === firstLetter) {
            currentGroup.push(animals[i]);
        } else {
            result.push(currentGroup);
            currentGroup = [animals[i]];
            firstLetter = animals[i][0];
        }
    }
    result.push(currentGroup);
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]