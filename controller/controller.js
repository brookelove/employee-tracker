// area created for the controlling tracker system
const mysql = require ('mysql2');
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
    console.log("departments");
}

const employees = () =>  {
    console.log("employees");
}
const role = () => {
    console.log('role');
}
const addDepartment = () =>  {
    console.log("departments");
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