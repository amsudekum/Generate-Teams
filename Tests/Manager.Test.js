const manager = require('../lib/manager');

test('gets github username', () => {
    const managerOfficeNumber = 1;
    const manager = new manager('Ashley', 29, 1, managerOfficeNumber);

    expect(manager.managerOfficeNumber).toBe(managerOfficeNumber);
});

test('gets manager role', () => {
    const manager = new manager('manager');

    expect(manager.getROle()).toBe('manager');
});

