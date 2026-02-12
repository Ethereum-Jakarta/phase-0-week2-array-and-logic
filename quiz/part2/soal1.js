function palindrome(kata) {
  let reverse = '';
  for (let i = kata.length - 1; i >= 0; i--) {
    reverse += kata[i];
  }
  return kata === reverse;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
