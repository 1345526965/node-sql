const http = require('http')
const server = http.createServer(function(request,respon){
    let data;
    request.on('data',function(chunk){
           data +=chunk;
           console.log('----------接收的数据---------')
    })
    request.on('end',function(){
        let method = request.method
        let headers = JSON.stringify(request.headers)
        let httpVersion = request.httpVersion
        let requestUrl = request.url
        respon.writeHead('200',{'content-Type':'text/html'})
        let responData = method+','+headers+","+httpVersion+","+requestUrl
        respon.end(responData)
    })
    
})
server.on('connection',function(){
    console.log('客户端链接')
})
server.listen(3000,function(){
    console.log('server start success')
})
