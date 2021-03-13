var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("deparment: " + this.name);
    };
    Department.prototype.addemployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
var ITDeprtment = /** @class */ (function (_super) {
    __extends(ITDeprtment, _super);
    function ITDeprtment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDeprtment;
}(Department));
var NewITDepartment = new ITDeprtment("d2", ['Max', 'randle']);
// const accounting = new Department('D1','Accounting')
NewITDepartment.addemployee("Mamadou");
NewITDepartment.addemployee("james");
console.log(NewITDepartment);
