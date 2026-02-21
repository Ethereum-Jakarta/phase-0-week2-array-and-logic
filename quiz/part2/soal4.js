function pasanganTerbesar(num) {
    let deretAngka = String(num);
    let Biggest = 0;
    for(i = 0; i < deretAngka.length; i++){
        let part = deretAngka.substring(i,i+2);
        let duaAngka = parseInt(part);
        if (duaAngka > Biggest)
            Biggest = duaAngka;
    }
    return Biggest;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99