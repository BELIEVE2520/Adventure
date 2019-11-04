var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("hello world")
    }
    else if(req.url=="/b"){
        fs.readFile("./bar.html",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
            res.end(data)

        })
    }
    else if(req.url=="/foo"){
        fs.readFile("./foo.html",(err,data)=>{
            res.end(data)
        })
    }
}).listen(3000,()=>{
    console.log("running")
})