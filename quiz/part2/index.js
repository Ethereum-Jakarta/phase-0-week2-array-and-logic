/**
 * SOAL 1
 */

function palindrome(kata) {
  kata = kata.replace(/[^a-zA-Z0-9]/g, '');
  let balikKata = kata.split('').reverse().join('');

  return kata === balikKata;
};


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false




/**
 * SOAL 2
 */

function angkaPalindrome(num) {
  //nilai awal dan mencari nilai palindrome selanjutnya
  num ++;
  while(true) {
    const strNum = num.toString();
    const reverseNum = strNum.split('').reverse().join('');
    if(strNum === reverseNum) {
      return num;
    };
    //mencari angka yg tidak palindrome
    num ++;
  };
};  

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001




/**
 * SOAL 3
 */

function hitungJumlahKata(kalimat) {
  const kata = kalimat.split(/\W+/);
  return kata.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5




/**
 * SOAL 4
 */

function pasanganTerbesar(num) {
  const numStr = num.toString();
  let numberMax = 0;

  for(let i = 0; i < numStr.length; i++ ) {
    if(numStr[i] > numberMax){
      numberMax =+ numStr[i] + numStr[i+1];
    };
  };

  return numberMax
};

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99