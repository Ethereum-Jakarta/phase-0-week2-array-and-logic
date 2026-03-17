/**
 * ! Math.round(x)	Returns x rounded to its nearest integer
 * ! Math.ceil(x)	Returns x rounded up to its nearest integer
 * ! Math.floor(x)	Returns x rounded down to its nearest integer
 * * Logic Start
 * * membuat variabel number untuk menampung hasil loopingan arr[i] sementara
 * * setelah looping telah memenuhi kondisi yang di capai, maka akan di lakukan perhitungan mean
 */

function cariMean(arr) {
  let number = 0;

  for (let i = 0; i < arr.length; i++) {
    number += arr[i];
  }
  return Math.ceil(number / arr.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
