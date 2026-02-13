/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  if (!kata) {
    return "diisi dulu sir argumennya!";
  }

  let reversedWord = "";
  let wordLen = kata.length - 1;
  for (let i = wordLen; i >= 0; i--) {
    reversedWord += kata[i];
  }

  if (reversedWord === kata) {
    return true;
  } else if (reversedWord !== kata) {
    return false;
  }
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
