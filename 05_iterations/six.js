// filter


const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNum = myNums.filter( (num) => num > 4)
console.log(newNum);


const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2007
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010
    },
    {
        title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014
    },
    {
        title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010
    },
    {
        title: 'Book Seven', genre: 'History', publish: 1986, edition: 1986
    },
    {
        title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016
    },
]
const userBooks = books.filter( (bk) => {
    // return bk.genre === 'History' 
    return bk.publish >= 1995 && bk.genre === "History"
} )
console.log(userBooks);



// const newNum = myNums.filter( (num) => {
//     return num > 8
// } )
// console.log(newNum);                      // Arrow function

// const newNum = myNums.filter( function(num){
//     return num > 9;
// } )
// console.log(newNum);                      // Normal function


// For each loop
// const newNums = [];
// myNums.forEach( (num) => {
//     if(num > 3){
//         newNums.push(num)
//     }
// } )
// console.log(newNums)