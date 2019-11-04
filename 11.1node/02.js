var express=require('express')

var path=require('path')
// cookie中间件
var cookieParser=require('cookie-parser')
var app=express()
// 建立联系 cookie express
app.use(cookieParser())
console.log(cookieParser)
var static=path.resolve(__dirname,"public")
app.use(express.static(static))
app.get('/',(req,res)=>{
    res.send({"data":"login中的cookie为"+req.cookies})
})
// 设置  setcookie
app.get('/login',(req,res)=>{
  var obj=req.query.username
  //   req.cookies.cookiename=obj
// 设置cookie  maxage  过期时长  httpOnly  只允许在服务端修改cookie的值
// signed  是否生成签名  domain 域名
res.cookie('username',obj,{maxAge:9000,httpOnly:true})
  res.send({"data":obj})


})
// 获取getcookie
app.get("/list",(req,res)=>{
    console.log(req.cookies.username)
  
})
app.listen(3000,()=>{
    console.log('running')
})
/**
 * 什么是cookie
 * cookie是存在于访问者计算机中的一个变量，便于访问统同一域名或服务器存储的用户信息
 * cookie的优缺点
 * 优点
 * 1.协助服务点承载压力
 * 2.存在过期时间，不便于攻击者进行攻击
 * 缺点
 * 1.长度限制
 * 2.安全性相对差
 * 3.存储量小
 * cookie的存储大  4kb
 * cookie的安全性
 * 如何解决  生成签名
 * cookie的特点
 * cookie保存在浏览器本地   默认不加密，用户直接看到 支持被删除  便于用于攻击，易被篡改
 * 
 * 
 * 
 * session和cookie和localstorage和sessionstorage的区别
 * session的数据持久化  案例 购物车
 * express
 * 
 * */ 