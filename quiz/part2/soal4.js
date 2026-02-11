function pasanganTerbesar(num) {
    // you can only write your code here!
    let number = num.toString();
    let terBesar = "";
    for (let i = 0; i < number.length - 1; i++) {
      let pair = number[i] + number[i + 1]
      if (pair > terBesar) {
        terBesar = pair;
      }
    }
    return terBesar;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
