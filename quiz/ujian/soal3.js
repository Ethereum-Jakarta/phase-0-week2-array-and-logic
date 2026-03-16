function groupAnimals(animals) {
  animals.sort();
  let grup = [];
  let inisialNama = [];

  animals.forEach((nama, index) => {
    if (index === 0 || nama[0] === inisialNama[0][0]) {
      inisialNama.push(nama);
    } else {
      grup.push(
        inisialNama[0][0] === "c" ? inisialNama : inisialNama.reverse()
      );
      inisialNama = [nama];
    }
  });

  grup.push(inisialNama.reverse());
  return grup;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
