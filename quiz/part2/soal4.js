function pasanganTerbesar(num) {
    let strNum = num.toString();//merubah angka kestring
    let max = 0;//karna ingin mencari angka yang lebih besar dri 0

    for (let i = 0; i < strNum.length - 1; i++) { //strNum.length agar gk kebablasan
        let pasangan = parseInt(strNum[i] + strNum[i + 1]); //ambil dau digit berturu"
        if (pasangan > max) { //cek psangan terbesar
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