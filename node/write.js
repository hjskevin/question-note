// 同步写文件
const fs = require('fs');
// const body = '### 我是第三个文件';
// fs.writeFileSync('../static/test3.md', body);

// 异步写文件
// const body = '### 我是第四个文件';
// fs.writeFile('../static/test4.md', body, (err) => {
//     if (err) {
//         throw (err);
//     } else {
//         console.log('已保存')
//     }
// })

// const body2 = '我是第五个文件的内容'
// fs.writeFile('../static/test5.md', body2, (err) => {
//     if (err) {
//         throw (err);
//     } else {
//         console.log('已保存')
//     }
// })

// 监听文件的内容
fs.watch('../static/test6.md', 'utf8', (eventType, filename) => {
    console.log('eventType', eventType);
    console.log('filename', filename);
})