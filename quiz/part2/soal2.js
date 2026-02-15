/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

/*
  Solusi: 
  1. looping dari num + 1 dan periksa apakah palindrom
*/
function angkaPalindrome(num) {
  // you can only write your code here!
  while(num++){
    // console.log('num sekarang', num);
    let angka = num;
    let angkaReverse = 0;

    // console.log('angka ', angka)
    while(angka >= 1){
      angkaReverse = angka%10 + angkaReverse * 10;
      angka = Math.floor(angka /= 10);
    }
    // console.log('angka reverse ', angkaReverse)

    if(angkaReverse === num){
      return num;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001