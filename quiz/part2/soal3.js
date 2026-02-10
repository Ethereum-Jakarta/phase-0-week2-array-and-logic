function hitungJumlahKata(kalimat) {
  // you can only write your code here!
    let wordCount = 0;
    let isWord = false;
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== ' ' && !isWord) {
            isWord = true;
            wordCount++;
        } else if (kalimat[i] === ' ') {
            isWord = false;
        }
    }
    return wordCount;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5