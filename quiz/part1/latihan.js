// let buah = ["durian", "mangga", "apel", "jeruk", "duku"];
// // let tengah = Math.floor(buah.length / 2);
// // delete buah[tengah];
// // buah.splice(2, 1);
// // console.log(buah);
// let copy = buah.slice();
// console.log(copy);
// buah.splice(2, 0, "x");
// console.log(buah);

let data = [1, 2, 3, 4, 5];
let dataKuadrat = data.map(function (d) {
  return d * 2;
});
console.log(dataKuadrat);

let siswa = ["Andi", "Bo", "Cici", "Do", "Eka"];
let nama = siswa.filter(function (n) {
  return n.length > 2;
});
console.log(nama);

let nilai = [80, 90, 70, 85, 95];
let avg = nilai.reduce(function (acc, curr) {
  return acc + curr / nilai.length;
}, 0);
console.log(avg);

let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = data2
  .filter(function (g) {
    return g % 2 !== 0;
  })
  .map(function (k) {
    return k * 3;
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
console.log(res);
