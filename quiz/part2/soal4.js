function pasanganTerbesar(num) {
  let str = num.toString(); // ubah number jadi string
  let maxTemporary = 0;
  let maxFinal = 0;

  for (
    let i = 0;
    i < str.length - 1;
    i++ //hasil (i) dari perulangan digunakan untuk rujukan index array yang akan dipasangkan
  ) {
    let pasangan = Number(str[i] + str[i + 1]); //membuat variabel yang menampung pasangan string index sesuai perulanagan ([i]) dengan index berikutnya ([i+1]) kemudian diubah menjadi number untuk dibandingkan
    if (pasangan > maxTemporary) {
      maxTemporary = pasangan;
    } // kondisi yang akan membandingkang nilai pasangan baru dengan nilai pasangan terbesar sebelumnya ((maxTemporary) karena pada perulangan pertama maxTemporary masih bernilai 0, maka otomatis nilai perulangan pertama akanlanhgsung disimpan)
  }
  maxFinal = maxTemporary; //jika perulangan berhenti, maka nilai terbesar dari berbagai kombinasi pasangan sudah ditemukan. oleh karena itu nilai ini akan disimpan ke variabel yang digunakan untuk menampung nilai final
  return maxFinal;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
