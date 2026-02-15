function pasanganTerbesar(num) {
    let duo, banding, terbesar
    let strAngka = String(num)
    for (let i = 0; i < strAngka.length; i++) {
        duo = strAngka.slice(i,i+2);
        banding = strAngka.slice(i+1,i+3)
        if (terbesar!=null) {
            if (duo<terbesar) {
                continue
            }
        }
        if (duo>banding) {
            terbesar = duo
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

  console.log(pasanganTerbesar(1283947124390782374))