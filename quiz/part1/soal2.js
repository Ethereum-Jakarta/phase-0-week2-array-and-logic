let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1,1,"Roman Alamsyah Elsharawy");
    input.splice(2,1, "Provinsi Bandar Lampung");
    input.splice(4,0, "Pria");
    input.splice(5,1, "SMA Internasional Metro");
    console.log(input)
}

dataHandling(input);

function dataHandling2(input) {
    const pemisah = input[3].split("/");
    const bulan = pemisah[1];
    let dataBulan
    switch (bulan) {
        case "01":
            dataBulan = "Januari";
            break
        case "02":
            dataBulan = "Februari";
            break;
        case "03":
            dataBulan = "Maret";
            break;
        case "04":
            dataBulan = "April";
            break;
        case "05":
            dataBulan = "Mei";
            break;
        case "06":
            dataBulan = "Juni";
            break;
        case "07":
            dataBulan = "Juli";
            break;
        case "08":
            dataBulan = "Agustus";
            break;
        case "09": 
            dataBulan = "September";
            break;
        case "10":
            dataBulan = "Oktober";
            break;
        case "11":
            dataBulan = "November";
            break;
        case "12":
            dataBulan = "Desember";
            break;
    }
    console.log(dataBulan)
}

dataHandling2(input)

function dataHandling3(input) {
    const pemisahTTL = input[3].split("/"); 
    ttl = [pemisahTTL[2], pemisahTTL[0], pemisahTTL[1]];
    console.log(ttl);
}

dataHandling3(input)

function dataHandling4(input) {
    const pemisahTTL = input[3].split("/"); 
    console.log(pemisahTTL.join("-"));
}

dataHandling4(input)

function dataHandling5(input) {
    const nama = input[1].slice(0,15);
    console.log(nama);
}

dataHandling5(input)