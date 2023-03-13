const Employee = require("./Employee");

class Manager extends Employee {
    constructor(Name, ID, Email, OfficeNumber){
        super(Name, ID, Email);
        this.OfficeNumber = OfficeNumber;
    }

    getOfficeNumber(){
        return this.OfficeNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;