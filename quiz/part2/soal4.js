function pasanganTerbesar(num) {
  let max = num % 100;
  while (num != 0) {
    let min = num % 100;
    if (max < min) {
      max = min;
    }
    num = parseInt(num / 10);
  }
  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
