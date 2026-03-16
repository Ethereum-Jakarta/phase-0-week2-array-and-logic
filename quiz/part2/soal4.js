function pasanganTerbesar(num) {
    // you can only write your code here!
    let string = num.toString();
    let pasanganTerbesar = 0;
    for (let i = 0; i < string.length - 1; i++) {
        let pasangan = parseInt(string.substr(i, 2)) ;

        if (pasangan > pasanganTerbesar) {
            pasanganTerbesar = pasangan
        }
    }
    return pasanganTerbesar
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99

  //toString = mengubahah bilangan menjadi string
  // subStr = mengambil beberapa bilangan