
// const http=require("http")
// http.createServer((req,res)=>{
//      response.end("hello node js")
//     console.log(req.method);
// }).listen(5000,(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log("server is running on port 5000");
//     }
// })


// const http=require("http")
// http.createServer((req,res)=>{
//     // response.end("hello node js")
//     console.log(req.method);
// }).listen(5000,(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log("server is running on port 5000");
//     }
// })


// const http=require("http")
// http.createServer((req,res)=>{
//     // response.end("hello node js")
//     console.log(req.headers);
// }).listen(5000,(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log("server is running on port 5000");
//     }
// })



// const http=require("http")
// http.createServer((req,res)=>{
//     // response.end("hello node js")
//     console.log(req.url);
// }).listen(5000,(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log("server is running on port 5000");
//     }
// })


// const http=require("http")
// http.createServer((req,res)=>{
//     if (req.url==='/'||req.url==="/home") {
//         res.end("this is home")
//     }
//     else{
//         res.end("this page doesnot exist")
//     }
// }).listen(5000,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("server is running on port 5000");
//     }
// })


// const http=require("http")
// http.createServer((req,res)=>{
//     if(req.url==='/'||req.url==="/home"){
//         res.end("this is home")
//     }
//     else if(req.url==="/page")
//     {
//         res.end("some page")
//     }
//      else
//      {
//         res.end("this page does not exits")
//     }
// }).listen(5000,(err)=>{
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("server is running on port 5000");
//     }
// })



// const http=require("http")
// const fs=require("fs")
// http.createServer((req, res)=>{
//     if(req.url==='/'|| req.url==="/home page"){
//         let html=fs.readFileSync('index.html','utf-8')
//         res.end(html)
//     }
//     else{
//         res.end("not found")
//     }
// }).listen(5000,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("server is running on port");
//     }
// })


// const http=require("http")
// const fs=require("fs")
// http.createServer((req, res)=>{
//     if(req.url==='/'|| req.url==="/home page"){
//         let html=fs.readFileSync('index.html','utf-8')
//         res.end(html)
//     }
//     else{
//         let html=fs.readFileSync('pnf.html','utf-8')
//         res.end(html)
//     }
// }).listen(5000,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("server is running on port");
//     }
// })


// const http=require("http")
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'|| req.url==='/home'){
//         res.writeHead(200,"okay",{"content-type":"text/html"})
//         res.end("<h1>malashree</h1>")
//     }
//     else{
//         res.writeHead(404,"not found",{"content-type":"text/html"})
//         res.end("<h1>page not found</h1>")
//     }
// }).listen(5000,(err)=>{
//     if(err)console.log(err);
//     console.log("server is running on port 5000");
// })

// const http=require("http")
// const server=http.createServer((req,res)=>{
//     let employee={
//         firstname:"pooja",
//         secondname:"mala"
//     }
//     res.writeHead(200,"okay",{"content-type":"application/json"})
//     res.end(JSON.stringify(employee))
// })
// server.listen(5000,(err)=>{
//     if(err)console.log(err);
//     console.log("server is running on port 5000");
// })



// const http=require("http")
// const fs=require("fs")
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'||req.url==='/home'){
//         res.writeHead(200,"okay",{"content-type":"text/html"})
//         let readStream=fs.createReadStream("index.html",'utf-8')
//         readStream.pipe(res)
//     }
//     else if(req.url==="/css")
//     {
//      res.writeHead(200,"okay",{"content-type":"text/css"})
//        let readStream=fs.createReadStream("style.css",'utf8')
//        readStream.pipe(res)
//     }
//     else{
//     res.writeHead(404,"not okay",{"content-type":"text/html"})    
//     let readStream=fs.createReadStream("pnf.html",'utf-8')
//     readStream.pipe(res)
//     }
// })
// server.listen(5000,(err)=>{
//     if(err)console.log(err);
//     console.log("server is running on port 5000");
// })


// const http=require("http")
// const server=http.createServer((req,res)=>{
//     let employees=[
//         {
//         empname:"pooja",
//         empid:1,
//         esal:4000
//         },
//         {
//         empname:"mala",
//         empid:1,
//         esal:4000
//         },
//         {
//         empname:"vijayalaxmi",
//         empid:1,
//         esal:4000
//         }
//     ]
//     res.writeHead(200,"ok",{"content-type":"application/json",
//     //  'Access-Control-Allow-Origin':"*"})
//     'Access-Control-Allow-Origin':"http://127.0.0.1:5500"})
//      res.end(JSON.stringify(employees))
//    })
//      server.listen(5000,(err)=>{
//       if(err)console.log(err);
//     console.log("server is running on port 5000");
// })


const http=require("http")
const fs=require("fs")
const {parse}=require("querystring")


const server=http.createServer((req,res)=>{
    if(req.method==="POST"){
        if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
let body=""
req.on("data",(chunk)=>{
    body+=chunk
})
req.on("end",()=>{
    // console.log(body);
    // res.end(body)
    let finalbody=parse(body)
    res.end(JSON.stringify(finalbody))
})
}
else{
    res.end(null)
}
    }
    else{
        if(req.url==='/'|| req.url==='/home'){
            res.writeHead(200,"ok",{"content-type":"text/html"})
            let html=fs.createReadStream("index.html","utf8")
            html.pipe(res)
        }
        else{
            res.writeHead(404,"not found",{"content-type":"text/html"}) 
            res.end("<h1>OPPS!!! this page is not found</h1>")
        }
    }

    
})
server.listen(5000,(err)=>{
    if(err)console.log(err);
    console.log("server is running on port 5000");
})