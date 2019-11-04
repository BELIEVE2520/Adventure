var express=require('express')
var app=express()
var art=require('express-art-template')
// 设置模板引擎
// app.set('view engine','html')  错误
app.engine("html",art)
app.get('/',(req,res)=>{
    var list=['tom','jack','rose']
    res.render('04.html',{a:list})
}).listen(3000,()=>{
    console.log('running')
})