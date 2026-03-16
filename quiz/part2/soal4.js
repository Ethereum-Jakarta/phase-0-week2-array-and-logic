function pasanganTerbesar(num) {
  const numStr = num.toString();

  let pasanganTerbesar = 0;

  for (let i = 0; i < numStr.length - 1; i++) {
    const pasanganSekarang = parseInt(numStr[i] + numStr[i + 1]);

    if (pasanganSekarang > pasanganTerbesar) {
      pasanganTerbesar = pasanganSekarang;
    }
  }

  return pasanganTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
