function pasanganTerbesar(num) {
    // you can only write our coe here!
    let string = num.toString();
    let digit;
    let digit2;
    let arr = [];
    //pisah digit
    for (let i = 0; i < string.length; i += 2) {
        digit = string.slice(i, i + 2);
        arr.push(digit);
    }
    for (let h = 1; h < string.length; h += 2) {
        digit2 = string.slice(h, h + 2);
        arr.push(digit2);
    }
    // ubah arr ke number
    for (let j = 0; j < arr.length; j++) {
        arr[j] = +arr[j];
    }
    //bandingkan arr
    let hasil = arr[0];
    for (let k = 1; k < arr.length; k++) {
        if (arr[k] > hasil) {
            hasil = arr[k];
        }
    }
    return hasil;
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
