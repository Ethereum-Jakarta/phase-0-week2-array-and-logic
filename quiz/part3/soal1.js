// Soal 1

// ==== ALGORITMA ====
// 1. Gunakan reduce untuk menjumlahkan seluruh elemen angak didalam array
// 2. Lalu bagi angak hasil penjumlahan dengan panjang array
// 3. Kembalikan hasilnya dengan menggunakan method Math.round()

function cariMean(arr) {
  // you can only write your code here!
  let result = arr.reduce((acc, curr) => acc + curr, 0);
  return Math.round(result / arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

//tips baca dokumentasi Math js untuk pembulatan
