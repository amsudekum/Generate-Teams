const Employee = require('../lib/employee'); 

//employee object
test('will add the employee info', () => {
    const employeeInfo = new Employee ('Ashley', 29, 'amsudekum@gmail.com');

    expect(employeeInfo.name).toBe('Ashley');
    expect(employeeInfo.id).toBe(29);
    expect(employeeInfo.email).toBe('amsudekum@gmail.com');
});

test('gets name', () => {
    const employeeName = 'Ashley';
    const employee = new Employee(employeeName);

    expect(employee.name).toBe(employeeName);
});

test('gets id', () => {
    const employeeID = 29;
    const employee = new Employee('Ashley', employeeID, 'amsudekum@gmail.com');

    expect(employee.id).toBe(employeeID);
});

test('gets email', () => {
    const employeeEmail = 'amsudekum@gmail.com';
    const employee = new Employee('Ashley', 29,employeeEmail); 

    expect(employee.email).toBe(employeeEmail);
});

test('gets the employee role', () => {
    const role = 'intern';
    const employee = new Employee('Ashley', 29, 'amsudekum@gmail.com');
    
    expect(employee.getRole()).toBe('Employee');
});