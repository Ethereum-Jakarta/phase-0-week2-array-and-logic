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

function dataHandling(inp) {
    let out = "";
    for(i = 0; i < inp.length; i++) {
        for (j = 0; j < inp[i].length; j++) {
            if (j === 0) {
                out += (`Nomor ID: ${inp[i][j]}\n`);
            } else if (j === 1) {
                out += (`Nama Lengkap: ${inp[i][j]}\n`);
            } else if (j === 2){
                tmp = (`${inp[i][j]}`);
            } else if (j === 3) {
                out += (`TTL: ${tmp} ${inp[i][j]}\n`)
            }else {
                out += (`Hobi: ${inp[i][j]}\n`);
            }
        }
        out += ("\n");
    }
    return out;
}

console.log(dataHandling(input));

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/