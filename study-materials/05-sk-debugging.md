# 🐛 Soft Skill: Debugging yang Bener

> *"Lo bukan programmer kalau gak pernah ngalamin bug. Yang bedain programmer bagus sama yang biasa-biasa aja itu: seberapa cepet lo bisa FIX bug-nya."*

---

## Apa Itu Debugging?

Debugging = proses **nyari dan nge-fix error** di kode lo. Namanya dari kisah nyata — tahun 1947, insinyur Harvard nemu **kupu-kupu (bug) yang nyangkut** di relay komputer. Mereka literally "debug" komputer-nya.

Skill ini **sama pentingnya** dengan skill nulis kode. Lo bisa aja jago bikin function, tapi kalau gak bisa debug, lo bakal stuck berjam-jam buat error yang seharusnya bisa fix 5 menit.

---

## 🔴 Jenis-Jenis Error

### 1. Syntax Error — Typo / Salah Tulis

Error paling gampang — JavaScript langsung teriak.

```js
// ❌ Syntax Error
consol.log("hello"); // typo: "consol" bukan "console"
let x = ;            // gak ada nilai
if (true {           // kurang kurung tutup
```

**Cara fix:** Baca error message! JavaScript kasih tau baris berapa dan apa yang salah.

### 2. Reference Error — Variabel Gak Ada

```js
// ❌ ReferenceError: y is not defined
console.log(y); // variabel y belum dideklarasikan!

// Fix:
let y = 10;
console.log(y); // ✅
```

### 3. Type Error — Operasi Salah Tipe

```js
// ❌ TypeError: angka.toUpperCase is not a function
let angka = 42;
angka.toUpperCase(); // toUpperCase cuma buat string, bukan number!

// ❌ TypeError: Cannot read properties of undefined
let arr = [1, 2, 3];
console.log(arr[10].toString()); // arr[10] = undefined, gak bisa .toString()
```

### 4. Logic Error — Kode Jalan, tapi Hasil SALAH

Ini yang paling **susah di-debug** karena gak ada error message!

```js
// Mau hitung rata-rata, tapi hasilnya salah
function rataRata(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) { // ❌ BUG: <= harusnya <
    total += arr[i];                       // arr[arr.length] = undefined!
  }
  return total / arr.length;
}

console.log(rataRata([10, 20, 30])); // NaN bukan 20! 😱
```

---

## 🛠️ Teknik Debugging

### 1. `console.log()` — Senjata Utama

Taruh `console.log()` di berbagai titik buat liat **apa yang sebenarnya terjadi**.

```js
function hitungDiskon(harga, persen) {
  console.log("=== DEBUG START ===");
  console.log("harga:", harga);       // cek input
  console.log("persen:", persen);      // cek input

  let diskon = harga * persen / 100;
  console.log("diskon:", diskon);      // cek perhitungan

  let hargaFinal = harga - diskon;
  console.log("hargaFinal:", hargaFinal); // cek hasil

  return hargaFinal;
}

hitungDiskon(100000, 20);
// Dengan console.log, lo bisa liat STEP BY STEP apa yang terjadi
```

### 2. Baca Error Message — Jangan Langsung Panik!

Error message di JavaScript itu **sangat informatif**. Jangan abaikan!

```
TypeError: Cannot read properties of undefined (reading 'length')
    at hitungTotal (/home/user/app.js:15:22)
    at Object.<anonymous> (/home/user/app.js:20:1)
```

Dari error ini lo bisa tau:
- **Tipe error:** TypeError
- **Masalahnya:** Nyoba akses `.length` dari `undefined`
- **Di mana:** file `app.js`, baris 15, kolom 22
- **Fungsi mana:** `hitungTotal`

### 3. Isolasi Masalah — Pecah Jadi Bagian Kecil

Kalau fungsi lo panjang dan error, **jangan debug semuanya sekaligus**. Pecah jadi bagian kecil.

