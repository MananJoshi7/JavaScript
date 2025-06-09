// String.prototype.anchor()
const contentString = "Hello, World";
console.log(contentString.anchor("hello"));

// String.prototype.at()
const word = "JavaScript;"
console.log(word.at(0)); // "J" (first character)

// String.prototype.big()
const text = "Hello World";
console.log(text.big()); // <big>Hello World</big>

// String.prototype.blink()
const blinkingText = "Warning";
console.log(blinkingText.blink()); // <blink>Warning</blink>

// String.prototype.bold()
const boldText = "Warning";
console.log(boldText.bold()); // <b>Warning</b>

// String.prototype.charAt()
const words = "ABC";
console.log(words.charAt(0)); // "A"
console.log(words.charAt(1)); // "B"
console.log(words.charAt(2)); // "C"

// String.prototype.charCodeAt()




const name = "Manan";
const repoCount = 50;
// console.log(name + repoCount + " Value");
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Manan');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);
// under a substring we can't give the negative values.

const anotherString = gameName.slice(-5,4);
console.log(anotherString);
// under a slice we can give the neagtive value too.

const newStringOne = "   Manan   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://manan.com/manan%20joshi";
console.log(url.replace('%20','-'));
console.log(url.includes('ram'));