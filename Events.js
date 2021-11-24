var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 =function listener1()
{
    console.log("listener1 is executed......");

}

eventEmitter.on('myevent',listener1);

eventEmitter.emit('myevent');
