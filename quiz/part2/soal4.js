function pasanganTerbesar(num) {
    let string = num.toString();
    let max = Number(string[0]+string[1]);

    for (let i=1; i<string.length - 1; i++) {
        let gabung= Number(string[i]+string[i+1]);
        if (gabung > max) {
            max = gabung;
        }
    }
    return max;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99  