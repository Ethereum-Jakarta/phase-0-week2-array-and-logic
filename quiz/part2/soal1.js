function palindrome(kata) {
  let reversed = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    reversed += kata[i];
  }

  return kata === reversed;
}

console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
