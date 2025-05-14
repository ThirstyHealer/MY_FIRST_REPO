import {add} from "./math.js";
let age=25;
age=35;

 console.log(age);
 var firstName="Jaya";
 firstName="John";

 console.log("My name is"+ firstName+ "\nand the age is "+age);
 console.log(`My name is  ${firstName} and the age is ${age}`);
 function greet (){
    console.log("Hello");
 }
 function sum(a,b){
    return a+b;
 }

 function text(){
    console.log("Samriddhi college");
 }

 function diff (x,y){
    return x-y;

 }
 greet();
 let addition =sum(1,2);
 console.log(addition);


 const square=(num)=> num*num;
 console.log(square(5));

 function test(num){
if (num>5){
    let result="Greater than 5";
    console.log(result);
}

 }
 text();
 test(6);
console.log(add(1,2));
