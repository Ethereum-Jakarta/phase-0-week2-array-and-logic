function pasanganTerbesar(num) {
    let terbesar = 0
    let str = num.toString()
    for(i=0; i<str.length; i++){
        let angka = parseInt(str[i] + str[i+1])
        if(angka > terbesar){
            terbesar = angka
        }
    }
    return terbesar
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99