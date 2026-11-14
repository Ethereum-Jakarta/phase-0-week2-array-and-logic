
function pasanganTerbesar(num) {
  // you can only write your code here!
  let numString = String(num);
  let len = numString.length;
  let i = 1
  let max = Number(numString.substring(0,2));
  while(i < len-1){
      if (Number(numString.substring(i,i+2)) > max){
          max = Number(numString.substring(i, i + 2));
    }
    i++;
  }
  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
