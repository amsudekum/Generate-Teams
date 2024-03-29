const intern = require("../lib/intern")

const generateManager = function (manager) {
    return `
    <div class="mx-auto col-3 mt-3">
    <div class="card text-center border-dark" style="width: 18rem;">
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
    <div class="card text-center border-dark" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h4>Intern</h4>
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

const generateTeamCards= (data) =>{
    const teamCards = []; 
    for (let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole();

        if (role === 'Manager') {
            const manager = generateManager(employee);
            teamCards.push(manager)
        }

        if (role === 'Engineer') {
            const engineer = generateEngineer(employee);
            teamCards.push(engineer)
        }

        if (role === 'intern') {
            const manager = generateIntern(employee);
            teamCards.push(intern)
        }
    }
    return teamCards.join('');
}

// const teamData = [];
// const teamCards = generateTeamCards(teamData);
// const generatedTeam = generatedTeamPage(teamCards);
// console.log(generatedTeam)

function generateTeamPage(teamCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generate Your Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
      <h1 class="navbar-brand mx-auto h1 w-100 text-center font-weight-bold">Team Profiles</h1>
          </nav>
      </header>
      <main>
          <div class="card-deck">
              <div class="card text-center border-dark" style="width: 18rem;">
                  ${teamCards}
              </div>
          </div>
      </main>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>        
  </body>
`
}

