// map


const numbers = [1,2,3,4,5,6,7,8,9,10];
// const newNum = numbers.map( (num) => num + 1 );

// channing
const newNum = numbers.map( (num) => num * 10 )
                      .map( (num) => num + 1 )
                      .filter( (num) => num >= 40 )

console.log(newNum);



// const  newNum = numbers.map( (num) =>{
//     return num + 10
// } )
// console.log(newNum);                        // Arrow function


// const newNum = numbers.map( function(num){
//     return num + 2;
// } )
// console.log(newNum);                        // Normal function


// for each loop
// const numbers1 = [1,2,3,4,5,6,7,8,9,10];
// numbers.forEach( (num) => {
//     console.log(num+5);
// } )