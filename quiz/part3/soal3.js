//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!

  // tidak ada angka yang bisa di deret karena isi array tidak lebih dari 2
  if (arr.length < 2) return false;
  
  // tentukan selisi index pertama dan kedua
  let selisih = Math.abs(arr[1] - arr[0]);
  // debugging dulu gais
  // console.log({arr, selisih});

  for (let i = 0; i < arr.length; i++) {
    // debugging dulu gais
    // console.log({
    //     angka_sekarang: arr[i],
    //     angka_selanjutnya : arr[i + 1],
    //     samting: arr[i + 1] - selisih
    // });
    
    if (!arr[i + 1]) break;
    if ((arr[i + 1] - selisih) !== arr[i]) return false;
  }

  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false