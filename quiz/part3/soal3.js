// Soal 3

// ==== ALGORITMA ====
// 1. Buat variable bernama selisih yang mengurangi angka dalam indeks kedua atau 1 dengan indeks pertama atau 0
// 2. Buat for loop untuk mengurangi seluruh elemen didalam array menggunakan indeks atau elemen sebelumnya
// 3. Bandingkan hasil pengurangan yang dilakukan didalm for loop dengan hasil selisih, jika berbeda return false
// 4. kembalikan true di luar loop jika tidak ada angka yang sleisihnya beda dengan selisih yang telah ditentukan di awal

//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
    let selisih = arr[1] - arr[0];

  for(let i = 0; i < arr.length - 1; i++) {
    let hasiilPengurangan = arr[i + 1] - arr[i];

    if(hasiilPengurangan !== selisih) {
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
console.log(tentukanDeretAritmatika([1, 2])); // false

