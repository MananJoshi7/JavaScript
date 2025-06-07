// *******************************Conversion******************************

let score = "59abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0


let isLoggedIn = "man";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 9;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

// *****************************************Operations******************************************

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(3+2);
// console.log(3-2);
// console.log(3*2);
// console.log(3**2);
// console.log(3/2);
// console.log(3%2);

let str1 = "Hello";
let str2 = " Man";
let str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122 If the string is at first then the whole number is printed without operations. 
// console.log(1 + 2 + "2"); //32 If the string is at the last then it will do the operations on the numbers before to the string and at last it will print the string.

// console.log(+true); //1
// console.log(+""); //0

// let x = 3;
// let y = x++;
// console.log(`x:${x}, y:${y}`); //x:4 y:3
// Post-increment (x++) → "Give me the old value first, then update."
// Pre-increment (++x) → "Update first, then give me the new value."

console.log(3 + 4 * 2);
console.log((3 + 4) * 2);

//  Brackets come first! ( )
//  Powers (like squares) come before × or ÷
//  × and ÷ come before + and -
//  If same priority (like * and /), solve left to right.
