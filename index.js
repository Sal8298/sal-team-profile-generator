const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const { generateManager, generateEngineer, generateIntern } = require('./src/generateTeamProfilePage');
const Employee = require('./lib/Employee');

const allEmployees = [];

function initialPrompts() {
    inquirer.prompt({
        type: 'list',
        message: 'What type of employee will you be adding?',
        name: 'selectEmployeeType',
        choices: ['Engineer', 'Manager', 'Intern', 'Done'],
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'You must choose one of the choices to continue.'
            }
        }
    })
        .then((answer) => {
            if (answer.selectEmployeeType === 'Engineer') {
                addEngineer();
            }
            if (answer.selectEmployeeType === 'Manager') {
                addManager();
            }
            if (answer.selectEmployeeType === 'Intern') {
                addIntern();
            }
            if (answer.selectEmployeeType === 'Done') {
                writeFile(allEmployees);
            }
        });
}

function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: 'Enter Engineer Name',
        name: 'Name',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'You must input a valid name to continue.'
            }
        }
    },

    {
        type: 'input',
        message: 'Enter Engineer ID',
        name: 'Id',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'You must input a valid ID to continue.'
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Engineer email address',
        name: 'Email',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'You must input a valid Email Address to continue.'
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Engineer Office Number',
        name: 'OfficeNumber',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'You must input a valid Office Number to continue.'
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Engineer Github Username',
        name: 'Github',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'You must input a valid Github Username to continue.'
            }
        }
    }])
        .then(answer => {
            const engineer = new Engineer(answer.Name, answer.Id, answer.Email, answer.OfficeNumber, answer.Github)
            allEmployees.push(engineer);
            initialPrompts();
        })
};

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Manager Name',
            name: 'Name',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'You must input a valid Manager Name to continue.'
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Manager ID',
            name: 'Id',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'You must input a valid Manager ID to continue.'
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Manager Email Address',
            name: 'Email',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'You must input a valid Manager Email Address to continue.'
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Manager Office Number',
            name: 'OfficeNumber',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'You must input a valid Manager Office Number to continue.'
                }
            }
        },
    ])
        .then(answer => {
            const manager = new Manager(answer.Name, answer.Id, answer.Email, answer.OfficeNumber)
            allEmployees.push(manager);
            initialPrompts();
        })
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Intern Name',
            name: 'Name',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'You must input a valid Intern Name to continue.'
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Intern ID',
            name: 'Id',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'You must input a valid Intern ID to continue.'
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Intern Email Address',
            name: 'Email',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'You must input a valid Intern Email Address to continue.'
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Intern School',
            name: 'School',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'You must input a valid Intern School to continue.'
                }
            }
        },
    ])
        .then(answer => {
            const intern = new Intern(answer.Name, answer.Id, answer.Email, answer.School)
            allEmployees.push(intern);
            initialPrompts();
        })
}



const generateHtml = employees => {
    const teamHtml = []
    const htmlHead = `<!DOCTYPE html>                                             
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <style>
        
        * {
        background-color: aliceblue;
        margin: 0px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    .body {
        border: 3px solid black;
        padding: 7px;
        margin: 50px 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    
    .card {
        border: 5px solid black;
        padding: 10px;
        background-color: aquamarine;
        
    }
    
    .card-head {
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: xx-large;
        background-color: aquamarine;
    }
    
    .card-main {
        padding: 2px;
        background-color: aquamarine;
    }
    
    .body-text {
        font-size: larger;
        background-color: aquamarine;
    }
    
    a {
        background-color: aquamarine;
    }
        </style>
    </head>
    <body>
            <div>
                <h1>The Team</h1>
            </div>
            <div class="body">`;
    teamHtml.push(htmlHead)
    const managers = employees.filter(employee => employee.constructor.name === 'Manager')
    const engineers = employees.filter(employee => employee.constructor.name === 'Engineer')
    const interns = employees.filter(employee => employee.constructor.name === 'Intern')
    for (let index = 0; index < managers.length; index++) {
        if (managers) {
            teamHtml.push(generateManager(managers[index]))
        }
    }

    for (let index = 0; index < engineers.length; index++) {
        if (engineers) {
            teamHtml.push(generateEngineer(engineers[index]))
        }
    }

    for (let index = 0; index < interns.length; index++) {
        if (interns) {
            teamHtml.push(generateIntern(interns[index]))
        }
    }
    const htmlFoot = `
    </div>
    </body>
    </html>`
    teamHtml.push(htmlFoot);
    return teamHtml.join('');

}

const writeFile = employees => {
    const gen = generateHtml(employees);
    console.log(gen)
    fs.writeFileSync('./dist/index.html', generateHtml(employees), 'utf-8')
};

initialPrompts();
