const events = require("events");
const event = new events.EventEmitter();

// event.on('click',(a,b)=>console.log(a/b));
// event.emit('click',12,4);


//! events in side event
const first_event =function(a,b){
    console.log(a-b)
    event.emit("click2")
    event.emit("click3")
}

const second_event = function(){
    console.log("Second event trigger....") 
}

const third_event = function(){
    console.log("Third event triggred...")
}

event.on("click", first_event);
event.on("click3", third_event);
event.on("click2", second_event)
event.emit("click", 12,4)
