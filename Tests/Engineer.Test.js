const engineer = require('../lib/Employee');

test('gets github username', () => {
    const engineerGH = 'amsudekum';
    const engineer = new Engineer('Ashley', 29, 'amsudekum@gmail.com', engineerGH);

    expect(engineer.engineerGH).toBe(engineerGH);
});

test('gets engineer role', () => {
    const engineer = new Engineer('Engineer');

    expect(engineer.getROle()).toBe('Engineer');
})