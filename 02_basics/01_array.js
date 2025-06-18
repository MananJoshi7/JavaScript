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