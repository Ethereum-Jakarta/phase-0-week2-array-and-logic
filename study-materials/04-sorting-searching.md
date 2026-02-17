# 🔢 Sorting & Searching Algorithm

> *"Coba bayangin lo disuruh cari buku di perpustakaan yang bukunya gak diurutin. Nightmare kan? Makanya sorting itu penting."*

---

## Kenapa Belajar Sorting & Searching?

Di dunia nyata, data itu jarang banget udah terurut. Lo punya daftar nilai siswa, daftar harga produk, daftar nama — semuanya butuh **diurutin** dan **dicari** dengan efisien.

Ini juga fondasi penting buat **interview coding** nanti. Trust me, sorting & searching itu PASTI ditanyain.

---

## 🔍 Searching: Cari Data

### Linear Search — Cari Satu per Satu

Cara paling basic: cek satu per satu dari awal sampe ketemu.

Analogi: Lo nyari kunci motor di tas. Lo keluarin barang satu-satu sampe nemu kuncinya.

```js
function linearSearch(arr, target) {
  // Cek satu per satu dari index 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // ketemu! return index-nya
    }
  }
  return -1; // gak ketemu
}

let angka = [5, 3, 8, 1, 9, 2, 7];
console.log(linearSearch(angka, 8));  // 2 (ketemu di index 2)
console.log(linearSearch(angka, 4));  // -1 (gak ada)
```

**Kelebihan:** Simpel, works buat array yang BELUM terurut
**Kekurangan:** Lambat kalau datanya banyak (harus cek semua)

### Binary Search — Bagi Dua Terus

Ini JAUH lebih cepet, tapi **syaratnya array HARUS udah terurut**.

Analogi: Lo buka kamus. Mau cari kata "makan". Lo buka di tengah — ketemu huruf "L". Kata "makan" pasti di sebelah kanan. Lo bagi dua lagi bagian kanan. Terus gitu sampe ketemu.

```js
function binarySearch(arr, target) {
  let left = 0;               // batas kiri
  let right = arr.length - 1;  // batas kanan

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // cari tengah

    if (arr[mid] === target) {
      return mid;               // KETEMU!
    } else if (arr[mid] < target) {
      left = mid + 1;           // target di kanan, geser batas kiri
    } else {
      right = mid - 1;          // target di kiri, geser batas kanan
    }
  }

  return -1; // gak ketemu
}

let sorted = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(sorted, 7));   // 3
console.log(binarySearch(sorted, 12));  // -1
```

### Visualisasi Binary Search: Cari angka 7

```
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 L              M                  R     → mid=9 → 9>7, geser R

[1, 3, 5, 7, 9]
 L     M     R                           → mid=5 → 5<7, geser L

         [5, 7, 9]
          L  M  R                         → mid=7 → KETEMU! ✅
```

---

## 🔀 Sorting: Urutin Data

### Pakai `.sort()` Bawaan JavaScript

JavaScript punya method `.sort()`, tapi **hati-hati** — behavior-nya agak aneh kalau gak dikasih compare function.

```js
// Sort string — works normal
let nama = ["Cici", "Andi", "Budi"];
nama.sort();
console.log(nama); // ["Andi", "Budi", "Cici"] ✅

// Sort number — JEBAKAN!
let angka = [10, 2, 30, 4, 5];
angka.sort();
console.log(angka); // [10, 2, 30, 4, 5] ❌ SALAH! 
// Kenapa? Karena .sort() convert ke STRING dulu, terus bandingin character-by-character
// "10" < "2" karena "1" < "2" secara string 🤦
```

### Solusi: Compare Function

```js
let angka = [10, 2, 30, 4, 5];

// Ascending (kecil ke besar)
angka.sort(function(a, b) {
  return a - b; // kalau negatif = a duluan, positif = b duluan, 0 = sama
});
console.log(angka); // [2, 4, 5, 10, 30] ✅

// Descending (besar ke kecil)
angka.sort(function(a, b) {
  return b - a;
});
console.log(angka); // [30, 10, 5, 4, 2] ✅
```

### Cara Kerja Compare Function

```
return a - b:
  Kalau hasilnya NEGATIF → a diletakkan SEBELUM b
  Kalau hasilnya POSITIF → b diletakkan SEBELUM a  
  Kalau hasilnya 0       → urutan gak berubah

Contoh: a=2, b=10 → return 2-10 = -8 (negatif) → 2 sebelum 10 ✅
```

