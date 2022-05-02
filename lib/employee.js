// this will house the employee inforamtion when adding an employee
class Employee {
    constructor (first_name, last_name, role, manager) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.role = role;
        this.manager = manager;
    }
    getFirstName () {
        return this.first_name;
    }
    getLastName () {
        return this.last_name;
    }
    getrole () {
        return this.rule;
    }
    getManager () {
        return this.manager;
    }
}