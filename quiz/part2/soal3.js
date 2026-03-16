function hitungJumlahKata(kalimat) {
  let out = 0;
  let jumlahKata = false;

  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== ' ') {
      if (jumlahKata == false) {
        out++;
        jumlahKata = true;
      }
    } else {
      jumlahKata = false;
    }
  }

  return out;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5