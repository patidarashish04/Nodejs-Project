function Student(){
    this.name= "Ashish Kumar";
    this.age= 25;
    this.email = "ashish@gmail.com";
}


Student.prototype = {
    address: "Bangalore",
    getName: function(){
        return this.name
    }
}
var stu = new Student();
console.log(stu.address)