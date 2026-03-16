function pasanganTerbesar(num) {
    // you can only write your code here!
    num = num.toString().split('');
    pasangan_terbesar = 0;
    for (let i = 0; i < num.length; i++){
        pasangan = parseInt(num[i] + num[i + 1]);
        if(pasangan > pasangan_terbesar){
            pasangan_terbesar = pasangan;
        }
    }
    return pasangan_terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99