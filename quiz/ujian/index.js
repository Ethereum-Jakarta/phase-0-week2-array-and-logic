// /**
//  * SOAL 1
//  */

function targetTerdekat(arr) {
  //menggunakan infinity untuk mencari nilai lebih kecil
  let jarakTerdekat =  Infinity;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'x') {
      for(let j = - 1; j < arr.length; j++) {
        if(arr[j] === 'o') {
          let jarak = Math.abs(i - j);
          jarakTerdekat = Math.min(jarakTerdekat, jarak);
        }
       }
    }
  }

  return jarakTerdekat === Infinity ? 0 : jarakTerdekat;
}

// // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1



/**
 * SOAL 2
 */

function mengelompokkanAngka(arr) {
    // inisialisasi array untuk setiap kelompok
    let genap = [];
    let ganjil = [];
    let kelipatan_3 = [];

    //lakukan lop[ setiap angla dalam array input
    arr.forEach(angka => {
      if(angka %2 === 0) {
          genap.push(angka);
      }else if(angka %2 !== 0) {
          if(angka %3 === 0) {
              kelipatan_3.push(angka);
          }else {
              ganjil.push(angka);
          }
      }
    });

    return [genap, ganjil, kelipatan_3];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

/**
 * Soal 3
 */

function groupAnimals(animals) {
    let group = [];

    animals.forEach(animal => {
        let index = group.findIndex(kelompokHewan => kelompokHewan [0] [0] === animal [0]);

        //jika kelompok tidak ditemukan, buat kelompok baru
        if(index === -1) {
            group.push([animal]);
        } else {
            //jika ditemukan, tambahkan ke kelompok baru 
            group[index].push(animal); 
        }
    });
    
    return group;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
