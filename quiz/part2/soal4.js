function pasanganTerbesar(num) {
  // you can only write your code here!
  let angka = num.toString();
  let out = 0;

  for (let i = 0; i < angka.length - 1; i++) {
    let angka1 = angka[i];
    let angka2 = angka[i + 1];
    let gabung = angka1 + angka2; 

    if (gabung > out) {
      out = gabung;
    }
  }
  return out;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99