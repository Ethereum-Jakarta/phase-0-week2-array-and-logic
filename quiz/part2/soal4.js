function pasanganTerbesar(num) {
    const deretan = num.toString();
    let max = 0;
    let pasanganMax = "";

    for (let i = 0; i < deretan.length - 1; i++) {
        const pasangan = deretan[i] + deretan[i+1];
        const nilaiPasangan = parseInt(pasangan);

        if (nilaiPasangan > max) {
            max = nilaiPasangan;
            pasanganMax = pasangan;
        }
        
    }
    return pasanganMax;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99