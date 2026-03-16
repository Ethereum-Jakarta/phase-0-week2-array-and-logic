// ==========================
// Soal 4
// ==========================

function pasanganTerbesar(num) {
  // you can only write your code here!
  let numStr = num.toString();

  let highest = numStr[0] + numStr[1];
  
  for (let i = 0; i < numStr.length - 1; i++) {
    if (numStr[i] + numStr[i + 1] >= highest) {
      highest = numStr[i] + numStr[i + 1];
    }
  }
  return highest;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// TIPS: buat variabel yang ngebikin tipe data number ke string biar bisa di loop
