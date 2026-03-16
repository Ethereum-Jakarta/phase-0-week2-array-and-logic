// TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string 
//  biar bisa di loop

function pasanganTerbesar(num) {
    let numString = num.toString();
    let pasanganTerbesar = "";

    for (let i = 0; i < numString.length -1; i++) {
        let pasangan = numString.substring(i, i + 2);
        if (pasangan > pasanganTerbesar) {
            pasanganTerbesar = pasangan;
        }
    }

    return pasanganTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

