/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adazlah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
    // you can only write your code here!
    let numPalindrom = num;
    let numStr = num.toString();
    let additional = 0;
    if(numStr.length === 1) {
        numPalindrom++;
    } else {
        // JIKA TIDAK BERTEMU PALINDROM TAMBAH 1 sampai KETEMU
        let searchPalindrom = num;
        let strPalindrom = [];
        for (let i = numStr.length - 1; i >= 0; i--) {
            for (let j = 1; j <= num; j++) {
                // console.log(j)
                searchPalindrom++;
                
                // Loop the string 1 by 1 after add++
                strPalindrom = searchPalindrom.toString().split('')
                if(strPalindrom[0] === strPalindrom[strPalindrom.length - 1]) {
                    break;
                }
            }
            break;
        }
        // console.log(strPalindrom.join(''));
        numPalindrom = Number(strPalindrom.join(''))
    }
    return numPalindrom;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001