//  Soal 4

function pasanganTerbesar(num) {
  // you can only write your code here!
  let numStr = num.toString();
  let pasanganTerbesar = 0;
  for(let i=0; i<numStr.length-1; i++){
    let pasanganSaatIni = numStr.slice(i, i+2);
    if(Number(pasanganSaatIni)>pasanganTerbesar){
        pasanganTerbesar = pasanganSaatIni;
    }
  }
  return pasanganTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// SOAL 4 DONE