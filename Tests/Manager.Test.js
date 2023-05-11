const Manager = require('../lib/manager');

test('gets officenumber', () => {
    const managerOfficeNumber = 1;
    const manager = new Manager('Ashley', 29, 1, managerOfficeNumber);

    expect(manager.officeNum).toBe(managerOfficeNumber);
});

test('gets manager role', () => {
    const manager = new Manager('Ashley', 29, 1, 1);

    expect(manager.getRole()).toBe('Manager');
});

