/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let animalArr = [];
    for (let i = 0; i < alphabet.length; i++) {
        const char = alphabet[i];
        const animal = [];
        for (let j = 0; j < animals.length; j++) {
            const element = animals[j];
            if(element[0] === char) {
                animal.push(element);
            }
        }
        if(animal.length > 0) {
            animalArr.push(animal);
        }
    }
    return animalArr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ] 