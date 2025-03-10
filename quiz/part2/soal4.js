function pasanganTerbesar(num) {
    // you can only write your code here!
    /*Covert ke string
      Abis itu loop
      Abis itu ambil 2 pasang angka saat loop dan lakukan perbandingan*/
    let str = num.toString();
    let max = 0;
    for (let i = 0; i < str.length - 1; i++) {
      let angka1 = parseInt(str[i]);
      let angka2 = parseInt(str[i + 1]);
      let pasangan = angka1 * 10 + angka2;
      if (pasangan > max) {
        max = pasangan;
      
          
    }
    
    }
      return max;
  }
      
  
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99