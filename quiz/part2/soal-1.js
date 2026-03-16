/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/
// let tes = "katak";
// console.log(tes[0] + " " + tes[4])

function palindrome(kata) {
    // you can only write your code here!
    for(let i = 0; i < kata.length; i++) {
        let j = kata.length - 1 - i;

        if (kata[i] !== kata[j]) {
            return false;
        }
    }
    return true;
}
  
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('berotaksenku')); // false
console.log(palindrome('berotaksenkub')); // false
console.log(palindrome('berotaksenkuukneskatoreb')); // true


  
