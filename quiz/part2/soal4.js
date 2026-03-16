function pasanganTerbesar(num) {
  num = String(num);
  let num2 = [];
  for (i = 0; i <= num.length -2; i++){ // Make couple numbers
    num2.push(num[i]+num[i+1]);
  }
  let biggestNum = num2[0];
  for (j = 0; j <= num2.length -1; j++){ // Find the biggest couple number
    if (biggestNum < num2[j]) {
      biggestNum = num2[j];
    }
  }
  return Number(biggestNum);
}


  
 // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99 