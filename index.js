const inquirer = require("inquirer");
const db = require("./dbserver");

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

db.connect(function (err) {
    if (err) {
        console.log("Error in connecting to db", err)
        process.exit(1)
    }
    init()
})

//initialize
function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View all Roles', 'Add Role', "View all Departments", 'Add Department',
                "End Program"]
        },
    ])
        .then(function (questions) {
            switch (questions.action) {
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
                case "Add Role":
                    addRole();
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
const viewAllDepartments = () => {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) {
            throw err;
        }
        console.table(results);
        init()
    })
}

//view all roles
const viewAllRoles = () => {
    db.query('SELECT * FROM role', (err, results) => {
        if (err) {
            throw err;
        }
        console.table(results);
        init()
    })
}

const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            throw err;
        }
        console.table(results);
        init()
    })
}






function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "departmentName",
        message: "What is the name of the department?"
    }]
    ).then(function (answer) {
        db.query("INSERT INTO department (name) VALUES (?);", answer.departmentName, function (err, result) {
            if (err) throw err;
            console.log(result);
            init()
        })
    })
}

function addRole() {
    console.log("Add new roles to Department")
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of the role?"
        },
    
        {
            type: "input",
            name: "salary",
            message: "What is the salery of the role?"
        },
    
        {
            type: "list",
            name: "department",
            message: "Which department does the role belong to?",
            choices: [{name:"Sales",value:1},{name:"Engineering",value:2}]
    
        },
    ]
    ).then(function (answer) {
        db.query("INSERT INTO role (title, salary, department_id) VALUES(?,?,?);", [answer.title,answer.salary,answer.department], function (err, result) {
            if (err) throw err;
            console.log(result);
            init()
        })
    })
}

function addEmployee() {
    console.log("Add new roles to Department")
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is your first name ?"
        },
    
        {
            type: "input",
            name: "last_name",
            message: "What is your last name?"
        },
    
        {
            type: "list",
            name: "role_id",
            message: "What is the name of the role?",
            choices: [{name:"Sales Associate",value:1},{name:"Sales Manager",value:2}]
    
        },

        {
            type: "list",
            name: "manager_id",
            message: "What is the name of the manager?",
            choices: [{name:"Anna Foster",value:3},{name:"Christian Bell",value:5}]
    
        },
    ]
    ).then(function (answer) {
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?);", [answer.first_name,answer.last_name,answer.role_id, answer.manager_id], function (err, result) {
            if (err) throw err;
            console.log(result);
            init()
        })
    })
}
