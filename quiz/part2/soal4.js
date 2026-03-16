function pasanganTerbesar(num) {
  let str = String(num);
  let max = 0;

  for (let i = 0; i < str.length - 1; i++) {
    let pembanding = Number(str.slice(i, i + 2));
    if (pembanding > max) max = pembanding;
  }

  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// // TIPS buat soal no 4: bikin variabel yang ngebikin tipe data num ke string biar bisa di loop
