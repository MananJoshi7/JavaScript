for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 9){
        // console.log("9 is the number of universe");
    }
    // console.log(i);
}


for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`)
        console.log(i + '*' + j + '=' + i*j)
    }
    
}


let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// break and continue

for (let index = 1; index <= 20; index++){
    if(index == 9){
        // console.log(`Detected 9`);
        break
    }
    // console.log(`Value of i is ${index}`)
}


for (let index = 1; index <= 20; index++) {
    if(index == 9){
        // console.log(`Detected 9`);
        continue                            // continue statement ek var skip kari deye che
    }
    // console.log(`Value of i is ${index}`)    
}


// Write a loop that prints numbers from 5 to 15 (inclusive), but skips numbers divisible by 4.
for (let index = 5; index <= 15; index++){
    if(index % 4 == 0){
        // console.log(`Number is divisible by 4`);
        continue
    }
    // console.log(index);
}


// Write a loop that prints numbers from 5 to 1 (in descending order).
for (let index = 5; index >= 1; index--) {
    // console.log(index)
}


// Print all even numbers between 0 and 10 (inclusive).
for (let index = 0; index <= 10; index++) {
    if(index%2==0){
        // console.log(index);
    }
}


// Print all odd numbers between 1 and 9 (inclusive).
for (let index = 1; index < 9; index++) {
    if(index%2!==0){
        // console.log(index);
    }  
}


// Print numbers from 1 to 7, but skip number 4.
for (let index = 1; index <= 7; index++) {
    if(index == 4){
        continue
    }
    // console.log(index);
}


// Print numbers from 1 to 10, but only if they're divisible by 3.
for (let index = 1; index <= 10; index++) {
    if(index%3==0){
        // console.log(index);
    }
}


// Calculate and print the sum of numbers from 1 to 5.
let sum = 0;
for(i = 1; i <= 5; i++){
    sum += i;
}
// console.log("Sum:", sum);


// Print numbers from 1 to 10, but stop when you reach 7.
for (let index = 1; index <= 10; index++) {
    if(index == 7){
        break
    }
    // console.log(index);
}

// Print each number from 1 to 3 with a message like: "Number 1", "Number 2", etc.
for(let i = 1; i <= 3; i++){
    // console.log("Number "+ i);
}


// let pattern = "";
// for(let i = 1; i <= 3; i++){
//     pattern += "*";
// }
// console.log(pattern);



// for (let i = 3; i >= 1; i--) {
//     let pattern = "";
//     for(let j = 1;j <= i; j++){
//         pattern += "*";
//     }
//     console.log(pattern);
// }


// for(let i = 1; i <= 5; i++){
//     pattern = "";
//     for(let j = 1; j <= i; j++){
//         pattern += "*"
//     }
//     console.log(pattern);
// }



// for(let i = 5; i >= 1; i--){
//     let pattern = "";
//     for(let j = 1; j <= i; j++){
//         pattern += "*"
//     }
//     console.log(pattern);
// }




// for (let i = 1; i <= 5; i++) {
//   let pattern = '';
//   for (let j = 1; j <= i; j++) {
//     pattern += j;
//   }
//   console.log(pattern);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j < 10; j++) {
//         // console.log(`Inner loop value: ${j} and inner loop ${i}`)
//         console.log(i + '*' + j + '=' + i*j)
//     }
    
// }



for(let i = 1; i <= 3; i++){
    console.log(i);
    for(let j = 1; j <= 3; j++){
        console.log(i + "*" + j + '=' + i*j)
    }
}