function pasanganTerbesar(num) {
    let res = 0;
    let strnum = num.toString();
    for (let i = 0; i < strnum.length; i++) {
        if (strnum.slice(i,i+1)>res) {
           res = strnum.slice(i,i+2)
        }
    }
    return res
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
