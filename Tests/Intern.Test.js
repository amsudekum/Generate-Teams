const Intern = require('../lib/intern');

test('gets University Namme', () => {
    const internUni = 'University';
    const intern = new Intern('Ashley', 29, 'amsudekum@gmail.com', internUni);

    expect(intern.university).toBe(internUni);
});

test('gets intern role', () => {
    const intern = new Intern('intern');

    expect(intern.getRole()).toBe('Intern');
})

