
function pasanganTerbesar(num) {
  // you can only write your code here!
  numSTR = num.toString();
  let Terbesar = 0;
  for(let i = 0; i < numSTR - 1; i++) {
    if(Number(numSTR[i] + numSTR[i+1]) > Terbesar) {
        Terbesar = Number(numSTR[i] + numSTR[i+1]);
    }
  }
  return Terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99