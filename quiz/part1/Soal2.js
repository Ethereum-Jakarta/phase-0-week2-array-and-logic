let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
   input.splice(5, 0,"Pria","SMA Internasional Metro");
   console.log(JSON.stringify(input));
   var bulan = input[3].slice(3, 5);
   switch(bulan) {
     case '05':
       console.log('Mei');
     break;
   }
   var arr = input[3].split('/').sort(function(x,y) {
     return y - x;
   });
   console.log(JSON.stringify(arr));
   var newArr = input[3].split('/').join(" - ");
   console.log(JSON.stringify(newArr));
   var newArr1 = input[1].slice(0, 14);
   console.log(newArr1);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */