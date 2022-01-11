//! To read files on the console...
const fs =  require("fs");
//console.log(fs)
fs.readFile(__dirname+ "/hello.txt", "utf8",(err ,data)=>{
   if(err) throw err;
   console.log(data);
});
 
//! To read files on the server...
const fs =  require("fs");
const http = require("http");
const server = http.createServer(function(req,res){
//console.log(fs)
fs.readFile(__dirname+ "/hello.txt", "utf8",(err ,data)=>{
   res.writeHead(200,{"content-type":"text/plain"})
   res.write(data);
   res.end();
   // if(err) throw err;
   // console.log(data);
});
}).listen(3000, ()=>console.log("server running..."))

//! to delete the file....
const fs =  require("fs");
fs.unlink(__dirname+ "/hello.txt",(err ,data)=>{
    if(err) throw err;
    console.log("File deleted successfully...."+ data);
});

