let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    // Sisipkan elemen setelah elemen index ke-1
    input.splice(2, 0, "Elsharawy");
    
    // Sisipkan elemen setelah elemen index ke-2
    input.splice(1, 0, "Provinsi");
    
    console.log(input);
    
    // Ambil bulan dari tanggal (index 3)
    let tanggal = input[3];
    let parts = tanggal.split("/");
    let bulan = parseInt(parts[1]);
    
    // Konversi bulan ke nama bulan
    let namaBulan;
    switch (bulan) {
        case 1: namaBulan = "Januari"; break;
        case 2: namaBulan = "Februari"; break;
        case 3: namaBulan = "Maret"; break;
        case 4: namaBulan = "April"; break;
        case 5: namaBulan = "Mei"; break;
        case 6: namaBulan = "Juni"; break;
        case 7: namaBulan = "Juli"; break;
        case 8: namaBulan = "Agustus"; break;
        case 9: namaBulan = "September"; break;
        case 10: namaBulan = "Oktober"; break;
        case 11: namaBulan = "November"; break;
        case 12: namaBulan = "Desember"; break;
    }
    console.log(namaBulan);
    
    // Pisahkan tahun, bulan, tanggal
    let tahun = parts[2];
    let hari = parts[0];
    console.log([tahun, hari, parts[1]]);
    
    // Format tanggal baru
    console.log(hari + "-" + parts[1] + "-" + tahun);
    
    // Batasi nama maksimal 15 karakter
    let nama = input[1].slice(0, 15);
    console.log(nama);
}

dataHandling2(input);
