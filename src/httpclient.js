/*
request
*/
// const http = require('http')
// let responData
// http.request({
//     'host':'localhost',
//     'port':'3000',
//     'method':'get'
// },function(res){
//     res.on('data',function(chunk){
//         responData +=chunk;
//     })
//     res.on('end',function(){
//         console.log(responData)
//     })
// }).end()
/*
get
*/
//  const http = require('http')
//  let responData 
//  http.get({
//     'host':'localhost',
//     'port':'3000',
//  },function(res){
//     res.on('data',function(chunk){
//                 responData +=chunk;
//             })
//             res.on('end',function(){
//                 console.log(responData)
//             })
//  }).end()

const http = require('http')
let responData
const option = { 
    'host':'localhost',
    'port':'3000'
}
const request = http.request(option)
request.on('response',function (res) {
                    res.on('data',function(chunk){
                        responData +=chunk;
                    })
                    res.on('end',function(){
                        console.log(responData)
                    })
}).end()