// Soal 1

/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

// ==== ALGORITMA ====
// 1. Gunakan method .split() untuk memecah string menjadi array.
// 2. Balik jajaran setiap hurufnya menggunakan method .reverse();
// 3. Gabungkan kembali pecahan array menggunakan method .join(
// 4. Bndingkan dengan kata atau string yang menjadi input function nya

function palindrome(kata) {
  // you can only write your code here!
  return kata === kata.split('').reverse().join('');
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
