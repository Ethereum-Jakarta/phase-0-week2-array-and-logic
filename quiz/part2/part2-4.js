// Soal 4

function pasanganTerbesar(num) {
    // you can only write your code here!
    let numStr = num.toString();
    let highPair = 0;
    for (let i = 0; i < numStr.length - 1; i++) {
        let pair = parseInt(numStr[i] + numStr[i + 1]);
        if (pair > highPair) {
            highPair = pair;
        }

    }
    return highPair;
}

// TEST CASES
console.log("============================ Jawaban Soal 4 ============================");
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log("========================================================================\n");


// TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop