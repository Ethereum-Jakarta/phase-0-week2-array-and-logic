function angkaPalindrome(num) {
    while (true) {
        num++

        var reversedNumber = 0
        var currentNumber = num
        while (currentNumber !== 0) {
            reversedNumber = (currentNumber % 10) + (reversedNumber * 10)
            currentNumber = Math.floor(currentNumber / 10)
        }

        if (num === reversedNumber) {
            return num
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
