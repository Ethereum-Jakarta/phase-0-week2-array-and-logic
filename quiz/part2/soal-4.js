function pasanganTerbesar(num) {
    // you can only write your code here!

    let str = num.toString();
    let nilaiTerbesar = 0;

    for (let a = 0; a < str.length - 1; a++) {
        let pasangan = parseInt(str[a] + str[a + 1]);
        if (pasangan > nilaiTerbesar) {
            nilaiTerbesar = pasangan;
        }
    }
    return nilaiTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99