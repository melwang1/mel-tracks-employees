const inquirer = require("inquirer");
const questions = [
    {
        type: "list",
        name: "text",
        message: "What would you like to do?",
        choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View all Roles', 'Add Role', "View all Departments", 'Add Department']
    },

    {
        type: "input",
        name: "text",
        message: "What is the name of the department?"
    },  
    
    {
            type: "list",
            name: "text",
            message: "What would you like to do?",
            choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View all Roles', 'Add Role', "View all Departments", 'Add Department']

    },

    {
        type: "input",
        name: "text",
        message: "What is the name of the role?"
    }, 

    {
        type: "input",
        name: "text",
        message: "What is the salery of the role?"
    }, 

    {
        type: "list",
        name: "text",
        message: "Which department does the role belong to?",
        choices: ['Engineering', 'Finance', 'Legal', 'Sale', 'Service']

    },

    {
    type: "list",
    name: "text",
    message: "What would you like to do?",
    choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View all Roles', 'Add Role', "View all Departments", 'Add Department']

    },

    {
        type: "input",
        name: "text",
        message: "What is the employee's first name?"
    }, 

    {
        type: "input",
        name: "text",
        message: "What is the employee's last name?"
    }, 

    {
        type: "list",
        name: "text",
        message: "What is the employee's role?",
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', "Accountant", 'Legal Team Lead', 'Lawyer', 'Customer Service']
    }, 

    {
        type: "list",
        name: "text",
        message: "What is the employee's manger?",
        choices: []
    }, 

]