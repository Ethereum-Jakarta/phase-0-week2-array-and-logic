/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let finalResult = [];

    for (let a = 0; a < animals.length; a++) {
        let firstChar = animals[a][0];
        let found = false;

        for (let b = 0; b < finalResult.length; b++) {
            if (finalResult[b][0][0] === firstChar) {
                finalResult[b].push(animals[a]);
                found = true;
                break;
            }
        }

        if (!found) {
            finalResult.push([animals[a]]);
        }
    }

    return finalResult;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]