console.log("=============Soal 3================");

function tentukanDeretAritmatika(arr) {
  // buat variabel selisih = arr[1] - arr[0]
  let selisih = arr[1] - arr[0];
  // buat variabel isAritmatika = true
  let isAritmatika = true;
  // buat perulangan sebanyak panjang arr - 1
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i + 1] - arr[i]);
    // jika arr[i + 1] - arr[i] tidak sama dengan selisih maka isAritmatika = false
    if (arr[i + 1] - arr[i] !== selisih) {
      isAritmatika = false;
    }
  }
  return isAritmatika;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
