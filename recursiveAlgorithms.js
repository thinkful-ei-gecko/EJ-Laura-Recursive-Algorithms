// Counting Sheep
/*
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
*/

//Power Calculator

// function powerCalculator(base, ex, total=base) {
//     //error case
//     if (ex < 0) {
//         return console.log('exponent should be >= 0')
//     }
//     if (ex === 1){
//     //base case
//     return console.log(total);
//     }
//     total = base * total;
//     powerCalculator(base, ex-1, total);
// }

// powerCalculator(2, 5);

// Reverse String
 function reverseString(str){
     //base case
     if(str === ''){
         return '';
     }

     const char = str[str.length - 1]
     console.log(char);

     return char + reverseString(str.substring(0, str.length - 1))
 }
 console.log(reverseString('dog'));