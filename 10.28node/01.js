// 初识服务器
// node  模块
// 加载http模块
var http=require("http")
// 创建服务器
http.createServer(function (req,res) {
    // req  请求  res 响应
 // 中文 需要设置请求响应头
    // content-type 文本类型  text/html text/plain 
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    res.end("你好 世界 hello")
   
    // 结束响应 响应给客户端
  }).listen(3000,function(){
    console.log("running")
  })