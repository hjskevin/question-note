// 创建一个http服务
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.end('Hello world');
}).listen(8000, () => {
    console.log('listen on 8000')
})

// 同步文件操作
// const file = fs.readFileSync('../static/test.md', 'utf8');

// console.log(file);

// 异步文件读写操作
console.log('sync start');
fs.readFile('../static/test.md', 'utf8', (err, data) => {
    console.log('test.md de nei rong');
    console.log(data);
});

console.log('sync progress');
fs.readFile('../static/test2.md', 'utf8', (err, data) => {
    console.log('test2.md de nei rong');
    console.log(data);
})

console.log('sync finish');