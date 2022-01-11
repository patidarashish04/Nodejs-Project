const http = require("http");
const server = http.createServer(function(req,res){
res.writeHead(200,{"content-type":"text/plain"})
    res.write("Node js Learning");
    res.write("My name is Ashish kumar patidar");
res.end();
}).listen(3000, ()=>console.log("server running..."))