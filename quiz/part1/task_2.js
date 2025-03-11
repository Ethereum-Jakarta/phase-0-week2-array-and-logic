let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function monthString(month) {
    list_month = {
        "01": "Januari",
        "02": "Februari",
        "03": "Maret",
        "04": "April",
        "05": "Mei",
        "06": "Juni",
        "07": "Juli",
        "08": "Agustus",
        "09": "September",
        "10": "Oktober",
        "11": "November",
        "12": "Desember"
    }
    return list_month[month];
}

function dataHandling(data) {
    new_data = data;

    new_data.pop();
    new_data.splice(1, 1, `${data[1].trim()} Elsharawy`);
    new_data.splice(2, 1, `Provinsi ${data[2]}`);
    new_data.splice(4, 0, "Pria", "SMA Internasional Metro");
    console.log(data);

    console.log(monthString(data[3].split("/")[1]));
    console.log(data[3].split("/").sort((a, b) => b - a));
    console.log(data[3].split("/").join("-"));
    console.log(data[1].slice(0, 15));
}

dataHandling(input);