// for of

const arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(greetings);  // for (const greet of greetings) iterates over each character in the string greetingsx 
}


// Maps

const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')
map.set('IN','INDIA')
// console.log(map);

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}