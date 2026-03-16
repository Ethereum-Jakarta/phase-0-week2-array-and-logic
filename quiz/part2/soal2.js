/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/


function siPalindrome(num) {
    const str = num.toString();
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function angkaPalindrome(num) {
    num++;
    while (!siPalindrome(num)) {
        num++;
    }
    return num;
}

// TEST CASES
console.log(angkaPalindrome(8));   // Output: 9
console.log(angkaPalindrome(10));  // Output: 11
console.log(angkaPalindrome(117)); // Output: 121
console.log(angkaPalindrome(175)); // Output: 181
console.log(angkaPalindrome(1000)); // Output: 1001
