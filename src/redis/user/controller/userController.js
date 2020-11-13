/*
Controller层   接收request  响应response
*/
const userServer = require('../servide/userServer')
const uuid = require('uuid')
class UserController{
    // 根据userSessionId设置redis的value
    async userLogin(username,password){
        const userId = username
        const userSessionId = uuid.v1();
        await userServer.stoteUserId(userSessionId,userId)
    } 
    // 用户登出操作
    async userLogout(userSessionId){
        
        await userServer.removeUserSessionByUserSessionId(userSessionId)
    } 
    // 用户其他操作
    async userOtherOperation(userSessionId){
        // 获取redis中的value
        const userId = await userServer.getUserIdFromUserSessionByUserSessionId(userSessionId)
        console.log('userId from UserController:'+userId)
        // 当用户操作时，将有效时间设置为30分钟
        await userServer.resetUserSessionExpirationTime(userSessionId)

    }  

}
module.exports = new UserController()