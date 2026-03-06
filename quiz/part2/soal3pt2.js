/*
function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    let uuperampasanasetkapandisahkanya = kalimat.split(' ').length
    return uuperampasanasetkapandisahkanya
}
*/

function hitungJumlahKata(kalimat) {
    let total = 0
    let word = false

    
    for (let i = 0; i < kalimat.length; i++) {
      if(kalimat[i] !== ' ') {
        if (!word){
          total++;
          word = true;
        }
      } else
        word = false;
    }
    return total
  }
    // TEST CASES
    console.log(hitungJumlahKata('I have a dream')); // 4
    console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
    console.log(hitungJumlahKata('A song to sing')); // 4
    console.log(hitungJumlahKata('I')); // 1
    console.log(hitungJumlahKata('I believe I can code')); // 5

  