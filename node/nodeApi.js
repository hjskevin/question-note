const http = require('http');
const data = {
    name: 'Node js 入门实列',
    description: 'zhesshshshshshs',
    date: new Date()
};

// 创建http服务
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    const result = JSON.stringify(data);
    res.end(result);
}).listen(8000, () => {
    console.log('listen on 8000')
})