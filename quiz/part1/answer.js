// soal 1

// function dataHandling(data) {
//     for (let i = 0; i < data.length; i++) {
//         console.log("Nomor ID:", data[i][0]);
//         console.log("Nama Lengkap:", data[i][1]);
//         console.log(`TTL: ${data[i][2]}, ${data[i][3]}`);
//         console.log("Hobi:", data[i][4]);
//         console.log()
//     }
// }

// let input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
// ]

// dataHandling(input);

// soal ke-2

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    // 1. 
    input[1] += "Elsharawy";
    input[2] = "Provinsi Bandar Lampung";
    input.splice(4, 1, "Pria", "SMA Internasional Metro")

    // 2. 
    let bulan = +input[3].split("/")[1];
    switch (bulan) {
        case 1:
            bulan = "Januari"
            break;
        case 2:
            bulan = "Februari"
            break;
        case 3:
            bulan = "Maret"
            break;
        case 4:
            bulan = "April"
            break;
        case 5:
            bulan = "Mei"
            break;
        case 6:
            bulan = "Juni"
            break;
        case 7:
            bulan = "Juli"
            break;
        case 8:
            bulan = "Agustus"
            break;
        case 9:
            bulan = "September"
            break;
        case 10:
            bulan = "Oktober"
            break;
        case 11:
            bulan = "November"
            break;
        case 12:
            bulan = "Desember"
            break;
        default:
            console.warn("Bulan tidak valid!")
            break;
    }

    // 3. 
    let tanggal = input[3].split("/");
    tanggal = tanggal.sort(function (a, b) {
        return a - b;
    });

    // 4. 
    let tanngalJoin = input[3].split("/");
    tanngalJoin = tanngalJoin.join("-");

    // 5. 
    let nama = input[1].slice(0, 15);




    // output
    console.log("1.", input);
    console.log("2.", bulan);
    console.log("3.", tanggal);
    console.log("4.", tanngalJoin);
    console.log("5.", nama);
}

dataHandling2(input);