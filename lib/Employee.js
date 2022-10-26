const fs = require('fs');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "";
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        this.role = "Employee";
        return this.role;
    }

    testFunc() {
        console.log("Hello World!");
    }
};

module.exports = Employee;