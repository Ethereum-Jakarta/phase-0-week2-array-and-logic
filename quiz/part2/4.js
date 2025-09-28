function pasanganTerbesar(num) {
    // you can only write your code here! // ubah ke string biar bisa di-slice
    let str = String(num);
    let angka = 0;

    for (let i = 0; i < str.length - 1; i++) {
        let pasangan1 = str[i];
        let pasangan2 = str[i+1];
        let pasangan = pasangan1 + pasangan2;
        let ubah = parseInt(pasangan)
        if (ubah > angka) {
            angka = ubah;
        }
    }
    return angka;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99