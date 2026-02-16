function pasanganTerbesar(num) {
    let strNum = num.toString();
    let angkaMax = 0;

    for (let i = 0; i < strNum.length - 1; i++) {
        let angka = parseInt(strNum[i] + strNum[i + 1]);
        if (angka > angkaMax) {
            angkaMax = angka;
        }
    }
    
    return angkaMax;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99