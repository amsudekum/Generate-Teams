const engineer = require('../lib/Engineer');

test('gets github username', () => {
    const engineerGH = 'amsudekum';
    const engineer = new Engineer('Ashley', 29, 'amsudekum@gmail.com', engineerGH);

    expect(engineer.engineerGH).toBe(engineerGH);
});