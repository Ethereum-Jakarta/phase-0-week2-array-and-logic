// SOAL KE-1

let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling() {
    for (let i = 0; i < input.length; i++) {  
        let nomorID = "";
        let namaLengkap = "";
        let tempatLahir = "";
        let tanggalLahir = "";
        let hobi = "";

        for (let j = 0; j < input[i].length; j++){  
            if (j === 0){
                nomorID = input[i][j];
            } else if (j === 1) {
                namaLengkap = input[i][j];
            } else if (j === 2) {
                tempatLahir = input[i][j];
            } else if (j === 3) {
                tanggalLahir = input[i][j];
            } else if (j === 4) {
                hobi = input[i][j];
            } else {
                return `Maaf Data Tidak Valid`;
            }
        }        
        
        console.log(`Bidodata :`);
        console.log(`NOMOR ID = ${nomorID}`);
        console.log(`NAMA LENGKAP = ${namaLengkap}`);
        console.log(`TTL = ${tempatLahir} ${tanggalLahir}`);
        console.log(`HOBI = ${hobi}`);
        console.log("----");
    }
}

console.log(dataHandling());



//SOAL KE-2

function angkaBulan(bulan) {
    switch (bulan) {
        case 1:
            return "Januari";
            break;
        case 2:
            return "Februari";
            break;
        case 3:
            return "Maret";
            break;
        case 4:
            return "April";
            break;
        case 5:
            return "Mei";
            break;
        case 6:
            return "Juni";
            break;
        case 7:
            return "Juli";
            break;
        case 8:
            return "Agustus";
            break;
        case 9:
            return "September";
            break;
        case 10:
            return "Oktober";
            break;
        case 11:
            return "November";
            break;
        case 12:
            return "Desember";
            break;
        default :
            return "Bulan Tidak Valid";
    }
}



let input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input2[1] = input2[1].split(" ");
    input2[1].push("Elsharawy");

    input2[2] = input2[2].split(" ");
    input2[2].unshift("Provinsi");

    input2[3] = input2[3].split("/");
    input2[3].unshift(input2[3].pop());

    let namaBulan = angkaBulan(parseInt(input2[3][2], 10));

    input2.splice(4, 1, "Pria", "SMA Internasional Metro");

    
    console.log(input2);
    console.log(namaBulan);
    console.log(input2[3]);

    input2[3].push(input2[3].shift());
    let tanggalLahir2 = input2[3].join("-");

    console.log(tanggalLahir2);
    
    input2[1] = input2[1].join(" ");
  
    console.log(input2[1].slice(0, 14));
}

console.log(dataHandling2());