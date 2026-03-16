//1. pisahkan kata berdasarkan spasi menggunakan metode split
//hitung jumlah kata dari yang dipisahkan


function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    const kata = kalimat.split(' ')
    jumlahKata = kata.length;
    return jumlahKata;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5