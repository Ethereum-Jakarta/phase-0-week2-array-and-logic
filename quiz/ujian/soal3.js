/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    let result = [];
    let sortAnimals = animals.sort();

    for (let i = 0; i < sortAnimals.length; i++) {
        let foundGroup = false;
        for (let j = 0; j < result.length; j++) {
            if (sortAnimals[i][0] === result[j][0][0]) {
                result[j].push(sortAnimals[i]);
                foundGroup = true;
                break;
            }
        }
        if (!foundGroup) {
            result.push([sortAnimals[i]]);
        }
    }
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]