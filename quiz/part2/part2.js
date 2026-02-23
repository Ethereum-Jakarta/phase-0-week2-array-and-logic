//soal no 1

function palindrome(kata) {

  let reverseString = kata.split('').reverse().join('')
  
  if (kata === reverseString) {
    return true
  } else {
    return false
  }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

//soal no 2

function angkaPalindrome(num) {
  let numStr = num.toString()
  let reverse = numStr.split('').reverse().join('');
  while (numStr !== reverse || num <= 10) {  
    num++;
    let numStr = num.toString()
    let reverse = numStr.split('').reverse().join('');
    if (numStr === reverse) {
      return num
    }
  }
  
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000));


//soal no 3

function hitungJumlahKata(kalimat) {
  let jumlahKata = kalimat.split(' ')


  return jumlahKata.length
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

//soal no 4

function pasanganTerbesar(num) {
  let counter = []
  let numStr = num.toString();

  for (let i = 0; i < numStr.length - 1; i++){
    counter.push(parseInt(numStr[i]+ numStr[i+1]))
  }
  let hasil = Math.max(...counter)
  return hasil;

}

console.log(pasanganTerbesar(641573))
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
