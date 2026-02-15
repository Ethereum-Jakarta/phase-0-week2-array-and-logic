/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    // you can only write your code here!
    // varibale penampungan untuk mengisi parameternya benar apa enggak
    let penampungan = "" 
    // buat cara untuk membalikan isi dari parameter dan di simpan di variable penampungan
    for (i = kata.length -1; i >= 0; i--) {
        penampungan = penampungan + kata[i] 
    }
    // buat cara untuk mengecek isi dari parameter yang ori dan yang ada di penampungan
    if (kata == penampungan) {
        return true
    } else {
        return false
    } 

  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
    // you can only write your code here!

    // cari cara agar parameter nya bisa di pakai dengan .length 
    let numLength = num.toString(); 

    let angka = ""
    let hasil = ""


    // cari cara agar parameter bisa di balik
    for (let i = numLength.length - 1; i >= 0; i--) {
        angka = angka + numLength[i]
    }
    
    if (num == angka) {
       return hasil = num + 1;
    }

    while (true) {
        // Mengonversi angka saat ini ke string untuk memeriksa palindrom
        let currentString = num.toString();
        let reversedString = currentString.split('').reverse().join(''); // Balikkan string

        if (currentString === reversedString) { // Periksa apakah palindrom
            return num; // Jika palindrom, kembalikan angka tersebut
        }

        num++; // Jika tidak palindrom, tambahkan 1 dan coba lagi
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9 
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

function hitungJumlahKata(kalimat) {
    // you can only write your code here!

    // buat cara agar bisa mengambil parameter dan menghitungnya
    let angkaParameter = kalimat.split(" ")

    // buat variable penampungan
    let penampungan = angkaParameter.length

    return penampungan

  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

function pasanganTerbesar(num) {
    // Ubah parameter menjadi string
    let Ubahparameter = num.toString();

    // Variabel untuk menyimpan pasangan terbesar
    let terbesar = 0;

    // Loop untuk mengambil setiap pasangan dua digit
    for (let i = 0; i < Ubahparameter.length - 1; i++) {
        // Ambil pasangan dua digit
        let pasangan = Ubahparameter[i] + Ubahparameter[i + 1];

        // Ubah pasangan menjadi angka dan bandingkan dengan terbesar
        if (parseInt(pasangan) > terbesar) {
            terbesar = parseInt(pasangan);
        }
    }

    // Kembalikan pasangan terbesar
    return terbesar;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
