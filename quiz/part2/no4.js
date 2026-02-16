function pasanganTerbesar(num) {
    let numS = String(num);
    let terbesar = Number(numS.slice(0,2));
    for(let i=1; i < numS.length-1; i++){
        pasangan = Number(numS.slice(i, i+2));
        if(pasangan > terbesar){
            terbesar = pasangan;
        }
    }
    return terbesar;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99