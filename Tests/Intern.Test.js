const intern = require('../lib/intern');

test('gets github username', () => {
    const internGH = 'amsudekum';
    const intern = new intern('Ashley', 29, 'amsudekum@gmail.com', internGH);

    expect(intern.internGH).toBe(internGH);
});

test('gets intern role', () => {
    const intern = new intern('intern');

    expect(intern.getRole()).toBe('intern');
})

