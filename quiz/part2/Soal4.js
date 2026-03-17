function pasanganTerbesar(num) {
  // you can only write your code here!
  let sawit = num.toString()
  let wowo = []
  for(var i=0;i < sawit.length;i++) {
    wowo[i] = sawit[i] + sawit[i +1]
  }
  wowo.pop()
  wowo = wowo.map(Number);
  wowo = Math.max(...wowo)
  return wowo
   
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99