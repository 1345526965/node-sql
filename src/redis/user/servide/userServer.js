/*
（services）层   处理业务逻辑 实现M到C层的耦合封装
*/
const userRedisDao  = require('../db/ioredis/userRedisDao')
class userServer{
    // 设置redis的userId
    async stoteUserId(userSessionId,userId){
        await userRedisDao.storeUserId(userSessionId,userId)
    }
    // 根据userSessionId获取redis的value
    async getUserIdFromUserSessionByUserSessionId(userSessionId){
          return userRedisDao.getUserIdFromUserSessionByUserSeesionId(userSessionId)
    }
    // 重新设置redis的有效时间
    async resetUserSessionExpirationTime(userSessionId){
        await userRedisDao.resetUserSessionExpirationTime(userSessionId)
    }
    // 删除redis的
    async removeUserSessionByUserSessionId(userSessionId){
         await userRedisDao.removeUserSessionByUserSessionId(userSessionId)
    }
}
module.exports = new userServer()