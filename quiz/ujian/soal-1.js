/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let arr_x = [];
    let arr_o = [];
    let arrTotal = [];
    for (let i = 0; i <= arr.length; i++) {
        const el = arr[i];
        // console.log(el);
        if(el === 'x') {
            arr_x.push(i);
        } 
        if(el === 'o') {
            arr_o.push(i);
        }
    }
    if(arr_x.length === 0) {
        return 0
    }
    for (let o = 0; o < arr_o.length; o++) {
        const elemento = arr_o[o];
        for (let x = 0; x < arr_x.length; x++) {
            const elementx = arr_x[x];
            let total = elementx - elemento;
            arrTotal.push(Math.abs(total));
        }
    }
    let total = 0;
    for (let i = 0; i < arrTotal.length; i++) {
        const element = arrTotal[i];
        if(i === 0) {
            total = element;
        }
        if(element < total) {
            // console.log(total, element)
            total = element;
        }
    }
    return Math.abs(total)
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1