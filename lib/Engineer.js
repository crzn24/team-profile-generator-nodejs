// Import parent class of Employee
const Employee = require("./Employee");

// Creates Engineer class that extends Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'; //overrides to Engineer
    }

}

module.exports = Engineer;

// In addition to Employee's properties and methods, Engineer will also have the following:
// github-GitHub username
// getGithub()
// getRole()-overridden to return 'Engineer'