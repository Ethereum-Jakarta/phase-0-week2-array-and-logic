//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  let pola = [];
  for (let index = 0; index < arr.length - 1; index++) {
    let pengurangan = arr[index + 1] - arr[index];
    if (pengurangan !== pola[0]) {
      pola.push(pengurangan);
    }
  }
  return pola.length == 1 ? true : false;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
