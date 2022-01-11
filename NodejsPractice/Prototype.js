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



function Bank(){
    this.accountNumber= 8734937;
    this.BankName= "SBIBank";
    this.amount= 10000;
}

Bank.prototype = {
    deposite:2000,
    getamount: function(){
        return this.amount
    }
}
let bank = new Bank();
console.log(bank.deposite)
console.log(bank.getamount())