# 🪆 Nested Array & Matrix

> *"Array di dalam array? Kayak kotak sepatu di dalam lemari — buka lemarinya, ambil kotak-nya, baru dapet sepatunya."*

---

## Apa Itu Nested Array?

Nested array itu simpel: **array yang isinya array lagi**. Kenapa ini penting? Karena di dunia nyata, data itu gak selalu flat (datar). Kadang data itu **berlapis-lapis**.

```js
// Array biasa (flat/datar)
let fruits = ["apel", "mangga", "jeruk"];

// Nested array (array di dalam array)
let classroom = [
  ["Andi", "Budi", "Cici"],    // kelompok 1
  ["Dodi", "Eka", "Fani"],     // kelompok 2
  ["Gani", "Hani", "Iwan"]     // kelompok 3
];
```

Analogi gampangnya: kalau array biasa itu kayak **satu loker**, nested array itu kayak **loker yang di dalamnya ada laci-laci**.

---

## Akses Nested Array

Caranya: pakai **double bracket** `[][]`. Bracket pertama buat array luar, bracket kedua buat array dalam.

```js
let classroom = [
  ["Andi", "Budi", "Cici"],    // index 0
  ["Dodi", "Eka", "Fani"],     // index 1
  ["Gani", "Hani", "Iwan"]     // index 2
];

// Akses kelompok 2
console.log(classroom[1]); // ["Dodi", "Eka", "Fani"]

// Akses "Eka" (kelompok 2, orang ke-2)
console.log(classroom[1][1]); // "Eka"

// Akses "Iwan" (kelompok 3, orang ke-3)
console.log(classroom[2][2]); // "Iwan"
```

### Visualisasi Index

```
classroom[0][0] = "Andi"    classroom[0][1] = "Budi"    classroom[0][2] = "Cici"
classroom[1][0] = "Dodi"    classroom[1][1] = "Eka"     classroom[1][2] = "Fani"
classroom[2][0] = "Gani"    classroom[2][1] = "Hani"    classroom[2][2] = "Iwan"
```

---

## Looping Nested Array

Buat ngeloop nested array, lo butuh **loop di dalam loop** (nested loop).

```js
let kelompok = [
  ["Andi", "Budi"],
  ["Cici", "Dodi"],
  ["Eka", "Fani"]
];

// Loop luar = iterasi setiap kelompok
for (let i = 0; i < kelompok.length; i++) {
  console.log(`Kelompok ${i + 1}:`);
  
  // Loop dalam = iterasi setiap anggota dalam kelompok
  for (let j = 0; j < kelompok[i].length; j++) {
    console.log(`  - ${kelompok[i][j]}`);
  }
}
// Output:
// Kelompok 1:
//   - Andi
//   - Budi
// Kelompok 2:
//   - Cici
//   - Dodi
// ...dst
```

---

## 📊 Matrix: Array 2 Dimensi yang Terstruktur

Matrix itu nested array yang **setiap baris punya panjang yang sama**. Kayak tabel Excel — ada baris dan kolom.

```js
// Matrix 3x3 (3 baris, 3 kolom)
let matrix = [
  [1, 2, 3],    // baris 0
  [4, 5, 6],    // baris 1
  [7, 8, 9]     // baris 2
];

// Akses: matrix[baris][kolom]
console.log(matrix[0][0]); // 1 (baris 0, kolom 0)
console.log(matrix[1][2]); // 6 (baris 1, kolom 2)
console.log(matrix[2][1]); // 8 (baris 2, kolom 1)
```

### Visualisasi Matrix

```
         Kolom 0  Kolom 1  Kolom 2
Baris 0:   1        2        3
Baris 1:   4        5        6
Baris 2:   7        8        9
```

---

## Use Case: Data Tabel

Contoh real-world — data nilai siswa dalam bentuk matrix:

