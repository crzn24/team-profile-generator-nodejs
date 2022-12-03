// Dependencies
const inquirer = require('inquirer');
const fs = require("fs");
const jest = require('jest');

// Constructors 
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// to render html page
const render = require('./src/html-template');

// empty array for team members
const teamArray = [];




function initApp() {

    // add a manager when starting up
    function addManager() {
        console.log("Let's put together a team!");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the team manager's name."
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid ID for the manager.";
                }  
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email address for the manager.";
                }  
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an office number.";
                }  
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            addTeamMember();
        });
    }



    // add additional team members to the team
    function addTeamMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I'm done adding team members."
                ]
            },
        ]).then(userChoice => {
            switch(userChoice.teamChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default: 
                    generateHTML();

            }
        });
    }


    // function to add engineer if chosen








    // function to add intern if chosen








    // function to generate HTML page
    function generateHTML() {

    }











    

    addManager();

}








initApp();