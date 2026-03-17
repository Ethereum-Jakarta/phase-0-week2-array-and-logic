function hjk (kalimat) {
    let jk = 1;

    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === " ") {
            jk++;
        }
        
    }
    return (`${kalimat} = ${jk} kata`)
}

  
  // TEST CASES
  console.log(hjk('I have a dream')); // 4
  console.log(hjk('Never eat shredded wheat or cake')); // 6
  console.log(hjk('A song to sing')); // 4
  console.log(hjk('I')); // 1
  console.log(hjk('I believe I can code')); // 5