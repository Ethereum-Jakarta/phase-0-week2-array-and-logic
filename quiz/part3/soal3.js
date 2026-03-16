//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  let diff = arr[1] - arr[0];
  let isArithmetic = true;

  for (let i = 2; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      isArithmetic = false;
    }
  }

  return isArithmetic;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false