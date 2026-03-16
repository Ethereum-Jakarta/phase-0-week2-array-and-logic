let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {

    // case 1
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.pop();
    input.push("Pria", "SMA Internasional Metro");
    console.log(input);


    // case 2
    let birthday = input[3];
    let month = "";

    if (birthday.length === 10) {
        month = birthday.substring(3, 5);
        // if birthday format like this d/mm/yyyy
    } else if (birthday.length === 9) {
        month = birthday.substring(2, 4);
    }

    // switch condition
    switch (month) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
        default:
    }
    console.log(month);


    // case 3
    let birthdayArr = [];
    let birthdayString = "";

    // split the string
    for (let i = 0; i < birthday.length; i++) {
        if (birthday[i] !== '/') {
            birthdayString += birthday[i];
        } else {
            birthdayArr.push(birthdayString);
            birthdayString = "";
        }
    }
    birthdayArr.push(birthdayString);

    // destructure to swap the birth array
    [birthdayArr[0], birthdayArr[1], birthdayArr[2]] = [birthdayArr[2], birthdayArr[0], birthdayArr[1]];
    console.log(birthdayArr);


    // case 4
    // destructure again to swap and get the normal form
    [birthdayArr[2], birthdayArr[0], birthdayArr[1]] = [birthdayArr[0], birthdayArr[1], birthdayArr[2]];
    // join and add '-' char
    let newBirthdayArr = birthdayArr.join("-");
    console.log(newBirthdayArr);

    // case 5
    let name = input[1];
    let newName = "";
    // looping trough the name string
    for (let a = 0; a < 15; a++) {
        newName += name[a]
    }
    console.log(newName);
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