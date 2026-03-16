function Palindrome(num) {
    let numStr = num.toString();
    for (let i = 0; i < numStr.length / 2; i++) {
        if (numStr[i] !== numStr[numStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
  }

function angkaPalindrome(num) {
    while (true) {
        num++
        if (Palindrome(num)) {
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