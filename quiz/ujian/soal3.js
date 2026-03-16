/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

function groupAnimals(animals) {
    // you can only write your code here!
    var result = [];

    for (var i = 0; i < animals.length; i++) {
        var firstLetter = animals[i][0];
        var found = false;

        for (var j = 0; j < result.length; j++) {
            if (result[j][0][0] === firstLetter) {
                result[j].push(animals[i]);
                found = true;
                break;
            }
        }

        if (!found) {
            result.push([animals[i]]);
        }
    }

    for (var i = 0; i < result.length - 1; i++) {
        for (var j = i + 1; j < result.length; j++) {
            if (result[i][0][0] > result[j][0][0]) {
                var temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    return result;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
