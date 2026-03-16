let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(input) {
  
    //OUTPUT 1
    input.splice(1, 2, "Roman Alamsyah Elsharawy" ,"Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria" ,"SMA Internasional Metro");
    console.log(input);

    //OUTPUT 2
    let pisah = input[3].split("/");
    let bulan = pisah[1];

    switch (bulan){
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
            console.log("Yang bener masukinnya");
            break;
    }

    //OUTPUT 3
    let tanggal = [pisah[2], pisah[0], pisah[1]];
    console.log(tanggal);

    //OUTPUT 4
    let tanggalBaru = pisah.join("-");
    console.log(tanggalBaru);

    //OUTPUT 5
    console.log(input[1].slice(0, 14));

}

dataHandling2(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * 
 * Mei
 * 
 * ["1989", "21", "05"]
 * 
 * 21-05-1989
 * 
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */