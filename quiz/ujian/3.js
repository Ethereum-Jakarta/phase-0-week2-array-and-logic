function groupAnimals(animals) {
  // you can only write your code here!
  let obj = {};
  // animals.sort();

  for (let i = 0; i < animals.length; i++) {
    if (obj[animals[i][0]] !== undefined) {
      obj[animals[i][0]].push(animals[i]);
    } else {
      obj[animals[i][0]] = [animals[i]];
    }
  }

  // short way: different output
  // uncomment line 16 - 21 and line 4 for using this method and comment line 25 - 37
  // const result = []
  // for (const key in obj) {
  //   result.push(obj[key])
  // }

  // return result

  // long way: same output
  // comment line 25 - 37 if you want use the short way method, and uncomment line 16 - 21 and line 4
  const firstCharKey = []
  for (const prop in obj) {
    firstCharKey.push(obj[prop][0].charAt(0));
  }
  
  firstCharKey.sort();
  const result = [];
  
  for (const key of firstCharKey) {
    result.push(obj[key]);
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
