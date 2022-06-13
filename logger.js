const EventEmitter = require('events');


var url = 'http//wwww.platsr.com/home';

class Logger extends EventEmitter{
      log(message) {
    //logger disp
     console.log(message);
  

     //event
     this.emit('mess' ,{id: 1,url:"http//:"});
     
}
}

module.exports = Logger;