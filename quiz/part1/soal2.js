let input = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];

function dataHandling2(input) {
  input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung').push('Pria', 'SMA Internasional Metro');
  console.log(input);
  let date = input.slice(3, 4);
  let newDate = date[0].split('/');
  if (newDate[1] === '05') {
    console.log('Mei');
  }
  console.log([newDate[0], newDate[1], newDate[2]] = [newDate[2], newDate[0], newDate[1]]);
  console.log(`${newDate[1]}-${newDate[2]}-${newDate[0]}`)
  let nama = ''
  for(let i = 0; i < 15; i++) {
    nama += input[1][i]
  }
  console.log(nama)
}

dataHandling2(input);
