// ============================================
// Logic Challenge lagi | Part 3
// ============================================

// ===================== SOAL 1 =====================
/*
Diberikan sebuah function cariMean(arr) yang menerima satu parameter berupa array angka.
Function akan me-return nilai rata-rata (mean) dari array tersebut.
Tips: baca dokumentasi Math js untuk pembulatan.
*/

function cariMean(arr) {
  // you can only write your code here!

  // Hitung total semua elemen
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  // Hitung mean dan bulatkan (round)
  return Math.round(total / arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

console.log('---');

// ===================== SOAL 2 =====================
/*
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array
yang berisikan angka. Function akan me-return array baru yang mengandung angka yang
setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri.
Contoh: [1, 2, 3, 4, 5] => [120, 60, 40, 30, 24]
karena 120 = 2*3*4*5, 60 = 1*3*4*5, dst.
*/

function perkalianUnik(arr) {
  // you can only write your code here!

  let hasil = [];

  for (let i = 0; i < arr.length; i++) {
    let kali = 1;
    // Kalikan semua elemen kecuali index ke-i
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        kali *= arr[j];
      }
    }
    hasil.push(kali);
  }

  return hasil;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

console.log('---');

// ===================== SOAL 3 =====================
/*
Tentukan apakah array merupakan deret aritmatika atau bukan.
Deret aritmatika = selisih antar elemen berurutan selalu sama.
*/

function tentukanDeretAritmatika(arr) {
  // you can only write your code here!

  // Hitung selisih (beda) pertama
  let beda = arr[1] - arr[0];

  // Cek apakah semua selisih berurutan sama
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== beda) {
      return false;
    }
  }

  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

console.log('---');

// ===================== SOAL 4 =====================
/*
Tentukan apakah array merupakan deret geometri atau bukan.
Deret geometri = rasio antar elemen berurutan selalu sama.
*/

function tentukanDeretGeometri(arr) {
  // you can only write your code here!

  // Hitung rasio pertama
  let rasio = arr[1] / arr[0];

  // Cek apakah semua rasio berurutan sama
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== rasio) {
      return false;
    }
  }

  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
