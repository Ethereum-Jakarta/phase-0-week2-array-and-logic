//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  //Rumus = a + (n - 1) b

  let a = arr[0];
  let b = arr[1] - arr[0];
  let hasil = 0;
  let deret =[]

  for (let i = 1; i <= arr.length; i++) {
    hasil = a + ((i - 1) * b);
    
    deret.push(hasil);
  }

  //return deret;

  for (let i = 0; i < arr.length; i++) {
    if (deret[i] !== arr[i]) {
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