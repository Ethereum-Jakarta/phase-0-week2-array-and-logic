function cariMean(arr) {
  // you can only write your code here!
  // ini untuk mengurutkan angka didalam list dari yang terkecil
  for (let i = 0; i < arr.length;i++) {
    for (let q = 0; q < arr.length - 1; q++) {
        if(arr[q] > arr[q+1]) {
            [arr[q], arr[q+1]] = [arr[q+1], arr[q]];
        }
    }
  }
  let hasil = arr.length / 2;
  // untuk mencari mean ye
  if (arr[hasil]=== undefined) {
    hasil -= 0.5; // ini kenapa minus, karena array itu seperti isi bensin. dimulai dari nol, eeeaaaaaa
  }
  return arr[hasil];
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

//tips baca dokumentasi Math js untuk pembulatan