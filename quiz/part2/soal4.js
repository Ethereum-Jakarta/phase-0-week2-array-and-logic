function pasanganTerbesar(num) {
    num = num.toString()
    let max = ""
    for(let i = 0 ; i < num.length - 1 ; i++){
      test = parseInt(num[i] + num[i + 1])
      if(test > max ){
        max = test 
      }
    }
    return max
}
  // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
  

