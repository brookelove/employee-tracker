/* PSEUDOCODE 
1. prompt user for all of the options that they want to use 
    A. view all departments, VA employees, add a department, add a role, add an employee, update an employee role
        I. using inquirer for promts need to npm it 
2. Choose all deparmemnts
    A.shows table of all department name and IDS
        I. using SQL [show table]
        II. needs to use soemething to format it into a readable table 
3. Choose all employees 
    A. show employee data 
        a.show employee id, first and lnst name department job title, salaries, and managers  
4. Add a department
    A. enter name of department and it is added to that database
5. Add a role
    A. job title name, department, and salary
6. Add an employee 
    A. first and last name, role, manager and that manager is added to the database
7. Update employee 
    A.select employee to update and their new role and this info is updated 
*/
// WHERE ALL PROMPTS LIVE
const inquirer = require ("inquirer");
const db = require ("./db");
// connect to the database 

const mainmenu = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'selection',
            message: 'What would you like to do?',
            choices: ["View all Departments", "View All Employees", "View All Roles","Add a Department", "Add a Route", "Add an Employee","Update an Employee Role", "QUIT"]
        }
    ]).then (ans => {
        switch (ans.selection) {
            case 'View all Departments':
                // need to figure out how to properly connect the database to the cases
                viewDepartments();
                // db.departments();
                // mainmenu();
                break;
            case 'View All Employees':
                db.employees();
                mainmenu();
                break;
            case 'View All Employees':
                db.role();
                mainmenu();
                break;
            case 'Add a Department':
                db.addDepartment();
                mainmenu()
                break;
            case 'Add a Role':
                db.addRole();
                mainmenu();
                break;
            case 'Add an Employee':
                db.addEmployee();
                mainmenu();
                break;
            case 'Update an Employee Role':
                db.updateEmployee()
                mainmenu();
                break;
            default: 
                console.log('See you next time!');
                break;
        }
    })
}
// function needs to be called in order to start
mainmenu();

const addDepartment = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'department_name',
            message: 'What is the name of your department?',
        }
    ]).then(ans => {
        console.log('ANSWERL ', ans);
        const departmentName = ans.department_name;

        db.addDepartment(departmentName)
        .then(() => console.log(`Department ${departmentName} added`))
        .then(() => //load prompts)
        )
    })
}

const addRole = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'role_title',
            message: 'What is the name of this role?',
        },
        {
            type: 'input',
            name: 'role_salary',
            message: 'How much does this role pay?',
        },
        {
            type: 'input',
            name: 'role_department',
            message: 'What department is this role found in?',
        },
    ])
}

const addEmployee = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'employee_firstName',
            message: 'What is the first name of the employee?',
        },
        {
            type: 'input',
            name: 'employee_lastName',
            message: 'What is the last name of this employee?',
        },
        {
            type: 'input',
            name: 'employee_role',
            message: 'What role does this employee have in the company?',
        },
        {
            type: 'input',
            name: 'employee_manager',
            message: 'Who is the manager of the employee?',
        },
    ])
}

const viewDepartments = () => {
    db.departments()
    .then(([departments]) => {
        // do whatever you need with departments
        console.table(departments);
    }).then(() => mainmenu());
}