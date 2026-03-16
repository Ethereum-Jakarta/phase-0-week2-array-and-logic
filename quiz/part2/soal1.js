function palindrome(kata) {
  let dibalik = kata.split('').reverse().join('');
  return kata == dibalik
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

