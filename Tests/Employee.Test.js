const Employee = require('../lib/employee'); 

//employee object
test('will add the employee info', () => {
    const employeeInfo = new Employee ('Ashley', 29, 'amsudekum@gmail.com');

    expect(employeeInfo.name).toBe(expect.any(string));
    expect(employeeInfo.id).toBe(expect.any(number));
    expect(employeeInfo.email).toBe(expect.any(string));
});

test('gets name', () => {
    const employeeName = 'Ashley';
    const employee = new Employee(employeeName);

    expect(employee.employeeName).toBe(employeeName);
});

test('gets id', () => {
    const employeeID = 29;
    const employee = new Employee(employeeID);

    expect(employee.employeeID).toBe(employeeID);
});

test('gets email', () => {
    const employeeEmail = 'amsudekum@gmail.com';
    const employee = new Employee(employeeEmail); 

    expect(employee.employeeEmail).toBe(employeeEmail);
});

test('gets the employee role', () => {
    const role = 'intern';
    const employee = new Employee('Ashley', 29, 'amsudekum@gmail.com');
    
    expect(employee.getRole()).toBe(role);
});