// soal 1
console.log("Soal 1");

function palindrome(kata) {
  let cleanStr = kata.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false

// Soal 2
console.log("Soal 2");

function angkaPalindrome(num) {
  while (true) {
    num++;
    let strNum = num.toString();
    let reversedStrNum = strNum.split("").reverse().join("");

    if (strNum === reversedStrNum) {
      return num;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

// soal 3
console.log("Soal 3");

function hitungJumlahKata(kalimat) {
  let kata = kalimat.trim().split(/\s+/);
  return kalimat.trim() === "" ? 0 : kata.length;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5

// Soal 4
console.log("Soal 4");

function pasanganTerbesar(num) {
  const numStr = num.toString();

  let terbesar = 0;

  for (let i = 0; i < numStr.length - 1; i++) {
    const pasangan = parseInt(numStr.substr(i, 2));

    if (pasangan > terbesar) {
      terbesar = pasangan;
    }
  }
  return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(72834673674267)); 
