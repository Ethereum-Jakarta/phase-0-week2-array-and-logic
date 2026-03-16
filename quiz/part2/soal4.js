function pasanganTerbesar(num) {
  str = String(num)
  mx = 0
  for (let i = 1; i < str.length; i++) {
    mx = Math.max(mx, Number(str[i - 1]) * 10 + Number(str[i]))
  }
  return mx
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99