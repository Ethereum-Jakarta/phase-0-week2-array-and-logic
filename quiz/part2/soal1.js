/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    console.log("Kata: " + kata)
    if (kata.length%2 == 1) {
        for (let i = 0; i < kata.length; i++) {
            if (kata[i] !== kata[kata.length-i-1]){
                return false
            }             
            if (i == Math.ceil(kata.length/2)){
                return true
            }
        }
    }

    for (let i = 0; i < kata.length; i++) {
        if (kata[i] == kata[kata.length-i]) {
            continue
        } else if (kata[i] != kata[kata.length-i]){
            return false
        }
        return true
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