```js
// ❌ Fungsi panjang yang error — susah debug
function prosesData(arr) {
  let filtered = arr.filter(x => x > 10);
  let mapped = filtered.map(x => x * 2);
  let sorted = mapped.sort((a, b) => a - b);
  let result = sorted.reduce((a, b) => a + b, 0);
  return result;
}

// ✅ Pecah dan cek satu per satu
function prosesData(arr) {
  let filtered = arr.filter(x => x > 10);
  console.log("1. filtered:", filtered);  // cek step 1

  let mapped = filtered.map(x => x * 2);
  console.log("2. mapped:", mapped);      // cek step 2

  let sorted = mapped.sort((a, b) => a - b);
  console.log("3. sorted:", sorted);      // cek step 3

  let result = sorted.reduce((a, b) => a + b, 0);
  console.log("4. result:", result);      // cek step 4

  return result;
}
```

### 4. Rubber Duck Debugging — Ceritain ke Bebek

Ini bukan bercanda. Teknik ini beneran dipake programmer professional.

**Caranya:** Ambil objek apa aja (bebek karet, boneka, atau temen lo), terus **jelasin kode lo baris per baris** ke objek itu. Seringkali, pas lo ngejelasin, lo tiba-tiba **sadar sendiri** di mana bug-nya.

Kenapa works? Karena **otak lo dipaksa berpikir ulang** dari perspektif orang lain.

### 5. Google Error Message

Copy-paste error message ke Google. Kemungkinan besar **orang lain udah pernah ngalamin** error yang sama.

Tips:
- Copy error message TANPA path file lo (itu spesifik ke komputer lo)
- Tambah "javascript" di awal query
- Cek StackOverflow — biasanya jawaban teratas udah solve

---

## 🧪 Common Bugs & Fix

### Bug 1: Off-by-One Error

```js
// ❌ Loop kebanyakan 1 iterasi
let arr = [1, 2, 3];
for (let i = 0; i <= arr.length; i++) { // <= harusnya <
  console.log(arr[i]); // iterasi terakhir: arr[3] = undefined!
}

// ✅ Fix
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### Bug 2: Lupa Return

```js
// ❌ Fungsi gak return apa-apa
function tambah(a, b) {
  let hasil = a + b;
  // lupa return!
}
console.log(tambah(3, 5)); // undefined 😱

// ✅ Fix
function tambah(a, b) {
  let hasil = a + b;
  return hasil;
}
```

### Bug 3: Comparison Pakai = Bukan ===

```js
// ❌ Assignment, bukan comparison!
let x = 5;
if (x = 10) { // ini ASSIGN 10 ke x, bukan compare!
  console.log("ini selalu jalan");
}

// ✅ Fix
if (x === 10) { // triple equals buat compare
  console.log("x adalah 10");
}
```

### Bug 4: Mutating Array yang Gak Disengaja

```js
// ❌ .sort() ngubah array asli!
let original = [3, 1, 2];
let sorted = original.sort((a, b) => a - b);
console.log(original); // [1, 2, 3] — BERUBAH! 😱

// ✅ Fix: copy dulu
let sorted = [...original].sort((a, b) => a - b); // spread operator buat copy
// atau
let sorted = original.slice().sort((a, b) => a - b);
```

---

## 🎯 Debugging Checklist

Setiap kali stuck, cek list ini:

1. ✅ Baca error message — tipe error apa? baris berapa?
2. ✅ Cek typo — variable name, function name, kurung
3. ✅ Taruh `console.log()` sebelum baris error — datanya bener?
4. ✅ Cek tipe data — `.typeof` buat mastiin
5. ✅ Cek loop — `<` vs `<=`? index mulai dari mana?
6. ✅ Cek return — fungsi lo udah return?
7. ✅ Google error message
8. ✅ Tanya di Discord kalau udah 30 menit gak solve

---

## Latihan: Debug Kode Ini!

Coba fix semua bug di bawah ini:

```js
// Bug 1
function hitungLuas(panjang, lebar) {
  let luas = panjang * lebar
}
console.log("Luas: " + hitungLuas(5, 3));

// Bug 2
let numbers = [1, 2, 3, 4, 5];
for (let i = 1; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

// Bug 3
function isEven(num) {
  if (num % 2 = 0) {
    return true;
  }
  return false;
}
```

---

## Sumber Tambahan

- 📹 [How to Debug JavaScript](https://youtu.be/ABlaMXkUwzY)
- 📖 [Chrome DevTools Debugging Guide](https://developer.chrome.com/docs/devtools/javascript/)
