let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    //1.
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 0, "Pria");
    input.splice(5, 0, "SMA Internasional Metro");
    console.log(input);

    //2.
    let tanggal = input[3].split("/");
    let bulan = tanggal[1];
    let namaBulan;
    switch (bulan) {
        case "01":
            namaBulan = "Januari";
            break;
        case "02":
            namaBulan = "Februari";
            break;
        case "03":
            namaBulan = "Maret";
            break;
        case "04":
            namaBulan = "April";
            break;
        case "05":
            namaBulan = "Mei";
            break;
        case "06":
            namaBulan = "Juni";
            break;
        case "07":
            namaBulan = "Juli";
            break;
        case "08":
            namaBulan = "Agustus";
            break;
        case "09":
            namaBulan = "September";
            break;
        case "10":
            namaBulan = "Oktober";
            break;
        case "11":
            namaBulan = "November";
            break;
        case "12":
            namaBulan = "Desember";
            break;
    }
    console.log(namaBulan);

    //3.
    let tanggalBaru = [
        tanggal[2],
        tanggal[0],
        tanggal[1]
    ];
    console.log(tanggalBaru);
    

    //4.
    let tanggalJoin = tanggal.join("-");
    console.log(tanggalJoin);

    //5.
    let namaLimit = input[1].slice(0, 15);
    console.log(namaLimit);

}

dataHandling2(input);