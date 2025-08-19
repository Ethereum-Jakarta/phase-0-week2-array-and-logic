function pasanganTerbesar(num) {
  // you can only write your code here!
  let largestNum = -Infinity;
  let strNum = String(num);
  for(let i = 0; i < strNum.length; i++) {
    let num = strNum[i] + strNum[i + 1];

    if(num > largestNum) {
      largestNum = num;
    }
  }
  return largestNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99