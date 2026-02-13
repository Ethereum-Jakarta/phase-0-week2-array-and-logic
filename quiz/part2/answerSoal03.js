function hitungJumlahKata(kalimat) {
  let countOfWord = 0;
  let inWord = false;
  let lengthOfSentences = kalimat.length === 1 ? 1 : kalimat.length - 1;
  for (let i = 0; i < lengthOfSentences; i++) {
    const char = kalimat[i];
    if (char !== " " && !inWord) {
      countOfWord++;
      inWord = true;
    } else if (char === " ") {
      inWord = false;
    }
  }
  return countOfWord;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
