// Array prototype.at()
const colors = ['red','green','blue','yellow'];

// Positive indices (same as bracket notation)
console.log(colors.at(0)); // red
console.log(colors.at(3)); // yellow

// Negative indices (count from end)
console.log(colors.at(-1)); // 'yellow' (last element)
console.log(colors.at(-3)); // 'green' (third from end)


// Array prtotype.concat()
const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
console.log(array1.concat(array2)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Array prototype.fill()
// Syntax:
// arr.fill(value[, start[, end]])
const array3 = [1,2,3,4,5];
console.log(array3.fill(0)); // [ 0, 0, 0, 0, 0 ]

const array4 = [1,2,3,4,5];
console.log(array4.fill(7,2)); // [ 1, 2, 7, 7, 7 ]

const array5 = [1,2,3,4,5];
console.log(array5.fill(9,1,4)); // [ 1, 9, 9, 9, 5 ]


// Array prototype filter()
const numbers = [1,4,6,8,10];
console.log(numbers.filter(num=>num>3)); // [ 4, 6, 8, 10 ]

const words = ['apple','cat','banana','dog'];
console.log(words.filter(words=> words.length>=4)); // [ 'apple', 'banana' ]


// Array prototype find()
const number1 = [1,4,6,8,10];
console.log(number1.find(number1 => number1 > 5)); // 6 (stops at the first match)

const fruits1 = ['apple','banana','mango'];
console.log(fruits1.find(fruits1 => fruits1.startsWith('b'))); // banana


// Array protoype findIndex()
const number2 = [1,4,6,8,10];
console.log(number2.findIndex(number2 => number2 > 5)); // 2 (value 6 is at index 2)

const number3 = [1,2,3];
console.log(number3.findIndex(number3 => number3 > 5)); // -1


// Array prototype findLast
const number4 = [1,4,6,8,10,7];
console.log(number4.findLast(number4 => number4 % 2 == 0)); // 10 (not 8, because it checks from the end)

const number5 = [1,2,3];
console.log(number5.findLast(number5 => number5 > 5)); // undefined


// Array prototype findLastIndex 
const number6 = [1,4,6,8,10,7];
console.log(number6.findLastIndex(number6 => number6 % 2 == 0)); // // 4 (index of 10, not 8)


// Array prototype flat
const number7 = [1,2,[3,4]];
console.log(number7.flat());


// Array prototype includes()
const number8 = [1,2,3,4];
console.log(number8.includes(3)); // true
console.log(number8.includes(5)); // false

const fruits2 = ['apple','banana','cheery'];
console.log(fruits2.includes('Apple')); // false (case matters!)


// Array prototype indexOf()
const number9 = [10,20,30,40];
console.log(number9.indexOf(30)); // 2
console.log(number9.indexOf(50)); // -1 (not found)

const fruits3 = ['apple','banana','cheery'];
console.log(fruits3.indexOf('apple')); // 0
console.log(fruits3.indexOf('Banana')); // -1 (case-sensitive)


// Array prototype join()
const fruits4 = ["Apple","Banana","Cheery"];
console.log(fruits4.join()); // Apple,Banana,Cheery

const number10 = [1,2,3];
console.log(number10.join("-"));
console.log(number10.join(""));
console.log(number10.join(" "));


// Array prototype lastIndexOf()
const number11 = [10,20,30,20,50];
console.log(number11.lastIndexOf(20)); // 3

const fruits5 = ['apple','banana','apple'];
console.log(fruits5.lastIndexOf('apple')); // 2
console.log(fruits5.lastIndexOf('Apple')); // -1 (case-sensitive)


// Array prototype reverse()
const number12 = [1,2,3,4];
console.log(number12.reverse()); // [ 4, 3, 2, 1 ]


// Array prototype sort()
const fruits6 = ['Banana','Apple','Orange','Mango'];
console.log(fruits6.sort()); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]


// Array prototype toLocaleString()
const number13 = [1000.5,2000.8,3000.2];
console.log(number13.toLocaleString("en-IN")); // 1,000.5,2,000.8,3,000.2


// Array prototype toReversed()
const number14 = [1,2,3];
console.log(number14.toReversed()); // [ 3, 2, 1 ]

const letters = ['a','b','c'];
console.log(letters.toReversed()); // [ 'c', 'b', 'a' ]


// Array prototype toSorted()
const number15 = [5,3,10,1];
console.log(number15.toSorted((a,b)=>a-b)); // [ 1, 3, 5, 10 ]

const fruits7 = ['banana','mango','apple','cheery'];
console.log(fruits7.toSorted()); // [ 'apple', 'banana', 'cheery', 'mango' ]
 












// Adding/Removing Elements from End of Array:

// push() - Adds one or more elements to the end
let fruits = ['apple', 'banana'];
fruits.push('orange');
// console.log(fruits); // [ 'apple', 'banana', 'orange' ]

// pop() - Removes the last element
fruits.pop();
// console.log(fruits); // [ 'apple', 'banana' ]


// Adding/Removing from Start of Array:
// unshift() - Adds one or more elements to the beginning
fruits.unshift('kiwi');
// console.log(fruits); // [ 'kiwi', 'apple', 'banana' ]

// shift() - Removes the first element
fruits.shift();
// console.log(fruits); // [ 'apple', 'banana' ]


// Extracting/Modifying Array Sections:
// slice() - The "Copy Cat"
let fruits10 = ['apple','banana','orange','grape'];
// console.log(fruits1.slice(1,3)); // [ 'banana', 'orange' ]

// splice() - The "Transformer"
let removed = fruits10.splice(1,2,'kiwi','mango');
// console.log(removed); // [ 'banana', 'orange' ]
// console.log(fruits10); // [ 'apple', 'kiwi', 'mango', 'grape' ]


