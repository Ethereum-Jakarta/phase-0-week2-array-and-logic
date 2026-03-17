function palindrome(kata) {
    let katakebalik = ''

    for (let i = kata.length - 1; i >= 0; i--) {
      katakebalik += kata [i];
    }

    return katakebalik === kata
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  return
