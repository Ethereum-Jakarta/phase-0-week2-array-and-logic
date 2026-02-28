// // let data = [
// //   [1, 2, 3, 4],
// //   [5, 6, 7, 8],
// //   [9, 10, 11, 12],
// //   [13, 14, 15, 16],
// // ];
// // let primary = [];
// // for (let i = 0; i < data.length; i++) {
// //   for (let j = 0; j < data[i].length; j++) {
// //     if (i === j) primary.push(data[i][j]);
// //   }
// // }
// // console.log("Diagonal: ", primary);

// let siswa = [
//   ["Andi", "A"],
//   ["Budi", "B"],
//   ["Cici", "A"],
// ];
// let nilai = 0;
// for (let i = 0; i < siswa.length; i++) {
//   if (siswa[i][1] === "A") nilai++;
// }
// console.log(nilai);

let arr = [
  [1, [2, 3]],
  [4, [5, 6]],
];

let result = arr.flat(Infinity);
console.log(result);
