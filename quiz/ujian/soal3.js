/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();
    var hasil = [];
    var sudahMasuk = [];

    for (let i = 0; i < animals.length; i++) {
        if (sudahMasuk.includes(animals[i])) continue;
        // cari semua hewan yang huruf pertamanya sama
        var group = [animals[i]];
        for (let j = i + 1; j < animals.length; j++) {
            if (animals[i][0] === animals[j][0]) {
                group.push(animals[j]);
                sudahMasuk.push(animals[j]);
            }
        }
        sudahMasuk.push(animals[i]);
        // masukkan ke hasil akhir
        if (group.length > 0) {
            hasil.push(group);
        }
    }
    return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
    groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
