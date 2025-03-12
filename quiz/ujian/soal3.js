
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

function groupAnimals(animals) {
    animals.sort((a, b) => a[0].localeCompare(b[0])); // Sort berdasarkan huruf pertama
    let result = [];

    for (let i = 0; i < animals.length; i++) {
        let currentAnimal = animals[i];
        let hurufAwal = currentAnimal[0];

        
        let group = result.find(group => group[0][0] === hurufAwal);

        if (group) {
            group.push(currentAnimal); 
        } else {
            result.push([currentAnimal]); 
        }
    }
    return result;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]