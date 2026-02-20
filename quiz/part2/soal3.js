function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let totalKalimat = 1;
  if (kalimat.length < 1) {
    totalKalimat = 0; // ini hanya tambahan ya sir, soalnya ini bagian dari input sanitation (btw, aku pernah belajar cysec. jadi resah kalo gak dikasi ini)
  }
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i + 1] === " ") { // ini juga input sanitation ya sir, untuk menghindari double spaci hehe
        continue;
    } else {
        if (kalimat[i] === " ") {
        totalKalimat++;
        }
    }
  }
  return totalKalimat;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5