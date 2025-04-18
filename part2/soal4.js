// ## Soal 4
 // ```js
 function pasanganTerbesar(num) {
    var angka = String(num)
    var terbesar = 0
  
    for (var i = 0; i < angka.length - 1; i++) {
      var digitPertama = angka[i]
      var digitKedua = angka[i + 1]
  
      var pasangan = Number(digitPertama + digitKedua)
  
      if (pasangan > terbesar) {
        terbesar = pasangan
      }
    }
  
    return terbesar
  }


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
// ```