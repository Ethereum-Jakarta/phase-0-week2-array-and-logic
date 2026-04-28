// ## Soal 4
function pasanganTerbesar(num) {
  // you can only write your code here!
  numStr = num.toString()
  let terbesar = 0
  for(let i = 0; i < numStr.length - 1; i++) {
    pasangan = numStr.slice(i, i+2)
    if (pasangan > terbesar) {terbesar = pasangan}
  }
  return terbesar
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop