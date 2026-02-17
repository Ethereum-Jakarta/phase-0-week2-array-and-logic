let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function bulanKataHandling(bulanAngka){
   let bulanKata;
   switch(bulanAngka){
    case 1:
        bulanKata = 'January';
        break;
    case 2:
        bulanKata = 'Februay';
        break;
    case 3:
        bulanKata = 'Maret';
        break;
    case 4:
        bulanKata = 'April';
        break;
    case 5:
        bulanKata = 'Mei';
        break;
    case 6:
        bulanKata = 'Juni';
        break;
    case 7:
        bulanKata = 'Juli';
        break;
    case 8:
        bulanKata = 'Agustus';
        break;
    case 9:
        bulanKata = 'September';
        break;
    case 10:
        bulanKata = 'Oktober';
        break;
    case 11:
        bulanKata = 'November';
        break;
    case 12:
        bulanKata = 'Desember';
        break;
    default:
        bulanKata = 'Bulan tidak valid';
   }

   return bulanKata;
}

function dataHandling2(input) {
    input.splice(1, 1, 'Roman Alamsyah Elsharawy') 
    input.splice(2, 1, 'Provinsi Bandar Lampung')
    input.pop()
    input.push("Pria","SMA Internasional Metro")
    console.log(input)

    let tanggal = input[3].split("/");
    console.log(bulanKataHandling(parseInt(tanggal[1])));

    let tanggal2 = [...tanggal]
    tanggal2 = tanggal2.sort((a, b)=>b-a)
    console.log(tanggal2);

    console.log(tanggal.join("-"))

    console.log(input[1].slice(0, 15))
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