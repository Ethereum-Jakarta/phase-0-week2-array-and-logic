function pasanganTerbesar(num) {
    let strNum = String(num);

    let bigPair = 0
    for (let i = 0; i < strNum.length - 1; i++) {
        let total = strNum[i] + strNum[i + 1];
        if (bigPair < total) {
            bigPair = total
        }
    }
    return bigPair;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99