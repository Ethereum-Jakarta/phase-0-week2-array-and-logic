function pasanganTerbesar(num) {
   let numStr = num.toString();
   let numBfr = 0;
   let big = 0;
   
   for (let i = 0; i < numStr.length - 1; i++) {
      let now = parseInt(numStr[i] + numStr[i + 1]);
      
      if (now >= numBfr) {
         numBfr = now;
      }
   }
   return numBfr;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
