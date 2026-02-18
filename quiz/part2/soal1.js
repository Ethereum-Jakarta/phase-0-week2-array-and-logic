function palindrome(kata) {
  // you can only write your code here!
  var cleanedKata = kata.replace(/[^a-zA-Z]/g, "").toLowerCase();
  var reversedKata = cleanedKata.split("").reverse().join("");
  return cleanedKata === reversedKata;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
