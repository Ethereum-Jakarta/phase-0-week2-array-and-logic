/*
diberikan sebuah function groupAnimals(animals) yang menerima 
satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    let group = {};

    animals.sort()
    animals.forEach(word => {
        let firstWord = word[0];
        if (!group[firstWord]) {
            group[firstWord] = []
        }
        group[firstWord].push(word)
    });
    let result = Object.values(group)
    console.log(result)
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
// its order by alphabet