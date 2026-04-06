//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!

  // jawaban

  // cek dlu apakah u2 - u1 = u3 -u2 = u4 - u3 dst. jika ya, return true, klo ga, return false.
  // pake loop biar dinamis (sesuai panjang array yg diinput user).
    let selisihAwal = arr[1] - arr[0];
    for (let i = 1; i < arr.length; i++) {
        beda = arr[i] - arr[i - 1];
    }
    
    if (selisihAwal !== beda) {
        return false
    }
    return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false