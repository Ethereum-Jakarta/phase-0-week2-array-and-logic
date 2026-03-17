
let input1 = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
function dataHandling(arr) {
    console.log("soal 1");
    console.log("");
    for (let data of arr) {
        console.log(`Nomor ID: ${data[0]}`);
        console.log(`Nama Lengkap: ${data[1]}`);
        console.log(`TTL: ${data[2]} ${data[3]}`);
        console.log(`Hobi: ${data[4]}`);
        console.log('');
    }
}

dataHandling(input1);

console.log('soal 2');
console.log('');
function dataHandling2(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    let tanggal = input[3].split("/");
    let bulan;
    switch (tanggal[1]) {
       
        case "01": bulan = "Januari"; break;
        case "02": bulan = "Februari"; break;
        case "03": bulan = "Maret"; break;
        case "04": bulan = "April"; break;
        case "05": bulan = "Mei"; break;
        case "06": bulan = "Juni"; break;
        case "07": bulan = "Juli"; break;
        case "08": bulan = "Agustus"; break;
        case "09": bulan = "September"; break;
        case "10": bulan = "Oktober"; break;
        case "11": bulan = "November"; break;
        case "12": bulan = "Desember"; break;
    }
   
    console.log(bulan);  
    console.log([tanggal[2], tanggal[0], tanggal[1]]);
    console.log(tanggal.join("-"));
    console.log(input[1].slice(0, 15));
}

let input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input2);