---

## Bubble Sort — Sorting Manual

Meskipun di real-world lo bakal pakai `.sort()`, penting buat ngerti **gimana sorting bekerja di balik layar**. Bubble Sort itu yang paling gampang dipahami.

Analogi: Bayangin lo ngantri berdasarkan tinggi badan. Yang paling pendek harus di depan. Caranya? Bandingin dua orang yang berdekatan, kalau yang kiri lebih tinggi, tuker posisi. Ulangi sampe semua terurut.

```js
function bubbleSort(arr) {
  let n = arr.length;
  
  // Loop luar: berapa kali kita lewatin seluruh array
  for (let i = 0; i < n - 1; i++) {
    
    // Loop dalam: bandingin pasangan yang berdekatan
    for (let j = 0; j < n - 1 - i; j++) {
      
      // Kalau yang kiri lebih besar, tuker!
      if (arr[j] > arr[j + 1]) {
        // Swap pakai variabel temp
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]
```

### Visualisasi Bubble Sort: [5, 3, 8, 1]

```
Pass 1: [5,3,8,1] → [3,5,8,1] → [3,5,8,1] → [3,5,1,8]
Pass 2: [3,5,1,8] → [3,5,1,8] → [3,1,5,8]
Pass 3: [3,1,5,8] → [1,3,5,8]
Hasil:  [1,3,5,8] ✅
```

---

## Selection Sort — Cari yang Terkecil

Analogi: Lo mau urutin kartu remi. Lo scan semua kartu, cari yang **paling kecil**, taruh di posisi pertama. Terus scan sisanya, cari yang paling kecil lagi, taruh di posisi kedua. Dst.

```js
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // asumsi index i adalah yang terkecil

    // Cari elemen terkecil di sisa array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // update index terkecil
      }
    }

    // Swap elemen terkecil ke posisi i
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([29, 10, 14, 37, 13]));
// [10, 13, 14, 29, 37]
```

---

## Kapan Pakai yang Mana?

| Algoritma | Tipe | Kapan Pakai |
|-----------|------|-------------|
| Linear Search | Searching | Array belum terurut, data kecil |
| Binary Search | Searching | Array SUDAH terurut, data besar |
| `.sort()` | Sorting | Hampir selalu (built-in, optimized) |
| Bubble Sort | Sorting | Belajar konsep (jangan di production!) |
| Selection Sort | Sorting | Belajar konsep (jangan di production!) |

> **Pro tip:** Di real-world dan quiz, pakai `.sort()` aja. Tapi pahami Bubble Sort & Selection Sort buat ngerti **cara kerja** sorting secara umum.

---

## Contoh Soal: Gabungin Semuanya

```js
// Soal: Dari array angka, urutkan dari kecil ke besar,
// hapus duplikat, dan cari apakah angka 7 ada di dalamnya

let data = [3, 7, 1, 4, 7, 2, 9, 3, 1, 5];

// Step 1: Sort ascending
data.sort(function(a, b) { return a - b; });
console.log(data); // [1, 1, 2, 3, 3, 4, 5, 7, 7, 9]

// Step 2: Hapus duplikat pakai filter
let unique = data.filter(function(item, index) {
  return data.indexOf(item) === index; // cuma ambil kemunculan pertama
});
console.log(unique); // [1, 2, 3, 4, 5, 7, 9]

// Step 3: Binary search angka 7
console.log(binarySearch(unique, 7)); // 5 (index ke-5)
```

---

## Latihan Mandiri

1. Sort array `["jeruk", "apel", "mangga", "durian"]` secara alphabetical
2. Sort array of numbers `[100, 4, 200, 1, 3, 2]` ascending dan descending
3. Implementasi Bubble Sort sendiri tanpa liat contoh
4. Bikin fungsi `findSecondLargest(arr)` yang return angka terbesar kedua

---

## Sumber Tambahan

- 📹 [Bubble Sort Visualized](https://youtu.be/xli_FI7CuzA)
- 📹 [Binary Search Explained](https://youtu.be/P3YID7liBug)
- 🎮 [Sorting Algorithm Visualizer](https://visualgo.net/en/sorting)
