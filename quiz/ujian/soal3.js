function groupAnimals(animals) {
  animals.sort(); // Urutkan berdasarkan huruf pertama
  let hasil = [];

  for (let animal of animals) {
    let hurufAwal = animal[0];

    // Cek apakah grup dengan huruf ini sudah ada
    if (hasil.length === 0 || hasil[hasil.length - 1][0][0] !== hurufAwal) {
      hasil.push([animal]); // Buat grup baru
    } else {
      hasil[hasil.length - 1].push(animal); // Tambahkan ke grup yang ada
    }
  }

  return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
