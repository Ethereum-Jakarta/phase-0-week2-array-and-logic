let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
let lastName = "Elsharawy";
let gender = "Pria";
let school = "SMA Internasional Metro";


function dataHandling2(dataInput, lastNamePara, genderPara, schoolPara){
    // Output: ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
    dataInput[1] = dataInput[1] + lastNamePara;
    dataInput[2] = `Provinsi `+ dataInput[2];
    dataInput.pop()
    dataInput.push(genderPara);
    dataInput.push(schoolPara);
    console.log(dataInput);

    const dataBorn = dataInput[3].split("/"); // Output: ['21', '05', '1989']
    let dataMonth;
    switch(dataBorn[1]) {
        case "01":
            dataMonth = "Januari";
            break;
        case "02":
            dataMonth = "Februari";
            break;
        case "03":
            dataMonth ="Maret";
            break;
        case "04":
            dataMonth = "April";
            break;
        case "05":
            dataMonth = "Mei";
            break;
        case "06":
            dataMonth = "Juni";
            break;
        case "07":
            dataMonth = "July"; 
            break;
        case "08":
            dataMonth = "Agustus";
            break;
        case "09":
            dataMonth = "September";
            break;
        case "10":
            dataMonth = "Oktober";
            break;
        case "11":
            dataMonth = "November";
            break;
        case "12":
            dataMonth = "Desember";
            break;

    }
    console.log(dataMonth);

    let modifDataBorn = [];
    modifDataBorn.unshift(dataBorn[1]);
    modifDataBorn.unshift(dataBorn[0]);
    modifDataBorn.unshift(dataBorn[2]);
    console.log(modifDataBorn); //Output: ['1989', '21', '05'];

    console.log(`${dataBorn[0]}-${dataBorn[1]}-${dataBorn[2]}`);

    let nama ="";
    for (i = 0; i < 15; i++){
        nama += dataInput[1].charAt(i);
    }
    console.log(nama);
}

dataHandling2(input, lastName, gender, school);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */