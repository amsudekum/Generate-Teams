const fs = require('fs');
const inquirer = require ('inquirer');
//node

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require ('./lib/intern');
//employee pages

const createHTML = require ('./src/creatHTML');
// the created page 

const teamMemebers = [];

const createEmployeeCard = ({name, id, email, officeNum, github, school}) => {
    // create a new card element
    if (officeNum) {
        // update the card with the office number
    }
    if (github) {

    }
    if (school) {

    }
    // $("#nametag").text(name);
    console.log(name);
}

const mangerInfo = () => {
    inquirer
        .prompt([
            {   
                type:'input',
                message: "What is the employee's name?",
                name: 'name',
            },
            {
                type: 'input', 
                message: "What is the employee's ID number?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the employee's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'officeNum',
            },
            {
                type: 'input',
                message: "What is the engineer's GitHub username?",
                name: 'github',
            }, 
            {
                type: 'input',
                message: "Where does the intern go to school?",
                name: 'school',
            }
        ]).then((data) => {
            createEmployeeCard(data);
        });
};

const engineerInfo = () => {

};
const internInfo = () => {

};
