var c = 300;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);
// console.log(b)
console.log(c); // never use the var


let a1 = 300;
if(true){
    let a1 = 30;
    console.log("INNER: ", a1) // local scope
}
console.log(a1); // global scope


function one(){
    const username = "Manan";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two()
}
one()
// "Child functions can use the properties of parent functions, but parent functions cannot use the properties of child functions."


if(true){
    const username = "ram";
    if(username == "ram"){
        const website = " facebook";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
    
}
addone(5)



console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}

