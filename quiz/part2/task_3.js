function hitungJumlahKata(kalimat) {
    return kalimat.trim().split(' ').length;
}

function hitungJumlahKata2(kalimat) {
    word = [];
    tmp_word = '';
    for(let i = 0; i < kalimat.length; i++) {
        if(kalimat[i] === ' ') {
            word.push(kalimat[i]);
            tmp_word = '';
        } else {
            tmp_word += kalimat[i];
            if(i === kalimat.length - 1) {
                word.push(tmp_word);
            }
        }
    }
    return word.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata2('A song to sing')); // 4
console.log(hitungJumlahKata2('I')); // 1
console.log(hitungJumlahKata2('I believe I can code')); // 5