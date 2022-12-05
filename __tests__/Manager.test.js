const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const m = new Manager("Luke", 1, 'manager@email.com', testValue);
    expect(m.officeNumber).toBe(testValue);
});

test("getRole() should return 'Manager'", () => {
    const testValue = 'Manager';
    const m = new Manager("Luke", 1, 'manager@email.com', 100);
    expect(m.getRole()).toBe(testValue);
});

test("Can get office number via getOffice", () => {
    const testValue = 100;
    const m = new Manager("Luke", 1, 'manager@email.com', testValue);
    expect(m.getOfficeNumber()).toBe(testValue);
});


// Can set office number via constructor argument
// getRole() should return "Manager"
// Can get office number via getOffice