const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test ("Can set GitHub account via constructor", () => {
    const testValue = "MyGitHub";
    const e = new Engineer("Luke", 1, "engineer@email.com", testValue);
    expect(e.github).toBe(testValue);
});

test ("getRole() should return 'Engineer'", () => {
    const testValue = 'Engineer';
    const e = new Engineer("Luke", 1, "engineer@email.com", "MyGitHub");
    expect(e.getRole()).toBe(testValue);
});

test ("Can get GitHub username via getGithub()", () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer("Luke", 1, "engineer@email.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});



// Can set GitHub account via constructor
// getRole() should return "Engineer"
// Can get GitHub username via getGithub()