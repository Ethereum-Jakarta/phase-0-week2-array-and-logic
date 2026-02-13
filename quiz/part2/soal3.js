function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let count = 0;
  for (const char of kalimat) {
    if (char === " ") {
      count += 1;
    } else if (char === kalimat[kalimat.length - 1]) {
      count += 1;
    }
  }
  return count;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
