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
        console.log(`Inner loop value: ${j} and inner loop ${i}`)
    }
    
}