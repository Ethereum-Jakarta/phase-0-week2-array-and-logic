function pasanganTerbesar(num) {
  // you can only write your code here!
  let max = -Infinity;
  num = num.toString().split("");

  for (let i = 0; i < num.length; i++) {
    let temp = parseInt(num[i] + num[i + 1]);
    if (max < temp) max = temp;
  }
  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
