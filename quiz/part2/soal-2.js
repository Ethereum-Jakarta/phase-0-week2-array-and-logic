/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

// same as soal-1
function palindrome(word) {
  word = String(word);

  let l = 0,
    r = word.length - 1;

  while (l < r) {
    if (word[l] !== word[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

function angkaPalindrome(num) {
  // TODO I think i can do more robust then this
  do {
    num++;
  } while (!palindrome(num));

  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(1287367)); // 1287 -> 7821 true
