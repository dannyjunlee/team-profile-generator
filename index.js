const Employee = require('./lib/Employee');
const {prompt} = require('inquirer');

prompt([
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email",
    },
    {
        type: "list",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
    }
])
.then(console.log(answers));