function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  let result = [];
  let group = [];
  for (let i = 0; i < animals.length; i++) {
    if (i === 0) {
      group.push(animals[i]);
      continue;
    } else if (animals[i][0] === group[0][0]) {
      group.push(animals[i]);
    } else {
      result.push(group);
      group = [animals[i]];
    }
  }
  if (group.length > 0) {
    result.push(group);
  }
  return result;
}
// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
