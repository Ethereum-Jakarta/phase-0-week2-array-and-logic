/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();

    // Objek untuk menyimpan kelompok berdasarkan huruf pertama
    let grouped = {};

    // Kelompokkan hewan berdasarkan huruf pertama
    for (let animal of animals) {
        let firstLetter = animal[0].toLowerCase();  // Ambil huruf pertama
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];  // Jika huruf pertama belum ada, buat array baru
        }
        grouped[firstLetter].push(animal);  // Tambahkan hewan ke grup yang sesuai
    }

    // Konversi objek ke array dua dimensi
    let result = [];
    for (let letter in grouped) {
        result.push(grouped[letter]);  // Push setiap grup hewan ke dalam array hasil
    }

    return result;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]