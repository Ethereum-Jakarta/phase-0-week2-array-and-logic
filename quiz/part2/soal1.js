// =====================================================
// Logic Challenge | Part 2
// =====================================================

// ***DISINI SOALNYA BELUM PAKE ARRAY, HANYA LOGIC***
// jaman dahulu kala gua struggle di palindrome angka - Harkon 2020
// siap siap merasakan PAHITNYA LOOPING

// ==========================
// Soal 1
// ==========================

/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. 
Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  // you can only write your code here!
  let kebalik = [];
  for (const char of kata) {
    kebalik.unshift(char);
  }
  return kebalik.join("") === kata;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false

// ------------------------------------
console.log("");
// -----------------------------------
