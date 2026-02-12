// Soal 1
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    // you can only write your code here!
    for (let i = 0, j = kata.length - 1; i < kata.length - 1; i++, j--) {
        hurufPertama = kata[i];
        hurufKedua = kata[j];
        if ( hurufPertama != hurufKedua) {
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


  // Soal 2
  /*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
    // you can only write your code here!
    num = num.toString();

    if (num <= 3) {
      while (num[0] != num[num.length-1]) {
        num++;
        num = num.toString();
      }
      return num;
    } else {
      while (num[0] != num[num.length-1] || num[1] != num[num.length-2]) {
        num++;
        num = num.toString();
      }
      return num;
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  // additional test cases
  console.log(angkaPalindrome(1234)); // 1331


  // Soal 3
  function hitungJumlahKata(kalimat) {
    // you can only write your code here!

    // looping each character from beginning to length - 1, every find " " so counter++
    // return last counter++ (so even counter++ add by 1 cause by looping, moreover counter++ add by 1 for the last word)
    let counter = 1;
    for (i = 0; i < kalimat.length - 1; i++) {
      if (kalimat[i] == " ") {
        counter++;
      }
    }
    return counter;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

  console.log(' ');
  // soal 4
  function pasanganTerbesar(num) {
    // you can only write your code here!
    let converted = num.toString();
    let largest = 0;
    for (i = 0; i < converted.length - 1; i ++) {
        let pasanganAngka = converted[i] + converted[i + 1];

        if (pasanganAngka > largest) {
          largest = pasanganAngka;
        }
    }
    return largest;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99