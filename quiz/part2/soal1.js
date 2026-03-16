/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    for (let i = 0; i < kata.length / 2; i++) { // Perulangan berjalan setengah untuk mengecek kedua sisi. Ini menggunakan bantuan AI. terima kasih, logika saya belum sampai ke sana.
        if (kata[i] !== kata[kata.length - 1 - i]) {
            return false;
        } 
    }
    return true;
  }
  
  console.log("Hello Word");
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false