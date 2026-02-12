function targetTerdekat(arr) {
    let posisiO = arr.indexOf('o'); // Cari indeks 'o'
    let posisiX = []; // Array untuk menyimpan posisi 'x'

    // Iterasi untuk mencari semua indeks 'x'
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            posisiX.push(i);
        }
    }

    // Jika tidak ada 'x', return 0
    if (posisiX.length === 0) {
        return 0;
    }

    // Hitung jarak terdekat
    let jarakTerdekat = Infinity; // Nilai awal sangat besar
    for (let i = 0; i < posisiX.length; i++) {
        let jarak = Math.abs(posisiX[i] - posisiO); // Hitung selisih posisi
        if (jarak < jarakTerdekat) {
            jarakTerdekat = jarak; // Perbarui jika jarak lebih kecil
        }
    }

    return jarakTerdekat; // Kembalikan jarak terdekat
}

// TEST CASES
console.log(targetTerdekat(['x', ' ', 'o', ' ', ' ', 'x'])); // Output: 2
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // Output: 0
console.log(targetTerdekat(['x', ' ', ' ', 'o', ' ', 'x', 'x'])); // Output: 1
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', 'o'])); // Output: 1
console.log(targetTerdekat(['x', 'o', 'x', 'x', 'o', 'x'])); // Output: 1
