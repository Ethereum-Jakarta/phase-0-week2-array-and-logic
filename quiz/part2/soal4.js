// mencoba memakai % seperti soal 3
function pasanganTerbesar(num) {
  // you can only write your code here!
  let terbesar = -1;
  while(num >= 1){
    let num1 = num%10;
    let num2 = Math.floor(num/10) % 10;

    let hasil = num1 + num2*10;
    if(hasil > terbesar){
      terbesar = hasil
    }
    num = Math.floor(num/10);
  }
  return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99