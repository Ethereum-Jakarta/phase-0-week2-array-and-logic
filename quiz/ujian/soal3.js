/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    //urutkan array berdasarkan abjad
    animals.sort();

    let result = [];//array hasil akhir
    let kelompok = [];//kelompok sementara
    let hurufAwal = animals[0][0]; //ambil hruf pertama dri hewanpertama

    for (let i = 0; i < animals.length; i++ ) {
        if (animals[i][0] === hurufAwal) {
            kelompok.push(animals[i]); // Masukkan hewan ke kelompok yang sama
        } else {
            result.push(kelompok); // Simpan klmpok yang sudah terbentuk
            kelompok = [animals[i]]; // Buat kelompok baru
            hurufAwal = animals[i][0]; // Perbarui huruf awal
        }
    }

    result.push(kelompok);
    return result;
  }
  
  // TEST CASES
  console.log(JSON.stringify(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(JSON.stringify(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ])));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

  //izin saya bikin ada JSON nya biar berjejer