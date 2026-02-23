/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function balikkanKata(kata) {
    let kataTerbalik = ``;
    
    for (let i = 0; i < kata.length; i++) {
        kataTerbalik = kata[i] + kataTerbalik;        
    }

    return kataTerbalik;
}

function palindrome(kata) {
  // you can only write your code here!
  let kataAsli = kata;
  let kataTerbalik = balikkanKata(kata);

  if (kataAsli === kataTerbalik){
    return true;
  } 
  else {
    return false;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false