// Deret aritmatika adalah jumlah dari semua suku-suku pada barisan aritmatika. Barisan aritmatika adalah barisan bilangan yang memiliki selisih suku-suku yang berdekatan dan selalu tetap
// Rumus deret aritmatika Sn = n/2 (a + Un), Sn = n/2 (2a + (n - 1) b).
function tentukanDeretAritmatika(arr) {
  let beda = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    // console.log(beda);
    if (arr[i + 1] - arr[i] !== beda) {
      return false;
    } else {
      return true;
    }
  }
}

/// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
