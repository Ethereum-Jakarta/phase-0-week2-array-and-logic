function pasanganTerbesar(num) {
  let thumb = num.toString();
  let result = 0;
  for (let i = 0; i < thumb.length - 1; i++) {
    let pair = parseInt(thumb[i] + thumb[i + 1]);
    if (pair > result) {
      result = pair;
    }
  }
  return result;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
