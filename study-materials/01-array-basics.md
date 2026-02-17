# 📦 Array Basics & Method Lengkap

> *"Bayangin lo punya satu kardus, tapi isinya bisa macem-macem — sepatu, buku, charger. Nah itulah Array."*

---

## Cerita Dulu: Kenapa Array Penting?

Lo pernah gak sih bikin variabel kayak gini?

```js
let buah1 = "apel";
let buah2 = "mangga";
let buah3 = "jeruk";
let buah4 = "durian";
let buah5 = "rambutan";
// ... terus sampe buah ke-100? Cape bro 😩
```

Kebayang gak kalau lo harus bikin 100 variabel buat 100 buah? Males banget kan. Nah, **Array** hadir buat nyelametin hidup lo.

```js
// Semua buah dalam SATU variabel. Clean. Rapi. Elegan.
let buahBuahan = ["apel", "mangga", "jeruk", "durian", "rambutan"];
```

Array itu kayak **rak buku** — lo bisa simpen banyak barang dalam satu tempat, dan setiap barang punya **posisi (index)** yang jelas.

---

## Apa Itu Array?

Array adalah **tipe data yang bisa menyimpan kumpulan nilai** dalam satu variabel. Nilai-nilai ini disebut **elemen**, dan setiap elemen punya **index** (nomor urut) yang dimulai dari **0**.

```js
// Bikin array pakai square brackets []
let hewan = ["kucing", "anjing", "hamster"];
//  index:      0          1         2

// Akses elemen pakai index
console.log(hewan[0]); // "kucing" — index pertama SELALU 0!
console.log(hewan[1]); // "anjing"
console.log(hewan[2]); // "hamster"
```

### Kenapa Index Mulai dari 0?

Ini pertanyaan klasik setiap programmer pemula. Jawabannya: ini warisan dari bahasa C, di mana index itu sebenarnya **offset (jarak)** dari posisi awal di memory. Elemen pertama jaraknya 0 dari awal, makanya index-nya 0.

**Inget aja:** Index terakhir = `array.length - 1`

```js
let angka = [10, 20, 30, 40, 50];
console.log(angka.length);              // 5 — ada 5 elemen
console.log(angka[angka.length - 1]);   // 50 — elemen terakhir
```

---

## Bikin Array

Ada beberapa cara bikin array:

```js
// Cara 1: Array literal (PALING SERING DIPAKAI)
let fruits = ["apel", "mangga", "jeruk"];

// Cara 2: Array constructor (jarang dipakai, tapi tau aja)
let numbers = new Array(1, 2, 3);

// Cara 3: Array kosong, diisi belakangan
let todoList = [];
todoList[0] = "Belajar array";
todoList[1] = "Kerjain quiz";
```

### Array Bisa Isi Macem-Macem

```js
// Array bisa isi berbagai tipe data (tapi JANGAN biasain ya)
let campuran = [42, "hello", true, null, [1, 2], { nama: "Dika" }];

// Best practice: satu array, satu tipe data, satu tujuan
let nilaiUjian = [85, 90, 78, 92, 88];     // ✅ Bagus — semua number
let namaStudents = ["Andi", "Budi", "Cici"]; // ✅ Bagus — semua string
```

---

## Array Method: Manipulasi Data

Ini bagian paling penting. Lo HARUS hafal method-method ini.

### 📏 `.length` — Hitung Jumlah Elemen

```js
let hewan = ["gajah", "jerapah", "singa"];
console.log(hewan.length); // 3

// Sering dipakai buat looping
for (let i = 0; i < hewan.length; i++) {
  console.log(hewan[i]); // cetak satu per satu
}
```

### ➡️ `.push()` — Tambah di BELAKANG

Analogi: Lo lagi ngantri beli bakso. `.push()` itu orang yang baru dateng dan ngantri di **belakang**.

```js
let antrian = ["Andi", "Budi"];
antrian.push("Cici");
console.log(antrian); // ["Andi", "Budi", "Cici"]

// Bisa push lebih dari satu sekaligus
antrian.push("Dodi", "Eka");
console.log(antrian); // ["Andi", "Budi", "Cici", "Dodi", "Eka"]
```

### ⬅️ `.pop()` — Hapus dari BELAKANG

Analogi: Orang paling belakang di antrian capek nunggu, terus cabut.

```js
let antrian = ["Andi", "Budi", "Cici"];
let yangCabut = antrian.pop(); // pop() nge-return elemen yang dihapus!
console.log(yangCabut);  // "Cici"
console.log(antrian);    // ["Andi", "Budi"]
```

### ⬅️ `.shift()` — Hapus dari DEPAN

Analogi: Orang pertama di antrian udah dilayani, keluar dari antrian.

```js
let antrian = ["Andi", "Budi", "Cici"];
let yangDilayani = antrian.shift();
console.log(yangDilayani); // "Andi"
console.log(antrian);      // ["Budi", "Cici"]
```

### ➡️ `.unshift()` — Tambah di DEPAN

Analogi: Ada orang yang nyerobot antrian dari depan (jangan ditiru ya 😤).

```js
let antrian = ["Budi", "Cici"];
antrian.unshift("Andi");
console.log(antrian); // ["Andi", "Budi", "Cici"]
```

### ✂️ `.splice()` — Potong, Hapus, Sisipkan (Multi-fungsi!)

