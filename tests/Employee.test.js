const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('Initialization', () => {
        it('Should create an object with the name, id, email properties', () => {
            const employee = new Employee("Alec", 2, "alec@fakeemail.com");

            expect(employee).toEqual({
                name: "Alec",
                id: 2,
                email: "alec@fakeemail.com"
            });
        });

        it('Should throw an error if provided no arguments', () => {
            const cb = () => new Employee();
            expect(cb).toThrow();
        });

        it('Should throw an error if not provided an ID or email', () => {
            const cb = () => new Employee("Alec", "alec@fakeemail.com");
            const err = new Error("Expected parameter 'age' to be a non-negative number");
            expect(cb).toThrowError(err);
        });

        it('Should throw an error if name is not a string', () => {
            const cb = () => new Employee(1, 2, "alec@fakeemail.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            expect(cb).toThrowError(err);
        });

        it('Should throw an error if ID is not a number', () => {
            const cb = () => new Employee("Alec", "two", "alec@fakeemail.com");
            const err = new Error("Expected parameter 'ID' to be a non-negative number");
            expect(cb).toThrowError(err);
        });

        it('Should throw an error if email is not a string', () => {
            const cb = () => new Employee("Alec", 2, 3);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
            expect(cb).toThrowError(err);
        });
    });
    describe('getName', () => {
        it('Returns value of employee name', () => {
            expect(new Employee("Alec", 2, "alec@fakeemail.com").getName().toEqual("Alec"));
        });
    });
    describe('getID', () => {
        it('Returns numeric value of employee ID', () => {
            expect(new Employee("Alec", 2, "alec@fakeemail.com").getID().toEqual(2));
        });
    });
    describe('getEmail', () => {
        it('Returns value of employee email', () => {
            expect(new Employee("Alec", 2, "alec@fakeemail.com").getEmail().toEqual("alec@fakeemail.com"));
        });
    });
    describe('getRole', () => {
        it('Returns "Employee"', () => {
            expect(new Employee("Alec", 2, "alec@fakeemail.com").getRole().toEqual('Employee'));
        });
    });
});