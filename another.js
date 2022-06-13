const http = require('http');

const server = http.createServer((req,res) => {
 
  if (req.url==='./'){
    res.write('hello world');
    res.end();
  }

  if (req.url==='./api/me'){
    res.write(JSON.stringify(['1','2','3']));
    res.end();
  }
} );

server.listen(3000);


console.log('listing on 3000');