Ini method paling powerful. Bisa hapus, bisa tambah, bisa dua-duanya.

**Syntax:** `array.splice(startIndex, deleteCount, item1, item2, ...)`

```js
// HAPUS: Hapus 1 elemen dari index 1
let hewan = ["kucing", "anjing", "hamster", "kelinci"];
hewan.splice(1, 1); // mulai dari index 1, hapus 1
console.log(hewan); // ["kucing", "hamster", "kelinci"]
```

```js
// TAMBAH: Sisipkan tanpa menghapus (deleteCount = 0)
let hewan = ["kucing", "anjing", "kelinci"];
hewan.splice(1, 0, "hamster"); // di index 1, hapus 0, tambah "hamster"
console.log(hewan); // ["kucing", "hamster", "anjing", "kelinci"]
```

```js
// GANTI: Hapus 2, ganti dengan 1
let hewan = ["kucing", "anjing", "hamster", "kelinci"];
hewan.splice(1, 2, "burung"); // di index 1, hapus 2, tambah "burung"
console.log(hewan); // ["kucing", "burung", "kelinci"]
```

### 🔪 `.slice()` — Potong dan COPY (Gak Ngubah Original!)

Perbedaan penting: **splice MENGUBAH** array asli, **slice TIDAK mengubah** (bikin salinan baru).

**Syntax:** `array.slice(startIndex, endIndex)` — endIndex TIDAK termasuk!

```js
let buah = ["apel", "mangga", "jeruk", "durian", "rambutan"];

// Potong dari index 1 sampai sebelum index 3
let potongan = buah.slice(1, 3);
console.log(potongan); // ["mangga", "jeruk"]
console.log(buah);     // ["apel", "mangga", "jeruk", "durian", "rambutan"] — MASIH UTUH!

// Tanpa endIndex = dari startIndex sampai habis
let sisanya = buah.slice(2);
console.log(sisanya); // ["jeruk", "durian", "rambutan"]
```

### 🔗 `.concat()` — Gabungin Array

```js
let depan = [1, 2, 3];
let belakang = [4, 5, 6];
let gabungan = depan.concat(belakang);
console.log(gabungan); // [1, 2, 3, 4, 5, 6]

// Array asli gak berubah
console.log(depan); // [1, 2, 3]
```

### 🔍 `.indexOf()` — Cari Posisi Elemen

```js
let buah = ["apel", "mangga", "jeruk", "mangga"];
console.log(buah.indexOf("mangga"));  // 1 — posisi PERTAMA yang ditemukan
console.log(buah.indexOf("durian"));  // -1 — gak ketemu!

// Sering dipakai buat ngecek ada atau gak
if (buah.indexOf("jeruk") !== -1) {
  console.log("Jeruk ada di array!"); // ini yang jalan
}
```

### ✅ `.includes()` — Cek Ada atau Gak (Lebih Gampang)

```js
let buah = ["apel", "mangga", "jeruk"];
console.log(buah.includes("mangga")); // true
console.log(buah.includes("durian")); // false

// Lebih readable dibanding indexOf
if (buah.includes("jeruk")) {
  console.log("Ada jeruk!"); // ✅ Lebih enak dibaca
}
```

### 🔄 `.reverse()` — Balik Urutan

```js
let angka = [1, 2, 3, 4, 5];
angka.reverse();
console.log(angka); // [5, 4, 3, 2, 1] — MENGUBAH array asli!
```

### ✏️ `.join()` — Gabungin Jadi String

```js
let kata = ["Belajar", "Array", "Itu", "Seru"];
console.log(kata.join(" "));   // "Belajar Array Itu Seru"
console.log(kata.join("-"));   // "Belajar-Array-Itu-Seru"
console.log(kata.join(""));    // "BelajarArrayItuSeru"
```

---

## Cheat Sheet: Mutating vs Non-Mutating

Ini penting banget buat ngerti mana method yang **ngubah array asli** dan mana yang **bikin array baru**.

| Method | Mutating? | Keterangan |
|--------|-----------|------------|
| `push()` | ✅ Ya | Tambah di belakang |
| `pop()` | ✅ Ya | Hapus dari belakang |
| `shift()` | ✅ Ya | Hapus dari depan |
| `unshift()` | ✅ Ya | Tambah di depan |
| `splice()` | ✅ Ya | Potong/sisipkan |
| `reverse()` | ✅ Ya | Balik urutan |
| `slice()` | ❌ Tidak | Copy sebagian |
| `concat()` | ❌ Tidak | Gabungin array |
| `join()` | ❌ Tidak | Jadi string |
| `indexOf()` | ❌ Tidak | Cari index |
| `includes()` | ❌ Tidak | Cek keberadaan |

---

## Latihan Mandiri

Coba jalanin semua contoh di atas di terminal kalian. Terus coba jawab ini:

1. Gimana caranya hapus elemen di tengah array tanpa pakai splice?
2. Gimana caranya copy array biar gak nge-refer ke array yang sama?
3. Kalau `splice(2, 0, "x")`, apa yang terjadi?

Kalau stuck, tanya di Discord! Jangan malu. 💪

---

## Sumber Tambahan

- 📹 [Tutorial Array by Harkon](https://youtu.be/fQulHC3Ujdo)
- 📖 [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- 📖 [W3Schools Array Methods](https://www.w3schools.com/js/js_array_methods.asp)
