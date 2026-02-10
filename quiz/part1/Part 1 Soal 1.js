function dataHandling(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Nomor ID: " + arr[i][0]);
    console.log("Nama Lengkap: " + arr[i][1]);
    console.log("TTL: " + arr[i][2] + " " + arr[i][3]);
    console.log("Hobi: " + arr[i][4]);
    console.log("");
  }
}

let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

dataHandling(input);
