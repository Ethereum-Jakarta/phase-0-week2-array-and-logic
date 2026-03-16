function pasanganTerbesar(num) {
  let nom = num.toString();
  let besar = 0;
  for (let i = 0; i < nom.length; i++) {
    let gabung = parseInt(nom[i] + nom[i + 1]);
    if (gabung > besar) {
      besar = gabung;
    }
  }
  return besar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
// TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop
