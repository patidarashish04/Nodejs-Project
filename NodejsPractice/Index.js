
// //! Variable define
// console.log("Hello World")
// const a = 10;
//  const b = 19;
//   c = a+b;
// console.log("Sum of a and b is = " +c)

// //! Object

//  var Users= { Name: "Ashish Kumar", Age: 25, Email:"patidarashish04@gmail.com"}
//  console.log("My name is "+ Users.Name, " ," + "And My Age is " + Users.Age)

// //! anonymous Functions

// var Person = ()=> {
//     console.log("This is anonymous function")
// }
// Person();

// //! Function 
// function add(){
//     const a = 10;
//     const b = 5;
//      c = a+b;
//     console.log(c)
// }
// add();
// let name = "Ashish Kumar Patidar";
// module.exports.abs= name;

// //! Arrow Fuction
// var User = (a,b)=>{
// const c = a+b;
// console.log("addition of a and b is "+ c)
// }
// User(2,7)

// console.log(__dirname)
// console.log(__filename)

//! Class, Object and constructor
class Users{
    constructor(name, age){
        this.Name = name
        this.Age = age

    }
    getName(){
        this.email="ashish@apscripp.com"
        return this.Name;
    }

    getAge(){
        return this.Age;
    }

    getemail(){
        return this.email;
    }
} 

var user =  new Users("ashish Patidar",26)
console.log(user.getName());
console.log(user.getemail())
console.log(user.getAge())
