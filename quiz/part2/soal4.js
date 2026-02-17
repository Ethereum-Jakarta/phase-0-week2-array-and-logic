function pasanganTerbesar(num) {
  // you can only write your code here!
  numString = num.toString()
  let pasanganTerbesar="0";
  for(let i = 0 ; i < numString.length-1; i++){
    if(pasanganTerbesar < numString[i]+numString[i+1])
        pasanganTerbesar=numString[i] + numString[i+1]
    }

    return pasanganTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99