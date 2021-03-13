var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("deparment: " + this.name);
    };
    Department.prototype.addemployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.addemployee("Mamadou");
accounting.addemployee("james");
console.log(accounting);
