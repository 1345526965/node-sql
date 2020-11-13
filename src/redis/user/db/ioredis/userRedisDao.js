/*
model层：sql语句+data  执行数据库操作 
*/
const Redis = require('ioredis')
// redis中的key 
const redisKeyPrefix = 'myRedis:info:user'
class UserRedisDao{
    // 初始化redis
    getRedisConnection(){
        return new Redis({
            host:'localhost',
            port:6379
        })
    }
    // 根据sessionId设置redis的value
    async storeUserId(userSessionId,userId){
       const redis = this.getRedisConnection()
       redis.set(redisKeyPrefix+userSessionId,userId,'ex',1800,(error,result)=>{
           redis.quit()
       })
    }
    // 根据sessionId获取redis的value
    async getUserIdFromUserSessionByUserSeesionId(userSessionId){
        const redis = this.getRedisConnection()
        return redis.get(redisKeyPrefix+userSessionId,(error,userId)=>{
            console.log('------userId-------',userId)
            redis.quit()
            return userId
        })
     }
    //  重新设置sessionId的有效时间
    async resetUserSessionExpirationTime(userSessionId){
           const redis = this.getRedisConnection()
           redis.expire(redisKeyPrefix+userSessionId,1800,(error,result)=>{
               redis.quit()
           })
    }
    // 根据sessionId获取redis的value(删除sessionId)
    async removeUserSessionByUserSessionId(userSessionId){
           const redis = this.getRedisConnection()
           redis.del(redisKeyPrefix+userSessionId,(error,result)=>{
               redis.quit();
           })
    }
    

}
module.exports = new UserRedisDao()