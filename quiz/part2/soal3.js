function hitungJumlahKata(kalimat) {
    var wordCounts = 1

    for (var i = 0, n = kalimat.length; i < n; i++) {
        if (kalimat[i] === " ") {
            wordCounts++
        }
    }

    return wordCounts
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
