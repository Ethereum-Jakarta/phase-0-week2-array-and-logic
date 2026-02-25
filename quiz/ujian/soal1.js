// Soal 1

/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

// ==== ALGORITMA ====
// 1. Gunakan oengkondisian if dan juga method indexOf untuk memeriksa jika tidak ada elemen x sama sekali dalam suatu array maka langsung return 0
// 2. Buat 2 variable Opos untuk posisi elemen O dan juga XPos untuk menyimpan indeks atau posisi X
// 3. Buat for loop untuk memeriksa setiap elemen dalam array
// 5. Gunakan pengkondisian if dan else if untuk memriksa jika indeks saat ini merupakan elemen dari karakter x atau o maka simpan posis atau indeks nya dalam varaible
// 6. Gunakan pengkondisian if untuk memastikan kedua variable Ops dan Xpos sudah memiliki nilai atau tidak -1 untuk supaya bisa di cek jarak dari posisi o ke x
// 7. Gunakan method Mtah.abs() untuk mengetahui jarak antara karakter o dan x
// 8. Bandingkan hasilnya dengan variable jarakterdekat (apabila hasil pengecekan poisis lebih kecil dari pada nilai dari variable jarak terdekat, maka masukan value jarak posisi o => x kedalam varaible jarak terdekat)
// 9. kembalikan variable jarak terdekat setelah loop selesai.

function targetTerdekat(arr) {
  // you can only write your code here!
  if(arr.indexOf('x') === -1) {return 0;}

    let Opos = -1;
    let Xpos = -1;

    let jarakTerdekat = arr.length;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'x') { Xpos = i;} 
        else if(arr[i] === 'o') {Opos = i;}

        if(Xpos !== -1 && Opos !== -1) {
            let  jarak2 = Math.abs(Opos - Xpos);
             if(jarak2 < jarakTerdekat) {jarakTerdekat = jarak2;} 
        }                
    }
    return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1