// area created for the controlling tracker system
const inquirer = require('inquirer');
const mysql = require ('mysql2');
const Department = require ('./lib/department')
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database:'incorperated_db'
    }, 
    console.log('Connected to the incorpoerated_db database!')
)
const departments = () =>  {
    db.query('SELECT id, name AS title FROM departments', function (err, results) {
        console.table(results);
    })
}

const employees = () =>  {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
    })
}

const role = () => {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
    })
}

const addDepartment = () =>  {
    inquirer.prompt ([
        {
            input: 'text',
            message: "What is your departments name?",
            name: 'name'
        },
    ]).then (ans => {
        const sql = 'INSERT INTO deparments (name) VALUES (?)';
        db.query(sql, ans.name, (err, result) => {
            ans.name
        })
        // const newDepart = new Department (ans.Department);
        // db.query(department.push(newDepart));
    })
}

const addRole = () =>  {
    console.log("departments");
}

const addEmployee = () =>  {
    console.log("departments");
}

const updateEmployee = () =>  {
    console.log("departments");
}

module.exports = departments, employees, role, addDepartment, addRole, addEmployee, updateEmployee;