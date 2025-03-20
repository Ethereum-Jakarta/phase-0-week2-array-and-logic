let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(data) {
  // output 1
  data[1] += "Elsharawy"
  data[2] = "Provinsi " + data[2]
  data.splice(4, 1, "Pria", "SMA International Metro")
  console.log(data);

  // output 2
  let birthYear = data[3].split("/")
  console.log(birthYear[1] == 5 ? "Mei" : "");
  
  // output 3
  const slicedArr = birthYear.slice(0, 2);
  console.log([birthYear[2], ...slicedArr]);
  
  // output 4
  console.log(birthYear.join("-"));
  
  // output 5
  console.log(data[1].substring(0, 15));
}

dataHandling(input);