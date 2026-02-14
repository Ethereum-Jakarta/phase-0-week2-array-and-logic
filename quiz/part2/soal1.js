function palindrome(kata) {
    // you can only write your code here!
    for (let i = 0, j = kata.length -1; i < kata.length; i++, j--) {
        Hurufpertama = kata[i];
        Hurufkedua = kata[j];
        if ( Hurufpertama != Hurufkedua) {
            return false;
        }
    } return true;
    
}


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false