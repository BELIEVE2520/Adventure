var express=require('express')
var app=express()
// 路由中间件
var router=express.Router()
app.use(router)
// 验证码接口
router.get('/',(req,res)=>{
    res.send('router')
})
router.get('/code',(req,res)=>{
    var randomNum=function (min,max) {
        // 最大最小的随机数
        return Math.ceil(Math.random()*(max-min)+min)
      }
    var str='SDVBSJKBDV5654532'   //17位数     所以要随机0-16得数   str[16]  str[17]undifined
    var result=""
    for(var i=0;i<4;i++){
        // 长度比索引大1
        result+=str[randomNum(0,str.length-1)]
    }
    // res.send({'success':'请求成功',"data":result})
    res.jsonp({
        number:aaa,
    })
})
app.listen(3000,()=>{
    console.log('running')
})