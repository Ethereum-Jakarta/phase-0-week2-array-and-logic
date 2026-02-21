function hitungJumlahKata(kalimat) {
  let jumlah = 0;
  let inKata = false;
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== ' ' && !inKata) {
      inKata = true;
      jumlah++;
    } else if (kalimat[i] === ' ') {
      inKata = false;
    }
  }
  return jumlah;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5