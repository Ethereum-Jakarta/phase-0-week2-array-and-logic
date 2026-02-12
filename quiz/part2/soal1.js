// const palindrome = (kata) => {
//   let word = kata;
//   kata = kata.split("");
//   kata.reverse();
//   kata = kata.join("");
//   if (kata == word) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(palindrome("katak")); // true
// console.log(palindrome("blanket")); // false
// console.log(palindrome("civic")); // true
// console.log(palindrome("kasur rusak")); // true
// console.log(palindrome("mister")); // false

const palindrome = (kata) => kata === kata.split("").reverse().join("");

console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
