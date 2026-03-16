function palindrome(kata) {
    let kata2 ="";
    for (i = kata.length -1; i >= 0; i--){
        kata2 += kata[i];
    }
    if (kata === kata2){
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false