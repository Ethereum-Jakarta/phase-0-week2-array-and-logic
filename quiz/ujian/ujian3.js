/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    let res = [];
    let al = animals.map(animal => animal.toLowerCase()); // Biar seragam huruf kecil semua
    al.sort(); // Urutkan biar kelompoknya sesuai alfabet

    for (let i = 0; i < al.length; i++) {
        if (res.length === 0 || res[res.length - 1][0][0] !== al[i][0]) {
            res.push([al[i]]); // Buat kelompok baru kalau beda huruf awal
        } else {
            res[res.length - 1].push(al[i]); // Masukin ke kelompok yang sama
        }
    }


    return (res.sort ((a, b)) == a[0][0] .localCompare(b[0][0]));
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
