function hitungJumlahKata(kalimat) {
    let kata = kalimat.split(" "); // Memisahkan string menjadi array kata
    let jumlahkata = kata.length; // Menghitung jumlah kata
    return jumlahkata; // Mengembalikan jumlah kata
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
