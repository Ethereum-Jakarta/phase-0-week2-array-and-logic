
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata
 merupakan palindrome, dan false jika bukan. Kata palindrome
  adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak'
   dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    let maju = 0;
    let mundur = kata.length-1;

    while (maju<mundur){
        if(kata[maju] != kata[mundur])
            return false;
        maju++;
        mundur--;
    }
    return true;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false