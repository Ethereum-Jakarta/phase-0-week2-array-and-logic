function tentukanDeretAritmatika(arr) {
  let perbandingan = arr[1] - arr[0];

  for(let i = 0; i < arr.length-1; i++){
    
    if(arr[i] + perbandingan != arr[i+1]){
      return false;
    }
  }
  return true
}


console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false


// function urutan(num){
//     let str = String(num)
//     for(let i = 0; i < str.length; i++){
//         console.log(str.length)
//     }
//     return num
// }
// console.log(urutan(2,2,3,4))
