const fs = require('fs');
const inquirer = require ('inquirer');
//node

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require ('./lib/intern');
//employee pages



const teamMembers = [];

const mangerInfo = () => {
    //manager's information
    inquirer
        .prompt([
            {   
                type:'input',
                message: "What is the manager's name?",
                name: 'name',
            },
            {
                type: 'input', 
                message: "What is the manager's ID number?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the manager's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'officeNum',
            },
        
        ]).then(createManager => {
        const createManager = { name, id, email, officeNumber };
        const manager = new Manager (name, id, email, officeNumber);

        teamMembers.push(manager); 
    })
};

const miscEmployees = () => {
    //Info for the engineers and interns
    inquirer.prompt ([
        {
            type: 'list',
            message: "Are you entering an engineer or intern?",
            choices: ['Engineer', 'Intern'],
            name: 'role',
        },
        {
            type: 'input',
            message: "What's the name of your team member?", 
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the team member's ID number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the team member's email address?",
            name: 'email',
    
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};
