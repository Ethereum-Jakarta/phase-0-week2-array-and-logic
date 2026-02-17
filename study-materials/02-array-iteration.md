# 🔄 Array Iteration — forEach, map, filter, reduce

> *"Kalau for loop itu kayak lo nyuci baju satu-satu pakai tangan, iteration methods itu kayak mesin cuci — tinggal masukin, pencet tombol, beres."*

---

## Cerita Dulu: Kenapa Harus Belajar Ini?

Lo udah belajar for loop di Week 1 kan? For loop itu powerful, tapi kadang kode-nya jadi panjang buat hal yang simpel. Coba bandingin:

```js
// Pakai for loop: Kaliin semua angka x 2
let angka = [1, 2, 3, 4, 5];
let hasil = [];
for (let i = 0; i < angka.length; i++) {
  hasil.push(angka[i] * 2);
}
console.log(hasil); // [2, 4, 6, 8, 10]
```

```js
// Pakai map: SATU baris, sama hasilnya
let angka = [1, 2, 3, 4, 5];
let hasil = angka.map(function(num) { return num * 2; });
console.log(hasil); // [2, 4, 6, 8, 10]
```

Lebih singkat, lebih jelas tujuannya, lebih "JavaScript banget". Mari kita bedah satu per satu.

---

## 🔁 `forEach()` — Lakukan Sesuatu untuk Setiap Elemen

Analogi: Lo punya daftar temen yang ultah bulan ini. Lo mau kirim ucapan ke **setiap** orang di daftar itu. Gak perlu return apa-apa — lo cuma **ngelakuin sesuatu**.

```js
let temanUltah = ["Andi", "Budi", "Cici"];

// forEach: lakukan sesuatu untuk SETIAP elemen
temanUltah.forEach(function(nama) {
  console.log("Happy birthday, " + nama + "! 🎂");
});
// Output:
// Happy birthday, Andi! 🎂
// Happy birthday, Budi! 🎂
// Happy birthday, Cici! 🎂
```

### Parameter forEach

forEach kasih lo 3 parameter: **elemen**, **index**, dan **array asli**.

```js
let buah = ["apel", "mangga", "jeruk"];

buah.forEach(function(item, index, arr) {
  console.log(`Index ${index}: ${item} (dari array ${arr.length} elemen)`);
});
// Index 0: apel (dari array 3 elemen)
// Index 1: mangga (dari array 3 elemen)
// Index 2: jeruk (dari array 3 elemen)
```

### Kapan Pakai forEach?

✅ Kalau lo cuma mau **ngelakuin sesuatu** (print, update, kirim data)
❌ JANGAN pakai kalau lo butuh **array baru** — pakai `map` atau `filter`

```js
// ✅ Good — forEach buat side effect (console.log, update DOM)
let scores = [85, 92, 78];
scores.forEach(function(score) {
  console.log(score >= 80 ? "LULUS" : "REMEDIAL");
});

// ❌ Bad — jangan pakai forEach buat bikin array baru
let doubled = [];
scores.forEach(function(score) {
  doubled.push(score * 2); // ini works tapi BUKAN best practice
});
// Lebih baik pakai map (lihat di bawah)
```

---

## 🗺️ `map()` — Transformasi Setiap Elemen → Array Baru

Analogi: Lo punya foto-foto mentah dari kamera. Lo mau **edit setiap foto** (kasih filter, crop, dll) dan hasilnya jadi **album baru**. Foto asli gak diubah.

**Key point:** map **SELALU return array baru** dengan panjang yang SAMA.

```js
let harga = [10000, 25000, 50000, 75000];

// Diskon 20% untuk semua item
let hargaDiskon = harga.map(function(h) {
  return h * 0.8; // WAJIB ada return!
});

console.log(hargaDiskon); // [8000, 20000, 40000, 60000]
console.log(harga);       // [10000, 25000, 50000, 75000] — gak berubah!
```

### Contoh Real-World

```js
// Bikin array nama dari array object (preview Week 3!)
let students = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 92 },
  { nama: "Cici", nilai: 78 }
];

let namaSaja = students.map(function(student) {
  return student.nama;
});
console.log(namaSaja); // ["Andi", "Budi", "Cici"]

// Format angka jadi rupiah
let harga = [15000, 25000, 50000];
let formatted = harga.map(function(h) {
  return "Rp " + h.toLocaleString("id-ID");
});
console.log(formatted); // ["Rp 15.000", "Rp 25.000", "Rp 50.000"]
```

---

## 🔍 `filter()` — Saring Elemen Berdasarkan Kondisi

Analogi: Lo lagi scroll Instagram. Dari 1000 post, lo cuma mau liat yang ada tag **#coding**. Filter itu saringannya — cuma elemen yang **lolos syarat** yang masuk ke array baru.

**Key point:** filter return array baru yang **bisa lebih pendek** (atau bahkan kosong!).

