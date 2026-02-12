function angkaPalindrome(num) {
  function isPalindrome(newNum) {
    let reversed = 0;
    while (newNum > 0) {
      let lastDigit = newNum % 10; // ambil last digit
      reversed = reversed * 10 + lastDigit; // balikan angka
      newNum = Math.floor(newNum / 10); // buang digit terakhir dari num
    }
    return reversed;
  }

  if (num < 9 && num > -1) {
    return num + 1;
  } else if (num !== isPalindrome(num)) {
    while (num !== isPalindrome(num)) {
      num++;
    }
    return num;
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
