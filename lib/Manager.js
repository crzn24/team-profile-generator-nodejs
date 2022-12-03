// Import parent class of Employee
const Employee = require("./Employee");

// Creates Manager class that extends Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }  
    
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return 'Manager'; //overrides to Manager
    }

}
   
module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()-overridden to return 'Manager'