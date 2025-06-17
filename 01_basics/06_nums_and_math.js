// +++++++++++++++++++++++++++++++++++++++++++++ NUMS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Number() Constructor
const numObj = new Number(100);
console.log(typeof numObj); // object

// Number.prototype.toExponential()
const num = 123456;
console.log(num.toExponential());   // "1.23456e+5"
console.log(num.toExponential(2));  // "1.23e+5"
console.log(num.toExponential(4));  // "1.2346e+5" (rounded)

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// toFixed() Method
const number = 123.4567;
console.log(number.toFixed(2)); // Returns "123.46" (rounded to 2 decimals)

// toLocaleString() Method
const number1 = 1234567.894;
console.log(number1.toLocaleString('en-IN')); // Returns "12,34,567.894" (INDIAN format)
console.log(number1.toLocaleString('en-US')); // Returns "1,234,567.894" (US format)
console.log(number1.toLocaleString('en-DE')); // Returns "1.234.567,894" (GERMAN format)


// +++++++++++++++++++++++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Math.abs()
const num1 = 5;
console.log(Math.abs(num1)); // 5

const num2 = 3.14
console.log(Math.abs(num2)); //3.14

const num3 = 0;
console.log(Math.abs(num3)); // 0

const num4 = "-2";
console.log(Math.abs(num4)); // 2 (string converted to number)

const num5 = null;
console.log(Math.abs(num5)); // 0 (null converts to 0)

const num6 = "hello";
console.log(Math.abs(num6)); // NaN

const num7 = Infinity;
console.log(Math.abs(num7)); // Infinity

// Math.cbrt()
const num8 = 3;
console.log(Math.cbrt(num8));

// Math.ceil()
const num9 = 9.3;
console.log(Math.ceil(num9)); // 10

const num10 = 9.999;
console.log(Math.ceil(num10)); // 10

const num11 = -3.7;
console.log(Math.ceil(num11)); // -3 (rounds toward positive infinity)

const num12 = "9.1";
console.log(Math.ceil(num12)); // 10 (numeric string works)


// Math.floor()
const num13 = 4.9;
console.log(Math.floor(num13)); // 4

const num14 = 9.1;
console.log(Math.floor(num14)); // 9

const num15 = -3.7;
console.log(Math.floor(num15)); // -4 (rounds down to more negative number)

const num16 = "5.9";
console.log(Math.floor(num16)); // 5 (numeric string works)

// Math.imul()
const num17 = 4;
const num18 = 2;
console.log(Math.imul(num17, num18)); // 8

// Math.max()
const num19 = 1;
const num20 = 2;
const num21 = 3; 
console.log(Math.max(num19, num20, num21)); // 3

const num22 = -1;
const num23 = -2;
const num24 = -3;
console.log(Math.max(num22, num23, num24)); // -1

const num25 = "5";
const num26 = "10";
console.log(Math.max(num25, num26)); // 10

const num27 = 1;
const num28 = "abc";
console.log(Math.max(num27, num28)); // NaN (mixed with non-numbers)

const num29 = Infinity;
const num30 = 100;
console.log(Math.max(num29, num30)); // Infinity

// Math.min()
const num31 = 1;
const num32 = 2;
const num33 = 3;
console.log(Math.min(num31, num32, num33)); // 1

const num34 = -1;
const num35 = -2;
const num36 = -3;
console.log(Math.min(num34, num35, num36)); // -3

const num37 = "5";
const num38 = "1";
console.log(Math.min(num37, num38)); // 1 (numeric strings work)

const num39 = "abc";
const num40 = "9";
console.log(Math.min(num39, num40)); // NaN (mixed with non-numbers)

const num41 = -Infinity;
const num42 = 9; 
console.log(Math.min(num41, num42)); // -Infinity

//Math.pow()
const num43 = 2;
const num44 = 3;
console.log(Math.pow(num43, num44)); // 8

// Math.round()
const num45 = 4.2;
console.log(Math.round(num45)); // 4

const num46 = 4.5;
console.log(Math.round(num46)); // 5

const num47 = -3.7;
console.log(Math.round(num47)); // 4

const num48 = -3.2;
console.log(Math.round(num48)); //-3

const num49 = "5.7";
console.log(Math.round(num49)); // 6 (numeric string works)

// Math.sign() Returns 1 for positive numbers Returns -1 for negative numbers
const num50 = 9;
console.log(Math.sign(num50)); // 1

const num51 = -9;
console.log(Math.sign(num51)); // -1

// Math.sqrt()
const num52 = 9;
console.log(Math.sqrt(num52)); // 3

// Math.trunc()
// The Math.trunc() function removes the decimal part of a number, returning its integer portion (truncates toward zero).
const num53 = 4.9;
console.log(Math.trunc(num53)); // 4

