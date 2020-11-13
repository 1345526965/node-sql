const http = require('http')
let server = http.createServer(function(request,respon){
    respon.writeHead(200,{'content-Type':'text/plain'});
    respon.end('Hello  Node.js')


})
server.on('connection',function(){
    console.log('客户端已链接')
})

server.on('close',function(){
    console.log('服务端已关闭')
})
server.listen(3000,function(){
    console.log('Server is listaning')
    
})