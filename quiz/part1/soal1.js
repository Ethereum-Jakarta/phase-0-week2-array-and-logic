let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
function dataHandling(arr) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    let kota = arr[i][2];
    let tgl = arr[i][3];
    let obj = {
      "Nomor ID": arr[i][0],
      "Nama Lengkap": arr[i][1],
      TTL: `${kota} ${tgl}`,
      Hobi: arr[i][4],
    };
    data.push(obj);
  }
  data.forEach((identitas, index) => {
    for (let key in identitas) console.log(`${key}: ${identitas[key]}`);
    console.log("");
  });
}
dataHandling(input);
