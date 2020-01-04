//Q1. COUNTING SHEEP
function allSheep(sheep){
  //base case
  if(sheep === 0){
    return console.log('All sheep jumped over the fence')
  }
  //general case
  console.log(sheep + ': Another sheep jumps over the fence')
  allSheep(sheep - 1)
}
//allSheep(7);


function sheepCount(total) {
  if (total === 0){
    return console.log('No more sheep!');
  }
  console.log(`Number ${total} jumped over the fence`);
  sheepCount(total - 1);
}
//sheepCount(11);

//Q2. POWER CALCULATOR
function powerCalculator( base, ex, total=base ) {
  //error case
  if (ex < 0) {
    return console.log('exponent should be >= 0');
  }
  //base case
  if (ex === 1){
    return console.log(total);
  }
  total = base * total;
  powerCalculator(base, ex-1, total);
}
//powerCalculator(2, 9);

function powerCalc(base, exponent){
  if (exponent < 0) {
    return 'Exponent cannot be less than 0';
  } 
  else {
    if (exponent === 0) {
      return 1;
    }
    return base * powerCalc(base, exponent-1);
  }
}
//console.log(powerCalc(2, 5));

//Q3. REVERSE STRING
function reverseString(str){
  //base case
  if(str === ''){
    return '';
  }
  const char = str[str.length - 1];
  return char + reverseString(str.substring(0, str.length - 1));
}
//console.log(reverseString('pots'));

function stringReverser(phrase){
  if (phrase.length === 1){
    return phrase;
  }
  return stringReverser(phrase.substring(1)) + phrase[0];
}
console.log(stringReverser('console log'));
//Q4. NTH TRIANGULAR NUMBER
function triangularNumber(num) {
  //base case
  if(num === 1){
    return 1;
  }
  return num + triangularNumber(num -1);
}
//console.log(triangularNumber(9));


//Q5. STRING SPLITTER
function splitter(string, separator){
  //base case
  let index = string.indexOf(separator);
  if (index ===  -1){
    return [string];
  }
  return [string.slice(0, index)].concat(splitter(string.slice(index + separator.length), separator));
}
//console.log(splitter('02/20/2020', '/'));
//console.log(splitter('11-04-2019', '-'));
//console.log(splitter('12.25.2019', '.'));


//Q6. FIBONACCI
function fib(x) {
  //base case
  if(x < 2) {
    return x;
  }
  return (fib(x-1)+fib(x-2));
}
//console.log(fib(9));


//Q7. FACTORIAL
function factorialNumber(num) {
  //base case
  if(num === 1) {
    return 1;
  }
  return num * factorialNumber(num-1);
}
//console.log(factorialNumber(9));


//Q8. FIND A WAY OUT OF A MAZE

//Q9. FIND ALL WAYS OUT OF THE MAZE

//Q10. ANAGRAMS
function anagram(word) {
  //base case


}

//Q11. ORGANIZATION CHART

//Q12. BINARY REPRESENTATION
function binaryRep(num) {
  //base case
  if(num<=0) {
    return'';
  }
  let remainder = num%2;
  return binaryRep(Math.floor(num/2)) + remainder;
}
console.log(binaryRep(7), '7');
console.log(binaryRep(9), '9');
console.log(binaryRep(11), '11');
console.log(binaryRep(13), '13');
console.log(binaryRep(14), '14');
console.log(binaryRep(15), '15');
console.log(binaryRep(17), '17');

