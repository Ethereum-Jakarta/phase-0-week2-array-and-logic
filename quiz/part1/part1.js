//? Soal 1

/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

const dataHandling = (input) => {
    input.forEach(data => {
        console.log(`Nomor ID : ${data[0]}`)
        console.log(`Nama Lengkap : ${data[1]}`)
        console.log(`TTL : ${data[2]} ${data[3]}`)
        console.log(`Hobi : ${data[4]}`)
        console.log('')
    });
};
dataHandling(input);


//? Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input1 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input1) {
    // Menggunakan splice untuk memodifikasi array
    input1.splice(1, 1, "Roman Alamsyah Elsharawy");
    input1.splice(2, 1, "Provinsi Bandar Lampung");
    input1.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input1);
    
    // Menggunakan split untuk memecah tanggal
    let tanggal = input1[3].split("/");
    
    // Menggunakan switch case untuk mendapatkan bulan
    let bulan;
    switch (tanggal[1]) {
        case '01': bulan = 'Januari'; break;
        case '02': bulan = 'Februari'; break;
        case '03': bulan = 'Maret'; break;
        case '04': bulan = 'April'; break;
        case '05': bulan = 'Mei'; break;
        case '06': bulan = 'Juni'; break;
        case '07': bulan = 'Juli'; break;
        case '08': bulan = 'Agustus'; break;
        case '09': bulan = 'September'; break;
        case '10': bulan = 'Oktober'; break;
        case '11': bulan = 'November'; break;
        case '12': bulan = 'Desember'; break;
    }
    console.log(bulan);
    
    // Menggunakan slice untuk mendapatkan format tanggal baru
    console.log([tanggal[2], tanggal[0], tanggal[1]]);
    
    // Menggunakan join untuk format tanggal dengan '-'
    console.log(tanggal.join('-'));
    
    // Menggunakan slice untuk membatasi nama hanya 15 karakter
    console.log(input1[1].slice(0, 15));
}

dataHandling2(input1);


