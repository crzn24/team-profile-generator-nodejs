const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  





// test("makes an employee object", () => {
//     const employee = new Employee("Luke");
// });


// Can instantiate Employee instance
// Can set name via constructor arguments
// Can set id via constructor argument (1ms)
// Can set email via constructor argument
// Can get name via getName) (2ms)
// Can get id via getIdO (2ms)
// Can get email via getEmail/ (4ms)
// getRole() should return "Emplovee"