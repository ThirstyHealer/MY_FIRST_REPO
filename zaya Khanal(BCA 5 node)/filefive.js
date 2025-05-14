import EventEmitter from "events";
const emitter = new EventEmitter();

const eventCounts=
{
    "userLoggedIn":0,
    "user-details":0,
    "userLoggedout":0,
}

emitter.on("userLoggedIn", () => {
  console.log(`User can log in here`);

  emitter.emit("userDetails", { uname: "Jaya", uemail: "zayakhanal2@gmail.com" });
});

emitter.on("userDetails", (detailObject) => {
  console.log(`User details are:`, detailObject);
});

emitter.emit("userLoggedIn");
