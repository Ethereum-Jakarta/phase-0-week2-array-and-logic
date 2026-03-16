let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let name = input[1] + " Elsharawy"; 
    let provinsi = "Provinsi " + input [2];

    input.splice(1, 1, `${name}`);
    input.splice(2, 1, `${provinsi}`);
    input.splice(4, 1, "Pria", "SMA international Metro")
    console.log(input[0], input[1], input[2], input[3], input[4], input[5]);
    
    let bulan = input[3].split("/");
    if (bulan[1] == "05") {
        console.log("Mei");
    }
    console.log([bulan[2], bulan[0], bulan[1]]);
    console.log(bulan.join("-")) 
    console.log(input[1].substring(0,15));
}

dataHandling(input);

// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
//  */

