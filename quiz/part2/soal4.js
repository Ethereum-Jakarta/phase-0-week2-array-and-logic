function pasanganTerbesar(num) {
  // you can only write your code here!

  // konversi number jadi string
  let str_num = `${num}`;

  // buat variabel untuk menampung kombinasi terbesar
  let kombinasi_terbesar = 0;

  // buat variabel untuk menampung berbagai kombinasi dengan angka terbesar
  let kombinasi_num = [];
  
  // lakukan perulangan untuk mencari kombinasi angka
  for (let i = 0; i < str_num.length; i++) {
    if (!str_num[i + 1]) break;
    
    kombinasi_num.push(`${str_num[i]}${str_num[i + 1]}`)
  }

  // lakukan perulangan untuk menentukan kombinasi terbesar
  for (let j = 0; j < kombinasi_num.length; j++) {
    if (+kombinasi_num[j] > kombinasi_terbesar) kombinasi_terbesar = +kombinasi_num[j];
  }

  // kembalikan kombinasi terbesar
  return kombinasi_terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


// TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop