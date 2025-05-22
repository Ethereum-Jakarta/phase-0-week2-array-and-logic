function hitungJumlahKata(kalimat) {
    // let breakSentence = kalimat.split(' ');

    // let result = 0;
    // for (let i = 0; i < breakSentence.length; i++) {
    //     result++
    // }
    // return result;

    return kalimat.split(' ').length;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5