function pasanganTerbesar(num) {
  // you can only write your code here!
  let bilangan = `${num}`;
  let hasil = [];
  let pasangan = 0;
  
  for (let i = 0; i < bilangan.length - 1; i++) {
    if (i < bilangan.length - 1) {
      pasangan = `${bilangan[i]}${bilangan[i+1]}`;
    } 
    hasil.push(pasangan);
  }

  //return hasil;

  let terbesar = hasil[0];

  for (let i = 0; i < bilangan.length - 1; i++) {
    if (terbesar < hasil[i]) {
      terbesar = hasil[i];
    } 
  }
  
  return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


//TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop
