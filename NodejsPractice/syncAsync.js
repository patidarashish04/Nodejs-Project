//! Async function in file system 
// const fs =  require("fs");
// fs.readFile(__dirname+ "/hello.txt", "utf8",(err ,data)=>{
//    console.log(data);
// });

// console.log("Data read First...")

//! Sync function in file system
const fs =  require("fs");
try{
const data =  fs.readFileSync(__dirname+ "/hello.txt", "utf8")
    console.log(data);
}
catch(e){
console.log(e)
}

console.log("Data read First...")