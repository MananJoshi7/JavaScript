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

