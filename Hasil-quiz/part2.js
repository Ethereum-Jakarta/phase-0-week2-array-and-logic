/*
Soal 1
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  let strArray = kata.toLowerCase().split('');
  let newArr = strArray.join('');
  let reverseArr = [...newArr].reverse().join('');

  if(newArr === reverseArr) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome(`katak`))
console.log(palindrome(`Ayam`))
console.log(palindrome(`aabaa`))


// Penjelasan kode di atas
// membuat variabel baru untuk menyimpan array dari string menggunakan split 
// fungsi dari tolowercase adalah untuk mengubah array menjadi huruf non kapital semua
// membuat variable baru lalu menggunakan join() untuk mengubah array menjadi string 
// membuat variable baru lalu menggunakan spread operator agar tidak mengubah array originalnya 
// lalu gunakan perintah reverse untuk melakukan reverse terhadap string tersebut
// setelah semua itu, gunakkan operator if untuk membandingkan apakah string dan string original sama atau tidak
// jika sama akan keluar output yaitu true, jika tidak akan keluar output yaitu false .

// Soal 2
// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
// Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
// Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
// Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
// Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
// note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
// note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa

function cariPalindrome(n) {
  return angkaPalindrome(n+1);
} 

function angkaPalindrome(n) {
  let numStr = String(n) 
  let numReverse = numStr.split('').reverse('').join('')

  if (numStr === numReverse) {
    return n;
  }
  return angkaPalindrome(n+1) 
}
console.log(cariPalindrome(11))

// Penjelasan kode diatas 
// Membuat function pertama untuk memastikan function akan tetap mencari angka palindrome meski tetep sudah palindrome diawal
// membuat function kedua sebagai function recursive untuk mencari angka palindrome selanjutnya
// membuat variable baru untuk menguba angka menjadi string
// membuat variable baru untuk membuat untuk melakukan reverse terhadap split 
// dengan cara mengubah string menjadi array dengan split perkarakter ('') dan mereverse array tersebut dengan reverse('') lalu menggabungkan kembali elemen array kembali dengan join('')
// selanjutnya menyamakan apakah string awal dan string reverse sama atau tidak dengan operator if 
// jika sudah sama maka akan mengembalkan nilai n, jika tidak maka akan mengebalikan nilai n  +1 hingga angka menjadi sama
// jika sudah, langkah terakhir adalah memanggil function tersebut dengan console.log seperti biasa 

//Soal 3
function hitungJumlahKata(kalimat) {
  let kata_counter = 0
   for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === ' ') {
      if (kalimat[i - 1] !== ' ') { 
        kata_counter++
        }
    }
   }  
   let last = kalimat.length - 1  
   if (kalimat[last] !== ' ') {
   kata_counter++
   }
   return kata_counter;
}
// TEST CASES
console.log(hitungJumlahKata('I have a dream'));

//penjelasan kode diatas :
//membuat variabel baru untuk menghitung jumlah kata yang dimulai dari 0
//Membuat sebuah fungsi untuk menghitung jumlah kata dalam sebuah kalimat
//membuat looping dalam fungsi tersebut untuk mengiterasikan setiap karakter dan elemen di kalimat tersebut
//menggunakan operator if untuk memastikan menghitung sebuah kata setiap spasi (if (kalimat[i] === ' '))
//menggunakan operator if kedua untuk memastikan setiap spasi tidak dihitung dalam perhitungan (if (kalimat[i - 1] !== ' '))
//kata_counter++ digunakan untuk sebagai tanda untuk menghitung setiap kata yang sudah memenuhi kriteria operator if tersebut
//membuat variabel baru untuk menyimpan index terakhir dalam kalimat tersebut
//menggunakan operator if untuk tidak menghitung spasi di index terakhr
//lalu kembali menggunakan kata_counter++ sebagai tanda untuk menghitung setiap kata yang sudah memenuhi kriteria operator if tersebut
//langkah terakhir, mengembalikan nilai kata_counter agar mengeluarkan output dari jumlah kalimat tersebut ketika function tersebut dipanggil

//Soal 4
function pasanganTerbesar(num) {
  const numString = num.toString().split('');
  const numPaired = [];
  for (let i = 0; i < numString.length; i+=2) {
    if (i + 1 < numString.length) {
      numPaired.push(numString[i] + numString[i + 1])
    } else {
      numPaired.push(numString[i])
    }
    }
    const NilaiTertinggi = Math.max(...numPaired)
    return NilaiTertinggi;
  } 



// TEST CASES
console.log(pasanganTerbesar(651437))
console.log(pasanganTerbesar(200807))
console.log(pasanganTerbesar(990929))
console.log(pasanganTerbesar(17085218392))

//membuat fungsi terlebih dahulu dengan variabel angka
// membuat array untuk menampung hasilnya
//membuat looping untuk mengiterasikan array tersebut, dengan memulai index 0
//dan menggunakan singleNum.length -1 untuk menghindari out of range index lalu menggunakan i+=2 untuk mengambil  dua karakter secara berurutan
//didalam loop, menggunakan if statement untuk memeriksa apakah i + 1 masih dalam batas panjang array.
//jika ya, maka kita menggabungkan  dua digit berurutan dengan singleNum[i] dan singleNum[i+1] dan memasukannya dalam coupleNum  
//jika tidak, kita menambahkan hanya satu digit dalam singleNum[i] saja
//lalu setelah semua angka menjadi 2 pasangan, gunakan perintah untuk mengambil nilai tertinggi dari array tersebut menggunakan math.max 
//langkah terakhir tinggal mengembalikan angka tersebut kedalam functionnya

