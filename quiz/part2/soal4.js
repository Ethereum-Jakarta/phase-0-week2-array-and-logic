function pasanganTerbesar(num) {
  let strOfNum = num.toString();
  let pasanganTerbesar = '';
  let max = 0;
  let i = 0;
  while (i < strOfNum.length - 1) {
    let pasangan = strOfNum[i] + strOfNum[i + 1];
    if (Number(pasangan) > max) {
      max = Number(pasangan);
      pasanganTerbesar = pasangan;
    }
    i++;
  }
  return pasanganTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99