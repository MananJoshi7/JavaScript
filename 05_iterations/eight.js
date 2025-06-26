// reduce


const myNums = [1,2,3];
const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval ${currval}`);
    return acc + currval
},10)
// console.log(myTotal);                                         // Normal function

// const myTotal = myNums.reduce( (acc,currval) =>{
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);                                      // Arrow function


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "Mobile dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0 )

console.log(pricetopay);