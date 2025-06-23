// Immediately Invoked Function Expressions (IIFE) 


function chai(){
    console.log(`DB Connected`);
}
chai();

(function chai1(){
    console.log(`Db Connected`);
})();


const chai2 = (()=>{
    console.log('db connect');
})();

(function one(){
    console.log("OM");
})();

const chai10 = (()=>{
    console.log("Jay Shree Ram");
}) ();

(function chai11 (){
    console.log("Jay Bhavani");
}) ();

// () First bracket is function defination
// () Second brracket is execution call