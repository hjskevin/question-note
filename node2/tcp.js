const net = require('net');
net.createServer((socket) => {
    console.log('recive a connect');
    console.log(socket);
}).listen(8000, () => {
    console.log('create tcp server');
})