function pasanganTerbesar(num) {
    let temp = num.toString();
    let maks = 0;

    for (let i = 0; i < temp.length - 1; i++) {
        let temp2 = parseInt(temp[i] + temp[i + 1]);

        if (temp2 > maks) {
            maks = temp2;
        }
    }

    return maks;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
