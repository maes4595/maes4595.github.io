// Problem 1: Create JSON for each employee
const employees = [
  { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
  { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
  { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

// Problem 2: Create JSON for the company
const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees
};

// Problem 3: Add new employee to the company
const anna = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(anna);

// Problem 4: Calculate total salary for all company employees
let totalSalary = 0;
company.employees.forEach(function(employee) {
  totalSalary += employee.salary;
});
console.log("Total salary for all employees: $" + totalSalary);

// Problem 5: Give raises to eligible employees
function giveRaises(company) {
  company.employees.forEach(function(employee) {
    if (employee.raiseEligible) {
      employee.salary *= 1.1;
      employee.raiseEligible = false;
    }
  });
}

giveRaises(company);
console.log(company);

// Problem 6: Update employees working from home
const wfhEmployees = ['Anna', 'Sam'];
company.employees.forEach(function(employee) {
  if (wfhEmployees.includes(employee.firstName)) {
    employee.wfh = true;
  } else {
    employee.wfh = false;
  }
});

console.log(company);
