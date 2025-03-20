function palindrome(kata) {
  // you can only write your code here!
  let reversedWord = kata.split("").reverse().join("")
  return kata === reversedWord;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false