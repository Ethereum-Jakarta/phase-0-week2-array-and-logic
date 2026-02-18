//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  if (arr.length < 2) return false; // Deret harus memiliki setidaknya dua elemen
  var difference = arr[1] - arr[0]; // Selisih antara elemen pertama dan kedua
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== difference) {
      return false; // Jika selisih tidak konsisten, bukan deret aritmatika
    }
  }
  return true; // Semua selisih konsisten, jadi ini adalah deret aritmatika
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
