// ## Soal 4
// js
function pasanganTerbesar(num) {
  // you can only write your code here!
  let str = num.toString();
  let max = 0;

  for(i = 0; i < str.length - 1; i++){
    let pasangan = str[i] + str[i+1];
    let angka = Number(pasangan);

    if(angka > max){
      max = angka
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


// TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop