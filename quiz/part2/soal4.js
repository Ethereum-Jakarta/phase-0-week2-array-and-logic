function pasanganTerbesar(num) {
  // you can only write your code here!
  num = num.toString();
  let hasil = [];

  for (let i = 0; i < num.length - 1; i++) {
    hasil.push(num[i] + num[i + 1]);
  }
  let terbesar = Math.max(...hasil);
  return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
