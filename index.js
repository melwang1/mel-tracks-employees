const inquirer = require("inquirer");
const questions = [

    //initialize
    function init () {
        inquirer.prompt ([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View all Roles', 'Add Role', "View all Departments", 'Add Department']
            }, 
        ])
            .then(function(questions) {
                switch(questions.action) {
                    case "View all Employees":
                        viewAllEmployees();
                        break;
                    case "Add Employee":
                        addEmployee();
                        break;
                    case "Update Employee Role":
                        updateEmployeeRole();
                        break;
                    case "View all Roles":
                        viewAllRoles();
                        break; 
                    case "Add Roles":
                        addRoles();
                        break;
                    case "View all Departments":
                        viewAllDepartments();
                        break; 
                    case "Add Department":
                        addDepartment();
                        break;
                    case "End Program":
                        db.end();
                        break;                         
                }

            });
    }
    
    //view all departments
    // app.get('/', (req, res) => {
    //     db.query('SELECT * FROM department', (err, results) => {
    //         if (err) {
    //             return res.status(500).send(err);
    //         }
    //         return res.json(results);
    //     })
    // });

    //view all roles
    // app.get('/', (req, res) => {
    //     db.query('SELECT role.id AS "Role Type", role.title AS "Job Title", role.salary AS "Salary", department.name AS Department FROM ')
    // })
function addDepartment() {
    inquirer.prompt({
        type: "input",
        name: "departmentName",
        message: "What is the name of the department?"
    }, 
)}
.then(function(answer))

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