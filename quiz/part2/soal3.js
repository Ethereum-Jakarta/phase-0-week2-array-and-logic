function hitungJumlahKata(kalimat) {
    // let hitungKata = kalimat.split("")
    let jumlahSeparator = 0
    for (let i = kalimat.length;i>=0 ;--i) {
        if (kalimat[i] === ' ')
        ++jumlahSeparator
    }
    let jumlahKata = jumlahSeparator + 1
    return jumlahKata
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5