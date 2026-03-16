//Soal 1
//```js
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  // you can only write your code here!
  for(let i = 0; i < Math.floor(kata.length / 2); i++) {
    if (kata[i] !== kata[kata.length - 1 - i]) {
      return false;
    }
  }
    return true;
// let kataBalik = '';
//     for(let i = kata.length - 1; i >= 0; i--) {
//         kataBalik += kata[i];
//     }
//     if (kata === kataBalik) {
//         return true;
//     } else {
//         return false;
//     }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false