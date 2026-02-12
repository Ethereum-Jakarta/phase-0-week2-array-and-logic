let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
function dataHandling(n) {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n[i].length; j++) {
      switch (j) {
        case 0:
          console.log(`Nomor ID: ${n[i][j]}`);
          break;
        case 1:
          console.log(`Nama Lengkap: ${n[i][j]}`);
          break;
        case 2:
          console.log(`TTL: ${n[i][j]}, ${n[i][j + 1]}`);
          break;
        case 4:
          console.log(`Hobi: ${n[i][j]}`);
          break;
      }
    }
    console.log(` `);
  }
}
dataHandling(input);
