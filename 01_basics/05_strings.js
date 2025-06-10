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
const character = "XYZ";
console.log(character.charCodeAt('X'));

// String.prototype.codePointAt()
const code = "PQR";
console.log(code.codePointAt('P'));

// String.prototype.concat()
const str = "Hello";
console.log(str.concat(" World!"));

// String.prototype.endsWith()
const str1 = "Hello World";
console.log(str1.endsWith("World")); // true
console.log(str1.endsWith("Hello")); // false
console.log(str1.endsWith('lo', 5)); // true

// String.prototype.fixed()
const str2 = "Code Sample";
console.log(str2.fixed()); // <tt>Code Sample</tt>

//String.prototype.fontcolor()
const str3 = "Warning message";
console.log(str3.fontcolor("red")); // <font color="red">Warning message</font>

// String.prototype.fontsize()
const str4 = "Important Notice";
console.log(str4.fontsize(5)); // <font size="5">Important Notice</font>

// String.prototype.includes()
const str5 = "JavaScript is Awesome!";
console.log(str5.includes('Script')); // true
console.log(str5.includes("script")); // false (case-sensitive)
console.log(str5.includes('is', 10)); // false 

// String.prototype.indexOf()
const str6 = "Hello world";
console.log(str6.indexOf('world')); // 6
console.log(str6.indexOf('World')); // -1 (case-senstivie)
console.log(str6.indexOf('o')); // 4 (first 'o')
console.log(str6.indexOf('o',5)) // 7 (search starts at position 5)



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