//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  let selisih = arr[1] - arr[0];
  let hasil = true;

  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i + 1] - arr[i] != selisih){
        hasil = false;
        break;
    }
  }
  return hasil;
  
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

//Sn​= n/2 ​(2a+(n−1)b)

// a = nilai awal
// b = selisih antar suku
// n = jumlah suku