//  Soal 1

/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    let hasil;

    let kataLower = kata.toLowerCase();
    let kataBersih = kataLower.replace(/\s/g, '');
    let kataReverse = kataBersih.split('').reverse().join('');

    if(kataBersih === kataReverse){
        hasil = true;
    }
    else {
        hasil = false;
    }

    return hasil;
}
 
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

// SOAL 1 DONE