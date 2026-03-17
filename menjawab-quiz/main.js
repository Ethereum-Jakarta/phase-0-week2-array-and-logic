//array

const arraySaya = ['ikan', 'bakso', 'soto', 'mie ayam', 'sepak bola'];
arraySaya[5] = "main basket";

console.log(arraySaya[0]);



//toString() Method 
//fungsinya mengubah value atau type data menjadi string

console.log(arraySaya.toString());     //ini akan menjadi string dan menambahkan koma tanpa spasi masing masing array

let arrayNumber = [1, 2, 3, 4 , 5, 6, 7];

console.log(arrayNumber.toString());
console.log(typeof arrayNumber.toString());    //number pun berubah menjadi type data string dan menambah koma 



//.join() Method
//ini kalau biasanya kita memanggil array biasanya disebutin pakai koma kan, ini kita bisa ganti dengan yang lain sesuai keinginan 
// dan type datanya jadi string //contoh

let arrayJoin = [4, 3, 5, 8, 1, 3];
console.log(arrayJoin.join("--"))



//.pop() ini method untuk menghapus nilai terakhir dalam array

arrayJoin.pop();  //angka 3 dihapus

console.log(arrayJoin);



//.push()  method ini berfungsi untuk mengembalikan nilai ke dalam deretan array paling terakhir
let arrayPush = ["kita", "akan", "memasukkan", "nilai", "akhir", "yaitu"]      //di sini gw akan nambahin nilai dengan type data string yaitu "anggur"
arrayPush.push("anggur");

console.log(arrayPush);   // anggur otomatis menjadi element terakhir dari arrayPush



//.shift() method ini agaknya menghapus elemen paling pertama dalam suatu array, elemen yang dihapus ini bisa disimpen dengan variabel atau bahkan gak sama sekali jadi cuman di hapus aja 
//contoh

let arrayShift = ["botol", "gelas", "gelang", "uang"];

let mencuriShift = arrayShift.shift();   //elemen pertama arrayShift dihapus dan menjadi nilai untuk var mencuriShift
console.log(mencuriShift);       // output "botol"
// kalau kita gak simpen nilai yang dihapus, nilai atau elemen tersebut gak bisa digunain lagi



// sekarang .unshift()  || method ini berfungsi seperti .push() bedanya dia nambahin buat di paling depan 

let arrayUnShift = ["jerus", "apel", "semangka"];
arrayUnShift.unshift("alpukat");

console.log(arrayUnShift);



//.splice()  digunakan untuk menghapus, mengganti atau menambah elemen
// array.splice(startIndex, deleteCount, item1, item2, ...)
//.splice(parameter pertama adalah dimulai dari index berapa, parameter kedua adalah lu mau ngehapus berapa banyak elemen, dan parameter berikutnya adalah ketika lu mau nambahin nilai dengan type data apapun (nilainya akan masuk di urutan index yang lu tentuin di parameter pertama))

let arraySplice = ["aku", "saya", "kamu", "gw", "lu"];
arraySplice.splice(0, 2)  //gw menghapus 2 elemen yang dimulai dari index 0

console.log(arraySplice);   //"aku" dan "saya" tidak termasuk karena sudah di hapus

arraySplice.splice(1, 0, "ikan", "sapi", "kerbau", "harimau", "jerapah")
console.log(arraySplice.join("-"));



//.slice  method ini untuk memotong elemen di array >> .slice(dariMana, sampaiSebelumMana) atau
// jika mau motong dari index tertentu dan sampai ujungnya cukup .slice(dariMana)

let arraySlice = ["gajah", "kucing", "jerapah", "singa", "tikus"];

console.log(arraySlice.slice(1, 3));   //ini akan motong arraySlice[ index ke-1 sampai ke-2] kenapa 2? karna sebelum atau < bukan <=

let slicedArray = arraySlice.slice(2);

console.log(slicedArray);
console.log(arraySlice);



//array dimensi 1 dan 2
let dimensi1 = [1, 2, 3, 4, 5 , 6];
let dimensi2 = [[1, 2, 3], [4, 5, 6]];

// console.log(dimensi1[0]);     // 1
// console.log(dimensi2[0][0]);  // 1

for (let i = 0; i < dimensi2.length; i++) {
    console.log(i);
    for (let j = 0; j < dimensi2[i].length; j++) {
        console.log(dimensi2[i][j]);
    }
}