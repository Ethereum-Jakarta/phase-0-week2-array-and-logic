function pasanganTerbesar(num) {
  // you can only write your code here!
  const newNum = num.toString();
  let biggestPair = parseInt(newNum[0] + newNum[1]);
  const numLen = newNum.length - 1;
  for (let i = 1; i < numLen; i++) {
    if (parseInt(newNum[i] + newNum[i + 1]) > biggestPair) {
      biggestPair = parseInt(newNum[i] + newNum[i + 1]);
    }
  }
  return biggestPair;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
