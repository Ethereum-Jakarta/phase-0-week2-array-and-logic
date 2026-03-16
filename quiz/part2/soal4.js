function pasanganTerbesar(num) {
  const conversi = num.toString();

  let pasanganTerbesar = 0;

  for (let i = 0; i < conversi.length; i++) {
    const pasangan = parseInt(conversi.substr(i, 2));

    if (pasangan > pasanganTerbesar) {
      pasanganTerbesar = pasangan;
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
