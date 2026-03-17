// Soal ke-1

/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    let kataTerbalik = "";
    for (let i = kata.length - 1; i >= 0; i-- ) {
        kataTerbalik += kata[i];
    }

    if (kataTerbalik === kata) {
        return true;
    } else {
        return false;
    }
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false




  //SOAL KE-2
  
function angkaPalindrome(angka) {
    let angkaSementara;
    let palindromeAngka = "";

    for (let i = angka + 1; ; i++ ) {
        angkaSementara = i.toString();
        palindromeAngka = "";

        for (let j = angkaSementara.length - 1; j >= 0; j--) {
            palindromeAngka += angkaSementara[j];
        }
        
        if (angkaSementara === palindromeAngka) {
            return i;
        }
    }
}

console.log(angkaPalindrome(534564));




// SOAL KE-3

function hitungJumlahKata(kalimat) {
    let kataSementara = kalimat.split(" ");
    
    return kataSementara.length;
}

console.log(hitungJumlahKata("aku adalah ikan"));

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5




// SOAL KE-4

function pasanganTerbesar(num) {
    let angkaString = num.toString();
    angkaString = angkaString.split("");
    // console.log(angkaString);
    let angkaPerbandingan = [];

    for (let i = 0; i < angkaString.length ; i++) {
        // console.log(angkaString[i]);
        let angkaSementara = "";
        angkaSementara += angkaString[i];
        angkaSementara += angkaString[i + 1];
        // console.log(angkaSementara);


        angkaPerbandingan[i] = parseInt(angkaSementara);
    }
    // console.log(angkaPerbandingan);
    angkaPerbandingan = Math.max(...angkaPerbandingan);
    return angkaPerbandingan;
    
    
}
console.log(pasanganTerbesar(239985473904572));
console.log(pasanganTerbesar(43245));
console.log(pasanganTerbesar(6413));
console.log(pasanganTerbesar(9765432567897));
console.log(pasanganTerbesar(9876543456));
