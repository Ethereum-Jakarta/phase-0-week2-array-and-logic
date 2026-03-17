function pasanganTerbesar(num) {
  // you can only write your code here!
  let numString = String(num);
  let maxNum = 0;
  for (let i = 0; i < numString.length; i++) {
    let pairNum = parseInt(numString[i]+numString[i+1]);
    if (maxNum< pairNum) maxNum = pairNum
  }
  return maxNum
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
