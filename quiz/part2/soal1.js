// ```js
// /*
// Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
// */

function palindrome(kata) {
  // you can only write your code here!
  return kata === kata.split("").reverse().join("");
}

// TEST CASES
console.table(palindrome("katak")); // true
console.table(palindrome("blanket")); // false
console.table(palindrome("civic")); // true
console.table(palindrome("kasur rusak")); // true
console.table(palindrome("mister")); // false
// ```
