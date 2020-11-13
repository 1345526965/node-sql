class UserServer{
    username = 123;
    login(username,passsword){
           console.log('----登陆-----',username,passsword)
           return true
    }
}
module.exports = new UserServer()