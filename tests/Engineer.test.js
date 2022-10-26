const Engineer = require('../lib/Engineer');

describe('Engineer sub class', () => {
    it('Should inherit the properties of class Employee', () => {
        const engineer = new Engineer("Daniel", 3, "dannynike98@gmail.com", "dannyjunlee");

        expect(engineer).toEqual({
            name: "Daniel",
            id: 3,
            email: "dannynike98@gmail.com",
            github: "dannyjunlee"
        });
    });

    it('Should override role to Engineer', () => {
        const engineer = new Engineer("Daniel", 3, "dannynike98@gmail.com", "dannyjunlee");
        expect(engineer.role).toEqual("Engineer");
    });
})