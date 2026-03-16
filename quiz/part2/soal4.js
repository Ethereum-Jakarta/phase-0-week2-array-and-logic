function pasanganTerbesar(num) {
    // you can only write your code here!
    let strNum = String(num); // Ubah angka ke string
    let maxPair = 0;

    for (let i = 0; i < strNum.length - 1; i++) {
        let pair = Number(strNum[i] + strNum[i + 1]); // Gabungkan dua digit
        if (pair > maxPair) {
            maxPair = pair; // Update jika pasangan lebih besar ditemukan
        }
    }

    return num + ' = ' + maxPair;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99