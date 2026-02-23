// Soal 4

// ==== ALGORITMA ====
// 1. Ubah input menjadi tipe data string agar bisa di loop
// 2. Buat for loop untu memeriksa setiap pasangan angka
// 3. Buat variable pasangan terbesar untuk menyimpan pasangan terbesar
// 4. Buat Loop kedua untuk memriksa psanagan terbesar kedua
// 5. buat variable pasanagn terbesar kedua
// 6. Gunakan pengkondisian if untuk membandingkan pasangan terbesar di loop pertama atau pasanag loop kedua yang terbesar
// 7. Jika pasangan loop 2 lebih besar dari loop satu, masukan nilai tersebut ke variable psangan terbesar loop 1 dan jika sebaliknya cari sampai ketemu yang lebih besar
// 8. kembalikan nilainya

function pasanganTerbesar(num) {
  // you can only write your code here!
  let numStr = String(num);

  for(let i = 0; i < numStr.length - 1; i++) {
    let pasanganTerbesar1 = '';
    pasanganTerbesar1 += numStr[i];
    pasanganTerbesar1 += numStr[i + 1];

    for(let j = 1; j <= numStr.length - 1; j++) {
        let pasanganTerbesar2 = '';
        pasanganTerbesar2 += numStr[j];
        pasanganTerbesar2 += numStr[j + 1];

        if(pasanganTerbesar2 > pasanganTerbesar1) {
            pasanganTerbesar1 = pasanganTerbesar2;
        }
    }

    return pasanganTerbesar1;
  }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99


// TIPS buat soal no 4: bikin variabel yang ngebikin tipe data number ke string biar bisa di loop

