// Counting Sheep

function allSheep(sheep){

    //base case
    if(sheep === 0){
        return console.log('All sheep jumped over the fence')
    }


    //general case
    console.log(sheep + ': Another sheep jumps over the fence')
    allSheep(sheep - 1)

}

allSheep(3)


