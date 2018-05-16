var http = require('http');

var server = http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
})

server.listen(8887);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8887/');


/**
 * Created by lanou on 16/10/29.
 */
// var http = require("http");
// var url = require("url");
// var fs = require("fs")

// var server = http.createServer(function (req,res) {
//     var urlObj = url.parse(req.url,true);
//     console.log(urlObj.pathname);
//     if(urlObj.pathname == "/users"){
//         var arr = [
//             {"firstName":"w","lastName":"lt"},
//             {"firstName":"w","lastName":"lt"}
//         ];
//         var json = JSON.stringify(arr);
//         res.end(json);
//     }else if(urlObj.pathname != "/favicon.ico"){
//         fs.createReadStream("."+urlObj.pathname).pipe(res);
//     }
// })

// server.listen(8666);

