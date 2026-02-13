function palindrome(kata){
    return kata[0] == kata[kata.length-1];
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


function angkaPalindrome(num) {
    while (true) {
        num++;
        let toStr = num.toString();
        let reversed = toStr.split('').reverse().join('');
        if (toStr === reversed) {
            return num;
        }
    }
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

function hitungJumlahKata(kalimat) {
    let array = kalimat.split(" ");
    console.log(array.length)
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

function pasanganTerbesar(num) {
    const numStr = num.toString();
    console.log(numStr[1])
    for(let i = 0; i < numStr.length; i++){
        if(num[i]>num[i+1]){
            let bigNum = num[i]
            console.log(bigNum);
        }
    }
}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99