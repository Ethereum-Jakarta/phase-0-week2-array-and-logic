/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

/**
 * ! Logic
 * * Membuat variabel untuk menampung kata sementara yang di looping
 * * Melakukan looping dengan kondisi (i = kata.length - 1; i >= 0; i--), yang dimana berhenti ketika >= 0
 * * kata yang sebelum nya sudah di looping dan dimasukan sementara ke newWord maka akan dicek condition nya
 * * jika newWord === kata return true, jika tidak maka sebaliknya
 * ! Selesai
 */

function palindrome(kata) {
  let newWord = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    newWord += kata[i];
  }

  if (kata === newWord) return true;
  else return false;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
