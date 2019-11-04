var http=require("http")
var url=require("url")
// console.log(url)
http.createServer((req,res)=>{
//    url.parse().query可以处理get请求
res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
// var result="http://localhost:3000?username=haha&password=jj"
    // var obj=url.parse(result,true)
    // console.log(obj)
   var obj=url.format({
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'localhost:3000',
        port: '3000',
        hostname: 'localhost',
        hash: null,
        search: '?username=haha&password=jj',
        query:'username=haha&password=jj' ,
        pathname: '/',
        path: '/?username=haha&password=jj',
        href: 'http://localhost:3000/?username=haha&password=jj' })
        console.log(obj)
        res.end()
    // var obj=url.parse(result,true)
    // url.parse 转为对象  url.format  转为字符串  url.resolve  解析成正确的路径
}).listen(3000,function () {
    console.log("running")
  })