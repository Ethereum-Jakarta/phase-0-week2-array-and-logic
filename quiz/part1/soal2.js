let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
   //output 1
   input[1] += 'Elsharawy';
   let prov = input[2];
   let newProv = prov.split(" ");
   newProv.unshift("Provinsi");
   let hasil = newProv.join(" ");
   input[2] = hasil;
   input.pop();
   input.push("Pria");
   input.push("SMA Internasional Metro")
   console.log(input);
   
   //output 2
   const bulan = input[3][3] + input[3][4];
   
   switch(bulan) {
      case "01":
         console.log("Januari");
         break;
      case "02":
         console.log("Februari");
         break;
      case "03":
         console.log("Maret");
         break;
      case "04":
         console.log("April");
         break;
      case "05":
         console.log("Mei");
         break;
      case "06":
         console.log("Juni");
         break;
      case "07":
         console.log("Juli");
         break;
      case "08":
         console.log("Agustus");
         break;
      case "09":
         console.log("September");
         break;
      case "10":
         console.log("Oktober");
         break;
      case "11":
         console.log("November");
         break;
      case "12":
         console.log("Desember");
         break;
      default:
         break;
   }
   
   //output 3
   let date = input[3].split("/");
   date.sort((a, b) => {
      return b - a;
   })
   console.log(date);
   
   //output 4 
   let date2 = input[3].split("/");
   console.log(date2.join("-"));
   
   //output 5
   let name = input[1].split('');
   let limitName = name.slice(0, 15);
   console.log(limitName.join(''));
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