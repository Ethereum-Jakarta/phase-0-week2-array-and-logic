/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let result = [];
  let abjad = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  // dapatkan char pertama dari setiap animals
  let char_pertama = [];
  for (let i = 0; i < animals.length; i++) {
    char_pertama.push(animals[i][0]);
  }

  // filter char pertama yang ditemukan agar tidak duplikat
  let filter_char_pertama = [];
  for (let j = 0; j < char_pertama.length; j++) {
    let duplikat = false;

    for (let g = 0; g < filter_char_pertama.length; g++) {
        if (char_pertama[j] === filter_char_pertama[g]) {
            duplikat = true;
            break;
        }
    }

    if (duplikat) continue;
    filter_char_pertama.push(char_pertama[j]);
  }

  // mapping jumlah jenis result sesuai jumlah filter char pertama yang ditemukan
  for (let f = 0; f < filter_char_pertama.length; f++) {
    result.push([]);
  }

  // kelompokkan animals berdasarkan huruf pertama dalam result yang sudah di mapping
  // jumlahnya sesuai dengan jumlah jenis huruf pertama yang ada di animals
  for (let f = 0; f < filter_char_pertama.length; f++) {
    for (let h = 0; h < animals.length; h++) {
        if (animals[h][0] === filter_char_pertama[f]) result[f].push(animals[h]);
    }
  }

  // setelah dikelompokkan, sortir result agar kelompok animals disusun
  // berurutan sesuai abjad
  let sorted_result = [];
  for (let m = 0; m < abjad.length; m++) {
    let abjad_ditemukan = false;

    // cek dulu apakah ada abjad dari filter char pertama yang
    // sama dengan abjad sekarang yaitu abjad ke m, agar kita tidak perlu
    // menjalankan perulangan untuk mencari kelompok animals dengan huruf pertama
    // yang sama dengan abjad sekarang yaitu abjad ke m
    for (let b = 0; b < filter_char_pertama.length; b++) {
        if (filter_char_pertama[b] === abjad[m]){
            abjad_ditemukan = true;
            break;
        } 
    }
    if (!abjad_ditemukan) continue;
    
    for (let n = 0; n < result.length; n++) {
        if (result[n][0][0] === abjad[m]){
            sorted_result.push(result[n]);
            break;
        } 
    }
  }
  
  return sorted_result;
}   

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]