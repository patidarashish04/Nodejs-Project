var Addition = ()=>{
    console.log("This is to add")
}
module.exports.add= Addition;

var a = 23;
var Gender = "Male"
//! global level export is not working....
 module.exports.value1 = a;
 module.exports.gender = Gender;

 //! local level is working...
 module.exports = {
    Addition: ()=>{
         console.log("This is to addition")
         var salary = 10000;
         console.log(salary)
     },
     value:29,
     Name: "Ashish Kumar Patidar",
     Subtration:()=>{
         console.log("This is for Subtration")
     }
     
 }

 // TODO: prototyoe Example
function Office(){
    this.company ="appscrip"
    this.salary =430000;
}

Office.prototype = {
    designation:"nodejs developer"
}
 var working = new Office();
 console.log(working.designation)
