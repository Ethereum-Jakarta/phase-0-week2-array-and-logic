function pasanganTerbesar(num) {
  let str = String(num);
  let max = 0;

  for (let i = 0; i < str.length - 1; i++) {
    let pasangan = Number(str[i] + str[i + 1]);
    if (pasangan > max) {
      max = pasangan;
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
