const department = require('../lib/department');
const employee = require('../lib/employee');
const role = require('../lib/role');
const mysql = require('mysql2');
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database:'incorperated_db'
    }, 
    console.log('Connected to the incorpoerated_db database!')
)

class DB {
    constructor (connection) {
        this.connection = connection;
    }

    departments () {
        return this.connection.promise().query(
            "SELECT department.id, department.name;"
        )
    }
    
    role () {
        return this.connection.promise().query (
            "SELECT roles.id, roles.title, department.name AS department.name AS department, roles.salary FROM roles LEFT JOIN department on roles.department-id = department_id"
        )
    }
    employee () {
        return this.connection.promise().query (
            "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles on employee.role_id = roles.id LEFT JOIN department on roles.department-id = department_id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }
    
    addDepartment () {
        return this.connection.promise().query (
            "SELECT "
        )
    }
    
    addRole () {
        console.log("departments");
    }
    
    addEmployee () {
        console.log("departments");
    }
    
    updateEmployee = () =>  {
        console.log("departments");
    }
}

module.exports = new DB ();
// new DB (connection) was there first to export the connection