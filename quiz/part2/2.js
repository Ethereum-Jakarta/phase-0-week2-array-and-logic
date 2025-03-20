function angkaPalindrome(num) {
  // you can only write your code here!
  if (num < 11) {
    return num + 1;
  }

  while (!isPalindrome(num)) {
    num++;
  }

  return num;
}

function isPalindrome(num) {
  let reversedNum = String(num).split("").reverse().join("");
  return Number(reversedNum) === num;
  
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
