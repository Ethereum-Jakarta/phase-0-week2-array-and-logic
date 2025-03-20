function hitungJumlahKata(kalimat) {
  // you can only write your code here!
   let total = 1
   for(let i = 0; i < kalimat.length; i++){
     //console.log(kalimat[i])
     //console.log(kalimat.length) 
     if(kalimat[i] === " "){
       total += 1
     }
   }
  return total
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

