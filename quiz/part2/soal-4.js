function pasanganTerbesar(num) {
  let convert = num.toString();
  let maxPair = 0;

  for (let i = 0; i < convert.length - 1; i++) {
    const pair = parseInt(convert[i] + convert[i + 1]);
    maxPair = Math.max(maxPair, pair);
  }

  return maxPair;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
