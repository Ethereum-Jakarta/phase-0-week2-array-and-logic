/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort();
    let hasil = []

    for (let i = 0; i < animals.length; i++){
        let daftar = animals[i]

        if (hasil.length === 0){
            hasil.push([daftar])
        }else{
            let akhir = hasil[hasil.length -1]

            if (daftar[0] === akhir[0][0]){
                akhir.push(daftar)
            }else{
                hasil.push([daftar])
            }
        }
    }
    return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]