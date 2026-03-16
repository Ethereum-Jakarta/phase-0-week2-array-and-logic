function perkalianUnik(arr) {
  let hasil = [];

  for (let i = 0; i < arr.length; i++) {
    let kali = 1;

    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        kali *= arr[j];
      }
    }

    hasil.push(kali);
  }

  return hasil;
}

console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1, 4, 3, 2, 5]));
console.log(perkalianUnik([1, 3, 3, 1]));
console.log(perkalianUnik([2, 1, 8, 10, 2]));
