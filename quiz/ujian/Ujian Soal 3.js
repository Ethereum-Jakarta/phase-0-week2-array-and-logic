function groupAnimals(animals) {
  animals.sort();

  let hasil = [];
  let kelompok = [animals[0]];
  for (let i = 1; i < animals.length; i++) {
    if (animals[i][0] === kelompok[0][0]) {
      kelompok.push(animals[i]);
    } else {
      hasil.push(kelompok);

      kelompok = [animals[i]];
    }
  }

  hasil.push(kelompok);

  return hasil;
}

console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));

console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
); 
