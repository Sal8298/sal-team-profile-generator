const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
                //writeFile stuff
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
    }]
        .then(answer => {
            const engineer = new Engineer(answer.Name, answer.Id, answer.Email, answer.OfficeNumber, answer.Github)
            allEmployees.push(engineer);
            initialPrompts();
        })
    )
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

initialPrompts();