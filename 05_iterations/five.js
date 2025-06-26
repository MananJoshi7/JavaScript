// for each

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];
// coding.forEach( function(item){
//     console.log(item);
// } )                               // Normal function

// coding.forEach( (item) => {
//     console.log(item);
// } )                               // Arrow function


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName)
} )                                 // Arrow Function


// myCoding.forEach( function(item){
//     console.log(item.languageName);
// } )                                 // Normal Function