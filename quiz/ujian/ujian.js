/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!

    let indexX = -1; // Untuk menyimpan indeks terakhir 'x'
    let indexO = -1; // Untuk menyimpan indeks terakhir 'o'
    let jarakTerdekat = arr.length; // Inisialisasi jarak terdekat dengan panjang array

    // Loop untuk mencari posisi 'x' dan 'o'
    for (let i = 0; i < arr.length; i++) {
        // Jika elemen saat ini adalah 'x'
        if (arr[i] === 'x') {
            indexX = i; // Simpan posisi 'x'
            console.log("ini index x " + indexX)
            // Jika sudah menemukan 'o', hitung jarak
            if (indexO !== -1) {
                console.log("ini saya yakin gak di eksekusi" + indexO)
                let jarak = indexX - indexO; // Hitung jarak dari 'o' ke 'x'
                jarakTerdekat = Math.min(jarakTerdekat, Math.abs(jarak)); // Update jarak terdekat
            }
        }
        // Jika elemen saat ini adalah 'o'
        else if (arr[i] === 'o') {
            indexO = i; // Simpan posisi 'o'
            // Jika sudah menemukan 'x', hitung jarak
            if (indexX !== -1) {
                let jarak = indexO - indexX; // Hitung jarak dari 'x' ke 'o'
                jarakTerdekat = Math.min(jarakTerdekat, Math.abs(jarak)); // Update jarak terdekat
            }
        }
    }

    // Jika tidak ada 'x' atau 'o', kembalikan 0
    // Jika ada, kembalikan jarak terdekat
    return (indexX === -1 || indexO === -1) ? 0 : jarakTerdekat;

  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1

/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. 
Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
    // you can only write your code here!

    let multidimensi  = [[],[],[]]

    // cari angka genap
    for ( i = 0; i < arr.length; i++) {
        // cek anggka genap dan masukan di aray multidimensi 
        if ( arr[i] % 3 == 0 ) {
            multidimensi[2].push(arr[i])
        }
        else if ( arr[i] % 2 == 0 ) {
            multidimensi[0].push(arr[i])
        }else {
            multidimensi[1].push(arr[i])
        }
    }

    return multidimensi;
}
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();

    let arrayHewan = [];

    let pemisahGrup = [animals[0]];
    
    for (let i = 1; i < animals.length; i++) {
        if (animals[i][0] === animals[i - 1][0]) {
            pemisahGrup.push(animals[i]); 
        } else {
            arrayHewan.push(pemisahGrup); 
            pemisahGrup = [animals[i]]; 
        }
    }

    arrayHewan.push(pemisahGrup);

    return arrayHewan;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
