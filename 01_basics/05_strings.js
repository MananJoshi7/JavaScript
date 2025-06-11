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

// String.prototype.link()
const str7 = "Click Here";
console.log(str7.link("https.example.com")); // <a href="https.example.com">Click Here</a>

// String.prototype.localeCompare()
const str8 = "a"
const str9 = "b";
const str10 = "a";
console.log(str8.localeCompare("b")); // -1 (a comes before b)
console.log(str9.localeCompare("a")); // 1 (b comes after a)
console.log(str10.localeCompare("a")); // 0 (equal)

// String.prototype.match()
const str11 = "The rain in spain";
console.log(str11.match('ain')); // [ 'ain', index: 5, input: 'The rain in spain', groups: undefined ]

// String.prototype.matchAll()
const str12 = 'test1test2';
const regex = /t(e)(st(\d?))/g;
const matches = str12.matchAll(regex);
for (const match of matches) {
  console.log(match);
}

// String.prototype.normalize()
const str13 = "é";          // "\u00E9" (single character)
const str14 = "é";          // "\u0065\u0301" (e + combining ´)
console.log(str13 === str14); // false (different representations)
console.log(str13.normalize() === str14.normalize()); // true (now equal)

// String.prototype.padEnd()
const str15 = "Hello";
console.log(str15.padEnd(10));      // "Hello     " (5 spaces added)
console.log(str15.padEnd(10, " ")); // Same as above

// String.prototype.padStart()
const str16 = "Hi";
console.log(str16.padStart(5));

// String.prototype.repeat()
const str17 = "Hi";
const str18 = "Na";
console.log(str17.repeat(3)); // HiHiHi
console.log(str18.repeat(2)+" Batman!"); // NaNa Batman!

// String prototype.replaca()
const str19 = "Hello World";
console.log(str19.replace("World", "Universe")); //Hello Universe

// String prototype.replaceAll()
const str20 = "Apples are sweet, apples are juicy";
console.log(str20.replaceAll("apples, oranges")); // Error! (Must use regex for case-insensitive)
console.log(str20.replaceAll(/apples/gi,"Oranges")); // "Oranges are sweet, Oranges are juicy."

// String prototype.search()
const str21 = "Hello World";
console.log(str21.search("World")); // 6 (starts at index 6)
console.log(str21.search("world"));  // -1 (case-sensitive)

// String prototype.slice()
const str22 = "Hello World";
console.log(str22.slice(6)); // "World" (from index 6 to end)
console.log(str22.slice(0,5)); // "Hello" (index 0 to 4)

// String prototype.small()
const str23 = "Disclamer";
console.log(str23.small()); // <small>Disclamer</small>

// String prototype.split()
const str24 = "Hello World From JavaScript";
console.log(str24.split(" ")); // [ 'Hello', 'World', 'From', 'JavaScript' ]

// String prototypr.startsWith()
const str25 = "Hello World";
console.log(str25.startsWith("Hello")); // True

// String prototype.strike()
const str26 = "Oudated Price";
console.log(str26.strike()); // <strike>Oudated Price</strike>

// String prototype.sub()
const str27 = "H2O";
console.log(str27.sub()); // <sub>H2O</sub>







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