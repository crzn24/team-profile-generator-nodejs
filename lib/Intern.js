// Import parent class of Employee
const Employee = require("./Employee");

// Creates Intern class that extends Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'; //overrides to Intern
    }

}

module.exports = Intern;

// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()-overridden to return 'Intern'