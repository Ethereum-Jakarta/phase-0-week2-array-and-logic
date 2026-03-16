function pasanganTerbesar(num) {
    // you can only write your code here!
    var numStr = num.toString();
    var max = Number(numStr[0] + numStr[1]);
    for (var i = 1; i < numStr.length - 1; i++) {
      var current = Number(numStr[i] + numStr[i + 1]);
      if (current > max) {
        max = current;
      }
    }
    return max;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99