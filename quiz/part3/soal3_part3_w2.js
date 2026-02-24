//  Soal 3
// js
//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  let list_selisih = []
  for (let x = 0; x < arr.length-1; x++){
      selisih = arr[x+1] - arr[x];
      list_selisih.push(selisih);
  }
  keputusan = list_selisih.every(val => val === list_selisih[0]);
  return keputusan
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false