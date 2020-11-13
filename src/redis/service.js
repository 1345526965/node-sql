const http = require('http')
const querystring = require('querystring')
const url = require('url')
const userController = require('./user/controller/userController')
const service = http.createServer((request,respon)=>{
    let data 
    request.on('data',(chunk)=>{
          data +=chunk
    })
    request.on('end',()=>{
        const requestUrl = request.url
        const requestMethod = request.method
        console.log(requestUrl)
        // 登陆api
        if(requestUrl.includes('login')&& requestMethod === 'GET'){
            const requestParams = url.parse(requestUrl)
            const queryObject = querystring.parse(requestParams.query)
            console.log(queryObject)
            console.log('--------------------------')
            userController.userLogin(queryObject.username,queryObject.password)
            respon.writeHead('200',{'content-Type':'text/plain'})
            respon.end('username: '+queryObject.username+'password: '+queryObject.password)
        }else if(requestUrl.includes('logout')&& requestMethod === 'GET'){
            const requestParams = url.parse(requestUrl)
            const queryObject = querystring.parse(requestParams.query)
            console.log(queryObject.userSessionId)
            console.log('--------------------------')
            userController.userLogout(queryObject.userSessionId)
            respon.writeHead('200',{'content-Type':'text/plain'})
            respon.end('user logout')
        }else{
            if(!requestUrl.includes('favicon.ico')){
                const requestParams = url.parse(requestUrl)
                const queryObject = querystring.parse(requestParams.query)
                console.log(queryObject)
                console.log('--------------------------')
                userController.userOtherOperation(queryObject.userSessionId)
                respon.writeHead('200',{'content-Type':'text/plain'})
                respon.end('user other')
            }
        }
    })
})
service.listen('3000',()=>{
   console.log(' service start')
})