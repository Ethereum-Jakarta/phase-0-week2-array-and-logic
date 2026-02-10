let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input[1] += "Elsharawy";
    input[2] = "Provinsi " + input[2];
    input.splice(4, 1, "Pria", "SMA International Metro");

    
    let month =+ input[3].split('/')[1];
    switch (month) {
        case 1:
            month = "Januari";
            break;
        case 2:
            month = "Februari";
            break;
        case 3:
            month = "Maret";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "Mei";
            break;
        case 6:
            month = "Juni";
            break;
        case 7:
            month = "Juli";
            break;
        case 8:
            month = "Agustus";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "Oktober";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "Desember";
            break;
        default:
            month = "!month"
            break;
    }

    console.log(`Output 1: ${input}`)
    console.log(`Output 2: ${month}`)
}

dataHandling(input)