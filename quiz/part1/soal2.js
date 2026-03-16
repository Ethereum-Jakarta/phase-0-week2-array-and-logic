let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
let maxKarakter = 15;

function dataHandling2(data) {
    data.splice(1,1, "Roman Alamsyah Elsharawy");
    data.splice(2,1, "Provinsi Bandar Lampung");
    data.splice(4,0, "Pria");
    data.splice(5,1, "SMA Internasional Metro");
    console.log (data);

    data.unshift("Mei");
    console.log(data[0]);

    data.splice(4,1, "1989", "21", "05" );
    console.log(data.slice(4,7));
    
    data.slice(4);
    data.slice(5);
    data.slice(6);
    data.splice(4,1, "21-05-1989");
    console.log(data[4]);

    console.log(data[2].slice(0, maxKarakter))
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