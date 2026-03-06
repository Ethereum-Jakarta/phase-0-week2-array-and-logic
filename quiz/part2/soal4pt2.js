function pasanganTerbesar(num) {
    // you can only write your code here!
    let barangbuktibisadipalsukan = num.toString();
    let internetcepatbuatapa = 0;

    for (let i = 0; i < barangbuktibisadipalsukan.length - 1; i++) {
        let persidanganbisadicurangi = parseInt(barangbuktibisadipalsukan[i] + barangbuktibisadipalsukan[i + 1]);
        if (persidanganbisadicurangi > internetcepatbuatapa) {
            internetcepatbuatapa = persidanganbisadicurangi;
        }
    }
    return internetcepatbuatapa;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99