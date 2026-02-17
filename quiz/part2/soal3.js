// ## Soal 3

function hitungJumlahKata(kalimat) {
  // you can only write your code here!

    // if (kalimat.trim() == '') return 0;
    // return kalimat.trim().split(" ").length;

    kata = kalimat.trim();
    if(kata == '') return 0;

    let hitungKata = 1;

    for(let i = 0; i < kata.length; i++){
        if(kata[i] === " "){
            hitungKata += 1
        }
    }
    return hitungKata;
    
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
console.log(hitungJumlahKata('           '))
