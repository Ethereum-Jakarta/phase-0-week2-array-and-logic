

function palindrome(kata) {
    let balik = "";
    for (let a = kata.length -1; a >= 0; a--) {
        balik += kata[a];
    }
    if (balik !== kata) {
        return false;
    } else {
        return true;
    }
}


console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
