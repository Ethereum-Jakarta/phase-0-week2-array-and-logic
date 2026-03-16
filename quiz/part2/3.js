function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    let jumlah = 1;
    for (let i = 0; i < kalimat.length; i++) {
        if(kalimat[i] == " "){
            jumlah +=1;
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