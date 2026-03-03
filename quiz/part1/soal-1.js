let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

input.map((val) => {
  console.log(`Nomor ID: ${val[0]}`);
  console.log(`Nama Lengkap: ${val[1]}`);
  console.log(`TTl: ${val[2]} ${val[3]}`);
  console.log(`Hobi: ${val[4]}\n`);
});
