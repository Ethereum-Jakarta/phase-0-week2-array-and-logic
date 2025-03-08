let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    // Memperbarui elemen input
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    let tanggal = input[3];
    let tanggalSplit = tanggal.split('/');

    // Bikin switch case disini untuk bulan
    let namaBulan;
    switch (parseInt(tanggalSplit[1])) {
        case 1:
            namaBulan = "Januari";
            break;
        case 2:
            namaBulan = "Februari";
            break;
        case 3:
            namaBulan = "Maret";
            break;
        case 4:
            namaBulan = "April";
            break;
        case 5:
            namaBulan = "Mei";
            break;
        case 6:
            namaBulan = "Juni";
            break;
        case 7:
            namaBulan = "Juli";
            break;
        case 8:
            namaBulan = "Agustus";
            break;
        case 9:
            namaBulan = "September";
            break;
        case 10:
            namaBulan = "Oktober";
            break;
        case 11:
            namaBulan = "November";
            break;
        case 12:
            namaBulan = "Desember";
            break;
    }
    console.log(namaBulan); 
    
    let tgl = tanggalSplit[0];
    let bln = tanggalSplit[1];
    let thn = tanggalSplit[2];

    console.log(`["${thn}","${tgl}","${bln}"]`); 
    console.log(`${tanggalSplit[0]}-${tanggalSplit[1]}-${tanggalSplit[2]}`); 
    console.log(input[1].slice(0, 15)); 
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