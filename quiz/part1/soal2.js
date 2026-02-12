let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(0,4, "0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(input);

    const tanggalLahir = input[3].split('/');
    switch (parseInt(tanggalLahir[1])) {
    case 1:
        console.log(`Januari`);
        break;
    case 2:
        console.log(`Februari`);
        break;
    case 3:
        console.log(`Maret`);
        break;
    case 4:
        console.log(`April`);
        break;
    case 5:
        console.log(`Mei`);
        break;
    case 6:
        console.log(`Juni`);
        break;
    case 7:
        console.log(`Juli`);
        break;
    case 8:
        console.log(`Agustus`);
        break;
    case 9:
        console.log(`September`);
        break;
    case 10:
        console.log(`Oktober`);
        break;
    case 11:
        console.log(`November`);
        break;
    case 12:
        console.log(`Desember`);
        break;
    default:
        console.log(`gak ada bulan ke-${bulan}`);
    }
    console.log([tanggalLahir[2], ...tanggalLahir.slice(0,2)]);

    console.log(input[1].slice(0,15));
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