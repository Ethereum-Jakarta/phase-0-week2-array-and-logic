function pasanganTerbesar(num) {
  // you can only write your code here!
  let input = num.toString();
  let bPair = input[0]+input[1];
  let pair = ''
  for(let i = 0;i<input.length-1;i++){
    pair = input[i]+input[i+1];
    if(pair > bPair) bPair = pair;
  }
  return bPair
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99