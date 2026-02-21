function palindrome(kata) {
    let x = kata.length-1
  for(i = 0; i < kata.length/2; i++){
    if(kata[i] != kata[x]){
        return false;
    }
    x--
  }
  return true
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false