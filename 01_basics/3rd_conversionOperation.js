let scrore = 33

console.log(typeof score);
console.log(typeof (score));
 
let valueInNumber = Number(scrore)
console.log(typeof valueInNumber);
console.log(valueInNumber) ;

// "33"=> 33
// "33abc"=> Nan
//true => 1;false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean (isLoggedIn);

//1 => true; 0 => false
//""=> false
//"shanu"=> true


//*****************OPERATIONS****************

let value = 3
let negValue = -value
console.log(negValue) 
// => -3

//console.log(3+2);
//console.log(3-2);
//console.log(2*2);
//console.log(3**2);
//console.log(2/3);
//console.log(2%3);

let str1 = "hello"
let str2 = "shanu"

let str3 = str1+str2
console.log(str3);
//=>hello+shanu

console.log("1"+2);
// => 12
console.log(1 + "2");
//=>12
console.log("1"+2+2);
//=> 122
console.log(1+2+"2");
// => 32

console.log(+true);
// => true
//console.log(true +);
// => error

let gameCounter = 100
gameCounter++;
console.log("gameCounter");
// => 101

let gameCounter = 100
++gameCounter;
console.log("gameCounter");
// => 101