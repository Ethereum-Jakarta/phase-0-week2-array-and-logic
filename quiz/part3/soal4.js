// Soal 4

// ==== ALGORITMA ====
// 1. Buat variable bernama rasio yang menampung nilai hasil bagi dari elemen indkes ke 2 atau 1 dengan indeks pertama atau 0
// 2. Buat for loop untuk membagi seluruh angka didalam array
// 3. bandingkan rasio yang didapatkan didalam loop dengan yang didapatkan diluar loop, jika beda return false
// 4. Jika tidak ada rasio yang berbeda dengan rasio yang didapatkan diluar loop maka return true setelah loop selesai
function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  let rasio = arr[1] / arr[0];

  for(let i = 0; i < arr.length - 1; i++) {
    let rasio2 = arr[i + 1] / arr[i];

    if(rasio2 !== rasio) {return false};
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
