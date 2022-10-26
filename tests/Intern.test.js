const Intern = require('../lib/Intern');

describe('Intern sub class', () => {
    it('Should inherit the properties of class Employee', () => {
        const intern = new Intern("Jun", 4, "dl667@cornell.edu", "Cornell");

        expect(intern).toEqual({
            name: "Jun",
            id: 4,
            email: "dl667@cornell.edu",
            school: "Cornell"
        });
    });

    it('Should override role to Intern', () => {
        const intern = new Intern("Jun", 4, "dl667@cornell.edu", "Cornell");
        expect(intern.role).toEqual("Intern");
    });
})