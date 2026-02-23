/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
*/
function perkalianUnik(arr) {
  // you can only write your code here!
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let akumulasi = null;
    let array_tanpa_i = [];

    // keluarkan array ke i dari proses akumulasi
    for (let j = 0; j < arr.length; j++) {
        if (j === i) continue;

        array_tanpa_i.push(arr[j]);
    }

    // jalankan proses akumulasi dengan array_tanpa_i
    for (let g = 0; g < array_tanpa_i.length; g++) {
        akumulasi = (!akumulasi) ? array_tanpa_i[g] : akumulasi * array_tanpa_i[g];
    }
  
    newArray.push(akumulasi);
  }

  return newArray;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]