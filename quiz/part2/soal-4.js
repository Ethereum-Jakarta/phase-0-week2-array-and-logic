function pasanganTerbesar(num) {
  let arrNum = [];
  let stringNum = num.toString();

  for(let i=0; i<stringNum.length; i++){
    if (i < stringNum.length-1){
      arrNum.push(stringNum[i] + stringNum[i+1]);
    }
  }

  arrNum.sort(function(num1, num2){
    return num2-num1;
  })
  return parseInt(arrNum[0])
}
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
