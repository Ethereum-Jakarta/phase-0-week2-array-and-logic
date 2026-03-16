/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort();
    let kelompok = [];

    for (let i = 0; i < animals.length; i++) {
        if (kelompok.length === 0) {
            kelompok.push([animals[i]]);
        }else if (animals[i][0] === kelompok[kelompok.length - 1][0][0]) {
            kelompok[kelompok.length - 1].push(animals[i]);
        }else{
            kelompok.push([animals[i]]);
        }
    }
    return kelompok;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]