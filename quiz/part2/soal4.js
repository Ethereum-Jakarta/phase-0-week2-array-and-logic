
function pasanganTerbesar(num) {
  let angka = num.toString();
  let max = 0;

  for (let i = 0; i < angka.length - 1; i++){
    let pasangan = parseInt(angka[i] + angka[i + 1]);
    if(pasangan > max){
        max = pasangan;
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