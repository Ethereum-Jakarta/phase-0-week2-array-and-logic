function pasanganTerbesar(num) {
    // you can only write your code here!

    let numString = num.toString();
    let pasanganTerbesar = 0;
    
    for(let i=0; i < numString.length-1 ; i++){
        let gabung = numString[i] + numString[i+1];
        if (parseInt(gabung) >= pasanganTerbesar){
            pasanganTerbesar = parseInt(gabung);
        }
    }

    return pasanganTerbesar;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  console.log(pasanganTerbesar(123456789));
  console.log(pasanganTerbesar(1234)); 

  /*TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop*/