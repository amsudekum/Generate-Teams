const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');

const html = require('./src/htmlTemplate');
const teamMembers = [];

const managerInfo = () => {
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
        
        ]).then(managerData => {
        ({ name, id, email, officeNumber } = managerData);
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager)
        miscEmployees(); 
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

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamMembers.push(employee); 

        if (confirmAddEmployee) {
            miscEmployees(); 
        } else {
            const generatedHTML = htmlTemplate.generateTeamPage(teamMembers);
            writeHTMLToFile(generatedHTML);;
        }
    })
};
const writeHTMLToFile = generatedHTML => {
    fs.writeFile('team.html', generatedHTML, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('HTML file generated successfully!');
      }
    })
}
