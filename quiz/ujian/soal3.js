/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    // Urutkan array animals secara alfabetis
    animals.sort();
    
    // Array untuk menyimpan hasil
    let result = [];
    
    // Iterasi melalui array animals
    for (let i = 0; i < animals.length; i++) {
        // Cek apakah sub-array untuk huruf pertama hewan sudah ada di result
        if (result.length === 0 || result[result.length - 1][0][0] !== animals[i][0]) {
            // Jika belum ada, buat sub-array baru
            result.push([animals[i]]);
        } else {
            // Jika sudah ada, tambahkan hewan ke sub-array yang sesuai
            result[result.length - 1].push(animals[i]);
        }
    }
    
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
