function targetTerdekat(arr) {
    let huruf1 = 'o'
    let huruf2 = 'x'
    let letakHurufBeda = [];//4,5,6 & 6
    let letakHurufAwal = [];//0 & 0,4,5
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === huruf1) letakHurufBeda.push(i);
        if(arr[i] === huruf2) letakHurufAwal.push(i);
    }
    let hasilJarak = Infinity;
    
    for(let i=0; i < letakHurufAwal.length; i++){
        for(let j=0; j < letakHurufBeda.length; j++){
            let jarak = Math.abs(letakHurufAwal[i] - letakHurufBeda[j])
            if(jarak < hasilJarak) hasilJarak = jarak;
        }
    }
    
    if(letakHurufAwal.length === 0 || letakHurufBeda.length === 0) hasilJarak = 0;

    return hasilJarak
}
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
