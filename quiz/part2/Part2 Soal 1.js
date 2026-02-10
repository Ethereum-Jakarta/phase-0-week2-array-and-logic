function palindrome(kata) {
  let cleanKata = kata.replace(/\s+/g, "");

  let reversed = cleanKata.split("").reverse().join("");

  return cleanKata === reversed;
}

console.log(palindrome("katak"));
console.log(palindrome("blanket"));
console.log(palindrome("civic"));
console.log(palindrome("kasur rusak"));
console.log(palindrome("mister"));
