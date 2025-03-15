# Array dan Method yang dimiliki Array | Part 1

Selamat bagi yang sudah menyelesaikan Quiz Minggu Pertama

pada pertemuan kali ini kita akan mendalami tipe data Array

![image](https://github.com/user-attachments/assets/e2058514-a2e6-4e0f-860f-5e4a905cffd3)

***APA ARRAY ITU???***
Simplenya Array adalah kumpulan dari berbagai data, Array itu seperti List
kalian bisa menampung banyak data pada satu variabel array

contoh
```js
let animals = ["lion", "cat", "tiger", "fish"];
```
kalian bebas mau menampung tipe data apa saja di dalam array
```js
let arrayNgasal = [1, "anjay", false, ["array lagi"], { name: "dika"}];
//ngapain amat bikin array ngasal kek gini, ini cuma contoh gaes
```
array lebih bagus kalau diisi hanya satu tipe data, dan satu tujuan.
Cara mengakses salah satu elemen array itu cukup dengan indexing

misal
```js
let array = [1,2,3];
console.log(array[0]) //1
```

yak setelah membaca ini, kalian sudah mengerti apa itu array, lalu kalian harus mengetahui method method pada array untuk memanipulasi array

**MACAM-MACAM ARRAY METHOD**
- length
- push()
- pop()
- shift()
- unshift()
- splice()
- slice()

yah kira-kira itu untuk awal-awal, misal ada yang tau method filter, map, reduce, itu belakangan aja yak wkwk
selebihnya bisa diliat disini
[W3School Array Method](https://www.w3schools.com/js/js_array_methods.asp)

langsung gaskan saja kita bahas method-methodnya satu persatu

![image](https://github.com/user-attachments/assets/1780e203-3825-4fc4-baa3-2d634c98318b)


method `length` akan me-return nilai total elemen/item yang ada pada array
```js
let hewan = ["gajah", "jerapah"]
console.log(hewan.length) //2

let angka = [3,2,1,4,5,6,7]
console.log(angka.length) //7
```

![image](https://github.com/user-attachments/assets/8fd41414-659f-4ba2-a063-b1cdced0616c)


method `push()` berfungsi untuk memasukan data pada urutan terakhir array atau bisa dibilang memasukan data ke paling kanan wkwk
```js
let hewan = ["marmut", "kucing"];
hewan.push("tikus");
console.log(hewan); //["marmut", "kucing", "tikus"]
```

![image](https://github.com/user-attachments/assets/4f1cac40-b66c-441a-a9d0-59b63cef3cbd)


method `pop()` berfungsi untuk menghapus elemen terkahir pada array, bisa dibilang ngehapus yang elemen array paling kanan wkwk
```js
let hewan = ["marmut", "kucing", "tikus"];
hewan.pop();
console.log(hewan); //["marmut", "kucing"];
```

![image](https://github.com/user-attachments/assets/5be8d2b4-148e-4327-aad8-4c54705310f4)


method `shift()` berfungsi untuk menghapus elemen pertama pada array, bisa dibilang ngehapus yang paling kiri wkwk
```js
let hewan = ["marmut", "kucing", "tikus"];
hewan.shift();
console.log(hewan); //["kucing", "tikus"];
```

![image](https://github.com/user-attachments/assets/b1698858-dbda-450c-af8b-5b62b0c572ae)


method `unshift()` berfungsi menambahkan data pada urutan pertama, bisa dibilang nambahin sesuatu dipaling kiri wkwk
```js
let hewan = ["marmut", "kucing"];
hewan.unshift("tikus");
console.log(hewan); //["tikus", "marmut", "kucing"];
```

![image](https://github.com/user-attachments/assets/cb8cd414-af69-41e2-a5ff-07a3792168dc)


method `splice` berfungsi bisa menambahkan data, bisa menghapus data pada array, bisa dua duanya sekaligus tergantung isi parameter yang kalian berikan pada splice
contoh `.splice(0,1,"gajah", "macan")` 
> - simplenya .splice(param1, param2, ...param-sisanya) //...berarti parameternya bisa ada banyak data
> - parameter pertama sebagai penentuan posisi mau di index ke berapa
> - parameter kedua sebagai penentuan mau menghapus berapa data/elemen/item (bisa juga ga ngehapus apa apa kalau di kasih nilai 0)
> - parameter sisanya, itu untuk nambahin data ke dalam array, jumlahnya bisa banyak

```js
//contoh menghapus 1 item dari index nomor 1
let hewan = ["marmut", "kucing", "tikus"];
hewan.splice(1,1);
console.log(hewan); //["marmut", "tikus"]
```
```js
//contoh menambahkan 1 item tanpa menghapus apa apa, dari index nomor 1
let hewan = ["marmut", "kucing", "tikus"];
hewan.splice(1,0,"gajah");
console.log(hewan); //["marmut", "gajah", "kucing", "tikus"]
```
```js
//contoh menambahkan 1 item dan menghapus 2 item, dari index nomor 1
let hewan = ["marmut", "kucing", "tikus"];
hewan.splice(1,2,"gajah");
console.log(hewan); //["marmut", "gajah"]
```
```js
//contoh menambahkan 3 item dan menghapus 2 item, dari index nomor 1
let hewan = ["marmut", "kucing", "tikus"];
hewan.splice(1,2,"gajah", "jerapah", "singa");
console.log(hewan); //["marmut", "gajah", "jerapah", "singa"]
```

yak splice emang rada multi-fungsi sih, kalian cobain sendiri ya biar lebih paham

![image](https://github.com/user-attachments/assets/caea164a-9ced-4064-9a40-5134d78b1c5e)


method `slice` berfungsi untuk memotong array tergantung dari nilai parameter yang kalian kasih
contoh `.slice(1, 4)`
> - simpelnya ada dua parameter `slice(dari-mana, sampe-sebelum-mana)` 
> - parameter pertama `dari-mana` (wkwk), itu berfungsi mau motong array dari mana
> - parameter kedua `sampe-sebelum-mana` itu berfungsi buat ujung array yg kita potong
> - boleh hanya memasang 1 parameter saja, contoh `.slice(1)`

```js
//contoh memotong dari index 1 sampe ujung
let hewan = ["marmut", "gajah", "jerapah", "singa"]
hewan.slice(1)
console.log(hewan) //["marmut", "gajah", "jerapah", "singa"]
```
***LOH KOK GA BERUBAH SIH?!?!?!11!?***
jadi gini gan wkwkwk

ada method yang memang bisa memutasi/mengubah array secara langsung, jadi cukup
misal `hewan.push("gajah")` lalu nilai variabel hewannya berubah `["kucing", "gajah"]`

namun ada juga method yang ga merubah nilai variabelnya, nah si method `.slice` ini salah satu method yang ga merubah nilai array variabelnya

lalu bagaimana cara kita tahu bahwa method `slice` berfungsi memotong arary???
caranya adalah dengan menampung hasil return si slice pada variabel, atau langsung
`console.log(hewan.slice(1))`
jadi gini, langsung aja ke contohnya

```js
//gini caranya, ada 2 cara
let hewan = ["gajah", "jerapah", "badak", "singa"];
//bisa langsung hajar aja taro di output
console.log(hewan.slice(1)) //["jerapah", "badak", "singa"]
//kita tampung di variabel baru
let slicedHewan = hewan.slice(1)
console.log(slicedHewan) //["jerapah", "badak", "singa"]
```
yak biasanya sih ditampung di variabel baru wkwk

```js
//contoh memotong dari index 1 sampai sebelum index ke 3
//dengan kata lain
//contoh memotong dari index 1 sampai index 2
let hewan = ["gajah", "jerapah", "badak", "singa"];
let slicedHewan = hewan.slice(1,3);
console.log(slicedHewan) //["jerapah", "badak"]
```

Itulah materi untuk week2 ini, habiskan waktu kalian dengan latihan quiz quiz di RPN dan explore lebih banyak lagi tentang array.

[Tutorial Array by Harkon](https://youtu.be/fQulHC3Ujdo) 🗿
