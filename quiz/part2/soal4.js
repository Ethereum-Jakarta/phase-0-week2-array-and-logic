//## Soal 4
//```js
function pasanganTerbesar(num) {
    let strNum = num.toString();
    let pivot = strNum[0]+strNum[1];
    for (let i = 0; i < strNum.length; i++){
        let data = strNum[i]+strNum[i+1];
        if(pivot < data){
            pivot = data;
        }
    }
    return pivot;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99