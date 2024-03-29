var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// public, private, protected, readonly (these are access modifier)
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age, ", studentId: ").concat(this.studentId));
    };
    Student.prototype.setStudentId = function (id) {
        this.studentId = id;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student;
}(User));
// let student1 = new Student("Rana", 31, 162);
// student1.setStudentId(2010305162);
// console.log(student1.getStudentId());
var user1 = new User("Helal", 19);
console.log(user1.userName);
user1.display();
