var express=require('express')
var app=express()
var ejs=require('ejs')

// 在express里面设置模板引擎
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    var list=['tom','jack','rose']
    res.render('03.ejs',{a:list})
})
app.listen(3000,()=>{
    console.log('running')
})