```js
// [nama, matematika, bahasa, ipa]
let nilaiSiswa = [
  ["Andi",  85, 90, 78],
  ["Budi",  72, 88, 65],
  ["Cici",  95, 82, 91],
  ["Dodi",  60, 75, 70]
];

// Hitung rata-rata setiap siswa
for (let i = 0; i < nilaiSiswa.length; i++) {
  let nama = nilaiSiswa[i][0]; // kolom 0 = nama
  let mtk = nilaiSiswa[i][1];  // kolom 1 = matematika
  let bhs = nilaiSiswa[i][2];  // kolom 2 = bahasa
  let ipa = nilaiSiswa[i][3];  // kolom 3 = ipa

  let rataRata = (mtk + bhs + ipa) / 3;
  console.log(`${nama}: ${rataRata.toFixed(1)}`);
}
// Andi: 84.3
// Budi: 75.0
// Cici: 89.3
// Dodi: 68.3
```

---

## Manipulasi Nested Array

### Tambah Baris Baru

```js
let data = [
  [1, 2, 3],
  [4, 5, 6]
];

// Tambah baris baru di belakang
data.push([7, 8, 9]);
console.log(data);
// [[1,2,3], [4,5,6], [7,8,9]]
```

### Tambah Elemen ke Baris Tertentu

```js
let kelompok = [
  ["Andi", "Budi"],
  ["Cici", "Dodi"]
];

// Tambah anggota ke kelompok 1 (index 0)
kelompok[0].push("Eka");
console.log(kelompok[0]); // ["Andi", "Budi", "Eka"]
```

### Flatten: Dari Nested Jadi Flat

Kadang lo mau "ratakan" nested array jadi array biasa:

```js
let nested = [[1, 2], [3, 4], [5, 6]];

// Cara manual pakai loop
let flat = [];
for (let i = 0; i < nested.length; i++) {
  for (let j = 0; j < nested[i].length; j++) {
    flat.push(nested[i][j]);
  }
}
console.log(flat); // [1, 2, 3, 4, 5, 6]

// Cara cepet pakai .flat() (modern JavaScript)
let flat2 = nested.flat();
console.log(flat2); // [1, 2, 3, 4, 5, 6]
```

---

## Konversi: Array ke Object dan Sebaliknya

Ini sering banget muncul di quiz! Data dateng dalam format array, tapi lo perlu ubah ke object.

```js
// Array 2D → Array of Objects
let studentData = [
  ["Andi", 85],
  ["Budi", 92],
  ["Cici", 78]
];

let studentObjects = [];
for (let i = 0; i < studentData.length; i++) {
  let obj = {
    nama: studentData[i][0],   // kolom 0 = nama
    nilai: studentData[i][1]   // kolom 1 = nilai
  };
  studentObjects.push(obj);
}

console.log(studentObjects);
// [
//   { nama: "Andi", nilai: 85 },
//   { nama: "Budi", nilai: 92 },
//   { nama: "Cici", nilai: 78 }
// ]
```

---

## ⚠️ Hati-Hati: Reference vs Copy

Nested array punya jebakan: kalau lo "copy" array yang nested, array dalamnya masih **nge-refer ke yang sama**!

```js
let original = [[1, 2], [3, 4]];
let copy = original.slice(); // shallow copy!

copy[0].push(999);
console.log(original[0]); // [1, 2, 999] 😱 IKUT BERUBAH!

// Kenapa? Karena slice() cuma copy REFERENSI ke array dalam
// Solusi: deep copy manual atau pakai JSON trick
let deepCopy = JSON.parse(JSON.stringify(original));
```

---

## Latihan Mandiri

1. Bikin matrix 4x4 berisi angka 1-16, terus print diagonal-nya (1, 6, 11, 16)
2. Dari data `[["Andi", "A"], ["Budi", "B"], ["Cici", "A"]]`, hitung berapa siswa yang dapet grade "A"
3. Flatten array `[[1, [2, 3]], [4, [5, 6]]]` jadi `[1, 2, 3, 4, 5, 6]`

---

## Sumber Tambahan

- 📖 [MDN Array.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- 📹 [Nested Arrays Explained](https://youtu.be/HhVQHMnNm94)
