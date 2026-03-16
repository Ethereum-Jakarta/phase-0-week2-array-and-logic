# Logic Challenge | Part 2

**_DISINI SOALNYA BELUM PAKE ARRAY, HANYA LOGIC_**

`jaman dahulu kala gua struggle di palindrome angka - Harkon 2020`

siap siap merasakan **_PAHITNYA LOOPING_**

## Soal 1

```js
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  // you can only write your code here!
  for (let i = 0; i < kata.length / 2; i++) {
    if (kata[i] !== kata[kata.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
```

## Soal 2

```js
/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
  // you can only write your code here!
  num++;

  while (true) {
    let numStr = num.toString();
    let angkaKebalik = "";

    for (let i = numStr.length - 1; i >= 0; i--) {
      angkaKebalik += numStr[i];
    }

    if (angkaKebalik == numStr) {
      return num;
    }
    num++;
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
```

## Soal 3

```js
function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let jumlahKata = 1;
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === " ") {
      jumlahKata++;
    }
  }
  return jumlahKata;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
```

## Soal 4

```js
function pasanganTerbesar(num) {
  // you can only write your code here!
  let numStr = num.toString();
  let maxNum = 0;
  for (let i = 0; i < numStr.length - 1; i++) {
    let pasangan = numStr[i] + numStr[i + 1];
    let pasanganNum = parseInt(pasangan);

    if (pasanganNum > maxNum) {
      maxNum = pasanganNum;
    }
  }
  return maxNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
```

TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop
