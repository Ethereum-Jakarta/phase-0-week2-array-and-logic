let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    input.splice(1,2, "Roman Almasyah Elsharaway", "Provinsi Bandar Lampung")
    input.splice(4,1, "Pria", "SMA Internasional Metro")
    console.log(input);

    let tanggal = input[3].split("/");
    let bulan = parseInt(tanggal[1]);

    let namaBulan;
    switch(bulan){
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

    let tanggalSorted = tanggal.sort().reverse();
    console.log(tanggalSorted);

    let tanggalFormatted = tanggal.join("-");
    console.log(tanggalFormatted);

    let namaTerbatas = input[1].slice(0,15);
    console.log(namaTerbatas);
}

dataHandling2(input)