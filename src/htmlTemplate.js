const intern = require("../lib/intern")

const generateManager = function (manager) {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h4>Manager</h4>
        <p class="card-text">ID: ${manager.id}</p>
        <p class="card-text">Email: ${manager.email}</p>
        <p class="card-text">Office Number: ${manager.officeNum}</p>
    </div>
</div>
    `
}

const generateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h4>Manager</h4>
        <p class="card-text">ID: ${engineer.id}</p>
        <p class="card-text">Email: ${engineer.email}</p>
        <p class="card-text">Github: ${engineer.github}</p>
    </div>
</div>
    `
}

const generateIntern = function (intern) {
    return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h4>Manager</h4>
        <p class="card-text">ID: ${intern.id}</p>
        <p class="card-text">Email: ${intern.email}</p>
        <p class="card-text">University: ${intern.university}</p>
    </div>
</div>
    `
}

generateTeamCards= (data) =>{
    teamCards = []; 
    for (let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole();
    }

    if ( role === 'Manager') {
        const manager = generateManager(employee);
        teamCards.push(manager)
    }

    if ( role === 'Engineer') {
        const engineer = generateEngineer(employee);
        teamCards.push(engineer)
    }

    if ( role === 'intern') {
        const manager = generateIntern(employee);
        teamCards.push(intern)
    }
}
 

