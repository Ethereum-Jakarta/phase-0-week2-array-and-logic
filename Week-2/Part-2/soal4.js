function pasanganTerbesar(num) {
  // you can only write your code here!
  let toStr = num.toString()
  let terbesar = 0;
  for (let i = 0; i < toStr.length - 1; i++) {
    let hasil = toStr[i] + toStr[i + 1];
    if(hasil > terbesar) {
     terbesar = hasil;
    }
  }
  return Number(terbesar);
}
  // // let array = [];
  // // while(true) {
  // return hasil[0];


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
