function hitungJumlahKata(kalimat) {
  // Memisahkan kalimat menjadi array kata
  const kataArray = kalimat.split(' ');

  // Menghitung jumlah kata dalam array
  return kataArray.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5