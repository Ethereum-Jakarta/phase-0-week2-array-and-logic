// ## Soal 4
// ```js
function pasanganTerbesar(num) {

    let arrNum = [];
    let strNum = String(num);
    for (let i = 0; i < strNum.length - 1; i++) {
        arrNum.push(parseInt(strNum[i]+strNum[i+1]));
    }
    let result = Math.max(...arrNum);
    return result;
} 

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop