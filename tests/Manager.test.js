const Manager = require('../lib/Manager');

describe('Manager sub class', () => {
    it('Should inherit the properties of class Employee', () => {
        const manager = new Manager("Danny", 1, "dl667@cornell.edu", "101");

        expect(manager).toEqual({
            name: "Danny",
            id: 1,
            email: "dl667@cornell.edu",
            officeNumber: "101"
        });
    });

    it('Should override role to Manager', () => {
        const manager = new Manager("Danny", 1, "dl667@cornell.edu", "101");
        expect(manager.role).toEqual("Manager");
    });
})