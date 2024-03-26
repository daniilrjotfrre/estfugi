const http = require('http');

http.createServer((req, res) => {
  const ip = req.socket.remoteAddress;

  // Check if the IP address is a localhost IP
  if (ip === '127.0.0.1' || ip === '::1') {
    console.log('Received a request from localhost.');
  } else {
    console.log('Received a request from a remote address.');
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
