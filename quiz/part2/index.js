
function palindrome(kata) {
    let kebalikan = kata.split('').reverse().join('');
    return kebalikan === kata;
  }
  
  console.log(palindrome('katak')); 
  console.log(palindrome('blanket')); 
  console.log(palindrome('civic')); 
  console.log(palindrome('kasur rusak'));
  console.log(palindrome('mister')); 
  console.log('soal 1');

  function angkaPalindrome(num) {
    let nextNum = num + 1;
     while (true) {
      let strNum = nextNum.toString();
      let reversed = strNum.split('').reverse().join('');
      if (strNum === reversed) {
        return nextNum;
      }
      nextNum++;
    }
  }
  

  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  
  console.log('soal2');

  function hitungJumlahKata(kalimat) {
   let kata = kalimat.split(' ').filter(word => word !== '');
    return kata.length;
  }
  
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  
  console.log('soal 3');
  

  function pasanganTerbesar(num) {
    let strNum = num.toString();
    let maxPair = 0;
    for (let i = 0; i < strNum.length - 1; i++) {
      let pair = strNum[i] + strNum[i+1];
      let pairNum = Number(pair);
      if (pairNum > maxPair) {
        maxPair = pairNum;
      }
    }
    return maxPair;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573));   // 73
  console.log(pasanganTerbesar(12783456));  // 83
  console.log(pasanganTerbesar(910233));    // 91
  console.log(pasanganTerbesar(71856421));  // 85
  console.log(pasanganTerbesar(79918293));  // 99
  