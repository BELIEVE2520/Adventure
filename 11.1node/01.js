var express=require('express')
var path=require('path')
var app=express()

// 静态资源中间件  express.static  中间件必须通过use去使用 这样才能和
// var static=path.resolve(__dirname,"public")
// console.log(static)
// app.use(express.static(static))
app.use(express.static('./public'))
// 直接访问写死的路径
app.get('/',async(req,res)=>{
    res.send('搭建成功')
}).listen(3000,()=>{
    console.log('running')
})