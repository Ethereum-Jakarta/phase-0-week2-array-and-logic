function angkaPalindrome(num) {
    // Increment the number to start checking from the next number
    num++;
    // Check if the number is a palindrome  
    while (true) {
        let str = num.toString();

        // izin taruh kamus buat baca baca puh
        // split-> memecah string str jadi array karakter
        // Contoh: "12345".split('') menghasilkan ['1', '2', '3', '4', '5'].
        // reverse-> membalikkan urutan elemen dalam array.
        //Contoh: ['1', '2', '3', '4', '5'].reverse() menjadi ['5', '4', '3', '2', '1'].
        // join-> menggabungkan elemen-elemen array menjadi satu string
        // Contoh: ['5', '4', '3', '2', '1'].join('') menjadi "54321".

        let reversedStr = str.split('').reverse().join('');
        if (str === reversedStr) {
            return num;
        }
        num++;
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


