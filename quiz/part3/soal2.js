// Soal 2

/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/

// ==== ALGORITMA ====
// 1. Buat for loop untuk menentukan angka yang sedang saya tempati
// 2. Buat variable hasil kali dan tambahkan angka 1 sebagai angka default
// 3. Buat For loop ke dua untuk mengalikan angka yang ada didalam array
// 4. Gunakan If conditioning untuk memastikan hanya melakukan perkalian jika index for loop 1 dan for loop 2 beda
// 5. Simpan atau push hasil perkalian dari setiap angka kedalam array baru
// 6. Kembalikan array baru

// 
function perkalianUnik(arr) {
  // // you can only write your code here!
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    let multiplyResult = 1;

    for(let j = 0; j < arr.length; j++) {
      if(j !== i) {
        multiplyResult *= arr[j];
      }
    }
    result.push(multiplyResult);
  }
  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
