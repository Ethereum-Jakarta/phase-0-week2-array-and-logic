

function angkaPalindrome(angka) {
    let number = angka;
    let numberPalindrome = '';
    
    while (number !== Number(numberPalindrome)) {
        number ++;
        numberPalindrome = ''

        let numStr = String(number);
        for (let a = numStr.length - 1; a >= 0; a--) {
            numberPalindrome += numStr[i];
        }
    }
    return number;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001