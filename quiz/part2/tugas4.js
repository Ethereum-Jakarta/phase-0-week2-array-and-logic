
function pasanganTerbesar(num) {
    let pasangan = 0;
    let str = num.toString().split('');
    
    for (let i = 0; i < str.length - 1; i++) {
      if (i === 0) pasangan = str[i] + str[i+1];
      if (pasangan < parseInt(str[i] + str[i+1])) pasangan = parseInt(str[i] + str[i+1]);
    }
    return parseInt(pasangan);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


//TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop