const Employee = require('../lib/employee');

class engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github; 
    }

    getGitHub () {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }
}

module.exports = engineer; 