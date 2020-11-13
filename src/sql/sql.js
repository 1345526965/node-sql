const mysql = require('mysql')
const uuid = require('uuid')
const mysqlConnect = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'test'
})
mysqlConnect.connect((error)=>{
       if(error){
           console.log(error)
           throw error
       }else{
           console.log('connecting successful')
           const uuid1 = uuid.v1()
           const name = 'zhangsan'
           const state = false
        //    插入
           mysqlConnect.query('insert into user set ?',{
               id:uuid1,
               name:name,
               state,state
           },(error,result)=>{
               if(error){
                   console.log('error',error)
                   throw error
               }else{
                   console.log('插入结果',result)
                //    查询  select * from user
                    mysqlConnect.query('select * from user',(error,result)=>{
                        if(error){
                            console.log('error',error)
                            throw error
                        }else{
                            console.log('查询结果',result)
                            // 数据库关闭
                            mysqlConnect.end((error)=>{
                                if(error){
                                    console.log('error',error)
                                }
                            })
                        }    
                    })
               }
           })
       }
})