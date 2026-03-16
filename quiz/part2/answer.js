// console.log("soal ke-1:")
// function palindrome(kata) {
//     let reverseKata = "";
//     for (let i = kata.length - 1; i >= 0; i--) {
//         reverseKata += kata[i]
//     }

//     if (kata === reverseKata) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // TEST CASES
// console.log(palindrome('katak')); // true
// console.log(palindrome('blanket')); // false
// console.log(palindrome('civic')); // true
// console.log(palindrome('kasur rusak')); // true
// console.log(palindrome('mister')); // false

// console.log("soal ke-2:")
// function angkaPalindrome(num) {
//     leftSide = 1; // penentu awal agar langsung masuk ke loop
//     rightSide = 2; // penentu awal agar langsung masuk ke loop

//     while (leftSide !== rightSide) { // jika masuk kondisi, maka akan masuk ke loop untuk mencari palindrome. loop terus berjalan hingga leftside dan rightside bernilai sama
//         num++ // setiap iterasi num, bertambah 1
//         let string = num.toString(); // diubah menjadi string agar bisa diproses sebagai teks
//         // console.log("numString:", string);
//         leftSide = string.slice(0, Math.ceil(string.length / 2));
//         // console.log("leftSide:", leftSide);
//         rightSide = string.slice(Math.floor(string.length / 2), string.length).split("").reverse().join("");
//         // console.log("rightSide:", rightSide);
//     }

//     return num;
// }

// // TEST CASES
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001

// function checkPalindrome(number) {
//     let numberStr = number.toString();
//     return numberStr === numberStr.split("").reverse().join("");
// };

// function isPalindrome(num) {
//     while (true) {
//         num++;
//         if (checkPalindrome(num)) {
//             return num;
//         }
//     }
// }

// console.log(isPalindrome(27));

// console.log("soal ke-3:")
// function hitungJumlahKata(kalimat) {
//     let hitungKata = kalimat.split(" ");
//     console.log("Jumlah kata:", hitungKata);
//     return hitungKata.length
// }

// // TEST CASES
// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5

console.log("soal ke-4:");
function pasanganTerbesar(num) {
    let numStr = num.toString().split("");
    // console.log("number ke string:", numStr);
    let pair = 0;

    for (let i = 0; i < numStr.length; i++) {
        // console.log("looping:", numStr[i]);
        if (i === 0) {
            pair = numStr[i] + numStr[i + 1];
            // console.log(pair)
        }

        if (pair < parseInt(numStr[i] + numStr[i + 1])) {
            pair = parseInt(numStr[i] + numStr[i + 1])
        }
    }

    return parseInt(pair)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99