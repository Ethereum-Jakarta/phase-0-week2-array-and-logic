function pasanganTerbesar(num) {
  // you can only write your code here!
  let s = num.toString();
  let terbesar = 0;

  for(let i = 0; i < s.length - 1; i++){
    let gabung = s[i] + s[i + 1];
    let sepasang = parseInt(gabung);
    if(sepasang > terbesar)terbesar = sepasang;
  }
  return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99