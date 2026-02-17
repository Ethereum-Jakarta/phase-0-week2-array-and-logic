// ## Soal 2

/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
    // you can only write your code here!

  // let hasil = [];
  // let dataNum = num.toString()

  // for (let i = 0; i <= 205; i++){
  //   // console.log(i.toString().split(""));
  //   datas = i.toString()
  //   console.log(datas.length / 2)
  //   let isPalin = true

  //   for(let j = 0; j < Math.floor(datas.length / 2); j++) {
  //     console.log(datas[j] + datas[datas.length - j -1])
  //     // console.log(datas )

  //     if(datas[j] !== datas[datas.length - j - 1]){
  //       isPalin = false;
  //       break;
  //     }

  //   }
  //   if(isPalin){
  //     hasil.push(datas)
  //   }


  // }

  // return hasil;



  for(let i = num + 1;  ; i++){
    let data = i.toString();
    // console.log(data);
    let isPalin = true;

    for(let j = 0; j < Math.floor(data.length / 2); j++){
      if(data[j] !== data[data.length - j - 1]){
        isPalin = false;
        break;
      }
    }
    // if(i < 10 ) return i;
    if(isPalin){
      return i;
    }
  }


}

// TEST CASES
console.log(angkaPalindrome(5)); // 6
console.log(angkaPalindrome(2)); // 3
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001







