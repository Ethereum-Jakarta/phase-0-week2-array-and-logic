function pasanganTerbesar(num) {
  // you can only write your code here!
  let angka = String(num);
  let max = 0;

  for (let i = 0; i < angka.length - 1; i++) {
    let pasanganAngka = Number(angka.slice(i, i + 2), 10);

    if (pasanganAngka > max) {  
      max = pasanganAngka;
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