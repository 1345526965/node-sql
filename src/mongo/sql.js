let mongoose = require('mongoose')
let url = 'mongodb://localhost:27017/mytest'
mongoose.connect(url,{userNewUrlParser:true,useUnifiedTopology:true},(error)=>{
       if(error){
           console.log(error)
           throw error
       }else{
           console.log('connection successful')
        //    内层模式
           const parentSchema = new mongoose.Schema(
               {
                   name:String,
                   age:Number,
                   address: String
               }
           )
        //  外层模式   
           const studentSchema = new mongoose.Schema(
            {
                name:String,
                age:Number,
                address: String,
                marries:Boolean,
                parents:parentSchema
            }
        )  
        mongoose.model('student',studentSchema)
        let Student = mongoose.model('student')
        // 插入的对象 
        let student = new Student({
            name:'zhangsan',
            age:24,
            address:'番禺',
            marries:false,
            parents:{
                name:'lisi',
                age:25,
                address:'番禺1',
            }

        })
        // 插入
        student.save((error)=>{
             if(error){
                 console.log(error)
             }else{
                 console.log('save successed')
                //  查询全部
                Student.find({},(error,data)=>{
                    if(error){
                        console.log(error)
                        throw error
                    }else{
                        console.log(data)
                        // 数据库关闭
                        // mongoose.connection.close()
                        // 删除数据库查询到的数据
                        data.forEach(item=>{
                            item.remove()
                        })
                    }
                })
             }
        })
       }

})