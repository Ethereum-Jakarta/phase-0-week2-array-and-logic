function hitungJumlahKata(kalimat) {
  let jumlah = "";
  let kalimatSplit = kalimat.split(" ");
  for (let i = kalimatSplit.length; i >= 0; i -= 1) {
    jumlah += i;
    return jumlah;
  }
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
