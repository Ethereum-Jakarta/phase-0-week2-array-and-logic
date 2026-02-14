function pasanganTerbesar(num) {
  let strNum = num.toString(); // Ubah angka ke string
  let maxPair = 0;

  for (let i = 0; i < strNum.length - 1; i++) {
    let pair = parseInt(strNum[i] + strNum[i + 1]); // Ambil dua angka berurutan
    if (pair > maxPair) {
      maxPair = pair; // Simpan nilai terbesar
    }
  }

  return maxPair;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
