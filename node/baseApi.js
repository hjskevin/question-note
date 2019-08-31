const http = require('http');
const url = require('url');
const qs = require('querystring');

const genResponse = userId => ({
    success: true,
    data: {
        userId,
        name: 's121212',
        description: '12121132ddsadadadas',
        date: new Date()
    }
})

// http 服务
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    const reqUrl = url.parse(req.url);
    if (reqUrl.pathname === '/api/search/data') {
        const uid = qs.parse(reqUrl.query).userId;
        const result = JSON.stringify(genResponse(uid));
        res.end(result);
    } else {
        res.writeHead(404);
        res.end('NOt found');
    }
}).listen(8000, () => {
    console.log('listen on 8000')
})