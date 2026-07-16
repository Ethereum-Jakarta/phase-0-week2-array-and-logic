let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr) {
    arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    arr.splice(4, 1, "Pria", "SMA Internasional Metro")
    function cetak(array) {
        return '[' + array.map(item => `"${item}"`).join(', ') + ']'
    }
    console.log(cetak(arr))

    let tanggalSplit = arr[3].split("/")
    let bulan = tanggalSplit[1]
    let namaBulan = ""

    switch (bulan) {
        case "01": namaBulan = "Januari"; break;
        case "02": namaBulan = "Februari"; break;
        case "03": namaBulan = "Maret"; break;
        case "04": namaBulan = "April"; break;
        case "05": namaBulan = "Mei"; break;
        case "06": namaBulan = "Juni"; break;
        case "07": namaBulan = "Juli"; break;
        case "08": namaBulan = "Agustus"; break;
        case "09": namaBulan = "Spetember"; break;
        case "10": namaBulan = "Oktober"; break;
        case "11": namaBulan = "November"; break;
        case "12": namaBulan = "Desember"; break;
    }
    console.log(namaBulan)

    let tanggalUrut = tanggalSplit.slice()
    let tahun = tanggalUrut.splice(2, 1)
    tanggalUrut.splice(0, 0, tahun[0])
    console.log(cetak(tanggalUrut))

    let tanggalJoined = tanggalSplit.join("-")
    console.log(tanggalJoined)

    let namaDibatasi = arr[1].slice(0, 15)
    console.log(namaDibatasi)
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