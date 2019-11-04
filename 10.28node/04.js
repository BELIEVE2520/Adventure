var http=require("http")
var url=require("url")
// console.log(url)
http.createServer((req,res)=>{
//    url.parse().query可以处理get请求
res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var obj=url.parse(req.url,true).query
    res.end("接受的是:"+obj.username)
}).listen(3000,function () {
    console.log("running")
  })