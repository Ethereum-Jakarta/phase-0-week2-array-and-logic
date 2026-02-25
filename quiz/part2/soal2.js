// Soal 2

/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

// ==== ALGORITMA ====
// 1. Gunakan while loop untuk melakukan perulangan yang dinamis
// 2. Gunakan pengkondisian if untuk memastikan angka yang akan di periksa itu lebih besar dari angka input
// 3. Periksa apakah angka tersebut plaindorme atau tidak, jika ya return angka plaindromenya, jika tidak, lanjut cari

function angkaPalindrome(num) {
  // you can only write your code here!
  let angka = 0;
  while(true) {
    angka++;
    
    if(angka > num) {
        let plaindrome = String(angka).split('').reverse().join('');
        if(angka === Number(plaindrome)) {
            return angka;
        } 
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


