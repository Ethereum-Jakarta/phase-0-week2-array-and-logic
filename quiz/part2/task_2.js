function angkaPalindrome(num) {
    while (true) {
        num++;
        var str_num = String(num);
        var reverse = str_num.split('').reverse().join('');
        if (str_num === reverse) {
            return Number(str_num);
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001