const http  = require('http')
const querystring = require('querystring')
const url  = require('url')
const UserServer = require('./UserServer')

// const User  = require('./UserServer')
const service = http.createServer(function(request,respon){
    let data
   request.on('data',function(chunk){
        data += chunk
        console.log('----接收数据----',data)
   })
   request.on('end',function(){
      
    //    对url进行判断  
    const requestUrl = request.url
    const requestMethod = request.method
    console.log('-----请求结束-------',requestUrl,requestMethod)
    // const responData = requestUrl+','+requestMethod
    if(requestUrl.includes('login') && requestMethod === 'GET'){
        const urlParse = url.parse(requestUrl)
        const params = querystring.parse(urlParse.query)
        console.log('------请求接口------',params)
        const loginState= UserServer.login(params.username,params.password)
        // const loginState= UserServer.username
        console.log('------登陆状态--------',loginState)
        respon.end(params.username+','+params.password+','+loginState)
    }
    

   })
})
service.on('connection',function(){
    console.log('------客户端进行连接-------')
})
service.listen('3000',function(){
    console.log('------node服务器启动--------')
})