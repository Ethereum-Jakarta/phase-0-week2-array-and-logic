function pasanganTerbesar(num) {
  let numToString = num.toString();
  let biggestPair = null;

  for (let i = 0; i < numToString.length; i++) {
    let currentPair = numToString[i] + numToString[i + 1];

    if (currentPair > biggestPair) {
      biggestPair = currentPair;
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