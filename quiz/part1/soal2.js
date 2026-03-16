let input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  for (let i = 0; i < input.length; i++) {
    switch (i) {
      case 0:
        input[2] = "Provinsi Bandar Lampung";
        input.slice(input.length);
        input.push("Pria", "SMA International Metro");
        console.log(input);
        break;
      case 1:
        console.log("Mei");
        break;
      case 2:
        let i = input[3];
        i = i.split("/");
        i.sort(function (a, b) {
          return b - a;
        });
        console.log(i);
        break;
      case 3:
        let j = input[3];
        j = j.split("/");
        j = j.join("-");
        console.log(j);
        break;
      case 4:
        let z = input[1];
        z = z.slice(0, 15);
        console.log(z);
    }
  }
}

dataHandling2(input);
