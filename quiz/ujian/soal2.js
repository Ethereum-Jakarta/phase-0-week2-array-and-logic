function mengelompokkanAngka(arr) {
    // Array untuk menyimpan hasil kelompok
    let hasil = [[], [], []];

    // Iterasi setiap angka dalam array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            hasil[2].push(arr[i]); // Kelipatan 3
        } else if (arr[i] % 2 === 0) {
            hasil[0].push(arr[i]); // Angka genap
        } else {
            hasil[1].push(arr[i]); // Angka ganjil
        }
    }

    return hasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]