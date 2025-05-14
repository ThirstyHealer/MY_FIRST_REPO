function greet(){
    console.log("Hello");
}

greet();
//This is an arrow function
const greet2= () => console.log("Hello");
greet2();
const greet3=(num1,num2) => {
    const result=num1+num2;
    console.log(`the result is ${result}`);
}
greet3(10,25);
const numbers=[1,2,3,4,5];
const doubled=numbers.map(num=>num*2);
console.log(`The old list id ${numbers}`);
console.log(`The new  list id ${doubled}`);
console.log(typeof numbers);

// for loop

const loopsExample =()=>{
    for(let i=0; i<10; i++){
        console.log(i);
    }
    //while loop Example
    let i=0;
    while(i<10){
        console.log(i);
        i++;
    }
    //Do while loop example
    let j=0;
    do{
        console.log(j);
        j++;
    } while(j<10);

    // for...of loop

    const courses=["HTML", "CSS",  "JS","React", "Node"];
        for(const course of coursses)
{
    console.log(course);
}
// for in ... loop
const courseobj= {
    "BCA":"4 years",
    "MBA": "2 years",
    "BTECH": "3 years",
    "MBBS":"5 years",
}
for(const coursekey in courseobj){
    console.log(coursekey);
    console.log(`The value of ${coursekey} is ${courseobj[coursekey]}`)
}
}
loopsExample();
