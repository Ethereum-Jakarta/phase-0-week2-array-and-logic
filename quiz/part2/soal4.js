function pasanganTerbesar(num) {
  // you can only write your code here!
  let max = 0;
  let numToString = num.toString();
  for (let i = 0; i < numToString.length; i++) {
    let temp = parseInt(numToString[i] + numToString[i + 1]);
    if (temp > max) {
      max = temp;
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
