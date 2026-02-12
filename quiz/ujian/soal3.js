// Soal 3
// js
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) 
{
  // you can only write your code here!
    let arrayAnimalsBaru = [];
    for (let i = 97; i < 122; i++)
    {
        let temp = [];
        for (let j = 0; j < animals.length; j++)
        {
            if (animals[j].charCodeAt(0) === i)
            {
                temp.push(animals[j]);
            }
        }

        if (temp.length > 0)
        {
            arrayAnimalsBaru.push(temp);
        }
    }

    return arrayAnimalsBaru;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]