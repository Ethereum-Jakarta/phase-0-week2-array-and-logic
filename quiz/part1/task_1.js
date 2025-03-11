function dataHandling(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(
      `Nomor ID: ${data[i][0]}\nNama Lengkap: ${data[i][1]}\nTTL: ${data[i][2]} ${data[i][3]}\nHobi: ${data[i][4]}\n`
    );
  }
}

let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

dataHandling(input);
