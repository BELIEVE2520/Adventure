var http=require("http")
var url=require("url")
console.log(url)
http.createServer((req,res)=>{
    if(req.url=="/abc"){
        return
    }
    var obj=url.parse(req.url,true).query
    console.log(obj.username)
    res.end()
}).listen(3000,function () {
    console.log("running")
  })