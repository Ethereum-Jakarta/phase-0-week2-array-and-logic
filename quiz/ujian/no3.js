function groupAnimals(animals) {
    let result = [];
    for(let animal of animals){
        let firstletter = animal[0];
        let found = false;

        for(let group of result){
            if(group[0][0] === firstletter){
                group.push(animal);
                found = true;
                break;
            }
        }

        if(!found){
            result.push([animal]);
        }
    }
    return(result.sort());
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]