function hitungJumlahKata(kalimat) {
    // you can only write your code here!

    let words = [];
    let word = "";

    for (let a = 0; a < kalimat.length; a++) {
        if (kalimat[a] !== " ") {
            word += kalimat[a];
        } else {
            words.push(word);
            word = "";
        }
    }
    words.push(word);

    return words.length;

}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5