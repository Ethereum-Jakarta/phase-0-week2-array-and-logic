//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // Last el = a1 + (n-1) * r
  const diff = arr[1] - arr[0];
  const lastExpected = arr[0] + (arr.length - 1) * diff;

  return arr[arr.length - 1] == lastExpected;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
