
function angkaPalindrome(num) {
  while (true) {
    num++
    if (num==num.toString().split('').reverse("").join("")) {
        return num
    }
  }
// aa
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001