function palindrom(kata) {
    let balikKata = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        balikKata += kata[i]
    }
    if (kata === balikKata) {
        return true;
    } else {
        return false
    }
}
console.log(palindrom('katak'))
console.log(palindrom('blanked'))
console.log(palindrom('kasur rusak'))
console.log(palindrom('civic'))
console.log(palindrom('mister'))