const Engineer = require('../lib/engineer');

test('gets github username', () => {
    const engineerGH = 'amsudekum';
    const engineer = new Engineer('Ashley', 29, 'amsudekum@gmail.com', engineerGH);

    expect(engineer.github).toBe(engineerGH);
});

test('gets engineer role', () => {
    const engineer = new Engineer('Engineer');

    expect(engineer.getRole()).toBe('Engineer');
})

