const Employee = require('../lib/employee');
class manager extends Employee {
    constructor(name, id, email, officeNum) {
        super (name, id, email)
        this.officeNum = officeNum;
    }

    getRole () {
        return 'Manager';
    }
}

module.exports = manager
