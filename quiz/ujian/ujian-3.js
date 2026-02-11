// Soal 3

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let groupAnimals = {};
    let result = [];

    for (let animal of animals) {
        let firstChar = animal[0];
        if (!groupAnimals[firstChar]) {
            groupAnimals[firstChar] = [];
        }
        groupAnimals[firstChar].push(animal);
    }

    for (const key in groupAnimals) {
        result.push(groupAnimals[key]);
    }

    return result.sort();
}

// TEST CASES
console.log("============================ Jawaban Soal 3 ============================");
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
console.log("========================================================================\n");