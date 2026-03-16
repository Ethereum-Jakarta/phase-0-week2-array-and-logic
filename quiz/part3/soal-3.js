//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  let selisih = arr[1] - arr[0];
  
  for (let i = arr.length - 1; i > 0; i--) {
    let bil1 = arr[i]
    console.log(bil1);
    let bil2 = arr[i - 1]
    console.log(bil2);
    
    if (bil1 - bil2 !== selisih) {
        return false
    } 
  }

  return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([3, 6, 9, 12])); // tes -- true
