
const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    departments () {
        return this.connection.promise().query(
            "SELECT department.id, department.name FROM department;"
        )
    }
    
    role () {
        return this.connection.promise().query (
            "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles LEFT JOIN department on roles.department_id = department_id"
        )
    }
    employee () {
        return this.connection.promise().query (
            "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles on employee.role_id = roles.id LEFT JOIN department on roles.department_id = department_id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }
    
    addDepartment = () => {
        return this.connection.promise().query (
            "INSERT INTO department (name) VALUES (?);"
        );
    }
    
    addRole = () => {
        return this.connection.promise().query (
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);"
        );
    }
    
    addEmployee = () => {
        return this.connection.promise().query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);"
        );
    }
    
    updateEmployee = () =>  {
        return this.connnection.promise().query(
            "UPDATE employee.id, employee.first_name, employee.last_name, role.id, CONCAT(manager.first_name, ' ', manager.last_name AS manager FROM employee LEFT JOIN roles on employee.role_id = roles.id;"
        )
    }
}

module.exports = new DB (connection);
// new DB (connection) was there first to export the connection