```js
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ambil yang genap aja
let genap = angka.filter(function(num) {
  return num % 2 === 0; // return true = masuk, false = gak masuk
});

console.log(genap); // [2, 4, 6, 8, 10]
```

### Contoh Real-World

```js
// Filter mahasiswa yang lulus (nilai >= 75)
let nilaiMahasiswa = [85, 60, 92, 45, 78, 95, 30];

let lulus = nilaiMahasiswa.filter(function(nilai) {
  return nilai >= 75;
});
console.log(lulus); // [85, 92, 78, 95]

// Hitung berapa yang gak lulus
let gagal = nilaiMahasiswa.filter(function(nilai) {
  return nilai < 75;
});
console.log(gagal.length + " mahasiswa gak lulus"); // "3 mahasiswa gak lulus"
```

```js
// Filter string yang panjangnya lebih dari 5 huruf
let kata = ["js", "javascript", "go", "python", "c"];
let panjang = kata.filter(function(k) {
  return k.length > 5;
});
console.log(panjang); // ["javascript", "python"]
```

---

## 🧮 `reduce()` — Ringkas Array Jadi SATU Nilai

Analogi: Lo lagi hitung total belanjaan di kasir. Satu per satu item di-scan, ditambahin ke **total running**. Di akhir, lo dapet **satu angka** — total yang harus dibayar.

**Key point:** reduce menghasilkan **SATU nilai** (bukan array).

```js
let belanjaan = [15000, 25000, 8000, 32000];

// Hitung total
let total = belanjaan.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 = nilai awal accumulator

console.log(total); // 80000
```

### Bedah reduce Step by Step

```js
let angka = [1, 2, 3, 4];

let total = angka.reduce(function(acc, cur) {
  console.log(`acc: ${acc}, cur: ${cur}, hasil: ${acc + cur}`);
  return acc + cur;
}, 0);

// acc: 0, cur: 1, hasil: 1    (iterasi 1)
// acc: 1, cur: 2, hasil: 3    (iterasi 2)
// acc: 3, cur: 3, hasil: 6    (iterasi 3)
// acc: 6, cur: 4, hasil: 10   (iterasi 4)
// total = 10
```

### Contoh Lain reduce

```js
// Cari nilai maksimum
let scores = [78, 92, 65, 88, 95, 70];
let tertinggi = scores.reduce(function(max, current) {
  return current > max ? current : max;
}, scores[0]);
console.log(tertinggi); // 95

// Hitung berapa kali setiap huruf muncul
let huruf = ["a", "b", "a", "c", "b", "a"];
let hitungan = huruf.reduce(function(acc, cur) {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {}); // nilai awal-nya object kosong!
console.log(hitungan); // { a: 3, b: 2, c: 1 }
```

---

## 🔗 Chaining: Gabungin Method

Lo bisa **chain** (rangkai) method-method ini satu sama lain. Ini yang bikin JavaScript indah.

```js
let students = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Cici", nilai: 92 },
  { nama: "Dodi", nilai: 45 },
  { nama: "Eka", nilai: 78 }
];

// Ambil nama-nama yang lulus (nilai >= 75), ubah jadi uppercase
let lulusUppercase = students
  .filter(function(s) { return s.nilai >= 75; })    // filter yang lulus
  .map(function(s) { return s.nama.toUpperCase(); }) // ambil nama, uppercase
  ;

console.log(lulusUppercase); // ["ANDI", "CICI", "EKA"]

// Hitung total nilai yang lulus
let totalNilaiLulus = students
  .filter(function(s) { return s.nilai >= 75; })
  .reduce(function(total, s) { return total + s.nilai; }, 0);

console.log(totalNilaiLulus); // 255
```

---

## Kapan Pakai yang Mana?

| Method | Return | Kapan Pakai |
|--------|--------|-------------|
| `forEach` | `undefined` | Cuma mau ngerjain sesuatu (log, update) |
| `map` | Array baru (sama panjang) | Mau transformasi setiap elemen |
| `filter` | Array baru (bisa lebih pendek) | Mau saring berdasarkan kondisi |
| `reduce` | Satu nilai (apapun) | Mau ringkas jadi satu hasil |

---

## Latihan Mandiri

Coba kerjain di terminal:

1. Pakai `map` — ubah `[1, 2, 3, 4, 5]` jadi `[1, 4, 9, 16, 25]` (kuadrat)
2. Pakai `filter` — dari `["Andi", "Bo", "Cici", "Do", "Eka"]`, ambil yang namanya lebih dari 2 huruf
3. Pakai `reduce` — hitung rata-rata dari `[80, 90, 70, 85, 95]`
4. Pakai chaining — dari `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, ambil yang ganjil, kaliin 3, terus jumlahkan

---

## Sumber Tambahan

- 📖 [MDN forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- 📖 [MDN map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- 📖 [MDN filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- 📖 [MDN reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
