const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test("Can set school via constructor", () => {
    const testValue = "UW";
    const int = new Intern("Luke", 1, "intern@email.com", testValue);
    expect(int.school).toBe(testValue);
});

test("getRole() should return 'Intern'", () => {
    const testValue = 'Intern';
    const int = new Intern("Luke", 1, "intern@email.com", "UW");
    expect(int.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UW";
    const int = new Intern("Luke", 1, "intern@email.com", testValue);
    expect(int.getSchool()).toBe(testValue);
});


// Can set school via constructor
// getRole() should return "Intern"
// Can get school via getSchool()