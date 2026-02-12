function groupAnimals(animals) {
  animals.sort();
  let grup = [];
  let inisialNama = [animals[0]];

  animals.forEach((nama, index) => {
    // console.log(nama[0]);
    // console.log(index);
    if (index != 0) {
      if (nama[0] === inisialNama[0][0]) {
        inisialNama.push(nama);
      } else {
        if (inisialNama[0][0] == "c") {
          grup.push(inisialNama);
        } else {
          grup.push(inisialNama.reverse());
        }
        inisialNama = [nama];
      }
    }
  });
  grup.push(inisialNama.reverse());
  return grup;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
