import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("greet", (collegename, semester) => {
  console.log(`Hello BCA ${semester} studying in ${collegename}`);
});

emitter.emit("greet", "Samriddhi", "6th sem");

emitter .on("personalDetails",(detailObject)=>{
    Console.log("`My name is:${detailsObject.name")
    console.log("hello");

});
emitter.emit("personalDetails",{name:"Ram",age:25, college:"Samriddhi", address:"Bhaktapur"},);