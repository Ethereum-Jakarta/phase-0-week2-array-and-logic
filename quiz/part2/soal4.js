// Soal 4

function pasanganTerbesar(num) {
  // you can only write your code here!
  let numStr = String(num);

  let angkaTerBesar = 0;
  
  for(let i = 0; i < numStr.length -1; i++) {
    let tangkapPasangan= numStr.slice(i, i+2);

    let num = Number(tangkapPasangan);

    if(num > angkaTerBesar) {
        angkaTerBesar = num;
    }

  }
  return angkaTerBesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99