function angkaPalindrome(num) {
    // Fungsi untuk memeriksa apakah angka palindrome
    function isPalindrome(n) {
      // Konversi angka ke string
      var str = n.toString();
      // Balik string dan bandingkan dengan string asli
      return str === str.split('').reverse().join('');
    }
    
    // Tambah angka dengan 1 untuk mulai mencari angka palindrome selanjutnya
    num++;
    
    // Loop hingga menemukan angka palindrome
    while (!isPalindrome(num)) {
      num++;
    }
    
    return num;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  