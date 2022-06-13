const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();


logger.on('mess',(arg) => {
    console.log('message is here',arg);
    
    });



logger.log('kaladon');
