// ============================================
// Akhirnya Logic dengan Array | Ujian
// ============================================

// ===================== SOAL 1 =====================
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array
yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o'
dengan karakter 'x' yang terdekat.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
  // you can only write your code here!

  // Cari posisi semua 'o' dan semua 'x'
  let posisiO = [];
  let posisiX = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      posisiO.push(i);
    } else if (arr[i] === 'x') {
      posisiX.push(i);
    }
  }

  // Kalau tidak ada 'x', return 0
  if (posisiX.length === 0) {
    return 0;
  }

  // Cari jarak terdekat antara sembarang 'o' dan sembarang 'x'
  let jarakMin = Infinity;

  for (let i = 0; i < posisiO.length; i++) {
    for (let j = 0; j < posisiX.length; j++) {
      let jarak = posisiO[i] - posisiX[j];
      // Buat jadi positif (absolute value)
      if (jarak < 0) {
        jarak = jarak * -1;
      }
      if (jarak < jarakMin) {
        jarakMin = jarak;
      }
    }
  }

  return jarakMin;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1

console.log('---');

// ===================== SOAL 2 =====================
/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter
berupa array yang berisi angka-angka. Function akan me-return array multidimensi
dimana array tersebut berisikan 3 kategori/kelompok:
- kelompok pertama (baris pertama) merupakan angka-angka genap (bukan kelipatan 3)
- kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil (bukan kelipatan 3)
- kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
*/

function mengelompokkanAngka(arr) {
  // you can only write your code here!

  let genap = [];
  let ganjil = [];
  let kelipatan3 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      // Prioritas: kelipatan 3 masuk kelompok 3
      kelipatan3.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      // Genap (tapi bukan kelipatan 3)
      genap.push(arr[i]);
    } else {
      // Ganjil (tapi bukan kelipatan 3)
      ganjil.push(arr[i]);
    }
  }

  return [genap, ganjil, kelipatan3];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

console.log('---');

// ===================== SOAL 3 =====================
/*
Diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array.
Fungsi ini akan me-return array 2 dimensi, dikelompokkan berdasarkan huruf pertama.
*/

function groupAnimals(animals) {
  // you can only write your code here!

  // Kumpulkan huruf pertama yang unik, urutkan secara alfabet
  let hurufUnik = [];
  for (let i = 0; i < animals.length; i++) {
    let huruf = animals[i][0];
    let sudahAda = false;
    for (let j = 0; j < hurufUnik.length; j++) {
      if (hurufUnik[j] === huruf) {
        sudahAda = true;
        break;
      }
    }
    if (!sudahAda) {
      hurufUnik.push(huruf);
    }
  }

  // Sorting huruf unik secara alfabet (bubble sort sederhana)
  for (let i = 0; i < hurufUnik.length - 1; i++) {
    for (let j = 0; j < hurufUnik.length - 1 - i; j++) {
      if (hurufUnik[j] > hurufUnik[j + 1]) {
        let temp = hurufUnik[j];
        hurufUnik[j] = hurufUnik[j + 1];
        hurufUnik[j + 1] = temp;
      }
    }
  }

  // Buat array 2D berdasarkan huruf unik yang sudah terurut
  let hasil = [];
  for (let i = 0; i < hurufUnik.length; i++) {
    let grup = [];
    for (let j = 0; j < animals.length; j++) {
      if (animals[j][0] === hurufUnik[i]) {
        grup.push(animals[j]);
      }
    }
    hasil.push(grup);
  }

  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
