var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling(input) {
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

    var personName = input[1].slice(0, 15)
    var dateOfBirth = input[3].split("/")

    console.log(input)

    if (dateOfBirth[1] === "05") {
        console.log("Mei")
    }
    
    console.log([dateOfBirth[2], dateOfBirth[0], dateOfBirth[1]])

    console.log(dateOfBirth.join("-"))

    console.log(personName)
}

dataHandling(input)
