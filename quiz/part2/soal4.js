function pasanganTerbesar(num) {
    let Str = String(num);
    // simpan data untuk perbandingan
    let x = 0;

    for (let i = 0; i < Str.length - 1; i++) {
        let y = Str[i] + Str[i + 1]
        if (y > x) {
            x = y
        }
    }
    return x;
  }

  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
