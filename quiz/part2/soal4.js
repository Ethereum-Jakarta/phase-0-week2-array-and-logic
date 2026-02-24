function pasanganTerbesar(num) {
    // you can only write your code here!
    let numStr = num.toString();
    let largest = 0;
    for(let i = 0; i < numStr.length; i++) {
        let digits = parseInt(numStr.slice(i, i+2));
        if (digits > largest) {
            largest = digits;
        }
    }
    return largest;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99