function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    //disini metode kalimat adalah dengan jumlah kalimat = 1 + jumlah spasi
    let temp = 1;
    let len = kalimat.length;
    let i = 0;
    while(i<len){
        if(kalimat[i] == ' '){
          temp++ 
        }
        i++; 
    }
    return temp;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5