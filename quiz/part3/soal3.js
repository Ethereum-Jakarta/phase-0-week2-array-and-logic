//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  let result = [];
  for (let i = arr.length - 1; i > 0; --i) {
    let j = i - 1;
    result.push(arr[i] - arr[j]);
  }
  let beda = result[0];
  // cek apakah SEMUA elemen di result sama dengan patokan
  // .every() akan berhenti dan return false kalau ada yang beda
  let cek = result.every(angka => angka - beda === 0)
  return cek // true kalau deret aritmatika, false kalau bukan
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
