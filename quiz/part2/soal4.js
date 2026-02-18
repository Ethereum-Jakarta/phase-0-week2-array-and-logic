function pasanganTerbesar(num) {
  // Mengubah angka menjadi string
  const strNum = num.toString();
  let hasil = 0;

  // Mencari pasangan angka terbesar
  for (let i = 0; i < strNum.length - 1; i++) {
    const pasangan = strNum[i] + strNum[i + 1];
    if (pasangan > hasil) {
      hasil = pasangan;
    }
  }

  return hasil;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
