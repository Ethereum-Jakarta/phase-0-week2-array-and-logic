function pasanganTerbesar(num) {
  // you can only write your code here!
  let input = num.toString();
  let x = "";
  let y = input[0] + input[1];

  for (let i = 1; i < input.length - 1; i++) {
    x = input[i] + input[i + 1];
    if (Number(x) > Number(y)) y = x;
  }

  return y;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
